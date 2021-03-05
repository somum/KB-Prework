import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';


//search
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../expansionpanel/../../product.service'

//Advance Search
import { ProductAdvanceSearchService } from '../expansionpanel/../../product-advance-search.service'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ProductService]//search
})
export class NavbarComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  //Audio
  isAdvanceSearchResult = false;
  advanceSpeechProduct: object;
  isRecording = false;
  recordedTime;
  blobUrl;
  blobUrlDownload: string;
  blobData;




  constructor(private searchService: ProductService, private productAdvanceSearchService: ProductAdvanceSearchService, private sanitizer: DomSanitizer) {

    //productsearch
    // this.searchService.search(this.searchTerm$)
    //   .subscribe(results => {
    //     this.results = results;
    //     console.log(results)
    //   });


    //Audio comp
    this.productAdvanceSearchService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.productAdvanceSearchService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;

      if (parseInt(this.recordedTime.split(':')[1]) == 3) {
        this.stopRecording()
        this.updatefile()
      }

    });

    this.productAdvanceSearchService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.blobUrlDownload = URL.createObjectURL(data.blob)
      this.blobData = data.blob
    });

    //End audio comp


  }

  alert: boolean = true
  ngOnInit(): void {
    this.detectWebcam()
    this.getSearchOption('0')
  }

  closeAlert() {
    this.alert = false
  }


  //speech & image search

  searchResults = true;

  // Audio Search
  audioSearch = false;
  setAudioSearch() {
    this.isAdvanceSearchResult = false;
    this.audioSearch = !this.audioSearch;
    this.imageSearch = false
  }

  listening = false
  setListening() {
    this.listening = !this.listening
    this.startRecording();
  }

  // Image/Webcam Search
  imageSearch = false;
  setImageSearch() {
    this.isAdvanceSearchResult = false;
    this.imageSearch = !this.imageSearch;
    this.audioSearch = false
  }
  public imageSrc = null;

  // Image Search
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    if (files.item(0).size > 10485760) {
      alert("Image size exceeds the upload limit (10MB)")
    } else {
      this.fileToUpload = files.item(0);
      const formdata = new FormData();

      formdata.append("file", this.fileToUpload);
      this.productAdvanceSearchService.sendImage(formdata).subscribe(
        success => {
          console.log(success);
          this.productAdvanceSearchImage(success)
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  // Webcam Search
  webcamState = 0 // 0 = initialized, 1 = webcam on, 2 = webcam off
  public webcam = false
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
    this.webcamState = 0
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.imageSrc = webcamImage.imageAsDataUrl;
    const file = DataURIToBlob(this.imageSrc)

    //API
    const formdata = new FormData();

    formdata.append("file", file);
    this.productAdvanceSearchService.sendImage(formdata).subscribe(
      success => {
        console.log(success);
        this.productAdvanceSearchImage(success)
      },
      error => {
        console.log(error);
      }
    );

    //convert URL to Blob  
    function DataURIToBlob(dataURI: string) {
      const splitDataURI = dataURI.split(',')
      const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
      const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

      const ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

      return new Blob([ia], { type: mimeString })
    }

  }


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  detectWebcam() {
    let md = navigator.mediaDevices;
    if (!md || !md.enumerateDevices) {
      this.webcam = false
    };
    md.enumerateDevices().then(devices => {
      if (devices.some(device => 'videoinput' === device.kind)) {
        this.webcam = true
      };
    })
  }

  checkWebcam() {
    this.detectWebcam()
    if (this.webcam) {
      this.webcamState = 1
    } else {
      this.webcamState = 2
    }
  }

  productAdvanceSearchImage(term) {
    this.searchService.searchAdvanceListImage(term).subscribe((res) => {
      console.log(res);
      this.advanceSpeechProduct = res;
      this.isAdvanceSearchResult = true;


    })
  }



  //Start Audio

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.productAdvanceSearchService.startRecording();
    }

  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.productAdvanceSearchService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.productAdvanceSearchService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  download() {
    //var FileSaver = require('file-saver');
    //saveAs(this.blobUrlDownload, "test.wav");
  }


  //POST
  async updatefile() {
    const formdata = new FormData();
    formdata.append("file", this.blobData);
    this.productAdvanceSearchService.sendAudio(formdata).subscribe(
      success => {
        console.log(success.keyword);
        this.productAdvanceSearchAudio(success.keyword)

      },
      error => {
        console.log(error);
      }
    );
  }


  productAdvanceSearchAudio(term) {
    this.searchService.searchAdvanceListAudio(term).subscribe((res) => {
      console.log(res);
      this.advanceSpeechProduct = res;
      this.isAdvanceSearchResult = true;
      console.log(this.isAdvanceSearchResult)

    })
  }



  //user dropdown
  menu = false
  setMenu(val) {
    this.menu = val
  }

  // CART STATE START

  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name);
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      this.searchService.myCart(this.cartProductList);
      return;
    }
    productExistInCart.num += 1;

    this.searchService.myCart(this.cartProductList);

  }

  subProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name);
    if (productExistInCart) {
      productExistInCart.num -= 1;
    }

  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)


  }



  // CART STATE END



  //search option
  searchoption: any;
  getSearchOption(e: any) {
    this.searchoption = e;
    console.log(this.searchoption);

    if (this.searchoption == 0) {

      this.searchService.searchAll(this.searchTerm$)
        .subscribe(results => {
          this.results = results;
          console.log(results)
        });
    }

    if (this.searchoption == 1) {

      this.searchService.searchTitle(this.searchTerm$)
        .subscribe(results => {
          this.results = results;
          console.log(results)
        });
    }

  }

}

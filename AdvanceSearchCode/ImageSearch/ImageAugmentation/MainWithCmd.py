import sys
import imgaug as ia
from imgaug import augmenters as iaa
import numpy as np
import imageio

ia.seed(1)

img = imageio.imread(str(sys.argv[1])+'/'+str(sys.argv[2])) #read image from cmd
images = np.array(
    [img for _ in range(100)], dtype=np.uint8)  # 100 enhanced images using following methods.
sometimes = lambda aug: iaa.Sometimes(0.5, aug)
seq = iaa.Sequential(
    [
        # apply the following augmenters to images
        iaa.Fliplr(0.5), 
        iaa.Flipud(0.2), 
       
        sometimes(iaa.CropAndPad(
            percent=(-0.05, 0.1),
            pad_mode=ia.ALL,
            pad_cval=(0, 255)
        )),
        sometimes(iaa.Affine(
            scale={
                "x": (0.8, 1.2),
                "y": (0.8, 1.2)
            },
            translate_percent={
                "x": (-0.2, 0.2),
                "y": (-0.2, 0.2)
            },
            rotate=(-25, 25),
            shear=(-8, 8))),
        
        
        iaa.SomeOf((0, 5),
            [
                sometimes(iaa.Superpixels(p_replace=(0, 1.0), n_segments=(20, 200))), 
                iaa.OneOf([
                    iaa.GaussianBlur((0, 3.0)), 
                    iaa.AverageBlur(k=(2, 7)), 
                    iaa.MedianBlur(k=(3, 11)), 
                ]),
                iaa.Sharpen(alpha=(0, 1.0), lightness=(0.75, 1.5)), 
                iaa.Emboss(alpha=(0, 1.0), strength=(0, 2.0)), 
                
                
                iaa.SimplexNoiseAlpha(iaa.OneOf([
                    iaa.EdgeDetect(alpha=(0.5, 1.0)),
                    iaa.DirectedEdgeDetect(alpha=(0.5, 1.0), direction=(0.0, 1.0)),
                ])),
                iaa.AdditiveGaussianNoise(loc=0, scale=(0.0, 0.05*255), per_channel=0.5), 
                iaa.OneOf([
                    iaa.Dropout((0.01, 0.1), per_channel=0.5), 
                    iaa.CoarseDropout((0.03, 0.15), size_percent=(0.02, 0.05), per_channel=0.2),
                ]),
                iaa.Invert(0.05, per_channel=True), 
                iaa.Add((-10, 10), per_channel=0.5), 
                iaa.AddToHueAndSaturation((-20, 20)), 
                
                
                iaa.OneOf([
                    iaa.Multiply((0.5, 1.5), per_channel=0.5),
                    iaa.FrequencyNoiseAlpha(
                        exponent=(-4, 0),
                        first=iaa.Multiply((0.5, 1.5), per_channel=True),
                        second=iaa.LinearContrast((0.5, 2.0))
                    )
                ]),
                iaa.LinearContrast((0.5, 2.0), per_channel=0.5), 
                iaa.Grayscale(alpha=(0.0, 1.0)),
                sometimes(iaa.ElasticTransformation(alpha=(0.5, 3.5), sigma=0.25)), 
                sometimes(iaa.PiecewiseAffine(scale=(0.01, 0.05))), 
                sometimes(iaa.PerspectiveTransform(scale=(0.01, 0.1)))
            ],
            random_order=True
        )
    ],
    random_order=True
)
images_aug = seq(images=images)

images_aug = seq.augment_images(images)

#saving into folder Augmented images
for i in range(100):
    imageio.imwrite(str(sys.argv[1])+'/'+str(i)+'new.jpg', images_aug[i])  
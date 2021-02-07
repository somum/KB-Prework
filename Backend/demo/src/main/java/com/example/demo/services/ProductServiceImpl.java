package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ProductDao;
import com.example.demo.entities.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	public ProductServiceImpl() {}

	@Override
	public List<Product> getProducts() {
		
		return productDao.findAll();
	}

	@Override
	public Product getProducts(long productId) {
	
		return productDao.findById(productId).get();
	}

	@Override
	public Product addProduct(Product product) {
		productDao.save(product);
		return product;
	}

	@Override
	public Product deleteProduct(long productId) {
		
		//removing item from list according Id and regenerating list
		Product entity = productDao.getOne(productId);
		productDao.delete(entity);
		return null;
	}

	@Override
	public Product updateProduct(Product product) {
		
		productDao.save(product);

		return product;
	}
	
}



//previous

//@Service
//public class CourseServiceImpl implements CourseService {
//	
//	List<Course> list;
//	
//public CourseServiceImpl() {
//		
//		list= new ArrayList<>();
//		list.add(new Course(111,"Java course","This is vois"));
//		list.add(new Course(112,"Spring course","This is Imp"));
//	}
//
//	@Override
//	public List<Course> getCourses() {
//		// TODO Auto-generated method stub
//		return list;
//	}
//
//	@Override
//	public Course getCourses(long courseId) {
//		Course c=null;
//		
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		} 
//		return c;
//	}
//
//	@Override
//	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
//	}
//
//	@Override
//	public Course deleteCourse(long courseId) {
//		
//		//removing item from list according Id and regenerating list
//		list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
//		return null;
//	}
//
//	@Override
//	public Course updateCourse(Course course) {
//		
//		list.forEach(e->{
//			if (e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
//		
//		return course;
//	}
//	
//}	


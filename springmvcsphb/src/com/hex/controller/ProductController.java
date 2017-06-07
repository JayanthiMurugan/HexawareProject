/**
 * 
 */
/**
 * @author 31984
 *
 */
package com.hex.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.hex.service.IProduct;
import com.hex.util.HexApplicationException;
import com.hex.util.ProductForm;
import com.hex.vo.Product;

@Controller
class ProductController {

	@Autowired
	@Qualifier("productService")
	IProduct productService;
	
	
	@RequestMapping(value = "/ProductSearch", method = { RequestMethod.POST,
			RequestMethod.GET })
	public ModelAndView productSearch(@ModelAttribute("command") Product product,HttpServletRequest request, BindingResult result)
			throws HexApplicationException {
		Map<String, Object> model = new HashMap<String, Object>();
		List<String> searchFiledOptions = getSearchFieldOptions();
		model.put("searchFieldOptions", searchFiledOptions);
		model.put("searchTxt", "");
		String fieldValue = request.getParameter("searchtxt");
		String columnName = request.getParameter("searchField");
		System.out.println("fieldvalue--------->>>"+fieldValue);
		System.out.println("columnName--------->>>"+columnName);
		List<Product> productList = productService.search(fieldValue, columnName);
		ProductForm productForm = new ProductForm();
		productForm.setProducts(productList);
		model.put("productForm", productForm);
		return new ModelAndView("ProductList",model);
	}

	@RequestMapping(value = "/ProductList", method = { RequestMethod.POST,
			RequestMethod.GET })
	public ModelAndView productList() throws HexApplicationException {
		Map<String, Object> model = new HashMap<String, Object>();
		List<Product> productList = getProductList((List<Product>)productService.getAllProduct());
		ProductForm productForm = new ProductForm();
		productForm.setProducts(productList);
		model.put("productForm", productForm);
		List<String> searchFiledOptions = getSearchFieldOptions();
		model.put("searchFieldOptions", searchFiledOptions);
		model.put("searchTxt", "");
		return new ModelAndView("ProductList",model);
	}

	@RequestMapping(value = "/ProductAdd", method = { RequestMethod.POST,
			RequestMethod.GET })
	public ModelAndView product(@ModelAttribute("productForm") ProductForm productForm) throws HexApplicationException {
		return new ModelAndView("ProductAdd", "productForm", new Product());

	}

	@RequestMapping(value = "/AddProduct", method = { RequestMethod.POST,
			RequestMethod.GET })
	public String productAdd(@ModelAttribute("productForm") Product product, BindingResult result)
			throws HexApplicationException {
		Product productBean = getProduct(product);
		productService.insert(productBean);
		return "redirect:/ProductList";
	}

	@RequestMapping(value = "/ProductEdit", method = { RequestMethod.POST,
			RequestMethod.GET })
	public ModelAndView productEdit(@RequestParam("id") int id,  @ModelAttribute("command") Product product, BindingResult result) throws HexApplicationException {
		Map<String, Object> model = new HashMap<String, Object>();
		List<Product> productList = (List<Product>) productService.getAllProduct();
		for(Product obj: productList){
			if(obj.getProductid() == id){
				model.put("product", obj);
			}
		}
		return new ModelAndView("ProductEdit",model);
	}

	@RequestMapping(value = "/ProductUpdate", method = { RequestMethod.POST,
			RequestMethod.GET })
	public String productUpdate(@ModelAttribute("command") Product product, BindingResult result)
			throws HexApplicationException {
		Product productBean = getProduct(product);
		productService.update(productBean);
		return "redirect:/ProductList";
	}

	@RequestMapping(value = "/ProductDelete", method = { RequestMethod.POST,
			RequestMethod.GET })
	public String productDelete(
			@ModelAttribute("command") ProductForm productForm, ModelMap model) throws HexApplicationException {
		if (productForm != null) {
			List<Product> tobeDeleted = new ArrayList<>();
			for (Product product : productForm.getProducts()) {
				if (product.getToBeDeleted())
					tobeDeleted.add(product);
			}
			productService.deleteAll(tobeDeleted);
		}
		return "redirect:/ProductList";
		
	}
	

	private Product getProduct(Product productBean) {
		Product product = new Product();
		
				product.setProductid(productBean.getProductid());
				product.setName(productBean.getName());
				product.setCategoryid(productBean.getCategoryid());
				product.setDescription(productBean.getDescription());
				product.setAction(productBean.getAction());
				product.setPrice(productBean.getPrice());
				product.setQuantity(productBean.getQuantity());
				product.setCreateddate(new Date());
				product.setCreatedby(productBean.getCreatedby());
				product.setModifieddate(new Date());
				product.setModifiedby(productBean.getModifiedby());
			product.setHashcode(productBean.getHashcode());
			product.setToBeDeleted(productBean.getToBeDeleted());
		return product;
	}

	private List<Product> getProductList(List<Product> productList) {
		List<Product> products = null;
		if (productList != null && !productList.isEmpty()) {
			products = new ArrayList<Product>();
			Product product = null;
			for (Product productBean : productList) {
				product = new Product();
				
				product.setProductid(productBean.getProductid());
				product.setName(productBean.getName());
				product.setCategoryid(productBean.getCategoryid());
				product.setDescription(productBean.getDescription());
				product.setAction(productBean.getAction());
				product.setPrice(productBean.getPrice());
				product.setQuantity(productBean.getQuantity());
				product.setCreateddate(new Date());
				product.setCreatedby(productBean.getCreatedby());
				product.setModifieddate(new Date());
				product.setModifiedby(productBean.getModifiedby());
				product.setHashcode(productBean.getHashcode());
				product.setToBeDeleted(productBean.getToBeDeleted());
				products.add(product);
			}
		}
		return products;
	}
	
	private List<String> getSearchFieldOptions() {
		List<String> searchFieldOptions = new ArrayList<>();
		searchFieldOptions.add("--Select the Field--");
		
		searchFieldOptions.add("productid");
		searchFieldOptions.add("name");
		searchFieldOptions.add("categoryid");
		searchFieldOptions.add("description");
		searchFieldOptions.add("action");
		searchFieldOptions.add("price");
		searchFieldOptions.add("quantity");
		searchFieldOptions.add("createddate");
		searchFieldOptions.add("createdby");
		searchFieldOptions.add("modifieddate");
		searchFieldOptions.add("modifiedby");
		return searchFieldOptions;
	}
}

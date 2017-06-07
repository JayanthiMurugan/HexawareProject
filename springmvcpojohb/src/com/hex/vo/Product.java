package com.hex.vo;

import java.util.Date;
import java.io.Serializable;

public class Product implements Serializable {
	
	private Integer productid;
	private String name;
	private Integer categoryid;
	private String description;
	private String action;
	private Integer price;
	private Integer quantity;
	private Date createddate=null;
	private String createdby;
	private Date modifieddate=null;
	private String modifiedby="";


	private Integer hashcode=-1;
	private Boolean toBeDeleted=false;

    public void setHashcode(Integer newValue) { 
		hashcode = newValue; 
	}

	public Integer getHashcode() { 
		return hashcode;
 	}
	
	public Boolean getToBeDeleted() {
		return toBeDeleted;
	}

	public void setToBeDeleted(Boolean toBeDeleted) {
		this.toBeDeleted = toBeDeleted;
	}

	public void setProductid(Integer newValue) { 
		productid = newValue; 
	}

	public Integer getProductid() { 
		return productid;
 	}

	public void setName(String newValue) { 
		name = newValue; 
	}

	public String getName() { 
		return name;
 	}

	public void setCategoryid(Integer newValue) { 
		categoryid = newValue; 
	}

	public Integer getCategoryid() { 
		return categoryid;
 	}

	public void setDescription(String newValue) { 
		description = newValue; 
	}

	public String getDescription() { 
		return description;
 	}

	public void setAction(String newValue) { 
		action = newValue; 
	}

	public String getAction() { 
		return action;
 	}

	public void setPrice(Integer newValue) { 
		price = newValue; 
	}

	public Integer getPrice() { 
		return price;
 	}

	public void setQuantity(Integer newValue) { 
		quantity = newValue; 
	}

	public Integer getQuantity() { 
		return quantity;
 	}

	public void setCreateddate(Date newValue) { 
		createddate = newValue; 
	}

	public Date getCreateddate() { 
		return createddate;
 	}

	public void setCreatedby(String newValue) { 
		createdby = newValue; 
	}

	public String getCreatedby() { 
		return createdby;
 	}

	public void setModifieddate(Date newValue) { 
		modifieddate = newValue; 
	}

	public Date getModifieddate() { 
		return modifieddate;
 	}

	public void setModifiedby(String newValue) { 
		modifiedby = newValue; 
	}

	public String getModifiedby() { 
		return modifiedby;
 	}



 
}

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Product Application</title>
<script src="/SpringMvcSpHb/js/ui-bootstrap-tpls-1.2.4.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<link rel="stylesheet" href="/SpringMvcSpHb/css/style-Angular.css"/>
</head>
<body>
	<div id="wrapper">
		<!-- Sidebar -->
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a href="#"> <img
						src="/SpringMvcSpHb/images/logo.png" />
				</a></li>
				<li><a href="/SpringMvcSpHb/ProductList"><img src="/SpringMvcSpHb/images/list.png" />Product List</a></li>

			</ul>
		</div>
		<!-- /#sidebar-wrapper -->

		<br />
		<br />
		<div id="page-content-wrapper">
			<div class="container-fluid">

				<div>
					<div class="breadcrumb">
						<div class="breadcrumbtext">Product-List</div>
						<br>
					</div>
					<form:form action="/SpringMvcSpHb/ProductSearch" method="post">
						<input type="text" name="searchtxt" value="${searchTxt}">
						<select name="searchField" class="dropdown" >
							<c:forEach var="searchFieldOption" items="${searchFieldOptions}">
								<option value="${searchFieldOption}">${searchFieldOption}</option>
							</c:forEach>
						</select> 
						<input type="submit" class="btn btn-default" value="SEARCH"> 
						<input type="reset"
							class="btn btn-default" value="Clear" onclick="location.href='/SpringMvcSpHb/ProductList'"><br />
						<br />
					</form:form>
					
					<form:form action="/SpringMvcSpHb/ProductDelete" method="post" commandName="productForm">
					<table
						class="table table-striped table-condensed table-bordered table-hover">
						<tr>
							<th>Productid</th>
							<th>Name</th>
							<th>Categoryid</th>
							<th>Description</th>
							<th>Action</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Createddate</th>
							<th>Createdby</th>
							<th>Modifieddate</th>
							<th>Modifiedby</th>
							
							<th>DELETE</th>
						<tr>
						<c:forEach var="product" items="${productForm.products}" varStatus="status">
						<tr>
							<td><a href="/SpringMvcSpHb/ProductEdit?id=${product.productid}">${product.productid}</a>
							<form:hidden path="products[${status.index}].productid" value="${product.productid}"/></td>
							<td><label name="products[${status.index}].name">${product.name}</label></td>
							<td><label name="products[${status.index}].categoryid">${product.categoryid}</label></td>
							<td><label name="products[${status.index}].description">${product.description}</label></td>
							<td><label name="products[${status.index}].action">${product.action}</label></td>
							<td><label name="products[${status.index}].price">${product.price}</label></td>
							<td><label name="products[${status.index}].quantity">${product.quantity}</label></td>
							<td><label name="products[${status.index}].createddate">${product.createddate}</label></td>
							<td><label name="products[${status.index}].createdby">${product.createdby}</label></td>
							<td><label name="products[${status.index}].modifieddate">${product.modifieddate}</label></td>
							<td><label name="products[${status.index}].modifiedby">${product.modifiedby}</label></td>
							
							<td><form:checkbox path="products[${status.index}].toBeDeleted" /></td>	
						</tr>
						</c:forEach>
					</table>
					
					<input type="submit" class="btn btn-default" value="Delete" style="float: right"> 
					<input
						type="button" class="btn btn-default" value="Add"
						onclick="location.href='/SpringMvcSpHb/ProductAdd'" style="float: right">
					</form:form>

				</div>
			</div>


		</div>
	</div>
</body>
</html>

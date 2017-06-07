<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Hello Spring MVC</title>
<script src="/SpringMvcSpHb/js/ui-bootstrap-tpls-1.2.4.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<link rel="stylesheet" href="/SpringMvcSpHb/css/style-Angular.css"/>
</head>
<body>
	<div align="center" style="color: #FF0000">
		<c:if test="${not empty error}">
			<c:out value="${error}" />

		</c:if>
	</div>
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
			<div class="container-fluid"></div>
			<div class="rightcolumn">
				<div class="breadcrumb">
					<div class="breadcrumbtext">Product-Add</div>
					<br>
				</div>
				<form:form action="/SpringMvcSpHb/AddProduct" method="post" commandName="productForm">
					<table
						class="table table-striped table-condensed table-bordered table-hover">
							<tr>
							<td>Productid</td>
							<td><form:input id="productid" name="productid" path="productid"/><br></td>
						</tr>
						<tr>
							<td>Name</td>
							<td><form:input id="name" name="name" path="name"/><br></td>
						</tr>
						<tr>
							<td>Categoryid</td>
							<td><form:input id="categoryid" name="categoryid" path="categoryid"/><br></td>
						</tr>
						<tr>
							<td>Description</td>
							<td><form:textarea id="description" name="description" path="description" rows="4" cols="30"/><br></td>
						</tr>
						<tr>
							<td>Action</td>
							<td><form:checkbox id="action" path="action" value="Add"/>Add
<form:checkbox id="action" path="action" value="Edit"/>Edit
<br></td>
						</tr>
						<tr>
							<td>Price</td>
							<td><form:input id="price" name="price" path="price"/><br></td>
						</tr>
						<tr>
							<td>Quantity</td>
							<td><form:radiobutton id="quantity" name="quantity" path="quantity" value="100"/>100
<form:radiobutton id="quantity" name="quantity" path="quantity" value="200"/>200
<br></td>
						</tr>
						<tr>
							<td>Createddate</td>
							<td><form:input id="createddate" name="createddate" path="createddate"/><br></td>
						</tr>
						<tr>
							<td>Createdby</td>
							<td><form:select path="createdby" id="createdby"><form:option value="User" label="User"/>
<form:option value="Developer" label="Developer"/>
</form:select><br></td>
						</tr>
						<tr>
							<td>Modifieddate</td>
							<td><form:input id="modifieddate" name="modifieddate" path="modifieddate"/><br></td>
						</tr>
						<tr>
							<td>Modifiedby</td>
							<td><form:input id="modifiedby" name="modifiedby" path="modifiedby"/><br></td>
						</tr>
						
					</table>

					<input type="button" class="btn btn-default" value="List"
						onclick="location.href='/SpringMvcSpHb/ProductList'" style="float: right">
					<input type="submit" class="btn btn-default" value="Add"
						style="float: right;">
				</form:form>
			</div>

		</div>
</body>
</html>

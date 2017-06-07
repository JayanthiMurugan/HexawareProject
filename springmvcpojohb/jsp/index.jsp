<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Product Application</title>
<script src="/SpringMvcPojoHb/js/ui-bootstrap-tpls-1.2.4.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<link rel="stylesheet" href="/SpringMvcPojoHb/css/style-Angular.css"/>
<meta http-equiv="refresh" content="0; url=/SpringMvcPojoHb/ProductList" />
</head>
<body>
	<div id="wrapper">
		<!-- Sidebar -->
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand"><a href="#"> <img
						src="/SpringMvcPojoHb/images/logo.png" />
				</a></li>
				<li><a href="/SpringMvcPojoHb/ProductList"><img src="/SpringMvcPojoHb/images/list.png" />Product List</a></li>

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
					<form:form action="/SpringMvcPojoHb/ProductSearch" method="post">
						<input type="text" name="searchtxt" value="${searchTxt}">
						<select name="searchField" class="dropdown" >
							<c:forEach var="searchFieldOption" items="${searchFieldOptions}">
								<option value="${searchFieldOption}">${searchFieldOption}</option>
							</c:forEach>
						</select> 
						<input type="submit" class="btn btn-default" value="SEARCH"> 
						<input type="reset"
							class="btn btn-default" value="Clear" onclick="location.href='/SpringMvcPojoHb/ProductList'"><br />
						<br />
					</form:form>
					
					<form:form action="/SpringMvcPojoHb/ProductDelete" method="post">
					<table
						class="table table-striped table-condensed table-bordered table-hover">
						<tr>
						<tr>
					</table>
					
					<input type="submit" class="btn btn-default" value="Delete" style="float: right"> 
					<input
						type="button" class="btn btn-default" value="Add"
						onclick="location.href='/SpringMvcPojoHb/ProductAdd'" style="float: right">
					</form:form>

				</div>
			</div>


		</div>
	</div>
</body>
</html>

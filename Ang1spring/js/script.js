var customerApp = angular.module("customerApp", ['ngRoute']);

customerApp.config(function($routeProvider) {
	$routeProvider
		.when('/CustomerList', {
			templateUrl: 'CustomerList.html',
			controller: 'AddListController'
		})
		.when('/CustomerAdd', {
			templateUrl: 'CustomerAdd.html',
			controller: 'addController'
		})
		.otherwise({
			redirectTo: 'CustomerList'
		});
});

customerApp.service('shareData',function(){
	
	this. showAddButton = true;
	
	/*this.setCustomer = function(customer){
		this.customer = customer ;
	};
	
	this.getCustomer = function(){
		return this.customer;
	};
   
	this.setCustomers = function(customers){
		this.customers = customers;
	};
   
  	this.getCustomers = function(){
		return this.customers;
  	};*/
  	
  	/*this.setListPage = function(val){
		this.listPage = val;
	};
	 
	this.getListPage = function(){
		return this.listPage;
	};*/
	
	this.setShowAddButton = function(val){
		this.showAddButton = val;
	};
	
	this.getShowAddButton = function(){
		return this.showAddButton;
	};
	
	/*this.showListPage = function(){
		this.setListPage(true);
	};*/
  	
});

customerApp.controller('AddListController', ['$rootScope', '$location','$scope','listCustomers', 'deleteCustomers', 'searchCustomers','shareData', function($rootScope,$location,$scope, listCustomers, deleteCustomers, searchCustomers,shareData) {
	  $scope.searchtxt = '';
	  $scope.searchField = '--Select the Field--';
	  $scope.availableOptions = ["customerid","name","email","phone","address","orders","action","createddate","createdby","modifieddate","modifiedby","--Select the Field--"];
	
	   
	  $rootScope.setCustomer = function(customer){
			$rootScope.customer = customer;
	   }
	   $rootScope.getCustomer = function(){
			return $rootScope.customer;
	   }
	    $rootScope.setCustomers = function(customers){
			$rootScope.customers = customers;
			
	   }
	   $rootScope.getCustomers = function(){
			return $rootScope.customers;
	   }
	   
	   $rootScope.setListPage = function(val){
			$rootScope.listPage = val;
	   }
	   
	  /* $rootScope.setShowAddButton = function(val){
			$rootScope.showAddButton = val;
	   }*/
	   
	   $rootScope.showListPage = function(){
			$rootScope.setListPage(true);
	   }
	  
	   $scope.search = function(){
			console.log("Search Value : " + $scope.searchtxt);
			console.log("Search Field : " + $scope.searchField);
			var searchSuccess = function(response){
				$scope.setCustomers(response.data);
				$scope.figureOutCustomers();
			}
			var searchFailure = function(response){
				alert(response.data);
			}
			searchCustomers.call($scope.searchtxt, $scope.searchField, searchSuccess, searchFailure);
	   }
	    $scope.clear = function(){
			 $scope.searchtxt = '';
			$scope.searchField = '--Select the Field--';
			listCustomers.call(successList, failureList);
	   }
	   
	   
	  $scope.showAddPage = function(){
		console.log("Adding new Customer");
		$scope.setCustomer({});
		$scope.setListPage(false);
		shareData.setShowAddButton(true);
		$location.path( '/CustomerAdd' );
	  }
	  
	  $scope.deleteCustomers = function(){
		console.log("Deleting Customer(s)");
		var CustomersToBeDeleted = [];
		var customers = $scope.getCustomers();
		for(var i=0; i < customers.length; i++)
		{
			if(customers[i].delete){
				delete customers[i]['delete'];
				CustomersToBeDeleted.push(customers[i]);
			}
		}
		console.log(CustomersToBeDeleted);
		var success = function(response){
			alert(response.data);
			listCustomers.call(successList, failureList);
		}
		var failure = function(response){
			alert("Error" + response.data);
		}
		deleteCustomers.call(CustomersToBeDeleted, success, failure);
	  }
	  
	  
	  $scope.edit = function(editCustomer,$rootScope) {
			console.log("Edit Customer : " + editCustomer.customerid );
			$scope.setCustomer(editCustomer);
			$scope.setListPage(false);
			shareData.setShowAddButton(false);	
			$location.path("/CustomerAdd");
		}
		
		/*
		* Pagination
		*/
	  $scope.itemsPerPage = 10;
	  $scope.currentPage = 1;
	  
	  $scope.figureOutCustomers = function() {
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
		var end = begin + $scope.itemsPerPage;
		$scope.filteredCustomers = $scope.getCustomers().slice(begin, end);
	  };
	   
	  $scope.pageChanged = function() {
		$scope.figureOutCustomers();
	  };
	  
	  /*
	  *Shows list of customers.
	  */
	  var successList = function successCallback(response) {
				$scope.setCustomers(response.data);
				$scope.setListPage(true);
				$scope.figureOutCustomers();
		};
		var failureList = function errorCallback(response) {
				alert("Error : " + response.data);
		};
		listCustomers.call(successList, failureList);
	  
	}]);
	

customerApp.controller('addController', ['$scope', '$rootScope','addCustomer','$location', 'updateCustomer','shareData', function($scope,$rootScope, addCustomer,$location, updateCustomer,shareData) {
		/* $rootScope.showAddButton = true;*/
		
		console.log($scope.showAddButton );
		
		console.log(shareData.getShowAddButton());
		
		$scope.showAddButton = shareData.getShowAddButton();
		
		console.log($scope.showAddButton );
		
		$scope.list = function(){
			console.log("navigating to List Page");
			$scope.setListPage(true);
			$location.path( '/CustomerList' );
		}
		var addSuccess = function successCallback(response) {
				alert("Success : " + response.data);
				console.log($scope.getCustomer());
				$scope.getCustomers().push($scope.getCustomer());
				$location.path( '/CustomerList' );
				
				
		};
		var addFailure = function errorCallback(response) {
				alert("Error : " + response.data);
		};
		
		$scope.add = function(){
			 console.log("Adding new customer to DB : " + $scope.getCustomer().customerid); 
			addCustomer.call($scope.getCustomer(),addSuccess,addFailure);			
		}
		
		var updateSuccess = function successCallback(response) {
				alert("Success : " + response.data);
				$scope.setCustomer({});
				$scope.setListPage(true);
		};
		var updateFailure = function errorCallback(response) {
				alert("Error : " + response.data);
		};
		
		$scope.update = function(){
			console.log("Updating customer to DB : " + $scope.getCustomer().customerid);
			delete $scope.getCustomer()['delete'];
			updateCustomer.call($scope.getCustomer(),updateSuccess,updateFailure);
			$location.path('/CustomerList');
		}
	
	}]);

/*
	*	Customer Value service.
	*	This holds the value of customer object;
	*/
	customerApp.value("serverIp", "http://localhost:8080/");
	
	/*
	*	Add new customer service call.
	*	This service is used to add the new customer.
	*/
	customerApp.service('addCustomer', function($http,serverIp){
		this.call = function(customer, successCallBack, failureCallBack){
			$http({
				method: 'POST',
				url: serverIp + 'Ang1spring/rest/ws/save',
				data: customer,
			}).then(successCallBack, failureCallBack);
		};
	});
	
	/*
	*	Search Customer service call.
	*	This service is used to Search the customer with given searchData and searchField.
	*/
	customerApp.service('searchCustomers', function($http,serverIp){
		this.call = function(searchData, searchField, successCallBack, failureCallBack){
			$http({
				method: 'GET',
				url: serverIp + 'Ang1spring/rest/ws/search?searchValue=' + searchData + '&searchColumn=' + searchField,
			}).then(successCallBack, failureCallBack);
		};
	});
	
	/*
	*	Delete Customer service call.
	*	This service is used to delete the customer.
	*/
	customerApp.service('deleteCustomers', function($http,serverIp){
		this.call = function(customers, successCallBack, failureCallBack){
			$http({
				method: 'POST',
				url: serverIp + 'Ang1spring/rest/ws/delete',
				data: customers,
			}).then(successCallBack, failureCallBack);
		};
	});
	
	/*
	*	Update Customer service call.
	*	This service is used to Update the customer.
	*/
	customerApp.service('updateCustomer', function($http, serverIp){
		this.call = function(customer, successCallBack, failureCallBack){
			$http({
				method: 'POST',
				url: serverIp + 'Ang1spring/rest/ws/update',
				data: customer,
			}).then(successCallBack, failureCallBack);
		};
	});
	
	/*
	*	List Customers service call.
	*	This service is used to list all the customers.
	*/
	customerApp.service('listCustomers', function($http, serverIp){
		this.call = function(successCallBack, failureCallBack){
			$http({
				method: 'GET',
				url: serverIp + 'Ang1spring/rest/ws/list',
			}).then(successCallBack, failureCallBack);
		};
	});


	

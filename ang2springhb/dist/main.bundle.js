webpackJsonp([1,4],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedValue; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedValue = (function () {
    function SharedValue() {
    }
    SharedValue.prototype.setProduct = function (products) {
        this.product = products;
    };
    SharedValue.prototype.getProduct = function () {
        return this.product;
    };
    SharedValue.prototype.setValue = function (val) {
        this.showAddButton = val;
    };
    SharedValue.prototype.getValue = function () {
        return this.showAddButton;
    };
    SharedValue = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SharedValue);
    return SharedValue;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.service.SharedValue.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_configration__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = (function () {
    function ProductService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    ProductService.prototype.getAllProducts = function () {
        this.actionUrl = this.configuration.ServerWithBaseUrl +
            'list/';
        return this.http.get(this.actionUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProducts = function (products) {
        var body = JSON.stringify(products);
        this.actionUrl = this.configuration.ServerWithBaseUrl +
            'delete/';
        return this.http.post(this.actionUrl, body, this.options)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    ProductService.prototype.saveProduct = function (product) {
        var body = JSON.stringify(product);
        this.actionUrl = this.configuration.ServerWithBaseUrl +
            'save/';
        return this.http.post(this.actionUrl, body, this.options)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product) {
        var body = JSON.stringify(product);
        this.actionUrl = this.configuration.ServerWithBaseUrl +
            'update/';
        return this.http.post(this.actionUrl, body, this.options)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    ProductService.prototype.searchProduct = function (searchtxt, searchField) {
        this.actionUrl = this.configuration.ServerWithBaseUrl +
            'search?searchValue=' + searchtxt + '&searchColumn=' + searchField;
        return this.http.get(this.actionUrl, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw('Server error');
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_configration__["a" /* Configuration */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_services_configration__["a" /* Configuration */]) === 'function' && _b) || Object])
    ], ProductService);
    return ProductService;
    var _a, _b;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.service.products.js.map

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = ".table-striped>tbody>tr:nth-of-type(even) {\r\n\t\t\tbackground-color: #E3F8FA;\r\n\t\t}\r\n\t\t\r\n\t\t.table-striped>tbody>tr:nth-of-type(odd) {\r\n\t\t\tbackground-color: #B4E9ED;\r\n\t\t}\r\n\t\t\r\n\t\ttable {\r\n\t\t\tborder-collapse: collapse;\r\n\t\t\tborder-radius: 4px;\r\n\t\t}\r\n\t\t\r\n\t\tth {\r\n\t\t\tbackground-color: #ffffff;\r\n\t\t\t\r\n\t\t}\r\n\t\t\r\n\t\tinput,select{\r\n\t\t\t    height: 34px;\r\n\t\t\t    padding: 6px 12px;\r\n\t\t\t    font-size: 14px;\r\n\t\t\t    line-height: 1.42857143;\r\n\t\t\t    color: #555;\r\n\t\t\t    background-color: #fff;\r\n\t\t\t    background-image: none;\r\n\t\t\t    border: 1px solid #ccc;\r\n\t\t\t    border-radius: 4px;\r\n\t\t\t    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n\t\t\t    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n\t\t}\r\n\t\t\r\n\t\t/*!\r\n\t\t\t * Start Bootstrap - Simple Sidebar HTML Template (http://startbootstrap.com)\r\n\t\t\t * Code licensed under the Apache License v2.0.\r\n\t\t\t * For details, see http://www.apache.org/licenses/LICENSE-2.0.\r\n\t\t\t */\r\n\r\n\t\t\t/* Toggle Styles */\r\n\r\n\t\t\t#wrapper {\r\n\t\t\t    padding-left: 0;\r\n\t\t\t    transition: all 0.5s ease;\r\n\t\t\t}\r\n\r\n\t\t\t#wrapper.toggled {\r\n\t\t\t    padding-left: 250px;\r\n\t\t\t}\r\n\r\n\t\t\t#sidebar-wrapper {\r\n\t\t\t    z-index: 1000;\r\n\t\t\t    position: fixed;\r\n\t\t\t    left: 250px;\r\n\t\t\t    width: 0;\r\n\t\t\t    height: 100%;\r\n\t\t\t    margin-left: -250px;\r\n\t\t\t    overflow-y: auto;\r\n\t\t\t    background: #1ba8b3;\r\n\t\t\t    transition: all 0.5s ease;\r\n\t\t\t}\r\n\r\n\t\t\t#wrapper.toggled #sidebar-wrapper {\r\n\t\t\t    width: 250px;\r\n\t\t\t}\r\n\r\n\t\t\t#page-content-wrapper {\r\n\t\t\t    width: 100%;\r\n\t\t\t    position: absolute;\r\n\t\t\t    padding: 15px;\r\n\t\t\t}\r\n\r\n\t\t\t#wrapper.toggled #page-content-wrapper {\r\n\t\t\t    position: absolute;\r\n\t\t\t    margin-right: -250px;\r\n\t\t\t}\r\n\r\n\t\t\t/* Sidebar Styles */\r\n\r\n\t\t\t.sidebar-nav {\r\n\t\t\t    position: absolute;\r\n\t\t\t    top: 0;\r\n\t\t\t    width: 250px;\r\n\t\t\t    margin: 0;\r\n\t\t\t    padding: 0;\r\n\t\t\t    list-style: none;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav li {\r\n\t\t\t    text-indent: 20px;\r\n\t\t\t    line-height: 40px;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav li a {\r\n\t\t\t    display: block;\r\n\t\t\t    text-decoration: none;\r\n\t\t\t    color: #ffffff;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav li a:hover {\r\n\t\t\t    text-decoration: none;\r\n\t\t\t    color: #fff;\r\n\t\t\t    background: rgba(255,255,255,0.2);\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav li a:active,\r\n\t\t\t.sidebar-nav li a:focus {\r\n\t\t\t    text-decoration: none;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav > .sidebar-brand {\r\n\t\t\t    height: 130px;\r\n\t\t\t    font-size: 18px;\r\n\t\t\t    line-height: 100px;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav > .sidebar-brand a {\r\n\t\t\t    color: #ffffff;\r\n\t\t\t    background-color:#ECEAEA;\r\n\t\t\t}\r\n\r\n\t\t\t.sidebar-nav > .sidebar-brand a:hover {\r\n\t\t\t    color: #fff;\r\n\t\t\t    background: none;\r\n\t\t\t    background-color:#ECEAEA;\r\n\t\t\t}\r\n\r\n\t\t\t.btn-default:hover\r\n\t\t\t{\r\n\t\t\t\t color:black;\r\n\t\t\t\t border:1px solid #44adc6;\r\n\t\t\t\t background-color: #6bbed2;\r\n\t\t\t\t background-image: linear-gradient(to bottom, #6bbed2, #50abc4);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#6bbed2, endColorstr=#50abc4);\r\n\t\t\t\t \r\n\r\n\t\t\t}\r\n\t\t\t.breadcrumb\r\n\t\t\t{\r\n\t\t\t\tbackground-color: #d2d2d2; \t\r\n\t\t\t\theight:30px;\r\n\t\t\t\tmargin-left:15px;\r\n\t\t\t\tmargin-top:15px;\r\n\t\t\t\twidth:90%;\r\n\t\t\t}\r\n\t\t\t.breadcrumbtext\r\n\t\t\t{\r\n\t\t\t\tcolor:#000000;\r\n\t\t\t\tfont-family:verdana;\r\n\t\t\t\tfont-size:13px;\r\n\t\t\t\tpadding-left:15px;\r\n\t\t\t}\r\n\t\t\t@media(min-width:768px) {\r\n\t\t\t    #wrapper {\r\n\t\t\t\tpadding-left: 250px;\r\n\t\t\t    }\r\n\r\n\t\t\t    #wrapper.toggled {\r\n\t\t\t\tpadding-left: 0;\r\n\t\t\t    }\r\n\r\n\t\t\t    #sidebar-wrapper {\r\n\t\t\t\twidth: 250px;\r\n\t\t\t    }\r\n\r\n\t\t\t    #wrapper.toggled #sidebar-wrapper {\r\n\t\t\t\twidth: 0;\r\n\t\t\t    }\r\n\r\n\t\t\t    #page-content-wrapper {\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\tposition: relative;\r\n\t\t\t    }\r\n\r\n\t\t\t    #wrapper.toggled #page-content-wrapper {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\tmargin-right: 0;\r\n\t\t\t    }\r\n\t\t\t}\r\n\r\n\t\t\t[hidden] { display: none !important;}\t\r\n\t\t"

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_products__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_model__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_SharedValue__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = (function () {
    function AddComponent(productService, location, sharedValue, router) {
        this.productService = productService;
        this.location = location;
        this.sharedValue = sharedValue;
        this.router = router;
        this.add = function () {
            console.log("add method");
            var productObj = new __WEBPACK_IMPORTED_MODULE_4__app_service_model__["a" /* Products */](this.productid, this.name, this.categoryid, this.description, this.action, this.price, this.quantity, this.createddate, this.createdby, this.modifieddate, this.modifiedby);
            console.log("converting into products obj");
            console.log(productObj);
            this.insertProducts(productObj);
        };
        this.update = function () {
            console.log("update method called");
            delete this.sharedValue.getProduct()['delete'];
            var productObj = new __WEBPACK_IMPORTED_MODULE_4__app_service_model__["a" /* Products */](this.productid, this.name, this.categoryid, this.description, this.action, this.price, this.quantity, this.createddate, this.createdby, this.modifieddate, this.modifiedby);
            this.updateService(productObj);
        };
        this.insertProducts = function (productObj) {
            var _this = this;
            this.productService.saveProduct(productObj)
                .subscribe(function (data) { return _this.saveSuccess(); }, function (error) { return error(); }, function () { return _this.refreshFeed(); });
        };
        this.updateService = function (productObj) {
            var _this = this;
            this.productService.updateProduct(productObj)
                .subscribe(function (data) { return _this.updateSuccess(); }, function (error) { return error(); }, function () { return _this.goToHome(); });
        };
        this.updateSuccess = function () {
            console.log("updated successfully");
        };
        console.log("inside add componenet constructor");
        if (this.sharedValue.getValue() === true) {
            this.productid = this.sharedValue.getProduct().productid;
            this.name = this.sharedValue.getProduct().name;
            this.categoryid = this.sharedValue.getProduct().categoryid;
            this.description = this.sharedValue.getProduct().description;
            this.action = this.sharedValue.getProduct().action;
            this.price = this.sharedValue.getProduct().price;
            this.quantity = this.sharedValue.getProduct().quantity;
            this.createddate = this.sharedValue.getProduct().createddate;
            this.createdby = this.sharedValue.getProduct().createdby;
            this.modifieddate = this.sharedValue.getProduct().modifieddate;
            this.modifiedby = this.sharedValue.getProduct().modifiedby;
        }
        else {
            this.productid = null;
            this.name = '';
            this.categoryid = null;
            this.description = '';
            this.action = '';
            this.price = null;
            this.quantity = null;
            this.createddate = '';
            this.createdby = '';
            this.modifieddate = '';
            this.modifiedby = '';
        }
        this.location = location;
        this.showButton = this.sharedValue.getValue();
    }
    AddComponent.prototype.saveSuccess = function () {
        console.log("datas inserted successfully");
    };
    AddComponent.prototype.refreshFeed = function () {
        console.log("will refresh the page");
        this.router.navigate(['list']);
    };
    AddComponent.prototype.goToHome = function () {
        console.log("will refresh the page");
        this.router.navigateByUrl('/list');
    };
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add',
            template: __webpack_require__(720),
            styles: [__webpack_require__(266)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_service_products__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_service_products__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service_SharedValue__["a" /* SharedValue */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_service_SharedValue__["a" /* SharedValue */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.component.add.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_products__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_SharedValue__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(productService, location, sharedValue) {
        this.productService = productService;
        this.location = location;
        this.sharedValue = sharedValue;
        this.search = function () {
            console.log("inside search");
            console.log("searchtxt " + this.searchtxt);
            console.log("searchField " + this.searchField);
            this.searchService(this.searchtxt, this.searchField);
        };
        this.clear = function () {
            console.log("inside clear function");
            this.searchtxt = '';
            this.searchField = '--Select the Field--';
            this.getAllItems();
        };
        this.edit = function (editProduct) {
            console.log("inside call edit service");
            this.sharedValue.setValue(true);
            this.sharedValue.setProduct(editProduct);
        };
        this.deleteProducts = function () {
            console.log("inside delete products");
            var ProductsToBeDeleted = [];
            var allProducts = this.filteredProducts;
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].remove) {
                    delete allProducts[i]['remove'];
                    ProductsToBeDeleted.push(allProducts[i]);
                }
            }
            this.deleteAll(ProductsToBeDeleted);
        };
        this.showAddPage = function () {
            console.log("inside show add page");
            this.sharedValue.setValue(false);
        };
        this.getAllItems = function () {
            var _this = this;
            this.productService.getAllProducts().subscribe(function (data) { return _this.getAllSuccess(data); }, function (error) { return error(error); }, function () { return console.log("gets all the products"); });
        };
        this.getAllSuccess = function (data) {
            this.filteredProducts = data;
            console.log("got all the datas from DB");
        };
        this.deleteAll = function (ProductsToBeDeleted) {
            var _this = this;
            this.productService.deleteProducts(ProductsToBeDeleted)
                .subscribe(function (data) { return _this.deleteSuccess(); }, function (error) { return error(error); }, function () { return _this.nextCallRefresh(); });
        };
        this.searchService = function (searchtxt, searchField) {
            var _this = this;
            this.productService.searchProduct(searchtxt, searchField)
                .subscribe(function (data) { return _this.searchSuccess(data); }, function (error) { return error(error); }, function () { return console.log("search returned successfully"); });
        };
        this.searchSuccess = function (data) {
            this.filteredProducts = data;
        };
        console.log("calling list constructor");
        console.log("this.totalItems " + this.totalItems);
        this.itemsPerPage = 5;
        this.searchtxt = '';
        this.searchField = '--Select the Field--';
        this.availableOptions = ["productid", "name", "categoryid", "description", "action", "price", "quantity", "createddate", "createdby", "modifieddate", "modifiedby", "--Select the Field--"];
    }
    ListComponent.prototype.ngOnInit = function () {
        console.log("inside onInit");
        this.getAllItems();
    };
    ListComponent.prototype.deleteSuccess = function () {
        console.log("products deleted successfully");
        this.deleted = true;
        this.deletedSuccessfully = "Datas Deleted Successfully";
        this.removeText();
    };
    ListComponent.prototype.removeText = function () {
        var _this = this;
        setTimeout(function () {
            _this.deletedSuccessfully = '';
        }, 2000);
    };
    ListComponent.prototype.error = function (error) {
        console.log("error" + error);
    };
    ListComponent.prototype.nextCallRefresh = function () {
        console.log("calling the refresh list");
        this.getAllItems();
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list',
            template: __webpack_require__(722),
            styles: [__webpack_require__(266)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_products__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service_products__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_service_SharedValue__["a" /* SharedValue */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_service_SharedValue__["a" /* SharedValue */]) === 'function' && _c) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.component.list.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Configuration = (function () {
    function Configuration() {
        this.ServerIP = 'http://localhost:8080/';
        this.RestFulBaseUrl = 'Ang2SpringHbService/rest/ws/';
        this.ServerWithBaseUrl = this.ServerIP + this.RestFulBaseUrl;
    }
    Configuration = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Configuration);
    return Configuration;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.services.configration.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 439;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_service_products__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_service_SharedValue__ = __webpack_require__(171);






__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production = true;
if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__app_app_service_products__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__app_app_service_SharedValue__["a" /* SharedValue */]]);
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/main.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(721),
            styles: [__webpack_require__(266)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component_list__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_add__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_products__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_services_configration__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service_SharedValue__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_component_list__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_component_add__["a" /* AddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__app_service_products__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_10__app_services_configration__["a" /* Configuration */], __WEBPACK_IMPORTED_MODULE_11__app_service_SharedValue__["a" /* SharedValue */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_list__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component_add__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var appRoutes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__app_component_list__["a" /* ListComponent */], data: { title: 'DBLists' } },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__app_component_add__["a" /* AddComponent */] },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    AppRoutes = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutes);
    return AppRoutes;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.routes.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Products; });
var Products = (function () {
    function Products(productid, name, categoryid, description, action, price, quantity, createddate, createdby, modifieddate, modifiedby) {
        this.productid = productid;
        this.name = name;
        this.categoryid = categoryid;
        this.description = description;
        this.action = action;
        this.price = price;
        this.quantity = quantity;
        this.createddate = createddate;
        this.createdby = createdby;
        this.modifieddate = modifieddate;
        this.modifiedby = modifiedby;
    }
    return Products;
}());
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/app.service.model.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=D:/BaseDataManager/Testing-Proj/ang2springhb/src/environment.prod.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"rightcolumn\" ng-hide=\"listPage\" id=\"page-content-wrapper\">\n\t<div class=\"breadcrumb\">\n\t\t\t\t\t\t<div class=\"breadcrumbtext\">\n\t\t\t\t\t\t\tProduct-Add\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t</div>\t\t\t\t\n\t<table class=\"table table-striped table-condensed table-bordered table-hover\">\n\t\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tProductid\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"productid\" [readonly]=\"showButton\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tName\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tCategoryid\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"categoryid\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tDescription\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<textarea [(ngModel)]=\"description\" rows=\"5\" cols=\"50\"></textarea>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tAction\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"checkbox\" Value=\"Add\" [(ngModel)]=\"action\" (ngModelChange)=\"action=Add\" />ADD\n\t\t\t\t<input type=\"checkbox\" Value=\"Edit\" [(ngModel)]=\"action\" (ngModelChange)=\"action=Edit\" />EDIT\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tPrice\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"price\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tQuantity\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"radio\" [(ngModel)]=\"quantity\" value=\"100\"/>100\n\t\t\t\t<input type=\"radio\" [(ngModel)]=\"quantity\" value=\"200\"/>200\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tCreateddate\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"createddate\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tCreatedby\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<select name=\"createdby\" [(ngModel)]=\"createdby\">\n\t\t\t\t<option value=\"\">---Please select---</option>\n\t\t\t\t<option value=\"User\">USER</option>\n\t\t\t\t<option value=\"Developer\">DEVELOPER</option>\n\t\t\t\t</select>\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tModifieddate\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"modifieddate\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\tModifiedby\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"modifiedby\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t\n\t\t\n\t</table>\n\t\n\t<input type=\"button\" class=\"btn btn-default\" value=\"List\" routerLink=\"/list\" style=\"float:right\">\n\t<input type=\"button\" class=\"btn btn-default\" value=\"Add\" (click)=\"add();\" style=\"float:right\" \n\t[hidden]=\"showButton\">\n\t<input type=\"button\" class=\"btn btn-default\" value=\"Update\" (click)=\"update();\" \n\tstyle=\"float:right\" [hidden]=\"!showButton\">\n\t\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n <!-- Sidebar -->\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\">\n                       <img src=\"images/logo.png\"/>\n                    </a>\n                </li>\n                <li>\n                    <a routerLink=\"/list\" routerLinkActive=\"active\"><img src=\"images/product_list.png\"/>\n                    Product List</a>\n                </li>\n                \n            </ul>\n        </div>\n        <br/><br/>\n        <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"page-content-wrapper\">\n<div>\n\t<div class=\"breadcrumb\">\n\t\t\t\t\t\t<div class=\"breadcrumbtext\">\n\t\t\t\t\t\t\tProduct-Add\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t</div>\t\t\n\t\n    <input type=\"text\" [(ngModel)]=\"searchtxt\" />\n\t\n\t <select  [(ngModel)]=\"searchField\" class=\"dropdown\">\n      <option *ngFor=\"let option of availableOptions\" [value]=\"option\">{{option}}</option>\n    </select>\n\t\n\t<input type=\"button\" class=\"btn btn-default\" value=\"SEARCH\" (click)=\"search();\">\n\t<input type=\"button\" class=\"btn btn-default\" value=\"Clear\" (click)=\"clear();\"><br/><br/>\n\t\n\t<table class=\"table table-striped table-condensed table-bordered table-hover\">\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tProductid\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tCategoryid\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tDescription\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tAction\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tPrice\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tQuantity\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tCreateddate\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tCreatedby\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tModifieddate\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tModifiedby\n\t\t\t</th>\n\n\t\t\t<th>\n\t\t\t\tDelete\n\t\t\t</th>\n\t\t</tr>\n\t\t\n\t\t<tr *ngFor=\"let product of filteredProducts | paginate :{itemsPerPage: itemsPerPage, currentPage: p}\">\n\t\t\t<td>\n\t\t\t\t<a href=\"\" routerLink=\"/add\" (click)=\"edit(product);\">{{product.productid}}</a>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.name}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.categoryid}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.description}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.action}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.price}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.quantity}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.createddate}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.createdby}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.modifieddate}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{product.modifiedby}}\n\t\t\t</td>\n\n\t\t\t<td>\n\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"product.remove\" />\n\t\t\t</td>\n\t\t\n\t\t</tr>\n\t</table>\n\t<span [innerHTML]=\"deletedSuccessfully\" *ngIf=\"deleted\"></span>\n\t<input type=\"button\" class=\"btn btn-default\" value=\"Delete\" (click)=\"deleteProducts();\" style=\"float:right\">\n\t<input type=\"button\" class=\"btn btn-default\" value=\"Add\" (click)=\"showAddPage();\" style=\"float:right\" routerLink=\"/add\">\n\t<div class=\"pagination\">\n\t<pagination-controls (pageChange)=\"p = $event\"\n                      directionLinks=\"true\"\n                      autoHide=\"false\"\n                      previousLabel=\"Previous\"\n                      nextLabel=\"Next\">\n\t</pagination-controls>\n\t<div>\n</div>\n\n</div>\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(440);


/***/ })

},[991]);
//# sourceMappingURL=main.bundle.map
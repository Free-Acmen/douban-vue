/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var user = __webpack_require__(4);

module.exports = function (server) {
    server.get('/api/login', user.login);
    server.get('/api/registered', user.registered);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Models = __webpack_require__(6);

exports.login = function (req, res) {
    res.send('123login');
};

exports.registered = function (req, res) {
    var userPerson = new Models.User({
        authId: '1',
        name: 'admin',
        pwd: 'admin',
        email: 'lmllsq@126.com',
        phone: '18695875698',
        created: '121215112'
    });
    userPerson.save(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send('registered success');
        }
    });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(2);
var bodyparser = __webpack_require__(1);
var proxy = __webpack_require__(3);
var api = __webpack_require__(0);
var server = express();

server.set('port', process.env.PORT || 8088);
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));

server.use(express.static(__dirname + '/public'));
server.use('/v2', proxy({
    target: 'http://api.douban.com',
    changeOrigin: true,
    headers: {
        Referer: 'http://api.douban.com'
    }
}));
api(server);

server.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
server.listen(server.get('port'));
console.log('success listen at :' + server.get('port'));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(8);
var userModel = __webpack_require__(7);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/hsz');

var db = mongoose.connection;
db.on('error', function () {
    return console.log('Mongo connection error');
});
db.once('open', function () {
    return console.log('Mongo connection successed');
});

var User = userModel(mongoose);

var Models = {
    User: User
};

module.exports = Models;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (mongoose) {
    var userSchema = mongoose.Schema({
        authId: String,
        name: String,
        pwd: String,
        email: String,
        phone: String,
        created: Date
    });
    var User = mongoose.model('User', userSchema);
    return User;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })
/******/ ]);
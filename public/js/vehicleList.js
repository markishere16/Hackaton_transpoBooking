"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vehicleList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      list: ['mdi-bus', 'mdi-motorbike', 'mdi-van-passenger', 'mdi-rickshaw-electric']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      logo: '../../images/transpologo.png',
      form: {
        username: '',
        password: ''
      },
      loading: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                axios.post('/api/login', _this.form).then(function (res) {
                  if (res.data.success == true) {
                    setTimeout(function () {
                      _this.isLoading = false, _this.$router.push({
                        name: "Home"
                      });
                    }, 1000);
                  } else {
                    _this.loading = false;
                  }
                })["catch"](function () {
                  _this.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      list: ['mdi-bus', 'mdi-motorbike', 'mdi-van-passenger', 'mdi-rickshaw-electric']
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["get_CurrentUser"]),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchCurrentUser'])), {}, {
    logout: function logout() {
      var _this = this;

      this.$store.dispatch('clearClassesNames');
      this.isLogout = true;
      axios.post('/api/logout').then(function () {
        //this.clear_current_user();
        _this.$router.push({
          name: "login"
        });
      })["catch"](function (e) {});
    }
  }),
  mounted: function mounted() {
    this.fetchCurrentUser();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/VehicleList/vehicleList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/VehicleList/vehicleList.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicleList.vue?vue&type=template&id=cabab6c2& */ "./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2&");
/* harmony import */ var _vehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicleList.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/VehicleList/vehicleList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/login/login.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/login/login.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=14a978bd& */ "./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/login/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/profile/profile.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/profile/profile.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=bb634486& */ "./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/profile/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vehicleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/login/login.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/login/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicleList_vue_vue_type_template_id_cabab6c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vehicleList.vue?vue&type=template&id=cabab6c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2&");


/***/ }),

/***/ "./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_14a978bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=14a978bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd&");


/***/ }),

/***/ "./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_bb634486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=bb634486& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/VehicleList/vehicleList.vue?vue&type=template&id=cabab6c2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4", attrs: { color: "#2196F3" } },
                [
                  _c(
                    "div",
                    { staticClass: "pt-2 pb-2 pl-2 pr-2" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "hide-details": "",
                          rounded: "",
                          solo: "",
                          value: "FL. D Hall",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pt-2 pb-2 pl-2 pr-2" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "hide-details": "",
                          rounded: "",
                          solo: "",
                          value: "Cauyan, Isa",
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "mx-auto mt-3",
                  attrs: { elevation: "1", outlined: "" },
                },
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", [
                            _c("div", [
                              _c(
                                "span",
                                [
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-map-marker-distance"),
                                  ]),
                                  _vm._v(" 3km "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-map-marker-distance"),
                                  ]),
                                  _vm._v(
                                    " Est. time 20mins\n                                "
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-action", [
                            _c(
                              "div",
                              {
                                staticClass: "pa-4",
                                staticStyle: {
                                  "background-color": "#2196F3",
                                  "border-radius": "10px",
                                },
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: "font-weight-bold white--text",
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    P100\n                                "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mx-auto mt-5 pl-1 pr-1 mb-1",
                  attrs: { elevation: "0" },
                },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.list, function (item, index) {
                      return _c(
                        "v-col",
                        {
                          key: index,
                          staticClass: "text-center",
                          attrs: { cols: "3" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "pt-8 pb-8 pl-2 pr-2",
                              attrs: { dark: "", color: "#2196F3" },
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v(_vm._s(item)),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                {
                  staticClass: "pa-0",
                  staticStyle: { height: "20px !important" },
                  attrs: { fluid: "" },
                },
                [
                  _c(
                    "v-row",
                    _vm._l(3, function (item) {
                      return _c(
                        "v-col",
                        {
                          key: item,
                          staticClass: "pb-0 pt-0 pt-3",
                          attrs: { cols: "12", md: "4" },
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto pa-2",
                              attrs: { elevation: "1", outlined: "" },
                            },
                            [
                              _c("div", { staticClass: "pa-1" }, [
                                _c("span", [_vm._v("Name: Juan, Delacruz")]),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [_vm._v("Contact #: 09012133555")]),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [_vm._v("Type: Van")]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/login/login.vue?vue&type=template&id=14a978bd& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        { staticStyle: { "background-color": "white" } },
        [
          _c(
            "v-main",
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "fill-height": "" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "text-center",
                          attrs: { cols: "12", md: "7" },
                        },
                        [
                          _c(
                            "div",
                            [
                              _c("v-img", {
                                attrs: {
                                  width: "100",
                                  alt: "logo",
                                  src: _vm.logo,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "7" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "text",
                              "hide-details": "",
                              rounded: "",
                              outlined: "",
                              label: "Username",
                            },
                            model: {
                              value: _vm.form.username,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "username", $$v)
                              },
                              expression: "form.username",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "7" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "password",
                              "hide-details": "",
                              rounded: "",
                              outlined: "",
                              label: "Password",
                            },
                            model: {
                              value: _vm.form.password,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "password", $$v)
                              },
                              expression: "form.password",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "7" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                loading: _vm.loading,
                                rounded: "",
                                block: "",
                                color: "primary",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.login()
                                },
                              },
                            },
                            [_vm._v("Login")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profile/profile.vue?vue&type=template&id=bb634486& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app-bar",
        {
          staticStyle: { "background-color": "white" },
          attrs: { app: "", flat: "" },
        },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "red", icon: "" },
              on: {
                click: function ($event) {
                  return _vm.logout()
                },
              },
            },
            [_c("v-icon", [_vm._v("mdi-logout")])],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { staticClass: "text-center", attrs: { cols: "12", md: "7" } },
            [
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "v-avatar",
                    { attrs: { size: "120" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src: "https://cdn.vuetifyjs.com/images/john.jpg",
                          alt: "John",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-center", attrs: { cols: "12", md: "7" } },
            [
              _c(
                "div",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "First Name",
                      "hide-details": "",
                      rounded: "",
                      outlined: "",
                    },
                    model: {
                      value: _vm.get_CurrentUser.first_name,
                      callback: function ($$v) {
                        _vm.$set(_vm.get_CurrentUser, "first_name", $$v)
                      },
                      expression: "get_CurrentUser.first_name",
                    },
                  }),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-center", attrs: { cols: "12", md: "7" } },
            [
              _c(
                "div",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Last Name",
                      "hide-details": "",
                      rounded: "",
                      outlined: "",
                    },
                    model: {
                      value: _vm.get_CurrentUser.last_name,
                      callback: function ($$v) {
                        _vm.$set(_vm.get_CurrentUser, "last_name", $$v)
                      },
                      expression: "get_CurrentUser.last_name",
                    },
                  }),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-center", attrs: { cols: "12", md: "7" } },
            [
              _c(
                "div",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Address",
                      "hide-details": "",
                      rounded: "",
                      outlined: "",
                    },
                    model: {
                      value: _vm.get_CurrentUser.address,
                      callback: function ($$v) {
                        _vm.$set(_vm.get_CurrentUser, "address", $$v)
                      },
                      expression: "get_CurrentUser.address",
                    },
                  }),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-center", attrs: { cols: "12", md: "7" } },
            [
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        rounded: "",
                        block: "",
                        dark: "",
                        color: "primary",
                      },
                    },
                    [_vm._v("Update")]
                  ),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
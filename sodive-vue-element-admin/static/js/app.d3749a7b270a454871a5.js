webpackJsonp([2],{

/***/ "+/3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/sodiveCollege/sodiveCollege.vue


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


var statusMap = [{ status: 'published', label: '已发布' }, { status: 'draft', label: '未发布' }];

var statusObj = statusMap.reduce(function (obj, item) {
  obj[item.status] = item.label;
  return obj;
}, {});
/* harmony default export */ var sodiveCollege = ({
  name: 'sodiveCollege',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, status: null },
      statusMap: statusMap,
      visible: false,
      type: ''
    };
  },
  created: function created() {
    this.GetSodiveList();
  },

  methods: {
    GetSodiveList: function GetSodiveList() {
      var _this = this;

      Object(operationManage["k" /* getSodiveList */])(this.listQuery).then(function (response) {
        _this.list = response.data.sodiveList.map(function (item) {
          if (item.status === 'published') {
            _this.$set(item, 'published', true);
          } else {
            _this.$set(item, 'published', false);
          }
          return item;
        });
        _this.total = response.data.total;
      });
    },
    changeStatus: function changeStatus(row) {
      row.status = row.published ? 'published' : 'draft';
      this.$message.success('修改状态成功');
    },
    deleteItem: function deleteItem(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var item = _ref2[1];

          if (item.id === row.id) {
            this.list.splice(i, 1);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    push: function push() {
      if (this.type === '') {
        this.$message.warning('请选择推送对象');
      } else {
        this.$message.success('推送成功');
        this.visible = false;
      }
    },
    cancel: function cancel() {
      this.visible = false;
      this.type = '';
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    topFilter: function topFilter(top) {
      var topMap = { 'yes': '是', 'no': '否' };
      return topMap[top];
    },
    programaFilter: function programaFilter(programa) {
      var programaMap = { 'sodive': 'sodive学院' };
      return programaMap[programa];
    },
    statusFilter: function statusFilter(status) {
      return statusObj[status];
    },
    statusTagFilter: function statusTagFilter(status) {
      var statusMap = { 'published': 'success', 'draft': 'danger' };
      return statusMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9953778c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/sodiveCollege/sodiveCollege.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetSodiveList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-select',{staticStyle:{"width":"150px"},attrs:{"clearable":""},model:{value:(_vm.listQuery.status),callback:function ($$v) {_vm.$set(_vm.listQuery, "status", $$v)},expression:"listQuery.status"}},_vm._l((_vm.statusMap),function(item){return _c('el-option',{key:item.status,attrs:{"value":item.status,"label":item.label}})}))],1),_vm._v(" "),_c('div',{staticClass:"filter-item fr"},[_c('router-link',{attrs:{"to":"/operationManagement/sodiveCollege/sodive/14"}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("新增")])],1)],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"ID","prop":"id","width":"150px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"栏目"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("programaFilter")(scope.row.programa)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"标题","prop":"title","min-width":"200px","align":"left"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否置顶","width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("topFilter")(scope.row.top)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发布操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-switch',{on:{"change":function($event){_vm.changeStatus(scope.row)}},model:{value:(scope.row.published),callback:function ($$v) {_vm.$set(scope.row, "published", $$v)},expression:"scope.row.published"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"220px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{attrs:{"to":("/operationManagement/sodiveCollege/sodive/" + (scope.row.id))}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("编辑")])],1),_vm._v(" "),_c('el-button',{attrs:{"type":"warning"},on:{"click":function($event){_vm.deleteItem(scope.row)}}},[_vm._v("删除")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.visible = true}}},[_vm._v("推送")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"Getlist":_vm.GetSodiveList}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"推送消息","visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',[_c('el-radio-group',{model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("全部")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("中国")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("海外")])],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancel}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.push}},[_vm._v("确定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sodiveCollege_sodiveCollege = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/sodiveCollege/sodiveCollege.vue
function injectStyle (ssrContext) {
  __webpack_require__("cPWE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  sodiveCollege,
  sodiveCollege_sodiveCollege,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_sodiveCollege_sodiveCollege = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "+gtA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/7BF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0HId":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/utils/validate.js
/**
 * Created by zhaojuntong on 2017/12/20.
 */
function isValidUsername(username) {
  var validName = ['admin'];
  return validName.indexOf(username.trim()) >= 0;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/login/index.vue
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


/* harmony default export */ var login = ({
  data: function data() {
    var validateUsername = function validateUsername(rule, value, cb) {
      if (!isValidUsername(value)) {
        cb(new Error('用户名不正确'));
      } else {
        cb();
      }
    };
    var validatePassword = function validatePassword(rule, value, cb) {
      if (value.length < 6) {
        cb(new Error('长度需大于等于6位'));
      } else {
        cb();
      }
    };
    return {
      loginForm: {
        username: 'admin',
        password: 'zhanjuntong'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    };
  },

  methods: {
    login: function login() {
      var _this = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this.$store.dispatch('Login', _this.loginForm).then(function () {
            _this.$router.push({ path: '/' });
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dbd67d20","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/login/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('el-form',{ref:"loginForm",attrs:{"model":_vm.loginForm,"rules":_vm.loginRules}},[_c('el-form-item',{attrs:{"prop":"username"}},[_c('span',{staticClass:"svg-container"},[_c('svg-icon',{attrs:{"icon-class":'user'}})],1),_vm._v(" "),_c('el-input',{attrs:{"autoComplete":"on"},model:{value:(_vm.loginForm.username),callback:function ($$v) {_vm.$set(_vm.loginForm, "username", $$v)},expression:"loginForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('span',{staticClass:"svg-container"},[_c('svg-icon',{attrs:{"icon-class":'password'}})],1),_vm._v(" "),_c('el-input',{attrs:{"autoComplete":"on","type":"password"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleLogin($event)}},model:{value:(_vm.loginForm.password),callback:function ($$v) {_vm.$set(_vm.loginForm, "password", $$v)},expression:"loginForm.password"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"loginBtn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.login()}}},[_vm._v("登录")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_login = (esExports);
// CONCATENATED MODULE: ./src/components/login/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("T1RD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  login,
  components_login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_login = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "0xDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = paramObj;
/* harmony export (immutable) */ __webpack_exports__["a"] = formatTime;
/* harmony export (immutable) */ __webpack_exports__["b"] = formatTimeCustom;
/* harmony export (immutable) */ __webpack_exports__["d"] = randomColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

/**
 * Created by zhaojuntong on 2017/12/21.
 */
function paramObj(url) {
  var search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

function formatTime(time) {
  var date = time || new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

function formatTimeCustom(time, tFormat) {
  if (arguments.length === 0) return null;
  var format = tFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date = void 0;
  if ((typeof time === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(time)) === 'object') {
    // 时间对象
    date = time;
  } else if ((time + '').length === 13) {
    // 时间戳
    date = new Date(time);
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };

  var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (value === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return timeStr;
}

function randomColor() {
  return '#' + function (color) {
    return new Array(7 - color.length).join('0') + color;
  }((Math.random() * 0x1000000 << 0).toString(16));
}

/***/ }),

/***/ "1j37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/userManage.js
var userManage = __webpack_require__("ms7A");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/payAccount/payAccount.vue
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


var payTypeMap = [{ payType: 0, name: 'Alipay' }, { payType: 1, name: 'Wechat' }, { payType: 2, name: 'Paypal' }];

var payTypeObj = payTypeMap.reduce(function (obj, item) {
  obj[item.payType] = item.name;
  return obj;
}, {});
/* harmony default export */ var payAccount = ({
  name: 'payAccount',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, payType: null, userId: null, name: null },
      payTypeMap: payTypeMap,
      statusMap: ['该用户支付账号已恢复正常', '已成功注销该账户'],
      loading: true,
      downloadLoading: false
    };
  },
  created: function created() {
    this.GetPayAccountList();
  },

  methods: {
    GetPayAccountList: function GetPayAccountList() {
      var _this = this;

      this.loading = true;
      Object(userManage["e" /* getPayAccountList */])(this.listQuery).then(function (response) {
        _this.list = response.data.payAccountList.map(function (item) {
          _this.$set(item, 'statusSwitch', !item.status);
          return item;
        });
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    changeStatus: function changeStatus(row) {
      row.status = row.statusSwitch ? 0 : 1;
      this.$notify({
        message: this.statusMap[row.status],
        title: '操作成功',
        type: 'success',
        duration: 2000
      });
    },
    excelExport: function excelExport() {
      var _this2 = this;

      this.downloadLoading = true;
      __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "zWO4")).then(function (excel) {
        var tHeader = ['ID', '用户类型', '支付类型', '账号', '姓名', '创建时间', '修改时间', '状态'];
        var filterVal = ['userId', 'userType', 'payType', 'account', 'name', 'createTime', 'modifyTime', 'status'];
        var data = _this2.formatJson(filterVal, _this2.list);
        excel.export_json_to_excel(tHeader, data, 'payAccount-list');
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      var statusMap = ['正常', '失效'];
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'payType') {
            return payTypeObj[v[j]];
          } else if (j === 'status') {
            return statusMap[v[j]];
          } else {
            return v[j];
          }
        });
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    payTypeFilter: function payTypeFilter(type) {
      return payTypeObj[type];
    },
    statusFilter: function statusFilter(status) {
      var statusMap = ['正常', '失效'];
      return statusMap[status];
    },
    statusTagFilter: function statusTagFilter(status) {
      var tagMap = ['success', 'danger'];
      return tagMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ae632e4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/payAccount/payAccount.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetPayAccountList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"120px"},attrs:{"placeholder":"姓名","clearable":""},model:{value:(_vm.listQuery.name),callback:function ($$v) {_vm.$set(_vm.listQuery, "name", $$v)},expression:"listQuery.name"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"支付类型","clearable":""},model:{value:(_vm.listQuery.payType),callback:function ($$v) {_vm.$set(_vm.listQuery, "payType", $$v)},expression:"listQuery.payType"}},_vm._l((_vm.payTypeMap),function(item){return _c('el-option',{key:item.payType,attrs:{"value":item.payType,"label":item.name}})}))],1),_vm._v(" "),_c('template',{slot:"excel"},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-download","loading":_vm.downloadLoading},on:{"click":_vm.excelExport}},[_vm._v("Excel")])],1)])],2),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"序号","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户类型","prop":"userType"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"支付类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',[_vm._v(_vm._s(_vm._f("payTypeFilter")(scope.row.payType)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"账号","prop":"account"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"姓名","prop":"name"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"修改时间","prop":"modifyTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-switch',{on:{"change":function($event){_vm.changeStatus(scope.row)}},model:{value:(scope.row.statusSwitch),callback:function ($$v) {_vm.$set(scope.row, "statusSwitch", $$v)},expression:"scope.row.statusSwitch"}})]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetPayAccountList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var payAccount_payAccount = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/payAccount/payAccount.vue
function injectStyle (ssrContext) {
  __webpack_require__("P5Co")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  payAccount,
  payAccount_payAccount,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_payAccount_payAccount = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1uAe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["m"] = getTaskList;
/* harmony export (immutable) */ __webpack_exports__["n"] = taskManage;
/* harmony export (immutable) */ __webpack_exports__["o"] = userNumberRecord;
/* harmony export (immutable) */ __webpack_exports__["b"] = addTask;
/* harmony export (immutable) */ __webpack_exports__["e"] = editTask;
/* harmony export (immutable) */ __webpack_exports__["i"] = getRecommendProduction;
/* harmony export (immutable) */ __webpack_exports__["a"] = addProduction;
/* harmony export (immutable) */ __webpack_exports__["k"] = getSodiveList;
/* harmony export (immutable) */ __webpack_exports__["d"] = editSodive;
/* harmony export (immutable) */ __webpack_exports__["j"] = getSodive;
/* harmony export (immutable) */ __webpack_exports__["h"] = getQuestionList;
/* harmony export (immutable) */ __webpack_exports__["l"] = getStatisticsList;
/* harmony export (immutable) */ __webpack_exports__["g"] = getDetailList;
/* harmony export (immutable) */ __webpack_exports__["f"] = getBannerList;
/* harmony export (immutable) */ __webpack_exports__["c"] = editBanner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojuntong on 2018/1/2.
 */


function getTaskList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/taskList',
    method: 'get',
    params: listQuery
  });
}

function taskManage(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/taskManage',
    method: 'get',
    params: listQuery
  });
}

function userNumberRecord(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/userNumberRecord/' + listQuery.taskId,
    method: 'get',
    params: listQuery
  });
}
function addTask(taskForm) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/addTask',
    method: 'get',
    data: taskForm
  });
}

function editTask(taskId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/editTask/' + taskId,
    method: 'get',
    data: taskId
  });
}

function getRecommendProduction(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/recommendProduction',
    method: 'get',
    params: listQuery
  });
}

function addProduction(productionForm) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/addProduction',
    method: 'get',
    data: productionForm
  });
}

function getSodiveList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/sodiveList',
    method: 'get',
    params: listQuery
  });
}

function editSodive(sodiveForm, routeId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/editSodive/' + routeId,
    method: 'get',
    data: { sodiveForm: sodiveForm, routeId: routeId }
  });
}

function getSodive(routeId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/getSodive/' + routeId,
    method: 'get',
    data: { routeId: routeId }
  });
}

function getQuestionList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/questionList',
    method: 'get',
    params: listQuery
  });
}

function getStatisticsList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/statisticsList',
    method: 'get',
    params: listQuery
  });
}

function getDetailList(listQuery, dateRange) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/detailList',
    method: 'get',
    params: listQuery,
    data: dateRange
  });
}

function getBannerList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/bannerList',
    method: 'get',
    params: listQuery
  });
}

function editBanner(bannerForm) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'operationManage/editBanner',
    method: 'get',
    data: bannerForm
  });
}

/***/ }),

/***/ "1x8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCoverList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojuntong on 2017/12/31.
 */


function getCoverList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'contentManagement/coverList',
    method: 'get',
    params: listQuery
  });
}

/***/ }),

/***/ "2Mjw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/adManage/adManage.vue

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



/* harmony default export */ var adManage = ({
  name: 'adManage',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, title: null },
      loading: true,
      visible: false,
      isEdit: false,
      bannerForm: {
        id: '',
        type: '',
        url: '',
        title: '',
        banner: [],
        effective: ''
      },
      bannerRules: {
        type: [{ required: true, trigger: 'blur', message: '请选择终端类型' }],
        url: [{ required: true, trigger: 'blur', message: '请填写banner地址' }, { type: 'url', message: '请输入正确的地址', trigger: 'blur,change' }],
        title: [{ required: true, trigger: 'blur', message: '请填写banner标题' }],
        banner: [{ required: true, trigger: 'blur', message: '请上传banner图片' }],
        effective: [{ required: true, trigger: 'blur', message: '请选择是否有效' }]
      }
    };
  },
  created: function created() {
    this.GetBannerList();
  },

  methods: {
    GetBannerList: function GetBannerList() {
      var _this = this;

      this.loading = true;
      Object(operationManage["f" /* getBannerList */])(this.listQuery).then(function (response) {
        _this.list = response.data.bannerList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    changeStatus: function changeStatus(row) {
      row.effective = row.effective === 'effective' ? 'ineffective' : 'effective';
      this.$notify({
        title: 'Prompt',
        message: '已修改此banner状态',
        type: 'success',
        duration: 2000
      });
    },
    addBanner: function addBanner() {
      var _this2 = this;

      this.isEdit = false;
      this.visible = true;
      this.bannerForm = {
        id: '',
        type: '',
        url: '',
        title: '',
        banner: [],
        effective: '',
        createTime: ''
      };
      this.$nextTick(function () {
        _this2.$refs.bannerForm.clearValidate();
      });
    },
    editBanner: function editBanner(row) {
      this.isEdit = true;
      this.visible = true;
      this.bannerForm = row;
    },
    submitForm: function submitForm() {
      var _this3 = this;

      this.$refs.bannerForm.validate(function (valid) {
        if (_this3.bannerForm.banner.length === 0) _this3.$message.warning('请等待图片上传完成');
        if (valid) {
          Object(operationManage["c" /* editBanner */])(_this3.bannerForm).then(function (response) {
            if (_this3.isEdit) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = get_iterator_default()(_this3.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  if (item.id === _this3.bannerForm.id) {
                    item = _this3.bannerForm;
                    _this3.$notify({
                      title: 'Prompt',
                      message: '编辑banner成功',
                      type: 'success'
                    });
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              _this3.bannerForm.createTime = Object(utils["b" /* formatTimeCustom */])(new Date(), '{y}-{m}-{d}');
              _this3.list.unshift(_this3.bannerForm);
              _this3.$notify({
                title: 'Prompt',
                message: '新增banner成功',
                type: 'success'
              });
            }
            _this3.visible = false;
          });
        }
      });
    },
    handleSuccess: function handleSuccess(response, file) {
      this.bannerForm.banner = []; // 用delete删除的元素是undefined,因此在这清空(仅限上传一张图片时),待优化
      this.bannerForm.banner.push({ name: file.name, url: file.url });
    },
    handleRemove: function handleRemove(file) {
      var _this4 = this;

      if (this.bannerForm.banner.length !== 0) {
        this.bannerForm.banner.forEach(function (item, index) {
          if (item.url === file.url) {
            delete _this4.bannerForm.banner[0];
          }
        });
      }
    },
    handleExceed: function handleExceed(files, fileList) {
      this.$message.warning('仅限上传一张图片');
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    typeFilter: function typeFilter(type) {
      var typeObj = { user: '用户端', pro: '教练端' };
      return typeObj[type];
    },
    effectiveFilter: function effectiveFilter(effective) {
      var effectiveObj = { effective: '有效', ineffective: '无效' };
      return effectiveObj[effective];
    },
    effectiveTagFilter: function effectiveTagFilter(effective) {
      var effectiveTagObj = { effective: 'success', ineffective: 'danger' };
      return effectiveTagObj[effective];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-324e3751","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/adManage/adManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetBannerList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"标题","clearable":""},model:{value:(_vm.listQuery.title),callback:function ($$v) {_vm.$set(_vm.listQuery, "title", $$v)},expression:"listQuery.title"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item fr"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addBanner}},[_vm._v("新增")])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"标题","prop":"title","align":"left","width":"300px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"banner图"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{attrs:{"src":scope.row.banner[0].url,"width":"100","height":"65","alt":""}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"url","prop":"url","align":"left","min-width":"260px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("typeFilter")(scope.row.type)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否有效","width":"150px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":_vm._f("effectiveTagFilter")(scope.row.effective)},on:{"click":function($event){_vm.changeStatus(scope.row)}}},[_vm._v(_vm._s(_vm._f("effectiveFilter")(scope.row.effective)))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.editBanner(scope.row)}}},[_vm._v("编辑")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetBannerList}})],1),_vm._v(" "),_c('el-dialog',{staticClass:"banner-dialog",attrs:{"title":"新增/编辑banner","visible":_vm.visible,"center":""},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"bannerForm",attrs:{"model":_vm.bannerForm,"rules":_vm.bannerRules,"label-width":"140px","position-label":"right"}},[_c('el-form-item',{attrs:{"label":"用户类型","prop":"type"}},[_c('el-radio-group',{model:{value:(_vm.bannerForm.type),callback:function ($$v) {_vm.$set(_vm.bannerForm, "type", $$v)},expression:"bannerForm.type"}},[_c('el-radio',{attrs:{"label":"user"}},[_vm._v("用户端")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"pro"}},[_vm._v("教练端")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"url","prop":"url"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.bannerForm.url),callback:function ($$v) {_vm.$set(_vm.bannerForm, "url", $$v)},expression:"bannerForm.url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"url标题","prop":"title"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.bannerForm.title),callback:function ($$v) {_vm.$set(_vm.bannerForm, "title", $$v)},expression:"bannerForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"banner图","prop":"banner"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","list-type":"picture-card","file-list":_vm.bannerForm.banner,"on-success":_vm.handleSuccess,"on-remove":_vm.handleRemove,"limit":1,"on-exceed":_vm.handleExceed}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否有效","prop":"effective"}},[_c('el-radio-group',{model:{value:(_vm.bannerForm.effective),callback:function ($$v) {_vm.$set(_vm.bannerForm, "effective", $$v)},expression:"bannerForm.effective"}},[_c('el-radio',{attrs:{"label":"effective"}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"ineffective"}},[_vm._v("无效")])],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var adManage_adManage = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/adManage/adManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("GO1H")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  adManage,
  adManage_adManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_adManage_adManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "2e0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-neirongguanli",
  "use": "icon-neirongguanli-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-neirongguanli\"><path fill=\"#ffffff\" d=\"M199.606619 374.145305l194.19998 52.063773c2.387373 0.553609 4.7727 0.88516 7.161097 0.88516 12.266371 0 23.420409-8.156774 26.752294-20.587897 3.993964-14.766308-4.831029-29.972639-19.59222-33.914414L213.982024 320.53327c-14.765285-3.996011-30.026874 4.7727-33.966603 19.589151C176.020434 354.942965 184.786075 370.149295 199.606619 374.145305L199.606619 374.145305zM199.606619 651.545196l194.19998 52.05661c2.387373 0.668219 4.826935 0.99977 7.215332 0.99977 12.267395 0 23.421432-8.15575 26.754341-20.585851 3.992941-14.766308-4.832052-30.026874-19.59222-33.914414l-194.201004-52.172243c-14.765285-3.937682-30.026874 4.832052-33.966603 19.647479C176.020434 632.342856 184.786075 647.546116 199.606619 651.545196L199.606619 651.545196zM199.606619 512.792039l194.19998 52.055586c2.387373 0.669242 4.826935 0.944512 7.215332 0.944512 12.267395 0 23.421432-8.100492 26.754341-20.530592 3.992941-14.821567-4.832052-29.972639-19.59222-33.967626l-194.201004-52.063773c-14.765285-3.937682-30.026874 4.831029-33.966603 19.593244C176.020434 493.587652 184.786075 508.84924 199.606619 512.792039L199.606619 512.792039zM596.113211 545.260521c3.327792 12.4301 14.59644 20.530592 26.752294 20.530592 2.440585 0 4.828982-0.275269 7.217379-0.944512l194.19998-52.055586c14.81645-3.88754 23.586185-19.204387 19.589151-33.915437-3.939729-14.81645-19.149129-23.585161-33.911344-19.647479l-194.254216 52.063773C600.940147 515.287883 592.116177 530.438954 596.113211 545.260521L596.113211 545.260521zM643.009288 836.866972l-103.341646 27.693736L539.667641 256.203126l360.647897-96.625688 0 368.531448c3.168156-0.057305 6.161327-0.445138 9.383718-0.445138 16.150842 0 31.357172 1.499144 46.067198 3.663436L955.766454 123.390261c0-8.604982-3.941775-16.764825-10.878768-21.980617-6.829546-5.272074-15.763009-7.100722-24.033369-4.7727L511.914554 206.198246 102.975814 96.581686c-8.209986-2.273786-17.204847-0.499373-24.029276 4.827959-6.881734 5.216815-10.878768 13.375635-10.878768 21.980617l0 665.742547c0 12.545734 8.378831 23.586185 20.535709 26.804483l416.095743 111.505583c2.388397 0.666172 4.831029 0.944512 7.215332 0.944512 2.388397 0 4.831029-0.277316 7.161097-0.944512l134.37136-35.96512C648.395972 873.661993 644.898311 855.403141 643.009288 836.866972L643.009288 836.866972zM484.166583 864.559685 123.567805 767.876692 123.567805 159.523203l360.598778 96.680946L484.166583 864.559685 484.166583 864.559685zM622.865505 427.094238c2.440585 0 4.828982-0.331551 7.217379-0.940418l194.19998-52.063773c14.81645-3.941775 23.586185-19.148106 19.532869-33.968649-3.937682-14.81645-19.147082-23.64042-33.909297-19.647479L615.650173 372.537691c-14.710027 3.996011-23.533996 19.203364-19.536962 34.023908C599.384721 418.938488 610.653369 427.094238 622.865505 427.094238L622.865505 427.094238zM955.765431 674.02007c0-2.718925-0.99977-5.545296-3.107781-7.601118-2.052752-2.109034-4.886287-3.220345-7.605212-3.220345l-16.318664 0c-6.771217 0-14.042831-5.273097-16.041348-11.707646l-8.490372-20.703531c-3.218298-5.995551-1.942235-14.873756 2.88777-19.59222l11.707646-11.658528c1.889023-1.9934 3.107781-4.716418 3.107781-7.653307 0-3.000334-1.163499-5.718235-3.107781-7.607258l-19.812231-19.647479c-1.942235-1.943258-4.550643-3.163039-7.605212-3.163039-2.937912 0-5.606695 1.164522-7.544837 3.163039l-11.713786 11.598152c-4.826935 4.776793-13.650905 6.16235-19.59222 2.833535l-20.701484-8.435113c-6.435573-1.998517-11.822257-9.15859-11.822257-16.040325l0-16.317641c0-2.830465-1.055029-5.551436-3.164063-7.607258-2.052752-2.106987-4.826935-3.163039-7.544837-3.163039l-27.918863 0c-2.77623 0-5.550413 1.056052-7.605212 3.163039-2.052752 2.055822-3.218298 4.776793-3.218298 7.607258l0 16.372899c0 6.883781-5.272074 14.041808-11.822257 16.040325l-20.537755 8.435113c-5.936199 3.388167-14.81645 1.943258-19.532869-2.827395l-11.768021-11.602246c-1.889023-1.943258-4.550643-3.163039-7.54893-3.163039-2.939959 0-5.661953 1.162476-7.66047 3.163039l-19.702738 19.647479c-1.88493 1.886977-3.164063 4.606925-3.164063 7.603165 0 2.938935 1.222851 5.661953 3.164063 7.662517l11.711739 11.653411c4.7727 4.714372 6.051833 13.539364 2.88777 19.591197l-8.494465 20.703531c-2.054799 6.434549-9.213849 11.821233-15.985066 11.821233l-16.480346-0.109494c-2.721994 0-5.439896 1.111311-7.54893 3.218298-2.111081 2.055822-3.219321 4.882194-3.219321 7.603165l0 27.91784c0 2.775206 1.109264 5.494131 3.219321 7.603165 2.109034 2.163269 4.826935 3.218298 7.54893 3.218298l16.480346 0c6.771217 0 13.930267 5.219885 15.928784 11.770068l8.549723 20.591991c3.218298 6.046716 1.88493 14.929014-2.88777 19.647479l-11.711739 11.598152c-1.88493 1.998517-3.164063 4.714372-3.164063 7.6574 0 3.000334 1.222851 5.661953 3.164063 7.662517l19.702738 19.647479c1.998517 1.88186 4.720511 3.107781 7.66047 3.107781 2.998287 0 5.716188-1.168616 7.54893-3.107781l11.707646-11.714809c4.776793-4.716418 13.600763-6.05081 19.59222-2.826372l20.648272 8.490372c6.54916 1.99647 11.822257 9.213849 11.822257 15.985066l0 16.367783c0 2.88777 1.165546 5.606695 3.218298 7.714705 2.054799 2.054799 4.833075 3.110851 7.607258 3.110851l27.916816 0c2.717901 0 5.492084-1.056052 7.544837-3.110851 2.114151-2.109034 3.168156-4.826935 3.168156-7.714705l0-16.367783c0-6.771217 5.382591-13.988596 11.818163-15.985066l20.701484-8.490372c5.995551-3.279696 14.766308-1.89107 19.59222 2.826372l11.658528 11.714809c1.998517 1.88186 4.606925 3.216251 7.601118 3.216251 2.944052 0 5.661953-1.164522 7.605212-3.216251l19.812231-19.647479c1.889023-2.000564 3.109828-4.663206 3.109828-7.662517 0-2.943029-1.165546-5.658883-3.109828-7.6574l-11.707646-11.598152c-4.831029-4.773723-6.049786-13.600763-2.88777-19.647479l8.494465-20.591991c1.994424-6.550183 9.266038-11.770068 16.041348-11.770068l16.370853 0c2.717901 0 5.550413-1.054005 7.605212-3.218298 2.109034-2.109034 3.107781-4.827959 3.107781-7.603165l0-27.975145L955.765431 674.02314 955.765431 674.02007zM857.081874 687.953408c0 34.133402-27.583219 61.660338-61.662385 61.660338s-61.718667-27.525913-61.718667-61.660338c0-34.081213 27.583219-61.718667 61.662385-61.718667S857.081874 653.873218 857.081874 687.953408\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "2eoi":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./contentManagement/discoverAdd/discoverAdd.vue": "mjed",
	"./contentManagement/discoverPass/discoverPass.vue": "NBVL",
	"./contentManagement/discoverPending/discoverPending.vue": "d1GE",
	"./contentManagement/logger/logger.vue": "Rzmi",
	"./errorPage/404.vue": "YM6t",
	"./exchange/addItems/addItems.vue": "wGP2",
	"./exchange/list/list.vue": "ZDfo",
	"./index.vue": "dAjm",
	"./layout/layout.vue": "6KT8",
	"./login/index.vue": "0HId",
	"./operationManagement/adManage/adManage.vue": "2Mjw",
	"./operationManagement/duihuanquan/duihuanquan.vue": "o+H4",
	"./operationManagement/questionFeedback/questionFeedback.vue": "gs9T",
	"./operationManagement/recommendGoods/recommendGoods.vue": "T3BH",
	"./operationManagement/shareStatistics/children/detail.vue": "lZmI",
	"./operationManagement/shareStatistics/children/statistics.vue": "EQWy",
	"./operationManagement/shareStatistics/shareStatistics.vue": "QA5Q",
	"./operationManagement/sodiveCollege/editSodive.vue": "FKFM",
	"./operationManagement/sodiveCollege/sodiveCollege.vue": "+/3M",
	"./operationManagement/taskManage/children/editTask.vue": "dLi+",
	"./operationManagement/taskManage/children/taskManage.vue": "qHma",
	"./operationManagement/taskManage/children/taskPending.vue": "so1m",
	"./operationManagement/taskManage/children/userNumberRecord.vue": "XUkJ",
	"./operationManagement/taskManage/index.vue": "D8AR",
	"./order/index.vue": "2qmY",
	"./system/appManage/appManage.vue": "DD4h",
	"./system/urlManage/components/urlInfo.vue": "Fqwz",
	"./system/urlManage/urlManage.vue": "KnQG",
	"./tools/massEmail/components/emailTemplate.vue": "A8EJ",
	"./tools/massEmail/massEmail.vue": "DJKJ",
	"./tools/messageNotification/messageNotification.vue": "5UI0",
	"./userManage/agent/agent.vue": "4jzu",
	"./userManage/coach/coach.vue": "wrxm",
	"./userManage/coachExamine/coachExamine.vue": "4i0Q",
	"./userManage/payAccount/payAccount.vue": "1j37",
	"./userManage/user/user.vue": "Q5K5",
	"./userManage/userExamine/userExamine.vue": "mTzq"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "2eoi";

/***/ }),

/***/ "2qmY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/order.js
/**
 * Created by zhaojuntong on 2017/12/28.
 */


function getOrderList(listQuery) {
  return Object(request["a" /* default */])({
    url: '/orderList',
    method: 'get',
    params: listQuery
  });
}
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/order/index.vue

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
//
//
//
//
//



var logisticsStatusMap = [{ logisticsStatus: 0, label: '无物流' }, { logisticsStatus: 1, label: '待发货' }, { logisticsStatus: 2, label: '配送中' }, { logisticsStatus: 3, label: '已签收' }, { logisticsStatus: 4, label: '拒签收' }];

var logisticsStatusMapObj = logisticsStatusMap.reduce(function (obj, item) {
  obj[item.logisticsStatus] = item.label;
  return obj;
}, {});

/* harmony default export */ var order = ({
  name: 'order',
  data: function data() {
    return {
      activeName: 'order',
      list: null,
      total: 1,
      listQuery: { page: 1, orderNo: null, userId: null },
      visible: false,
      loading: true,
      logisticsStatusMap: logisticsStatusMap,
      canEditInfo: {
        logisticsStatus: null,
        receiver: '',
        phoneNo: '',
        receiveAddress: '',
        goodsPic: '',
        id: '',
        logisticsNo: '',
        logisticsCompany: ''
      }
    };
  },
  created: function created() {
    this.GetOrderList();
  },

  methods: {
    GetOrderList: function GetOrderList() {
      var _this = this;

      this.loading = true;
      getOrderList(this.listQuery).then(function (response) {
        _this.list = response.data.orderList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    editInfo: function editInfo(row) {
      this.visible = true;
      this.canEditInfo.logisticsStatus = row.logisticsStatus;
      this.canEditInfo.receiver = row.receiver;
      this.canEditInfo.phoneNo = row.phoneNo;
      this.canEditInfo.receiveAddress = row.receiveAddress;
      this.canEditInfo.goodsPic = row.goodsPic;
      this.canEditInfo.id = row.id;
      if (row.logisticsStatus !== 0) {
        this.canEditInfo.logisticsNo = row.logisticsNo;
        this.canEditInfo.logisticsCompany = row.logisticsCompany;
      } else {
        this.canEditInfo.logisticsNo = '';
        this.canEditInfo.logisticsCompany = '';
      }
    },
    modifyStatus: function modifyStatus() {
      if (this.canEditInfo.logisticsNo === '' && this.canEditInfo.logisticsCompany === '') {
        this.$message({ message: '物流单号和物流公司不能为空', type: 'warning' });
        return;
      } else if (this.canEditInfo.logisticsCompany === '') {
        this.$message({ message: '物流公司不能为空', type: 'warning' });
        return;
      } else if (this.canEditInfo.logisticsNo === '') {
        this.$message({ message: '物流单号不能为空', type: 'warning' });
        return;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.id === this.canEditInfo.id) {
            i.logisticsStatus = this.canEditInfo.logisticsStatus;
            i.updateTime = Object(utils["a" /* formatTime */])();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.canEditInfo.logisticsNo = '';
      this.canEditInfo.logisticsCompany = '';
      this.visible = false;
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    updateTimeFilter: function updateTimeFilter(row) {
      if (row.logisticsStatus === 0) {
        return;
      }
      return row.updateTime;
    },
    logisticsStatusFilter: function logisticsStatusFilter(status) {
      return logisticsStatusMapObj[status];
    },
    statusTagFilter: function statusTagFilter(status) {
      var tagType = ['info', 'warning', 'primary', 'success', 'danger'];
      return tagType[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26008caf","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/order/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"兑换券订单","name":"order"}},[_c('certificate-filter',{attrs:{"GetList":_vm.GetOrderList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"订单号","clearable":""},model:{value:(_vm.listQuery.orderNo),callback:function ($$v) {_vm.$set(_vm.listQuery, "orderNo", $$v)},expression:"listQuery.orderNo"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"序号","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"订单号","prop":"orderNo"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"手机","prop":"phoneNo"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"支付方式","prop":"payType"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"更新时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("updateTimeFilter")(scope.row)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"物流状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.logisticsStatus)}},[_vm._v(_vm._s(_vm._f("logisticsStatusFilter")(scope.row.logisticsStatus)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.editInfo(scope.row)}}},[_vm._v("物流操作")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetOrderList}})],1)],1)],1),_vm._v(" "),_c('el-dialog',{staticClass:"logistics-info",attrs:{"title":"物流操作","visible":_vm.visible,"width":"570px"},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-card',[_c('figure',[_c('img',{attrs:{"src":_vm.canEditInfo.goodsPic,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"info-container"},[_c('div',{staticClass:"info-item"},[_c('el-form',{attrs:{"inline":""}},[_c('el-form-item',{attrs:{"label":"收货人"}},[_c('span',[_vm._v(_vm._s(_vm.canEditInfo.receiver))]),_vm._v("   "+_vm._s(_vm.canEditInfo.phoneNo)+"\n            ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"收货地址"}},[_vm._v("\n              "+_vm._s(_vm.canEditInfo.receiveAddress)+"\n            ")]),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block"},attrs:{"label":"物流状态"}},[_c('el-select',{model:{value:(_vm.canEditInfo.logisticsStatus),callback:function ($$v) {_vm.$set(_vm.canEditInfo, "logisticsStatus", $$v)},expression:"canEditInfo.logisticsStatus"}},_vm._l((_vm.logisticsStatusMap),function(item){return _c('el-option',{key:item.logisticsStatus,attrs:{"value":item.logisticsStatus,"label":item.label}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物流单号"}},[_c('el-input',{attrs:{"placeholder":"输入订单号","clearable":""},model:{value:(_vm.canEditInfo.logisticsNo),callback:function ($$v) {_vm.$set(_vm.canEditInfo, "logisticsNo", $$v)},expression:"canEditInfo.logisticsNo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物流公司"}},[_c('el-input',{attrs:{"placeholder":"输入物流公司","clearable":""},model:{value:(_vm.canEditInfo.logisticsCompany),callback:function ($$v) {_vm.$set(_vm.canEditInfo, "logisticsCompany", $$v)},expression:"canEditInfo.logisticsCompany"}})],1)],1)],1)])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.modifyStatus()}}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_order = (esExports);
// CONCATENATED MODULE: ./src/components/order/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("cYPX")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  order,
  components_order,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_order = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "4i0Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/tab/certificatePending.vue + 2 modules
var certificatePending = __webpack_require__("CJAC");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/coachExamine/coachExamine.vue
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


/* harmony default export */ var coachExamine = ({
  name: 'coachExamine',
  data: function data() {
    return {
      activeName: 'pending',
      tabOptions: [{ type: 0, name: 'pending', label: '待审核证件' }, { type: 1, name: 'pended', label: '已审核证件' }, { type: 2, name: 'failed', label: '审核失败' }]
    };
  },

  components: { certificatePend: certificatePending["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f53f5cea","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/coachExamine/coachExamine.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.tabOptions),function(item){return _c('el-tab-pane',{key:item.type,attrs:{"label":item.label,"name":item.name}},[_c('keep-alive',[(item.name === _vm.activeName)?_c('certificate-pend',{attrs:{"type":item.type}}):_vm._e()],1)],1)}))]],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var coachExamine_coachExamine = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/coachExamine/coachExamine.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  coachExamine,
  coachExamine_coachExamine,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_coachExamine_coachExamine = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "4jzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/api/userManage.js
var userManage = __webpack_require__("ms7A");

// EXTERNAL MODULE: ./src/views/multiplicationFilter/multiplicationFilter.vue + 2 modules
var multiplicationFilter = __webpack_require__("ILbm");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/agent/agent.vue


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



// import { formatTimeCustom } from 'utils/index'
var countryObj = {};
/* harmony default export */ var agent = ({
  name: 'agent',
  data: function data() {
    return {
      list: null,
      total: 1,
      loading: true,
      agentVisible: false,
      modifyVisible: false,
      cancelVisible: false,
      listQuery: {
        page: 1
      },
      ModifyData: {
        id: '',
        userId: '',
        nickName: '',
        point: 0,
        registerTime: '',
        ownCoach: 0,
        email: '',
        sex: '',
        phoneNo: '',
        countryName: '',
        status: 0
      },
      countryMap: [],
      downloadLoading: false
    };
  },
  created: function created() {
    this.GetAgentList();
  },

  methods: {
    GetAgentList: function GetAgentList() {
      var _this = this;

      this.loading = true;
      Object(userManage["b" /* getAgentList */])(this.listQuery).then(function (response) {
        _this.list = response.data.agentList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    searchBtn: function searchBtn() {
      this.listQuery.page = 1;
      this.GetAgentList();
    },
    AddAgent: function AddAgent() {
      var _this2 = this;

      this.loading = true;
      Object(userManage["a" /* addAgent */])(this.listQuery.agentId, this.listQuery.countryName, this.listQuery.email).then(function (response) {
        _this2.list.unshift(response.data.newArticle);
        _this2.total = response.data.total;
        _this2.loading = false;
        _this2.agentVisible = false;
        _this2.$notify({
          type: response.data.info,
          title: '成功',
          message: '添加合伙人成功',
          duration: 2000
        });
      });
    },
    modifyData: function modifyData(row) {
      this.ModifyData = assign_default()({}, row);
      this.modifyVisible = true;
      var toModify = this.countryMap.filter(function (item) {
        return item.key === row.countryName;
      });
      this.ModifyData.countryName = toModify[0]['key'];
    },
    sureModify: function sureModify() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.id === this.ModifyData.id) {
            var index = this.list.indexOf(i);
            this.list.splice(index, 1, this.ModifyData);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.modifyVisible = false;
      this.$notify({
        type: 'success',
        title: '成功',
        message: '修改国籍成功',
        duration: 2000
      });
    },
    logOff: function logOff(row) {
      this.ModifyData = assign_default()({}, row);
      this.cancelVisible = true;
    },
    sureLogOff: function sureLogOff() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(this.list), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (i.userId === this.ModifyData.userId) {
            var index = this.list.indexOf(i);
            this.list[index].status = 1;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.cancelVisible = false;
      this.$notify({
        type: 'success',
        title: '成功',
        message: '注销成功',
        duration: 2000
      });
    },
    handleSizeChange: function handleSizeChange(val) {
      this.listQuery.limit = val;
      this.GetAgentList();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.listQuery.page = val;
      this.GetAgentList();
    },
    excelExport: function excelExport() {
      var _this3 = this;

      this.downloadLoading = true;
      __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "zWO4")).then(function (excel) {
        var tHeader = ['id', '昵称', '积分', '注册时间', '国籍', '下属教练', '状态'];
        var filterVal = ['userId', 'nickName', 'point', 'registerTime', 'countryName', 'ownCoach', 'status'];
        var data = _this3.formatJson(filterVal, _this3.list);
        excel.export_json_to_excel(tHeader, data, 'agent-list');
        _this3.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      var statusMap = ['正常', '注销'];
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'countryName') {
            return countryObj[v[j]];
          } else if (j === 'status') {
            return statusMap[v[j]];
          } else {
            return v[j];
          }
        });
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.countryMap = query.countryMap;
      // Array to Object
      countryObj = query.countryMap.reduce(function (obj, item) {
        obj[item.key] = item.name;
        return obj;
      }, {});
    }
  },
  filters: {
    countryFilter: function countryFilter(val) {
      return countryObj[val];
    }
  },
  components: { multiplicationFilter: multiplicationFilter["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-285e0742","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/agent/agent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-container',[_c('multiplicationFilter',{attrs:{"searchBtn":_vm.searchBtn},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){_vm.searchBtn()}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-download","loading":_vm.downloadLoading},on:{"click":_vm.excelExport}},[_vm._v("Excel")])],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit"},on:{"click":function($event){_vm.agentVisible = true}}},[_vm._v("新增合伙人")])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('el-form',{staticClass:"expand-table",attrs:{"label-position":"left","inline":""}},[_c('el-form-item',{attrs:{"label":"性别"}},[_c('span',[_vm._v(_vm._s(props.row.sex))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱"}},[_c('span',[_vm._v(_vm._s(props.row.email))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机"}},[_c('span',[_vm._v(_vm._s(props.row.phoneNo))])])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"序号","width":"50px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.id))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"id","width":"90px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.userId))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","width":"150px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.nickName))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"积分","width":"80px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.point))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"注册时间","min-width":"120px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.registerTime))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"国籍","width":"100px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("countryFilter")(scope.row.countryName)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"下属教练","width":"90px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.ownCoach))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","width":"70px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?_c('el-tag',{attrs:{"type":"info"}},[_vm._v("\n              正常\n            ")]):_vm._e(),_vm._v(" "),(scope.row.status === 1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("\n              注销\n            ")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"200px","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.modifyData(scope.row)}}},[_vm._v("修改")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","disabled":scope.row.status === 1},on:{"click":function($event){_vm.logOff(scope.row)}}},[_vm._v("注销")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"listQuery":_vm.listQuery,"total":_vm.total,"GetList":_vm.GetAgentList}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增合伙人","visible":_vm.agentVisible,"width":"350px"},on:{"update:visible":function($event){_vm.agentVisible=$event}}},[_c('div',{staticClass:"input-item"},[_c('el-input',{attrs:{"placeholder":"输入合伙人ID"},model:{value:(_vm.listQuery.agentId),callback:function ($$v) {_vm.$set(_vm.listQuery, "agentId", $$v)},expression:"listQuery.agentId"}})],1),_vm._v(" "),_c('div',{staticClass:"input-item"},[_c('el-select',{model:{value:(_vm.listQuery.countryName),callback:function ($$v) {_vm.$set(_vm.listQuery, "countryName", $$v)},expression:"listQuery.countryName"}},_vm._l((_vm.countryMap),function(country){return _c('el-option',{key:country.key,attrs:{"value":country.key,"label":country.name}})}))],1),_vm._v(" "),_c('div',{staticClass:"input-item"},[_c('el-input',{attrs:{"placeholder":"输入合伙人邮箱地址"},model:{value:(_vm.listQuery.email),callback:function ($$v) {_vm.$set(_vm.listQuery, "email", $$v)},expression:"listQuery.email"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.agentVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.AddAgent()}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改合伙人国籍信息","visible":_vm.modifyVisible,"width":"350px"},on:{"update:visible":function($event){_vm.modifyVisible=$event}}},[_c('div',{staticClass:"input-item"},[_c('el-select',{model:{value:(_vm.ModifyData.countryName),callback:function ($$v) {_vm.$set(_vm.ModifyData, "countryName", $$v)},expression:"ModifyData.countryName"}},_vm._l((_vm.countryMap),function(country){return _c('el-option',{key:country.key,attrs:{"value":country.key,"label":country.name}})}))],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.modifyVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.sureModify()}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"注销合伙人","visible":_vm.cancelVisible,"width":"350px","center":""},on:{"update:visible":function($event){_vm.cancelVisible=$event}}},[_c('div',{staticClass:"input-item",staticStyle:{"text-align":"center"}},[_c('h3',[_vm._v("确定要注销合伙人(ID: A45454)?")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.cancelVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.sureLogOff()}}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var agent_agent = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/agent/agent.vue
function injectStyle (ssrContext) {
  __webpack_require__("RMon")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  agent,
  agent_agent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_agent_agent = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "58s3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5MLu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getMassiveList;
/* harmony export (immutable) */ __webpack_exports__["a"] = emailDetail;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMessageList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojuntong on 2018/1/1.
 */


function getMassiveList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'massiveEmail/emailList',
    method: 'get',
    params: listQuery
  });
}

function emailDetail(emailId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'massiveEmail/' + emailId,
    method: 'get'
  });
}

function getMessageList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'messageList',
    method: 'get',
    params: listQuery
  });
}

/***/ }),

/***/ "5UI0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/massiveEmail.js
var massiveEmail = __webpack_require__("5MLu");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tools/messageNotification/messageNotification.vue
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


var pushTypeMap = [{ pushType: 'system', label: '系统消息' }, { pushType: 'normal', label: '普通消息' }, { pushType: 'sodive', label: 'sodive学院' }, { pushType: 'task', label: '任务消息' }, { pushType: 'production', label: '产品消息' }];
var pushTypeObj = pushTypeMap.reduce(function (obj, item) {
  obj[item.pushType] = item.label;
  return obj;
}, {});
/* harmony default export */ var messageNotification = ({
  name: 'messageNotification',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, pushType: undefined },
      pushTypeMap: pushTypeMap,
      loading: true
    };
  },
  created: function created() {
    this.GetMessageList();
  },

  methods: {
    GetMessageList: function GetMessageList() {
      var _this = this;

      this.loading = true;
      Object(massiveEmail["c" /* getMessageList */])(this.listQuery).then(function (response) {
        _this.list = response.data.messageList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    pushTypeFilter: function pushTypeFilter(pushType) {
      return pushTypeObj[pushType];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a638e9ba","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tools/messageNotification/messageNotification.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetMessageList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-select',{staticStyle:{"width":"140px"},attrs:{"placeholder":"推送类型","clearable":""},model:{value:(_vm.listQuery.pushType),callback:function ($$v) {_vm.$set(_vm.listQuery, "pushType", $$v)},expression:"listQuery.pushType"}},_vm._l((_vm.pushTypeMap),function(item){return _c('el-option',{key:item.pushType,attrs:{"value":item.pushType,"label":item.label}})}))],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"推送对象","prop":"pushTarget"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推送地区","prop":"pushRegion"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推送标题","min-width":"180","align":"left","prop":"pushTitle"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推送类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":"primary"}},[_vm._v(_vm._s(_vm._f("pushTypeFilter")(scope.row.pushType)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推送条数","width":"100","prop":"pushNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推送时间","prop":"pushTime"}})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"listQuery":_vm.listQuery,"GetList":_vm.GetMessageList,"total":_vm.total}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var messageNotification_messageNotification = (esExports);
// CONCATENATED MODULE: ./src/components/tools/messageNotification/messageNotification.vue
function injectStyle (ssrContext) {
  __webpack_require__("AGgl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  messageNotification,
  messageNotification_messageNotification,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var tools_messageNotification_messageNotification = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5sov":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6KT8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/scrollBar/scrollBar.vue
//
//
//
//
//
//
//

/* harmony default export */ var scrollBar = ({
  name: 'scroll-bar',
  data: function data() {
    return {
      marginTop: 0
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var scrollWrapperHeight = this.$refs.scrollWrapper.offsetHeight;
      var sideBarHeight = this.$refs.sideBar.offsetHeight;
      var direction = e.wheelDelta || -e.deltaY * 3;
      if (direction > 0) {
        // direction: up
        this.marginTop = Math.min(0, this.marginTop + direction);
      } else {
        if (scrollWrapperHeight < sideBarHeight) {
          if (this.marginTop < scrollWrapperHeight - sideBarHeight) {
            this.marginTop = this.marginTop;
          } else {
            this.marginTop = Math.max(this.marginTop + direction, scrollWrapperHeight - sideBarHeight);
          }
        } else {
          this.marginTop = 0;
        }
      }
    }
  },
  computed: {
    collpase: function collpase() {
      return !this.$store.state.isCollapse;
    }
  },
  watch: {
    collpase: function collpase(value) {
      // marginTop is 0 when menu is collapsing
      this.marginTop = value ? this.marginTop : 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b154ca9","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/scrollBar/scrollBar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scrollWrapper",staticClass:"scrollBar-wrapper",on:{"wheel":function($event){$event.preventDefault();_vm.handleScroll($event)}}},[_c('div',{ref:"sideBar",staticClass:"sideBar",style:({width: _vm.collpase? '200px' : '64px','margin-top': (_vm.marginTop + "px")})},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var scrollBar_scrollBar = (esExports);
// CONCATENATED MODULE: ./src/views/scrollBar/scrollBar.vue
function injectStyle (ssrContext) {
  __webpack_require__("YnKo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  scrollBar,
  scrollBar_scrollBar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_scrollBar_scrollBar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/sideBar/sidebarItem.vue

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



/* harmony default export */ var sidebarItem = ({
  name: 'sidebarItem',
  props: {
    permissionRoutes: {
      type: Array
    }
  },
  data: function data() {
    return { isCollapse1: true };
  },

  computed: extends_default()({}, Object(vuex_esm["d" /* mapState */])(['isCollapse'])),
  components: { scrollBar: views_scrollBar_scrollBar }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e2345e8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/sideBar/sidebarItem.vue
var sidebarItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu-wrapper"},[_vm._l((_vm.permissionRoutes),function(item){return (!item.hidden)?[(item.children && item.children.length === 1 && !item.children[0].children)?_c('router-link',{key:item.children[0].name,class:{'noDropdown': _vm.isCollapse},attrs:{"to":((item.path) + "/" + (item.children[0].path))}},[_c('el-menu-item',{attrs:{"index":item.children[0].path}},[(item.children[0].meta && item.children[0].meta.icon)?_c('svg-icon',{attrs:{"icon-class":item.children[0].meta.icon}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.children[0].meta.title))])],1)],1):_c('el-submenu',{key:item.path,attrs:{"index":item.path || item.name}},[_c('template',{slot:"title"},[(item.meta&&item.meta.icon)?_c('svg-icon',{attrs:{"icon-class":item.meta.icon}}):_vm._e(),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.meta.title))])],1),_vm._v(" "),_vm._l((item.children),function(child){return [(child.children)?_c('sidebar-item',{key:child.path,staticClass:"nest-submenu",attrs:{"permissionRoutes":[child]}}):(!child.hidden)?_c('router-link',{attrs:{"to":((item.path) + "/" + (child.path))}},[_c('el-menu-item',{attrs:{"index":child.path}},[(child.meta && child.meta.icon)?_c('svg-icon',{attrs:{"icon-class":child.meta.icon}}):_vm._e(),_vm._v(" "),(child.meta && child.meta.title)?_c('span',[_vm._v(_vm._s(child.meta.title)+" ")]):_vm._e()],1)],1):_vm._e()]})],2)]:_vm._e()})],2)}
var sidebarItem_staticRenderFns = []
var sidebarItem_esExports = { render: sidebarItem_render, staticRenderFns: sidebarItem_staticRenderFns }
/* harmony default export */ var sideBar_sidebarItem = (sidebarItem_esExports);
// CONCATENATED MODULE: ./src/views/sideBar/sidebarItem.vue
function sidebarItem_injectStyle (ssrContext) {
  __webpack_require__("9Mgy")
}
var sidebarItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var sidebarItem___vue_template_functional__ = false
/* styles */
var sidebarItem___vue_styles__ = sidebarItem_injectStyle
/* scopeId */
var sidebarItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var sidebarItem___vue_module_identifier__ = null
var sidebarItem_Component = sidebarItem_normalizeComponent(
  sidebarItem,
  sideBar_sidebarItem,
  sidebarItem___vue_template_functional__,
  sidebarItem___vue_styles__,
  sidebarItem___vue_scopeId__,
  sidebarItem___vue_module_identifier__
)

/* harmony default export */ var views_sideBar_sidebarItem = (sidebarItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/sideBar/SideBar.vue

//
//
//
//
//
//
//




/* harmony default export */ var SideBar = ({
  name: 'SideBar',
  computed: extends_default()({}, Object(vuex_esm["d" /* mapState */])(['isCollapse']), Object(vuex_esm["b" /* mapGetters */])(['permissionRoutes'])),
  components: { scrollBar: views_scrollBar_scrollBar, sidebarItem: views_sideBar_sidebarItem }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0d518645","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/sideBar/SideBar.vue
var SideBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('scrollBar',[_c('el-menu',{staticClass:"el-menu-vertical-demo",staticStyle:{"border":"none"},attrs:{"mode":"vertical","default-active":_vm.$route.path,"collapse":_vm.isCollapse,"background-color":"#304156","text-color":"#ffffff","unique-opened":true}},[_c('sidebar-item',{attrs:{"permissionRoutes":_vm.permissionRoutes}})],1)],1)}
var SideBar_staticRenderFns = []
var SideBar_esExports = { render: SideBar_render, staticRenderFns: SideBar_staticRenderFns }
/* harmony default export */ var sideBar_SideBar = (SideBar_esExports);
// CONCATENATED MODULE: ./src/views/sideBar/SideBar.vue
var SideBar_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SideBar___vue_template_functional__ = false
/* styles */
var SideBar___vue_styles__ = null
/* scopeId */
var SideBar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SideBar___vue_module_identifier__ = null
var SideBar_Component = SideBar_normalizeComponent(
  SideBar,
  sideBar_SideBar,
  SideBar___vue_template_functional__,
  SideBar___vue_styles__,
  SideBar___vue_scopeId__,
  SideBar___vue_module_identifier__
)

/* harmony default export */ var views_sideBar_SideBar = (SideBar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/hamburger/Hamburger.vue

//
//
//
//
//
//
//
//
//


/* harmony default export */ var Hamburger = ({
  name: 'Hamburger',
  methods: extends_default()({}, Object(vuex_esm["c" /* mapMutations */])(['openSideBar']), {
    changeCollapse: function changeCollapse() {
      this.openSideBar();
    }
  }),
  computed: extends_default()({}, Object(vuex_esm["d" /* mapState */])(['isCollapse']))
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0270da12","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/hamburger/Hamburger.vue
var Hamburger_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hamburger",class:{'collapsein': _vm.isCollapse}},[_c('el-button',{on:{"click":function($event){_vm.changeCollapse()}}},[_c('span',{staticClass:"line-top line"}),_vm._v(" "),_c('span',{staticClass:"line-middle line"}),_vm._v(" "),_c('span',{staticClass:"line-bottom line"})])],1)}
var Hamburger_staticRenderFns = []
var Hamburger_esExports = { render: Hamburger_render, staticRenderFns: Hamburger_staticRenderFns }
/* harmony default export */ var hamburger_Hamburger = (Hamburger_esExports);
// CONCATENATED MODULE: ./src/views/hamburger/Hamburger.vue
function Hamburger_injectStyle (ssrContext) {
  __webpack_require__("WOUc")
}
var Hamburger_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Hamburger___vue_template_functional__ = false
/* styles */
var Hamburger___vue_styles__ = Hamburger_injectStyle
/* scopeId */
var Hamburger___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Hamburger___vue_module_identifier__ = null
var Hamburger_Component = Hamburger_normalizeComponent(
  Hamburger,
  hamburger_Hamburger,
  Hamburger___vue_template_functional__,
  Hamburger___vue_styles__,
  Hamburger___vue_scopeId__,
  Hamburger___vue_module_identifier__
)

/* harmony default export */ var views_hamburger_Hamburger = (Hamburger_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/breakCrumb/BreakCrumb.vue
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

/* harmony default export */ var BreakCrumb = ({
  data: function data() {
    return {
      routerList: []
    };
  },
  created: function created() {
    this.getBreakCrumb();
  },

  methods: {
    getBreakCrumb: function getBreakCrumb() {
      var matched = this.$route.matched.filter(function (item) {
        return item.name;
      });
      var first = matched[0];
      if (first && first.name !== 'index') {
        matched = [{ path: '/', meta: { title: '首页' } }].concat(matched);
      }
      this.routerList = matched;
    }
  },
  watch: {
    $route: function $route() {
      this.getBreakCrumb();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1892c416","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/breakCrumb/BreakCrumb.vue
var BreakCrumb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breakCrumb-container"},[_c('el-breadcrumb',{attrs:{"separator":"/"}},_vm._l((_vm.routerList),function(item,index){return _c('el-breadcrumb-item',{key:item.path},[(item.redirect)?_c('span',[_vm._v(_vm._s(item.meta.title))]):_c('router-link',{attrs:{"to":item.path}},[_vm._v(_vm._s(item.meta.title)+" ")])],1)}))],1)}
var BreakCrumb_staticRenderFns = []
var BreakCrumb_esExports = { render: BreakCrumb_render, staticRenderFns: BreakCrumb_staticRenderFns }
/* harmony default export */ var breakCrumb_BreakCrumb = (BreakCrumb_esExports);
// CONCATENATED MODULE: ./src/views/breakCrumb/BreakCrumb.vue
function BreakCrumb_injectStyle (ssrContext) {
  __webpack_require__("dFmX")
}
var BreakCrumb_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var BreakCrumb___vue_template_functional__ = false
/* styles */
var BreakCrumb___vue_styles__ = BreakCrumb_injectStyle
/* scopeId */
var BreakCrumb___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var BreakCrumb___vue_module_identifier__ = null
var BreakCrumb_Component = BreakCrumb_normalizeComponent(
  BreakCrumb,
  breakCrumb_BreakCrumb,
  BreakCrumb___vue_template_functional__,
  BreakCrumb___vue_styles__,
  BreakCrumb___vue_scopeId__,
  BreakCrumb___vue_module_identifier__
)

/* harmony default export */ var views_breakCrumb_BreakCrumb = (BreakCrumb_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/scrollPane/scrollPane.vue
//
//
//
//
//
//
//

/* harmony default export */ var scrollPane = ({
  name: 'scroll-pane',
  data: function data() {
    return {
      left: 0
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var scrollWrapperWidth = this.$refs.scrollWrapper.offsetWidth;
      var scrollContainerWidth = this.$refs.scrollContainer.offsetWidth;
      var direction = e.wheelDelta || -e.deltaY * 3;
      if (direction > 0) {
        this.left = Math.min(0, this.left + direction);
      } else {
        if (scrollWrapperWidth < scrollContainerWidth) {
          if (this.left < scrollWrapperWidth - scrollContainerWidth) {
            this.left = this.left;
          } else {
            this.left = Math.max(this.left + direction, scrollWrapperWidth - scrollContainerWidth);
          }
        } else {
          this.left = 0;
        }
      }
    },
    moveToTarget: function moveToTarget(target) {
      var scrollWrapperWidth = this.$refs.scrollWrapper.offsetWidth;
      var scrollContainerWidth = this.$refs.scrollContainer.offsetWidth;
      var targetWidth = target.offsetWidth;
      var targetLeft = target.offsetLeft;
      if (targetLeft < scrollWrapperWidth - targetWidth) {
        // tag in the left
        this.left = 0;
      } else {
        // tag in the right
        this.left = Math.max(-(scrollContainerWidth - scrollWrapperWidth), -(targetLeft - (scrollWrapperWidth - targetWidth / 2)) - scrollWrapperWidth / 2);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60d0db22","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/scrollPane/scrollPane.vue
var scrollPane_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scrollWrapper",staticClass:"scroll-wrapper",on:{"wheel":function($event){$event.preventDefault();_vm.handleScroll($event)}}},[_c('div',{ref:"scrollContainer",staticClass:"scroll-container",style:({left: (_vm.left + "px")})},[_vm._t("default")],2)])}
var scrollPane_staticRenderFns = []
var scrollPane_esExports = { render: scrollPane_render, staticRenderFns: scrollPane_staticRenderFns }
/* harmony default export */ var scrollPane_scrollPane = (scrollPane_esExports);
// CONCATENATED MODULE: ./src/views/scrollPane/scrollPane.vue
function scrollPane_injectStyle (ssrContext) {
  __webpack_require__("QnQv")
}
var scrollPane_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var scrollPane___vue_template_functional__ = false
/* styles */
var scrollPane___vue_styles__ = scrollPane_injectStyle
/* scopeId */
var scrollPane___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var scrollPane___vue_module_identifier__ = null
var scrollPane_Component = scrollPane_normalizeComponent(
  scrollPane,
  scrollPane_scrollPane,
  scrollPane___vue_template_functional__,
  scrollPane___vue_styles__,
  scrollPane___vue_scopeId__,
  scrollPane___vue_module_identifier__
)

/* harmony default export */ var views_scrollPane_scrollPane = (scrollPane_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/routeTag/Tag.vue

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


/* harmony default export */ var Tag = ({
  data: function data() {
    return {
      visible: false,
      left: '',
      top: '',
      selectedTag: {}
    };
  },

  computed: {
    visitedTags: function visitedTags() {
      return this.$store.state.routeTag.visitedTags;
    }
  },
  methods: {
    generateRoute: function generateRoute() {
      if (this.$route.name) {
        return this.$route;
      }
      return false;
    },
    addTags: function addTags() {
      var route = this.generateRoute();
      if (!route) {
        return false;
      }
      this.$store.dispatch('addVisibleTag', route);
    },
    isActive: function isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name;
    },
    closeTag: function closeTag(route) {
      var _this = this;

      this.$store.dispatch('delVisibleTag', route).then(function (tags) {
        var lastTag = tags.splice(-1)[0];
        if (lastTag) {
          _this.$router.push(lastTag.path);
        } else {
          _this.$router.push('/');
        }
      });
    },
    closeOtherTag: function closeOtherTag() {
      this.$router.push(this.selectedTag);
      this.$store.dispatch('delOtherTag', this.selectedTag);
    },
    closeAllTag: function closeAllTag() {
      var _this2 = this;

      this.$store.dispatch('delAllTag').then(function () {
        _this2.$router.push('/');
      });
    },
    openMenu: function openMenu(tag, e) {
      this.visible = true;
      this.selectedTag = tag;
      this.left = e.clientX;
      this.top = e.clientY;
    },
    closeMenu: function closeMenu() {
      this.visible = false;
    },
    moveToCurrentTag: function moveToCurrentTag() {
      var _this3 = this;

      var tags = this.$refs.tag;
      this.$nextTick(function () {
        if (tags) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = get_iterator_default()(tags), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var tag = _step.value;

              if (tag.to === _this3.$route.path) {
                _this3.$refs.scrollPane.moveToTarget(tag.$el);
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.addTags();
    this.moveToCurrentTag();
  },

  watch: {
    $route: function $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible: function visible(value) {
      if (value) {
        window.addEventListener('click', this.closeMenu);
      } else {
        window.removeEventListener('click', this.closeMenu);
      }
    }
  },
  components: { scrollPane: views_scrollPane_scrollPane }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-708a1d55","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/routeTag/Tag.vue
var Tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tag-views-container"},[_c('scrollPane',{ref:"scrollPane"},_vm._l((Array.from(_vm.visitedTags)),function(route){return (_vm.visitedTags.length !== 0)?_c('router-link',{key:route.path,ref:"tag",refInFor:true,class:_vm.isActive(route)? 'active' : '',attrs:{"to":route.path},nativeOn:{"contextmenu":function($event){$event.preventDefault();_vm.openMenu(route, $event)}}},[_c('el-tag',{attrs:{"disable-transitions":false,"closable":""},on:{"close":function($event){$event.preventDefault();$event.stopPropagation();_vm.closeTag(route)}}},[_vm._v(_vm._s(route.title))])],1):_vm._e()})),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"contextMenu",style:({left: (_vm.left + "px"), top: (_vm.top + "px")})},[_c('li',{on:{"click":function($event){_vm.closeTag(_vm.selectedTag)}}},[_vm._v("closeTag")]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.closeOtherTag()}}},[_vm._v("closeOtherTag")]),_vm._v(" "),_c('li',{on:{"click":_vm.closeAllTag}},[_vm._v("closeAllTag")])])],1)}
var Tag_staticRenderFns = []
var Tag_esExports = { render: Tag_render, staticRenderFns: Tag_staticRenderFns }
/* harmony default export */ var routeTag_Tag = (Tag_esExports);
// CONCATENATED MODULE: ./src/views/routeTag/Tag.vue
function Tag_injectStyle (ssrContext) {
  __webpack_require__("i6EG")
}
var Tag_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Tag___vue_template_functional__ = false
/* styles */
var Tag___vue_styles__ = Tag_injectStyle
/* scopeId */
var Tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tag___vue_module_identifier__ = null
var Tag_Component = Tag_normalizeComponent(
  Tag,
  routeTag_Tag,
  Tag___vue_template_functional__,
  Tag___vue_styles__,
  Tag___vue_scopeId__,
  Tag___vue_module_identifier__
)

/* harmony default export */ var views_routeTag_Tag = (Tag_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/layout/layout.vue

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






/* harmony default export */ var layout = ({
  name: 'app',
  components: {
    SideBar: views_sideBar_SideBar,
    Hamburger: views_hamburger_Hamburger,
    BreakCrumb: views_breakCrumb_BreakCrumb,
    tagViews: views_routeTag_Tag
  },
  computed: extends_default()({}, Object(vuex_esm["d" /* mapState */])(['isCollapse']), Object(vuex_esm["b" /* mapGetters */])(['cacheTags']))
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-505a05c1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/layout/layout.vue
var layout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SideBar'),_vm._v(" "),_c('div',{staticClass:"main-wrapper",style:({'margin-left':  _vm.isCollapse? '64px' : '200px'})},[_c('div',{staticClass:"el-menu-horizontal"},[_c('Hamburger'),_vm._v(" "),_c('BreakCrumb')],1),_vm._v(" "),_c('tag-views'),_vm._v(" "),_c('div',{staticClass:"app-main"},[_c('keep-alive',{attrs:{"include":_vm.cacheTags}},[_c('transition',{attrs:{"name":"fade","mode":"out-in","appear":""}},[_c('router-view')],1)],1)],1)],1)],1)}
var layout_staticRenderFns = []
var layout_esExports = { render: layout_render, staticRenderFns: layout_staticRenderFns }
/* harmony default export */ var layout_layout = (layout_esExports);
// CONCATENATED MODULE: ./src/components/layout/layout.vue
var layout_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var layout___vue_template_functional__ = false
/* styles */
var layout___vue_styles__ = null
/* scopeId */
var layout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var layout___vue_module_identifier__ = null
var layout_Component = layout_normalizeComponent(
  layout,
  layout_layout,
  layout___vue_template_functional__,
  layout___vue_styles__,
  layout___vue_scopeId__,
  layout___vue_module_identifier__
)

/* harmony default export */ var components_layout_layout = __webpack_exports__["default"] = (layout_Component.exports);


/***/ }),

/***/ "90Fk":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrowleftcircle.svg": "Zcnn",
	"./arrowrightcircle.svg": "RAd+",
	"./back.svg": "RN8c",
	"./close.svg": "toIl",
	"./dingdan.svg": "KY4/",
	"./duihuanquan.svg": "PTLo",
	"./neirongguanli.svg": "2e0o",
	"./password.svg": "QjmH",
	"./people.svg": "GPe0",
	"./shouye.svg": "IeYc",
	"./task.svg": "EK3d",
	"./tools.svg": "a3rm",
	"./user.svg": "VdD3",
	"./xitong.svg": "z8FN",
	"./yunyingguanli.svg": "be/K"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "90Fk";

/***/ }),

/***/ "9E3x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Ks3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Mgy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "A8EJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/tinymce/tinymce.vue + 5 modules
var tinymce = __webpack_require__("Xx3T");

// EXTERNAL MODULE: ./src/api/massiveEmail.js
var massiveEmail = __webpack_require__("5MLu");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tools/massEmail/components/emailTemplate.vue
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



/* harmony default export */ var emailTemplate = ({
  name: 'emailTemplate',
  data: function data() {
    return {
      emailForm: {
        title: '',
        language: '',
        content: ''
      },
      emailRules: {
        language: [{ required: true, message: '请选择语言', trigger: 'blur' }],
        title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        content: [{ required: true, message: '邮件内容不能为空', trigger: 'blur' }]
      }
    };
  },
  created: function created() {
    this.initContent();
  },

  watch: {
    $route: function $route() {
      this.initContent();
    }
  },
  methods: {
    initContent: function initContent() {
      var _this = this;

      if (this.$route.params.emailId) {
        Object(massiveEmail["a" /* emailDetail */])(this.$route.params.emailId).then(function (response) {
          console.log(response);
          _this.emailForm = {
            title: response.data.emailDetail.title,
            language: response.data.emailDetail.language,
            content: response.data.emailDetail.content
          };
        });
      } else {
        this.emailForm = {
          title: '',
          language: '',
          content: ''
        };
      }
    },
    submitEmail: function submitEmail() {
      var _this2 = this;

      this.$refs.emailForm.validate(function (valid) {
        if (valid) {
          if (_this2.$route.params.emailId) {
            _this2.$notify({
              title: '操作成功',
              message: '邮件模板修改成功',
              type: 'success'
            });
          } else {
            _this2.$notify({
              title: '操作成功',
              message: '邮件模板创建成功',
              type: 'success'
            });
          }
        }
      });
    },
    resetForm: function resetForm() {
      this.$refs.emailForm.resetFields();
    }
  },
  components: { tinymce: tinymce["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64992b54","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tools/massEmail/components/emailTemplate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"emailForm",attrs:{"model":_vm.emailForm,"rules":_vm.emailRules}},[_c('el-form-item',{attrs:{"label":"语言","prop":"language"}},[_c('el-radio-group',{model:{value:(_vm.emailForm.language),callback:function ($$v) {_vm.$set(_vm.emailForm, "language", $$v)},expression:"emailForm.language"}},[_c('el-radio',{attrs:{"label":"繁体中文"}},[_vm._v("繁体中文")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"简体中文"}},[_vm._v("简体中文")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"英文"}}),_vm._v(" "),_c('el-radio',{attrs:{"label":"韩文"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮件标题","prop":"title"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.emailForm.title),callback:function ($$v) {_vm.$set(_vm.emailForm, "title", $$v)},expression:"emailForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"content"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.emailForm.content),callback:function ($$v) {_vm.$set(_vm.emailForm, "content", $$v)},expression:"emailForm.content"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{on:{"click":_vm.resetForm}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitEmail}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_emailTemplate = (esExports);
// CONCATENATED MODULE: ./src/components/tools/massEmail/components/emailTemplate.vue
function injectStyle (ssrContext) {
  __webpack_require__("zQzX")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  emailTemplate,
  components_emailTemplate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var massEmail_components_emailTemplate = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "AGgl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "C4Hi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CIBF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CJAC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/userManage.js
var userManage = __webpack_require__("ms7A");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/tab/certificatePending.vue

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


/* harmony default export */ var certificatePending = ({
  name: 'certificatePending',
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      pending: { certificateList: null, total: 1 },
      loading: true,
      listQuery: {
        page: 1,
        limit: 10,
        type: this.type, // 用以区分搜索证件状态
        userId: null,
        name: null
      },
      visible: false,
      selectedUserId: '',
      reason: '',
      imageList: []
    };
  },
  created: function created() {
    this.GetCertificateList();
  },

  methods: {
    GetCertificateList: function GetCertificateList() {
      var _this = this;

      this.loading = true;
      Object(userManage["c" /* getCoachCertificateList */])(this.listQuery).then(function (response) {
        _this.pending = response.data;
        _this.loading = false;
      });
    },
    browseCertificate: function browseCertificate(row) {
      this.imageList = row.image;
    },
    pass: function pass(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.pending.certificateList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.userId === row.userId) {
            var index = this.pending.certificateList.indexOf(i);
            this.pending.certificateList[index]['status'] = 1;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$notify({
        type: 'success',
        title: '审核通过',
        message: '已将该证书标记为合格证书',
        duration: 1500
      });
    },
    noPass: function noPass(row) {
      this.visible = true;
      this.selectedUserId = row.userId;
    },
    sureNoPass: function sureNoPass() {
      if (this.reason === '') {
        this.$message({
          message: '请输入不通过理由',
          type: 'warning'
        });
        return false;
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(this.pending.certificateList), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (i.userId === this.selectedUserId) {
            var index = this.pending.certificateList.indexOf(i);
            this.pending.certificateList[index]['status'] = 2;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.visible = false;
      this.reason = '';
      this.$notify({
        type: 'success',
        title: '审核不通过',
        message: '已将该证书标记为不合格证书',
        duration: 1500
      });
    },
    acceptQuery: function acceptQuery(query) {
      // this.listQuery = Object.assign(this.listQuery, query.listQuery)
      // this.listQuery = { ...this.listQuery, ...query.listQuery }
      this.listQuery = query.listQuery;
      this.listQuery.type = this.type;
    }
  },
  filters: {
    statusFilter: function statusFilter(val) {
      var status = ['待审核', '已审核', '审核失败'];
      return status[val];
    },
    statusTagFilter: function statusTagFilter(val) {
      var status = ['info', 'success', 'danger'];
      return status[val];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8564c134","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/tab/certificatePending.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetCertificateList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"120px"},attrs:{"placeholder":"姓名","clearable":""},model:{value:(_vm.listQuery.name),callback:function ($$v) {_vm.$set(_vm.listQuery, "name", $$v)},expression:"listQuery.name"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.pending.certificateList,"element-loading-text":"小主,我需要时间...","border":""}},[_c('el-table-column',{attrs:{"label":"序号","prop":"id","width":"60px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户类型","prop":"userType"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"姓名","prop":"name"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"认证机构","prop":"institution"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发证时间","prop":"getCertificateTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提交时间","prop":"submitCertificateTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"min-width":"180px","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":function($event){_vm.noPass(scope.row)}}},[_vm._v("不通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看")])]:(scope.row.status === 1)?[_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看")])]:[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.pending.total,"listQuery":_vm.listQuery,"GetList":_vm.GetCertificateList}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"将此证书标记为不通过","visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',[_c('el-input',{attrs:{"placeholder":"请输入不通过理由"},model:{value:(_vm.reason),callback:function ($$v) {_vm.reason=$$v},expression:"reason"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.sureNoPass()}}},[_vm._v("确定")])],1)]),_vm._v(" "),_c('photo-swipe',{attrs:{"imageList":_vm.imageList}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var tab_certificatePending = (esExports);
// CONCATENATED MODULE: ./src/views/tab/certificatePending.vue
function injectStyle (ssrContext) {
  __webpack_require__("xASn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  certificatePending,
  tab_certificatePending,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_tab_certificatePending = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "CcMF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D8AR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/taskManage/index.vue
//
//
//
//
//
//
//

/* harmony default export */ var taskManage = ({
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-55662ed1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/taskManage/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"fade","mode":"out-in","appear":""}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var operationManagement_taskManage = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/taskManage/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("SwjO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  taskManage,
  operationManagement_taskManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_operationManagement_taskManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DD4h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/system.js
var system = __webpack_require__("V/8j");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/system/appManage/appManage.vue
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



/* harmony default export */ var appManage = ({
  name: 'appManage',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1 },
      visible: false,
      versionForm: {
        id: null,
        systemType: '',
        applicationType: '',
        downloadURL: '',
        systemName: '',
        version: '',
        forceUpdate: '',
        createTime: ''
      },
      versionRules: {
        systemType: [{ required: true, trigger: 'blur', message: '请选择系统类型' }],
        applicationType: [{ required: true, trigger: 'blur', message: '请选择应用类型' }],
        downloadURL: [{ required: true, trigger: 'blur', message: '请填写下载地址' }],
        systemName: [{ required: true, trigger: 'blur', message: '请填写系统名称' }],
        version: [{ required: true, trigger: 'blur', message: '请填写版本号' }],
        forceUpdate: [{ required: true, trigger: 'blur', message: '请选择是否强制更新' }]
      },
      isEdit: false
    };
  },
  created: function created() {
    this.GetVersionList();
  },

  methods: {
    GetVersionList: function GetVersionList() {
      var _this = this;

      Object(system["d" /* getVersionList */])(this.listQuery).then(function (response) {
        _this.list = response.data.versionList;
        _this.total = response.data.total;
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.versionForm.validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            _this2.list.forEach(function (item, index) {
              if (item.id === _this2.versionForm.id) {
                _this2.versionForm.createTime = Object(utils["a" /* formatTime */])(_this2.versionForm.createTime);
                _this2.list.splice(index, 1, _this2.versionForm);
                _this2.$notify({
                  title: '修改成功',
                  message: '已修改版本信息',
                  type: 'success',
                  duration: 2000
                });
              }
            });
          } else {
            _this2.versionForm.createTime = Object(utils["a" /* formatTime */])(_this2.versionForm.createTime);
            _this2.list.unshift(_this2.versionForm);
            _this2.$notify({
              title: '提交成功',
              message: '成功提交版本信息',
              type: 'success',
              duration: 2000
            });
          }
          _this2.visible = false;
          _this2.isEdit = false;
        }
      });
    },
    handleCreate: function handleCreate() {
      var _this3 = this;

      this.visible = true;
      this.resetForm();
      this.$nextTick(function () {
        _this3.$refs.versionForm.clearValidate();
      });
    },
    resetForm: function resetForm() {
      this.versionForm = {
        id: null,
        systemType: '',
        applicationType: '',
        downloadURL: '',
        systemName: '',
        version: '',
        forceUpdate: '',
        createTime: ''
      };
    },
    cancelForm: function cancelForm() {
      this.resetForm();
      this.visible = false;
      this.isEdit = false;
    },
    editVersionInfo: function editVersionInfo(row) {
      this.visible = true;
      this.isEdit = true;
      this.versionForm = {
        id: row.id,
        systemType: row.systemType + '',
        applicationType: row.applicationType + '',
        downloadURL: row.downloadURL,
        systemName: row.systemName,
        version: row.version,
        forceUpdate: row.forceUpdate + '',
        createTime: row.createTime
      };
    }
  },
  filters: {
    systemTypeFilter: function systemTypeFilter(val) {
      var systemTypeMap = ['教练版', '用户版'];
      return systemTypeMap[val];
    },
    applicationTypeFilter: function applicationTypeFilter(val) {
      var applicationTypeMap = ['Android', 'IOS'];
      return applicationTypeMap[val];
    },
    forceUpdateFilter: function forceUpdateFilter(val) {
      var forceUpdateMap = ['不强制', '强制'];
      return forceUpdateMap[val];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ca0c8e6a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/system/appManage/appManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-header',[_c('div',{staticClass:"filter-item",staticStyle:{"text-align":"right"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleCreate}},[_vm._v("新增"),_c('i',{staticClass:"el-icon-circle-plus"})])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"系统类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("systemTypeFilter")(scope.row.systemType)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"系统名称","prop":"systemName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"应用类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("applicationTypeFilter")(scope.row.applicationType)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"版本号","prop":"version"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"强制更新"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("forceUpdateFilter")(scope.row.forceUpdate)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"下载地址","prop":"downloadURL","min-width":"300","align":"left"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.editVersionInfo(scope.row)}}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v("编辑")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetVersionList}})],1),_vm._v(" "),_c('el-dialog',{staticClass:"versionDialog",attrs:{"title":"新增/编辑","visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"versionForm",attrs:{"model":_vm.versionForm,"rules":_vm.versionRules,"inline":""}},[_c('el-form-item',{attrs:{"label":"系统类型","prop":"systemType"}},[_c('el-radio-group',{model:{value:(_vm.versionForm.systemType),callback:function ($$v) {_vm.$set(_vm.versionForm, "systemType", $$v)},expression:"versionForm.systemType"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("用户版")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"0"}},[_vm._v("教练版版")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"应用类型","prop":"applicationType"}},[_c('el-radio-group',{model:{value:(_vm.versionForm.applicationType),callback:function ($$v) {_vm.$set(_vm.versionForm, "applicationType", $$v)},expression:"versionForm.applicationType"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("Android")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("IOS")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"下载地址","prop":"downloadURL"}},[_c('el-input',{staticStyle:{"width":"400px"},attrs:{"clearable":""},model:{value:(_vm.versionForm.downloadURL),callback:function ($$v) {_vm.$set(_vm.versionForm, "downloadURL", $$v)},expression:"versionForm.downloadURL"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"系统名称","prop":"systemName"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.versionForm.systemName),callback:function ($$v) {_vm.$set(_vm.versionForm, "systemName", $$v)},expression:"versionForm.systemName"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block"},attrs:{"label":"版本号","prop":"version"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.versionForm.version),callback:function ($$v) {_vm.$set(_vm.versionForm, "version", $$v)},expression:"versionForm.version"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"时间"}},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期时间"},model:{value:(_vm.versionForm.createTime),callback:function ($$v) {_vm.$set(_vm.versionForm, "createTime", $$v)},expression:"versionForm.createTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"强制更新","prop":"forceUpdate"}},[_c('el-radio-group',{model:{value:(_vm.versionForm.forceUpdate),callback:function ($$v) {_vm.$set(_vm.versionForm, "forceUpdate", $$v)},expression:"versionForm.forceUpdate"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("不强制")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("强制")])],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[(_vm.isEdit)?_c('el-button',{on:{"click":_vm.cancelForm}},[_vm._v("取消")]):_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info"},on:{"click":_vm.resetForm}},[_vm._v("重置")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var appManage_appManage = (esExports);
// CONCATENATED MODULE: ./src/components/system/appManage/appManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("yLWg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  appManage,
  appManage_appManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var system_appManage_appManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DJKJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/massiveEmail.js
var massiveEmail = __webpack_require__("5MLu");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tools/massEmail/massEmail.vue


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


/* harmony default export */ var massEmail = ({
  name: 'massEmail',
  data: function data() {
    return {
      activeName: 'emailTemplate',
      emailList: null,
      templateList: null,
      emailTotal: 1,
      templateTotal: 1,
      listQuery: { page: 1 },
      loading: true
    };
  },
  created: function created() {
    this.GetEmailList();
  },

  methods: {
    GetEmailList: function GetEmailList() {
      var _this = this;

      this.loading = true;
      Object(massiveEmail["b" /* getMassiveList */])(this.listQuery).then(function (response) {
        _this.templateList = response.data.templateList;
        _this.emailList = response.data.emailList;
        _this.templateTotal = response.data.totalMap[0];
        _this.emailTotal = response.data.totalMap[1];
        _this.loading = false;
      });
    },
    deleteTemplate: function deleteTemplate(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.templateList.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var item = _ref2[1];

          if (item.id === row.id) {
            this.templateList.splice(i, 1);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-277bafa4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tools/massEmail/massEmail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"name":"emailTemplate","label":"邮件模板"}},[_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"data":_vm.templateList,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"邮件标题","align":"left","prop":"title"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"语言","align":"center","prop":"language"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","align":"center","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{attrs:{"to":("editTemplate/" + (scope.row.id))}},[_c('el-button',{attrs:{"type":"primary"}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v("编辑\n                ")])],1),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.deleteTemplate(scope.row)}}},[_vm._v("删除")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.templateTotal,"listQuery":_vm.listQuery,"GetList":_vm.GetEmailList}})],1)],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"name":"emailList","label":"群发邮件列表"}},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"data":_vm.emailList,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"标题","prop":"title","min-width":"150"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"语言","prop":"language","align":"center","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发送对象","prop":"sendNum","align":"center","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发送时间","prop":"sendTime","align":"center","width":"180"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var massEmail_massEmail = (esExports);
// CONCATENATED MODULE: ./src/components/tools/massEmail/massEmail.vue
function injectStyle (ssrContext) {
  __webpack_require__("9E3x")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  massEmail,
  massEmail_massEmail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var tools_massEmail_massEmail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "E00v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EK3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-task",
  "use": "icon-task-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-task\"><path fill=\"#ffffff\" d=\"M337.549318 593.908498l97.849562 97.849562c7.643074 7.643074 17.660218 11.464099 27.677363 11.464099 10.013051 0 20.030196-3.821025 27.669176-11.464099l195.700147-195.695031c15.286148-15.286148 15.286148-40.065508 0-55.350632-15.286148-15.286148-40.060391-15.286148-55.346539 0L463.076242 608.734158l-70.176292-70.173223c-15.286148-15.281031-40.064484-15.281031-55.350632 0C322.268286 553.844014 322.268286 578.626443 337.549318 593.908498zM864.593965 127.748523 693.416328 127.748523c6.260587 8.999978 9.94142 19.928888 9.94142 31.722492s-3.680832 22.722514-9.94142 31.722492l139.455145 0 0 704.375425L191.022103 895.568932 191.022103 191.193507 329.559343 191.193507c-6.260587-8.999978-9.94142-19.928888-9.94142-31.722492s3.680832-22.722514 9.94142-31.722492L159.299611 127.748523c-17.520025 0-31.722492 14.202467-31.722492 31.722492l0 767.82041c0 17.520025 14.202467 31.722492 31.722492 31.722492l705.294354 0c17.520025 0 31.722492-14.202467 31.722492-31.722492L896.316457 159.471015C896.316457 141.950989 882.113991 127.748523 864.593965 127.748523zM444.80204 256.002558l132.0065 0c33.909297 0 61.398372-27.489074 61.398372-61.398372l0-5.457292c0-33.909297-27.489074-61.398372-61.398372-61.398372l-2.593058 0c2.105964-5.276167 3.275603-11.027148 3.275603-17.055444 0-25.432229-20.61655-46.048779-46.048779-46.048779l-38.885636 0c-25.432229 0-46.048779 20.61655-46.048779 46.048779 0 6.028297 1.170662 11.779278 3.276626 17.055444l-4.982478 0c-33.909297 0-61.398372 27.489074-61.398372 61.398372l0 5.457292C383.403668 228.513484 410.892743 256.002558 444.80204 256.002558z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "EQWy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/shareStatistics/children/statistics.vue
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


/* harmony default export */ var statistics = ({
  name: 'statistics',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, timeCircle: null },
      loading: true,
      timeCircleMap: [{ key: 'week', time: '最近一周' }, { key: 'month', time: '最近一个月' }, { key: 'quarterYear', time: '最近3个月' }, { key: 'halfYear', time: '最近半年' }, { key: 'year', time: '最近一年' }]
    };
  },
  created: function created() {
    this.GetStatisticsList();
  },

  methods: {
    GetStatisticsList: function GetStatisticsList() {
      var _this = this;

      this.loading = true;
      Object(operationManage["l" /* getStatisticsList */])(this.listQuery).then(function (response) {
        _this.list = response.data.statisticsList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-070a75f0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/shareStatistics/children/statistics.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-header',[_c('div',{staticClass:"filter-container",staticStyle:{"height":"60px"}},[_c('div',{staticClass:"filter-item",staticStyle:{"margin-top":"10px"}},[_c('el-select',{staticStyle:{"width":"130px"},attrs:{"clearable":""},on:{"change":_vm.GetStatisticsList},model:{value:(_vm.listQuery.timeCircle),callback:function ($$v) {_vm.$set(_vm.listQuery, "timeCircle", $$v)},expression:"listQuery.timeCircle"}},_vm._l((_vm.timeCircleMap),function(item){return _c('el-option',{key:item.key,attrs:{"value":item.key,"label":item.time}})}))],1)])]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"分享内容","prop":"shareContent"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"facebook","prop":"facebook"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"微信朋友圈","prop":"wechatMoments"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"微信","prop":"wechat"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"twitter","prop":"twitter"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"总分享次数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.facebook + scope.row.wechatMoments + scope.row.wechat + scope.row.twitter))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"总浏览次数","prop":"browseNum"}})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetStatisticsList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var children_statistics = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/shareStatistics/children/statistics.vue
function injectStyle (ssrContext) {
  __webpack_require__("CIBF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  statistics,
  children_statistics,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var shareStatistics_children_statistics = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FKFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/tinymce/tinymce.vue + 5 modules
var tinymce = __webpack_require__("Xx3T");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/sodiveCollege/editSodive.vue
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




/* harmony default export */ var editSodive = ({
  name: 'editSodive',
  data: function data() {
    return {
      programaMap: [{ programa: 'sodive', label: 'sodive学院' }],
      routeId: this.$route.params.id, // 区分是新增还是编辑
      sodiveForm: {
        id: (Math.random() * 100000000).toFixed(0),
        title: '',
        description: '',
        top: '',
        programaImage: [],
        createTime: '',
        programa: '',
        detail: '',
        status: 'draft'
      },
      sodiveRules: {
        title: [{ required: true, trigger: 'blur', message: '文章标题不能为空' }],
        description: [{ required: true, trigger: 'blur', message: '文章描述不能为空' }],
        programaImage: [{ required: true, trigger: 'blur', message: '请上传文章缩略图' }],
        programa: [{ required: true, trigger: 'blur', message: '请选择文章栏目' }],
        detail: [{ required: true, trigger: 'blur', message: '文章内容不能为空' }]
      }
    };
  },
  created: function created() {
    this.GetSodive();
  },

  methods: {
    submitForm: function submitForm() {
      var _this = this;

      if (this.sodiveForm.programaImage.length === 0) {
        this.$message.warning('请等待图片上传成功!');
        return;
      }
      this.$refs.sodiveForm.validate(function (valid) {
        if (valid) {
          _this.sodiveForm.createTime = Object(utils["a" /* formatTime */])();
          Object(operationManage["d" /* editSodive */])(_this.sodiveForm, _this.routeId).then(function (response) {
            _this.$message.success('发布成功');
          });
        }
      });
    },
    GetSodive: function GetSodive() {
      var _this2 = this;

      Object(operationManage["j" /* getSodive */])(this.$route.params.id).then(function (response) {
        if (response.data.sodiveDetail !== undefined) {
          _this2.sodiveForm = response.data.sodiveDetail;
        }
      });
    },
    resetForm: function resetForm() {
      var _this3 = this;

      this.sodiveForm = {
        id: (Math.random() * 100000000).toFixed(0),
        title: '',
        description: '',
        top: '',
        programaImage: [],
        createTime: '',
        programa: '',
        detail: '',
        status: 'draft'
      };
      this.$nextTick(function () {
        _this3.$refs.sodiveForm.clearValidate();
      });
    },
    handleSuccess: function handleSuccess(response, file) {
      this.sodiveForm.programaImage.push({ name: file.name, url: file.url });
    }
  },
  components: { tinymce: tinymce["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-23455de4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/sodiveCollege/editSodive.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sodive-container"},[_c('el-form',{ref:"sodiveForm",attrs:{"inline":"","model":_vm.sodiveForm,"rules":_vm.sodiveRules}},[_c('el-form-item',{attrs:{"label":"文章标题","prop":"title"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.sodiveForm.title),callback:function ($$v) {_vm.$set(_vm.sodiveForm, "title", $$v)},expression:"sodiveForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"描述","prop":"description"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.sodiveForm.description),callback:function ($$v) {_vm.$set(_vm.sodiveForm, "description", $$v)},expression:"sodiveForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否置顶"}},[_c('el-radio-group',{model:{value:(_vm.sodiveForm.top),callback:function ($$v) {_vm.$set(_vm.sodiveForm, "top", $$v)},expression:"sodiveForm.top"}},[_c('el-radio',{attrs:{"label":"yes"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"no"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"programaImage"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","list-type":"picture-card","file-list":_vm.sodiveForm.programaImage,"on-success":_vm.handleSuccess}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"栏目","prop":"programa"}},[_c('el-select',{model:{value:(_vm.sodiveForm.programa),callback:function ($$v) {_vm.$set(_vm.sodiveForm, "programa", $$v)},expression:"sodiveForm.programa"}},_vm._l((_vm.programaMap),function(item){return _c('el-option',{key:item.programa,attrs:{"value":item.programa,"label":item.label}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"内容","prop":"detail"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.sodiveForm.detail),callback:function ($$v) {_vm.$set(_vm.sodiveForm, "detail", $$v)},expression:"sodiveForm.detail"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{on:{"click":_vm.resetForm}},[_vm._v("重置")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("发布")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sodiveCollege_editSodive = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/sodiveCollege/editSodive.vue
function injectStyle (ssrContext) {
  __webpack_require__("Rlrl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  editSodive,
  sodiveCollege_editSodive,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_sodiveCollege_editSodive = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Fqwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/system.js
var system = __webpack_require__("V/8j");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/system/urlManage/components/urlInfo.vue
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


/* harmony default export */ var urlInfo = ({
  data: function data() {
    return {
      list: null,
      visible: false,
      isEdit: false,
      urlForm: {
        id: null,
        url: '',
        introduce: '',
        language: '',
        status: ''
      },
      urlRules: {
        url: [{ required: true, message: '网址不能为空', trigger: 'blur' }],
        language: [{ required: true, message: '语言选择不能为空', trigger: 'change' }],
        status: [{ required: true, message: '请选择是否有效', trigger: 'change' }]
      },
      languageMap: ['en', 'ch']
    };
  },
  created: function created() {
    this.GetUrlInfo();
  },

  methods: {
    GetUrlInfo: function GetUrlInfo() {
      var _this = this;

      Object(system["b" /* getUrlInfo */])(this.$route.params.urlId).then(function (response) {
        _this.list = response.data.urlInfo.urlMap;
      });
    },
    editUrl: function editUrl(row) {
      this.isEdit = true;
      this.visible = true;
      this.urlForm = {
        id: row.id,
        url: row.url,
        introduce: row.introduce,
        language: row.language,
        status: row.status + ''
      };
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.urlForm.validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            _this2.list.forEach(function (item, index) {
              if (item.id === _this2.urlForm.id) {
                _this2.list.splice(index, 1, _this2.urlForm);
                _this2.$message.success('编辑成功');
              }
            });
          } else {
            Object(system["a" /* createUrl */])(_this2.urlForm).then(function () {
              _this2.$message.success('新增成功');
              _this2.list.unshift(_this2.urlForm);
            });
          }
          _this2.visible = false;
        }
      });
    },
    resetForm: function resetForm() {
      this.isEdit = false;
      this.urlForm = {
        id: null,
        url: '',
        introduce: '',
        language: '',
        status: ''
      };
    },
    handleCreate: function handleCreate() {
      var _this3 = this;

      this.resetForm();
      this.visible = true;
      this.$nextTick(function () {
        _this3.$refs.urlForm.clearValidate();
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = ['无效', '有效'];
      return statusMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-de09e166","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/system/urlManage/components/urlInfo.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-header',{staticStyle:{"text-align":"right"}},[_c('div',{staticClass:"filter-container"},[_c('div',{staticClass:"filter-item",staticStyle:{"float":"left"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.goBack}},[_c('svg-icon',{attrs:{"iconClass":'back'}}),_vm._v("网址管理")],1)],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleCreate}},[_vm._v("新增"),_c('i',{staticClass:"el-icon-circle-plus"})])],1)])]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"网页链接","prop":"url","min-width":"300"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"网页说明","prop":"introduce","min-width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"语言","prop":"language","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit"},on:{"click":function($event){_vm.editUrl(scope.row)}}},[_vm._v("编辑")])]}}])})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.isEdit ? '编辑' : '新增',"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"content"},[_c('el-form',{ref:"urlForm",attrs:{"model":_vm.urlForm,"rules":_vm.urlRules,"inline":""}},[_c('el-form-item',{attrs:{"label":"网页地址","prop":"url"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.urlForm.url),callback:function ($$v) {_vm.$set(_vm.urlForm, "url", $$v)},expression:"urlForm.url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"网页说明"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.urlForm.introduce),callback:function ($$v) {_vm.$set(_vm.urlForm, "introduce", $$v)},expression:"urlForm.introduce"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言","prop":"language"}},[_c('el-select',{staticStyle:{"width":"100px"},attrs:{"clearable":""},model:{value:(_vm.urlForm.language),callback:function ($$v) {_vm.$set(_vm.urlForm, "language", $$v)},expression:"urlForm.language"}},_vm._l((_vm.languageMap),function(item){return _c('el-option',{key:item,attrs:{"value":item,"label":item}})}))],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block"},attrs:{"label":"是否有效","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.urlForm.status),callback:function ($$v) {_vm.$set(_vm.urlForm, "status", $$v)},expression:"urlForm.status"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("无效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("有效")])],1)],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_urlInfo = (esExports);
// CONCATENATED MODULE: ./src/components/system/urlManage/components/urlInfo.vue
function injectStyle (ssrContext) {
  __webpack_require__("XPHZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  urlInfo,
  components_urlInfo,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var urlManage_components_urlInfo = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GO1H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GPe0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-people",
  "use": "icon-people-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-people\"><path fill=\"#ffffff\" d=\"M864.327235 923.986365c0-0.828104 0.169183-1.620591 0.169183-2.413078 0-161.391304-156.841183-292.240696-350.288139-292.240696s-350.252522 130.849391-350.252522 292.240696c0 0.792487 0.133565 1.593878 0.133565 2.413078l-73.728 0c-0.026713-0.828104-0.169183-1.620591-0.169183-2.413078 0-163.670817 131.615165-301.189565 310.708313-342.89753-85.268035-39.1168-144.775791-124.055374-144.775791-223.276522 0-136.156383 111.429009-246.51687 248.876522-246.51687 137.456417 0 248.876522 110.360487 248.876522 246.51687 0 97.101913-57.148104 180.250713-139.4688 220.462748 185.717983 37.861287 323.833322 178.060243 323.833322 345.711304 0 0.792487-0.133565 1.593878-0.133565 2.413078L864.327235 923.986365zM698.5728 355.39033c0-105.890504-86.657113-191.75513-193.580522-191.75513-106.914504 0-193.571617 85.864626-193.571617 191.75513 0 105.926122 86.657113 191.790748 193.571617 191.790748C611.906783 547.181078 698.5728 461.316452 698.5728 355.39033z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ILbm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/multiplicationFilter/multiplicationFilter.vue
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

/* harmony default export */ var multiplicationFilter = ({
  name: 'multiplicationFilter',
  data: function data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        userId: null,
        nickName: null,
        phoneNo: null,
        email: null,
        countryName: null,
        sortId: '+id'
      },
      sortOptions: [{ label: '按ID升序排列', key: '+id' }, { label: '按ID降序排列', key: '-id' }],
      countryMap: [{ key: 'cn', name: '中国' }, { key: 'us', name: '美国' }, { key: 'nsl', name: '新西兰' }]
    };
  },

  props: {
    searchBtn: {
      type: Function,
      required: true
    }
  },
  methods: {
    queryToParent: function queryToParent() {
      var _this = this;
      this.$emit('sendListQuery', {
        listQuery: _this.listQuery,
        countryMap: _this.countryMap
      });
    }
  },
  mounted: function mounted() {
    this.queryToParent();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76d28999","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/multiplicationFilter/multiplicationFilter.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-header',[_c('div',{staticClass:"filter-container"},[_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"100px"},attrs:{"placeholder":"昵称","clearable":""},model:{value:(_vm.listQuery.nickName),callback:function ($$v) {_vm.$set(_vm.listQuery, "nickName", $$v)},expression:"listQuery.nickName"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"150px"},attrs:{"placeholder":"手机","clearable":""},model:{value:(_vm.listQuery.phoneNo),callback:function ($$v) {_vm.$set(_vm.listQuery, "phoneNo", $$v)},expression:"listQuery.phoneNo"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"200px"},attrs:{"placeholder":"邮箱","clearable":""},model:{value:(_vm.listQuery.email),callback:function ($$v) {_vm.$set(_vm.listQuery, "email", $$v)},expression:"listQuery.email"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item filter-select"},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"国籍","clearable":""},model:{value:(_vm.listQuery.countryName),callback:function ($$v) {_vm.$set(_vm.listQuery, "countryName", $$v)},expression:"listQuery.countryName"}},_vm._l((_vm.countryMap),function(country){return _c('el-option',{key:country.key,attrs:{"value":country.key,"label":country.name}})}))],1),_vm._v(" "),_c('div',{staticClass:"filter-item filter-select"},[_c('el-select',{staticStyle:{"width":"135px"},attrs:{"placeholder":"排序"},on:{"change":function($event){_vm.searchBtn()}},model:{value:(_vm.listQuery.sortId),callback:function ($$v) {_vm.$set(_vm.listQuery, "sortId", $$v)},expression:"listQuery.sortId"}},_vm._l((_vm.sortOptions),function(item){return _c('el-option',{key:item.key,attrs:{"value":item.key,"label":item.label}})}))],1),_vm._v(" "),_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var multiplicationFilter_multiplicationFilter = (esExports);
// CONCATENATED MODULE: ./src/views/multiplicationFilter/multiplicationFilter.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  multiplicationFilter,
  multiplicationFilter_multiplicationFilter,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_multiplicationFilter_multiplicationFilter = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/store/getters.js
/**
 * Created by zhaojuntong on 2017/12/19.
 */
/* harmony default export */ var getters = ({
  visitedTags: function visitedTags(state) {
    return state.routeTag.visitedTags;
  },
  cacheTags: function cacheTags(state) {
    return state.routeTag.cacheTags;
  },
  permissionRoutes: function permissionRoutes(state) {
    return state.permission.routes;
  },
  addRouters: function addRouters(state) {
    return state.permission.addRouters;
  },
  token: function token(state) {
    return state.user.token;
  },
  name: function name(state) {
    return state.user.name;
  },
  roles: function roles(state) {
    return state.user.roles;
  },
  introduction: function introduction(state) {
    return state.user.introduction;
  },
  avatar: function avatar(state) {
    return state.user.avatar;
  }
});
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/store/modules/routeTag.js




/**
 * Created by zhaojuntong on 2017/12/18.
 */
/* harmony default export */ var routeTag = ({
  state: {
    visitedTags: [],
    cacheTags: []
  },
  mutations: {
    ADD_VISIBLE_TAG: function ADD_VISIBLE_TAG(state, tag) {
      if (state.visitedTags.some(function (v) {
        return v.path === tag.path && tag.name;
      })) return;
      if (tag.meta && tag.meta.keepalive) {
        state.cacheTags.push(tag.name);
      }
      state.visitedTags = [].concat(toConsumableArray_default()(state.visitedTags), [{
        path: tag.path,
        name: tag.name,
        title: tag.meta.title
      }]);
    },
    DEL_VISIBLE_TAG: function DEL_VISIBLE_TAG(state, tag) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(state.visitedTags.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          if (v.path === tag.path) {
            state.visitedTags.splice(i, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(state.cacheTags), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _i = _step2.value;

          if (_i === tag.name) {
            var index = state.cacheTags.indexOf(_i);
            state.cacheTags.splice(index, 1);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    DEL_OTHER_TAG: function DEL_OTHER_TAG(state, tag) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(state.visitedTags.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref3 = _step3.value;

          var _ref4 = slicedToArray_default()(_ref3, 2);

          var i = _ref4[0];
          var v = _ref4[1];

          if (v.path === tag.path) {
            state.visitedTags = state.visitedTags.slice(i, i + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = get_iterator_default()(state.cacheTags), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _i2 = _step4.value;

          if (_i2 === tag.name) {
            var index = state.cacheTags.indexOf(_i2);
            state.cachedViews = state.cacheTags.slice(index, _i2 + 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    },
    DEL_ALL_TAG: function DEL_ALL_TAG(state) {
      state.visitedTags = [];
      state.cacheTags = [];
    }
  },
  actions: {
    addVisibleTag: function addVisibleTag(_ref5, tag) {
      var commit = _ref5.commit;

      commit('ADD_VISIBLE_TAG', tag);
    },
    delVisibleTag: function delVisibleTag(_ref6, tag) {
      var commit = _ref6.commit,
          state = _ref6.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_VISIBLE_TAG', tag);
        resolve([].concat(toConsumableArray_default()(state.visitedTags)));
      });
    },
    delOtherTag: function delOtherTag(_ref7, tag) {
      var commit = _ref7.commit,
          state = _ref7.state;

      return new promise_default.a(function (resolve) {
        commit('DEL_OTHER_TAG', tag);
        resolve([].concat(toConsumableArray_default()(state.visitedTags)));
      });
    },
    delAllTag: function delAllTag(_ref8) {
      var commit = _ref8.commit;

      return new promise_default.a(function (resolve) {
        commit('DEL_ALL_TAG');
        resolve();
      });
    }
  }
});
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/login.js
/**
 * Created by zhaojuntong on 2017/12/19.
 */


function login(username, password) {
  return Object(request["a" /* default */])({
    url: '/user/login',
    method: 'post',
    data: {
      username: username,
      password: password
    }
  });
}

function getUserInfo(token) {
  return Object(request["a" /* default */])({
    url: '/user/userInfo',
    method: 'post',
    params: { token: token }
  });
}
// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./src/store/modules/user.js

/**
 * Created by zhaojuntong on 2017/12/19.
 */


/* harmony default export */ var user = ({
  state: {
    username: '',
    token: Object(auth["a" /* getToken */])(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  mutations: {
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLES: function SET_ROLES(state, roles) {
      state.roles = roles;
    },
    SET_NAME: function SET_NAME(state, name) {
      state.name = name;
    },
    SET_AVATAR: function SET_AVATAR(state, avatar) {
      state.avatar = avatar;
    },
    SET_INTRODUCTION: function SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction;
    }
  },
  actions: {
    Login: function Login(_ref, userInfo) {
      var commit = _ref.commit;

      var username = userInfo.username.trim();
      return new promise_default.a(function (resolve, reject) {
        login(username, userInfo.password).then(function (response) {
          if (response.data) {
            var data = response.data;
            commit('SET_TOKEN', data.token);
            Object(auth["c" /* setToken */])(new Date().getTime(), 'Expires-Token'); // for testing whether token is invalid
            Object(auth["c" /* setToken */])(data.token);
          }
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    GetUserInfo: function GetUserInfo(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;

      return new promise_default.a(function (resolve, reject) {
        getUserInfo(state.token).then(function (response) {
          var data = response.data;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          resolve(data);
        }).catch(function (error) {
          reject(error);
        });
      });
    },
    Logout: function Logout(_ref3) {
      var commit = _ref3.commit;

      return new promise_default.a(function (resolve) {
        commit('SET_TOKEN', '');
        Object(auth["b" /* removeToken */])();
        Object(auth["b" /* removeToken */])('Expires-Token');
        resolve();
      });
    }
  }
});
// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("YaEn");

// CONCATENATED MODULE: ./src/store/modules/permission.js

/**
 * Created by zhaojuntong on 2017/12/19.
 */


/**
 * 判断当前用户权限是否匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(function (role) {
      return route.meta.role.indexOf(role) >= 0;
    });
  } else {
    return true;
  }
}

/**
 * 异步递归过滤权限路由
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouterMap(asyncRouterMap, roles) {
  var accessedRoutes = asyncRouterMap.filter(function (route) {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouterMap(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRoutes;
}

/* harmony default export */ var permission = ({
  state: {
    routes: router["b" /* constantRouterMap */],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: function SET_ROUTERS(state, routes) {
      state.routes = router["b" /* constantRouterMap */].concat(routes);
      state.addRouters = routes;
    }
  },
  actions: {
    GenerateRoutes: function GenerateRoutes(_ref, roles) {
      var commit = _ref.commit;

      return new promise_default.a(function (resolve) {
        var accessedRouters = void 0;
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = router["a" /* asyncRouterMap */];
        } else {
          accessedRouters = filterAsyncRouterMap(router["a" /* asyncRouterMap */], roles);
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js
/**
 * Created by zhaojuntong on 2017/12/15.
 */







vue_esm["default"].use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
  modules: {
    routeTag: routeTag,
    user: user,
    permission: permission
  },
  getters: getters,
  state: {
    isCollapse: true
  },
  mutations: {
    openSideBar: function openSideBar(state) {
      state.isCollapse = !state.isCollapse;
    }
  }
});

/* harmony default export */ var src_store = __webpack_exports__["a"] = (store);

/***/ }),

/***/ "IeYc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-shouye",
  "use": "icon-shouye-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-shouye\"><path fill=\"#ffffff\" d=\"M950.926 506.714l-407.623-409.262c-0.077-0.077-0.137-0.164-0.213-0.24-0.082-0.082-0.17-0.147-0.252-0.229l-0.35-0.35c-14.439-14.532-37.853-14.532-52.287 0-1.878 1.89-3.495 3.938-4.887 6.090l-402.954 404.576c-14.439 14.532-14.439 38.109 0 52.647 8.81 8.869 20.961 12.293 32.374 10.343l63.603-0.147c35.215 1.71 40.911 9.907 41.807 49.229l-0.322-49.19-14.38-0.098 15.477-0.038 0.278 304.175c3.261 38.082 34.947 67.978 73.613 67.978h73.947c40.839 0 73.947-33.335 73.947-74.449v-39.556h0.229l-0.098-66.7 0.126-5.827c-0.049 0.618-0.087 1.273-0.131 1.917l-0.060-38.437h0.983l-0.791 36.526c2.288-28.355 10.775-35.018 41.468-36.586l61.839-0.093c33.095 1.463 41.9 8.378 44.155 40.965l-0.884-40.873-19.076-0.126 20.196-0.033 0.071 46.803c-0.093-1.977-0.175-3.954-0.306-5.773l0.317 14.724 0.147 99.118c3.069 38.278 34.827 68.398 73.635 68.398h73.952c40.839 0 73.941-33.335 73.941-74.449v-39.556h0.273l-0.262-258.79c0-20.562-16.548-37.219-36.973-37.219-20.415 0-36.973 16.662-36.973 37.219l0.235 228.054-0.147 22.069c0.098-4.271 0.137-8.957 0.153-13.998l0.065 62.314h-0.546l0.327-48.322c-0.847 36.307-6.106 45.635-37.951 48.016-36.619-2.802-35.772-15.537-35.772-73.641l-0.115 13.058-0.071-47.393h-0.131v-39.551c0-41.118-33.106-74.454-73.941-74.454h-36.973v-1.033l-73.941 0.115v0.923h-36.973c-40.359 0-73.105 32.566-73.87 73.018l0.142 96.862c-0.42 40.201-4.205 49.856-36.951 52.177-26.346-1.895-34.445-8.71-36.918-32.855l-0.208-224.1h-0.082v-39.551c0-41.118-33.106-74.454-73.941-74.454h-23.189l319.253-320.531 381.709 383.233c14.439 14.538 37.847 14.538 52.282 0 14.439-14.532 14.439-38.109 0-52.642zM664.818 867.85l17.804 0.115-17.804 0.044v-0.158zM295.134 867.85l17.902 0.115-17.902 0.044v-0.158zM220.146 619.359l0.175 27.088c0-10.382 0-19.323-0.175-27.088z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "JRp5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KY4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-dingdan",
  "use": "icon-dingdan-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-dingdan\"><path fill=\"#ffffff\" d=\"M795.2 106.5c36.1 0 65.4 28.6 65.4 63.9v624.3l6.1-14.8L725.1 924l15.7-6.5h-512c-36 0-65.3-28.7-65.3-64v-747h631.7zM119.9 63.8V853.4c0 58.8 48.8 106.7 108.9 106.7h521.3l6.4-6.5L898 809.5l6.1-6.2V170.4c0-58.9-48.8-106.6-108.9-106.6H119.9z m588.2 618.9c-36.2 0-65.4 28.5-65.4 64v128.1c0 11.8 9.8 21.3 21.8 21.3s21.8-9.6 21.8-21.3V746.7c0-11.8 9.7-21.3 21.9-21.3h98c12 0 21.8-9.6 21.8-21.3 0-11.8-9.8-21.3-21.8-21.3h-98.1v-0.1z m34.2-426.8c12 0 21.8-9.6 21.8-21.3 0-11.8-9.8-21.3-21.8-21.3H294.1c-12 0-21.8 9.6-21.8 21.3 0 11.8 9.8 21.3 21.8 21.3h448.2z m0 128.1c12 0 21.8-9.6 21.8-21.3 0-11.8-9.8-21.3-21.8-21.3H294.1c-12 0-21.8 9.6-21.8 21.3 0 11.8 9.8 21.3 21.8 21.3h448.2z m0 149.3c12 0 21.8-9.6 21.8-21.3s-9.8-21.3-21.8-21.3H294.1c-12 0-21.8 9.6-21.8 21.3s9.8 21.3 21.8 21.3h448.2z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "KnQG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/system.js
var system = __webpack_require__("V/8j");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/system/urlManage/urlManage.vue
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


/* harmony default export */ var urlManage = ({
  name: 'urlManage',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1 }
    };
  },
  created: function created() {
    this.GetUrlList();
  },

  methods: {
    GetUrlList: function GetUrlList() {
      var _this = this;

      Object(system["c" /* getUrlList */])(this.listQuery).then(function (response) {
        console.log(response);
        _this.list = response.data.urlList.map(function (item) {
          _this.$set(item, 'isEdit', false);
          item.originalfunctionIntroduce = item.functionIntroduce;
          return item;
        });
        _this.total = response.data.total;
      });
    },
    edit: function edit(row) {
      this.list.forEach(function (item) {
        if (item.urlId === row.urlId) {
          item.isEdit = true;
        }
      });
    },
    cancelEdit: function cancelEdit(row) {
      row.functionIntroduce = row.originalfunctionIntroduce;
      row.isEdit = false;
      this.$message.info('您已取消编辑');
    },
    save: function save(row) {
      row.isEdit = false;
      row.originalfunctionIntroduce = row.functionIntroduce;
      row.applicationType = row.applicationType;
      this.$message.success('您已修改该网址信息');
    }
  },
  filters: {
    applicationVersionFilter: function applicationVersionFilter(val) {
      var applicationVersionMap = { 'user': '用户端', 'pro': '教练端' };
      return applicationVersionMap[val];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9cb2e9ca","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/system/urlManage/urlManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"url-container"},[_c('el-main',[_c('el-table',{staticClass:"el-table-medium",staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"网址ID","prop":"urlId","align":"center","width":"300"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"网址主功能说明","min-width":"230","align":"left"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?[_c('el-input',{model:{value:(scope.row.functionIntroduce),callback:function ($$v) {_vm.$set(scope.row, "functionIntroduce", $$v)},expression:"scope.row.functionIntroduce"}}),_vm._v(" "),_c('el-button',{staticClass:"cancel-button",attrs:{"type":"warning","icon":"el-icon-refresh"},on:{"click":function($event){_vm.cancelEdit(scope.row)}}},[_vm._v("取消")])]:_c('span',[_vm._v(_vm._s(scope.row.functionIntroduce))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"应用版本","width":"220"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?[_c('el-radio-group',{model:{value:(scope.row.applicationVersion),callback:function ($$v) {_vm.$set(scope.row, "applicationVersion", $$v)},expression:"scope.row.applicationVersion"}},[_c('el-radio',{attrs:{"label":"user"}},[_vm._v("用户端")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"pro"}},[_vm._v("教练端")])],1)]:_c('span',[_vm._v(_vm._s(_vm._f("applicationVersionFilter")(scope.row.applicationVersion)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"160"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?_c('el-button',{attrs:{"type":"success","icon":"el-icon-circle-check-outline"},on:{"click":function($event){_vm.save(scope.row)}}},[_vm._v("保存")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('router-link',{attrs:{"to":("url/" + (scope.row.urlId))}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("网址")])],1)]}}])})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var urlManage_urlManage = (esExports);
// CONCATENATED MODULE: ./src/components/system/urlManage/urlManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("U5Og")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  urlManage,
  urlManage_urlManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var system_urlManage_urlManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Lf3B":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NBVL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/contentManagement.js
var contentManagement = __webpack_require__("1x8f");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/contentManagement/discoverPass/discoverPass.vue


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


/* harmony default export */ var discoverPass = ({
  name: 'discoverPass',
  data: function data() {
    return {
      activeName: 'pending',
      list: null,
      total: 1,
      listQuery: { page: 1, type: 2, userId: null }
    };
  },
  created: function created() {
    this.GetCoverList();
  },

  methods: {
    GetCoverList: function GetCoverList() {
      var _this = this;

      Object(contentManagement["a" /* getCoverList */])(this.listQuery).then(function (response) {
        _this.list = response.data.coverList;
        _this.total = response.data.total;
      });
    },
    review: function review(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          if (v.userId === row.userId) {
            this.list[i].status = 1;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现修改为重新审核',
        type: 'info',
        duration: 2000
      });
    },
    pass: function pass(row) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(this.list.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray_default()(_ref3, 2);

          var i = _ref4[0];
          var v = _ref4[1];

          if (v.userId === row.userId) {
            this.list[i].status = 2;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现通过审核',
        type: 'info',
        duration: 2000
      });
    },
    noPass: function noPass(row) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(this.list.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref5 = _step3.value;

          var _ref6 = slicedToArray_default()(_ref5, 2);

          var i = _ref6[0];
          var v = _ref6[1];

          if (v.userId === row.userId) {
            this.list[i].status = 0;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现设为不通过',
        type: 'info',
        duration: 2000
      });
    },
    deleteCover: function deleteCover(row) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = get_iterator_default()(this.list.entries()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref7 = _step4.value;

          var _ref8 = slicedToArray_default()(_ref7, 2);

          var i = _ref8[0];
          var v = _ref8[1];

          if (v.userId === row.userId) {
            this.list.splice(i, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现删除',
        type: 'info',
        duration: 2000
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.listQuery.type = 2;
    }
  },
  filters: {
    statusFilter: function statusFilter(val) {
      var status = ['审核失败', '待审核', '通过'];
      return status[val];
    },
    statusTagFilter: function statusTagFilter(val) {
      var status = ['danger', 'primary', 'success'];
      return status[val];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-96823c2c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/contentManagement/discoverPass/discoverPass.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetCoverList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"发布者ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"序号","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"图片"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{attrs:{"src":scope.row.image,"alt":""}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"位置信息","prop":"position"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发布者ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"上传时间","prop":"uploadTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 2)?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.review(scope.row)}}},[_vm._v("重新审核")]):[_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.noPass(scope.row)}}},[_vm._v("不通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning"},on:{"click":function($event){_vm.deleteCover(scope.row)}}},[_vm._v("删除")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetCoverList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var discoverPass_discoverPass = (esExports);
// CONCATENATED MODULE: ./src/components/contentManagement/discoverPass/discoverPass.vue
function injectStyle (ssrContext) {
  __webpack_require__("JRp5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  discoverPass,
  discoverPass_discoverPass,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var contentManagement_discoverPass_discoverPass = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0ddbb326","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("veH+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("YaEn");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/svgIcon/svgIcon.vue
//
//
//
//
//

/* harmony default export */ var svgIcon = ({
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f2987aee","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/svgIcon/svgIcon.vue
var svgIcon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"svg-icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":("#icon-" + _vm.iconClass)}})])}
var svgIcon_staticRenderFns = []
var svgIcon_esExports = { render: svgIcon_render, staticRenderFns: svgIcon_staticRenderFns }
/* harmony default export */ var svgIcon_svgIcon = (svgIcon_esExports);
// CONCATENATED MODULE: ./src/views/svgIcon/svgIcon.vue
function svgIcon_injectStyle (ssrContext) {
  __webpack_require__("aRGm")
}
var svgIcon_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var svgIcon___vue_template_functional__ = false
/* styles */
var svgIcon___vue_styles__ = svgIcon_injectStyle
/* scopeId */
var svgIcon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var svgIcon___vue_module_identifier__ = null
var svgIcon_Component = svgIcon_normalizeComponent(
  svgIcon,
  svgIcon_svgIcon,
  svgIcon___vue_template_functional__,
  svgIcon___vue_styles__,
  svgIcon___vue_scopeId__,
  svgIcon___vue_module_identifier__
)

/* harmony default export */ var views_svgIcon_svgIcon = (svgIcon_Component.exports);

// CONCATENATED MODULE: ./src/icons/index.js
/**
 * Created by zhaojuntong on 2017/12/15.
 */



vue_esm["default"].component('svg-icon', views_svgIcon_svgIcon);
var requireAll = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};
var req = __webpack_require__("90Fk");
requireAll(req);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/globalComponent/pagination.vue
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

/* harmony default export */ var pagination = ({
  name: 'pagination',
  props: {
    listQuery: {
      type: Object,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    GetList: {
      type: Function
    }
  },
  methods: {
    handleSizeChange: function handleSizeChange(val) {
      this.listQuery.limit = val;
      this.GetList();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.listQuery.page = val;
      this.GetList();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ff3defd","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/globalComponent/pagination.vue
var pagination_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-pagination',{attrs:{"current-page":_vm.listQuery.page,"page-size":10,"page-sizes":[10, 15, 30, 50],"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total,"background":""},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})}
var pagination_staticRenderFns = []
var pagination_esExports = { render: pagination_render, staticRenderFns: pagination_staticRenderFns }
/* harmony default export */ var globalComponent_pagination = (pagination_esExports);
// CONCATENATED MODULE: ./src/views/globalComponent/pagination.vue
function pagination_injectStyle (ssrContext) {
  __webpack_require__("v28o")
}
var pagination_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var pagination___vue_template_functional__ = false
/* styles */
var pagination___vue_styles__ = pagination_injectStyle
/* scopeId */
var pagination___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var pagination___vue_module_identifier__ = null
var pagination_Component = pagination_normalizeComponent(
  pagination,
  globalComponent_pagination,
  pagination___vue_template_functional__,
  pagination___vue_styles__,
  pagination___vue_scopeId__,
  pagination___vue_module_identifier__
)

/* harmony default export */ var views_globalComponent_pagination = (pagination_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/globalComponent/certificateFilter.vue
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

/* harmony default export */ var certificateFilter = ({
  name: 'certificateFilter',
  props: {
    GetList: {
      type: Function
    }
  },
  data: function data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        sortId: '+id'
      },
      sortOptions: [{ label: '按ID升序排列', key: '+id' }, { label: '按ID降序排列', key: '-id' }]
    };
  },
  created: function created() {
    this.queryToParent();
  },

  methods: {
    searchBtn: function searchBtn() {
      this.listQuery.page = 1;
      this.GetList();
    },
    queryToParent: function queryToParent() {
      var _this = this;
      this.$emit('sendListQuery', {
        listQuery: _this.listQuery
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-62e4d2a2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/globalComponent/certificateFilter.vue
var certificateFilter_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-header',[_c('div',{staticClass:"filter-container"},[_vm._t("default"),_vm._v(" "),_c('div',{staticClass:"filter-item filter-select"},[_c('el-select',{staticStyle:{"width":"135px"},attrs:{"placeholder":"排序"},on:{"change":function($event){_vm.searchBtn()}},model:{value:(_vm.listQuery.sortId),callback:function ($$v) {_vm.$set(_vm.listQuery, "sortId", $$v)},expression:"listQuery.sortId"}},_vm._l((_vm.sortOptions),function(item){return _c('el-option',{key:item.key,attrs:{"value":item.key,"label":item.label}})}))],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){_vm.searchBtn()}}},[_vm._v("搜索")])],1),_vm._v(" "),_vm._t("excel")],2)])}
var certificateFilter_staticRenderFns = []
var certificateFilter_esExports = { render: certificateFilter_render, staticRenderFns: certificateFilter_staticRenderFns }
/* harmony default export */ var globalComponent_certificateFilter = (certificateFilter_esExports);
// CONCATENATED MODULE: ./src/views/globalComponent/certificateFilter.vue
var certificateFilter_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var certificateFilter___vue_template_functional__ = false
/* styles */
var certificateFilter___vue_styles__ = null
/* scopeId */
var certificateFilter___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var certificateFilter___vue_module_identifier__ = null
var certificateFilter_Component = certificateFilter_normalizeComponent(
  certificateFilter,
  globalComponent_certificateFilter,
  certificateFilter___vue_template_functional__,
  certificateFilter___vue_styles__,
  certificateFilter___vue_scopeId__,
  certificateFilter___vue_module_identifier__
)

/* harmony default export */ var views_globalComponent_certificateFilter = (certificateFilter_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/globalComponent/photoSwipe.vue

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

/* harmony default export */ var photoSwipe = ({
  name: 'photoSwipe',
  data: function data() {
    return {
      index: 0
    };
  },

  props: {
    imageList: {
      type: Array
    }
  },
  created: function created() {
    this.calculatePictureSize('pictureItem1');
  },

  watch: {
    imageList: function imageList(value) {
      var oPhotoSwipe = document.getElementsByClassName('photoSwipe')[0];
      if (value.length !== 0) {
        oPhotoSwipe.style.display = 'block';
        this.calculatePictureSize('pictureItem1');
      } else {
        this.imageList = [];
        oPhotoSwipe.style.display = 'none';
      }
    }
  },
  methods: {
    calculatePictureSize: function calculatePictureSize(ref) {
      var pictureItems = this.$refs[ref];
      var oImg = void 0;
      this.$nextTick(function () {
        if (pictureItems !== undefined) {
          var pictureItemWidth = pictureItems[0].offsetWidth; // 图片父级width
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = get_iterator_default()(pictureItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var pictureItem = _step.value;

              oImg = pictureItem.querySelector('img');
              var pictureWidth = oImg.offsetWidth;
              var pictureHeight = oImg.offsetHeight;
              if (pictureWidth >= pictureHeight) {
                oImg.style.height = pictureItemWidth * pictureHeight / pictureWidth + 'px';
                oImg.style.width = pictureItemWidth + 'px';
                oImg.style.marginTop = -(pictureItemWidth * pictureHeight / pictureWidth) / 2 + 'px';
                oImg.style.marginLeft = -pictureItemWidth / 2 + 'px';
              } else {
                oImg.style.width = pictureItemWidth * pictureWidth / pictureHeight + 'px';
                oImg.style.height = pictureItemWidth + 'px';
                oImg.style.marginTop = -pictureItemWidth / 2 + 'px';
                oImg.style.marginLeft = -(pictureItemWidth * pictureWidth / pictureHeight) / 2 + 'px';
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      });
    },
    prev: function prev() {
      this.index--;
      if (this.index < 0) {
        this.$message.info('已经是第一张了，别再翻了!');
        this.index = 0;
      }
    },
    next: function next() {
      this.index++;
      if (this.index > this.imageList.length - 1) {
        this.$message.info('已经是最后一张了，到头了!');
        this.index = this.imageList.length - 1;
      }
    },
    closePhotoSwipe: function closePhotoSwipe() {
      var oPhotoSwipe = document.getElementsByClassName('photoSwipe')[0];
      oPhotoSwipe.style.display = 'none';
    }
  },
  computed: {
    currentIndex: function currentIndex() {
      return this.index;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bd0bbe6a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/globalComponent/photoSwipe.vue
var photoSwipe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"photoSwipe"},[_c('div',{staticClass:"photoSwipe-container"},[_c('div',{staticClass:"picture-container"},_vm._l((_vm.imageList),function(item,index){return _c('div',{key:index,ref:"pictureItem1",refInFor:true,class:{'active': _vm.currentIndex === index}},[_c('img',{attrs:{"src":item}})])})),_vm._v(" "),_c('div',{staticClass:"control"},[_c('span',{staticClass:"left-btn btn",on:{"click":_vm.prev}},[_c('svg-icon',{attrs:{"iconClass":'arrowleftcircle'}})],1),_vm._v(" "),_c('span',{staticClass:"right-btn btn",on:{"click":_vm.next}},[_c('svg-icon',{attrs:{"iconClass":'arrowrightcircle'}})],1)])]),_vm._v(" "),_c('span',{staticClass:"close",on:{"click":_vm.closePhotoSwipe}},[_c('svg-icon',{attrs:{"iconClass":'close'}})],1)])}
var photoSwipe_staticRenderFns = []
var photoSwipe_esExports = { render: photoSwipe_render, staticRenderFns: photoSwipe_staticRenderFns }
/* harmony default export */ var globalComponent_photoSwipe = (photoSwipe_esExports);
// CONCATENATED MODULE: ./src/views/globalComponent/photoSwipe.vue
var photoSwipe_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var photoSwipe___vue_template_functional__ = false
/* styles */
var photoSwipe___vue_styles__ = null
/* scopeId */
var photoSwipe___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var photoSwipe___vue_module_identifier__ = null
var photoSwipe_Component = photoSwipe_normalizeComponent(
  photoSwipe,
  globalComponent_photoSwipe,
  photoSwipe___vue_template_functional__,
  photoSwipe___vue_styles__,
  photoSwipe___vue_scopeId__,
  photoSwipe___vue_module_identifier__
)

/* harmony default export */ var views_globalComponent_photoSwipe = (photoSwipe_Component.exports);

// CONCATENATED MODULE: ./src/views/globalComponent/index.js
/**
 * Created by zhaojuntong on 2017/12/28.
 */





vue_esm["default"].component('pagination', views_globalComponent_pagination);
vue_esm["default"].component('certificateFilter', views_globalComponent_certificateFilter);
vue_esm["default"].component('photoSwipe', views_globalComponent_photoSwipe);
// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("IcnI");

// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__("zNUS");
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./src/mock/login.js

/**
 * Created by zhaojuntong on 2017/12/19.
 */


var userInfo = {
  'admin': {
    roles: ['admin'],
    token: 'admin',
    introduction: '超级管理员',
    name: 'zhaojuntong',
    avatar: '/static/avatar.gif'
  }
};
/* harmony default export */ var mock_login = ({
  login: function login(config) {
    var _JSON$parse = JSON.parse(config.body),
        username = _JSON$parse.username;

    var ExpiresToken = Object(auth["a" /* getToken */])('Expires-Token');
    var nowDate = new Date().getTime();
    var code = 2; // the code express token is valid
    if (nowDate - ExpiresToken > 7 * 24 * 3600 * 1000) {
      code = 0; // the code express token is invalid
    } else if (username !== 'admin') {
      code = 1; // the code express token is wrong
    }
    return extends_default()({}, userInfo[username], {
      code: code
    });
  },
  getUserInfo: function getUserInfo(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        token = _paramObj.token;

    var code = void 0;
    if (userInfo[token]) {
      code = 2;
      return extends_default()({}, userInfo[token], {
        code: code
      });
    } else {
      code = 1;
      return {
        code: code
      };
    }
  }
});
// CONCATENATED MODULE: ./src/mock/userManage/agent.js
/**
 * Created by zhaojuntong on 2017/12/25.
 */



var agentList = [];
var count = 100;

for (var i = 0; i < count; i++) {
  agentList.push(mock_default.a.mock({
    id: '@increment',
    userId: 'A@integer(10000, 99999)',
    nickName: '@name',
    point: '@integer(100, 999)',
    registerTime: '@datetime',
    ownCoach: '@integer(0, 100)',
    email: '@email',
    'sex|1': ['male', 'female', 'unknow'],
    'phoneNo|1': ['13798254451', '18873283031', '13578941256', '18163910930', '15678941273'],
    'countryName|1': ['cn', 'us', 'nsl'],
    'status|1': '@integer(0, 1)'
  }));
}

/* harmony default export */ var agent = ({
  getAgentList: function getAgentList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        userId = _paramObj.userId,
        nickName = _paramObj.nickName,
        phoneNo = _paramObj.phoneNo,
        email = _paramObj.email,
        countryName = _paramObj.countryName,
        sortId = _paramObj.sortId;

    if (nickName) nickName = nickName.replace(/\+/, ' ');
    var mockList = agentList.filter(function (item) {
      if (userId && item.userId !== userId) return false;
      if (nickName && item.nickName !== nickName) return false;
      if (phoneNo && item.phoneNo !== phoneNo) return false;
      if (email && item.email !== email) return false;
      if (countryName && item.countryName !== countryName) return false;
      return true;
    });

    if (sortId === '-id') mockList = mockList.reverse();

    var filterAgentList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });

    return {
      code: 2,
      total: mockList.length,
      agentList: filterAgentList
    };
  },
  addAgent: function addAgent(config) {
    var data = JSON.parse(config.body);
    var time = Object(utils["a" /* formatTime */])();
    var newArticle = {
      id: ++count,
      userId: data.agentId,
      nickName: 'agent',
      point: 0,
      registerTime: time,
      ownCoach: 0,
      email: data.email,
      'sex': 'unknow',
      'phoneNo': '未填写',
      'countryName': data.countryName,
      'status': 0
    };
    agentList.push(newArticle);
    return {
      code: 2,
      info: 'success',
      total: agentList.length,
      newArticle: newArticle
    };
  }
});
// CONCATENATED MODULE: ./src/mock/userManage/coach.js
/**
 * Created by zhaojuntong on 2017/12/26.
 */



var coachList = [];
var coach_count = 100;

for (var coach_i = 0; coach_i < coach_count; coach_i++) {
  coachList.push(mock_default.a.mock({
    'id': '@increment',
    userId: 'C@integer(10000, 99999)',
    nickName: '@first',
    'countryName|1': ['cn', 'us', 'nsl'],
    point: '@integer(0, 1000)',
    registerTime: '@datetime',
    email: '@email',
    'certificate|1': ['未上传', '已上传,待审核', '已认证', '未通过'],
    'image|2-3': ['@image'],
    bindUser: '@integer(0, 100)',
    'agent|1': 'A@integer(10000, 99999)',
    'status|1': '@integer(0, 1)',
    'sex|1': ['male', 'female', 'unknow'],
    'phoneNo|1': ['13798254451', '18873283031', '13578941256', '18163910930', '15678941273'],
    'coachAvatar': '@image(60x60, ' + Object(utils["d" /* randomColor */])() + ', sodive)'
  }));
}

/* harmony default export */ var coach = ({
  getCoachList: function getCoachList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        email = _paramObj.email,
        userId = _paramObj.userId,
        countryName = _paramObj.countryName,
        nickName = _paramObj.nickName,
        phoneNo = _paramObj.phoneNo,
        sortId = _paramObj.sortId;

    var mockList = coachList.filter(function (item) {
      if (email && email !== item.email) return false;
      if (userId && userId !== item.userId) return false;
      if (countryName && countryName !== item.countryName) return false;
      if (nickName && nickName !== item.nickName) return false;
      if (phoneNo && phoneNo !== item.phoneNo) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      coachList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/userManage/user.js
/**
 * Created by zhaojuntong on 2017/12/26.
 */



var userList = [];
var user_count = 100;

for (var user_i = 0; user_i < user_count; user_i++) {
  userList.push(mock_default.a.mock({
    'id': '@increment',
    'userId': '@integer(100000, 999999)',
    'nickName': '@first',
    'countryName|1': ['cn', 'us', 'nsl'],
    'certificate|1': ['未上传', '已上传,待审核', '已认证', '未通过'],
    'registerTime': '@datetime',
    'recommendNum': '@integer(0, 100)',
    'recommendName': '@integer(100000, 999999)',
    'ownCoach': 'C@integer(10000, 99999)',
    'status|1': '@integer(0, 1)',
    'sex|1': ['male', 'female', 'unknow'],
    'email': '@email',
    'phoneNo|1': ['13798254451', '18873283031', '13578941256', '18163910930', '15678941273'],
    'coachAvatar': '@image(60x60, ' + Object(utils["d" /* randomColor */])() + ', sodive)',
    'image|2-3': ['@image']
  }));
}

/* harmony default export */ var user = ({
  getUserList: function getUserList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        email = _paramObj.email,
        userId = _paramObj.userId,
        countryName = _paramObj.countryName,
        nickName = _paramObj.nickName,
        phoneNo = _paramObj.phoneNo,
        sortId = _paramObj.sortId;

    var mockList = userList.filter(function (item) {
      if (email && email !== item.email) return false;
      if (userId && userId !== item.userId + '') return false;
      if (countryName && countryName !== item.countryName) return false;
      if (nickName && nickName !== item.nickName) return false;
      if (phoneNo && phoneNo !== item.phoneNo) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      userList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/userManage/coachCertificate.js
/**
 * Created by zhaojuntong on 2017/12/27.
 */



var certificateList = [];
var coachCertificate_count = 150;

for (var coachCertificate_i = 0; coachCertificate_i < coachCertificate_count; coachCertificate_i++) {
  certificateList.push(mock_default.a.mock({
    'id': '@increment',
    'userId': 'C@integer(10000, 99999)',
    'nickName': '@first',
    'userType': '潜水教练',
    'name': '@last',
    'institution': '@string(3, 5)',
    'getCertificateTime': '@datetime(yyyy-MM-dd)',
    'submitCertificateTime': '@datetime(yyyy-MM-dd)',
    'status|1': '@integer(0, 2)',
    'image|2-3': ['@image']
  }));
}

/* harmony default export */ var coachCertificate = ({
  getCertificateList: function getCertificateList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        userId = _paramObj.userId,
        name = _paramObj.name,
        sortId = _paramObj.sortId,
        type = _paramObj.type;

    var list = certificateList.filter(function (item) {
      if (userId && item.userId !== userId) return false;
      if (name && item.name !== name) return false;
      if (type + '' && item.status !== type * 1) {
        return false;
      }
      return true;
    });
    if (sortId === '-id') {
      list = list.reverse();
    }
    var pageList = list.filter(function (item, index) {
      return index < page * limit && index >= limit * (page - 1);
    });
    return {
      total: list.length,
      certificateList: pageList,
      code: 2
      /* let pendingList = certificateList.filter(item => item.status === 0)
      let pendedList = certificateList.filter(item => item.status === 1)
      let failedList = certificateList.filter(item => item.status === 2)
      if (sortId === '-id') {
        pendingList = pendingList.reverse()
        pendedList = pendedList.reverse()
        failedList = failedList.reverse()
      }
      const returnPendingList = pendingList.filter((item, index) => index < page * limit && index >= limit * (page - 1))
      const returnPendedList = pendedList.filter((item, index) => index < page * limit && index >= limit * (page - 1))
      const returnFailedList = failedList.filter((item, index) => index < page * limit && index >= limit * (page - 1))
      return {
        pending: {
          total: pendingList.length,
          list: returnPendingList
        },
        pended: {
          total: pendedList.length,
          list: returnPendedList
        },
        failed: {
          total: failedList.length,
          list: returnFailedList
        },
        code: 2
      } */
    };
  }
  /*
  dataList: [
    {total: pendingList.length, list: returnPendingList, label: '待审核', name: 'pending'},
    {total: pendedList.length, list: returnPendedList, label: '已审核', name: 'pended'},
    {total: failedList.length, list: returnFailedList, label: '审核失败', name: 'failed'}
  ], */

});
// CONCATENATED MODULE: ./src/mock/userManage/payAccount.js
/**
 * Created by zhaojuntong on 2017/12/27.
 */



var payAccountList = [];
var payAccount_count = 100;

for (var payAccount_i = 0; payAccount_i < payAccount_count; payAccount_i++) {
  payAccountList.push(mock_default.a.mock({
    'id': '@increment',
    'userId': '@character(AC)@integer(10000, 99999)',
    'userType|1': ['合伙人', '教练', '普通用户'],
    'payType': '@integer(0, 2)', /* 0 => alipay, 1 => wechat, 2 => paypal */
    'account': '@integer(1114511, 9456489745)@qq.com',
    'name': '@first',
    'createTime': '@datetime(yyyy-MM-dd)',
    'modifyTime': '@datetime(yyyy-MM-dd)',
    'status|1': '@integer(0 ,1)' /* 0 => 正常, 1 => 失效 */
  }));
}

/* harmony default export */ var payAccount = ({
  getPayAccountList: function getPayAccountList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        userId = _paramObj.userId,
        name = _paramObj.name,
        payType = _paramObj.payType,
        sortId = _paramObj.sortId;

    var mockList = payAccountList.filter(function (item) {
      if (userId && item.userId !== userId) return false;
      if (name && item.name !== name) return false;
      if (payType === undefined) return true;
      if (payType + '' && item.payType !== payType * 1) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      payAccountList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/order.js
/**
 * Created by zhaojuntong on 2017/12/28.
 */



var orderList = [];
var order_count = 100;

for (var order_i = 0; order_i < order_count; order_i++) {
  orderList.push(mock_default.a.mock({
    'id': '@increment',
    'orderNo': '150@integer(1000000, 9999999)',
    'userId': 'C@integer(10000, 99999)',
    'nickName': '@first',
    'phoneNo': '1@integer(3, 8)@integer(4, 9)@integer(10000000, 99999999)',
    'payType': '兑换券',
    'createTime': '@datetime',
    'updateTime': '@datetime',
    'goodsPic': "@image(80 x 80, @color, 'sodive')",
    'receiver': '@cname',
    'receiveAddress': '@province',
    'logisticsStatus': '@integer(0, 4)', /* 0 => 无物流, 1 =>  待发货, 2 => 配送中, 3 => 已签收, 4 => 拒签收  */
    'logisticsNo': '2018@integer(1000000, 9999999)',
    'logisticsCompany|1': ['顺丰', '申通', '圆通', '中通', 'EMS']
  }));
}

/* harmony default export */ var order = ({
  getOrderList: function getOrderList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        orderNo = _paramObj.orderNo,
        userId = _paramObj.userId,
        sortId = _paramObj.sortId;

    var mockList = orderList.filter(function (item) {
      if (orderNo && orderNo !== item.orderNo) return false;
      if (userId && userId !== item.userId) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      orderList: pageList,
      total: mockList.length,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/exchange/exchange.js
/**
 * Created by zhaojuntong on 2017/12/28.
 */



var exchangeList = [];
var exchange_count = 100;

for (var exchange_i = 0; exchange_i < exchange_count; exchange_i++) {
  exchangeList.push(mock_default.a.mock({
    'id': '@increment',
    'goodsId': '2017@integer(1000000000, 9999999999)',
    'goodsName|1': ['液体硅胶面镜', '全铝合金面镜', '双色潜水摄影手电', '炫彩叮叮棒', '潜水面镜手电', 'BuddyLight', '炫彩潜水手电', '炫彩潜水手电', '智能潜伴灯 | 定制版', '智能潜伴灯'],
    'brand': 'HiBuddy',
    'price': '@integer(50, 130)', /* 销售价格 */
    'marketPrice': '@integer(60, 140)', /* 市场价格 */
    'freeDeliver': '@integer(0, 1)', /* 是否包邮 0 => 不包邮 1 => 包邮 */
    'userPoint': '@integer(5, 20)', /* 用户积分 */
    'coachPoint': '@integer(5, 20)', /* 教练积分 */
    'agentPoint': '@integer(5, 20)', /* 合伙人积分 */
    'stock': '@integer(50, 100)', /* 库存 */
    'createTime': '@datetime',
    'updateTime': '@datetime',
    'status': '@integer(0, 1)',
    'image': '@image(200x200, @color, sodive)',
    'size': '@string',
    'listImage|2-3': [{ name: '@string', url: '@image(200x200, @color, sodive)' }]
  }));
}

/* harmony default export */ var exchange = ({
  getExchangeList: function getExchangeList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        goodsId = _paramObj.goodsId,
        goodsName = _paramObj.goodsName,
        sortId = _paramObj.sortId;

    var mockList = exchangeList.filter(function (item) {
      if (goodsId && goodsId !== item.goodsId) return false;
      if (goodsName && goodsName !== item.goodsName) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      exchangeList: pageList,
      code: 2
    };
  },
  detail: function detail(config) {
    var goodsId = config.url.match(/\d+/)[0];
    var dataObj = exchangeList.filter(function (item) {
      return item.goodsId === goodsId;
    })[0];
    return {
      dataObj: dataObj,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/contentManagement/contentManagement.js
/**
 * Created by zhaojuntong on 2017/12/31.
 */



var coverList = [];
var contentManagement_count = 100;

for (var contentManagement_i = 0; contentManagement_i < contentManagement_count; contentManagement_i++) {
  coverList.push(mock_default.a.mock({
    'id': '@increment',
    'image': '@image(50x50, @color, @string)',
    'position': '@county(true)',
    'userId': '@integer(1000000, 9999999)',
    'uploadTime': '@datetime',
    'status': '@integer(0, 2)' /* 0 => 未通过 1 => 待审核 2 => 通过 */
  }));
}

/* harmony default export */ var contentManagement = ({
  getCoverList: function getCoverList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        type = _paramObj.type,
        userId = _paramObj.userId,
        sortId = _paramObj.sortId;

    var mockList = coverList.filter(function (item) {
      if (userId && userId * 1 !== item.userId) return false;
      // if (type === undefined) return true
      if (type + '' && type * 1 !== item.status) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      coverList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/tools/massiveEmail.js
/**
 * Created by zhaojuntong on 2018/1/1.
 */



var templateList = [];
var emailList = [];

for (var massiveEmail_i = 0; massiveEmail_i < 20; massiveEmail_i++) {
  templateList.push(mock_default.a.mock({
    'id': '@increment',
    'title': '@title',
    'language|1': ['繁体中文', '简体中文', '英文', '韩文'],
    'createTime': '@datetime',
    'content': '@title'
  }));
}
for (var _i = 0; _i < 60; _i++) {
  emailList.push(mock_default.a.mock({
    'id': '@increment',
    'title': '@title',
    'language|1': ['繁体中文', '简体中文', '英文', '韩文'],
    'sendNum': '@integer(30, 130)',
    'sendTime': '@datetime'
  }));
}
/* harmony default export */ var massiveEmail = ({
  getEmailList: function getEmailList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit;

    var TemplateList = templateList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    var EmailList = emailList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      totalMap: [templateList.length, emailList.length],
      templateList: TemplateList,
      emailList: EmailList,
      code: 2
    };
  },
  emailDetail: function emailDetail(config) {
    var emailId = config.url.match(/\d+/)[0] * 1;
    var detail = templateList.filter(function (item) {
      return item.id === emailId;
    })[0];
    return {
      emailDetail: detail,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/tools/messageNotification.js
/**
 * Created by zhaojuntong on 2018/1/1.
 */



var messageList = [];
var messageNotification_count = 100;

for (var messageNotification_i = 0; messageNotification_i < messageNotification_count; messageNotification_i++) {
  messageList.push(mock_default.a.mock({
    'id': '@increment',
    'pushTarget': '教练',
    'pushRegion': '部分教练',
    'pushTitle': '@title',
    'pushType|1': ['system', 'normal', 'sodive', 'task', 'production'] /* system => 系统消息 normal => 普通消息 sodive => sodive学院 task => 任务消息 production => 产品消息 */
    , 'pushNum': '@integer(1, 15)',
    'pushTime': '@datetime'
  }));
}

/* harmony default export */ var messageNotification = ({
  getMessageList: function getMessageList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        pushType = _paramObj.pushType,
        sortId = _paramObj.sortId;

    var mockList = messageList.filter(function (item) {
      if (pushType && item.pushType !== pushType) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      messageList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/system/system.js
/**
 * Created by zhaojuntong on 2018/1/1.
 */



var versionList = [];
var urlList = [];
var system_count = 10;

for (var system_i = 0; system_i < system_count; system_i++) {
  versionList.push(mock_default.a.mock({
    'id': '@increment',
    'systemType': '@integer(0, 1)', /* 0 => 教练版 1 => 用户版 */
    'systemName|1': ['sodive', 'sodibePRO'],
    'applicationType': '@integer(0, 1)', /* 0 => Android 1 => IOS */
    'version': '@integer(1, 2).@integer(0, 1).@integer(0, 9)',
    'forceUpdate|1': '@integer(0, 1)', /* 0 => 不强制 1 => 强制 */
    'downloadURL|1': ['http://imgfile.sodive.com/newupload/20171213/1513160885000.apk', 'https://itunes.apple.com/cn/app/sodive-pro/id1239741617?mt=8', 'http://imgfile.sodive.com/newupload/20171204/1512381544671.apk', 'https://itunes.apple.com/cn/app/sodive/id1238554413?mt=8'],
    'createTime': '@datetime'
  }));

  urlList.push(mock_default.a.mock({
    'urlId': '170@integer(10000, 99999)-@string("upper", 4)-@integer(1000000-9999999)',
    'functionIntroduce': '@ctitle(15, 30)',
    'applicationVersion|1': ['user', 'pro'], /* user => 用户端 pro => 教练端 */
    'createTime': '@datetime',
    'urlMap': [{ 'id': '@increment', 'url': 'http://shopcn.sodive.com/Mobile/index.html', 'introduce': '@ctitle', 'language|1': ['en', 'ch'], 'status': '@integer(0, 1)' }, { 'id': '@increment', 'url': 'http://shopen.sodive.com/Mobile/index.html', 'introduce': '@ctitle', 'language|1': ['en', 'ch'], 'status': '@integer(0, 1)' }]
  }));
}

/* harmony default export */ var system = ({
  getVersionList: function getVersionList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit;

    var pageList = versionList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      versionList: pageList,
      total: versionList.length,
      code: 2
    };
  },
  getUrlList: function getUrlList(config) {
    var _paramObj2 = Object(utils["c" /* paramObj */])(config.url),
        _paramObj2$page = _paramObj2.page,
        page = _paramObj2$page === undefined ? 1 : _paramObj2$page,
        _paramObj2$limit = _paramObj2.limit,
        limit = _paramObj2$limit === undefined ? 10 : _paramObj2$limit;

    console.log(config);
    var pageList = urlList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      urlList: pageList,
      total: urlList.length,
      code: 2
    };
  },
  getUrlInfo: function getUrlInfo(config) {
    var urlId = config.url.match(/(\d+)-([A-Z]+)-(\d+)/)[0];
    var urlInfo = urlList.filter(function (item) {
      return item.urlId === urlId;
    })[0];
    return {
      urlInfo: urlInfo,
      code: 2
    };
  },
  createUrl: function createUrl(config) {
    return {
      info: 'success',
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/operationManage/taskPending.js
/**
 * Created by zhaojuntong on 2018/1/2.
 */



var taskList = [];
var taskPending_count = 100;

for (var taskPending_i = 0; taskPending_i < taskPending_count; taskPending_i++) {
  taskList.push(mock_default.a.mock({
    'id': '@increment',
    'taskName': '@ctitle',
    'userId': 'C@integer(10000, 99999)',
    'nickName': '@first',
    'submitTime': '@datetime',
    'taskContent|2-3': ['您绑定的用户在活动期间购买了潜伴灯', '用户确认收货后15天内未发生退货：用户确认收货后15天内未发生退货，您可领取潜伴灯免费兑换券一张!', '分享商品详情：分享商品详情'],
    'status|1': ['pending', 'pended', 'failed'],
    'refuseReason': '@title'
  }));
}

var _taskManage = [];
for (var taskPending__i = 0; taskPending__i < 15; taskPending__i++) {
  _taskManage.push(mock_default.a.mock({
    'taskId': '@date(T)',
    'taskName': '@ctitle',
    'taskDescription': '@title',
    'detail': '@title',
    'top|1': ['yes', 'no'],
    'taskCircle|1': ['noLimit', 'limit'],
    'createTime': '@datetime',
    'updateTime': undefined,
    'datetimeMerge': ['@datetime', '@datetime'],
    'showRegion|1': ['all', 'China', 'abroad'],
    'subTask|1-2': [{ 'subTaskId': '@date(T)', 'subTaskName': '您的绑定用户在活动期间购买了潜伴灯', 'taskDescription': '@ctitle', 'subStatus|1': ['effective', 'ineffective'] }, { 'subTaskId': '@date(T)', 'subTaskName': '您的绑定用户已完成订单', 'taskDescription': '@ctitle', 'subStatus|1': ['effective', 'ineffective'] }, { 'subTaskId': '@date(T)', 'subTaskName': '用户确认收货后15天内未发生退货', 'taskDescription': '@ctitle', 'subStatus|1': ['effective', 'ineffective'] }],
    'status|1': ['effective', 'ineffective'],
    'userNumberRecord|10-50': [/* 该任务参与的user数量 */
    { 'userId': '@integer(10000, 99999)', 'nickName': '@first', 'submitTime': '@datetime', 'refuseReason': '@ctitle', 'status|1': ['pending', 'pended', 'failed'] }]
  }));
}

/* harmony default export */ var taskPending = ({
  getTaskList: function getTaskList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        userId = _paramObj.userId,
        type = _paramObj.type,
        sortId = _paramObj.sortId;

    var mockList = taskList.filter(function (item) {
      if (type && type !== item.status) return false;
      if (userId && userId !== item.userId) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      taskList: pageList,
      code: 2
    };
  },
  taskManage: function taskManage(config) {
    var _paramObj2 = Object(utils["c" /* paramObj */])(config.url),
        _paramObj2$page = _paramObj2.page,
        page = _paramObj2$page === undefined ? 1 : _paramObj2$page,
        _paramObj2$limit = _paramObj2.limit,
        limit = _paramObj2$limit === undefined ? 10 : _paramObj2$limit;

    var pageList = _taskManage.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      taskManage: pageList,
      total: _taskManage.length,
      code: 2
    };
  },
  userNumberRecord: function userNumberRecord(config) {
    // const taskId = config.url.match(/\d+/)[0]
    var _paramObj3 = Object(utils["c" /* paramObj */])(config.url),
        _paramObj3$page = _paramObj3.page,
        page = _paramObj3$page === undefined ? 1 : _paramObj3$page,
        _paramObj3$limit = _paramObj3.limit,
        limit = _paramObj3$limit === undefined ? 10 : _paramObj3$limit,
        userId = _paramObj3.userId,
        sortId = _paramObj3.sortId,
        taskId = _paramObj3.taskId;

    var filteredTask = _taskManage.filter(function (item) {
      return item.taskId === taskId;
    })[0];
    var taskName = filteredTask.taskName; // 当前任务名称
    var recordNum = filteredTask.userNumberRecord.map(function (item) {
      /* 当前任务所参与的user number */
      item.taskName = taskName;
      return item;
    });
    var filteredList = recordNum.filter(function (item) {
      if (userId && userId * 1 !== item.userId) return false;
      return true;
    });
    if (sortId === '-id') filteredList = filteredList.reverse();
    var pageList = filteredList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      taskName: taskName,
      recordList: pageList,
      total: filteredList.length,
      code: 2
    };
  },
  addTask: function addTask(config) {
    _taskManage.unshift(JSON.parse(config.body));
    return {
      code: 2
    };
  },
  editTask: function editTask(config) {
    var filteredTask = _taskManage.filter(function (item) {
      return config.body === item.taskId;
    })[0];
    if (filteredTask.taskCircle === 'noLimit') filteredTask.datetimeMerge = [];
    return { filteredTask: filteredTask, code: 2 };
  }
});
// CONCATENATED MODULE: ./src/mock/operationManage/operationManage.js
/**
 * Created by zhaojuntong on 2018/1/4.
 */



var recommendProduction = [];
var operationManage_count = 100;

for (var operationManage_i = 0; operationManage_i < operationManage_count; operationManage_i++) {
  recommendProduction.push(mock_default.a.mock({
    'id': '@increment',
    'productionNo': '2018@integer(1000000, 9999999)',
    'productionName': '@ctitle',
    'productionImage|2-3': [{ 'name': '@string', 'url': '@image(50x50, @color, "sodive")' }],
    'coachProfit': '@integer(10, 100)',
    'recommend|1': [true, false],
    'effective|1': [true, false],
    'shareNum': '@integer(40, 100)',
    'buyNum': '@integer(20, 40)',
    'showRegion|1': ['all', 'China', 'abroad'],
    'buyUrl': '@url("http", "shopcn.sodive.com/Mobile")',
    'shareIntroduce': '@title',
    'detail': '@title'
  }));
}

var sodiveList = [];
for (var operationManage__i = 0; operationManage__i < 6; operationManage__i++) {
  sodiveList.push(mock_default.a.mock({
    'id': '2018@integer(1000000, 9999999)',
    'programa|1': ['sodive'],
    'title': '@title',
    'description': '@ctitle',
    'top|1': ['yes', 'no'],
    'programaImage': [{ name: '@title', url: '@image(100x100, @color, sodive)' }],
    'createTime': '@datetime',
    'status|1': ['published', 'draft'],
    'detail': '@ctitle'
  }));
}

/* harmony default export */ var operationManage = ({
  getRecommendProduction: function getRecommendProduction(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        sortId = _paramObj.sortId,
        productionName = _paramObj.productionName;

    var mockList = recommendProduction.filter(function (item) {
      if (productionName && productionName !== item.productionName) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      recommendProduction: pageList,
      code: 2
    };
  },
  addProduction: function addProduction(config) {
    recommendProduction.unshift(JSON.parse(config.body));
    return {
      info: 'success',
      code: 2
    };
  },
  getSodiveList: function getSodiveList(config) {
    var _paramObj2 = Object(utils["c" /* paramObj */])(config.url),
        _paramObj2$page = _paramObj2.page,
        page = _paramObj2$page === undefined ? 1 : _paramObj2$page,
        _paramObj2$limit = _paramObj2.limit,
        limit = _paramObj2$limit === undefined ? 10 : _paramObj2$limit,
        status = _paramObj2.status;

    var mockList = sodiveList.filter(function (item) {
      if (status && status !== item.status) return false;
      return true;
    });
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      sodiveList: pageList,
      code: 2
    };
  },
  editSodive: function editSodive(config) {
    var data = JSON.parse(config.body);
    var routeId = data.routeId;
    if (routeId === '14') {
      sodiveList.unshift(data.sodiveForm);
    } else {
      sodiveList.forEach(function (item, index) {
        if (item.id === data.sodiveForm.id) {
          sodiveList.splice(index, 1, data.sodiveForm);
        }
      });
    }
    return { code: 2 };
  },
  getSodive: function getSodive(config) {
    var data = JSON.parse(config.body);
    var sodiveDetail = sodiveList.filter(function (item) {
      return item.id === data.routeId;
    })[0];
    return {
      sodiveDetail: sodiveDetail,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/operationManage/questionFeedback.js
/**
 * Created by zhaojuntong on 2018/1/5.
 */



var questionList = [];
var questionFeedback_count = 18;

for (var questionFeedback_i = 0; questionFeedback_i < questionFeedback_count; questionFeedback_i++) {
  questionList.push(mock_default.a.mock({
    'id': '@increment',
    'question': {
      'content': '@ctitle',
      'images|1-2': ['@image']
    },
    'userId': '@character("AC123456789")@integer(10000,99999)',
    'email': '@email',
    'nickName': '@first',
    'createTime': '@datetime',
    'answerTime': '@datetime',
    'status': '@integer(0, 1)',
    'answerContent': '@ctitle'
  }));
}

/* harmony default export */ var questionFeedback = ({
  getQuestionList: function getQuestionList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        sortId = _paramObj.sortId;

    if (sortId === '-id') questionList = questionList.reverse();
    var pageList = questionList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: questionList.length,
      questionList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/operationManage/shareStatistics.js
/**
 * Created by zhaojuntong on 2018/1/6.
 */



var statisticsList = []; // 分享统计
var detailList = []; // 分享详情
var shareStatistics_count = 50;

var Week = Date.now() - 7 * 24 * 3600 * 1000;
var Month = Date.now() - 30 * 24 * 3600 * 1000;
var QuarterYear = Date.now() - 90 * 24 * 3600 * 1000;
var HalfYear = Date.now() - 180 * 24 * 3600 * 1000;
var Year = Date.now() - 365 * 24 * 3600 * 1000;

for (var shareStatistics_i = 0; shareStatistics_i < shareStatistics_count; shareStatistics_i++) {
  statisticsList.push(mock_default.a.mock({
    'shareContent': '@ctitle',
    'facebook': '@integer(10, 100)',
    'wechatMoments': '@integer(10, 100)',
    'wechat': '@integer(10, 100)',
    'twitter': '@integer(10, 100)',
    'browseNum': '@integer(100, 400)',
    'shareTimeStamp|1': [Week, Month, QuarterYear, HalfYear, Year]
  }));

  detailList.push(mock_default.a.mock({
    'coachId': 'C@integer(10000, 99999)',
    'nickName': '@first',
    'shareType|1': ['商品', '推荐码'],
    'shareNum': '@integer(100, 300)',
    'browseNum': '@integer(200, 400)',
    'shareChannel|1': ['facebook', 'wechatMoments', 'wechat', 'twitter'],
    'shareTimeStamp|1': [Week, Month, QuarterYear, HalfYear, Year]
  }));
}

/* harmony default export */ var shareStatistics = ({
  getStatisticsList: function getStatisticsList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        timeCircle = _paramObj.timeCircle;

    var nowDateTimeStamp = Date.now();
    var mockList = statisticsList.filter(function (item) {
      if (timeCircle) {
        switch (timeCircle) {
          case 'week':
            if (nowDateTimeStamp - item.shareTimeStamp > 7 * 24 * 3600 * 1000) return false;
            break;
          case 'month':
            if (nowDateTimeStamp - item.shareTimeStamp > 30 * 24 * 3600 * 1000) return false;
            break;
          case 'quarterYear':
            if (nowDateTimeStamp - item.shareTimeStamp > 90 * 24 * 3600 * 1000) return false;
            break;
          case 'halfYear':
            if (nowDateTimeStamp - item.shareTimeStamp > 180 * 24 * 3600 * 1000) return false;
            break;
          case 'year':
            if (nowDateTimeStamp - item.shareTimeStamp > 365 * 24 * 3600 * 1000) return false;
            break;
        }
      }
      return true;
    });
    var pageList = mockList.filter(function (item, index) {
      return index < page * limit && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      statisticsList: pageList,
      code: 2
    };
  },
  getDetailList: function getDetailList(config) {
    var _paramObj2 = Object(utils["c" /* paramObj */])(config.url),
        _paramObj2$page = _paramObj2.page,
        page = _paramObj2$page === undefined ? 1 : _paramObj2$page,
        _paramObj2$limit = _paramObj2.limit,
        limit = _paramObj2$limit === undefined ? 10 : _paramObj2$limit,
        shareChannel = _paramObj2.shareChannel,
        coachId = _paramObj2.coachId,
        sortId = _paramObj2.sortId;

    var startDate = void 0;
    var endDate = void 0;
    // 点击el-date-picker组件清除按钮时, 传过来的是null
    if (JSON.parse(config.body) !== null && JSON.parse(config.body).length !== 0) {
      var dateMap = JSON.parse(config.body);
      startDate = new Date(dateMap[0]).getTime();
      endDate = new Date(dateMap[1]).getTime();
    }

    var mockList = detailList.filter(function (item) {
      if (shareChannel && shareChannel !== item.shareChannel) return false;
      if (coachId && coachId !== item.coachId) return false;
      if (JSON.parse(config.body) !== null && JSON.parse(config.body).length !== 0 && !(startDate < item.shareTimeStamp && endDate > item.shareTimeStamp)) return false;
      return true;
    });
    if (sortId === '-id') mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      detailList: pageList,
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/operationManage/adManage.js
/**
 * Created by zhaojuntong on 2018/1/7.
 */



var bannerList = [];
var adManage_count = 30;

for (var adManage_i = 0; adManage_i < adManage_count; adManage_i++) {
  bannerList.push(mock_default.a.mock({
    'id': '@increment',
    'title': '@ctitle',
    'banner': [{ 'name': '@string', 'url': '@image(100x65, @color, sodive)' }],
    'url': '@url(http)',
    'effective|1': ['effective', 'ineffective'],
    'type|1': ['user', 'pro'],
    'createTime': '@datetime(yyyy-MM-dd)'
  }));
}

/* harmony default export */ var adManage = ({
  getBannerList: function getBannerList(config) {
    var _paramObj = Object(utils["c" /* paramObj */])(config.url),
        _paramObj$page = _paramObj.page,
        page = _paramObj$page === undefined ? 1 : _paramObj$page,
        _paramObj$limit = _paramObj.limit,
        limit = _paramObj$limit === undefined ? 10 : _paramObj$limit,
        sortId = _paramObj.sortId,
        title = _paramObj.title;

    var mockList = bannerList.filter(function (item) {
      if (title && title !== item.title) return false;
      return true;
    });
    if (sortId === '-id') mockList = mockList.reverse();
    var pageList = mockList.filter(function (item, index) {
      return index < limit * page && index >= limit * (page - 1);
    });
    return {
      total: mockList.length,
      bannerList: pageList,
      code: 2
    };
  },
  editBanner: function editBanner(config) {
    var data = JSON.parse(config.body);
    if (data.id) {
      bannerList.forEach(function (item, index) {
        if (item.id === data.id) {
          bannerList.splice(index, 1, data);
        }
      });
    } else {
      bannerList.unshift(mock_default.a.mock({
        'id': '@increment',
        'title': data.title,
        'banner': data.banner,
        'url': data.url,
        'effective': data.effective,
        'type': data.type,
        'createTime': Object(utils["b" /* formatTimeCustom */])(new Date(), '{y}-{m}-{d}')
      }));
    }
    return {
      code: 2
    };
  }
});
// CONCATENATED MODULE: ./src/mock/index.js
/**
 * Created by zhaojuntong on 2017/12/19.
 */



















mock_default.a.mock(/\/user\/login/, 'post', mock_login.login);
mock_default.a.mock(/\/user\/userInfo/, 'post', mock_login.getUserInfo);

// userManage
mock_default.a.mock(/\/userManage\/agentList/, 'get', agent.getAgentList);
mock_default.a.mock(/\/userManage\/addAgent/, 'get', agent.addAgent);
mock_default.a.mock(/\/userManage\/coachList/, 'get', coach.getCoachList);
mock_default.a.mock(/\/userManage\/userList/, 'get', user.getUserList);
mock_default.a.mock(/\/userManage\/coachCertificateList/, 'get', coachCertificate.getCertificateList);
mock_default.a.mock(/\/userManage\/payAccountList/, 'get', payAccount.getPayAccountList);

// order
mock_default.a.mock(/\/orderList/, 'get', order.getOrderList);

// exchange
mock_default.a.mock(/\/exchangeList/, 'get', exchange.getExchangeList);
mock_default.a.mock(/\/exchange\/\d+/, 'get', exchange.detail);

// contentManagement
mock_default.a.mock(/\/contentManagement\/coverList/, 'get', contentManagement.getCoverList);

// operationManage
mock_default.a.mock(/\/operationManage\/taskList/, 'get', taskPending.getTaskList);
mock_default.a.mock(/\/operationManage\/taskManage/, 'get', taskPending.taskManage);
mock_default.a.mock(/\/operationManage\/userNumberRecord\/\d+/, 'get', taskPending.userNumberRecord);
mock_default.a.mock(/\/operationManage\/addTask/, 'get', taskPending.addTask);
mock_default.a.mock(/\/operationManage\/editTask\/\d+/, 'get', taskPending.editTask);
mock_default.a.mock(/\/operationManage\/recommendProduction/, 'get', operationManage.getRecommendProduction);
mock_default.a.mock(/\/operationManage\/addProduction/, 'get', operationManage.addProduction);
mock_default.a.mock(/\/operationManage\/sodiveList/, 'get', operationManage.getSodiveList);
mock_default.a.mock(/\/operationManage\/editSodive\/\d+/, 'get', operationManage.editSodive);
mock_default.a.mock(/\/operationManage\/getSodive\/\d+/, 'get', operationManage.getSodive);
mock_default.a.mock(/\/operationManage\/questionList/, 'get', questionFeedback.getQuestionList);
mock_default.a.mock(/\/operationManage\/statisticsList/, 'get', shareStatistics.getStatisticsList);
mock_default.a.mock(/\/operationManage\/detailList/, 'get', shareStatistics.getDetailList);
mock_default.a.mock(/\/operationManage\/bannerList/, 'get', adManage.getBannerList);
mock_default.a.mock(/\/operationManage\/editBanner/, 'get', adManage.editBanner);

// tools
mock_default.a.mock(/\/massiveEmail\/emailList/, 'get', massiveEmail.getEmailList);
mock_default.a.mock(/\/massiveEmail\/\d+/, 'get', massiveEmail.emailDetail);
mock_default.a.mock(/\/messageList/, 'get', messageNotification.getMessageList);

// system
mock_default.a.mock(/\/versionList/, 'get', system.getVersionList);
mock_default.a.mock(/\/urlList/, 'get', system.getUrlList);
mock_default.a.mock(/\/system\/url\/(\d+)-([A-Z]+)-(\d+)/, 'get', system.getUrlInfo);
mock_default.a.mock(/\/system\/url\/createUrl/, 'get', system.createUrl);
/* harmony default export */ var src_mock = (mock_default.a);
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__("Y81h");
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress_nprogress = __webpack_require__("UVIz");
var nprogress_nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress);

// CONCATENATED MODULE: ./src/permission.js

/**
 * Created by zhaojuntong on 2017/12/20.
 */



 // Progress 进度条样式
 // 验权

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(function (role) {
    return permissionRoles.indexOf(role) >= 0;
  });
}

var whiteList = ['/login']; // 不重定向白名单
router["c" /* default */].beforeEach(function (to, from, next) {
  nprogress_default.a.start(); // 开启进度条
  if (Object(auth["a" /* getToken */])()) {
    if (to.path === '/login') {
      next('/');
      nprogress_default.a.done();
    } else {
      if (store["a" /* default */].getters.roles.length === 0) {
        store["a" /* default */].dispatch('GetUserInfo').then(function (data) {
          var roles = data.roles;

          store["a" /* default */].dispatch('GenerateRoutes', roles).then(function () {
            router["c" /* default */].addRoutes(store["a" /* default */].getters.addRouters);
            next(extends_default()({}, to, { replace: true }));
          });
        });
      } else {
        if (hasPermission(store["a" /* default */].getters.roles, to.meta.role)) {
          next();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
      nprogress_default.a.done();
    }
  }
});

router["c" /* default */].afterEach(function () {
  nprogress_default.a.done(); // 结束Progress
});
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.











vue_esm["default"].use(element_ui_common_default.a);

vue_esm["default"].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router["c" /* default */],
  store: store["a" /* default */],
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "P5Co":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PTLo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-duihuanquan",
  "use": "icon-duihuanquan-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-duihuanquan\"><path fill=\"#ffffff\" d=\"M516.708743 834.513368M955.973162 394.189827l-68.873624-15.685237 0.385786 201.091948c0.12689 40.436968-32.773428 73.411987-73.180719 73.512271l-89.358167 0.193405-27.758204 121.719202c-3.864004 16.870226-20.74344 27.463492-37.620829 23.619954L158.931221 684.492586c-14.366196-3.275603-24.040533-15.901155-24.342408-29.940916l-32.885991 0.045025c-3.031033 0-6.130627-0.234337-9.114588-0.6191 0.064468 33.42118 23.080671 63.642482 57.040111 71.345931l694.719508 158.454872c39.403428 8.978489 78.863139-15.812127 87.842651-55.194066l78.990029-346.530364C1020.16823 442.614723 995.433896 403.191852 955.973162 394.189827L955.973162 394.189827 955.973162 394.189827zM870.846366 565.756321l-0.757247-355.416755c-0.063445-40.447201-33.082466-73.299423-73.488735-73.216535L83.996554 138.646734c-40.413432 0.091074-73.299423 33.041534-73.235978 73.482595l0.820692 355.437222c0.063445 37.356816 28.200272 68.144006 64.37824 72.570829 2.973728 0.358157 721.658044-0.881067 721.658044-0.881067C838.028936 639.139655 870.908788 606.169753 870.846366 565.756321L870.846366 565.756321 870.846366 565.756321zM603.770612 598.22071l-513.480724 1.075495c-0.511653 0-1.00898-0.132006-1.521656-0.13917-16.563234-0.807389-29.906124-14.411221-29.906124-31.210839l-0.820692-355.431082c0-17.34811 14.049994-31.456433 31.371498-31.497365l513.472538-1.088798c17.320481-0.019443 31.56081 14.046924 31.56081 31.372521l0.701988 355.415732C635.210671 584.04485 621.166817 598.174662 603.770612 598.22071L603.770612 598.22071 603.770612 598.22071zM358.221126 230.087329l0 40.660048c0 9.04091-0.468674 15.368012-1.351787 18.96698 0 4.541433-0.470721 8.137331-1.362021 10.846022l131.469264 0 0 10.844999L352.79965 311.405379c-3.620457 9.04398-9.491165 18.085914-17.623379 27.107381-1.815345 2.707668-4.059456 5.423523-6.77531 8.129144-3.620457 3.620457-5.884011 6.335289-6.776334 8.131191l189.750645 0 0 10.846022-92.165096 0c46.083571 51.497884 77.69964 78.160127 94.872764 79.964216 0.883113 0.904603 1.352811 1.816369 1.352811 2.707668 0 0.911766-0.462534 1.352811-1.352811 1.352811-30.726815 0.913812-50.613748-3.598968-59.636239-13.552667 0.892323 5.423523 1.795902 11.308557 2.707668 17.623379-0.911766 5.421476-1.815345 14.455223-2.707668 27.104311-0.910743 10.838859-1.352811 17.173125-1.352811 18.977213-2.714831 29.811979-19.439748 44.25697-50.151213 43.36567-30.726815-0.912789-58.273195-9.042957-82.671884-24.391527-3.620457-2.714831-4.974291-4.53734-4.062526-5.420453 0-0.912789 2.24411-0.470721 6.768147 1.351787 20.780279 7.218402 40.660048 10.839883 59.635215 10.839883 27.996634 0.8913 42.463114-7.682983 43.37488-25.745361 0.890276-6.313799 1.795902-16.268522 2.708692-29.822213 0-4.508687 0.448208-9.484002 1.353834-14.906501 0.8913-19.85828-9.04398-29.349445-29.815049-28.460192L313.493435 426.607144c-14.458293 36.150338-24.861224 61.458747-31.16786 75.896574-10.844999 27.104311-33.881668 40.194444-69.125357 39.304168-6.328126 0-9.04398-0.463558-8.131191-1.353834-0.912789-0.910743 1.803066-2.712785 8.131191-5.421476 17.157775-7.247054 31.616068-21.240767 43.372833-42.014906 3.598968-6.311753 9.933233-20.329001 18.975167-42.020022 3.599991-8.131191 7.219425-16.261359 10.837836-24.391527l-32.527834 0c-16.262382 18.97619-39.299051 27.568892-69.119217 25.753547-1.824555 0-2.707668-0.448208-2.707668-1.362021 0-0.88209 0.883113-1.795902 2.707668-2.707668 18.064424-6.307659 38.835494-22.574135 62.342884-48.790216 8.130168-9.020444 18.975167-20.329001 32.528857-33.882692l-93.516884 0 0-10.846022 101.647051 0c7.226588-7.219425 13.553691-14.443967 18.97619-21.682835 1.804089-1.803066 3.157923-3.1569 4.068665-4.069689 0.890276-1.803066 2.24411-3.598968 4.069689-5.423523 2.707668-2.706645 5.865591-6.776334 9.484002-12.199856L206.423885 311.395146l0-10.837836 121.978099 0c2.715855-7.225565 4.069689-17.150612 4.069689-29.820166l0-40.651862L358.221126 230.085282 358.221126 230.087329zM219.976552 240.924141l28.461215 0c16.266475 26.223245 30.703279 40.21798 43.372833 42.021046 0.884137 0.905626 1.353834 1.815345 1.353834 2.707668-0.911766 0.909719-1.824555 1.351787-2.714831 1.351787-27.107381 1.825578-43.830251-4.060479-50.145074-17.61417-2.707668-2.714831-6.333242-7.226588-10.836813-13.552667C224.936517 249.52503 221.779617 244.551762 219.976552 240.924141L219.976552 240.924141zM386.682341 365.618095l-74.54274 0c-6.333242 6.327102-14.905478 15.369036-25.752524 27.106358-11.755742 11.749602-19.437701 19.87977-23.037692 24.391527l139.593292 0c15.356756 0 27.997658 1.822508 37.95238 5.421476-8.132214-7.217379-18.977213-18.063401-32.530904-32.521694C397.519154 378.280486 390.281309 370.148271 386.682341 365.618095L386.682341 365.618095zM449.025225 240.924141l28.461215 0c-2.708692 3.62762-6.336312 8.599865-10.839883 14.914688-4.53734 6.327102-7.687076 10.837836-9.491165 13.552667-7.238868 13.553691-23.949458 19.439748-50.14405 17.61417-1.822508 0-3.176342-0.442068-4.067642-1.351787 0-0.893346 0.8913-1.803066 2.715855-2.707668C417.386644 281.142122 431.851077 267.147386 449.025225 240.924141L449.025225 240.924141zM449.025225 240.924141\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Q5K5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/userManage.js
var userManage = __webpack_require__("ms7A");

// EXTERNAL MODULE: ./src/views/multiplicationFilter/multiplicationFilter.vue + 2 modules
var multiplicationFilter = __webpack_require__("ILbm");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/user/user.vue

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



var countryObj = {};
/* harmony default export */ var user = ({
  name: 'user',
  data: function data() {
    return {
      list: null,
      total: 1,
      loading: true,
      visible: false,
      listQuery: { page: 1, limit: 10 },
      countryMap: [],
      selectedInfo: {
        isLogOff: null,
        userId: null
      },
      promptMap: ['恢复用户成功', '注销用户成功'],
      imageList: []
    };
  },
  created: function created() {
    this.GetUserList();
  },

  methods: {
    GetUserList: function GetUserList() {
      var _this = this;

      this.loading = true;
      Object(userManage["f" /* getUserList */])(this.listQuery).then(function (response) {
        _this.list = response.data.userList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    showDialog: function showDialog(row) {
      this.selectedInfo.isLogOff = row.status ? 0 : 1;
      this.selectedInfo.userId = row.userId;
      this.visible = true;
    },
    logOffReback: function logOffReback() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.userId === this.selectedInfo.userId) {
            if (i.status === 0) {
              i.status = 1;
            } else {
              i.status = 0;
            }
            this.$notify({ type: 'success', message: this.promptMap[i.status], title: 'Prompt', duration: 2000 });
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.visible = false;
    },
    browseCertificate: function browseCertificate(row) {
      this.imageList = row.image;
    },
    searchBtn: function searchBtn() {
      this.listQuery.page = 1;
      this.GetUserList();
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.countryMap = query.countryMap;
      countryObj = query.countryMap.reduce(function (obj, item) {
        obj[item.key] = item.name;
        return obj;
      }, {});
    }
  },
  filters: {
    countryFilter: function countryFilter(val) {
      return countryObj[val];
    }
  },
  components: { multiplicationFilter: multiplicationFilter["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-de6bc242","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/user/user.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-container',[_c('multiplicationFilter',{attrs:{"searchBtn":_vm.searchBtn},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){_vm.searchBtn()}}},[_vm._v("搜索")])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.list,"element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('el-form',{staticClass:"expand-table",attrs:{"label-position":"left","inline":""}},[_c('el-form-item',[_c('img',{attrs:{"src":props.row.coachAvatar,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别"}},[_c('span',[_vm._v(_vm._s(props.row.sex))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机"}},[_c('span',[_vm._v(_vm._s(props.row.phoneNo))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱"}},[_c('span',[_vm._v(_vm._s(props.row.email))])])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"序号","align":"center","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户ID","align":"center","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","align":"center","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"地区","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("countryFilter")(scope.row.countryName)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"注册时间","min-width":"120px","align":"center","prop":"registerTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"证书","align":"center","prop":"certificate"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"已推荐用户","align":"center","prop":"recommendNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"推荐人","align":"center","prop":"recommendName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"所属教练","align":"center","prop":"ownCoach"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?_c('el-tag',{attrs:{"type":"info"}},[_vm._v("\n              正常\n            ")]):_vm._e(),_vm._v(" "),(scope.row.status === 1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("\n              注销\n            ")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"190px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0 && scope.row.certificate !== '未上传')?[_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("注销")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看证书")])]:(scope.row.status === 1 && scope.row.certificate !== '未上传')?[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("恢复")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看证书")])]:(scope.row.status === 1)?[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("恢复")])]:[_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("注销")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"listQuery":_vm.listQuery,"total":_vm.total,"GetList":_vm.GetUserList}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.selectedInfo.isLogOff ? '注销用户' : '恢复用户',"visible":_vm.visible,"width":"350px","center":""},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"input-item",staticStyle:{"text-align":"center"}},[(_vm.selectedInfo.isLogOff)?_c('h3',[_vm._v("确定要注销用户(ID: "+_vm._s(_vm.selectedInfo.userId)+")?")]):_c('h3',[_vm._v("确定要恢复用户(ID: "+_vm._s(_vm.selectedInfo.userId)+")?")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.logOffReback()}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('photo-swipe',{attrs:{"imageList":_vm.imageList}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var user_user = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/user/user.vue
function injectStyle (ssrContext) {
  __webpack_require__("cB2y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  user,
  user_user,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_user_user = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "QA5Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/operationManagement/shareStatistics/children/statistics.vue + 2 modules
var statistics = __webpack_require__("EQWy");

// EXTERNAL MODULE: ./src/components/operationManagement/shareStatistics/children/detail.vue + 2 modules
var detail = __webpack_require__("lZmI");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/shareStatistics/shareStatistics.vue
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



/* harmony default export */ var shareStatistics = ({
  name: 'shareStatistics',
  data: function data() {
    return {
      currentTab: 'statistics'
    };
  },

  methods: {
    toggleTab: function toggleTab(name) {
      this.currentTab = name;
    }
  },
  components: { statistics: statistics["default"], detail: detail["default"] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-33454c38","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/shareStatistics/shareStatistics.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"tab",class:{'active': _vm.currentTab === 'statistics'},on:{"click":function($event){_vm.toggleTab('statistics')}}},[_vm._v("用户分享统计")]),_vm._v(" "),_c('div',{staticClass:"tab",class:{'active': _vm.currentTab === 'detail'},on:{"click":function($event){_vm.toggleTab('detail')}}},[_vm._v("用户分享详情")])]),_vm._v(" "),_c('div',[_c('keep-alive',[_c(_vm.currentTab,{tag:"component"})],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var shareStatistics_shareStatistics = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/shareStatistics/shareStatistics.vue
function injectStyle (ssrContext) {
  __webpack_require__("eZKH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33454c38"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  shareStatistics,
  shareStatistics_shareStatistics,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_shareStatistics_shareStatistics = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "QjmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-password",
  "use": "icon-password-usage",
  "viewBox": "0 0 1280 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1280 1024\" id=\"icon-password\"><path fill=\"#ffffff\" d=\"M319.45 867.2c89.6 89.6 233.6 89.6 316.8 0l12.8-12.8L332.25 537.6l-12.8 12.8C233.05 633.6 233.05 777.6 319.45 867.2L319.45 867.2 319.45 867.2zM335.45 588.8l262.4 262.4c-73.6 60.8-179.2 57.6-252.8-12.8C281.05 771.2 274.65 662.4 335.45 588.8L335.45 588.8 335.45 588.8zM485.85 1024c179.2 0 329.6-147.2 329.6-329.6 0-44.8-16-99.2-32-137.6l336-361.6 3.2-99.2L1103.45 0 956.25 0l-80 83.2 9.6 41.6L844.25 124.8l-60.8 60.8 3.2 32-32 0L591.45 387.2c-32-12.8-67.2-16-105.6-16C306.65 371.2 156.25 518.4 156.25 700.8S303.45 1024 485.85 1024L485.85 1024 485.85 1024zM764.25 252.8l51.2-3.2 0-54.4 38.4-41.6 64 0-6.4-64 60.8-64 105.6 0 12.8 57.6c-112 115.2-204.8 214.4-320 329.6-16 16-3.2 44.8 12.8 25.6 105.6-105.6 217.6-220.8 310.4-313.6l-6.4 57.6L761.05 528c-32-60.8-83.2-99.2-144-131.2L764.25 252.8 764.25 252.8 764.25 252.8zM485.85 406.4c160 0 288 128 288 288s-128 288-288 288-288-128-288-284.8S322.65 406.4 485.85 406.4L485.85 406.4 485.85 406.4z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "QnQv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RAd+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-arrowrightcircle",
  "use": "icon-arrowrightcircle-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-arrowrightcircle\"><path fill=\"#f7f7f7\" d=\"M512 960C264.576 960 64 759.36 64 512 64 264.64 264.576 64 512 64 759.424 64 960 264.64 960 512 960 759.36 759.424 960 512 960L512 960ZM512 0C229.216 0 0 229.12 0 512 0 794.88 229.216 1024 512 1024 794.784 1024 1024 794.88 1024 512 1024 229.12 794.784 0 512 0L512 0ZM721.12 483.84 540.128 302.72C527.616 290.24 507.36 290.24 494.88 302.72 482.368 315.52 482.368 335.68 494.88 348.16L626.752 480 288 480C270.304 480 256 494.4 256 512 256 529.6 270.304 544 288 544L626.752 544 494.88 675.84C482.368 688.32 482.368 708.8 494.88 721.28 507.36 733.76 527.616 733.76 540.128 721.28L721.12 540.16C728.8 532.48 731.2 521.92 729.44 512 731.2 502.08 728.8 491.52 721.12 483.84L721.12 483.84Z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "RMon":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RN8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-back",
  "use": "icon-back-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-back\"><path fill=\"#ffffff\" d=\"M609.701647 230.159059h-491.52v92.16h491.52c165.767529 0 294.731294 119.687529 294.731294 276.299294 0 156.611765-119.747765 276.299294-285.515294 276.299294H47.887059c-27.648 0-46.08 18.432-46.08 46.08 0 27.587765 18.432 46.019765 46.08 46.019765h571.030588c211.847529 0 377.675294-165.767529 377.675294-368.399059S821.488941 230.098824 609.641412 230.098824zM16.865882 241.965176L278.287059 12.167529a47.525647 47.525647 0 0 1 66.921412 3.373177c17.468235 19.275294 15.962353 49.392941-3.312942 66.921412l-220.461176 192.572235L338.522353 436.284235c20.48 16.143059 23.913412 46.140235 7.830588 66.56a47.525647 47.525647 0 0 1-66.56 7.830589L19.576471 315.211294a46.923294 46.923294 0 0 1-15.420236-21.985882c-5.782588-19.335529-1.325176-38.610824 12.649412-51.260236z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Rlrl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Rzmi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/contentManagement/logger/logger.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var logger = ({
  name: 'logger',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1 }
    };
  },

  methods: {
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0313e8cb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/contentManagement/logger/logger.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"listQuery":_vm.listQuery},on:{"sendListQuery":_vm.acceptQuery}}),_vm._v(" "),_c('el-main',[_c('el-table',{attrs:{"data":_vm.list}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var logger_logger = (esExports);
// CONCATENATED MODULE: ./src/components/contentManagement/logger/logger.vue
function injectStyle (ssrContext) {
  __webpack_require__("azvS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  logger,
  logger_logger,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var contentManagement_logger_logger = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SFz3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SwjO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "T1RD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "T3BH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// EXTERNAL MODULE: ./src/views/tinymce/tinymce.vue + 5 modules
var tinymce = __webpack_require__("Xx3T");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/recommendGoods/recommendGoods.vue


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



/* harmony default export */ var recommendGoods = ({
  name: 'recommendGoods',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, productionName: null },
      visible: false,
      productionForm: {
        productionNo: '',
        productionName: '',
        productionImage: [],
        coachProfit: '',
        recommend: '',
        effective: '',
        showRegion: '',
        detail: '',
        id: (Math.random() * 100000000000).toFixed(0)
      },
      productionRules: {
        productionNo: [{ required: true, trigger: 'blur', message: '请输入货品编号' }],
        productionName: [{ required: true, trigger: 'blur', message: '请输入产品名称' }],
        productionImage: [{ required: true, trigger: 'blur', message: '请上传图片列表' }],
        coachProfit: [{ required: true, trigger: 'blur, change', message: '请输入教练收益' }, { type: 'number', message: '此项必须为数字' }],
        recommend: [{ required: true, trigger: 'blur, change', message: '请选择是否推荐' }],
        effective: [{ required: true, trigger: 'blur, change', message: '请选择是否有效' }],
        showRegion: [{ required: true, trigger: 'blur, change', message: '请选择显示地区' }],
        detail: [{ required: true, trigger: 'blur', message: '请输入产品详情' }]
      },
      isEdit: false
    };
  },
  created: function created() {
    this.GetRecommendProduction();
  },

  methods: {
    GetRecommendProduction: function GetRecommendProduction() {
      var _this = this;

      Object(operationManage["i" /* getRecommendProduction */])(this.listQuery).then(function (response) {
        _this.list = response.data.recommendProduction;
        _this.total = response.data.total;
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.productionForm.validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = get_iterator_default()(_this2.list.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = slicedToArray_default()(_ref, 2);

                var i = _ref2[0];
                var item = _ref2[1];

                if (item.id === _this2.productionForm.id) {
                  _this2.list.splice(i, 1, _this2.productionForm);
                  _this2.$message.success('发布成功');
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            Object(operationManage["a" /* addProduction */])(_this2.productionForm).then(function () {
              _this2.$message.success('发布成功');
              _this2.list.unshift(_this2.productionForm);
            });
          }
          _this2.visible = false;
        }
      });
    },
    editProduction: function editProduction(row) {
      this.isEdit = true;
      this.visible = true;
      this.productionForm = row;
      this.productionForm.recommend = row.recommend + '';
      this.productionForm.effective = row.effective + '';
    },
    addProduction: function addProduction() {
      var _this3 = this;

      this.visible = true;
      this.isEdit = false;
      this.productionForm = {
        productionNo: '',
        productionName: '',
        productionImage: [],
        coachProfit: '',
        recommend: '',
        effective: '',
        showRegion: '',
        detail: ''
      };
      this.$nextTick(function () {
        _this3.$refs.productionForm.clearValidate();
      });
    },
    handleSuccess: function handleSuccess(response, file) {
      this.productionForm.productionImage.push({ name: file.name, url: file.url });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    showRegionFilter: function showRegionFilter(type) {
      var regionObj = { 'all': '全部', 'China': '中国', 'abroad': '海外' };
      return regionObj[type];
    },
    statusFilter: function statusFilter(val) {
      var statusObj = { 'true': '是', 'false': '否' };
      return statusObj[val];
    }
  },
  components: { tinymce: tinymce["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7290da74","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/recommendGoods/recommendGoods.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"production-container"},[_c('certificate-filter',{attrs:{"GetList":_vm.GetRecommendProduction},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"产品名称","clearable":""},model:{value:(_vm.listQuery.productionName),callback:function ($$v) {_vm.$set(_vm.listQuery, "productionName", $$v)},expression:"listQuery.productionName"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item fr"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addProduction}},[_vm._v("新增产品")])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"产品名称","prop":"productionName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"产品图片"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{attrs:{"src":scope.row.productionImage[0].url,"width":"50","height":"50"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"教练收益","prop":"coachProfit"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否推荐"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.recommend)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否有效"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.effective)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"总分享次数","prop":"shareNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"购买次数","prop":"buyNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"显示地区"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("showRegionFilter")(scope.row.showRegion)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.editProduction(scope.row)}}},[_vm._v("编辑")])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetRecommendProduction}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增/编辑","visible":_vm.visible,"center":""},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"productionForm",attrs:{"inline":"","label-width":"120px","label-position":"right","model":_vm.productionForm,"rules":_vm.productionRules}},[_c('el-form-item',{attrs:{"label":"货品号","prop":"productionNo"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.productionForm.productionNo),callback:function ($$v) {_vm.$set(_vm.productionForm, "productionNo", $$v)},expression:"productionForm.productionNo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"产品名称","prop":"productionName"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.productionForm.productionName),callback:function ($$v) {_vm.$set(_vm.productionForm, "productionName", $$v)},expression:"productionForm.productionName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"产品图片","prop":"productionImage"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","list-type":"picture-card","file-list":_vm.productionForm.productionImage,"on-success":_vm.handleSuccess}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"教练收益","prop":"coachProfit"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.productionForm.coachProfit),callback:function ($$v) {_vm.$set(_vm.productionForm, "coachProfit", _vm._n($$v))},expression:"productionForm.coachProfit"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐","prop":"recommend"}},[_c('el-radio-group',{model:{value:(_vm.productionForm.recommend),callback:function ($$v) {_vm.$set(_vm.productionForm, "recommend", $$v)},expression:"productionForm.recommend"}},[_c('el-radio',{attrs:{"label":"true"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"false"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否有效","prop":"effective"}},[_c('el-radio-group',{model:{value:(_vm.productionForm.effective),callback:function ($$v) {_vm.$set(_vm.productionForm, "effective", $$v)},expression:"productionForm.effective"}},[_c('el-radio',{attrs:{"label":"true"}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"false"}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"显示地区","prop":"showRegion"}},[_c('el-radio-group',{model:{value:(_vm.productionForm.showRegion),callback:function ($$v) {_vm.$set(_vm.productionForm, "showRegion", $$v)},expression:"productionForm.showRegion"}},[_c('el-radio',{attrs:{"label":"all"}},[_vm._v("全部")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"China"}},[_vm._v("中国")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"abroad"}},[_vm._v("海外")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详情","prop":"detail"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.productionForm.detail),callback:function ($$v) {_vm.$set(_vm.productionForm, "detail", $$v)},expression:"productionForm.detail"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("发布")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var recommendGoods_recommendGoods = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/recommendGoods/recommendGoods.vue
function injectStyle (ssrContext) {
  __webpack_require__("vzTe")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  recommendGoods,
  recommendGoods_recommendGoods,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_recommendGoods_recommendGoods = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TIfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getToken;
/* harmony export (immutable) */ __webpack_exports__["c"] = setToken;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeToken;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("lbHh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);
/**
 * Created by zhaojuntong on 2017/12/19.
 */


var TokenKey = 'Admin-Token';

function getToken() {
  return arguments.length === 0 ? __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(TokenKey) : __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(arguments[0]);
}

function setToken() {
  return arguments.length === 1 ? __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(TokenKey, arguments[0], { expires: 7 }) : __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(arguments[1], arguments[0], { expires: 7 });
}

function removeToken() {
  return arguments.length === 0 ? __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(TokenKey) : __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(arguments[0]);
}

/***/ }),

/***/ "U5Og":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UVIz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "V/8j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getVersionList;
/* harmony export (immutable) */ __webpack_exports__["c"] = getUrlList;
/* harmony export (immutable) */ __webpack_exports__["b"] = getUrlInfo;
/* harmony export (immutable) */ __webpack_exports__["a"] = createUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojutong on 2018/1/1.
 */


function getVersionList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'versionList',
    method: 'get',
    params: listQuery
  });
}

function getUrlList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'urlList',
    method: 'get',
    params: listQuery
  });
}

function getUrlInfo(urlId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'system/url/' + urlId,
    method: 'get'
  });
}

function createUrl(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: 'system/url/createUrl',
    method: 'get',
    data: data
  });
}

/***/ }),

/***/ "VdD3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-user",
  "use": "icon-user-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-user\"><path fill=\"#ffffff\" d=\"M512 0C229.225813 0 0 229.225813 0 512s229.225813 512 512 512 512-229.225813 512-512S794.774187 0 512 0z m323.42016 835.42016a455.789227 455.789227 0 1 1 98.044587-145.408 455.92576 455.92576 0 0 1-98.044587 145.408z\" /><path fill=\"#ffffff\" d=\"M604.07808 514.607787a144.30208 144.30208 0 1 0-184.15616 0 216.459947 216.459947 0 0 0-124.1088 195.570346 27.306667 27.306667 0 1 0 54.613333 0 161.573547 161.573547 0 0 1 323.147094 0 27.306667 27.306667 0 0 0 54.613333 0 216.459947 216.459947 0 0 0-124.1088-195.570346zM512 493.19936a89.688747 89.688747 0 1 1 89.688747-89.688747A89.797973 89.797973 0 0 1 512 493.19936z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "WOUc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XPHZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XUkJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/taskManage/children/userNumberRecord.vue
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


/* harmony default export */ var userNumberRecord = ({
  data: function data() {
    return {
      list: null,
      total: 1,
      taskName: '',
      listQuery: { page: 1, taskId: this.$route.params.taskId, userId: null },
      loading: true
    };
  },
  created: function created() {
    this.fetchUserNumberRecord();
  },

  methods: {
    fetchUserNumberRecord: function fetchUserNumberRecord() {
      var _this = this;

      Object(operationManage["o" /* userNumberRecord */])(this.listQuery).then(function (response) {
        _this.list = response.data.recordList;
        _this.total = response.data.total;
        _this.taskName = response.data.taskName;
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.listQuery.taskId = this.$route.params.taskId;
    }
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = { 'pending': '待审核', 'pended': '审核通过', 'failed': '审核失败' };
      return statusMap[status];
    },
    statusTagFilter: function statusTagFilter(status) {
      var statusMap = { 'pending': 'primary', 'pended': 'success', 'failed': 'danger' };
      return statusMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e6768d28","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/taskManage/children/userNumberRecord.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.fetchUserNumberRecord},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","size":"medium"},on:{"click":_vm.goBack}},[_c('svg-icon',{attrs:{"iconClass":'back'}}),_vm._v("任务["+_vm._s(_vm.taskName)+"]  用户参与记录")],1)],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"用户ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"任务名称","prop":"taskName","width":"300px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户ID","prop":"userId","width":"120px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户昵称","prop":"nickName","width":"140px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提交时间","prop":"submitTime","width":"240px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"拒绝原因","align":"left"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 'failed')?_c('span',[_vm._v(_vm._s(scope.row.refuseReason))]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"审核状态","width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.fetchUserNumberRecord}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var children_userNumberRecord = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/taskManage/children/userNumberRecord.vue
function injectStyle (ssrContext) {
  __webpack_require__("gnd+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  userNumberRecord,
  children_userNumberRecord,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var taskManage_children_userNumberRecord = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Xx3T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/imageUpload/imageUpload.vue


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

/* harmony default export */ var imageUpload = ({
  name: 'imageUpload',
  data: function data() {
    return {
      visible: false,
      fileList: [],
      listObj: {}
    };
  },

  methods: {
    beforeUpload: function beforeUpload(file) {
      var _this = this;
      var fileName = file.uid;
      this.listObj[fileName] = {};
      var URL = window.URL || window.webkitURL;
      return new promise_default.a(function (resolve, reject) {
        var image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = function () {
          _this.listObj[fileName] = { isSuccess: false, uid: file.uid, width: this.width, height: this.height };
        };
        resolve(true);
      });
    },
    handleSuccess: function handleSuccess(response, file) {
      var uid = file.uid;
      var listKeyArr = keys_default()(this.listObj);
      for (var i = 0; i < listKeyArr.length; i++) {
        if (this.listObj[listKeyArr[i]].uid === uid) {
          this.listObj[listKeyArr[i]].url = response.files.file;
          this.listObj[listKeyArr[i]].isSuccess = true;
          return;
        }
      }
    },
    handleRemove: function handleRemove(file) {
      var uid = file.uid;
      var listKeyArr = keys_default()(this.listObj);
      for (var i = 0; i < listKeyArr.length; i++) {
        if (this.listObj[listKeyArr[i]].uid === uid) {
          delete this.listObj[listKeyArr[i]].uid;
          return;
        }
      }
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      var arr = keys_default()(this.listObj).map(function (item) {
        return _this2.listObj[item];
      });
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！');
        return;
      }
      this.$emit('uploadSuccess', arr);
      this.listObj = {};
      this.fileList = [];
      this.visible = false;
    },
    checkAllSuccess: function checkAllSuccess() {
      var _this3 = this;

      return keys_default()(this.listObj).every(function (item) {
        return _this3.listObj[item].isSuccess;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19a0df08","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/imageUpload/imageUpload.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-container"},[_c('el-button',{attrs:{"icon":"el-icon-upload","type":"primary"},on:{"click":function($event){_vm.visible = true}}},[_vm._v("上传图片")]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","file-list":_vm.fileList,"multiple":true,"show-file-list":true,"list-type":"picture-card","before-upload":_vm.beforeUpload,"on-success":_vm.handleSuccess,"on-remove":_vm.handleRemove}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("点击上传")])],1),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSubmit}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var imageUpload_imageUpload = (esExports);
// CONCATENATED MODULE: ./src/views/imageUpload/imageUpload.vue
function injectStyle (ssrContext) {
  __webpack_require__("v2zV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  imageUpload,
  imageUpload_imageUpload,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_imageUpload_imageUpload = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/tinymce/tinymce.vue
//
//
//
//
//
//
//
//


/* harmony default export */ var tinymce = ({
  name: 'tinymce',
  props: {
    id: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 400
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default: function _default() {
        return ['removeformat undo redo |  bullist numlist | outdent indent | strikethrough forecolor backcolor | fullscreen code', 'formatselect | bold italic blockquote | h2 p  media link | alignleft aligncenter alignright alignjustify'];
      }
    },
    menubar: {
      default: ''
    }
  },
  data: function data() {
    return {
      hasInit: false,
      hasChange: false,
      tinymceId: this.id || 'tinymce' + +new Date()
    };
  },

  watch: {
    value: function value(val) {
      var _this2 = this;

      if (!this.hasChange && this.hasInit) {
        this.$nextTick(function () {
          return window.tinymce.get(_this2.tinymceId).setContent(val);
        });
      }
    }
  },
  mounted: function mounted() {
    this.tinymceInit();
  },

  methods: {
    tinymceInit: function tinymceInit() {
      var _this3 = this;

      // const _this = this
      window.tinymce.init({
        'selector': '#' + this.tinymceId,
        'height': this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar,
        menubar: this.menubar,
        plugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools', // 允许启用那些功能
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
        imagetools_toolbar: 'watermark',
        default_link_target: '_blank',
        link_title: false,
        init_instance_callback: function init_instance_callback(editor) {
          // 编辑器每次实例化时执行的函数
          if (_this3.value) {
            editor.setContent(_this3.value);
          }
          _this3.hasInit = true;
          editor.on('content change KeyUp', function () {
            _this3.hasChange = true;
            _this3.$emit('input', editor.getContent({ format: 'raw' }));
          });
        }
      });
    },
    imageSuccess: function imageSuccess(arr) {
      var _this = this;
      arr.forEach(function (item) {
        window.tinymce.get(_this.tinymceId).insertContent('<img src="' + item.url + '" >');
      });
    }
  },
  components: { imageUpload: views_imageUpload_imageUpload }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-149db731","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/tinymce/tinymce.vue
var tinymce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tinymce-container"},[_c('textarea',{attrs:{"id":_vm.tinymceId}}),_vm._v(" "),_c('div',{staticClass:"edit-image"},[_c('image-upload',{on:{"uploadSuccess":_vm.imageSuccess}})],1)])}
var tinymce_staticRenderFns = []
var tinymce_esExports = { render: tinymce_render, staticRenderFns: tinymce_staticRenderFns }
/* harmony default export */ var tinymce_tinymce = (tinymce_esExports);
// CONCATENATED MODULE: ./src/views/tinymce/tinymce.vue
function tinymce_injectStyle (ssrContext) {
  __webpack_require__("SFz3")
}
var tinymce_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var tinymce___vue_template_functional__ = false
/* styles */
var tinymce___vue_styles__ = tinymce_injectStyle
/* scopeId */
var tinymce___vue_scopeId__ = "data-v-149db731"
/* moduleIdentifier (server only) */
var tinymce___vue_module_identifier__ = null
var tinymce_Component = tinymce_normalizeComponent(
  tinymce,
  tinymce_tinymce,
  tinymce___vue_template_functional__,
  tinymce___vue_styles__,
  tinymce___vue_scopeId__,
  tinymce___vue_module_identifier__
)

/* harmony default export */ var views_tinymce_tinymce = __webpack_exports__["a"] = (tinymce_Component.exports);


/***/ }),

/***/ "YM6t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/errorPage/404.vue
//
//
//

/* harmony default export */ var _04 = ({
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-099619f4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/errorPage/404.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var errorPage_404 = (esExports);
// CONCATENATED MODULE: ./src/components/errorPage/404.vue
function injectStyle (ssrContext) {
  __webpack_require__("/7BF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _04,
  errorPage_404,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_errorPage_404 = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return constantRouterMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncRouterMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");



/* 开发环境不使用懒加载 */
function _import(file) {
  return __webpack_require__("2eoi")("./" + file + '.vue').default;
}
// import Index from '@/components/sidebarItem.vue'

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/**
 * hidden: 是否在左侧导航栏显示,true为隐藏,默认false
 * title: 左侧显示的导航
 * icon: 左侧导航icon-name
 */

var constantRouterMap = [{ path: '/login', component: _import('login/index'), hidden: true }, { path: '/404', component: _import('errorPage/404'), hidden: true }, {
  path: '',
  component: _import('layout/layout'),
  redirect: '/index',
  children: [{ path: 'index', name: 'index', component: _import('index'), meta: { title: '首页', icon: 'shouye' } }]
}];

/* harmony default export */ __webpack_exports__["c"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: constantRouterMap
}));

var asyncRouterMap = [{
  path: '/userManage',
  name: 'userManage',
  component: _import('layout/layout'),
  meta: { title: '用户管理', icon: 'people' },
  redirect: '/userManage/agent',
  children: [{
    path: 'agent',
    name: 'agent',
    component: _import('userManage/agent/agent'),
    meta: { title: '合伙人' }
  }, {
    path: 'coach',
    name: 'coach',
    component: _import('userManage/coach/coach'),
    meta: { title: '潜水教练', keepalive: true }
  }, {
    path: 'user',
    name: 'user',
    component: _import('userManage/user/user'),
    meta: { title: '普通用户', keepalive: true }
  }, {
    path: 'coachExamine',
    name: 'coachExamine',
    component: _import('userManage/coachExamine/coachExamine'),
    meta: { title: '教练证件审核', keepalive: true }
  }, {
    path: 'userExamine',
    name: 'userExamine',
    component: _import('userManage/userExamine/userExamine'),
    meta: { title: '用户证件审核', keepalive: true }
  }, {
    path: 'payAccount',
    name: 'payAccount',
    component: _import('userManage/payAccount/payAccount'),
    meta: { title: '提现账号', keepalive: true }
  }]
}, {
  path: '/order',
  component: _import('layout/layout'),
  children: [{
    path: 'index',
    name: 'order',
    component: _import('order/index'),
    meta: { title: '兑换券订单管理', icon: 'dingdan' }
  }]
}, {
  path: '/exchange',
  name: 'exchange',
  component: _import('layout/layout'),
  meta: { title: '兑换券商城管理', icon: 'duihuanquan' },
  redirect: '/exchange/list',
  children: [{
    path: 'list',
    name: 'list',
    component: _import('exchange/list/list'),
    meta: { title: '兑换券商品列表' }
  }, {
    path: 'addItems',
    name: 'addItems',
    component: _import('exchange/addItems/addItems'),
    meta: { title: '新增兑换券商品' }
  }, {
    path: ':id',
    component: _import('exchange/addItems/addItems'),
    meta: { title: '编辑兑换券商品' },
    hidden: true
  }]
}, {
  path: '/contentManage',
  component: _import('layout/layout'),
  name: 'contentManage',
  meta: { title: '内容管理', icon: 'neirongguanli' },
  redirect: '/contentManage/logger',
  children: [
  /* {
    path: 'logger',
    name: 'logger',
    component: _import('contentManagement/logger/logger'),
    meta: {title: '潜水日志'}
  }, */
  {
    path: 'discoverPending',
    name: 'discoverPending',
    component: _import('contentManagement/discoverPending/discoverPending'),
    meta: { title: '发现审核列表' }
  }, {
    path: 'discoverPass',
    name: 'discoverPass',
    component: _import('contentManagement/discoverPass/discoverPass'),
    meta: { title: '发现通过列表' }
  }, {
    path: 'discoverAdd',
    name: 'discoverAdd',
    component: _import('contentManagement/discoverAdd/discoverAdd'),
    meta: { title: '发现新增' }
  }]
}, {
  path: '/operationManagement',
  name: 'operationManagement',
  component: _import('layout/layout'),
  meta: { title: '运营管理', icon: 'yunyingguanli' },
  redirect: 'operationManagement/taskPending',
  children: [{
    path: '/operationManagement/taskManage',
    name: 'taskManageIndex',
    component: _import('operationManagement/taskManage/index'),
    meta: { title: '任务管理', icon: 'task' },
    redirect: '/operationManagement/taskManage/taskPending',
    children: [{ path: 'taskPending', name: 'taskPending', component: _import('operationManagement/taskManage/children/taskPending'), meta: { title: '任务审核' } }, { path: 'taskManage', name: 'taskManage', component: _import('operationManagement/taskManage/children/taskManage'), meta: { title: '任务管理' } }, { path: 'userNumberRecord/:taskId', component: _import('operationManagement/taskManage/children/userNumberRecord'), hidden: true }, { path: 'editTask', name: 'editTask', component: _import('operationManagement/taskManage/children/editTask'), hidden: true, meta: { title: '新增主任务' } }, { path: 'editTask/:taskId', component: _import('operationManagement/taskManage/children/editTask'), hidden: true, meta: { title: '编辑主任务' } }]
  }, {
    path: 'recommendGoods',
    name: 'recommendGoods',
    component: _import('operationManagement/recommendGoods/recommendGoods'),
    meta: { title: '推荐产品管理' }
  }, {
    path: 'sodiveCollege',
    name: 'sodiveCollege',
    component: _import('operationManagement/sodiveCollege/sodiveCollege'),
    meta: { title: 'sodive学院' }
  }, { path: 'sodiveCollege/sodive/:id', component: _import('operationManagement/sodiveCollege/editSodive'), hidden: true, meta: { title: '编辑sodive学院' } }, {
    path: 'questionFeedback',
    name: 'questionFeedback',
    component: _import('operationManagement/questionFeedback/questionFeedback'),
    meta: { title: '问题反馈', keepalive: true }
  }, {
    path: 'shareStatistics',
    name: 'shareStatistics',
    component: _import('operationManagement/shareStatistics/shareStatistics'),
    meta: { title: '分享统计' }
  }, {
    path: 'adManage',
    name: 'adManage',
    component: _import('operationManagement/adManage/adManage'),
    meta: { title: '广告位管理', keepalive: true }
    /* {
      path: 'duihuanquan',
      name: 'duihuanquan',
      component: _import('operationManagement/duihuanquan/duihuanquan'),
      meta: {title: '兑换券'}
    } */
  }]
}, {
  path: '/tools',
  name: 'tools',
  component: _import('layout/layout'),
  meta: { title: '运营工具', icon: 'tools' },
  redirect: 'tools/massEmail',
  children: [{
    path: 'massEmail',
    name: 'massEmail',
    component: _import('tools/massEmail/massEmail'),
    meta: { title: '群发邮件列表' }
  }, {
    path: 'emailTemplate',
    name: 'emailTemplate',
    component: _import('tools/massEmail/components/emailTemplate'),
    meta: { title: '新建邮件模板' }
  }, {
    path: 'editTemplate/:emailId',
    component: _import('tools/massEmail/components/emailTemplate'),
    hidden: true,
    meta: { title: '编辑邮件模板' }
  }, {
    path: 'messageNotification',
    name: 'messageNotification',
    component: _import('tools/messageNotification/messageNotification'),
    meta: { title: '消息通知' }
  }]
}, {
  path: '/system',
  name: 'system',
  component: _import('layout/layout'),
  meta: { title: '系统配置', icon: 'xitong' },
  redirect: 'system/urlManage',
  children: [{
    path: 'urlManage',
    name: 'urlManage',
    component: _import('system/urlManage/urlManage'),
    meta: { title: '网址管理' }
  }, {
    path: 'url/:urlId',
    component: _import('system/urlManage/components/urlInfo'),
    hidden: true,
    meta: { title: '网址信息' }
  }, {
    path: 'appManage',
    name: 'appManage',
    component: _import('system/appManage/appManage'),
    meta: { title: 'App版本管理' }
  }]
}, { path: '*', component: _import('errorPage/404'), hidden: true }];

/***/ }),

/***/ "YnKo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZDfo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/exchange.js
var exchange = __webpack_require__("y/ne");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/exchange/list/list.vue
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


/* harmony default export */ var list = ({
  name: 'list',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, goodsId: null, goodsName: null },
      loading: true,
      downloadLoading: false
    };
  },
  created: function created() {
    this.GetExchangeList();
  },

  methods: {
    GetExchangeList: function GetExchangeList() {
      var _this = this;

      this.loading = true;
      Object(exchange["b" /* getExchangeList */])(this.listQuery).then(function (response) {
        _this.total = response.data.total;
        _this.list = response.data.exchangeList.map(function (item) {
          _this.$set(item, 'isCheck', false);
          return item;
        });
        _this.loading = false;
      });
    },
    onShelf: function onShelf() {
      var arr = this.list.filter(function (item) {
        return item.isCheck && item.status === 1;
      });
      if (arr.length !== 0) {
        arr.map(function (item) {
          item.status = 0;
          return item;
        });
        this.$notify({
          message: '商品上架成功',
          title: 'Prompt',
          type: 'success',
          duration: 2000
        });
      }
    },
    offShelf: function offShelf() {
      var arr = this.list.filter(function (item) {
        return item.isCheck && item.status === 0;
      });
      if (arr.length !== 0) {
        arr.map(function (item) {
          item.status = 1;
          return item;
        });
        this.$notify({
          message: '商品下架成功',
          title: 'Prompt',
          type: 'success',
          duration: 2000
        });
      }
    },
    excelExport: function excelExport() {
      var _this2 = this;

      this.downloadLoading = false;
      __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "zWO4")).then(function (excel) {
        var tHeader = ['商品ID', '商品名称', '品牌', '价格', '创建时间', '更新时间', '状态'];
        var filterVal = ['goodsId', 'goodsName', 'brand', 'price', 'createTime', 'updateTime', 'status'];
        var data = _this2.formatJson(filterVal, _this2.list);
        excel.export_json_to_excel(tHeader, data, 'exchange-goods-list');
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, dataJson) {
      var statusMap = ['上架', '下架'];
      return dataJson.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'status') {
            return statusMap[v[j]];
          } else {
            return v[j];
          }
        });
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = ['上架', '下架'];
      return statusMap[status];
    },
    statusTagFilter: function statusTagFilter(status) {
      var tagMap = ['success', 'info'];
      return tagMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2b60ad20","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/exchange/list/list.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetExchangeList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"ID","clearable":""},model:{value:(_vm.listQuery.goodsId),callback:function ($$v) {_vm.$set(_vm.listQuery, "goodsId", $$v)},expression:"listQuery.goodsId"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"商品名","clearable":""},model:{value:(_vm.listQuery.goodsName),callback:function ($$v) {_vm.$set(_vm.listQuery, "goodsName", $$v)},expression:"listQuery.goodsName"}})],1),_vm._v(" "),_c('template',{slot:"excel"},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-download","loading":_vm.downloadLoading},on:{"click":_vm.excelExport}},[_vm._v("Excel")])],1)]),_vm._v(" "),_c('div',{staticStyle:{"display":"inline-block","float":"right"}},[_c('el-button',{on:{"click":_vm.onShelf}},[_vm._v("上架")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.offShelf}},[_vm._v("下架")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/exchange/addItems"}},[_c('el-tag',{staticStyle:{"line-height":"38px","height":"40px"}},[_vm._v("新增商品")])],1)],1)],2),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"width":"50px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-checkbox',{model:{value:(scope.row.isCheck),callback:function ($$v) {_vm.$set(scope.row, "isCheck", $$v)},expression:"scope.row.isCheck"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"商品ID","prop":"goodsId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"商品名称","prop":"goodsName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"品牌","prop":"brand"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"价格"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v("¥ "+_vm._s(scope.row.price * 6)+" / $ "+_vm._s(scope.row.price))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"更新时间","prop":"updateTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"编辑"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{attrs:{"to":("/exchange/" + (scope.row.goodsId))}},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit"}},[_vm._v("编辑")])],1)]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetExchangeList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var list_list = (esExports);
// CONCATENATED MODULE: ./src/components/exchange/list/list.vue
function injectStyle (ssrContext) {
  __webpack_require__("+gtA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  list,
  list_list,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var exchange_list_list = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Zcnn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-arrowleftcircle",
  "use": "icon-arrowleftcircle-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-arrowleftcircle\"><path fill=\"#f7f7f7\" d=\"M736 480 397.248 480 529.152 348.16C541.632 335.68 541.632 315.52 529.152 302.72 516.64 290.24 496.384 290.24 483.872 302.72L302.848 483.84C295.2 491.52 292.8 502.08 294.56 512 292.8 521.92 295.2 532.48 302.848 540.16L483.872 721.28C496.384 733.76 516.64 733.76 529.152 721.28 541.632 708.8 541.632 688.32 529.152 675.84L397.248 544 736 544C753.664 544 768 529.6 768 512 768 494.4 753.664 480 736 480L736 480ZM512 960C264.576 960 64 759.36 64 512 64 264.64 264.576 64 512 64 759.424 64 960 264.64 960 512 960 759.36 759.424 960 512 960L512 960ZM512 0C229.248 0 0 229.12 0 512 0 794.88 229.248 1024 512 1024 794.752 1024 1024 794.88 1024 512 1024 229.12 794.752 0 512 0L512 0Z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "a3rm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-tools",
  "use": "icon-tools-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-tools\"><path fill=\"#ffffff\" d=\"M834.8 782.9c7.3 4.7 10.7 11.8 10.1 21.5-0.5 9.6-4.9 17.8-13.3 24.6l-74.1 74.1c-6.8 6.8-14.3 10.1-22.6 10.1s-16.1-3.4-23.4-10.1L415.8 607.4c-38 14.6-76.7 17.9-116.2 10.1-41.1-8.3-77-27.8-107.7-58.5-21.3-21.3-37.4-45.9-48.4-73.7-10.9-27.8-16-56.2-15.2-85 0.8-28.9 7.7-56.3 20.7-82.3l143.6 140.4 97.5-97.5-140.4-140.5c26-12 53.6-18.3 82.7-19.1 29.1-0.8 57.2 3.8 84.3 13.7 28.1 10.9 52.8 27 74.1 48.4 30.7 30.7 50.2 66.2 58.5 106.5s4.9 79.4-10.1 117.4l295.6 295.6z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "aRGm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "azvS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "be/K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-yunyingguanli",
  "use": "icon-yunyingguanli-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-yunyingguanli\"><path fill=\"#ffffff\" d=\"M511.093 1000.818c-269.264 0-488.429-219.166-488.429-488.429 0-269.393 219.036-488.429 488.429-488.429 269.393 0 488.558 219.166 488.558 488.429s-219.166 488.429-488.558 488.429zM511.093 75.223c-240.914 0-437.037 195.993-437.037 437.037s195.993 437.037 437.037 437.037c241.043 0 437.165-196.123 437.165-437.037-0.13-240.914-196.123-437.037-437.165-437.037z\" /><path fill=\"#ffffff\" d=\"M511.093 409.343c-56.831 0-102.915 46.085-102.915 102.915s46.085 102.915 102.915 102.915 102.915-46.085 102.915-102.915-46.085-102.915-102.915-102.915zM511.093 550.19c-20.972 0-37.93-16.959-37.93-37.93s16.959-37.93 37.93-37.93c20.972 0 37.93 16.959 37.93 37.93-0.13 20.972-17.088 37.93-37.93 37.93z\" /><path fill=\"#ffffff\" d=\"M768.706 454.394h-50.876c-4.66-16.57-11.263-32.493-19.677-47.51l35.859-35.859c3.237-3.107 4.918-7.508 4.918-11.909 0-4.53-1.812-8.803-4.918-11.909l-57.867-57.867c-3.237-3.237-7.638-4.918-11.909-4.918-4.402 0-8.673 1.683-11.909 4.918l-35.859 35.859c-15.017-8.414-30.94-15.017-47.51-19.677v-50.876c0-9.191-7.638-16.829-16.829-16.829h-81.943c-9.191 0-16.829 7.638-16.829 16.829v50.876c-16.57 4.66-32.493 11.133-47.51 19.677l-35.988-35.859c-3.237-3.237-7.638-4.918-11.909-4.918s-8.673 1.683-11.909 4.918l-57.867 57.867c-6.473 6.603-6.473 17.218 0 23.82l35.859 35.859c-8.414 15.017-15.017 30.94-19.677 47.51h-50.876c-9.191 0-16.829 7.638-16.829 16.829v81.943c0 9.191 7.638 16.829 16.829 16.829h50.876c4.66 16.57 11.133 32.493 19.677 47.51l-35.859 35.859c-6.473 6.603-6.473 17.218 0 23.949l57.867 57.867c3.237 3.237 7.638 4.918 11.909 4.918s8.673-1.683 11.909-4.918l35.859-35.859c15.017 8.414 30.94 15.017 47.51 19.677v50.876c0 9.191 7.638 16.829 16.829 16.829h82.074c9.191 0 16.829-7.638 16.829-16.829v-50.746c16.57-4.66 32.493-11.133 47.51-19.677l35.859 35.859c3.237 3.237 7.638 4.918 11.909 4.918 4.402 0 8.673-1.683 11.909-4.918l57.867-57.867c3.237-3.107 4.918-7.508 4.918-11.909 0-4.53-1.812-8.803-4.918-11.909l-35.859-35.859c8.414-15.017 15.017-30.94 19.677-47.51h50.876c9.191 0 16.829-7.638 16.829-16.829v-81.943c0-9.451-7.638-17.088-16.829-17.088zM655.175 552.519c-3.237 11.651-7.767 22.914-13.593 33.14l-20.583 36.506-36.506 20.714c-10.485 5.825-21.619 10.485-33.14 13.593l-40.39 11.263-40.39-11.263c-11.651-3.237-22.914-7.767-33.14-13.593l-36.506-20.583-20.583-36.506c-5.825-10.227-10.356-21.36-13.593-33.14l-11.133-40.39 11.263-40.39c3.237-11.651 7.767-22.914 13.593-33.14l20.583-36.506 36.506-20.583c10.485-5.825 21.619-10.485 33.14-13.593l40.39-11.263 40.39 11.263c11.651 3.237 22.914 7.767 33.14 13.593l36.506 20.583 20.583 36.506c5.825 10.485 10.485 21.619 13.593 33.14l11.263 40.39-11.393 40.26z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "cB2y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cPWE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cYPX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "d1GE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/contentManagement.js
var contentManagement = __webpack_require__("1x8f");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/tab/coverPending.vue


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


/* harmony default export */ var coverPending = ({
  name: 'coverPending',
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      activeName: 'pending',
      list: null,
      total: 1,
      listQuery: { page: 1, type: this.type, userId: null }
    };
  },
  created: function created() {
    this.GetCoverList();
  },

  methods: {
    GetCoverList: function GetCoverList() {
      var _this = this;

      Object(contentManagement["a" /* getCoverList */])(this.listQuery).then(function (response) {
        _this.list = response.data.coverList;
        _this.total = response.data.total;
      });
    },
    review: function review(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = slicedToArray_default()(_ref, 2);

          var i = _ref2[0];
          var v = _ref2[1];

          if (v.userId === row.userId) {
            this.list[i].status = 1;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现修改为重新审核',
        type: 'info',
        duration: 2000
      });
    },
    pass: function pass(row) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(this.list.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref3 = _step2.value;

          var _ref4 = slicedToArray_default()(_ref3, 2);

          var i = _ref4[0];
          var v = _ref4[1];

          if (v.userId === row.userId) {
            this.list[i].status = 2;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现通过审核',
        type: 'info',
        duration: 2000
      });
    },
    noPass: function noPass(row) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(this.list.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _ref5 = _step3.value;

          var _ref6 = slicedToArray_default()(_ref5, 2);

          var i = _ref6[0];
          var v = _ref6[1];

          if (v.userId === row.userId) {
            this.list[i].status = 0;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现设为不通过',
        type: 'info',
        duration: 2000
      });
    },
    deleteCover: function deleteCover(row) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = get_iterator_default()(this.list.entries()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _ref7 = _step4.value;

          var _ref8 = slicedToArray_default()(_ref7, 2);

          var i = _ref8[0];
          var v = _ref8[1];

          if (v.userId === row.userId) {
            this.list.splice(i, 1);
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.$notify({
        title: 'Prompt',
        message: '成功将此条发现删除',
        type: 'info',
        duration: 2000
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.listQuery.type = this.type;
    }
  },
  filters: {
    statusFilter: function statusFilter(val) {
      var status = ['审核失败', '待审核', '通过'];
      return status[val];
    },
    statusTagFilter: function statusTagFilter(val) {
      var status = ['danger', 'primary', 'success'];
      return status[val];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d8e9c0c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/tab/coverPending.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetCoverList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"发布者ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":""}},[_c('el-table-column',{attrs:{"label":"序号","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"图片"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{attrs:{"src":scope.row.image,"alt":""}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"位置信息","prop":"position"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发布者ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"上传时间","prop":"uploadTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("statusTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"220px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 1)?[_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.noPass(scope.row)}}},[_vm._v("不通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning"},on:{"click":function($event){_vm.deleteCover(scope.row)}}},[_vm._v("删除")])]:[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.review(scope.row)}}},[_vm._v("重新审核")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning"},on:{"click":function($event){_vm.deleteCover(scope.row)}}},[_vm._v("删除")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetCoverList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var tab_coverPending = (esExports);
// CONCATENATED MODULE: ./src/views/tab/coverPending.vue
function injectStyle (ssrContext) {
  __webpack_require__("gR36")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  coverPending,
  tab_coverPending,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_tab_coverPending = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/contentManagement/discoverPending/discoverPending.vue
//
//
//
//
//
//
//
//
//


/* harmony default export */ var discoverPending = ({
  name: 'discoverPending',
  data: function data() {
    return {
      activeName: 'pending',
      coverPendMap: [{ name: 'pending', label: '待审核', type: 1 }, { name: 'failed', label: '审核失败', type: 0 }]
    };
  },

  components: { coverPending: views_tab_coverPending }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-71eb5a8a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/contentManagement/discoverPending/discoverPending.vue
var discoverPending_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.coverPendMap),function(item){return _c('el-tab-pane',{key:item.type,attrs:{"name":item.name,"label":item.label}},[(item.name === _vm.activeName)?_c('cover-pending',{attrs:{"type":item.type}}):_vm._e()],1)}))],1)}
var discoverPending_staticRenderFns = []
var discoverPending_esExports = { render: discoverPending_render, staticRenderFns: discoverPending_staticRenderFns }
/* harmony default export */ var discoverPending_discoverPending = (discoverPending_esExports);
// CONCATENATED MODULE: ./src/components/contentManagement/discoverPending/discoverPending.vue
function discoverPending_injectStyle (ssrContext) {
  __webpack_require__("kago")
}
var discoverPending_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var discoverPending___vue_template_functional__ = false
/* styles */
var discoverPending___vue_styles__ = discoverPending_injectStyle
/* scopeId */
var discoverPending___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var discoverPending___vue_module_identifier__ = null
var discoverPending_Component = discoverPending_normalizeComponent(
  discoverPending,
  discoverPending_discoverPending,
  discoverPending___vue_template_functional__,
  discoverPending___vue_styles__,
  discoverPending___vue_scopeId__,
  discoverPending___vue_module_identifier__
)

/* harmony default export */ var contentManagement_discoverPending_discoverPending = __webpack_exports__["default"] = (discoverPending_Component.exports);


/***/ }),

/***/ "dAjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/index.vue
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
//
//
//
//
//

/* harmony default export */ var components = ({
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8cdbe5b2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box"},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":8}},[_c('el-card',[_c('div',{staticClass:"grid-content"},[_c('div',{staticClass:"box-title"},[_c('span',{staticClass:"fr month"},[_vm._v("月")]),_vm._v(" "),_c('h5',[_vm._v("会员")])]),_vm._v(" "),_c('div',{staticClass:"box-content"},[_c('div',[_c('h2',[_vm._v("279")])]),_vm._v(" "),_c('div',[_c('h5',[_vm._v("总数")])])])])])],1),_vm._v(" "),_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":8}},[_c('el-card',[_c('div',{staticClass:"grid-content"},[_c('div',{staticClass:"box-title"},[_c('span',{staticClass:"fr month"},[_vm._v("月")]),_vm._v(" "),_c('h5',[_vm._v("用户")])]),_vm._v(" "),_c('div',{staticClass:"box-content"},[_c('div',[_c('h2',[_vm._v("279")])]),_vm._v(" "),_c('div',[_c('h5',[_vm._v("总数")])])])])])],1),_vm._v(" "),_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":8}},[_c('el-card',[_c('div',{staticClass:"grid-content"},[_c('div',{staticClass:"box-title"},[_c('span',{staticClass:"fr month"},[_vm._v("最近一个月")]),_vm._v(" "),_c('h5',[_vm._v("活跃用户")])]),_vm._v(" "),_c('div',{staticClass:"box-content"},[_c('div',[_c('h2',[_vm._v("279")])]),_vm._v(" "),_c('div',[_c('h5',[_vm._v("总数")])])])])])],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":12}},[_c('el-card',[_c('div',{staticClass:"grid-content"},[_c('div',{staticClass:"box-title"},[_c('router-link',{staticClass:"fr",attrs:{"to":"userManage/coachExamine"}},[_c('el-button',{attrs:{"icon":"el-icon-arrow-right","type":"primary"}})],1),_vm._v(" "),_c('h5',[_vm._v("证书审核")])],1),_vm._v(" "),_c('div',{staticClass:"box-content"},[_c('div',[_c('h2',[_vm._v("55")])]),_vm._v(" "),_c('div',[_c('h5',[_vm._v("需要审核的新证书")])])])])])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components = (esExports);
// CONCATENATED MODULE: ./src/components/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("9Ks3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components,
  selectortype_template_index_0_src_components,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dFmX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dLi+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/tinymce/tinymce.vue + 5 modules
var tinymce = __webpack_require__("Xx3T");

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/taskManage/children/editTask.vue
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




/* harmony default export */ var editTask = ({
  data: function data() {
    // let taskForm
    /* const validateTaskCircle = function (rule, value, cb) {
      if (!value) {
        cb(new Error('请选择任务周期'))
        return
      }
      if (value === '1' && ((taskForm.datetime && taskForm.datetime.length === 0) || taskForm.datetime === null)) { /!* 判断null是因为clearable的时候 taskForm.datetime不存在 *!/
        cb(new Error('请选择任务开始和结束时间'))
      }
    } */
    return {
      taskForm: {
        taskId: (Math.random() * 10000000).toFixed(0),
        taskName: '',
        taskDescription: '',
        top: 'yes',
        taskCircle: '',
        datetimeMerge: [],
        showRegion: '',
        detail: '',
        createTime: '',
        updateTime: '',
        status: 'effective',
        subTask: [],
        userNumberRecord: []
      },
      taskRules: {
        taskName: [{ required: true, trigger: 'blur', message: '请输入任务名称' }],
        taskDescription: [{ required: true, trigger: 'blur', message: '请对任务进行描述' }],
        taskCircle: [{ required: true, trigger: 'change', message: '请选择任务周期' }],
        showRegion: [{ required: true, trigger: 'change', message: '请选择显示地区' }],
        detail: [{ required: true, trigger: 'blur', message: '请输入详情' }]
      }
    };
  },
  created: function created() {
    this.editDetail();
  },

  methods: {
    editDetail: function editDetail() {
      var _this = this;

      if (this.$route.params.taskId) {
        Object(operationManage["e" /* editTask */])(this.$route.params.taskId).then(function (response) {
          _this.taskForm = response.data.filteredTask;
          _this.taskForm.updateTime = Object(utils["a" /* formatTime */])();
        });
      }
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.taskForm.validate(function (valid) {
        if (valid) {
          if (_this2.$route.params.taskId) {
            _this2.$notify({
              title: '修改成功',
              message: '修改主任务成功',
              type: 'success'
            });
          } else {
            _this2.taskForm.createTime = Object(utils["a" /* formatTime */])();
            Object(operationManage["b" /* addTask */])(_this2.taskForm).then(function () {
              if (_this2.taskForm.taskCircle === '1' && (_this2.taskForm.datetimeMerge === null || _this2.taskForm.datetimeMerge.length === 0)) {
                _this2.$message.warning('请选择任务开始和结束时间');
                return;
              }
              _this2.$notify({
                title: '新增成功',
                message: '新增主任务成功',
                type: 'success'
              });
            });
          }
        }
      });
    },
    resetForm: function resetForm() {
      this.taskForm = {
        taskId: (Math.random() * 10000000).toFixed(0),
        taskName: '',
        taskDescription: '',
        top: '0',
        taskCircle: '',
        datetimeMerge: [],
        showRegion: '',
        detail: '',
        createTime: '',
        updateTime: '',
        status: 'effective'
      };
      this.$refs.taskForm.clearValidate();
    }
  },
  components: { tinymce: tinymce["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d378be6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/taskManage/children/editTask.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit-main-task"},[_c('el-form',{ref:"taskForm",attrs:{"inline":"","label-position":"right","label-width":"120px","model":_vm.taskForm,"rules":_vm.taskRules}},[_c('el-form-item',{attrs:{"label":"任务名称","prop":"taskName"}},[_c('el-input',{model:{value:(_vm.taskForm.taskName),callback:function ($$v) {_vm.$set(_vm.taskForm, "taskName", $$v)},expression:"taskForm.taskName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"任务描述","prop":"taskDescription"}},[_c('el-input',{model:{value:(_vm.taskForm.taskDescription),callback:function ($$v) {_vm.$set(_vm.taskForm, "taskDescription", $$v)},expression:"taskForm.taskDescription"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否置顶","prop":"top"}},[_c('el-radio-group',{model:{value:(_vm.taskForm.top),callback:function ($$v) {_vm.$set(_vm.taskForm, "top", $$v)},expression:"taskForm.top"}},[_c('el-radio',{attrs:{"label":"yes"}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"no"}},[_vm._v("是")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"任务周期","prop":"taskCircle"}},[_c('el-radio-group',{model:{value:(_vm.taskForm.taskCircle),callback:function ($$v) {_vm.$set(_vm.taskForm, "taskCircle", $$v)},expression:"taskForm.taskCircle"}},[_c('el-radio',{attrs:{"label":"noLimit"}},[_vm._v("无时间限制")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"limit"}},[_vm._v("任务时间周期  "),_c('el-date-picker',{attrs:{"type":"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.taskForm.datetimeMerge),callback:function ($$v) {_vm.$set(_vm.taskForm, "datetimeMerge", $$v)},expression:"taskForm.datetimeMerge"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"列表图片"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","list-type":"picture-card"}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页广告位"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","list-type":"picture-card"}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"显示地区","prop":"showRegion"}},[_c('el-radio-group',{model:{value:(_vm.taskForm.showRegion),callback:function ($$v) {_vm.$set(_vm.taskForm, "showRegion", $$v)},expression:"taskForm.showRegion"}},[_c('el-radio',{attrs:{"label":"all"}},[_vm._v("全部")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"China"}},[_vm._v("中国")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"abroad"}},[_vm._v("海外")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详情","prop":"detail"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.taskForm.detail),callback:function ($$v) {_vm.$set(_vm.taskForm, "detail", $$v)},expression:"taskForm.detail"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{on:{"click":_vm.resetForm}},[_vm._v("重置")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var children_editTask = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/taskManage/children/editTask.vue
function injectStyle (ssrContext) {
  __webpack_require__("eHvO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  editTask,
  children_editTask,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var taskManage_children_editTask = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "eHvO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eZKH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gR36":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gnd+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gs9T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/questionFeedback/questionFeedback.vue

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



/* harmony default export */ var questionFeedback = ({
  name: 'questionFeedback',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1 },
      visible: false,
      loading: true,
      questionContent: {
        id: '',
        content: '',
        questionImage: ['http://img.sodive.com/newupload/20171220/1513736922599.jpg'], // 为了点击首次弹出出来可以计算图片size给的默认图片,与下面的this.visible = true 的作用相配合
        userId: '',
        nickName: '',
        email: '',
        answerContent: ''
      },
      index: 0 // 图片索引
    };
  },
  created: function created() {
    this.GetQuestionList();
    this.calculatePictureSize('pictureItem');
  },

  watch: {
    visible: function visible(value) {
      if (value) {
        this.calculatePictureSize('pictureItem');
      } else {
        var oPhotoSwipe = document.getElementsByClassName('photoSwipe')[0];
        oPhotoSwipe.style.display = 'none';
      }
    }
  },
  methods: {
    GetQuestionList: function GetQuestionList() {
      var _this = this;

      this.loading = true;
      this.visible = true; // el-dialog首次进入不会渲染body部分,点击第一次弹窗的时候图片无法缩小,所以在加载列表的时候先显示一次,加载完在关掉，进入该路由会有闪的画面,待优化
      Object(operationManage["h" /* getQuestionList */])(this.listQuery).then(function (response) {
        _this.list = response.data.questionList;
        _this.total = response.data.total;
        _this.loading = false;
        _this.visible = false;
      });
    },
    answerQuestion: function answerQuestion(row) {
      this.visible = true;
      this.questionContent.id = row.id;
      this.questionContent.content = row.question.content;
      this.questionContent.questionImage = row.question.images;
      this.questionContent.userId = row.userId;
      this.questionContent.nickName = row.nickName;
      this.questionContent.email = row.email;
      this.questionContent.answerContent = row.status === 1 ? row.answerContent : '';
    },
    reply: function reply() {
      if (!this.questionContent.answerContent) {
        this.$message.warning('请输入答复内容!');
        return;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.id === this.questionContent.id) {
            item.status = 1;
            item.answerContent = this.questionContent.answerContent;
            item.answerTime = Object(utils["a" /* formatTime */])();
            this.visible = false;
            this.$message.success('您已答复该用户!');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    },
    calculatePictureSize: function calculatePictureSize(ref) {
      var pictureItems = this.$refs[ref];
      var oImg = void 0;
      this.$nextTick(function () {
        if (pictureItems !== undefined) {
          var pictureItemWidth = pictureItems[0].offsetWidth; // 图片父级width
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = get_iterator_default()(pictureItems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var pictureItem = _step2.value;

              oImg = pictureItem.querySelector('img');
              var pictureWidth = pictureItem.querySelector('img').offsetWidth;
              var pictureHeight = pictureItem.querySelector('img').offsetHeight;
              if (pictureWidth >= pictureHeight) {
                oImg.style.height = pictureItemWidth * pictureHeight / pictureWidth + 'px';
                oImg.style.width = pictureItemWidth + 'px';
                oImg.style.marginTop = -(pictureItemWidth * pictureHeight / pictureWidth) / 2 + 'px';
                oImg.style.marginLeft = -pictureItemWidth / 2 + 'px';
              } else {
                oImg.style.width = pictureItemWidth * pictureWidth / pictureHeight + 'px';
                oImg.style.height = pictureItemWidth + 'px';
                oImg.style.marginTop = -pictureItemWidth / 2 + 'px';
                oImg.style.marginLeft = -(pictureItemWidth * pictureWidth / pictureHeight) / 2 + 'px';
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      });
    },
    photoSwipe: function photoSwipe(e) {
      var oPhotoSwipe = document.getElementsByClassName('photoSwipe')[0];
      oPhotoSwipe.style.display = 'block';
      this.calculatePictureSize('pictureItem1');
      this.changePicture(e);
    },
    changePicture: function changePicture(e) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = get_iterator_default()(this.questionContent.questionImage), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var image = _step3.value;

          if (image === e.target.currentSrc) {
            this.index = this.questionContent.questionImage.indexOf(image);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    },
    prev: function prev() {
      this.index--;
      if (this.index < 0) {
        this.$message.info('已经是第一张了，别再翻了!');
        this.index = 0;
      }
    },
    next: function next() {
      this.index++;
      if (this.index > this.questionContent.questionImage.length - 1) {
        this.$message.info('已经是最后一张了，到头了!');
        this.index = this.questionContent.questionImage.length - 1;
      }
    },
    closePhotoSwipe: function closePhotoSwipe() {
      var oPhotoSwipe = document.getElementsByClassName('photoSwipe')[0];
      oPhotoSwipe.style.display = 'none';
    }
  },
  computed: {
    currentIndex: function currentIndex() {
      return this.index;
    }
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = ['未答复', '已答复'];
      return statusMap[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4dabd5cb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/questionFeedback/questionFeedback.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetQuestionList},on:{"sendListQuery":_vm.acceptQuery}}),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{staticStyle:{"word-break":"keep-all"},attrs:{"label":"用户问题","align":"left","min-width":"200px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text"},nativeOn:{"click":function($event){_vm.answerQuestion(scope.row)}}},[_vm._v(_vm._s(scope.row.question.content))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提问人ID","prop":"userId","width":"120px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"邮箱","prop":"email"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","prop":"nickName","width":"120px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime","width":"190px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"答复时间","width":"190px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 1)?_c('span',[_vm._v(_vm._s(scope.row.answerTime))]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("statusFilter")(scope.row.status)))])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetQuestionList}})],1),_vm._v(" "),_c('el-dialog',{staticClass:"question-container",attrs:{"title":"问题内容","visible":_vm.visible,"align":"center","center":""},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"question-content"},[_c('p',[_c('span',[_vm._v("提问内容:   ")]),_vm._v(_vm._s(_vm.questionContent.content)+"(图片点击大图浏览)")]),_vm._v(" "),_c('div',{staticClass:"question-picture"},_vm._l((_vm.questionContent.questionImage),function(item,index){return _c('div',{key:index,ref:"pictureItem",refInFor:true},[_c('img',{attrs:{"src":item},on:{"click":_vm.photoSwipe}})])})),_vm._v(" "),_c('div',{staticClass:"user-profile"},[_c('span',[_vm._v("提问人ID:   "+_vm._s(_vm.questionContent.userId))]),_vm._v(" "),_c('span',[_vm._v("昵称:   "+_vm._s(_vm.questionContent.nickName))]),_vm._v(" "),_c('span',[_vm._v("邮箱:   "+_vm._s(_vm.questionContent.email))])])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-input',{staticClass:"fl",attrs:{"type":"textarea","placeholder":"请输入回复内容"},model:{value:(_vm.questionContent.answerContent),callback:function ($$v) {_vm.$set(_vm.questionContent, "answerContent", $$v)},expression:"questionContent.answerContent"}}),_vm._v(" "),_c('div',{staticClass:"fl"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.reply}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){ _vm.visible = false }}},[_vm._v("取消")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"photoSwipe"},[_c('div',{staticClass:"photoSwipe-container"},[_c('div',{staticClass:"picture-container"},_vm._l((_vm.questionContent.questionImage),function(item,index){return _c('div',{key:index,ref:"pictureItem1",refInFor:true,class:{'active': _vm.currentIndex === index}},[_c('img',{attrs:{"src":item}})])})),_vm._v(" "),_c('div',{staticClass:"control"},[_c('span',{staticClass:"left-btn btn",on:{"click":_vm.prev}},[_c('svg-icon',{attrs:{"iconClass":'arrowleftcircle'}})],1),_vm._v(" "),_c('span',{staticClass:"right-btn btn",on:{"click":_vm.next}},[_c('svg-icon',{attrs:{"iconClass":'arrowrightcircle'}})],1)])]),_vm._v(" "),_c('span',{staticClass:"close",on:{"click":_vm.closePhotoSwipe}},[_c('svg-icon',{attrs:{"iconClass":'close'}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var questionFeedback_questionFeedback = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/questionFeedback/questionFeedback.vue
function injectStyle (ssrContext) {
  __webpack_require__("CcMF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  questionFeedback,
  questionFeedback_questionFeedback,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_questionFeedback_questionFeedback = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "i6EG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kago":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lZmI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/shareStatistics/children/detail.vue
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


var channelMap = {
  facebook: 'facebook',
  twitter: 'twitter',
  wechatMoments: '微信朋友圈',
  wechat: '微信'
};
/* harmony default export */ var detail = ({
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, shareChannel: null, coachId: null },
      dateRange: [],
      loading: true,
      shareChannelMap: [{ key: 'facebook', channel: 'facebook' }, { key: 'twitter', channel: 'twitter' }, { key: 'wechatMoments', channel: '微信朋友圈' }, { key: 'wechat', channel: '微信' }],
      downloadLoading: false,
      tableList: ''
    };
  },
  created: function created() {
    this.GetDetailList();
  },

  methods: {
    GetDetailList: function GetDetailList() {
      var _this = this;

      this.loading = true;
      Object(operationManage["g" /* getDetailList */])(this.listQuery, this.dateRange).then(function (response) {
        _this.list = response.data.detailList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    excelExport: function excelExport() {
      var _this2 = this;

      this.downloadLoading = false;
      __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "zWO4")).then(function (excel) {
        var tHeader = ['分享人ID', '昵称', '分享类型', '累计分享次数', '累计浏览次数', '分享渠道'];
        var filterVal = ['coachId', 'nickName', 'shareType', 'shareNum', 'browseNum', 'shareChannel'];
        var data = _this2.formatJson(filterVal, _this2.list);
        if (_this2.tableList === '') _this2.tableList = 'share-list';
        excel.export_json_to_excel(tHeader, data, _this2.tableList);
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, dataJson) {
      return dataJson.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'shareChannel') {
            return channelMap[v[j]];
          } else {
            return v[j];
          }
        });
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
    }
  },
  filters: {
    channelFilter: function channelFilter(channel) {
      return channelMap[channel];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66142add","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/shareStatistics/children/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetDetailList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"分享渠道","clearable":""},model:{value:(_vm.listQuery.shareChannel),callback:function ($$v) {_vm.$set(_vm.listQuery, "shareChannel", $$v)},expression:"listQuery.shareChannel"}},_vm._l((_vm.shareChannelMap),function(item){return _c('el-option',{key:item.key,attrs:{"value":item.key,"label":item.channel}})}))],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-input',{staticStyle:{"width":"120px"},attrs:{"placeholder":"分享人ID","clearable":""},model:{value:(_vm.listQuery.coachId),callback:function ($$v) {_vm.$set(_vm.listQuery, "coachId", $$v)},expression:"listQuery.coachId"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.dateRange),callback:function ($$v) {_vm.dateRange=$$v},expression:"dateRange"}})],1),_vm._v(" "),_c('template',{slot:"excel"},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"输入excel名字,默认share-list","clearable":""},model:{value:(_vm.tableList),callback:function ($$v) {_vm.tableList=$$v},expression:"tableList"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","loading":_vm.downloadLoading,"icon":"el-icon-download"},on:{"click":_vm.excelExport}},[_vm._v("Excel")])],1)])],2),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"分享人ID","prop":"coachId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"分享类型","prop":"shareType"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"累计分享次数","prop":"shareNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"累计浏览次数","prop":"browseNum"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"分享渠道"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("channelFilter")(scope.row.shareChannel)))])]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetDetailList}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var children_detail = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/shareStatistics/children/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("C4Hi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  detail,
  children_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var shareStatistics_children_detail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mTzq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/views/tab/certificatePending.vue + 2 modules
var certificatePending = __webpack_require__("CJAC");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/userExamine/userExamine.vue
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


/* harmony default export */ var userExamine = ({
  name: 'coachExamine',
  data: function data() {
    return {
      activeName: 'pending',
      tabOptions: [{ type: 0, name: 'pending', label: '待审核证件' }, { type: 1, name: 'pended', label: '已审核证件' }, { type: 2, name: 'failed', label: '审核失败' }]
    };
  },

  components: { certificatePend: certificatePending["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0d38e91f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/userExamine/userExamine.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.tabOptions),function(item){return _c('el-tab-pane',{key:item.type,attrs:{"label":item.label,"name":item.name}},[_c('keep-alive',[(item.name === _vm.activeName)?_c('certificate-pend',{attrs:{"type":item.type}}):_vm._e()],1)],1)}))]],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var userExamine_userExamine = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/userExamine/userExamine.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  userExamine,
  userExamine_userExamine,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_userExamine_userExamine = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mjed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/contentManagement/discoverAdd/discoverAdd.vue
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

/* harmony default export */ var discoverAdd = ({
  name: 'discoverAdd',
  data: function data() {
    return {
      country: '',
      countryMap: [{ key: 'cn', name: '中国' }, { key: 'us', name: '美国' }, { key: 'nsl', name: '新西兰' }],
      coverForm: {
        userId: '',
        city: '',
        site: ''
      },
      coverRules: {
        userId: [{ required: true, trigger: 'blur', message: '发布者ID不能为空' }],
        city: [{ required: true, trigger: 'blur', message: '城市不能为空' }],
        site: [{ required: true, trigger: 'blur', message: '潜点不能为空' }]
      },
      imageSuccess: false
    };
  },

  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.coverForm.validate(function (valid) {
        if (valid && _this.imageSuccess) {
          _this.$notify({
            title: '发布成功',
            message: '发布成功',
            type: 'success'
          });
        } else {
          _this.$message.warning('请等待图片上传成功');
        }
      });
    },
    resetForm: function resetForm() {
      this.$refs.coverForm.resetFields();
    },
    beforeUpload: function beforeUpload(file) {
      var isLimitSize = file.size / 1024 / 1024 > 2;
      this.imageSuccess = false;
      if (isLimitSize) {
        this.$message.error('您上传的图片超过2M,请选择小于2M的图片进行上传');
      }
    },
    handleSuccess: function handleSuccess() {
      this.imageSuccess = true;
    },
    handleRemove: function handleRemove() {
      this.imageSuccess = false;
    },
    handleExceed: function handleExceed(files) {
      this.$message.warning('限上传1张图片');
    },
    handleProgress: function handleProgress(event, file, fileList) {
      console.log(event);
      console.log(file);
      console.log(fileList);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fde65cb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/contentManagement/discoverAdd/discoverAdd.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"coverForm",attrs:{"inline":"","model":_vm.coverForm,"rules":_vm.coverRules,"label-position":'right'}},[_c('el-form-item',{attrs:{"label":"发布者ID","prop":"userId"}},[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.coverForm.userId),callback:function ($$v) {_vm.$set(_vm.coverForm, "userId", $$v)},expression:"coverForm.userId"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block"},attrs:{"label":"上传图片"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","multiple":false,"list-type":"picture-card","limit":1,"before-upload":_vm.beforeUpload,"on-exceed":_vm.handleExceed,"on-success":_vm.handleSuccess,"on-progress":_vm.handleProgress,"on-remove":_vm.handleRemove}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("图片小超过2M")])])],1),_vm._v(" "),_c('el-form-item',{staticClass:"imageInfo",attrs:{"label":"图片位置信息","required":""}},[_c('el-select',{attrs:{"clearable":""},model:{value:(_vm.country),callback:function ($$v) {_vm.country=$$v},expression:"country"}},_vm._l((_vm.countryMap),function(item){return _c('el-option',{key:item.key,attrs:{"label":item.name,"value":item.key}})})),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"city"}},[_c('el-input',{attrs:{"placeholder":"城市","clearable":""},model:{value:(_vm.coverForm.city),callback:function ($$v) {_vm.$set(_vm.coverForm, "city", $$v)},expression:"coverForm.city"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"site"}},[_c('el-input',{attrs:{"placeholder":"潜点","clearable":""},model:{value:(_vm.coverForm.site),callback:function ($$v) {_vm.$set(_vm.coverForm, "site", $$v)},expression:"coverForm.site"}})],1)],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block"},attrs:{"label":"审核状态"}},[_c('h3',[_vm._v("通过")])]),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"block","width":"400px","text-align":"center"}},[_c('el-button',{on:{"click":_vm.resetForm}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("发布")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var discoverAdd_discoverAdd = (esExports);
// CONCATENATED MODULE: ./src/components/contentManagement/discoverAdd/discoverAdd.vue
function injectStyle (ssrContext) {
  __webpack_require__("sot1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  discoverAdd,
  discoverAdd_discoverAdd,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var contentManagement_discoverAdd_discoverAdd = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ms7A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAgentList;
/* harmony export (immutable) */ __webpack_exports__["a"] = addAgent;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCoachList;
/* harmony export (immutable) */ __webpack_exports__["f"] = getUserList;
/* harmony export (immutable) */ __webpack_exports__["c"] = getCoachCertificateList;
/* harmony export (immutable) */ __webpack_exports__["e"] = getPayAccountList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojuntong on 2017/12/25.
 */


function getAgentList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/agentList',
    method: 'get',
    params: listQuery
  });
}

function addAgent(agentId, countryName, email) {
  var data = {
    agentId: agentId,
    countryName: countryName,
    email: email
  };
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/addAgent',
    method: 'get',
    data: data
  });
}

function getCoachList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/coachList',
    method: 'get',
    params: listQuery
  });
}

function getUserList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/userList',
    method: 'get',
    params: listQuery
  });
}

function getCoachCertificateList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/coachCertificateList',
    method: 'get',
    params: listQuery
  });
}

function getPayAccountList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/userManage/payAccountList',
    method: 'get',
    params: listQuery
  });
}

/***/ }),

/***/ "o+H4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/duihuanquan/duihuanquan.vue
//
//
//

/* harmony default export */ var duihuanquan = ({
  name: 'duihuanquan',
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-58f19cbd","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/duihuanquan/duihuanquan.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("duihuanquan")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var duihuanquan_duihuanquan = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/duihuanquan/duihuanquan.vue
function injectStyle (ssrContext) {
  __webpack_require__("E00v")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  duihuanquan,
  duihuanquan_duihuanquan,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var operationManagement_duihuanquan_duihuanquan = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qHma":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/taskManage/children/taskManage.vue


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



var taskStatusMap = [{ status: 'effective', label: '启用中' }, { status: 'ineffective', label: '停用中' }];
var taskStatusObj = taskStatusMap.reduce(function (obj, item) {
  obj[item.status] = item.label;
  return obj;
}, {});
/* harmony default export */ var taskManage = ({
  name: 'taskManage',
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1 },
      loading: true,
      visible: false,
      visible1: false,
      isEdit: false,
      push: '',
      taskForm: {
        taskName: '',
        taskDescription: '',
        isAble: '',
        subTaskId: null,
        taskId: null
      },
      taskRules: {
        taskName: [{ required: true, trigger: 'blur', message: '请输入子任务名称' }],
        taskDescription: [{ required: true, trigger: 'blur', message: '请对子任务进行描述' }],
        isAble: [{ required: true, trigger: 'blur', message: '请选择是否启用' }]
      }
    };
  },
  created: function created() {
    this.GetTaskManage();
  },

  methods: {
    GetTaskManage: function GetTaskManage() {
      var _this = this;

      this.loading = true;
      Object(operationManage["n" /* taskManage */])(this.listQuery).then(function (response) {
        _this.list = response.data.taskManage;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    changeSubTaskStatus: function changeSubTaskStatus(row) {
      if (row.status === 'effective') {
        row.status = 'ineffective';
        row.subTask.forEach(function (item) {
          item.subStatus = 'ineffective';
        });
      } else {
        row.status = 'effective';
        row.subTask.forEach(function (item) {
          item.subStatus = 'effective';
        });
      }
    },
    pushInfo: function pushInfo() {
      if (this.push === '') {
        this.$message.warning('请选择推送对象');
      } else {
        this.$message.success('推送成功');
        this.visible1 = false;
      }
    },
    editTask: function editTask(item) {
      this.visible = true;
      this.isEdit = true;
      this.taskForm.taskName = item.subTaskName;
      this.taskForm.taskDescription = item.taskDescription;
      this.taskForm.isAble = item.subStatus;
      this.taskForm.subTaskId = item.subTaskId;
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.taskForm.validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = get_iterator_default()(_this2.list.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = slicedToArray_default()(_ref, 2);

                var i = _ref2[0];
                var item = _ref2[1];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = get_iterator_default()(item.subTask.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _ref3 = _step2.value;

                    var _ref4 = slicedToArray_default()(_ref3, 2);

                    var j = _ref4[0];
                    var v = _ref4[1];

                    if (v.subTaskId === _this2.taskForm.subTaskId) {
                      _this2.list[i].updateTime = Object(utils["a" /* formatTime */])();
                      _this2.list[i].subTask[j].subTaskName = _this2.taskForm.taskName;
                      _this2.list[i].subTask[j].taskDescription = _this2.taskForm.taskDescription;
                      _this2.list[i].subTask[j].subStatus = _this2.taskForm.isAble;
                      _this2.$notify({
                        title: '编辑成功',
                        message: '成功修改该子任务状态',
                        type: 'success'
                      });
                      break;
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = get_iterator_default()(_this2.list.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _ref5 = _step3.value;

                var _ref6 = slicedToArray_default()(_ref5, 2);

                var _i = _ref6[0];
                var _item = _ref6[1];

                if (_item.taskId === _this2.taskForm.taskId) {
                  _this2.list[_i].updateTime = Object(utils["a" /* formatTime */])();
                  _this2.list[_i].subTask.push({
                    subTaskName: _this2.taskForm.taskName,
                    taskDescription: _this2.taskForm.taskDescription,
                    subStatus: _this2.taskForm.isAble,
                    subTaskId: (Math.random() * 100000).toFixed(0)
                  });
                  _this2.$notify({
                    title: '创建成功',
                    message: '成功创建该子任务状态',
                    type: 'success'
                  });
                  break;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
          _this2.visible = false;
        }
      });
    },
    resetForm: function resetForm() {
      this.taskForm = {
        taskName: '',
        taskDescription: '',
        isAble: '',
        taskId: null
      };
    },
    addTask: function addTask(row) {
      var _this3 = this;

      this.resetForm();
      this.$nextTick(function () {
        _this3.$refs.taskForm.clearValidate();
      });
      this.taskForm.taskId = row.taskId; // 获取要修改的主任务的ID
      this.isEdit = false;
      this.visible = true;
    }
  },
  filters: {
    regionFilter: function regionFilter(region) {
      var regionObj = { 'all': '全部', 'China': '中国', 'abroad': '海外' };
      return regionObj[region];
    },
    mainTaskFilter: function mainTaskFilter(status) {
      var statusMap = { 'ineffective': '失效', 'effective': '正常' };
      return statusMap[status];
    },
    mainTaskTagFilter: function mainTaskTagFilter(status) {
      var statusMap = { 'ineffective': 'danger', 'effective': 'success' };
      return statusMap[status];
    },
    editMainTaskStatus: function editMainTaskStatus(status) {
      var statusMap = { 'ineffective': '启用主任务', 'effective': '停用主任务' };
      return statusMap[status];
    },
    taskStatusFilter: function taskStatusFilter(status) {
      return taskStatusObj[status];
    },
    taskTagFilter: function taskTagFilter(status) {
      var tagStatusObj = {
        'effective': 'success',
        'ineffective': 'danger'
      };
      return tagStatusObj[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8eb9b31e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/taskManage/children/taskManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"task-manage-container"},[_c('el-header',[_c('div',{staticClass:"filter-container"},[_c('div',{staticClass:"filter-item",staticStyle:{"line-height":"60px"}},[_vm._v("\n        备注：子任务状态由主任务状态决定，子任务可单独设置状态是否启用\n      ")]),_vm._v(" "),_c('div',{staticClass:"filter-item fr"},[_c('router-link',{attrs:{"to":"/operationManagement/taskManage/editTask"}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("新增主任务"),_c('i',{staticClass:"el-icon-circle-plus"})])],1)],1)])]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"border":"","element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"label":"任务名称","align":"left"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('router-link',{attrs:{"to":("userNumberRecord/" + (scope.row.taskId))}},[_vm._v(_vm._s(scope.row.taskName))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"创建时间","prop":"createTime","width":"170px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"更新时间","prop":"updateTime","width":"170px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"显示区域","width":"120px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("regionFilter")(scope.row.showRegion)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"子任务","width":"180px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-dropdown',{attrs:{"split-button":"","type":"primary"}},[_vm._v("\n            子任务列表\n            "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},_vm._l((scope.row.subTask),function(item){return _c('el-dropdown-item',{key:item.subTaskId},[_c('span',{staticClass:"subTaskName",on:{"click":function($event){_vm.editTask(item)}}},[_vm._v(_vm._s(item.subTaskName))]),_vm._v(" "),_c('el-tag',{attrs:{"type":_vm._f("mainTaskTagFilter")(item.subStatus)}},[_vm._v(_vm._s(_vm._f("taskStatusFilter")(item.subStatus)))])],1)}))],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"主任务状态","width":"100px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("mainTaskTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("mainTaskFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"130px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-dropdown',{attrs:{"type":"primary"}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("\n              操作"),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',[_c('el-button',{attrs:{"type":_vm._f("mainTaskTagFilter")(scope.row.status)},on:{"click":function($event){_vm.changeSubTaskStatus(scope.row)}}},[_vm._v(_vm._s(_vm._f("editMainTaskStatus")(scope.row.status)))])],1),_vm._v(" "),_c('el-dropdown-item',[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.visible1 = true}}},[_vm._v("推送消息")])],1),_vm._v(" "),_c('el-dropdown-item',[_c('router-link',{attrs:{"to":("/operationManagement/taskManage/editTask/" + (scope.row.taskId))}},[_c('el-button',{attrs:{"type":"text"}},[_vm._v("编辑主任务")])],1)],1),_vm._v(" "),_c('el-dropdown-item',[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.addTask(scope.row)}}},[_vm._v("增加子任务")])],1)],1)],1)]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetTaskManage}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"推送消息","visible":_vm.visible1},on:{"update:visible":function($event){_vm.visible1=$event}}},[_c('el-radio-group',{model:{value:(_vm.push),callback:function ($$v) {_vm.push=$$v},expression:"push"}},[_c('el-radio',{attrs:{"label":"all"}},[_vm._v("全部")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"China"}},[_vm._v("中国")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"abroad"}},[_vm._v("海外")])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible1 = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.pushInfo}},[_vm._v("确定")])],1)],1),_vm._v(" "),_c('el-dialog',{staticClass:"task-container",attrs:{"title":"编辑/新增子任务","visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"taskForm",attrs:{"model":_vm.taskForm,"rules":_vm.taskRules}},[_c('el-form-item',{attrs:{"label":"任务名称","prop":"taskName"}},[_c('el-input',{model:{value:(_vm.taskForm.taskName),callback:function ($$v) {_vm.$set(_vm.taskForm, "taskName", $$v)},expression:"taskForm.taskName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"任务描述","prop":"taskDescription"}},[_c('el-input',{model:{value:(_vm.taskForm.taskDescription),callback:function ($$v) {_vm.$set(_vm.taskForm, "taskDescription", $$v)},expression:"taskForm.taskDescription"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否启用","prop":"isAble"}},[_c('el-radio-group',{model:{value:(_vm.taskForm.isAble),callback:function ($$v) {_vm.$set(_vm.taskForm, "isAble", $$v)},expression:"taskForm.isAble"}},[_c('el-radio',{attrs:{"label":"effective"}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"ineffective"}},[_vm._v("不启用")])],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var children_taskManage = (esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/taskManage/children/taskManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("5sov")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8eb9b31e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  taskManage,
  children_taskManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var taskManage_children_taskManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qwCj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "so1m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/operationManage.js
var operationManage = __webpack_require__("1uAe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/tab/taskPend.vue

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


var taskStatusMap = [{ status: 'pending', label: '待审核' }, { status: 'pended', label: '审核通过' }, { status: 'failed', label: '审核失败' }];
var taskStatusObj = taskStatusMap.reduce(function (obj, item) {
  obj[item.status] = item.label;
  return obj;
}, {});
/* harmony default export */ var taskPend = ({
  props: {
    type: {
      type: String,
      required: true,
      default: 'pending'
    }
  },
  data: function data() {
    return {
      list: null,
      total: 1,
      listQuery: { page: 1, type: this.type, userId: null },
      loading: true,
      visible: false,
      selectedUserId: '',
      reason: '',
      visibleDetail: false,
      detail: {
        nickName: '',
        userId: undefined,
        submitTime: '',
        taskContent: null
      }
    };
  },
  created: function created() {
    this.GetTaskList();
  },

  methods: {
    GetTaskList: function GetTaskList() {
      var _this = this;

      this.loading = true;
      Object(operationManage["m" /* getTaskList */])(this.listQuery).then(function (response) {
        _this.list = response.data.taskList.map(function (item) {
          _this.$set(item, 'isCheck', false);
          return item;
        });
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    pass: function pass(row) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.userId === row.userId) {
            var index = this.list.indexOf(i);
            this.list[index]['status'] = 'pended';
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$notify({
        type: 'success',
        title: '审核通过',
        message: '已将该用户所做任务为通过',
        duration: 2000
      });
    },
    noPass: function noPass(row) {
      this.visible = true;
      this.selectedUserId = row.userId;
    },
    sureNoPass: function sureNoPass() {
      if (this.reason === '') {
        this.$message({
          message: '请输入不通过理由',
          type: 'warning'
        });
        return false;
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(this.list), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var i = _step2.value;

          if (i.userId === this.selectedUserId) {
            var index = this.list.indexOf(i);
            this.list[index]['status'] = 'failed';
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.visible = false;
      this.reason = '';
      this.$notify({
        type: 'success',
        title: '审核不通过',
        message: '已将该用户任务标记为不通过',
        duration: 2000
      });
    },
    checkDetail: function checkDetail(row) {
      this.visibleDetail = true;
      this.detail = {
        nickName: row.nickName,
        userId: row.userId,
        submitTime: row.submitTime,
        taskContent: row.taskContent
      };
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.listQuery.type = this.type;
    }
  },
  filters: {
    taskStatusFilter: function taskStatusFilter(status) {
      return taskStatusObj[status];
    },
    taskTagFilter: function taskTagFilter(status) {
      var tagStatusObj = {
        'pending': 'primary',
        'pended': 'success',
        'failed': 'danger'
      };
      return tagStatusObj[status];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ed33c11","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/tab/taskPend.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('certificate-filter',{attrs:{"GetList":_vm.GetTaskList},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-input',{attrs:{"placeholder":"用户ID","clearable":""},model:{value:(_vm.listQuery.userId),callback:function ($$v) {_vm.$set(_vm.listQuery, "userId", $$v)},expression:"listQuery.userId"}})],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{"data":_vm.list,"element-loading-text":"小主,我需要时间...","border":""}},[_c('el-table-column',{attrs:{"label":"任务名称","prop":"taskName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户ID","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提交时间","prop":"submitTime"}}),_vm._v(" "),(_vm.type === 'failed')?_c('el-table-column',{attrs:{"label":"拒绝理由","min-width":"240","align":"left"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.refuseReason))])]}}])}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":_vm._f("taskTagFilter")(scope.row.status)}},[_vm._v(_vm._s(_vm._f("taskStatusFilter")(scope.row.status)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"220px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 'pending')?[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":function($event){_vm.noPass(scope.row)}}},[_vm._v("不通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.checkDetail(scope.row)}}},[_vm._v("查看")])]:(scope.row.status === 'pended')?[_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.checkDetail(scope.row)}}},[_vm._v("查看")])]:[_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){_vm.pass(scope.row)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini","icon":"el-icon-picture"},on:{"click":function($event){_vm.checkDetail(scope.row)}}},[_vm._v("查看")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"total":_vm.total,"listQuery":_vm.listQuery,"GetList":_vm.GetTaskList}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"将此用户任务标记为不通过","visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',[_c('el-input',{attrs:{"placeholder":"请输入不通过理由"},model:{value:(_vm.reason),callback:function ($$v) {_vm.reason=$$v},expression:"reason"}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.sureNoPass()}}},[_vm._v("确定")])],1)]),_vm._v(" "),_c('el-dialog',{staticClass:"taskDetail",attrs:{"title":"查看任务详情","align":"center","visible":_vm.visibleDetail},on:{"update:visible":function($event){_vm.visibleDetail=$event}}},[_c('div',{staticClass:"subInfo"},[_c('p',[_c('span',[_vm._v("用户ID：")]),_c('span',[_vm._v(_vm._s(_vm.detail.userId))])]),_vm._v(" "),_c('p',[_c('span',[_vm._v("用户昵称：")]),_c('span',[_vm._v(_vm._s(_vm.detail.nickName))])]),_vm._v(" "),_c('p',[_c('span',[_vm._v("提交时间：")]),_c('span',[_vm._v(_vm._s(_vm.detail.submitTime))])])]),_vm._v(" "),_c('div',{staticClass:"task"},[_c('ul',_vm._l((_vm.detail.taskContent),function(item,index){return _c('li',[_c('strong',[_vm._v("任务"+_vm._s(index + 1))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item))])])}))])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var tab_taskPend = (esExports);
// CONCATENATED MODULE: ./src/views/tab/taskPend.vue
function injectStyle (ssrContext) {
  __webpack_require__("qwCj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  taskPend,
  tab_taskPend,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_tab_taskPend = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/operationManagement/taskManage/children/taskPending.vue
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


/* harmony default export */ var taskPending = ({
  name: 'taskPending',
  data: function data() {
    return {
      activeName: 'pending',
      taskStatusMap: [{ status: 'pending', label: '待审核' }, { status: 'pended', label: '审核通过' }, { status: 'failed', label: '审核失败' }]
    };
  },

  components: { taskPend: views_tab_taskPend }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b26e26da","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/operationManagement/taskManage/children/taskPending.vue
var taskPending_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.taskStatusMap),function(item){return _c('el-tab-pane',{key:item.status,attrs:{"label":item.label,"name":item.status}},[_c('keep-alive',[(_vm.activeName === item.status)?_c('task-pend',{attrs:{"type":item.status}}):_vm._e()],1)],1)}))],1)}
var taskPending_staticRenderFns = []
var taskPending_esExports = { render: taskPending_render, staticRenderFns: taskPending_staticRenderFns }
/* harmony default export */ var children_taskPending = (taskPending_esExports);
// CONCATENATED MODULE: ./src/components/operationManagement/taskManage/children/taskPending.vue
function taskPending_injectStyle (ssrContext) {
  __webpack_require__("zhH9")
}
var taskPending_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var taskPending___vue_template_functional__ = false
/* styles */
var taskPending___vue_styles__ = taskPending_injectStyle
/* scopeId */
var taskPending___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var taskPending___vue_module_identifier__ = null
var taskPending_Component = taskPending_normalizeComponent(
  taskPending,
  children_taskPending,
  taskPending___vue_template_functional__,
  taskPending___vue_styles__,
  taskPending___vue_scopeId__,
  taskPending___vue_module_identifier__
)

/* harmony default export */ var taskManage_children_taskPending = __webpack_exports__["default"] = (taskPending_Component.exports);


/***/ }),

/***/ "sot1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "toIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-close",
  "use": "icon-close-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-close\"><path fill=\"#f7f7f7\" d=\"M1024 0H0c0 564.906667 459.093333 1024 1024 1024V0z m-42.666667 513.706667l-129.706666 128L682.666667 469.333333l-172.373334 168.96-126.293333-128L556.373333 341.333333 387.413333 168.96l129.706667-128 168.96 174.08 168.96-165.546667 126.293333 128-168.96 165.546667 168.96 170.666667z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v28o":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v2zV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vLgD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("IcnI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_auth__ = __webpack_require__("TIfe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui__);

/**
 * Created by zhaojuntong on 2017/12/19.
 */





var service = __WEBPACK_IMPORTED_MODULE_1_axios___default.a.create({
  baseURL: http://mockjs.com/dist/mock, // api的base_url
  timeout: 5000 // 请求超时时间
});

// request拦截请求
service.interceptors.request.use(function (config) {
  if (__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.token) {
    config.headers['X-Token'] = Object(__WEBPACK_IMPORTED_MODULE_3_utils_auth__["a" /* getToken */])(); // 请求携带token X-Token为自定义的key
  }
  return config;
}, function (error) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

// response 拦截
service.interceptors.response.use(function (response) {
  var res = response.data;
  if (res.code !== 2) {
    // 不为2为异常状态码
    // 0:token 过期;  1:token(用户名) 不合法
    var promptMap = ['你已被登出,令牌失效', '你已被登出,用户名错误'];

    __WEBPACK_IMPORTED_MODULE_4_element_ui__["MessageBox"].confirm(promptMap[res.code], {
      confirmButtonText: '重新登录',
      // cancelButtonText: '取消',
      type: 'warning'
    }).then(function () {
      __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch('Logout').then(function () {
        location.reload(); // 重新实例化vue-router对象,避免bug
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve('error');
  } else {
    return response;
  }
}, function (error) {
  Object(__WEBPACK_IMPORTED_MODULE_4_element_ui__["Message"])({
    message: error.message,
    type: 'error',
    duration: 5000
  });
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ "veH+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vzTe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wGP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/views/tinymce/tinymce.vue + 5 modules
var tinymce = __webpack_require__("Xx3T");

// EXTERNAL MODULE: ./src/api/exchange.js
var exchange = __webpack_require__("y/ne");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/exchange/addItems/addItems.vue

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
//
//
//



var formDefault = {
  goodsName: '',
  stock: null,
  marketPrice: null,
  price: null,
  freeDeliver: '',
  userPoint: null,
  coachPoint: null,
  agentPoint: null,
  size: '',
  description: '',
  listImage: []
};
/* harmony default export */ var addItems = ({
  name: 'addItems',
  data: function data() {
    return {
      formData: extends_default()({}, formDefault),
      activeName: 'basicInfo'
    };
  },
  created: function created() {
    this.fetchDetail();
  },

  watch: {
    $route: function $route() {
      this.fetchDetail();
    }
  },
  methods: {
    fetchDetail: function fetchDetail() {
      var _this = this;

      if (this.$route.params.id) {
        Object(exchange["a" /* getDetail */])(this.$route.params.id).then(function (response) {
          _this.formData = response.data.dataObj;
          _this.formData.description = '<img src="' + response.data.dataObj.image + '">';
          _this.formData.freeDeliver = response.data.dataObj.freeDeliver + '';
        });
      } else {
        this.formData = extends_default()({}, formDefault);
      }
    },
    submitForm: function submitForm() {
      this.$notify({
        title: '操作成功',
        message: '商品信息已完成',
        type: 'success'
      });
    }
  },
  components: { tinymce: tinymce["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-69849b2d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/exchange/addItems/addItems.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"商品基本信息","name":"basicInfo"}},[_c('el-form',{attrs:{"inline":""}},[_c('el-form-item',{attrs:{"label":"商品名称"}},[_c('el-input',{model:{value:(_vm.formData.goodsName),callback:function ($$v) {_vm.$set(_vm.formData, "goodsName", $$v)},expression:"formData.goodsName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"库存"}},[_c('el-input',{model:{value:(_vm.formData.stock),callback:function ($$v) {_vm.$set(_vm.formData, "stock", $$v)},expression:"formData.stock"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"listPic",attrs:{"label":"列表图片"}},[_c('el-upload',{attrs:{"action":"https://httpbin.org/post","file-list":_vm.formData.listImage,"multiple":true,"show-file-list":true,"list-type":"picture-card"}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",attrs:{"label":"销售价格"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.price * 6),callback:function ($$v) {_vm.$set(_vm.formData, "price * 6", $$v)},expression:"formData.price * 6"}}),_vm._v("(人民币)\n          ")],1),_vm._v(" "),_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.price),callback:function ($$v) {_vm.$set(_vm.formData, "price", $$v)},expression:"formData.price"}}),_vm._v("(美元)\n          ")],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",attrs:{"label":"市场价格"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.marketPrice * 6),callback:function ($$v) {_vm.$set(_vm.formData, "marketPrice * 6", $$v)},expression:"formData.marketPrice * 6"}}),_vm._v("(人民币)\n          ")],1),_vm._v(" "),_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.marketPrice),callback:function ($$v) {_vm.$set(_vm.formData, "marketPrice", $$v)},expression:"formData.marketPrice"}}),_vm._v("(美元)\n          ")],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",staticStyle:{"display":"block"},attrs:{"label":"是否包邮"}},[_c('el-radio-group',{model:{value:(_vm.formData.freeDeliver),callback:function ($$v) {_vm.$set(_vm.formData, "freeDeliver", $$v)},expression:"formData.freeDeliver"}},[_c('el-radio',{attrs:{"label":"1"}},[_vm._v("包邮")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"0"}},[_vm._v("不包邮")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",attrs:{"label":"用户积分"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.userPoint),callback:function ($$v) {_vm.$set(_vm.formData, "userPoint", $$v)},expression:"formData.userPoint"}}),_vm._v("(推荐积分)\n          ")],1),_vm._v(" "),_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.userPoint),callback:function ($$v) {_vm.$set(_vm.formData, "userPoint", $$v)},expression:"formData.userPoint"}}),_vm._v("(消费积分)\n          ")],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",attrs:{"label":"教练积分"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.coachPoint),callback:function ($$v) {_vm.$set(_vm.formData, "coachPoint", $$v)},expression:"formData.coachPoint"}}),_vm._v("(直接积分)\n          ")],1),_vm._v(" "),_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.coachPoint),callback:function ($$v) {_vm.$set(_vm.formData, "coachPoint", $$v)},expression:"formData.coachPoint"}}),_vm._v("(间接积分)\n          ")],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",staticStyle:{"display":"block"},attrs:{"label":"合伙人积分"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.agentPoint),callback:function ($$v) {_vm.$set(_vm.formData, "agentPoint", $$v)},expression:"formData.agentPoint"}})],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-inline",staticStyle:{"display":"block"},attrs:{"label":"规格"}},[_c('div',{staticClass:"form-inline-item"},[_c('el-input',{model:{value:(_vm.formData.size),callback:function ($$v) {_vm.$set(_vm.formData, "size", $$v)},expression:"formData.size"}})],1)]),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center","display":"block"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.activeName = 'detail'}}},[_vm._v("下一步")])],1)],1)],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"商品详情","name":"detail"}},[_c('tinymce',{attrs:{"height":400},model:{value:(_vm.formData.description),callback:function ($$v) {_vm.$set(_vm.formData, "description", $$v)},expression:"formData.description"}}),_vm._v(" "),_c('div',{staticStyle:{"text-align":"center","margin":"15px auto"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("确定")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var addItems_addItems = (esExports);
// CONCATENATED MODULE: ./src/components/exchange/addItems/addItems.vue
function injectStyle (ssrContext) {
  __webpack_require__("Lf3B")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69849b2d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  addItems,
  addItems_addItems,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var exchange_addItems_addItems = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wrxm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./src/api/userManage.js
var userManage = __webpack_require__("ms7A");

// EXTERNAL MODULE: ./src/views/multiplicationFilter/multiplicationFilter.vue + 2 modules
var multiplicationFilter = __webpack_require__("ILbm");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userManage/coach/coach.vue

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



var countryObj = {};
/* harmony default export */ var coach = ({
  name: 'coach',
  data: function data() {
    return {
      total: 1,
      list: null,
      loading: true,
      visible: false,
      listQuery: { page: 1 },
      countryMap: [],
      selectedInfo: {
        isLogOff: null,
        coachId: null
      },
      promptMap: ['恢复教练成功', '注销教练成功'],
      imageList: [],
      downloadLoading: false
    };
  },
  created: function created() {
    this.GetCoachList();
  },

  methods: {
    GetCoachList: function GetCoachList() {
      var _this = this;

      this.loading = true;
      Object(userManage["d" /* getCoachList */])(this.listQuery).then(function (response) {
        _this.list = response.data.coachList;
        _this.total = response.data.total;
        _this.loading = false;
      });
    },
    showDialog: function showDialog(row) {
      this.selectedInfo.isLogOff = row.status ? 0 : 1;
      this.selectedInfo.coachId = row.userId;
      this.visible = true;
    },
    logOffReback: function logOffReback() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(this.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i.userId === this.selectedInfo.coachId) {
            if (i.status === 0) {
              i.status = 1;
            } else {
              i.status = 0;
            }
            this.$notify({ type: 'success', message: this.promptMap[i.status], title: 'Prompt', duration: 2000 });
            this.visible = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    browseCertificate: function browseCertificate(row) {
      this.imageList = row.image;
    },
    searchBtn: function searchBtn() {
      this.listQuery.page = 1;
      this.GetCoachList();
    },
    excelExport: function excelExport() {
      var _this2 = this;

      this.downloadLoading = true;
      __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "zWO4")).then(function (excel) {
        var tHeader = ['教练ID', '昵称', '地区', '积分', '注册时间', '证书', '绑定用户', '合伙人', '状态'];
        var filterVal = ['userId', 'nickName', 'countryName', 'point', 'registerTime', 'certificate', 'bindUser', 'agent', 'status'];
        var data = _this2.formatJson(filterVal, _this2.list);
        excel.export_json_to_excel(tHeader, data, 'coach-list');
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      var statusMap = ['正常', '注销'];
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'countryName') {
            return countryObj[v[j]];
          } else if (j === 'status') {
            return statusMap[v[j]];
          } else {
            return v[j];
          }
        });
      });
    },
    acceptQuery: function acceptQuery(query) {
      this.listQuery = query.listQuery;
      this.countryMap = query.countryMap;
      countryObj = query.countryMap.reduce(function (obj, item) {
        obj[item.key] = item.name;
        return obj;
      }, {});
    }
  },
  filters: {
    countryFilter: function countryFilter(val) {
      return countryObj[val];
    }
  },
  components: { multiplicationFilter: multiplicationFilter["a" /* default */] }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-44b5f66a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userManage/coach/coach.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-container',[_c('multiplicationFilter',{attrs:{"searchBtn":_vm.searchBtn},on:{"sendListQuery":_vm.acceptQuery}},[_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){_vm.searchBtn()}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('div',{staticClass:"filter-item"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-download","loading":_vm.downloadLoading},on:{"click":_vm.excelExport}},[_vm._v("Excel")])],1)]),_vm._v(" "),_c('el-main',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"width":"100%"},attrs:{"border":"","data":_vm.list,"element-loading-text":"小主,我需要时间..."}},[_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('el-form',{staticClass:"expand-table",attrs:{"label-position":"left","inline":""}},[_c('el-form-item',[_c('img',{attrs:{"src":props.row.coachAvatar,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别"}},[_c('span',[_vm._v(_vm._s(props.row.sex))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机"}},[_c('span',[_vm._v(_vm._s(props.row.phoneNo))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱"}},[_c('span',[_vm._v(_vm._s(props.row.email))])])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"序号","align":"center","prop":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"教练ID","align":"center","prop":"userId"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"昵称","align":"center","prop":"nickName"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"地区","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("countryFilter")(scope.row.countryName)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"积分","align":"center","prop":"point"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"注册时间","min-width":"120px","align":"center","prop":"registerTime"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"证书","align":"center","prop":"certificate"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"绑定用户","align":"center","prop":"bindUser"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"合伙人","align":"center","prop":"agent"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?_c('el-tag',{attrs:{"type":"info"}},[_vm._v("\n              正常\n            ")]):_vm._e(),_vm._v(" "),(scope.row.status === 1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("\n              注销\n            ")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"190px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0 && scope.row.certificate !== '未上传')?[_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("注销")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看证书")])]:(scope.row.status === 1 && scope.row.certificate !== '未上传')?[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("恢复")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success","icon":"el-icon-picture"},on:{"click":function($event){_vm.browseCertificate(scope.row)}}},[_vm._v("查看证书")])]:(scope.row.status === 1)?[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("恢复")])]:[_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){_vm.showDialog(scope.row)}}},[_vm._v("注销")])]]}}])})],1)],1),_vm._v(" "),_c('el-footer',[_c('pagination',{attrs:{"listQuery":_vm.listQuery,"total":_vm.total,"GetList":_vm.GetCoachList}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.selectedInfo.isLogOff ? '注销教练' : '恢复教练',"visible":_vm.visible,"width":"350px","center":""},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"input-item",staticStyle:{"text-align":"center"}},[(_vm.selectedInfo.isLogOff)?_c('h3',[_vm._v("确定要注销教练(ID: "+_vm._s(_vm.selectedInfo.coachId)+")?")]):_c('h3',[_vm._v("确定要恢复教练(ID: "+_vm._s(_vm.selectedInfo.coachId)+")?")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.logOffReback()}}},[_vm._v("确 定")])],1)]),_vm._v(" "),_c('photo-swipe',{attrs:{"imageList":_vm.imageList}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var coach_coach = (esExports);
// CONCATENATED MODULE: ./src/components/userManage/coach/coach.vue
function injectStyle (ssrContext) {
  __webpack_require__("58s3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  coach,
  coach_coach,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManage_coach_coach = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xASn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "y/ne":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getExchangeList;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_request__ = __webpack_require__("vLgD");
/**
 * Created by zhaojuntong on 2017/12/28.
 */


function getExchangeList(listQuery) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/exchangeList',
    method: 'get',
    params: listQuery
  });
}
function getDetail(goodsId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_utils_request__["a" /* default */])({
    url: '/exchange/' + goodsId,
    method: 'get'
  });
}

/***/ }),

/***/ "yLWg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "z8FN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__("Wc9H");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__("IaZV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-xitong",
  "use": "icon-xitong-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" id=\"icon-xitong\"><path fill=\"#ffffff\" d=\"M540 160.864c14.816 0 27.008 12.192 27.008 27.04v32.416c0 14.88 11.648 30.656 25.792 35.04l45.152 18.592c4.864 2.592 10.592 3.84 16.384 3.84 9.856 0 19.936-3.584 26.528-10.176l22.976-22.976a27.008 27.008 0 0 1 38.208 0l38.208 38.176a27.104 27.104 0 0 1 0 38.24l-22.976 22.976c-10.464 10.528-13.344 29.824-6.304 42.912l18.592 45.216c4.416 14.176 20.16 25.792 35.008 25.792h32.416c14.816 0 26.976 12.128 26.976 27.008v54.048a27.04 27.04 0 0 1-26.976 27.008h-32.416c-14.784 0-30.592 11.616-35.008 25.76l-18.592 45.216c-7.04 13.12-4.128 32.48 6.304 42.944l22.976 22.944a27.104 27.104 0 0 1 0 38.24l-38.208 38.208c-5.248 5.248-12.192 7.872-19.104 7.872s-13.856-2.624-19.104-7.872l-22.88-23.008c-6.592-6.56-16.672-10.144-26.496-10.144a34.56 34.56 0 0 0-16.448 3.904l-45.248 18.592c-14.144 4.416-25.792 20.16-25.792 35.04v32.32a27.136 27.136 0 0 1-27.008 27.008h-53.984a27.072 27.072 0 0 1-27.04-27.008v-32.32c0-14.88-11.584-30.624-25.76-35.04l-45.312-18.592a34.688 34.688 0 0 0-16.384-3.904c-9.792 0-19.84 3.584-26.4 10.144l-23.008 23.008c-5.248 5.248-12.16 7.872-19.072 7.872s-13.824-2.624-19.072-7.872L245.696 741.12a27.2 27.2 0 0 1 0-38.24l23.008-22.944c10.496-10.464 13.344-29.824 6.336-42.944l-18.656-45.216c-4.384-14.176-20.096-25.76-34.944-25.792H189.056a27.136 27.136 0 0 1-27.008-27.04v-54.016c0-14.88 12.16-27.008 27.008-27.008l32.384 0.032c14.88 0 30.624-11.616 35.008-25.792l18.592-45.248c7.04-13.088 4.192-32.384-6.336-42.912l-22.944-22.976a27.072 27.072 0 0 1 0-38.208l38.176-38.176c5.248-5.248 12.16-7.872 19.072-7.872s13.824 2.624 19.072 7.872l23.04 22.976c6.592 6.624 16.64 10.208 26.464 10.208 5.792 0 11.52-1.248 16.384-3.872l45.216-18.592c14.176-4.384 25.76-20.16 25.76-35.04V187.904c0-14.816 12.16-27.04 27.04-27.04h53.984z m-26.944 505.504a154.336 154.336 0 0 0 154.336-154.4 154.368 154.368 0 1 0-154.336 154.4z m26.304-565.92h-52.736a95.136 95.136 0 0 0-95.04 95.008v9.568l-9.824 4.032-6.816-6.784c-17.856-17.856-41.696-27.712-67.072-27.712s-49.248 9.888-67.168 27.84L203.456 239.68c-17.92 17.888-27.808 41.76-27.808 67.168s9.888 49.248 27.808 67.168l6.688 6.72-4.064 9.92h-9.44a95.136 95.136 0 0 0-95.072 95.008v52.736a95.136 95.136 0 0 0 95.008 95.04h9.472l4.096 9.92-6.688 6.688a95.456 95.456 0 0 0-0.224 134.24l37.536 37.536c17.856 17.888 41.728 27.776 67.136 27.776s49.216-9.856 67.136-27.744l6.688-6.688 9.888 4.064v9.472a95.104 95.104 0 0 0 95.04 94.976h52.736a95.072 95.072 0 0 0 94.976-94.976v-9.472l9.92-4.064 6.496 6.528a94.624 94.624 0 0 0 67.328 27.904 94.4 94.4 0 0 0 67.136-27.744l37.344-37.376c17.92-17.92 27.808-41.792 27.808-67.2s-9.888-49.28-27.84-67.2l-6.688-6.688 4.064-9.888h9.536a95.072 95.072 0 0 0 94.944-94.976v-52.8a95.072 95.072 0 0 0-94.944-95.008h-9.536l-4.064-9.888 6.688-6.656c17.984-17.984 27.872-41.888 27.84-67.296s-9.92-49.28-27.872-67.168l-37.28-37.248c-17.92-17.92-41.76-27.776-67.136-27.776s-49.184 9.824-67.104 27.712l-6.784 6.784-9.824-4.064v-9.568a95.104 95.104 0 0 0-94.976-95.008m-26.368 503.232c-50.624 0-91.776-41.184-91.776-91.808s41.184-91.84 91.776-91.84 91.776 41.184 91.776 91.84-41.152 91.808-91.776 91.808\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "zQzX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zhH9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.d3749a7b270a454871a5.js.map
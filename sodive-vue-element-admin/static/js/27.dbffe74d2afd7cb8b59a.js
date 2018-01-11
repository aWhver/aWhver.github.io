webpackJsonp([27],{"2Mjw":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("BO1k"),i=r.n(n),a=r("1uAe"),l=r("0xDb"),s={name:"adManage",data:function(){return{list:null,total:1,listQuery:{page:1,title:null},loading:!0,visible:!1,isEdit:!1,bannerForm:{id:"",type:"",url:"",title:"",banner:[],effective:""},bannerRules:{type:[{required:!0,trigger:"blur",message:"请选择终端类型"}],url:[{required:!0,trigger:"blur",message:"请填写banner地址"},{type:"url",message:"请输入正确的地址",trigger:"blur,change"}],title:[{required:!0,trigger:"blur",message:"请填写banner标题"}],banner:[{required:!0,trigger:"blur",message:"请上传banner图片"}],effective:[{required:!0,trigger:"blur",message:"请选择是否有效"}]}}},created:function(){this.GetBannerList()},methods:{GetBannerList:function(){var e=this;this.loading=!0,Object(a.f)(this.listQuery).then(function(t){e.list=t.data.bannerList,e.total=t.data.total,e.loading=!1})},changeStatus:function(e){e.effective="effective"===e.effective?"ineffective":"effective",this.$notify({title:"Prompt",message:"已修改此banner状态",type:"success",duration:2e3})},addBanner:function(){var e=this;this.isEdit=!1,this.visible=!0,this.bannerForm={id:"",type:"",url:"",title:"",banner:[],effective:"",createTime:""},this.$nextTick(function(){e.$refs.bannerForm.clearValidate()})},editBanner:function(e){this.isEdit=!0,this.visible=!0,this.bannerForm=e},submitForm:function(){var e=this;this.$refs.bannerForm.validate(function(t){0===e.bannerForm.banner.length&&e.$message.warning("请等待图片上传完成"),t&&Object(a.c)(e.bannerForm).then(function(t){if(e.isEdit){var r=!0,n=!1,a=void 0;try{for(var s,o=i()(e.list);!(r=(s=o.next()).done);r=!0){var c=s.value;if(c.id===e.bannerForm.id){c=e.bannerForm,e.$notify({title:"Prompt",message:"编辑banner成功",type:"success"});break}}}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}}else e.bannerForm.createTime=Object(l.b)(new Date,"{y}-{m}-{d}"),e.list.unshift(e.bannerForm),e.$notify({title:"Prompt",message:"新增banner成功",type:"success"});e.visible=!1})})},handleSuccess:function(e,t){this.bannerForm.banner=[],this.bannerForm.banner.push({name:t.name,url:t.url})},handleRemove:function(e){var t=this;0!==this.bannerForm.banner.length&&this.bannerForm.banner.forEach(function(r,n){r.url===e.url&&delete t.bannerForm.banner[0]})},handleExceed:function(e,t){this.$message.warning("仅限上传一张图片")},acceptQuery:function(e){this.listQuery=e.listQuery}},filters:{typeFilter:function(e){return{user:"用户端",pro:"教练端"}[e]},effectiveFilter:function(e){return{effective:"有效",ineffective:"无效"}[e]},effectiveTagFilter:function(e){return{effective:"success",ineffective:"danger"}[e]}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("certificate-filter",{attrs:{GetList:e.GetBannerList},on:{sendListQuery:e.acceptQuery}},[r("div",{staticClass:"filter-item"},[r("el-input",{attrs:{placeholder:"标题",clearable:""},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}})],1),e._v(" "),r("div",{staticClass:"filter-item fr"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addBanner}},[e._v("新增")])],1)]),e._v(" "),r("el-main",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"text-align":"center"},attrs:{data:e.list,border:"","element-loading-text":"小主,我需要时间..."}},[r("el-table-column",{attrs:{label:"标题",prop:"title",align:"left",width:"300px"}}),e._v(" "),r("el-table-column",{attrs:{label:"banner图"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{src:e.row.banner[0].url,width:"100",height:"65",alt:""}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"url",prop:"url",align:"left","min-width":"260px"}}),e._v(" "),r("el-table-column",{attrs:{label:"用户类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("typeFilter")(t.row.type)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),e._v(" "),r("el-table-column",{attrs:{label:"是否有效",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:e._f("effectiveTagFilter")(t.row.effective)},on:{click:function(r){e.changeStatus(t.row)}}},[e._v(e._s(e._f("effectiveFilter")(t.row.effective)))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(r){e.editBanner(t.row)}}},[e._v("编辑")])]}}])})],1)],1),e._v(" "),r("el-footer",[r("pagination",{attrs:{total:e.total,listQuery:e.listQuery,GetList:e.GetBannerList}})],1),e._v(" "),r("el-dialog",{staticClass:"banner-dialog",attrs:{title:"新增/编辑banner",visible:e.visible,center:""},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"bannerForm",attrs:{model:e.bannerForm,rules:e.bannerRules,"label-width":"140px","position-label":"right"}},[r("el-form-item",{attrs:{label:"用户类型",prop:"type"}},[r("el-radio-group",{model:{value:e.bannerForm.type,callback:function(t){e.$set(e.bannerForm,"type",t)},expression:"bannerForm.type"}},[r("el-radio",{attrs:{label:"user"}},[e._v("用户端")]),e._v(" "),r("el-radio",{attrs:{label:"pro"}},[e._v("教练端")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"url",prop:"url"}},[r("el-input",{attrs:{clearable:""},model:{value:e.bannerForm.url,callback:function(t){e.$set(e.bannerForm,"url",t)},expression:"bannerForm.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"url标题",prop:"title"}},[r("el-input",{attrs:{clearable:""},model:{value:e.bannerForm.title,callback:function(t){e.$set(e.bannerForm,"title",t)},expression:"bannerForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"banner图",prop:"banner"}},[r("el-upload",{attrs:{action:"https://httpbin.org/post","list-type":"picture-card","file-list":e.bannerForm.banner,"on-success":e.handleSuccess,"on-remove":e.handleRemove,limit:1,"on-exceed":e.handleExceed}},[r("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"是否有效",prop:"effective"}},[r("el-radio-group",{model:{value:e.bannerForm.effective,callback:function(t){e.$set(e.bannerForm,"effective",t)},expression:"bannerForm.effective"}},[r("el-radio",{attrs:{label:"effective"}},[e._v("有效")]),e._v(" "),r("el-radio",{attrs:{label:"ineffective"}},[e._v("无效")])],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(s,o,!1,function(e){r("gmRJ")},null,null);t.default=c.exports},gmRJ:function(e,t){}});
webpackJsonp([16],{"+/3M":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=s("BO1k"),a=s.n(l),i=s("d7EF"),n=s.n(i),r=s("1uAe"),o=[{status:"published",label:"已发布"},{status:"draft",label:"未发布"}],u=o.reduce(function(t,e){return t[e.status]=e.label,t},{}),c={name:"sodiveCollege",data:function(){return{list:null,total:1,listQuery:{page:1,status:null},statusMap:o,visible:!1,type:""}},created:function(){this.GetSodiveList()},methods:{GetSodiveList:function(){var t=this;Object(r.k)(this.listQuery).then(function(e){t.list=e.data.sodiveList.map(function(e){return"published"===e.status?t.$set(e,"published",!0):t.$set(e,"published",!1),e}),t.total=e.data.total})},changeStatus:function(t){t.status=t.published?"published":"draft",this.$message.success("修改状态成功")},deleteItem:function(t){var e=!0,s=!1,l=void 0;try{for(var i,r=a()(this.list.entries());!(e=(i=r.next()).done);e=!0){var o=i.value,u=n()(o,2),c=u[0];u[1].id===t.id&&this.list.splice(c,1)}}catch(t){s=!0,l=t}finally{try{!e&&r.return&&r.return()}finally{if(s)throw l}}},push:function(){""===this.type?this.$message.warning("请选择推送对象"):(this.$message.success("推送成功"),this.visible=!1)},cancel:function(){this.visible=!1,this.type=""},acceptQuery:function(t){this.listQuery=t.listQuery}},filters:{topFilter:function(t){return{yes:"是",no:"否"}[t]},programaFilter:function(t){return{sodive:"sodive学院"}[t]},statusFilter:function(t){return u[t]},statusTagFilter:function(t){return{published:"success",draft:"danger"}[t]}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("certificate-filter",{attrs:{GetList:t.GetSodiveList},on:{sendListQuery:t.acceptQuery}},[s("div",{staticClass:"filter-item"},[s("el-select",{staticStyle:{width:"150px"},attrs:{clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.statusMap,function(t){return s("el-option",{key:t.status,attrs:{value:t.status,label:t.label}})}))],1),t._v(" "),s("div",{staticClass:"filter-item fr"},[s("router-link",{attrs:{to:"/operationManagement/sodiveCollege/sodive/14"}},[s("el-button",{attrs:{type:"primary"}},[t._v("新增")])],1)],1)]),t._v(" "),s("el-main",[s("el-table",{staticStyle:{"text-align":"center"},attrs:{data:t.list,border:""}},[s("el-table-column",{attrs:{label:"ID",prop:"id",width:"150px"}}),t._v(" "),s("el-table-column",{attrs:{label:"栏目"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("programaFilter")(e.row.programa)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"标题",prop:"title","min-width":"200px",align:"left"}}),t._v(" "),s("el-table-column",{attrs:{label:"是否置顶",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("topFilter")(e.row.top)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-tag",{attrs:{type:t._f("statusTagFilter")(e.row.status)}},[t._v(t._s(t._f("statusFilter")(e.row.status)))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"发布操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{on:{change:function(s){t.changeStatus(e.row)}},model:{value:e.row.published,callback:function(s){t.$set(e.row,"published",s)},expression:"scope.row.published"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"220px"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{attrs:{to:"/operationManagement/sodiveCollege/sodive/"+e.row.id}},[s("el-button",{attrs:{type:"primary"}},[t._v("编辑")])],1),t._v(" "),s("el-button",{attrs:{type:"warning"},on:{click:function(s){t.deleteItem(e.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(e){t.visible=!0}}},[t._v("推送")])]}}])})],1)],1),t._v(" "),s("el-footer",[s("pagination",{attrs:{total:t.total,listQuery:t.listQuery,Getlist:t.GetSodiveList}})],1),t._v(" "),s("el-dialog",{attrs:{title:"推送消息",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[s("div",[s("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[s("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),s("el-radio",{attrs:{label:"1"}},[t._v("中国")]),t._v(" "),s("el-radio",{attrs:{label:"2"}},[t._v("海外")])],1)],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.cancel}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.push}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var p=s("VU/8")(c,d,!1,function(t){s("DP0n")},null,null);e.default=p.exports},DP0n:function(t,e){}});
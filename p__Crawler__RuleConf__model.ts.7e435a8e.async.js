(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{ozO7:function(a,t,e){"use strict";var n=e("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(e("p0pE")),i=n(e("d6i3")),r=e("LvDl"),l=e("Qymd"),u={namespace:"ruleConf",state:{data:{list:[],pagination:{}}},effects:{create:i.default.mark(function a(t,e){var n,d,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.add,n);case 4:return u=a.sent,a.next=7,r({type:"add",payload:u.data});case 7:case"end":return a.stop()}},a)}),fetch:i.default.mark(function a(t,e){var n,d,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.query,n);case 4:return u=a.sent,a.next=7,r({type:"save",payload:u.data});case 7:case"end":return a.stop()}},a)}),modify:i.default.mark(function a(t,e){var n,d,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.edit,n);case 4:return u=a.sent,a.next=7,r({type:"edit",payload:u.data});case 7:case"end":return a.stop()}},a)}),remove:i.default.mark(function a(t,e){var n,d,r;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.remove,n);case 4:return a.next=6,r({type:"del",payload:n});case 6:case"end":return a.stop()}},a)}),createPageRegion:i.default.mark(function a(t,e){var n,d,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.addPageRegion,n);case 4:return u=a.sent,a.next=7,r({type:"addPageRegion",payload:u.data});case 7:case"end":return a.stop()}},a)}),modifyPageRegion:i.default.mark(function a(t,e){var n,d,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.payload,d=e.call,r=e.put,a.next=4,d(l.editdPageRegion,n);case 4:return u=a.sent,a.next=7,r({type:"editPageRegion",payload:u.data});case 7:case"end":return a.stop()}},a)})},reducers:{del:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},t=arguments.length>1?arguments[1]:void 0,e=t.payload.ids,n=a.data,i=n.list,l=n.pagination,u=i.filter(function(a){return-1===e.indexOf(a.id)});return!(0,r.isEmpty)(l)&&(0,r.isPlainObject)(l)&&(0,r.isNumber)(l.total)&&(l.total-=i.length-u.length),(0,d.default)({},a,{data:(0,d.default)({},a.data,{list:u,pagination:l})})},add:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},t=arguments.length>1?arguments[1]:void 0,e=a.data,n=e.list,i=e.pagination,l=n;return l.unshift(t.payload),!(0,r.isEmpty)(i)&&(0,r.isPlainObject)(i)&&(0,r.isNumber)(i.total)&&(i.total+=1),(0,d.default)({},a,{data:(0,d.default)({},a.data,{list:l,pagination:i})})},edit:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},t=arguments.length>1?arguments[1]:void 0,e=a.data.list,n=t.payload;return(0,d.default)({},a,{data:(0,d.default)({},a.data,{list:e.map(function(a){return a.id===n.id?n:a})})})},save:function(a,t){return(0,d.default)({},a,{data:t.payload})},addPageRegion:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},t=arguments.length>1?arguments[1]:void 0,e=a.data.list,n=t.payload;return(0,d.default)({},a,{data:(0,d.default)({},a.data,{list:e.map(function(a){var t=a.pageRegions;return a.id===n.pageInfo.id?(0,d.default)({},a,{pageRegions:void 0===t?[n]:t.concat(n)}):a})})})},editPageRegion:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},t=arguments.length>1?arguments[1]:void 0,e=a.data.list,n=t.payload;return(0,d.default)({},a,{data:(0,d.default)({},a.data,{list:e.map(function(a){var t=a.pageRegions;return a.id===n.pageInfo.id?(0,d.default)({},a,{pageRegions:t.map(function(a){return a.id===n.id?n:a})}):a})})})}}},o=u;t.default=o}}]);
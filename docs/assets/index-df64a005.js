import{w as M,u as m,h as F,r as P,c as O,ae as E}from"./index-397287bc.js";var I=typeof global=="object"&&global&&global.Object===Object&&global;const A=I;var z=typeof self=="object"&&self&&self.Object===Object&&self,L=A||z||Function("return this")();const y=L;var k=y.Symbol;const c=k;var x=Object.prototype,R=x.hasOwnProperty,G=x.toString,u=c?c.toStringTag:void 0;function H(e){var t=R.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch{}var a=G.call(e);return n&&(t?e[u]=r:delete e[u]),a}var K=Object.prototype,J=K.toString;function U(e){return J.call(e)}var Y="[object Null]",B="[object Undefined]",T=c?c.toStringTag:void 0;function $(e){return e==null?e===void 0?B:Y:T&&T in Object(e)?H(e):U(e)}function W(e){return e!=null&&typeof e=="object"}var X="[object Symbol]";function _(e){return typeof e=="symbol"||W(e)&&$(e)==X}function Z(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var q=Array.isArray;const b=q;var V=1/0,S=c?c.prototype:void 0,w=S?S.toString:void 0;function j(e){if(typeof e=="string")return e;if(b(e))return Z(e,j)+"";if(_(e))return w?w.call(e):"";var t=e+"";return t=="0"&&1/e==-V?"-0":t}function D(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Q="[object AsyncFunction]",ee="[object Function]",te="[object GeneratorFunction]",re="[object Proxy]";function ne(e){if(!D(e))return!1;var t=$(e);return t==ee||t==te||t==Q||t==re}var ae=y["__core-js_shared__"];const g=ae;var C=function(){var e=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function oe(e){return!!C&&C in e}var ie=Function.prototype,se=ie.toString;function ce(e){if(e!=null){try{return se.call(e)}catch{}try{return e+""}catch{}}return""}var le=/[\\^$.*+?()[\]{}|]/g,ue=/^\[object .+?Constructor\]$/,he=Function.prototype,de=Object.prototype,pe=he.toString,fe=de.hasOwnProperty,ge=RegExp("^"+pe.call(fe).replace(le,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function me(e){if(!D(e)||oe(e))return!1;var t=ne(e)?ge:ue;return t.test(ce(e))}function ye(e,t){return e==null?void 0:e[t]}function N(e,t){var r=ye(e,t);return me(r)?r:void 0}function _e(e,t){return e===t||e!==e&&t!==t}var be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ve=/^\w*$/;function Te(e,t){if(b(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||_(e)?!0:ve.test(e)||!be.test(e)||t!=null&&e in Object(t)}var Se=N(Object,"create");const h=Se;function we(){this.__data__=h?h(null):{},this.size=0}function Ce(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Pe="__lodash_hash_undefined__",Oe=Object.prototype,xe=Oe.hasOwnProperty;function $e(e){var t=this.__data__;if(h){var r=t[e];return r===Pe?void 0:r}return xe.call(t,e)?t[e]:void 0}var je=Object.prototype,De=je.hasOwnProperty;function Ne(e){var t=this.__data__;return h?t[e]!==void 0:De.call(t,e)}var Me="__lodash_hash_undefined__";function Fe(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=h&&t===void 0?Me:t,this}function i(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}i.prototype.clear=we;i.prototype.delete=Ce;i.prototype.get=$e;i.prototype.has=Ne;i.prototype.set=Fe;function Ee(){this.__data__=[],this.size=0}function p(e,t){for(var r=e.length;r--;)if(_e(e[r][0],t))return r;return-1}var Ie=Array.prototype,Ae=Ie.splice;function ze(e){var t=this.__data__,r=p(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Ae.call(t,r,1),--this.size,!0}function Le(e){var t=this.__data__,r=p(t,e);return r<0?void 0:t[r][1]}function ke(e){return p(this.__data__,e)>-1}function Re(e,t){var r=this.__data__,n=p(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function l(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}l.prototype.clear=Ee;l.prototype.delete=ze;l.prototype.get=Le;l.prototype.has=ke;l.prototype.set=Re;var Ge=N(y,"Map");const He=Ge;function Ke(){this.size=0,this.__data__={hash:new i,map:new(He||l),string:new i}}function Je(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function f(e,t){var r=e.__data__;return Je(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ue(e){var t=f(this,e).delete(e);return this.size-=t?1:0,t}function Ye(e){return f(this,e).get(e)}function Be(e){return f(this,e).has(e)}function We(e,t){var r=f(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function s(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=Ke;s.prototype.delete=Ue;s.prototype.get=Ye;s.prototype.has=Be;s.prototype.set=We;var Xe="Expected a function";function v(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Xe);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var d=e.apply(this,n);return r.cache=o.set(a,d)||o,d};return r.cache=new(v.Cache||s),r}v.Cache=s;var Ze=500;function qe(e){var t=v(e,function(n){return r.size===Ze&&r.clear(),n}),r=t.cache;return t}var Ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/\\(\\)?/g,et=qe(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ve,function(r,n,a,o){t.push(a?o.replace(Qe,"$1"):n||r)}),t});const tt=et;function rt(e){return e==null?"":j(e)}function nt(e,t){return b(e)?e:Te(e,t)?[e]:tt(rt(e))}var at=1/0;function ot(e){if(typeof e=="string"||_(e))return e;var t=e+"";return t=="0"&&1/e==-at?"-0":t}function it(e,t){t=nt(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[ot(t[r++])];return r&&r==n?e:void 0}function st(e,t,r){var n=e==null?void 0:it(e,t);return n===void 0?r:n}const gt=({from:e,replacement:t,scope:r,version:n,ref:a,type:o="API"},d)=>{M(()=>m(d),pt=>{},{immediate:!0})};var ct={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const lt=e=>(t,r)=>ut(t,r,m(e)),ut=(e,t,r)=>st(r,e,e).replace(/\{(\w+)\}/g,(n,a)=>{var o;return`${(o=t==null?void 0:t[a])!=null?o:`{${a}}`}`}),ht=e=>{const t=O(()=>m(e).name),r=E(e)?e:P(e);return{lang:t,locale:r,t:lt(e)}},dt=Symbol("localeContextKey"),mt=e=>{const t=e||F(dt,P());return ht(O(()=>t.value||ct))};export{gt as a,dt as l,mt as u};

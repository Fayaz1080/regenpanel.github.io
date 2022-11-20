(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[12],{111:function(e,t,r){"use strict";var n=r(0);t.a=function(e){let{icon:t,size:r=24,...c}=e;return Object(n.cloneElement)(t,{width:r,height:r,...c})}},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return a}));var n=r(6);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const a=e.filter(e=>e.attribute===r.taxonomy),o=a.length?a[0]:null;if(!(o&&o.slug&&Array.isArray(o.slug)&&o.slug.includes(c)))return;const i=o.slug.filter(e=>e!==c),s=e.filter(e=>e.attribute!==r.taxonomy);i.length>0&&(o.slug=i.sort(),s.push(o)),t(Object(n.sortBy)(s,"attribute"))},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";if(!r||!r.taxonomy)return[];const o=e.filter(e=>e.attribute!==r.taxonomy);return 0===c.length?t(o):(o.push({attribute:r.taxonomy,operator:a,slug:c.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(n.sortBy)(o,"attribute"))),o}},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var n=r(2);const c=Object(n.getSetting)("attributes",[]).reduce((e,t)=>{const r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return r&&r.id&&e.push(r),e},[]),a=e=>{if(e)return c.find(t=>t.id===e)},o=e=>{if(e)return c.find(t=>t.taxonomy===e)}},137:function(e){e.exports=JSON.parse('{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Product Filters Controls","description":"Display the currently active product filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},157:function(e,t,r){"use strict";var n=r(0),c=r(1),a=r(29),o=r(2),i=r(5),s=r.n(i),l=r(22),u=r(69),b=r(18),f=r(224),d=r(70),p=r(51);r(228);var O=r(119),m=r(41),j=r(60),g=r(21),y=r(112),_=e=>{let{attributeObject:t,slugs:r=[],operator:i="in",displayStyle:s,isLoadingCallback:l}=e;const{results:b,isLoading:d}=Object(j.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[p,O]=Object(a.b)("attributes",[]);if(Object(n.useEffect)(()=>{l(d)},[d,l]),!Array.isArray(b)||!Object(f.b)(b)||!Object(f.a)(p))return null;const _=t.label,v=Object(o.getSettingWithCoercion)("is_rendering_php_template",!1,u.a);return Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},_,":"),Object(n.createElement)("ul",null,r.map((e,r)=>{const a=b.find(t=>t.slug===e);if(!a)return null;let o="";return r>0&&"and"===i&&(o=Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(c.__)("All","woocommerce"))),Object(m.f)({type:_,name:Object(g.decodeEntities)(a.name||e),prefix:o,isLoading:d,removeCallback:()=>{const r=p.find(e=>{let{attribute:r}=e;return r==="pa_"+t.name});1===(null==r?void 0:r.slug.length)?Object(m.e)("query_type_"+t.name,"filter_"+t.name):Object(m.e)({["filter_"+t.name]:e}),v||Object(y.a)(p,O,t,e)},showLabel:!1,displayStyle:s})})))},v=e=>{let{displayStyle:t,isLoading:r}=e;return r?Object(n.createElement)(n.Fragment,null,[...Array("list"===t?2:3)].map((e,r)=>Object(n.createElement)("li",{className:"list"===t?"show-loading-state-list":"show-loading-state-chips",key:r},Object(n.createElement)("span",{className:"show-loading-state__inner"})))):null},h=r(55);t.a=e=>{let{attributes:t,isEditor:r=!1}=e;const i=Object(h.b)(),j=function(){const e=Object(n.useRef)(!1);return Object(n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),Object(n.useCallback)(()=>e.current,[])}()(),g=Object(o.getSettingWithCoercion)("is_rendering_php_template",!1,u.a),[y,w]=Object(n.useState)(!0),k=Object(m.c)()&&!r&&y,[E,S]=Object(a.b)("attributes",[]),[N,x]=Object(a.b)("stock_status",[]),[A,C]=Object(a.b)("min_price"),[R,L]=Object(a.b)("max_price"),[F,T]=Object(a.b)("rating"),Q=Object(o.getSetting)("stockStatusOptions",[]),P=Object(o.getSetting)("attributes",[]),B=Object(n.useMemo)(()=>{return!k&&0!==N.length&&(e=N,Array.isArray(e)&&e.every(e=>["instock","outofstock","onbackorder"].includes(e)))&&(e=>Object(b.a)(e)&&Object.keys(e).every(e=>["instock","outofstock","onbackorder"].includes(e)))(Q)?N.map(e=>Object(m.f)({type:Object(c.__)("Stock Status","woocommerce"),name:Q[e],removeCallback:()=>{if(Object(m.e)({filter_stock_status:e}),!g){const t=N.filter(t=>t!==e);x(t)}},displayStyle:t.displayStyle})):null;var e},[k,Q,N,x,t.displayStyle,g]),Y=Object(n.useMemo)(()=>k||!Number.isFinite(A)&&!Number.isFinite(R)?null:Object(m.f)({type:Object(c.__)("Price","woocommerce"),name:Object(m.b)(A,R),removeCallback:()=>{Object(m.e)("max_price","min_price"),g||(C(void 0),L(void 0))},displayStyle:t.displayStyle}),[k,A,R,t.displayStyle,C,L,g]),V=Object(n.useMemo)(()=>!Object(f.a)(E)&&j||!E.length&&!Object(m.g)(P)?(y&&w(!1),null):E.map(e=>{const r=Object(O.b)(e.attribute);return r?Object(n.createElement)(_,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator,isLoadingCallback:w}):(y&&w(!1),null)}),[E,j,P,y,t.displayStyle]);Object(n.useEffect)(()=>{var e;if(!g)return;if(F.length&&F.length>0)return;const t=null===(e=Object(d.d)("rating_filter"))||void 0===e?void 0:e.toString();t&&T(t.split(","))},[g,F,T]);const K=Object(n.useMemo)(()=>{return!k&&0!==F.length&&(e=F,Array.isArray(e)&&e.every(e=>["1","2","3","4","5"].includes(e)))?F.map(e=>Object(m.f)({type:Object(c.__)("Rating","woocommerce"),name:Object(c.sprintf)(
/* translators: %s is referring to the average rating value */
Object(c.__)("Rated %s out of 5","woocommerce"),e),removeCallback:()=>{if(g)return Object(m.e)({rating_filter:e});const t=F.filter(t=>t!==e);T(t)},displayStyle:t.displayStyle})):null;var e},[k,F,T,t.displayStyle,g]);if(!k&&!(E.length>0||N.length>0||F.length>0||Number.isFinite(A)||Number.isFinite(R))&&!r)return i(!1),null;const W="h"+t.headingLevel,U=Object(n.createElement)(W,{className:"wc-block-active-filters__title"},t.heading),z=k?Object(n.createElement)(p.a,null,U):U;if(!Object(o.getSettingWithCoercion)("has_filterable_products",!1,u.a))return i(!1),null;i(!0);const D=s()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle,"wc-block-active-filters--loading":k});return Object(n.createElement)(n.Fragment,null,!r&&t.heading&&z,Object(n.createElement)("div",{className:"wc-block-active-filters"},Object(n.createElement)("ul",{className:D},r?Object(n.createElement)(n.Fragment,null,Object(m.f)({type:Object(c.__)("Size","woocommerce"),name:Object(c.__)("Small","woocommerce"),displayStyle:t.displayStyle}),Object(m.f)({type:Object(c.__)("Color","woocommerce"),name:Object(c.__)("Blue","woocommerce"),displayStyle:t.displayStyle})):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(v,{isLoading:k,displayStyle:t.displayStyle}),Y,B,V,K)),k?Object(n.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):Object(n.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{Object(m.a)(),g||(C(void 0),L(void 0),S([]),x([]),T([]))}},Object(n.createElement)(l.a,{label:Object(c.__)("Clear All","woocommerce"),screenReaderLabel:Object(c.__)("Clear All Filters","woocommerce")}))))}},18:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return n(e)&&t in e}},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r(100);var n=r(44);const c=()=>n.m>1},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(28),c=r(18);const a=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},217:function(e,t){},22:function(e,t,r){"use strict";var n=r(0),c=r(5),a=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:o,wrapperProps:i={}}=e;const s=null!=r,l=null!=c;return!s&&l?(t=o||"span",i={...i,className:a()(i.className,"screen-reader-text")},Object(n.createElement)(t,i,c)):(t=o||n.Fragment,s&&l&&r!==c?Object(n.createElement)(t,i,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,i,r))}},224:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(18);const c=e=>Object(n.b)(e,"count")&&Object(n.b)(e,"description")&&Object(n.b)(e,"id")&&Object(n.b)(e,"name")&&Object(n.b)(e,"parent")&&Object(n.b)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,a=e=>Array.isArray(e)&&e.every(c),o=e=>Object(n.b)(e,"attribute")&&Object(n.b)(e,"operator")&&Object(n.b)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),i=e=>Array.isArray(e)&&e.every(o)},227:function(e,t,r){"use strict";var n=r(0),c=r(14);const a=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(c.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=a},228:function(e,t){},23:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);const c=Object(n.createContext)("page"),a=()=>Object(n.useContext)(c);c.Provider},231:function(e,t,r){"use strict";var n=r(11),c=r.n(n),a=r(0),o=r(5),i=r.n(o),s=r(1),l=r(111),u=r(227);r(217);var b=e=>{let{text:t,screenReaderText:r="",element:n="li",className:o="",radius:s="small",children:l=null,...u}=e;const b=n,f=i()(o,"wc-block-components-chip","wc-block-components-chip--radius-"+s),d=Boolean(r&&r!==t);return Object(a.createElement)(b,c()({className:f},u),Object(a.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(a.createElement)("span",{className:"screen-reader-text"},r),l)};t.a=e=>{let{ariaLabel:t="",className:r="",disabled:n=!1,onRemove:o=(()=>{}),removeOnAnyClick:f=!1,text:d,screenReaderText:p="",...O}=e;const m=f?"span":"button";if(!t){const e=p&&"string"==typeof p?p:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(s.__)("Remove","woocommerce"):Object(s.sprintf)(
/* translators: %s text of the chip to remove. */
Object(s.__)('Remove "%s"',"woocommerce"),e)}const j={"aria-label":t,disabled:n,onClick:o,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||o()}},g=f?j:{},y=f?{"aria-hidden":!0}:j;return Object(a.createElement)(b,c()({},O,g,{className:i()(r,"is-removable"),element:f?"button":O.element,screenReaderText:p,text:d}),Object(a.createElement)(m,c()({className:"wc-block-components-chip__remove"},y),Object(a.createElement)(l.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),c=r(12),a=r.n(c);function o(e){const t=Object(n.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d}));var n=r(3),c=r(4),a=r(0),o=r(12),i=r.n(o),s=r(27),l=r(61),u=r(23);const b=e=>{const t=Object(u.a)();e=e||t;const r=Object(c.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:o}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(a.useCallback)(t=>{o(e,t)},[e,o])]},f=(e,t,r)=>{const o=Object(u.a)();r=r||o;const i=Object(c.useSelect)(c=>c(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:s}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[i,Object(a.useCallback)(t=>{s(r,e,t)},[r,e,s])]},d=(e,t)=>{const r=Object(u.a)();t=t||r;const[n,c]=b(t),o=Object(s.a)(n),f=Object(s.a)(e),d=Object(l.a)(f),p=Object(a.useRef)(!1);return Object(a.useEffect)(()=>{i()(d,f)||(c(Object.assign({},o,f)),p.current=!0)},[o,f,d,c]),p.current?[n,c]:[e,c]}},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(108),c=r(214),a=r(18),o=r(215);const i=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},r=Object(o.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:r})}},41:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"f",(function(){return O})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return y})),r.d(t,"c",(function(){return _})),r.d(t,"g",(function(){return v})),r.d(t,"d",(function(){return h}));var n=r(0),c=r(1),a=r(39),o=r(231),i=r(22),s=r(13),l=r(70),u=r(111),b=r(227),f=r(28),d=r(137);const p=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(c.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(c.__)("Between %1$s and %2$s","woocommerce"),Object(a.formatPrice)(e),Object(a.formatPrice)(t)):Number.isFinite(e)?Object(c.sprintf)(
/* translators: %s min price */
Object(c.__)("From %s","woocommerce"),Object(a.formatPrice)(e)):Object(c.sprintf)(
/* translators: %s max price */
Object(c.__)("Up to %s","woocommerce"),Object(a.formatPrice)(t)),O=e=>{let{type:t,name:r,prefix:a="",removeCallback:s=(()=>null),showLabel:l=!0,displayStyle:f}=e;const d=a?Object(n.createElement)(n.Fragment,null,a," ",r):r,p=Object(c.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(c.__)("Remove %s filter","woocommerce"),r);return Object(n.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},l&&Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===f?Object(n.createElement)(o.a,{element:"span",text:d,onRemove:s,radius:"large",ariaLabel:p}):Object(n.createElement)("span",{className:"wc-block-active-filters__list-item-name"},Object(n.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:s},Object(n.createElement)(u.a,{className:"wc-block-components-chip__remove-icon",icon:b.a,size:16}),Object(n.createElement)(i.a,{screenReaderLabel:p})),d))},m=function(){if(!window)return;const e=window.location.href,t=Object(s.getQueryArgs)(e),r=Object(s.removeQueryArgs)(e,...Object.keys(t));for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];c.forEach(e=>{if("string"==typeof e)return delete t[e];if("object"==typeof e){const r=Object.keys(e)[0],n=t[r].toString().split(",");t[r]=n.filter(t=>t!==e[r]).join(",")}});const o=Object.fromEntries(Object.entries(t).filter(e=>{let[,t]=e;return t})),i=Object(s.addQueryArgs)(r,o);Object(l.c)(i)},j=["min_price","max_price","rating_filter","filter_","query_type_"],g=e=>{let t=!1;for(let r=0;j.length>r;r++){const n=j[r];if(n===e.substring(0,n.length)){t=!0;break}}return t},y=()=>{if(!window)return;const e=window.location.href,t=Object(s.getQueryArgs)(e),r=Object(s.removeQueryArgs)(e,...Object.keys(t)),n=Object.fromEntries(Object.keys(t).filter(e=>!g(e)).map(e=>[e,t[e]])),c=Object(s.addQueryArgs)(r,n);Object(l.c)(c)},_=()=>{if(!window)return!1;const e=window.location.href,t=Object(s.getQueryArgs)(e),r=Object.keys(t);let n=!1;for(let e=0;r.length>e;e++){const t=r[e];if(g(t)){n=!0;break}}return n},v=e=>{if(!window)return!1;const t=e.map(e=>"filter_"+e.attribute_name),r=window.location.href,n=Object(s.getQueryArgs)(r),c=Object.keys(n);let a=!1;for(let e=0;c.length>e;e++){const r=c[e];if(t.includes(r)){a=!0;break}}return a},h=e=>({heading:Object(f.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(f.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||d.attributes.headingLevel.default,displayStyle:Object(f.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||d.attributes.displayStyle.default})},454:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(291),a=r(28),o=r(157),i=r(41);t.default=e=>{const t=Object(c.a)(e);return Object(n.createElement)("div",{className:Object(a.a)(e.className)?e.className:"",style:{...t.style}},Object(n.createElement)(o.a,{isEditor:!1,attributes:Object(i.d)(e)}))}},5:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=c.apply(null,n);o&&e.push(o)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},51:function(e,t,r){"use strict";var n=r(0);r(71),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(3),c=r(4),a=r(0),o=r(27),i=r(73);const s=e=>{const{namespace:t,resourceName:r,resourceValues:s=[],query:l={},shouldSelect:u=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(a.useRef)({results:[],isLoading:!0}),f=Object(o.a)(l),d=Object(o.a)(s),p=Object(i.a)(),O=Object(c.useSelect)(e=>{if(!u)return null;const c=e(n.COLLECTIONS_STORE_KEY),a=[t,r,f,d],o=c.getCollectionError(...a);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(o)}return{results:c.getCollection(...a),isLoading:!c.hasFinishedResolution("getCollection",a)}},[t,r,d,f,u]);return null!==O&&(b.current=O),b.current}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(7);function c(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},70:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return u}));var n=r(13),c=r(2),a=r(69);const o=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,a.a),i="query_type_",s="filter_";function l(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function u(e){o?window.location.href=e:window.history.replaceState({},"",e)}},71:function(e,t){},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const c=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}}}]);
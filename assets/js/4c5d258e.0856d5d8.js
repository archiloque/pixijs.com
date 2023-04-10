"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=o(r),m=l,c=k["".concat(p,".").concat(m)]||k[m]||d[m]||n;return r?a.createElement(c,u(u({ref:t},s),{},{components:r})):a.createElement(c,u({ref:t},s))}));function c(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,u=new Array(n);u[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:l,u[1]=i;for(var o=2;o<n;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=r(87462),l=(r(67294),r(3905));const n={id:"PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",sidebar_label:"PIXI.CubeResource",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.CubeResource.pixi_core",id:"api/classes/PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",description:"@pixi/core.CubeResource",source:"@site/docs/api/classes/PIXI.CubeResource.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.CubeResource.pixi_core",permalink:"/api/classes/PIXI.CubeResource.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.CubeResource.pixi_core",title:"Class: PIXI.CubeResource",sidebar_label:"PIXI.CubeResource",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.CountLimiter",permalink:"/api/classes/PIXI.CountLimiter.pixi_prepare"},next:{title:"PIXI.DepthResource",permalink:"/api/classes/PIXI.DepthResource.pixi_core"}},p={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"SIDES",id:"sides",level:3},{value:"baseTexture",id:"basetexture",level:3},{value:"destroyed",id:"destroyed",level:3},{value:"height",id:"height",level:3},{value:"internal",id:"internal",level:3},{value:"itemDirtyIds",id:"itemdirtyids",level:3},{value:"items",id:"items",level:3},{value:"length",id:"length",level:3},{value:"src",id:"src",level:3},{value:"valid",id:"valid",level:3},{value:"width",id:"width",level:3},{value:"_height",id:"_height",level:3},{value:"_width",id:"_width",level:3},{value:"linkBaseTexture",id:"linkbasetexture",level:3},{value:"Methods",id:"methods",level:2},{value:"test",id:"test",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addBaseTextureAt",id:"addbasetextureat",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"addResourceAt",id:"addresourceat",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"bind",id:"bind",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"load",id:"load",level:3},{value:"Returns:",id:"returns-3",level:4},{value:"resize",id:"resize",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"style",id:"style",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"unbind",id:"unbind",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"update",id:"update",level:3},{value:"upload",id:"upload",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"initFromArray",id:"initfromarray",level:3},{value:"Parameters:",id:"parameters-9",level:4}],s={toc:o};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".CubeResource")),(0,l.kt)("p",null,"Resource for a CubeTexture which contains six resources."),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"constructor"},"Constructor:"),(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI.CubeResource(source: Array<string | PIXI.Resource>, options: ICubeResourceOptions) ")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array","<","string ","|"," PIXI.Resource",">")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Collection of URLs or resources to use as the sides of the cube.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"ICubeResourceOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ImageResource options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Width of resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Height of resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.autoLoad"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to auto-load resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.linkBaseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},"In case BaseTextures are supplied, whether to copy them or use"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"extends"},"Extends"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/PIXI.AbstractMultiResource.pixi_core"},"PIXI.AbstractMultiResource"))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"sides"},"SIDES"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Number of texture sides to store for CubeResources.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"basetexture"},"baseTexture"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Bound baseTexture, there can only be one.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroyed"},"destroyed"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"false")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," If resource has been destroyed.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," The height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"internal"},"internal"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if resource is created by BaseTexture useful for doing cleanup with BaseTexture destroy and not cleaning up resources that were created externally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"itemdirtyids"},"itemDirtyIds"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Array","<","number",">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Dirty IDs for each part.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"items"},"items"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"Array","<","BaseTexture",">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Collection of partial baseTextures that correspond to resources.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"length"},"length"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Number of elements in array.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"src"},"src"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," The url of the resource")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"valid"},"valid"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Has been validated")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"width"},"width"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," The width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_height"},"_height"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Internal height of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"_width"},"_width"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Internal width of the resource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"linkbasetexture"},"linkBaseTexture"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," In case BaseTextures are supplied, whether to use same resource or bind baseTexture itself.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"test"},"test"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(source",":"," unknown) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Used to auto-detect the type of resource."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"unknown")),(0,l.kt)("td",{parentName:"tr",align:null},"The source object")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," if source is an array of 6 elements"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addbasetextureat"},"addBaseTextureAt"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture, index",":"," number) -",">"," this")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Set a baseTexture by ID"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"addresourceat"},"addResourceAt"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(resource",":"," Resource, index",":"," number) -",">"," this")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Set a resource by ID"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Resource")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Zero-based index of resource to set")))),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"* Instance for chaining"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"bind"},"bind"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Add binding."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"parent base texture"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Call when destroying resource, unbind any BaseTexture object before calling this method, as reference counts are maintained internally.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dispose"},"dispose"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Destroy this BaseImageResource.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"load"},"load"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," Promise","<","this",">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Load all the resources simultaneously"),(0,l.kt)("h4",{id:"returns-3"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Promise","<","this",">")),(0,l.kt)("td",{parentName:"tr",align:null},"* When load is resolved"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"resize"},"resize"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(width",":"," number, height",":"," number) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Trigger a resize event"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"X dimension")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Y dimension"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"style"},"style"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(_renderer",":"," Renderer, _baseTexture",":"," BaseTexture, _glTexture",":"," GLTexture) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Set the style, optional to override"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"yeah, renderer!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"the texture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null},"texture instance for this webgl context")))),(0,l.kt)("h4",{id:"returns-4"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"* ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"unbind"},"unbind"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(baseTexture",":"," BaseTexture) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Unset the parent base texture."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Has been updated trigger event.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"upload"},"upload"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(renderer",":"," Renderer, _baseTexture",":"," BaseTexture, glTexture",":"," GLTexture) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Upload the resource"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"BaseTexture")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"GLTexture")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"returns-5"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"true is success"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"initfromarray"},"initFromArray"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(resources",":"," Array","<","any",">",", options",":"," IAutoDetectOptions) -",">"," void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Used from ArrayResource and CubeResource constructors."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resources"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Array","<","any",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be resources, image elements, canvas, etc. , length should be same as constructor length")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IAutoDetectOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Detect options for resources"))))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},50887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.BackgroundSystem.pixi_core",title:"Class: PIXI.BackgroundSystem",sidebar_label:"PIXI.BackgroundSystem",custom_edit_url:null},o=void 0,i={unversionedId:"api/classes/PIXI.BackgroundSystem.pixi_core",id:"api/classes/PIXI.BackgroundSystem.pixi_core",title:"Class: PIXI.BackgroundSystem",description:"@pixi/core.BackgroundSystem",source:"@site/docs/api/classes/PIXI.BackgroundSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.BackgroundSystem.pixi_core",permalink:"/api/classes/PIXI.BackgroundSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.BackgroundSystem.pixi_core",title:"Class: PIXI.BackgroundSystem",sidebar_label:"PIXI.BackgroundSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BackgroundLoader",permalink:"/api/classes/PIXI.BackgroundLoader.pixi_assets"},next:{title:"PIXI.BaseImageResource",permalink:"/api/classes/PIXI.BaseImageResource.pixi_core"}},s={},c=[{value:"Members",id:"members",level:2},{value:"alpha",id:"alpha",level:3},{value:"backgroundColor",id:"backgroundcolor",level:3},{value:"clearBeforeRender",id:"clearbeforerender",level:3},{value:"color",id:"color",level:3},{value:"Methods",id:"methods",level:2},{value:"init",id:"init",level:3},{value:"Parameters:",id:"parameters",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".BackgroundSystem")),(0,a.kt)("p",null,"The background system manages the background color and alpha of the main view."),(0,a.kt)("article",null,"### Contructor:",(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI()"))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"alpha"},"alpha"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The background color alpha. Setting this to 0 will make the canvas transparent.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"Color")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The background color object.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clearbeforerender"},"clearBeforeRender"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This sets if the CanvasRenderer will clear the canvas or not before the new render pass. If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect to clear the canvas every frame. Disable this by setting this to false. For example, if your game has a canvas filling background image you often don't need this set.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"PIXI.ColorSource")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The background color to fill if not transparent.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(options",":"," PIXI.IRendererOptions) -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," initiates the background system"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.IRendererOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"the options for the background colors"))))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);
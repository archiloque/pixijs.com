"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[93089],{80046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(67294),r=a(86010),o=a(52263),l=a(10833),s=a(35281),c=a(40245),i=a(99703),d=a(90197),u=a(79985);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,o.Z)(),{blogDescription:r,blogTitle:s,permalink:c}=t,i="/"===c?a:s;return n.createElement(n.Fragment,null,n.createElement(l.d,{title:i,description:r}),n.createElement(d.Z,{tag:"blog_posts_list"}))}function m(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(c.Z,{sidebar:r},n.createElement(u.Z,{items:a}),n.createElement(i.Z,{metadata:t}))}function g(e){return n.createElement(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(p,e),n.createElement(m,e))}},25784:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(92949),o=a(52695),l=a(19604);const s={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"},c="7.0.5",i="inmemory://model/";function d(){const e=(0,n.useRef)(null),{code:t,updateCode:a}=(0,o.m4)(),{sandpack:d}=(0,o.X3)();(0,n.useEffect)((()=>{const t=()=>{null!=e.current&&e.current.layout({})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const{colorMode:u}=(0,r.I)();return n.createElement("div",{className:s.editorWrapper},n.createElement(l.ZP,{defaultLanguage:"typescript",value:t,key:d.activeFile,defaultValue:t,defaultPath:`${i}/src/index.ts`,onChange:e=>{a(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},beforeMount:async function(e){e.languages.typescript.typescriptDefaults.setCompilerOptions({...e.languages.typescript.typescriptDefaults.getCompilerOptions(),moduleResolution:2});const t=await fetch(`https://prod-packager-packages.codesandbox.io/v1/typings/pixi.js/${c}.json`),a=await t.json();for(const n in a.files){const t=a.files[n].module.code;e.languages.typescript.typescriptDefaults.addExtraLib(t,`${i}node_modules${n}`)}},onMount:t=>{e.current=t},theme:"dark"===u?"vs-dark":"light"}))}function u(e){const{code:t}=(0,o.m4)(),{sandpack:a}=(0,o.X3)(),[r,l]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if(null!=e.onCodeChanged)return e.onCodeChanged(t),()=>{null!=e.onCodeChanged&&e.onCodeChanged(void 0)}}));return n.createElement(o.sp,{className:`${s[e.mode]} ${r?s.showOutput:""}`},n.createElement(d,null),n.createElement("div",{className:s.previewWrapper},n.createElement(o.Gj,{showOpenInCodeSandbox:!1,className:s.sandpackPreview}),null==a.bundlerState&&n.createElement("div",{className:s.sandpackLoadingOverlay})),n.createElement("button",{onClick:()=>{l(!r)}},r?"Show Code":"Show Output"))}function p(e){const t=e.mode??"example";(0,n.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===t&&null!=e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}));const{colorMode:a}=(0,r.I)();return n.createElement(o.oT,{template:"vanilla-ts",theme:a,files:{"/src/index.ts":e.code},customSetup:{dependencies:{"pixi.js":c}},options:{classes:{"sp-wrapper":s.spWrapper,"sp-layout":s.spLayout},externalResources:["https://beta.pixijs.com/playground.css"]}},n.createElement(u,{mode:t,onCodeChanged:e.onCodeChanged}))}},40245:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),o=a(334),l=a(36624);function s(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return n.createElement(o.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(l.Z,{sidebar:t}),n.createElement("main",{className:(0,r.Z)("col",{"col--7":i&&a,"col--9":i&&!a,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},79972:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),r=a(86010),o=a(9460),l=a(15289),s=a(79224),c=a(99714),i=a(12046);const d="card_Yae6";function u(e){let{children:t,className:a}=e;const u=function(){const{isBlogPostPage:e}=(0,o.C)();return e?void 0:"margin-bottom--md"}();return n.createElement(l.Z,{className:(0,r.Z)(u,a,d)},n.createElement(s.Z,null),n.createElement(c.Z,null,t),n.createElement(i.Z,null))}},25889:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(90814),o=a(25784);const l="playgroundCodeBlock_UB3Y";var s=a(72389);function c(e){const t=(0,s.Z)();return e.playground&&t?n.createElement("div",{className:l},n.createElement(o.Z,{code:e.children})):n.createElement(r.Z,e)}}}]);
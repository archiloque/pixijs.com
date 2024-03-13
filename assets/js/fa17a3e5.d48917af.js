"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3181],{2503:(e,i,s)=>{s.d(i,{Z:()=>c});s(7294);var n=s(6010),r=s(5999),t=s(6668),d=s(9960);const o="anchorWithStickyNavbar_LWe7",l="anchorWithHideOnScrollNavbar_WYt5";var a=s(5893);function c(e){let{as:i,id:s,...c}=e;const{navbar:{hideOnScroll:h}}=(0,t.L)();if("h1"===i||!s)return(0,a.jsx)(i,{...c,id:void 0});const x=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:s});return(0,a.jsxs)(i,{...c,className:(0,n.Z)("anchor",h?l:o,c.className),id:s,children:[c.children,(0,a.jsx)(d.Z,{className:"hash-link",to:`#${s}`,"aria-label":x,title:x,children:"\u200b"})]})}},4355:(e,i,s)=>{s.r(i),s.d(i,{default:()=>v});var n=s(9960),r=s(5999),t=s(1825);const d=JSON.parse('[{"versionLabel":"v7.3.x","version":"7.3.3","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.3.3","build":"https://pixijs.download/v7.3.3/pixi.min.js","docs":"https://pixijs.download/v7.3.3/docs/index.html","npm":"7.3.3"},{"versionLabel":"v7.2.x","version":"7.2.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.2.4","build":"https://pixijs.download/v7.2.4/pixi.min.js","docs":"https://pixijs.download/v7.2.4/docs/index.html","npm":"7.2.4"},{"versionLabel":"v7.1.x","version":"7.1.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.1.4","build":"https://pixijs.download/v7.1.4/pixi.min.js","docs":"https://pixijs.download/v7.1.4/docs/index.html","npm":"7.1.4"},{"versionLabel":"v7.0.x","version":"7.0.5","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html","npm":"7.0.5"},{"versionLabel":"v6.x","version":"6.5.10","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v6.5.10","build":"https://pixijs.download/v6.5.10/pixi.min.js","docs":"https://pixijs.download/v6.5.10/docs/index.html","npm":"6.5.10"},{"versionLabel":"v5.x","version":"5.3.12","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html","npm":"5.3.12"},{"versionLabel":"v4.x","version":"4.8.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html","npm":"4.8.9"}]'),o=JSON.parse('[{"versionLabel":"dev","version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"https://pixijs.download/dev/docs/index.html","dev":true}]');var l=s(2503),a=s(9860),c=s(5893);function h(){return(0,c.jsx)(r.Z,{id:"versionsPage.versionEntry.link",children:"Documentation"})}function x(){return(0,c.jsx)(r.Z,{id:"versionsPage.versionEntry.build",children:"Build"})}function j(){return(0,c.jsx)(r.Z,{id:"versionsPage.versionEntry.releaseNotes",children:"Release Notes"})}function v(){const e=t,i=d,s=o,v=e.find((e=>e.latest)),p=e.find((e=>e.prerelease)),m=[...e,...i].filter((e=>!e.latest&&!e.prerelease&&!e.dev));return(0,c.jsx)(a.Z,{title:"Versions",description:"PixiJS Versions page listing all API documentation versions",children:(0,c.jsxs)("main",{className:"container margin-vert--lg",children:[(0,c.jsx)(l.Z,{as:"h1",children:(0,c.jsx)(r.Z,{id:"versionsPage.title",children:"PixiJS API documentation versions"})}),v&&(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"next",children:(0,c.jsx)(r.Z,{id:"versionsPage.current.title",children:"Current version (Stable)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(r.Z,{id:"versionsPage.current.description",children:"Here you can find the documentation for current released version."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:v.version}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:v.docs,children:(0,c.jsx)(h,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:v.build,children:(0,c.jsx)(x,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:v.releaseNotes,children:(0,c.jsx)(j,{})})})]})})})]}),(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"latest",children:(0,c.jsx)(r.Z,{id:"versionsPage.next.title",children:"Next version (Unreleased)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for work-in-process unreleased version."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:s.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:e.version}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:e.docs,children:(0,c.jsx)(h,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{href:e.build,children:(0,c.jsx)(x,{})})})]},e.version)))})})]}),p&&(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"latest",children:(0,c.jsx)(r.Z,{id:"versionsPage.next.title",children:"Prerelease version"})}),(0,c.jsx)("p",{children:(0,c.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for the prerelease version."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:p.version}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:p.docs,children:(0,c.jsx)(h,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:p.build,children:(0,c.jsx)(x,{})})})]})})})]}),m.length>0&&(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"archive",children:(0,c.jsx)(r.Z,{id:"versionsPage.archived.title",children:"Past versions (Not maintained anymore)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(r.Z,{id:"versionsPage.archived.description",children:"Here you can find documentation for previous versions of PixiJS."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:m.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:e.version}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{to:e.docs,children:(0,c.jsx)(h,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(n.Z,{href:e.releaseNotes,children:(0,c.jsx)(j,{})})})]},e.version)))})})]})]})})}}}]);
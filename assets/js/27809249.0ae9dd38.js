"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[66902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},o="GSAP 3 Tick Director",c={unversionedId:"examples/gsap3-interaction/gsap3-tick",id:"examples/gsap3-interaction/gsap3-tick",title:"GSAP 3 Tick Director",description:"",source:"@site/docs/examples/gsap3-interaction/gsap3-tick.md",sourceDirName:"examples/gsap3-interaction",slug:"/examples/gsap3-interaction/gsap3-tick",permalink:"/examples/gsap3-interaction/gsap3-tick",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/gsap3-interaction/gsap3-tick.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"GSAP 2 Tint",permalink:"/examples/gsap2-interaction/gsap2-tint"},next:{title:"GSAP 3 Random Draw",permalink:"/examples/gsap3-interaction/gsap3-random-draw"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gsap-3-tick-director"},"GSAP 3 Tick Director"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// We stop Pixi ticker using stop() function because autoStart = false does NOT stop the shared ticker:\n// doc: http://pixijs.download/release/docs/PIXI.Application.html\napp.ticker.stop();\n\n// Now, we use 'tick' from gsap\ngsap.ticker.add(() => {\n    app.ticker.update();\n});\n\nconst container = new PIXI.Container();\n\napp.stage.addChild(container);\n\n// Create a new texture\nconst texture = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny.png');\n\n// Create a 5x5 grid of bunnies\nfor (let i = 0; i < 25; i++) {\n    const bunny = new PIXI.Sprite(texture);\n    bunny.anchor.set(0.5);\n    bunny.x = (i % 5) * 40;\n    bunny.y = Math.floor(i / 5) * 40;\n    container.addChild(bunny);\n}\n\n// Move container to the center\ncontainer.x = app.screen.width / 2;\ncontainer.y = app.screen.height / 2;\n\n// Center bunny sprite in local container coordinates\ncontainer.pivot.x = container.width / 2;\ncontainer.pivot.y = container.height / 2;\n\n// Listen for animate update\napp.ticker.add((delta) => {\n    // rotate the container!\n    // use delta to create frame-independent transform\n    container.rotation -= 0.01 * delta;\n});\n")))}u.isMDXComponent=!0}}]);
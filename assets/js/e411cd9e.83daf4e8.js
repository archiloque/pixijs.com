"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[48042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={hide_table_of_contents:!0},a="Pixie Shadow",s={unversionedId:"examples/filters-advanced/pixie-shadow-filter",id:"examples/filters-advanced/pixie-shadow-filter",title:"Pixie Shadow",description:"",source:"@site/docs/examples/filters-advanced/pixie-shadow-filter.md",sourceDirName:"examples/filters-advanced",slug:"/examples/filters-advanced/pixie-shadow-filter",permalink:"/examples/filters-advanced/pixie-shadow-filter",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-advanced/pixie-shadow-filter.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Custom Filter",permalink:"/examples/filters-advanced/custom"},next:{title:"Shadertoy filter",permalink:"/examples/filters-advanced/shadertoy-filter-rendertexture"}},p={},c=[],l={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pixie-shadow"},"Pixie Shadow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({\ndocument.body.appendChild(app.view);\n    autoStart: false,\n    background: '#1099bb',\n});\n\napp.stage.hitArea = app.screen;\napp.stage.interactive = true;\n\nPIXI.Assets.load('https://beta.pixijs.com/assets/pixi-spine/pixie.json').then(onAssetsLoaded);\n\nfunction onAssetsLoaded(spritesheet) {\n    const pixie = new PIXI.spine.Spine(spritesheet.spineData);\n\n    const scale = 0.3;\n\n    pixie.x = 1024 / 3;\n    pixie.y = 500;\n\n    pixie.scale.x = pixie.scale.y = scale;\n\n    app.stage.addChild(pixie);\n\n    pixie.stateData.setMix('running', 'jump', 0.2);\n    pixie.stateData.setMix('jump', 'running', 0.4);\n\n    pixie.state.setAnimation(0, 'running', true);\n\n    app.stage.on('pointerdown', onTouchStart);\n\n    function onTouchStart() {\n        pixie.state.setAnimation(0, 'jump', false);\n        pixie.state.addAnimation(0, 'running', true, 0);\n    }\n\n    const filter = new PIXI.Filter(myVertex, myFragment);\n    // first is the horizontal shift, positive is to the right\n    // second is the same as scaleY\n    filter.uniforms.shadowDirection = [0.4, 0.5];\n    filter.uniforms.floorY = 0.0;\n    // how big is max shadow shift to the side?\n    // try to switch that off ;)\n    filter.padding = 100;\n\n    pixie.filters = [filter];\n\n    app.ticker.add(() => {\n        // take ground Y in screen coords to uniforms\n        filter.uniforms.floorY = pixie.toGlobal(new PIXI.Point(0, 0)).y;\n    });\n\n    app.start();\n}\n\n// That's default v4 vertex shader, just in case\nconst myVertex = `\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n`;\n\nconst myFragment = `\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\nuniform vec2 shadowDirection;\nuniform float floorY;\n\nvoid main(void) {\n    //1. get the screen coordinate\n    vec2 screenCoord = vTextureCoord * inputSize.xy + outputFrame.xy;\n    //2. calculate Y shift of our dimension vector\n    vec2 shadow;\n    //shadow coordinate system is a bit skewed, but it has to be the same for screenCoord.y = floorY\n    float paramY = (screenCoord.y - floorY) / shadowDirection.y;\n    shadow.y = paramY + floorY;\n    shadow.x = screenCoord.x + paramY * shadowDirection.x;\n    vec2 bodyFilterCoord = (shadow - outputFrame.xy) * inputSize.zw; // same as / inputSize.xy\n\n    vec4 originalColor = texture2D(uSampler, vTextureCoord);\n    vec4 shadowColor = texture2D(uSampler, bodyFilterCoord);\n    shadowColor.rgb = vec3(0.0);\n    shadowColor.a *= 0.5;\n\n    // normal blend mode coefficients (1, 1-src_alpha)\n    // shadow is destination (backdrop), original is source\n    gl_FragColor = originalColor + shadowColor * (1.0 - originalColor.a);\n}\n`;\n")))}d.isMDXComponent=!0}}]);
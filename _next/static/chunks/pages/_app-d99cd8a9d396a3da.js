(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return l(6315)}])},7317:function(e,t){"use strict";t.Z={src:"/deepchem.github.io//_next/static/media/deepchem-logo.95f3f074.png",height:78,width:70,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyUlEQVR42g3Duy5EURSA4X+tvXMmGCGKqSca0Wt0JCqlRqJTKyQewAt4DA0egFYvmWhM4wFIGOM2Mfty1nK+5BOAz+tD9dfnfZKtemkmwN3P9AD9ON9Qe3o0kgy7l9Qw6LLcv9GIrChg/u0jquLWewAgqkSfIgDSxG1PBrXdBcaYqABMznYGUrny5A05vLULa0fAnwLw2576jCF58dZnsacvXydd5P14b5NUxtI29z73LZ/Tp4TqurQeqWRKvLBMIIcRRaqXYATjH/7LXF4U+ep8AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},2852:function(e,t,l){"use strict";l.d(t,{P:function(){return i},o:function(){return o}});var n=l(5893),r=l(7294);let i=(0,r.createContext)({isAnimationsEnabled:!1,setIsAnimationsEnabled:()=>null}),o=e=>{let{children:t}=e,[l,o]=(0,r.useState)(!1);return(0,n.jsx)(i.Provider,{value:{isAnimationsEnabled:l,setIsAnimationsEnabled:o},children:t})}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,l;var r,{src:i,sizes:m,unoptimized:b=!1,priority:v=!1,loading:j,className:y,quality:w,width:_,height:k,fill:C,style:A,onLoad:E,onLoadingComplete:S,placeholder:N="empty",blurDataURL:M,layout:O,objectFit:P,objectPosition:L,lazyBoundary:I,lazyRoot:R}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let z=a.useContext(d.ImageConfigContext),T=a.useMemo(()=>{let e=h||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),l=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:l})},[z]),B=D,U=B.loader||f.default;if(delete B.loader,"__next_img_default"in U){if("custom"===T.loader)throw Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=U;U=e=>{let{config:t}=e,l=o(e,["config"]);return F(l)}}if(O){"fill"===O&&(C=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];G&&(A=n({},A,G));let q={responsive:"100vw",fill:"100vw"}[O];q&&!m&&(m=q)}let W="",Z=g(_),K=g(k);if("object"==typeof(r=i)&&(p(r)||void 0!==r.src)){let X=p(i)?i.default:i;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(t=X.blurWidth,l=X.blurHeight,M=M||X.blurDataURL,W=X.src,!C){if(Z||K){if(Z&&!K){let H=Z/X.width;K=Math.round(X.height*H)}else if(!Z&&K){let Q=K/X.height;Z=Math.round(X.width*Q)}}else Z=X.width,K=X.height}}let V=!v&&("lazy"===j||void 0===j);((i="string"==typeof i?i:W).startsWith("data:")||i.startsWith("blob:"))&&(b=!0,V=!1),T.unoptimized&&(b=!0);let[Y,J]=a.useState(!1),[$,ee]=a.useState(!1),et=g(w),el=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:L}:{},$?{}:{color:"transparent"},A),en="blur"===N&&M&&!Y?{backgroundSize:el.objectFit||"cover",backgroundPosition:el.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:K,blurWidth:t,blurHeight:l,blurDataURL:M}),'")')}:{},er=function(e){let{config:t,src:l,unoptimized:n,width:r,quality:i,sizes:o,loader:a}=e;if(n)return{src:l,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,l){let{deviceSizes:n,allSizes:r}=e;if(l){let i=/(^|\s)(1?\d?\d)vw/g,o=[];for(let a;a=i.exec(l);a)o.push(parseInt(a[2]));if(o.length){let s=.01*Math.min(...o);return{widths:r.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,o),u=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,n)=>"".concat(a({config:t,src:l,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:l,quality:i,width:s[u]})}}({config:T,src:i,unoptimized:b,width:Z,quality:et,sizes:m,loader:U}),ei=i,eo={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:B.crossOrigin},ea=a.useRef(E);a.useEffect(()=>{ea.current=E},[E]);let es=a.useRef(S);a.useEffect(()=>{es.current=S},[S]);let ec=n({isLazy:V,imgAttributes:er,heightInt:K,widthInt:Z,qualityInt:et,className:y,imgStyle:el,blurStyle:en,loading:j,config:T,fill:C,unoptimized:b,placeholder:N,loader:U,srcString:ei,onLoadRef:ea,onLoadingCompleteRef:es,setBlurComplete:J,setShowAltText:ee},B);return a.default.createElement(a.default.Fragment,null,a.default.createElement(x,Object.assign({},ec)),v?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},eo))):null)};var n=l(6495).Z,r=l(2648).Z,i=l(1598).Z,o=l(7273).Z,a=i(l(7294)),s=r(l(3121)),c=l(2675),u=l(139),d=l(8730);l(7238);var f=r(l(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,l,r,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===l&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let x=e=>{var{imgAttributes:t,heightInt:l,widthInt:r,qualityInt:i,className:s,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:h,loading:p,srcString:g,config:x,unoptimized:b,loader:v,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,onLoad:k,onError:C}=e,A=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=d?"lazy":p,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},A,t,{width:r,height:l,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:p,style:n({},c,u),ref:a.useCallback(e=>{e&&(C&&(e.src=e.src),e.complete&&m(e,g,h,j,y,w,b))},[g,h,j,y,w,C,b]),onLoad(e){let t=e.currentTarget;m(t,g,h,j,y,w,b)},onError(e){_(!0),"blur"===h&&w(!0),C&&C(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(2648).Z,r=l(7273).Z,i=n(l(7294)),o=l(1003),a=l(7795),s=l(4465),c=l(2692),u=l(8245),d=l(9246),f=l(227),h=l(3468);let p=new Set;function g(e,t,l,n){if(o.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+l+"%"+r;if(p.has(i))return;p.add(i)}Promise.resolve(e.prefetch(t,l,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let x=i.default.forwardRef(function(e,t){let l,n;let{href:a,as:p,children:x,prefetch:b,passHref:v,replace:j,shallow:y,scroll:w,locale:_,onClick:k,onMouseEnter:C,onTouchStart:A,legacyBehavior:E=!0!==Boolean(!0)}=e,S=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);l=x,E&&("string"==typeof l||"number"==typeof l)&&(l=i.default.createElement("a",null,l));let N=!1!==b,M=i.default.useContext(c.RouterContext),O=i.default.useContext(u.AppRouterContext),P=null!=M?M:O,L=!M,{href:I,as:R}=i.default.useMemo(()=>{if(!M){let e=m(a);return{href:e,as:p?m(p):e}}let[t,l]=o.resolveHref(M,a,!0);return{href:t,as:p?o.resolveHref(M,p):l||t}},[M,a,p]),D=i.default.useRef(I),z=i.default.useRef(R);E&&(n=i.default.Children.only(l));let T=E?n&&"object"==typeof n&&n.ref:t,[B,U,F]=d.useIntersection({rootMargin:"200px"}),G=i.default.useCallback(e=>{(z.current!==R||D.current!==I)&&(F(),z.current=R,D.current=I),B(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[R,T,I,F,B]);i.default.useEffect(()=>{P&&U&&N&&g(P,I,R,{locale:_})},[R,I,U,_,N,null==M?void 0:M.locale,P]);let q={ref:G,onClick(e){E||"function"!=typeof k||k(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,l,n,r,a,s,c,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(l)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[r?"replace":"push"](l,n,{shallow:a,locale:c,scroll:s}):t[r?"replace":"push"](n||l,{forceOptimisticNavigation:!d})};u?i.default.startTransition(p):p()}(e,P,I,R,j,y,w,_,L,N)},onMouseEnter(e){E||"function"!=typeof C||C(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(N||!L)&&g(P,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof A||A(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(N||!L)&&g(P,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||v||"a"===n.type&&!("href"in n.props)){let W=void 0!==_?_:null==M?void 0:M.locale,Z=(null==M?void 0:M.isLocaleDomain)&&f.getDomainLocale(R,W,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);q.href=Z||h.addBasePath(s.addLocale(R,W,null==M?void 0:M.defaultLocale))}return E?i.default.cloneElement(n,q):i.default.createElement("a",Object.assign({},S,q),l)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:l,disabled:s}=e,c=s||!i,[u,d]=n.useState(!1),[f,h]=n.useState(null);n.useEffect(()=>{if(i){if(!c&&!u&&f&&f.tagName){let e=function(e,t,l){let{id:n,observer:r,elements:i}=function(e){let t;let l={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===l.root&&e.margin===l.margin);if(n&&(t=o.get(n)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;t&&l&&t(l)})},e);return t={id:l,observer:i,elements:r},a.push(l),o.set(l,t),t}(l);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),o.delete(n);let t=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&a.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:l});return e}}else if(!u){let n=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(n)}},[f,c,l,t,u]);let p=n.useCallback(()=>{d(!1)},[]);return[h,u,p]};var n=l(7294),r=l(4686);let i="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:l,blurWidth:n,blurHeight:r,blurDataURL:i}=e,o=n||t,a=r||l,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function l(e){let{config:t,src:l,width:n,quality:r}=e;return l.endsWith(".svg")&&!t.dangerouslyAllowSVG?l:"".concat(t.path,"?url=").concat(encodeURIComponent(l),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l.__next_img_default=!0,t.default=l},6315:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return j}});var n=l(5893),r=l(9008),i=l.n(r);l(2755),l(7475);var o=l(7294),a=l(1664),s=l.n(a);let c=e=>{let{link:t,icon:l,label:r,blank:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s(),{href:t,className:" transform hover:text-dc-light-blue text-lg flex items-center gap-2 py-1 font-poppins border-solid border-t-2 border-opacity-50 border-dc-white lg:hover:-translate-y-1 lg:flex-row lg:justify-between lg:border-none ",target:i?"_blank":"",children:[(0,n.jsx)("i",{className:"".concat(l," text-xl hidden xl:flex")}),r]})})},u=()=>(0,n.jsx)("nav",{className:"w-full",children:(0,n.jsxs)("ul",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10",children:[(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"About",link:"/about",icon:"fa-solid fa-circle-info",relative:!0})}),(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"Tutorials",link:"https://github.com/deepchem/deepchem/tree/master/examples/tutorials",icon:"fa-solid fa-book-open",blank:!0})}),(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"Forums",link:"https://forum.deepchem.io",icon:"fa-solid fa-users",blank:!0})}),(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"Discuss",link:"https://gitter.im/deepchem/Lobby",icon:"fa-brands fa-gitter",blank:!0})}),(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"Docs",link:"https://deepchem.readthedocs.io/en/latest/",icon:"fa-solid fa-book",blank:!0})}),(0,n.jsx)("li",{children:(0,n.jsx)(c,{label:"GitHub",link:"https://github.com/deepchem/deepchem",icon:"fa-brands fa-github",blank:!0})})]})});var d=l(5675),f=l.n(d),h=l(7317);let p=()=>(0,n.jsx)(s(),{href:"/",children:(0,n.jsxs)("div",{className:"logo flex flex-row items-center justify-around",children:[(0,n.jsx)(f(),{src:h.Z,alt:"DeepChem Logo",width:35,height:39}),(0,n.jsx)("p",{className:"font-medium text-2xl ml-2 font-poppins",children:"DeepChem"})]})}),g=()=>{let[e,t]=(0,o.useState)(!1);return(0,n.jsxs)("header",{className:"py-4 px-[25px] 2xl:px-[300px] bg-dc-gray text-dc-white flex flex-col justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,n.jsx)(p,{}),(0,n.jsx)("div",{className:"hidden lg:flex flex flex-row items-center",children:(0,n.jsx)(u,{})}),(0,n.jsx)("i",{className:"fa-solid ".concat(e?"fa-xmark":"fa-bars"," lg:hidden text-2xl cursor-pointer"),onClick:function(){t(!e)}})]}),(0,n.jsx)("div",{className:"".concat(e?"flex flex-col":"hidden"," lg:hidden mt-5"),children:(0,n.jsx)(u,{})})]})};var m=function(){return(0,n.jsxs)("footer",{className:"px-[25px] 2xl:px-[300px] bg-dc-gray py-8 flex flex-col text-dc-light-gray",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-center lg:justify-between text-sm lg:text-base flex-1",children:[(0,n.jsxs)("div",{className:"hidden lg:flex flex-col items-start gap-[0.5px]",children:[(0,n.jsx)(p,{}),(0,n.jsx)("p",{className:"mt-4",children:"Maintained by the DeepChem core team"}),(0,n.jsx)("p",{children:"Design by @kid-116"}),(0,n.jsx)("p",{children:"\xa9 DeepChem 2022"})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-8 lg:gap-20 items-start font-light",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)("p",{className:"mb-2 text-white font-normal lg:text-2xl text-lg",children:"DeepChem"}),(0,n.jsx)(s(),{href:"/#get-started",children:"Get Started"}),(0,n.jsx)(s(),{href:"/about",children:"About"}),(0,n.jsx)(s(),{href:"https://github.com/deepchem/deepchem/tree/master/examples/tutorials",target:"_blank",children:"Tutorials"}),(0,n.jsx)(s(),{href:"https://github.com/deepchem/deepchem/tree/master/examples",target:"_blank",children:"Projects"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)("p",{className:"mb-2 text-white font-normal lg:text-2xl text-lg",children:"Community"}),(0,n.jsx)(s(),{href:"https://github.com/deepchem/deepchem",target:"_blank",children:"Github"}),(0,n.jsx)(s(),{href:"https://forum.deepchem.io/",target:"_blank",children:"Forums"}),(0,n.jsx)(s(),{href:"https://gitter.im/deepchem/Lobby",target:"_blank",children:"Discuss"})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-1",children:[(0,n.jsx)("p",{className:"mb-2 text-white font-normal lg:text-2xl text-lg",children:"Socials"}),(0,n.jsx)(s(),{href:"https://www.linkedin.com/company/deep-forest-sciences/",target:"_blank",children:"LinkedIn"}),(0,n.jsx)(s(),{href:"https://www.facebook.com/groups/1362916627160962/",target:"_blank",children:"Facebook"}),(0,n.jsx)(s(),{href:"https://twitter.com/deep_chem?lang=en",target:"_blank",children:"Twitter"})]})]})]}),(0,n.jsx)("p",{className:"text-center mt-8 lg:hidden text-sm",children:"\xa9 Deepchem 2022"})]})};function x(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(m,{})]})}l(6873),l(5237),l(7743);var b=l(2852);let v=e=>{let{Component:t,pageProps:l}=e;return(0,n.jsxs)(b.o,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"DeepChem"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/deepchem.github.io/favicon.ico"})]}),(0,n.jsx)(x,{children:(0,n.jsx)(t,{...l})})]})};var j=v},7743:function(){},2755:function(){},5237:function(){},6873:function(){},7475:function(){},9008:function(e,t,l){e.exports=l(3121)},5675:function(e,t,l){e.exports=l(9749)},1664:function(e,t,l){e.exports=l(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);
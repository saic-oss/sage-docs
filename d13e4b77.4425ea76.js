(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),g=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return g}));var a=t(3),r=t(7),i=(t(0),t(104)),o={id:"sage-install-docker-engine",title:"Installing Sage On Docker Engine",hide_title:"Installing Sage On Docker Engine",sidebar_label:"Installing Sage On Docker Engine"},l={unversionedId:"sage-install-docker-engine",id:"sage-install-docker-engine",isDocsHomePage:!1,title:"Installing Sage On Docker Engine",description:"Installing Sage on Docker Engine",source:"@site/docs/sage-install-docker-engine.mdx",slug:"/sage-install-docker-engine",permalink:"/sage-docs/docs/sage-install-docker-engine",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/sage-install-docker-engine.mdx",version:"current",sidebar_label:"Installing Sage On Docker Engine",sidebar:"someSidebar",previous:{title:"Installing Sage to AWS ECS",permalink:"/sage-docs/docs/sage-install-ECS"},next:{title:"Installing Sage On Kubernetes",permalink:"/sage-docs/docs/sage-install-kubernetes"}},c=[{value:"Assumptions for Docker Engine Installation",id:"assumptions-for-docker-engine-installation",children:[]},{value:"Technical Requirements for Docker Engine Installation",id:"technical-requirements-for-docker-engine-installation",children:[]},{value:"Steps for Installing Sage in Docker Engine Environment",id:"steps-for-installing-sage-in-docker-engine-environment",children:[]},{value:"Configurations for Sage in Docker Engine Environment",id:"configurations-for-sage-in-docker-engine-environment",children:[]}],s={rightToc:c};function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"installing-sage-on-docker-engine"},"Installing Sage on Docker Engine"),Object(i.a)("h2",{id:"assumptions-for-docker-engine-installation"},"Assumptions for Docker Engine Installation"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"You are familiar with Docker Engine"),Object(i.a)("li",{parentName:"ul"},"Access to functional Docker Enginer Environment"),Object(i.a)("li",{parentName:"ul"},"Knowledge of use of Docker files"),Object(i.a)("li",{parentName:"ul"},"SSL Instructions have been completed ",Object(i.a)("strong",{parentName:"li"},Object(i.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(i.a)("h2",{id:"technical-requirements-for-docker-engine-installation"},"Technical Requirements for Docker Engine Installation"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Access to Docker Engine Environment"),Object(i.a)("li",{parentName:"ul"},"You must download and install an instance of ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://www.sonarqube.org/downloads/"}),"SonarQube"),". You may download either a Community, Developer or Enterprise Edition."),Object(i.a)("li",{parentName:"ul"},"If any of your source code is written in Cold Fusion, you must also download and install ",Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(i.a)("h2",{id:"steps-for-installing-sage-in-docker-engine-environment"},"Steps for Installing Sage in Docker Engine Environment"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Run Docker file...")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(i.a)("h2",{id:"configurations-for-sage-in-docker-engine-environment"},"Configurations for Sage in Docker Engine Environment"),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Environment Variables ???? (perhaps this should be somewhere else or isn't valid)")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))))}g.isMDXComponent=!0}}]);
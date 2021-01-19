(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(97)),i={id:"foresight-install-kubernetes",title:"Installing CloudScend Foresight On Kubernetes",hide_title:"Installing CloudScend Foresight On Kubernetes",sidebar_label:"Installing CloudScend Foresight On Kubernetes"},s={unversionedId:"foresight-install-kubernetes",id:"foresight-install-kubernetes",isDocsHomePage:!1,title:"Installing CloudScend Foresight On Kubernetes",description:"Installing CloudScend Foresight on Kubernetes",source:"@site/docs/foresight-install-kubernetes.mdx",slug:"/foresight-install-kubernetes",permalink:"/sage-docs/docs/foresight-install-kubernetes",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/foresight-install-kubernetes.mdx",version:"current",sidebar_label:"Installing CloudScend Foresight On Kubernetes"},l=[{value:"Assumptions for Kubernetes Installation",id:"assumptions-for-kubernetes-installation",children:[]},{value:"Technical Requirements for Kubernetes Installation",id:"technical-requirements-for-kubernetes-installation",children:[]},{value:"Steps for Installing CloudScend Foresight in Kubernetes Environment",id:"steps-for-installing-cloudscend-foresight-in-kubernetes-environment",children:[]},{value:"Configurations for CloudScend Foresight in Kubernetes Environment",id:"configurations-for-cloudscend-foresight-in-kubernetes-environment",children:[]},{value:"Troubleshooting and Support",id:"troubleshooting-and-support",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h1",{id:"installing-cloudscend-foresight-on-kubernetes"},"Installing CloudScend Foresight on Kubernetes"),Object(a.a)("h2",{id:"assumptions-for-kubernetes-installation"},"Assumptions for Kubernetes Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"You are familiar with Kubernetes"),Object(a.a)("li",{parentName:"ul"},"Access to Kubernetes Environment"),Object(a.a)("li",{parentName:"ul"},"SSL Instructions have been completed ",Object(a.a)("strong",{parentName:"li"},Object(a.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS"))),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h2",{id:"technical-requirements-for-kubernetes-installation"},"Technical Requirements for Kubernetes Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Access to functional Kubernetes Environment"),Object(a.a)("li",{parentName:"ul"},"You must download and install an instance of ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.sonarqube.org/downloads/"}),"SonarQube"),". You may download either a Community, Developer or Enterprise Edition."),Object(a.a)("li",{parentName:"ul"},"If any of your source code is written in ColdFusion, you must also download and install ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint"),"."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h2",{id:"steps-for-installing-cloudscend-foresight-in-kubernetes-environment"},"Steps for Installing CloudScend Foresight in Kubernetes Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Run file...")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h2",{id:"configurations-for-cloudscend-foresight-in-kubernetes-environment"},"Configurations for CloudScend Foresight in Kubernetes Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Environment Variables ???? (perhaps this should be somewhere else or isn't valid)")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h2",{id:"troubleshooting-and-support"},"Troubleshooting and Support"),Object(a.a)("p",null,"If you experience issues with your installation or need support with your CloudScend Foresight installation, please contact the CloudScend Foresight help desk by phone at 1-866-411-4227 \u2013 option 3 or email ",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"mailto:foresight-support@saic.com"}),"foresight-support@saic.com"),"."))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{104:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),p=function(e){var a=l.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),b=n,O=m["".concat(i,".").concat(b)]||m[b]||u[b]||r;return t?l.a.createElement(O,o(o({ref:a},c),{},{components:t})):l.a.createElement(O,o({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(3),l=t(7),r=(t(0),t(104)),i={id:"sage-install-EKS",title:"Installing Sage to Amazon EKS",hide_title:"Installing Sage to Amazon EKS",sidebar_label:"Installing Sage to Amazon EKS"},o={unversionedId:"sage-install-EKS",id:"sage-install-EKS",isDocsHomePage:!1,title:"Installing Sage to Amazon EKS",description:"Installing Sage to Amazon EKS",source:"@site/docs/sage-install-EKS.mdx",slug:"/sage-install-EKS",permalink:"/sage-docs/docs/sage-install-EKS",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/sage-install-EKS.mdx",version:"current",sidebar_label:"Installing Sage to Amazon EKS",sidebar:"someSidebar",previous:{title:"Introduction to Sage Environments",permalink:"/sage-docs/docs/sage-install-intro"},next:{title:"Installing Sage to AWS ECS",permalink:"/sage-docs/docs/sage-install-ECS"}},s=[{value:"Assumptions for Amazon EKS Installation",id:"assumptions-for-amazon-eks-installation",children:[]},{value:"Technical Requirements for Amazon EKS Installation",id:"technical-requirements-for-amazon-eks-installation",children:[]},{value:"Install Cluster Level Applications",id:"install-cluster-level-applications",children:[]},{value:"Configure Cluster Level Applications",id:"configure-cluster-level-applications",children:[]},{value:"Install Applications",id:"install-applications",children:[]},{value:"Troubleshooting and Support",id:"troubleshooting-and-support",children:[]}],c={rightToc:s};function p(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"installing-sage-to-amazon-eks"},"Installing Sage to Amazon EKS"),Object(r.a)("h2",{id:"assumptions-for-amazon-eks-installation"},"Assumptions for Amazon EKS Installation"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"You are familiar with Amazon EKS Environments"),Object(r.a)("li",{parentName:"ul"},"Access to functional Amazon EKS Environment"),Object(r.a)("li",{parentName:"ul"},"Knowledge of use of Helm files"),Object(r.a)("li",{parentName:"ul"},"SSL Instructions have been completed ",Object(r.a)("strong",{parentName:"li"},Object(r.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"technical-requirements-for-amazon-eks-installation"},"Technical Requirements for Amazon EKS Installation"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Access to Amazon EKS Environment"),Object(r.a)("li",{parentName:"ul"},"New Kubernetes Cluster 1.15+"),Object(r.a)("li",{parentName:"ul"},"kubectl",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Access via command-line"),Object(r.a)("li",{parentName:"ul"},"Master permissions"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-cluster-connection/"}),"https://aws.amazon.com/premiumsupport/knowledge-center/eks-cluster-connection/")))),Object(r.a)("li",{parentName:"ul"},"Helm",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"https://helm.sh/docs/intro/install/")))),Object(r.a)("li",{parentName:"ul"},"Helmfile",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/roboll/helmfile#installation"}),"https://github.com/roboll/helmfile#installation")))),Object(r.a)("li",{parentName:"ul"},"License Key"),Object(r.a)("li",{parentName:"ul"},"If processing Windows .NET Code (Reach out to SAIC for ReportsService Jar)"),Object(r.a)("li",{parentName:"ul"},"If any of your source code is written in Cold Fusion, you must also download and install ",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"install-cluster-level-applications"},"Install Cluster Level Applications"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Look over environment Variables"),Object(r.a)("li",{parentName:"ol"},"Replace certain variables"),Object(r.a)("li",{parentName:"ol"},"Run the following commands",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"set -a; source ","[nameOfEnvironmentFile]",".env; set +a;"),Object(r.a)("li",{parentName:"ul"},"helmfile --log-level debug --allow-no-matching-release sync"))),Object(r.a)("li",{parentName:"ol"},"Install Keycloak",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Pre-configure the Realm Cert"))),Object(r.a)("li",{parentName:"ol"},"Install Sonarqube",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Requires Keycloak configuration set and a restart"))),Object(r.a)("li",{parentName:"ol"},"Install Gitlab"),Object(r.a)("li",{parentName:"ol"},"SSO configuration requires Keycloak Realm Cert"),Object(r.a)("li",{parentName:"ol"},"Install Metabase"),Object(r.a)("li",{parentName:"ol"},"Install Elasticsearch"),Object(r.a)("li",{parentName:"ol"},"Install Kibana"),Object(r.a)("li",{parentName:"ol"},"Install Fluentd"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"configure-cluster-level-applications"},"Configure Cluster Level Applications"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Configure Sonarqube Access Token"),Object(r.a)("li",{parentName:"ol"},"Configure Gitlab Access Token"),Object(r.a)("li",{parentName:"ol"},"Configure Gitlab SSO w/ Keycloak"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"install-applications"},"Install Applications"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Install Reports Service Windows"),Object(r.a)("li",{parentName:"ol"},"Install Commondata + Database"),Object(r.a)("li",{parentName:"ol"},"Install Cast"),Object(r.a)("li",{parentName:"ol"},"Install HighlightAgent"),Object(r.a)("li",{parentName:"ol"},"Install Source Code Uploader"),Object(r.a)("li",{parentName:"ol"},"Install Reports Service"),Object(r.a)("li",{parentName:"ol"},"Install Sage Database, Sage API, Sage UI"),Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(r.a)("h2",{id:"troubleshooting-and-support"},"Troubleshooting and Support"),Object(r.a)("p",null,"If you experience issues with your installation or need support with your Sage installation, please refer to the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/sage-docs/docs/sage-operations-guide"}),"Sage Operations Guide"),"."))}p.isMDXComponent=!0}}]);
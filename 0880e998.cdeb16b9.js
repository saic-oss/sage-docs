(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return g})),t.d(a,"metadata",(function(){return h})),t.d(a,"rightToc",(function(){return N})),t.d(a,"default",(function(){return f}));var n=t(3),r=t(7),l=t(0),c=t.n(l),i=t(104),o=function(e){var a=e.httpMethod,t=e.url;return c.a.createElement("div",null,c.a.createElement("span",{className:"api-method"},a),c.a.createElement("span",{className:"api-url"},t))},p=t(115),s=t(106),b=t(63),u=t.n(b),d=37,O=39;var m=function(e){var a=e.lazy,t=e.block,n=e.children,r=e.defaultValue,i=e.values,o=e.groupId,b=e.className,m=Object(p.a)(),j=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(l.useState)(r),N=h[0],y=h[1];if(null!=o){var f=j[o];null!=f&&f!==N&&i.some((function(e){return e.value===f}))&&y(f)}var v=function(e){y(e),null!=o&&g(o,e)},T=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},i.map((function(e){var a=e.value,t=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===a,className:Object(s.a)("tabs__item",u.a.tabItem,{"tabs__item--active":N===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case O:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case d:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(T,e.target,e)},onFocus:function(){return v(a)},onClick:function(){v(a)}},t)}))),a?Object(l.cloneElement)(n.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},n.map((function(e,a){return Object(l.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))};var j=function(e){var a=e.children,t=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)},g={id:"sage-api-guide",title:"Sage API Guide",hide_title:"Sage API Guide",sidebar_label:"Sage API Guide"},h={unversionedId:"sage-api-guide",id:"sage-api-guide",isDocsHomePage:!1,title:"Sage API Guide",description:"Sage API Guide",source:"@site/docs/sage-api.mdx",slug:"/sage-api-guide",permalink:"/sage-docs/docs/sage-api-guide",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/sage-api.mdx",version:"current",sidebar_label:"Sage API Guide",sidebar:"someSidebar",previous:{title:"Managing Your Applications",permalink:"/sage-docs/docs/sage-managing-apps"},next:{title:"Troubleshooting and Support",permalink:"/sage-docs/docs/sage-troubleshooting"}},N=[{value:"Introduction",id:"introduction",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Base URL",id:"base-url",children:[]},{value:"Postman Collection",id:"postman-collection",children:[]},{value:"Application",id:"application",children:[{value:"Get Applications",id:"get-applications",children:[]},{value:"Get Application History",id:"get-application-history",children:[]}]},{value:"Source Code",id:"source-code",children:[{value:"Upload Source Code for an Application",id:"upload-source-code-for-an-application",children:[]},{value:"Get Code Analysis Status",id:"get-code-analysis-status",children:[]}]},{value:"Reports",id:"reports",children:[{value:"Get analysis reports for application and tag",id:"get-analysis-reports-for-application-and-tag",children:[]}]}],y={rightToc:N};function f(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},y,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"sage-api-guide"},"Sage API Guide"),Object(i.a)("h2",{id:"introduction"},"Introduction"),Object(i.a)("p",null,"The Sage API provides access to endpoints you can use to integrate into your own tools."),Object(i.a)("p",null,"The most important endpoints of the Sage API have been organized below into feature areas."),Object(i.a)("h2",{id:"authentication"},"Authentication"),Object(i.a)("p",null,"All endpoints require authentication. Sage uses OAuth2 for authentication and authorization of the API. OAuth2 is a protocol designed to let third-party applications authenticate to perform actions as a user, without getting the user's password. There are several libraries available that implement the protocol, and a good list can be found at the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://oauth.net/2/"}),"OAuth2")," home page. Through the use of OAuth2, you'll go through the process of obtaining a token and then you'll use that token in every request made to the Sage API to verify your identity."),Object(i.a)("p",null,"Sage API servers accept Bearer tokens through the HTTP Authorization header in requests."),Object(i.a)("h2",{id:"base-url"},"Base URL"),Object(i.a)("p",null,"All URLs referenced in the documentation start with a base URL variable which represents the protocol and host name of the applicable Sage API service. For example ",Object(i.a)("inlineCode",{parentName:"p"},"https://sage-api-backend.example.com"),"."),Object(i.a)("p",null,"The default ",Object(i.a)("inlineCode",{parentName:"p"},"baseURL")," variable should point to the Sage backend API service. ",Object(i.a)("inlineCode",{parentName:"p"},"sourceCodeUploaderBaseUrl")," should point to the Sage Source Code Uploader API service."),Object(i.a)("h2",{id:"postman-collection"},"Postman Collection"),Object(i.a)("p",null,"The quickest way to get started is to use our Postman request collection. The following steps will help you get up and running."),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Import the Sage Postman Collection")),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",{href:"pathname:///data/sage-api.postman_collection.json",download:!0,className:"button button--primary"},"Download Postman Collection")),Object(i.a)("li",{parentName:"ul"},"From Postman, Import -> Select downloaded sage postman collection"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Configure Postman Environment")),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Setup a new environment in Postman. Click New -> Environment."),Object(i.a)("li",{parentName:"ul"},"Name the new environment ",Object(i.a)("em",{parentName:"li"},"Sage API")),Object(i.a)("li",{parentName:"ul"},"Add the following variables:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"baseUrl: ",Object(i.a)("em",{parentName:"li"},"enter the Sage Backend API URL")),Object(i.a)("li",{parentName:"ul"},"sourceCodeUploaderBaseUrl: ",Object(i.a)("em",{parentName:"li"},"enter the Sage Source Code Uploader Base URL")),Object(i.a)("li",{parentName:"ul"},"loginBaseUrl: ",Object(i.a)("em",{parentName:"li"},"enter the Keycloak service base url")))),Object(i.a)("li",{parentName:"ul"},"Click Add to create"))),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},Object(i.a)("strong",{parentName:"p"},"Explore the API")),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Execute any of the requests within the collection"),Object(i.a)("li",{parentName:"ul"},"Refer to this documentation for the requirements of each method")))),Object(i.a)("h2",{id:"application"},"Application"),Object(i.a)("p",null,"This collection describes the important endpoints for working with Applications. Before doing any analysis in Sage you must first create an Application."),Object(i.a)("h3",{id:"get-applications"},"Get Applications"),Object(i.a)(o,{httpMethod:"GET",url:"{{baseUrl}}/sage/application/",mdxType:"ApiRequest"}),Object(i.a)("br",null),Object(i.a)("p",null,"Retrieves a list of applications the user has access to."),Object(i.a)("h4",{id:"example-response"},"Example Response"),Object(i.a)(m,{defaultValue:"response-body",values:[{label:"Body",value:"response-body"},{label:"Headers",value:"response-headers"}],mdxType:"Tabs"},Object(i.a)(j,{value:"response-body",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": -83970435,\n    "applicationId": "voluptate nostrud pariatur veniam adipisicing",\n    "applicationName": "dolor sit nisi",\n    "applicationUser": "dolore",\n    "projectManager": "elit incididunt mollit",\n    "functional": "ea commodo Ut ullamco",\n    "applicationLanguage": "TSQL",\n    "analysisStatus": "CODE_ANALYSIS_ERROR",\n    "artifactUrl": "enim in tempor eu dolor",\n    "appOwner": "dolor proident ut",\n    "surveyStatus": "laboris pariatu",\n    "cestatus": "CE_NOT_ATTEMPTED",\n    "programManager": "laborum et fugiat"\n  },\n  {\n    "id": -92365495,\n    "applicationId": "voluptate commodo velit",\n    "applicationName": "elit eiusmod esse",\n    "applicationUser": "in",\n    "projectManager": "Excepteur adipisicing Ut",\n    "functional": "officia in",\n    "applicationLanguage": "TYPESCRIPT",\n    "analysisStatus": "CODE_ANALYSIS_PROGRESS",\n    "artifactUrl": "eiusmod elit officia",\n    "appOwner": "lab",\n    "surveyStatus": "laborum eu in consectetur",\n    "cestatus": "CE_READY_WITH_NO_REPORT",\n    "programManager": "ut incididunt labore est Ut"\n  }\n]\n'))),Object(i.a)(j,{value:"response-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"application/json")))))),Object(i.a)("hr",null),Object(i.a)("h3",{id:"get-application-history"},"Get Application History"),Object(i.a)(o,{httpMethod:"GET",url:"{{baseUrl}}/sage/appHistoryList/:app-id",mdxType:"ApiRequest"}),Object(i.a)("br",null),Object(i.a)("p",null,"Retrieves a list of application versions including the version tag and source code upload timestamp. A new application version is created each time source code is uploaded."),Object(i.a)(m,{defaultValue:"req-params",values:[{label:"Params",value:"req-params"}],mdxType:"Tabs"},Object(i.a)(j,{value:"req-params",mdxType:"TabItem"},Object(i.a)("h5",{id:"path-variables"},"Path variables"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app-id"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Required)"))))),Object(i.a)(j,{value:"req-headers",mdxType:"TabItem"})),Object(i.a)("h4",{id:"example-response-1"},"Example Response"),Object(i.a)(m,{defaultValue:"response-body",values:[{label:"Body",value:"response-body"},{label:"Headers",value:"response-headers"}],mdxType:"Tabs"},Object(i.a)(j,{value:"response-body",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "appGlobalId": "tempor aliquip occaecat nulla ipsum",\n    "id": 38868107,\n    "gitTag": "mollit cillum",\n    "uploadTimestamp": "1978-12-24T07:54:29.663Z"\n  },\n  {\n    "appGlobalId": "sed dolor exercitation",\n    "id": 44339925,\n    "gitTag": "Excepteur",\n    "uploadTimestamp": "1949-08-13T12:25:44.757Z"\n  }\n]\n'))),Object(i.a)(j,{value:"response-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"application/json")))))),Object(i.a)("hr",null),Object(i.a)("h2",{id:"source-code"},"Source Code"),Object(i.a)("h3",{id:"upload-source-code-for-an-application"},"Upload Source Code for an Application"),Object(i.a)(o,{httpMethod:"POST",url:"{{sourceCodeUploaderBaseUrl}}/pupload/:appGlobalId",mdxType:"ApiRequest"}),Object(i.a)("br",null),Object(i.a)("p",null,"Stores a zip file containing an application's source code. Upon successful upload, check the status of processing the zip file contents using the Get Code Analysis Status endpoint."),Object(i.a)(m,{defaultValue:"req-params",values:[{label:"Params",value:"req-params"},{label:"Headers",value:"req-headers"},{label:"Body",value:"req-body"}],mdxType:"Tabs"},Object(i.a)(j,{value:"req-params",mdxType:"TabItem"},Object(i.a)("h5",{id:"path-variables-1"},"Path variables"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"appGlobalId"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Id (Required)"))))),Object(i.a)(j,{value:"req-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"multipart/form-data"))))),Object(i.a)(j,{value:"req-body",mdxType:"TabItem"},Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"formdata")),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"file"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"file"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"The zip file containing the application source code.")))))),Object(i.a)("h4",{id:"example-response-2"},"Example Response"),Object(i.a)(m,{defaultValue:"response-body",values:[{label:"Body",value:"response-body"},{label:"Headers",value:"response-headers"}],mdxType:"Tabs"},Object(i.a)(j,{value:"response-body",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "id": "0000-0000-0000-0000", "success": true, "message": "good to go" }\n'))),Object(i.a)(j,{value:"response-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"application/json")))))),Object(i.a)("hr",null),Object(i.a)("h3",{id:"get-code-analysis-status"},"Get Code Analysis Status"),Object(i.a)(o,{httpMethod:"GET",url:"{{baseUrl}}/sage/app-analysis/status/:appGlobalId",mdxType:"ApiRequest"}),Object(i.a)("br",null),Object(i.a)("p",null,"Returns the current source code analysis status for the latest source code version of an application."),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Code"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Meaning"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"READY_FOR_CODE_UPLOAD"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ready for source code upload"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"No source code has been uploaded for the application yet")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CODE_UPLOADED"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code uploaded"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code has been successfully uploaded but analysis has not started yet")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CODE_UPLOAD_ERROR"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Error uploading source code"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"An error occurred extracting the source code from the uploaded source code zip file")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CODE_ANALYSIS_PROGRESS"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analysis in progress"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code analysis is in progress")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CODE_ANALYSIS_DONE"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analysis results ready"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code analysis is complete")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CODE_ANALYSIS_ERROR"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code analysis error"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source code analysis failed processing.")))),Object(i.a)(m,{defaultValue:"req-params",values:[{label:"Params",value:"req-params"}],mdxType:"Tabs"},Object(i.a)(j,{value:"req-params",mdxType:"TabItem"},Object(i.a)("h5",{id:"path-variables-2"},"Path variables"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"appGlobalId"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Required)"))))),Object(i.a)(j,{value:"req-headers",mdxType:"TabItem"})),Object(i.a)("h4",{id:"example-response-3"},"Example Response"),Object(i.a)(m,{defaultValue:"response-body",values:[{label:"Body",value:"response-body"},{label:"Headers",value:"response-headers"}],mdxType:"Tabs"},Object(i.a)(j,{value:"response-body",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "appGlobalId": "ce791988-8161-4369-b744-57eb77311ef7",\n  "status": "CODE_ANALYSIS_ERROR"\n}\n'))),Object(i.a)(j,{value:"response-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"application/json")))))),Object(i.a)("hr",null),Object(i.a)("h2",{id:"reports"},"Reports"),Object(i.a)("h3",{id:"get-analysis-reports-for-application-and-tag"},"Get analysis reports for application and tag"),Object(i.a)(o,{httpMethod:"GET",url:"{{baseUrl}}/sage/reports/history/:app-id/:git-tag",mdxType:"ApiRequest"}),Object(i.a)("br",null),Object(i.a)("p",null,"Retrieves the analysis reports data for a given application and version (tag)."),Object(i.a)(m,{defaultValue:"req-params",values:[{label:"Params",value:"req-params"}],mdxType:"Tabs"},Object(i.a)(j,{value:"req-params",mdxType:"TabItem"},Object(i.a)("h5",{id:"path-variables-3"},"Path variables"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app-id"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Required)")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"git-tag"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Required)"))))),Object(i.a)(j,{value:"req-headers",mdxType:"TabItem"})),Object(i.a)("h4",{id:"example-response-4"},"Example Response"),Object(i.a)(m,{defaultValue:"response-body",values:[{label:"Body",value:"response-body"},{label:"Headers",value:"response-headers"}],mdxType:"Tabs"},Object(i.a)(j,{value:"response-body",mdxType:"TabItem"},Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "applicationId": "<string>",\n    "reportName": "<string>",\n    "s3Uri": "<string>",\n    "toolName": "<string>",\n    "id": "<long>",\n    "reportStatus": "<string>",\n    "effectiveDate": "<dateTime>",\n    "endDate": "<dateTime>",\n    "gitTag": "<string>"\n  },\n  {\n    "applicationId": "<string>",\n    "reportName": "<string>",\n    "s3Uri": "<string>",\n    "toolName": "<string>",\n    "id": "<long>",\n    "reportStatus": "<string>",\n    "effectiveDate": "<dateTime>",\n    "endDate": "<dateTime>",\n    "gitTag": "<string>"\n  }\n]\n'))),Object(i.a)(j,{value:"response-headers",mdxType:"TabItem"},Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(i.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content-Type"),Object(i.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"application/json")))))),Object(i.a)("hr",null))}f.isMDXComponent=!0},104:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,O=u["".concat(c,".").concat(d)]||u[d]||b[d]||l;return t?r.a.createElement(O,i(i({ref:a},p),{},{components:t})):r.a.createElement(O,i({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},106:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},115:function(e,a,t){"use strict";var n=t(0),r=t(116);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},116:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r}}]);
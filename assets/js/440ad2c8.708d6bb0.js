"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1050:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,id:"dw",title:"Configure Skill"},o=void 0,l={unversionedId:"examples/dw",id:"examples/dw",title:"Configure Skill",description:"Once you install the Digital Worker (DW), configure it before running for the first time.",source:"@site/docs/examples/dw.md",sourceDirName:"examples",slug:"/examples/dw",permalink:"/techwriter/docs/examples/dw",draft:!1,tags:[],version:"current",lastUpdatedAt:1697201830,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"dw",title:"Configure Skill"}},s={},p=[{value:"Credentials",id:"credentials",level:3},{value:"Input step",id:"input-step",level:3},{value:"Google API",id:"google-api",level:4},{value:"Investigation step",id:"investigation-step",level:3},{value:"Output step",id:"output-step",level:3},{value:"Review",id:"review",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Once you install the Digital Worker (DW), configure it before running for the first time."),(0,n.kt)("p",null,"You can configure multiple variations, or sets of parameters, for a DW. For example, a different media provider or a set of keywords per variation. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://example.com"},"release notes"),"."),(0,n.kt)("h3",{id:"credentials"},"Credentials"),(0,n.kt)("p",null,"Before setting the news providers, ensure you have obtained the corresponding license with credentials."),(0,n.kt)("p",null,"The following search providers are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Google API"),(0,n.kt)("li",{parentName:"ul"},"Dow Jones Factiva Headlines"),(0,n.kt)("li",{parentName:"ul"},"LexisNexis L&P News v1"),(0,n.kt)("li",{parentName:"ul"},"World-Check One")),(0,n.kt)("p",null,"You must acquire licenses and credentials for all providers except for Google API. The DW solution includes access to Google API at no additional cost."),(0,n.kt)("p",null,"You must first set up the above credentials in the Secrets Storage to use other providers besides Google API. For the step-by-step instructions, see this ",(0,n.kt)("a",{parentName:"p",href:"https://example.com"},"guide"),"."),(0,n.kt)("h3",{id:"input-step"},"Input step"),(0,n.kt)("p",null,"To set up your installed Digital Worker, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Control Tower")," menu, in the ",(0,n.kt)("strong",{parentName:"p"},"Digital Workers")," section, find your newly installed solution, and click the ",(0,n.kt)("strong",{parentName:"p"},"Prepare")," button."),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Prepare your digital worker")," window containing a configuration form appears.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the window, on the ",(0,n.kt)("strong",{parentName:"p"},"Input"),' step, select a news provider for searching for news about the entity or individual. "Google API" is set by default.'),(0,n.kt)("p",{parentName:"li"},"The required configurations may differ based on the selected news provider."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(4472).Z,width:"1022",height:"765"})))),(0,n.kt)("p",null,"The solution can return results from up to four providers at a time. When selecting several providers, each will appear in a separate, collapsible section. Review each section carefully to ensure all required parameters are configured correctly. Available parameters may vary by provider."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4244).Z,width:"1021",height:"766"})),(0,n.kt)("p",null,"See the following sections for a detailed description of the Google provider setting."),(0,n.kt)("h4",{id:"google-api"},"Google API"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4882).Z,width:"6650",height:"7367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Google API Credentials Location"),". Specify the corresponding Secret Storage alias for the Google API system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Article Language"),". Select the language of articles to search in. 'Any' language is used by default. You can also choose ",(0,n.kt)("strong",{parentName:"p"},"Keyword Language")," and its following options:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Shared")," creates a single input field for keywords."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Defined by keyword language")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Number of articles to extract"),". Specify the maximum number of reports to fetch from 1 to 20. By default, up to ",(0,n.kt)("strong",{parentName:"p"},"20")," articles are retrieved.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Search Time period"),". Select an option to find information published during a specific time frame. To specify the starting and the ending date for the articles' search, select ",(0,n.kt)("strong",{parentName:"p"},"Custom Range"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dynamic Location Search"),". Select to dynamically broaden the search location for an entity if no results were found.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keywords"),". Specify keywords to be used for the search. You can add a maximum of 28 words."),(0,n.kt)("p",{parentName:"li"},"  The following keywords are added by default based on the article languages you select:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"English:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"ACCUSE, ARREST, BRIBE, CONVICT, CORRUPT, COUNTERFEIT, CRIME, EMBEZZLEMENT, FRAUD, GUILT, ILLEGAL, INDICTMENT, INVESTIGATION, KICKBACK, MONEY LAUNDERING, NARCOTIC, PENALTY, SANCTION, SENTENCED, EVASION, TERRORIST, THEFT, TRAFFICKING, VIOLATION\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spanish:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"ACUSAR, ARRESTAR, SOBORNO, CORRUPTO, FALSIFICACI\xd3N, CRIMEN, MALVERSACI\xd3N, FRAUDE, CULPA, ILEGAL, ACUSACI\xd3N, INVESTIGACI\xd3N, CONTRAGOLPE, LAVADO DE DINERO, NARC\xd3TICO, MULTA, SANCI\xd3N, SENTENCIADO, EVASI\xd3N, TERRORISTA, ROBO, TR\xc1FICO, VIOLACI\xd3N\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enable Keyword Thesaurus"),". Activate to look not only for exact keywords but also for their synonyms. By default, the feature is turned on. Disable it if your organization requires only exact matches on all keywords.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"High-risk countries"),". Select countries from the dropdown or enter their names in the search field. The high-risk countries configured here are highlighted in articles returned from each investigation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"File types to exclude from results"),". Select the file types that you want to exclude from Google results:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML is included by default."),(0,n.kt)("li",{parentName:"ul"},"Non-HTML file types do not have the same metadata and tagging. Excluding them reduces the number of articles to review and false hits by 50% without increasing the risk of missing a true hit.")))),(0,n.kt)("p",null,"After setting the ",(0,n.kt)("strong",{parentName:"p"},"Input")," parameters, click ",(0,n.kt)("strong",{parentName:"p"},"Next")," to go to the following step of the wizard."),(0,n.kt)("h3",{id:"investigation-step"},"Investigation step"),(0,n.kt)("p",null,"In the following step, specify the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ML Model Version"),". Select the model version to use. The latest model is selected by default.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Identify Duplicate Articles"),". Select ",(0,n.kt)("strong",{parentName:"p"},"Yes")," to identify and group articles by the configurable similarity threshold. By default, the value is set to 50%.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Remove Legal Endings"),". Select ",(0,n.kt)("strong",{parentName:"p"},"Yes")," to remove legal endings from the company entities. Entities with common names or small businesses (LLCs, S corps) may receive more tailored results when the option is set to ",(0,n.kt)("strong",{parentName:"p"},"No"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Human-in-the-Loop"),". Select ",(0,n.kt)("strong",{parentName:"p"},"Yes")," to enable the Manual Review Step. If the option is on, configure the additional options:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Frequency of use"),". Specify how frequently a Manual Task is created when at least one result per entity is found."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Require users to disposition all articles"),". Select ",(0,n.kt)("strong",{parentName:"li"},"Yes")," if users are required to disposition all articles before closing an investigation in WorkSpace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatically route users to the next task"),". Select ",(0,n.kt)("strong",{parentName:"li"},"Yes")," to direct users to the next task in the queue. If the option is disabled, the users are always returned to the main queue list after closing or saving an assignment."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Number of submit investigation tasks"),'. When running the Launcher Business Process, specify how many "Submit Investigation Tasks" you want to create. One task is suggested for two or three analysts.'))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5637).Z,width:"1019",height:"763"})),(0,n.kt)("h3",{id:"output-step"},"Output step"),(0,n.kt)("p",null,"In the last step, specify the ",(0,n.kt)("strong",{parentName:"p"},"Output")," parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interface Language"),". Select the language of the final report and Manual Tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Report Format"),". Select the report file format for generating a screening request: HTML or PDF.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7983).Z,width:"6695",height:"4798"})),(0,n.kt)("h3",{id:"review"},"Review"),(0,n.kt)("p",null,"Once you complete the required fields, review the configuration. You can return to any step to change previous settings before finalizing. If everything looks correct, click ",(0,n.kt)("strong",{parentName:"p"},"Finish"),". You are now ready to use the Adverse Media Monitoring skill."))}m.isMDXComponent=!0},4472:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/amm-config-input-v3.3-e3abd81c253bc4844e86a660e31c7d4b.png"},5637:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/amm-config-investigation-b92b15524a0112815c02f7287fefe24b.png"},7983:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/amm-config-output-04b3a47efe3dbfca534c666671a3e832.jpg"},4882:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/amm-ui-google-input-e8d710b8ce4c5f1e3ba92972a03418eb.jpg"},4244:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-providers-65d6d8e0f2f6377a92d2773eb12656df.png"}}]);
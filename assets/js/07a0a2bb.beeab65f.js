"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,k=d["".concat(p,".").concat(h)]||d[h]||m[h]||s;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2,id:"access",title:"Grant access to Superset dashboards",tags:["Access & security"]},o=void 0,i={unversionedId:"examples/access",id:"examples/access",title:"Grant access to Superset dashboards",description:"Superset is an analytics tool that helps you monitor metrics related to Digital Workers. Superset is installed along the product, so you only need to configure access for users to start working with it. Once you install a new DW skill, its dashboard appears automatically in Control Tower.",source:"@site/docs/examples/access.md",sourceDirName:"examples",slug:"/examples/access",permalink:"/techwriter/docs/examples/access",draft:!1,tags:[{label:"Access & security",permalink:"/techwriter/docs/tags/access-security"}],version:"current",lastUpdatedAt:1689790593,formattedLastUpdatedAt:"Jul 19, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"access",title:"Grant access to Superset dashboards",tags:["Access & security"]}},p={},l=[{value:"Provide access to dashboards",id:"provide-access-to-dashboards",level:2},{value:"Set roles in Keycloak",id:"set-roles-in-keycloak",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Superset is an analytics tool that helps you monitor metrics related to Digital Workers. Superset is installed along the product, so you only need to configure access for users to start working with it. Once you install a new DW skill, its dashboard appears automatically in Control Tower."),(0,n.kt)("p",null,"To access Superset-based Digital Workers dashboards, in Control Tower, click the title, and in the dropdown box, click ",(0,n.kt)("strong",{parentName:"p"},"Insights"),"."),(0,n.kt)("p",null,"To verify that a dashboard is ready for use, as an admin user, check the connection to databases and datasets:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Superset main screen, click ",(0,n.kt)("strong",{parentName:"p"},"Settings")," > ",(0,n.kt)("strong",{parentName:"p"},"Database Connections"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Databases")," tab contains all your established connections to databases."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(3044).Z,width:"2322",height:"964"})),(0,n.kt)("p",{parentName:"li"},"  Click the ",(0,n.kt)("strong",{parentName:"p"},"Add Database")," (+) button to create a new connection."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Here, Superset syncs with your deployed ",(0,n.kt)("a",{parentName:"p",href:"https://example.com"},"Microsoft SQL server")," and imports data from its tables."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Datasets")," tab, you can find the uploaded ",(0,n.kt)("a",{parentName:"p",href:"https://example.com"},"datasets"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(1626).Z,width:"1738",height:"690"})))))),(0,n.kt)("h2",{id:"provide-access-to-dashboards"},"Provide access to dashboards"),(0,n.kt)("p",null,"Users must have access to both the data in dataset tables and the dashboard to see relevant analytics."),(0,n.kt)("p",null,"To provide access to data, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the Superset main screen, click ",(0,n.kt)("strong",{parentName:"p"},"Settings")," > ",(0,n.kt)("strong",{parentName:"p"},"Database Connections")," > the ",(0,n.kt)("strong",{parentName:"p"},"Datasets")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hold the pointer over the dataset line, and in the ",(0,n.kt)("strong",{parentName:"p"},"Action")," column, click the ",(0,n.kt)("strong",{parentName:"p"},"Pencil")," icon. The ",(0,n.kt)("strong",{parentName:"p"},"Edit dataset")," window appears."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5889).Z,width:"3456",height:"1012"})),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Alternatively, on the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard")," screen, click ",(0,n.kt)("strong",{parentName:"p"},"Edit dashboard")," > ",(0,n.kt)("strong",{parentName:"p"},"Edit properties"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the dataset window, go to the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," tab, and in the ",(0,n.kt)("strong",{parentName:"p"},"Owners")," box, add or remove the access group."),(0,n.kt)("p",{parentName:"li"},"Currently, there are two access groups available:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Superset admin")," has full access to the Keycloak and the dashboards. These users can select the dashboards and provide access to them for specific users in the ",(0,n.kt)("strong",{parentName:"li"},"read_only")," group."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"read_only")," users can only view dashboards but can't alter them. These users can see only the dashboards to which they have access.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(3837).Z,width:"1168",height:"1552"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,"To provide access to a dashboard, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Dashboards")," screen, find a desired dashboard in the table, hold the pointer over the dashboard line, and in the ",(0,n.kt)("strong",{parentName:"p"},"Action")," column, click the ",(0,n.kt)("strong",{parentName:"p"},"Pencil")," icon."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(9286).Z,width:"3456",height:"830"})),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Edit dashboard")," window appears.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Access")," group, in the ",(0,n.kt)("strong",{parentName:"p"},"Owners")," box, add or remove the access group the same way as for the datasets."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6273).Z,width:"1748",height:"1398"})))),(0,n.kt)("h2",{id:"set-roles-in-keycloak"},"Set roles in Keycloak"),(0,n.kt)("admonition",{title:"Only for on-premise installations",type:"important"}),(0,n.kt)("p",null,"Superset is automatically integrated with Keycloak and takes the roles and access permissions from there."),(0,n.kt)("p",null,"To check the existing roles, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Keycloak, on the main menu, in the ",(0,n.kt)("strong",{parentName:"p"},"Configure")," group, click ",(0,n.kt)("strong",{parentName:"p"},"Clients"),", and in the list, click the ",(0,n.kt)("strong",{parentName:"p"},"wf-superset")," client. The client window appears.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Roles")," tab."),(0,n.kt)("p",{parentName:"li"},"The existing roles are presented here. To create another one, click ",(0,n.kt)("strong",{parentName:"p"},"Create")," and follow the ",(0,n.kt)("a",{parentName:"p",href:"https://example.com"},"guide"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6738).Z,width:"2638",height:"1216"})))),(0,n.kt)("p",null,"To assign the read-only role to a specific user, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Keycloak main menu, in the ",(0,n.kt)("strong",{parentName:"p"},"Manage")," group, click ",(0,n.kt)("strong",{parentName:"p"},"Users"),". The users' list appears.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the list, click the user you want to assign a new Superset role and go to the ",(0,n.kt)("strong",{parentName:"p"},"Role Mappings")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Role Mappings"),", in the ",(0,n.kt)("strong",{parentName:"p"},"Client Roles")," box, select your client, here, ",(0,n.kt)("strong",{parentName:"p"},"wf-superset"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(516).Z,width:"3366",height:"1595"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Available Roles")," box, select the ",(0,n.kt)("strong",{parentName:"p"},"read-only")," role and click ",(0,n.kt)("strong",{parentName:"p"},"Add")," to move it to the ",(0,n.kt)("strong",{parentName:"p"},"Assigned Roles")," box."),(0,n.kt)("p",{parentName:"li"},"If the user logs in for the first time, Superset communicates with the Keycloak. If the person is valid, Keycloak displays the assigned roles and provides access to Superset."))))}m.isMDXComponent=!0},6273:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard_access-be1329e2ffbfe7313c635386900aafa1.png"},5889:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/edit-datasets-4763f5fa035e4b4a2f6b6dbe17d61c45.png"},516:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/role_mappings-71ad8cdea229afb8396d2c5076626853.png"},3837:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select_owners-77d6be6254cfade3a01f58e946a3203e.png"},1626:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/superset-dataset-78c8a92cc1e53a0bd422b987197d4baf.png"},3044:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/superset-db-5a322627d208598317030155a1742422.png"},9286:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/superset_dashboards-63c34ef53598c02314455a8256b8ada9.png"},6738:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wf_superset_roles-daf386fcbbaf62a653d7f1b3eba98afc.png"}}]);
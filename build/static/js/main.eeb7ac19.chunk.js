(this["webpackJsonpbunnings-connect-app"]=this["webpackJsonpbunnings-connect-app"]||[]).push([[0],{80:function(e,t,n){e.exports=n(95)},85:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i);n(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(30),l=n.n(c),u=n(23),s=n(39),m=n(72),p=n(44),d=n(27),f=n(37),h=n(18),g=n(31),v=n(13),E=n(57),b=n(127),w=n(137),y=n(128),k=n(98),O=n(130),j=n(136),S=n(138),x=n(134),T=n(131),I=n(75),_=n(126),C={light:"#8ad9eb",main:"#4ec6e0",dark:"#46AFC7",contrastText:"#FFFFFF"},M="#FFFFFF",z=(Object(I.a)({palette:{primary:Object(u.a)({},C),secondary:{main:_.a[500]}},overrides:{MuiTableCell:{sizeSmall:{padding:10}},MuiSvgIcon:{fontSizeSmall:{fontSize:"1rem"},fontSizeLarge:{fontSize:"2.5rem"}},MuiButton:{label:{textTransform:"none"},outlinedSecondary:{backgroundColor:"#ffffff","&:hover":{backgroundColor:"#ffffff",opacity:"80%"}}}}}),n(26)),A=n(42),F=n(36);function P(){var e=Object(A.a)(["\n  mutation createDeployment($input: CreateDeploymentInput!) {\n    createDeployment(input: $input) {\n      autoMerged\n      clientMutationId\n      deployment {\n        id\n        description\n        creator {\n          avatarUrl\n          login\n        }\n        commit {\n          id\n          message\n        }\n        state\n        payload\n        createdAt\n        updatedAt\n        environment\n        originalEnvironment\n        latestEnvironment\n      }\n    }\n  }\n"]);return P=function(){return e},e}function U(){var e=Object(A.a)(["\n  query repository($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      id\n      name\n      description\n      defaultBranchRef {\n        id\n        name\n      }\n      deployments(first: 100) {\n        nodes {\n          id\n          description\n          creator {\n            avatarUrl\n            login\n          }\n          commit {\n            id\n            message\n          }\n          state\n          payload\n          createdAt\n          updatedAt\n          environment\n\n          originalEnvironment\n          latestEnvironment\n        }\n      }\n      releases(first: 100) {\n        nodes {\n          author {\n            avatarUrl\n            login\n          }\n          createdAt\n          updatedAt\n          name\n          description\n        }\n      }\n    }\n  }\n"]);return U=function(){return e},e}function D(){var e=Object(A.a)(["\n  query organisation($organisation: String!, $after: String) {\n    organization(login: $organisation) {\n      repositories(\n        first: 100\n        affiliations: [ORGANIZATION_MEMBER]\n        ownerAffiliations: [ORGANIZATION_MEMBER]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n        after: $after\n      ) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return D=function(){return e},e}function N(){var e=Object(A.a)(["\n  query repositories($after: String) {\n    viewer {\n      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }, after: $after) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return N=function(){return e},e}function B(){var e=Object(A.a)(["\n  query {\n    viewer {\n      resourcePath\n      name\n      avatarUrl\n      organizations(first: 10) {\n        nodes {\n          resourcePath\n          name\n          avatarUrl\n        }\n      }\n    }\n  }\n"]);return B=function(){return e},e}var R=Object(F.a)(B()),$=Object(F.a)(N()),q=Object(F.a)(D()),J=Object(F.a)(U()),L=Object(F.a)(P()),G=Object(b.a)((function(e){return Object(w.a)({root:{fontSize:14,background:M,float:"right",marginRight:10,'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':{padding:"0 0 0 ".concat(e.spacing(1),"px")},"& .MuiInputBase-root":{fontSize:14,marginTop:-3,background:"#4ec6e0",padding:3.5,color:M,borderRadius:0},"& .MuiInputBase-input":{color:M},"& .MuiInputBase-input::placeholder":{color:M,opacity:1,fontSize:14}}})})),W=Object(v.h)((function(e){var t=Object(v.f)(),n=Object(z.b)(R),a=n.loading,i=n.error,o=n.data,c=r.a.useState(null),l=Object(E.a)(c,2),s=l[0],m=l[1];G();if(a)return r.a.createElement("div",{style:{float:"right",marginRight:50}},"Loading...");if(i)return r.a.createElement("div",{style:{float:"right",marginRight:50}},i.message);if(o){var p=[Object(u.a)(Object(u.a)({},o.viewer),{},{url:"/user"+o.viewer.resourcePath})];o.viewer.organizations.nodes.forEach((function(e){p.push(Object(u.a)(Object(u.a)({},e),{},{url:"/organisations"+e.resourcePath}))}));var d=p.find((function(t){return t.resourcePath==="/"+e.match.params.id}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:"nav","aria-label":"Select"},r.a.createElement(k.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){m(e.currentTarget)}},d?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{src:d.avatarUrl})),r.a.createElement(S.a,{primary:d.name})):r.a.createElement(S.a,{primary:"Select"}))),r.a.createElement(x.a,{id:"lock-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){m(null)}},p.map((function(e){return r.a.createElement(T.a,{key:e.url,selected:e===d,onClick:function(n){return a=e.url,m(null),void t.push(a);var a}},r.a.createElement(O.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{primary:e.name}))}))))}return r.a.createElement("div",{style:{float:"right",marginRight:50}},"no organisations")})),Z=function(){return r.a.createElement("div",null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/user/:id"},r.a.createElement(W,null)),r.a.createElement(v.a,{path:"/user/:id/*"},r.a.createElement(W,null)),r.a.createElement(v.a,{path:"/organisations/:id"},r.a.createElement(W,null)),r.a.createElement(v.a,{path:"/organisations/:id/*"},r.a.createElement(W,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(W,null))))},V=function(){var e=Object(z.b)(R),t=e.loading,n=e.error,a=e.data,i=Object(v.f)();return t?r.a.createElement("div",null,"Loading..."):n?r.a.createElement("div",null,n.message):a?r.a.createElement(y.a,{component:"nav"},r.a.createElement(k.a,{key:a.viewer.resourcePath,button:!0},r.a.createElement(O.a,null,r.a.createElement(j.a,{src:a.viewer.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return i.push("/user"+a.viewer.resourcePath)},primary:a.viewer.name})),a.viewer.organizations.nodes.map((function(e){return r.a.createElement(k.a,{key:e.resourcePath,button:!0},r.a.createElement(O.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return i.push("/organisations"+e.resourcePath)},primary:e.name}))}))):r.a.createElement("div",null,"no organisations")};var H=function(e){var t=Object(z.b)(e.query,{variables:Object(u.a)({after:e.after},e.variables)}),n=t.loading,a=t.error,i=t.data,o=Object(v.g)().url+"/",c=Object(v.f)();if(n)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(i){var l=e.map(i);return r.a.createElement(y.a,{component:"nav"},l.nodes.map((function(e){return r.a.createElement(k.a,{key:e.name,button:!0},r.a.createElement(S.a,{onClick:function(){return c.push(o+e.name)},primary:e.name}))})))}return r.a.createElement("div",null,"no repositories")},K=n(132),Q=n(135),X=n(133),Y=Object(v.h)((function(e){var t=Object(z.b)(J,{variables:{owner:e.match.params.owner,name:e.match.params.repository}}),n=t.loading,a=t.error,i=t.data,o=Object(z.a)(L),c=Object(E.a)(o,2),l=c[0];c[1].loading;if(n)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(i){var u=i.repository,s={autoMerge:!0,description:"test123",environment:"stage",payload:'{"extra": true}',refId:u.defaultBranchRef.id,repositoryId:u.id,requiredContexts:[],task:void 0};return r.a.createElement(K.a,{container:!0,spacing:3},r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement("h1",null,u.name)),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(Q.a,{name:"ref",value:"master"})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(Q.a,{name:"payload",value:"master"})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(Q.a,{name:"Environment",value:"production"})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(X.a,{onClick:function(){l({variables:{input:s}})}},"Deploy")))}return r.a.createElement(r.a.Fragment,null,"No repository not found")})),ee=Object(v.h)((function(e){var t=Object(v.g)().path;return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:t+"/:repository"},r.a.createElement(Y,null)),r.a.createElement(v.a,{path:t},r.a.createElement(H,{query:q,map:function(e){return e.organization.repositories},variables:{organisation:e.match.params.owner}})))})),te=function(){var e=Object(v.g)().path;return r.a.createElement(v.c,null,r.a.createElement(v.a,{path:e+"/:repository"},r.a.createElement(Y,null)),r.a.createElement(v.a,{path:e},r.a.createElement(H,{query:$,map:function(e){return e.viewer.repositories},variables:{}})))};n(93);var ne=function(e){var t=r.a.useMemo((function(){return function(e){var t=new f.a({uri:"https://api.github.com/graphql"}),n={link:Object(m.a)(function(){var t=Object(s.a)(l.a.mark((function t(n,a){var r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.headers,t.next=3,e;case 3:return t.t0=t.sent,t.next=6,(0,t.t0)();case 6:return i=t.sent,t.abrupt("return",{headers:Object(u.a)(Object(u.a)({},r),{},{Accept:"application/vnd.github.flash-preview+json",authorization:i?"Bearer ".concat(i):""})});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()).concat(t),cache:new p.a};return new d.a(n)}(e.getToken)}),[]);return r.a.createElement(h.a,{client:t},r.a.createElement(g.a,null,r.a.createElement(K.a,{container:!0,spacing:0,className:"topNav"},r.a.createElement(K.a,{item:!0,xs:4},r.a.createElement(y.a,{component:"nav","aria-label":"Select"},r.a.createElement(k.a,{button:!0,component:"a",href:"/"},r.a.createElement(O.a,null,r.a.createElement(j.a,{src:"https://github.com/identicons/app/app/deployment-management"})),r.a.createElement(S.a,{primary:"Github Deployment Management"})))),r.a.createElement(K.a,{item:!0,xs:4,className:"page-title"},"Github Deployment Management"),r.a.createElement(K.a,{item:!0,xs:2,className:"switcher"},r.a.createElement(Z,null))),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/organisations/:owner"},r.a.createElement(ee,null)),r.a.createElement(v.a,{path:"/user/:owner"},r.a.createElement(te,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(V,null)))))},ae=n(73),re=n(74),ie=window.localStorage.getItem("githubtoken"),oe=window.localStorage.getItem("githubstate");if(null===oe){var ce=new Uint32Array(4),le=window.crypto.getRandomValues(ce);oe=le.join(),window.localStorage.setItem("githubstate",oe)}var ue,se=window.location.search,me=new URLSearchParams(se).get("code"),pe=function(){window.location.href="https://github.com/login/oauth/authorize?client_id=Iv1.8b0b75bc0049753c&redirect_uri=http://localhost:3000&state=".concat(oe)},de=new(function(){function e(){Object(ae.a)(this,e),this.data=void 0}return Object(re.a)(e,[{key:"set",value:function(e){this.data=e}},{key:"intialize",value:function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).getUTCSeconds(),e.next=3,fetch("https://d2ks1w3r94.execute-api.us-east-2.amazonaws.com/",{method:"POST",body:JSON.stringify(t)});case 3:if((a=e.sent).ok){e.next=6;break}throw"Failed to get access token";case 6:return e.next=8,a.text();case 8:return r=e.sent,(i=JSON.parse(r)).expires_in+=n,i.refresh_token_expires_in+=n,this.data=i,window.localStorage.setItem("githubtoken",JSON.stringify(i)),e.abrupt("return",this.getToken);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:if(!(this.data.expires_in<(new Date).getUTCSeconds())){e.next=5;break}return e.next=5,this.refetchToken();case 5:return this.data.refresh_token_expires_in<(new Date).getUTCSeconds()&&pe(),e.abrupt("return",this.data.access_token);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refetchToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:return e.next=4,this.intialize({refresh_token:null===(t=this.data)||void 0===t?void 0:t.refresh_token,grant_type:"refresh_token"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}());if(null!==me){window.history.pushState({},document.title,window.location.pathname);var fe={code:me,state:oe,redirect_uri:"http://localhost:3000"};ue=de.intialize(fe)}else if(null===ie)pe(),ue=Promise.resolve((function(){return de.getToken()}));else{var he=JSON.parse(ie);void 0===he.access_token&&pe(),de.set(he),ue=Promise.resolve((function(){return de.getToken()}))}var ge=ue;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,{getToken:ge})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.eeb7ac19.chunk.js.map
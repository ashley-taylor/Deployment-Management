(this["webpackJsonpbunnings-connect-app"]=this["webpackJsonpbunnings-connect-app"]||[]).push([[0],{106:function(e,n,t){e.exports=t(120)},111:function(e,n,t){},119:function(e,n,t){},120:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),i=t.n(o);t(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(36),l=t.n(c),u=t(27),s=t(51),m=t(92),p=t(58),d=t(31),f=t(47),h=t(21),g=t(37),E=t(15),v=t(42),b=t(162),y=t(180),w=t(164),O=t(122),k=t(166),j=t(181),S=t(167),x=t(96),C=t(169),T=t(95),A=t(161),I={light:"#8ad9eb",main:"#4ec6e0",dark:"#46AFC7",contrastText:"#FFFFFF"},M="#FFFFFF",_=(Object(T.a)({palette:{primary:Object(u.a)({},I),secondary:{main:A.a[500]}},overrides:{MuiTableCell:{sizeSmall:{padding:10}},MuiSvgIcon:{fontSizeSmall:{fontSize:"1rem"},fontSizeLarge:{fontSize:"2.5rem"}},MuiButton:{label:{textTransform:"none"},outlinedSecondary:{backgroundColor:"#ffffff","&:hover":{backgroundColor:"#ffffff",opacity:"80%"}}}}}),t(29)),D=t(55),z=t(45);function P(){var e=Object(D.a)(["\n  mutation createDeployment($input: CreateDeploymentInput!) {\n    createDeployment(input: $input) {\n      autoMerged\n      clientMutationId\n      deployment {\n        id\n        description\n        creator {\n          avatarUrl\n          login\n        }\n        commit {\n          id\n          message\n        }\n        state\n        payload\n        createdAt\n        updatedAt\n        environment\n        originalEnvironment\n        latestEnvironment\n      }\n    }\n  }\n"]);return P=function(){return e},e}function B(){var e=Object(D.a)(['\n  query repository($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      id\n      name\n      description\n      defaultBranchRef {\n        id\n        name\n      }\n      branches: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/heads/") {\n        nodes {\n          id\n          name\n        }\n      }\n      tags: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/tags/") {\n        nodes {\n          id\n          name\n        }\n      }\n      deployments(first: 100, orderBy: { direction: DESC, field: CREATED_AT }) {\n        nodes {\n          id\n          description\n          creator {\n            avatarUrl\n            login\n          }\n          commit {\n            id\n            message\n          }\n          ref {\n            id\n            name\n          }\n          state\n          payload\n          createdAt\n          updatedAt\n          environment\n\n          originalEnvironment\n          latestEnvironment\n        }\n      }\n      releases(first: 100) {\n        nodes {\n          author {\n            avatarUrl\n            login\n          }\n          createdAt\n          updatedAt\n          name\n          description\n        }\n      }\n    }\n  }\n']);return B=function(){return e},e}function U(){var e=Object(D.a)(["\n  query organisation($organisation: String!, $after: String) {\n    organization(login: $organisation) {\n      repositories(\n        first: 100\n        affiliations: [ORGANIZATION_MEMBER]\n        ownerAffiliations: [ORGANIZATION_MEMBER]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n        after: $after\n      ) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return U=function(){return e},e}function R(){var e=Object(D.a)(["\n  query repositories($after: String) {\n    viewer {\n      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }, after: $after) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(D.a)(["\n  query {\n    viewer {\n      resourcePath\n      login\n      name\n      avatarUrl\n      organizations(first: 10) {\n        nodes {\n          resourcePath\n          name\n          avatarUrl\n        }\n      }\n    }\n  }\n"]);return F=function(){return e},e}var N=Object(z.a)(F()),$=Object(z.a)(R()),q=Object(z.a)(U()),L=Object(z.a)(B()),G=Object(z.a)(P()),J=Object(b.a)((function(e){return Object(y.a)({root:{fontSize:14,background:M,float:"right",marginRight:10,'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':{padding:"0 0 0 ".concat(e.spacing(1),"px")},"& .MuiInputBase-root":{fontSize:14,marginTop:-3,background:"#4ec6e0",padding:3.5,color:M,borderRadius:0},"& .MuiInputBase-input":{color:M},"& .MuiInputBase-input::placeholder":{color:M,opacity:1,fontSize:14}}})})),W=Object(E.h)((function(e){var n=Object(E.f)(),t=Object(_.b)(N),a=t.loading,o=t.error,i=t.data,c=r.a.useState(null),l=Object(v.a)(c,2),s=l[0],m=l[1];J();if(a)return r.a.createElement("div",{style:{float:"right",marginRight:50}},"Loading...");if(o)return r.a.createElement("div",{style:{float:"right",marginRight:50}},o.message);if(i){var p=[Object(u.a)(Object(u.a)({},i.viewer),{},{url:"/user"+i.viewer.resourcePath,name:i.viewer.name?i.viewer.name:i.viewer.login})];i.viewer.organizations.nodes.forEach((function(e){p.push(Object(u.a)(Object(u.a)({},e),{},{url:"/organisations"+e.resourcePath}))}));var d=p.find((function(n){return n.resourcePath==="/"+e.match.params.id}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:"nav","aria-label":"Select"},r.a.createElement(O.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){m(e.currentTarget)}},d?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(j.a,{src:d.avatarUrl})),r.a.createElement(S.a,{primary:d.name})):r.a.createElement(S.a,{primary:"Select"}))),r.a.createElement(x.a,{id:"lock-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){m(null)}},p.map((function(e){return r.a.createElement(C.a,{key:e.url,selected:e===d,onClick:function(t){return a=e.url,m(null),void n.push(a);var a}},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{primary:e.name}))}))))}return r.a.createElement("div",{style:{float:"right",marginRight:50}},"no organisations")})),Z=function(){return r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/user/:id"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/user/:id/*"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/organisations/:id"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/organisations/:id/*"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/"},r.a.createElement(W,null))))},Q=function(){var e=Object(_.b)(N),n=e.loading,t=e.error,a=e.data,o=Object(E.f)();return n?r.a.createElement("div",null,"Loading..."):t?r.a.createElement("div",null,t.message):a?r.a.createElement(w.a,{component:"nav"},r.a.createElement(O.a,{key:a.viewer.resourcePath,button:!0},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:a.viewer.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return o.push("/user"+a.viewer.resourcePath)},primary:a.viewer.name?a.viewer.name:a.viewer.login})),a.viewer.organizations.nodes.map((function(e){return r.a.createElement(O.a,{key:e.resourcePath,button:!0},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return o.push("/organisations"+e.resourcePath)},primary:e.name}))}))):r.a.createElement("div",null,"no organisations")};var V=function(e){var n=Object(_.b)(e.query,{variables:Object(u.a)({after:e.after},e.variables)}),t=n.loading,a=n.error,o=n.data,i=Object(E.g)().url+"/",c=Object(E.f)();if(t)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(o){var l=e.map(o);return r.a.createElement(w.a,{component:"nav"},l.nodes.map((function(e){return r.a.createElement(O.a,{key:e.name,button:!0},r.a.createElement(S.a,{onClick:function(){return c.push(i+e.name)},primary:e.name}))})))}return r.a.createElement("div",null,"no repositories")},H=t(70),K=t(170),X=t(182),Y=t(178),ee=t(179),ne=t(174),te=t(177),ae=t(171),re=t(172),oe=t(71),ie=t(173),ce=function(e){return r.a.createElement(K.a,{container:!0,spacing:3},e.deployments.map((function(n){return r.a.createElement(K.a,{item:!0,key:n.id,xs:12},r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement(oe.a,{color:"textSecondary",gutterBottom:!0},n.ref.name," - ",n.state),r.a.createElement(oe.a,{variant:"h5",component:"h2"},n.createdAt),r.a.createElement(oe.a,{color:"textSecondary"},n.environment),r.a.createElement(oe.a,{variant:"body2",component:"p"},r.a.createElement("pre",null,n.payload)),r.a.createElement(oe.a,{variant:"body2",component:"p"},r.a.createElement(j.a,{src:n.creator.avatarUrl}),n.creator.login)),r.a.createElement(ie.a,null,r.a.createElement(ne.a,{size:"small",onClick:function(){return e.redeploy(n)}},"Redeploy"))))})))},le=Object(E.h)((function(e){var n=Object(_.b)(L,{variables:{owner:e.match.params.owner,name:e.match.params.repository}}),t=n.loading,a=n.error,o=n.data,i=Object(_.a)(G,{refetchQueries:["repository"]}),c=Object(v.a)(i,2),l=c[0],u=c[1].loading,s=r.a.useState(""),m=Object(v.a)(s,2),p=m[0],d=m[1],f=r.a.useState(""),h=Object(v.a)(f,2),g=h[0],E=h[1],b=r.a.useState(""),y=Object(v.a)(b,2),w=y[0],O=y[1],k=r.a.useState(""),j=Object(v.a)(k,2),S=j[0],x=j[1],T=null===o||void 0===o?void 0:o.repository.defaultBranchRef.name;if(r.a.useEffect((function(){T&&d(T)}),[T]),t||u)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(o){var A=o.repository,I=Array.from(new Set(["-"].concat(Object(H.a)(o.repository.deployments.nodes.map((function(e){return e.environment})))))),M=Array.from(new Set([o.repository.defaultBranchRef].concat(Object(H.a)(o.repository.tags.nodes.map((function(e){return e}))),Object(H.a)(o.repository.branches.nodes.map((function(e){return e})))))),D=Array.from(new Set(o.repository.deployments.nodes.filter((function(e){return e.payload})).map((function(e){return e.payload})))),z=Array.from(new Set(o.repository.deployments.nodes.filter((function(e){return e.description})).map((function(e){return e.description})))),P={autoMerge:!0,description:g,environment:S,payload:w,refId:p,repositoryId:A.id,requiredContexts:[],task:void 0};return r.a.createElement(K.a,{container:!0,spacing:3},r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement("h1",null,A.name)),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(X.a,null,"Ref"),r.a.createElement(Y.a,{value:p,onChange:function(e){d(e.target.value)},fullWidth:!0},M.map((function(e){return r.a.createElement(C.a,{key:e.id,value:e.id},e.name)})))),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(te.a,{options:z,getOptionLabel:function(e){return e},value:g,onChange:function(e,n){n&&E(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{multiline:!0,label:"Description"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(te.a,{options:D,getOptionLabel:function(e){return e},value:w,onChange:function(e,n){n&&O(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{multiline:!0,label:"Payload"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(te.a,{options:I,getOptionLabel:function(e){return e},value:S,onChange:function(e,n){n&&x(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{label:"Environment"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(ne.a,{onClick:function(){l({variables:{input:P}})}},"Deploy")),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(ce,{deployments:o.repository.deployments.nodes,redeploy:function(e){d(e.ref.id),O(e.payload),x(e.environment)}})))}return r.a.createElement(r.a.Fragment,null,"No repository not found")})),ue=Object(E.h)((function(e){var n=Object(E.g)().path;return r.a.createElement(E.c,null,r.a.createElement(E.a,{path:n+"/:repository"},r.a.createElement(le,null)),r.a.createElement(E.a,{path:n},r.a.createElement(V,{query:q,map:function(e){return e.organization.repositories},variables:{organisation:e.match.params.owner}})))})),se=function(){var e=Object(E.g)().path;return r.a.createElement(E.c,null,r.a.createElement(E.a,{path:e+"/:repository"},r.a.createElement(le,null)),r.a.createElement(E.a,{path:e},r.a.createElement(V,{query:$,map:function(e){return e.viewer.repositories},variables:{}})))};t(119);var me=function(e){var n=r.a.useMemo((function(){return function(e){var n=new f.a({uri:"https://api.github.com/graphql"}),t={link:Object(m.a)(function(){var n=Object(s.a)(l.a.mark((function n(t,a){var r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.headers,n.next=3,e;case 3:return n.t0=n.sent,n.next=6,(0,n.t0)();case 6:return o=n.sent,n.abrupt("return",{headers:Object(u.a)(Object(u.a)({},r),{},{Accept:"application/vnd.github.flash-preview+json",authorization:o?"Bearer ".concat(o):""})});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()).concat(n),cache:new p.a};return new d.a(t)}(e.getToken)}),[]);return r.a.createElement(h.a,{client:n},r.a.createElement(g.a,null,r.a.createElement(K.a,{container:!0,spacing:0,className:"topNav"},r.a.createElement(K.a,{item:!0,xs:4},r.a.createElement(w.a,{component:"nav","aria-label":"Select"},r.a.createElement(O.a,{button:!0,component:"a",href:e.baseUrl},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:"https://github.com/identicons/app/app/deployment-management"})),r.a.createElement(S.a,{primary:"Github Deployment Management"})))),r.a.createElement(K.a,{item:!0,xs:4,className:"page-title"},"Github Deployment Management"),r.a.createElement(K.a,{item:!0,xs:2,className:"switcher"},r.a.createElement(Z,null))),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/organisations/:owner"},r.a.createElement(ue,null)),r.a.createElement(E.a,{path:"/user/:owner"},r.a.createElement(se,null)),r.a.createElement(E.a,{path:"/"},r.a.createElement(Q,null)))))},pe=t(93),de=t(94),fe=window.localStorage.getItem("githubtoken"),he=window.localStorage.getItem("githubstate");if(null===he){var ge=new Uint32Array(4),Ee=window.crypto.getRandomValues(ge);he=Ee.join(),window.localStorage.setItem("githubstate",he)}var ve=window.location.search,be=new URLSearchParams(ve).get("code"),ye=function(){window.location.href="https://github.com/login/oauth/authorize?client_id=Iv1.8b0b75bc0049753c&redirect_uri=https://ashley-taylor.github.io/Deployment-Management/&state=".concat(he)},we=new(function(){function e(){Object(pe.a)(this,e),this.data=void 0}return Object(de.a)(e,[{key:"set",value:function(e){this.data=e}},{key:"intialize",value:function(){var e=Object(s.a)(l.a.mark((function e(n){var t,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).getUTCSeconds(),e.next=3,fetch("https://d2ks1w3r94.execute-api.us-east-2.amazonaws.com/",{method:"POST",body:JSON.stringify(n)});case 3:if((a=e.sent).ok){e.next=6;break}throw"Failed to get access token";case 6:return e.next=8,a.text();case 8:return r=e.sent,(o=JSON.parse(r)).expires_in+=t,o.refresh_token_expires_in+=t,this.data=o,window.localStorage.setItem("githubtoken",JSON.stringify(o)),e.abrupt("return",this.getToken);case 15:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:if(!(this.data.expires_in<(new Date).getUTCSeconds())){e.next=5;break}return e.next=5,this.refetchToken();case 5:return this.data.refresh_token_expires_in<(new Date).getUTCSeconds()&&ye(),e.abrupt("return",this.data.access_token);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refetchToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:return e.next=4,this.intialize({refresh_token:null===(n=this.data)||void 0===n?void 0:n.refresh_token,grant_type:"refresh_token"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),Oe=function(e){var n;if(null!==be){window.history.pushState({},document.title,window.location.pathname);var t={code:be,state:he,redirect_uri:e};n=we.intialize(t)}else if(null===fe)ye(),n=Promise.resolve((function(){return we.getToken()}));else{var a=JSON.parse(fe);void 0===a.access_token&&ye(),we.set(a),n=Promise.resolve((function(){return we.getToken()}))}return n},ke="/Deployment-Management";ke||(ke="http://localhost:3000"),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,{getToken:Oe(ke),baseUrl:ke})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.0427e88a.chunk.js.map
(this["webpackJsonpdeployment-management"]=this["webpackJsonpdeployment-management"]||[]).push([[0],{107:function(e,n,t){e.exports=t(121)},112:function(e,n,t){},120:function(e,n,t){},121:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),i=t.n(o);t(112),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(37),l=t.n(c),u=t(30),s=t(51),m=t(93),d=t(58),p=t(33),f=t(48),h=t(21),g=t(38),E=t(15),v=t(40),b=t(162),y=t(182),w=t(164),O=t(123),k=t(166),j=t(183),S=t(167),x=t(97),C=t(169),A=t(96),T=t(161),I={light:"#8ad9eb",main:"#4ec6e0",dark:"#46AFC7",contrastText:"#FFFFFF"},M="#FFFFFF",_=(Object(A.a)({palette:{primary:Object(u.a)({},I),secondary:{main:T.a[500]}},overrides:{MuiTableCell:{sizeSmall:{padding:10}},MuiSvgIcon:{fontSizeSmall:{fontSize:"1rem"},fontSizeLarge:{fontSize:"2.5rem"}},MuiButton:{label:{textTransform:"none"},outlinedSecondary:{backgroundColor:"#ffffff","&:hover":{backgroundColor:"#ffffff",opacity:"80%"}}}}}),t(32)),D=t(55),U=t(46);function z(){var e=Object(D.a)(["\n  mutation createDeployment($input: CreateDeploymentInput!) {\n    createDeployment(input: $input) {\n      autoMerged\n      clientMutationId\n      deployment {\n        id\n        description\n        creator {\n          avatarUrl\n          login\n        }\n        commit {\n          id\n          message\n        }\n        state\n        payload\n        createdAt\n        updatedAt\n        environment\n        originalEnvironment\n        latestEnvironment\n      }\n    }\n  }\n"]);return z=function(){return e},e}function P(){var e=Object(D.a)(['\n  query repository($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      id\n      name\n      description\n      defaultBranchRef {\n        id\n        name\n      }\n      branches: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/heads/") {\n        nodes {\n          id\n          name\n        }\n      }\n      tags: refs(first: 100, orderBy: { direction: DESC, field: TAG_COMMIT_DATE }, refPrefix: "refs/tags/") {\n        nodes {\n          id\n          name\n        }\n      }\n      deployments(first: 100, orderBy: { direction: DESC, field: CREATED_AT }) {\n        nodes {\n          id\n          description\n          creator {\n            avatarUrl\n            login\n          }\n          commit {\n            id\n            message\n          }\n          ref {\n            id\n            name\n          }\n          state\n          payload\n          createdAt\n          updatedAt\n          environment\n\n          originalEnvironment\n          latestEnvironment\n        }\n      }\n      releases(first: 100) {\n        nodes {\n          author {\n            avatarUrl\n            login\n          }\n          createdAt\n          updatedAt\n          name\n          description\n        }\n      }\n    }\n  }\n']);return P=function(){return e},e}function B(){var e=Object(D.a)(["\n  query organisation($organisation: String!, $after: String) {\n    organization(login: $organisation) {\n      repositories(\n        first: 100\n        affiliations: [ORGANIZATION_MEMBER]\n        ownerAffiliations: [ORGANIZATION_MEMBER]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n        after: $after\n      ) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return B=function(){return e},e}function R(){var e=Object(D.a)(["\n  query repositories($after: String) {\n    viewer {\n      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }, after: $after) {\n        nodes {\n          name\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return R=function(){return e},e}function F(){var e=Object(D.a)(["\n  query {\n    viewer {\n      resourcePath\n      login\n      name\n      avatarUrl\n      organizations(first: 10) {\n        nodes {\n          resourcePath\n          name\n          avatarUrl\n        }\n      }\n    }\n  }\n"]);return F=function(){return e},e}var N=Object(U.a)(F()),$=Object(U.a)(R()),q=Object(U.a)(B()),L=Object(U.a)(P()),G=Object(U.a)(z()),J=Object(b.a)((function(e){return Object(y.a)({root:{fontSize:14,background:M,float:"right",marginRight:10,'& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':{padding:"0 0 0 ".concat(e.spacing(1),"px")},"& .MuiInputBase-root":{fontSize:14,marginTop:-3,background:"#4ec6e0",padding:3.5,color:M,borderRadius:0},"& .MuiInputBase-input":{color:M},"& .MuiInputBase-input::placeholder":{color:M,opacity:1,fontSize:14}}})})),W=Object(E.h)((function(e){var n=Object(E.f)(),t=Object(_.b)(N),a=t.loading,o=t.error,i=t.data,c=r.a.useState(null),l=Object(v.a)(c,2),s=l[0],m=l[1];J();if(a)return r.a.createElement("div",{style:{float:"right",marginRight:50}},"Loading...");if(o)return r.a.createElement("div",{style:{float:"right",marginRight:50}},o.message);if(i){var d=[Object(u.a)(Object(u.a)({},i.viewer),{},{url:"/user"+i.viewer.resourcePath,name:i.viewer.name?i.viewer.name:i.viewer.login})];i.viewer.organizations.nodes.forEach((function(e){d.push(Object(u.a)(Object(u.a)({},e),{},{url:"/organisations"+e.resourcePath}))}));var p=d.find((function(n){return n.resourcePath==="/"+e.match.params.id}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:"nav","aria-label":"Select"},r.a.createElement(O.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){m(e.currentTarget)}},p?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(j.a,{src:p.avatarUrl})),r.a.createElement(S.a,{primary:p.name})):r.a.createElement(S.a,{primary:"Select"}))),r.a.createElement(x.a,{id:"lock-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){m(null)}},d.map((function(e){return r.a.createElement(C.a,{key:e.url,selected:e===p,onClick:function(t){return a=e.url,m(null),void n.push(a);var a}},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{primary:e.name}))}))))}return r.a.createElement("div",{style:{float:"right",marginRight:50}},"no organisations")})),Z=function(){return r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/user/:id"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/user/:id/*"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/organisations/:id"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/organisations/:id/*"},r.a.createElement(W,null)),r.a.createElement(E.a,{path:"/"},r.a.createElement(W,null))))},Q=function(){var e=Object(_.b)(N),n=e.loading,t=e.error,a=e.data,o=Object(E.f)();return n?r.a.createElement("div",null,"Loading..."):t?r.a.createElement("div",null,t.message):a?r.a.createElement(w.a,{component:"nav"},r.a.createElement(O.a,{key:a.viewer.resourcePath,button:!0},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:a.viewer.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return o.push("/user"+a.viewer.resourcePath)},primary:a.viewer.name?a.viewer.name:a.viewer.login})),a.viewer.organizations.nodes.map((function(e){return r.a.createElement(O.a,{key:e.resourcePath,button:!0},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:e.avatarUrl})),r.a.createElement(S.a,{onClick:function(){return o.push("/organisations"+e.resourcePath)},primary:e.name}))}))):r.a.createElement("div",null,"no organisations")};var V=function(e){var n=Object(_.b)(e.query,{variables:Object(u.a)({after:e.after},e.variables)}),t=n.loading,a=n.error,o=n.data,i=Object(E.g)().url+"/",c=Object(E.f)();if(t)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(o){var l=e.map(o);return r.a.createElement(w.a,{component:"nav"},l.nodes.map((function(e){return r.a.createElement(O.a,{key:e.name,button:!0},r.a.createElement(S.a,{onClick:function(){return c.push(i+e.name)},primary:e.name}))})))}return r.a.createElement("div",null,"no repositories")},H=t(71),K=t(170),X=t(184),Y=t(179),ee=t(181),ne=t(180),te=t(174),ae=t(178),re=t(171),oe=t(172),ie=t(72),ce=t(173),le=function(e){return r.a.createElement(K.a,{container:!0,spacing:3},e.deployments.map((function(n){return r.a.createElement(K.a,{item:!0,key:n.id,xs:12},r.a.createElement(re.a,null,r.a.createElement(oe.a,null,r.a.createElement(ie.a,{color:"textSecondary",gutterBottom:!0},n.ref.name," - ",n.state),r.a.createElement(ie.a,{variant:"h5",component:"h2"},n.createdAt),r.a.createElement(ie.a,{color:"textSecondary"},n.environment),r.a.createElement(ie.a,{variant:"body2",component:"p"},r.a.createElement("pre",null,n.payload)),r.a.createElement(ie.a,{variant:"body2",component:"p"},r.a.createElement(j.a,{src:n.creator.avatarUrl}),n.creator.login)),r.a.createElement(ce.a,null,r.a.createElement(te.a,{size:"small",onClick:function(){return e.redeploy(n)}},"Redeploy"))))})))},ue=Object(E.h)((function(e){var n=Object(_.b)(L,{variables:{owner:e.match.params.owner,name:e.match.params.repository}}),t=n.loading,a=n.error,o=n.data,i=Object(_.a)(G,{refetchQueries:["repository"]}),c=Object(v.a)(i,2),l=c[0],u=c[1].loading,s=r.a.useState(""),m=Object(v.a)(s,2),d=m[0],p=m[1],f=r.a.useState(""),h=Object(v.a)(f,2),g=h[0],E=h[1],b=r.a.useState(""),y=Object(v.a)(b,2),w=y[0],O=y[1],k=r.a.useState(""),j=Object(v.a)(k,2),S=j[0],x=j[1],A=r.a.useState(!0),T=Object(v.a)(A,2),I=T[0],M=T[1],D=null===o||void 0===o?void 0:o.repository.defaultBranchRef.name;if(r.a.useEffect((function(){D&&p(D)}),[D]),t||u)return r.a.createElement("div",null,"Loading...");if(a)return r.a.createElement("div",null,a.message);if(o){var U=o.repository,z=Array.from(new Set(["-"].concat(Object(H.a)(o.repository.deployments.nodes.map((function(e){return e.environment})))))),P=Array.from(new Set([o.repository.defaultBranchRef].concat(Object(H.a)(o.repository.tags.nodes.map((function(e){return e}))),Object(H.a)(o.repository.branches.nodes.map((function(e){return e})))))),B=Array.from(new Set(o.repository.deployments.nodes.filter((function(e){return e.payload})).map((function(e){return e.payload})))),R=Array.from(new Set(o.repository.deployments.nodes.filter((function(e){return e.description})).map((function(e){return e.description})))),F={autoMerge:I,description:g,environment:S,payload:w,refId:d,repositoryId:U.id,requiredContexts:[],task:void 0};return r.a.createElement(K.a,{container:!0,spacing:3},r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement("h1",null,U.name)),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(X.a,null,"Ref"),r.a.createElement(Y.a,{value:d,onChange:function(e){p(e.target.value)},fullWidth:!0},P.map((function(e){return r.a.createElement(C.a,{key:e.id,value:e.id},e.name)})))),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(ae.a,{options:R,getOptionLabel:function(e){return e},value:g,onChange:function(e,n){n&&E(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{multiline:!0,label:"Description"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(ae.a,{options:B,getOptionLabel:function(e){return e},value:w,onChange:function(e,n){n&&O(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{multiline:!0,label:"Payload"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(ae.a,{options:z,getOptionLabel:function(e){return e},value:S,onChange:function(e,n){n&&x(n)},renderInput:function(e){return r.a.createElement(ee.a,Object.assign({},e,{label:"Environment"}))}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(X.a,null,"Auto Merge"),r.a.createElement(ne.a,{checked:I,onChange:function(e,n){M(n)}})),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(te.a,{onClick:function(){l({variables:{input:F}})}},"Deploy")),r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(le,{deployments:o.repository.deployments.nodes,redeploy:function(e){p(e.ref.id),O(e.payload),x(e.environment)}})))}return r.a.createElement(r.a.Fragment,null,"No repository not found")})),se=Object(E.h)((function(e){var n=Object(E.g)().path;return r.a.createElement(E.c,null,r.a.createElement(E.a,{path:n+"/:repository"},r.a.createElement(ue,null)),r.a.createElement(E.a,{path:n},r.a.createElement(V,{query:q,map:function(e){return e.organization.repositories},variables:{organisation:e.match.params.owner}})))})),me=function(){var e=Object(E.g)().path;return r.a.createElement(E.c,null,r.a.createElement(E.a,{path:e+"/:repository"},r.a.createElement(ue,null)),r.a.createElement(E.a,{path:e},r.a.createElement(V,{query:$,map:function(e){return e.viewer.repositories},variables:{}})))};t(120);var de=function(e){var n=r.a.useMemo((function(){return function(e){var n=new f.a({uri:"https://api.github.com/graphql"}),t={link:Object(m.a)(function(){var n=Object(s.a)(l.a.mark((function n(t,a){var r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.headers,n.next=3,e;case 3:return n.t0=n.sent,n.next=6,(0,n.t0)();case 6:return o=n.sent,n.abrupt("return",{headers:Object(u.a)(Object(u.a)({},r),{},{Accept:"application/vnd.github.flash-preview+json",authorization:o?"Bearer ".concat(o):""})});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()).concat(n),cache:new d.a};return new p.a(t)}(e.getToken)}),[]);return r.a.createElement(h.a,{client:n},r.a.createElement(g.a,{basename:e.baseUrl},r.a.createElement(K.a,{container:!0,spacing:0,className:"topNav"},r.a.createElement(K.a,{item:!0,xs:4},r.a.createElement(w.a,{component:"nav","aria-label":"Select"},r.a.createElement(O.a,{button:!0,component:"a",href:e.baseUrl},r.a.createElement(k.a,null,r.a.createElement(j.a,{src:"https://github.com/identicons/app/app/deployment-management"})),r.a.createElement(S.a,{primary:"Github Deployment Management"})))),r.a.createElement(K.a,{item:!0,xs:4,className:"page-title"},"Github Deployment Management"),r.a.createElement(K.a,{item:!0,xs:2,className:"switcher"},r.a.createElement(Z,null))),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/organisations/:owner"},r.a.createElement(se,null)),r.a.createElement(E.a,{path:"/user/:owner"},r.a.createElement(me,null)),r.a.createElement(E.a,{path:"/"},r.a.createElement(Q,null)))))},pe=t(94),fe=t(95),he=window.localStorage.getItem("githubstate");if(null===he){var ge=new Uint32Array(4),Ee=window.crypto.getRandomValues(ge);he=Ee.join(),window.localStorage.setItem("githubstate",he)}var ve=window.location.search,be=new URLSearchParams(ve).get("code"),ye=function(){var e=encodeURIComponent(window.location.toString());window.location.href="https://github.com/login/oauth/authorize?client_id=Iv1.8b0b75bc0049753c&redirect_uri=".concat(e,"&state=").concat(he)},we=new(function(){function e(){Object(pe.a)(this,e),this.data=void 0}return Object(fe.a)(e,[{key:"set",value:function(e){this.data=e}},{key:"intialize",value:function(){var e=Object(s.a)(l.a.mark((function e(n){var t,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).getUTCSeconds(),e.next=3,fetch("https://d2ks1w3r94.execute-api.us-east-2.amazonaws.com/",{method:"POST",body:JSON.stringify(n)});case 3:if((a=e.sent).ok){e.next=6;break}throw"Failed to get access token";case 6:return e.next=8,a.text();case 8:r=e.sent,(o=JSON.parse(r)).expires_in+=t,o.refresh_token_expires_in+=t,this.data=o,window.localStorage.setItem("githubtoken",JSON.stringify(o));case 14:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:if(!(this.data.expires_in<(new Date).getUTCSeconds())){e.next=5;break}return e.next=5,this.refetchToken();case 5:return this.data.refresh_token_expires_in<(new Date).getUTCSeconds()&&ye(),e.abrupt("return",this.data.access_token);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refetchToken",value:function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.data){e.next=2;break}throw"misconfigured";case 2:return e.next=4,this.intialize({refresh_token:null===(n=this.data)||void 0===n?void 0:n.refresh_token,grant_type:"refresh_token"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),Oe=function(){var e;if(null!==be){window.history.pushState({},document.title,window.location.pathname);var n={code:be,state:he,redirect_uri:window.location.toString()};e=we.intialize(n).then((function(){return Promise.resolve((function(){return we.getToken()}))}))}else ye(),e=Promise.resolve((function(){return we.getToken()}));return e},ke="/Deployment-Management";ke||(ke="http://localhost:3000"),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,{getToken:Oe(ke),baseUrl:ke})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.557682a6.chunk.js.map
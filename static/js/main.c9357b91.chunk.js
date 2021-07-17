(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,a,t){e.exports=t(156)},130:function(e,a,t){},131:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=(t(130),t(131),t(28)),i=t(14),s=t(25),u=t(40),m=t(88),d=t(73),p=t(136),E={isAuthenticated:!1,user:{},loading:!1},g={},b=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(d.a)({},e,{isAuthenticated:!p(a.payload),user:a.payload});case"USER_LOADING":return Object(d.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ERRORS":return a.payload;default:return e}}}),v=[m.a],f=Object(u.e)(b,{},Object(u.d)(u.a.apply(void 0,v))),h=t(57),y=t(36),j=t.n(y),O=function(e){e?j.a.defaults.headers.common.Authorization=e:delete j.a.defaults.headers.common.Authorization},w="https://search-job-tool-api.herokuapp.com/",N=function(e){return{type:"SET_CURRENT_USER",payload:e}},x=function(){return function(e){localStorage.removeItem("jwtToken"),O(!1),e(N({}))}},S=t(184),C=t(187),k=t(89),I=t.n(k);var A=function(){return r.a.createElement(S.a,null,r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"fullscreen"},r.a.createElement(C.a,{item:!0,display:{xs:"none",sm:"block"},md:7,className:"left-wrap"},r.a.createElement("img",{src:I.a,className:"landing-image",alt:"landing"})),r.a.createElement(C.a,{item:!0,xs:12,md:5,className:"right-wrap"},r.a.createElement("div",null,r.a.createElement("h2",{className:"landing-title"},"Search Job Tool","/searchJobToolFront/"),r.a.createElement("p",{className:"landing-strong-text"},"L'outil qui vous accompagne dans votre recherche d'emploi."),r.a.createElement("div",null,r.a.createElement("p",{className:"landing-text"},"Search Job Tool r\xe9volutionne la recherche de l'emploi et vous accompagne dans cette d\xe9marche solitaire."),r.a.createElement("p",{className:"landing-text"},"Votre meilleur compagnon pour vous retrouvez parmi la multitude d'offres et vous aider \xe0 saisir l'opportunit\xe9 de vos r\xeaves !"),r.a.createElement("p",{className:"landing-text"},"SJT facilite votre organisation personnelle !")),r.a.createElement("div",{className:"landing-button"},r.a.createElement("button",{className:"button-gradient"},"Start Now"))))))},R=t(93),T=t.n(R),P=t(94),W=t.n(P),F=t(95),U=t.n(F);var L=function(){return r.a.createElement(S.a,{fluid:!0},r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"bg-dark2"},r.a.createElement(C.a,{item:!0,xs:4,className:"right-wrap landing-card-text"},r.a.createElement("div",null,r.a.createElement("p",{className:"landing-strong-text"},"Une meilleure organisation pour un meilleur suivi !"),r.a.createElement("div",null,r.a.createElement("p",{className:"landing-text"},"Suiver facilement l'\xe9tat de vos candidatures ! Am\xe9liorer votre suivi personnel et gagner en efficacit\xe9 dans chacune de vos candidatures !"),r.a.createElement("p",{className:"landing-text"},"Ajouter une trace de votre candidature, v\xe9rifier l'\xe9tat de vos candidatures, retrouver le bon contact.")))),r.a.createElement(C.a,{item:!0,xs:8,className:"left-wrap"},r.a.createElement("img",{src:T.a,className:"landing-image",alt:"organisation"}))),r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"bg-dark2 landing-card"},r.a.createElement(C.a,{item:!0,xs:4,className:"left-wrap landing-card-text"},r.a.createElement("div",null,r.a.createElement("img",{src:W.a,className:"landing-image",alt:"interview"}))),r.a.createElement(C.a,{item:!0,xs:8,className:"right-wrap landing-card-text"},r.a.createElement("div",null,r.a.createElement("p",{className:"landing-strong-text"},"Gagner en efficacit\xe9 !"),r.a.createElement("div",null,r.a.createElement("p",{className:"landing-text"},"Soyez mieux pr\xe9parer en ayant sous la main toutes les informations n\xe9cessaires."),r.a.createElement("p",{className:"landing-text"},"Todo : dataviz(repartition des candidatures par statut), calendrier rendez-vous, espace interview (card de questions \xe0 pr\xe9parer)",r.a.createElement("br",null),"Bonus : int\xe9gration api indeed etc, espace recruteur, espace offre, espace cvtheque"))))),r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:"bg-dark2 landing-card-foot"},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement("div",null,"Success !"),r.a.createElement("div",null,r.a.createElement("img",{src:U.a,className:"landing-card-image",alt:"success"})))))};var _=function(){return r.a.createElement(S.a,null,r.a.createElement(A,null),r.a.createElement(L,null))},D=t(189),q=t(190),B=t(54),G=t(191),J=t(188),z=Object(J.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundColor:"#222431 "},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1,color:"white"},link:{margin:e.spacing(1,1.5)}}}));var V=Object(s.b)((function(e){return{auth:e.auth}}),{logoutUser:x})((function(e){var a=z();return r.a.createElement(D.a,{position:"static",color:"default",elevation:0,className:a.appBar},r.a.createElement(q.a,{className:a.toolbar},r.a.createElement(B.a,{variant:"h6",noWrap:!0,className:a.toolbarTitle},r.a.createElement(c.b,{to:"/",className:"navbar nav-menu"},"Job Search Tool")),r.a.createElement("nav",null,r.a.createElement(c.b,{variant:"button",to:"/",className:"navbar nav-menu"},"Features"),r.a.createElement(c.b,{variant:"button",to:"/",className:"navbar nav-menu"},"Enterprise"),r.a.createElement(c.b,{variant:"button",to:"/",className:"navbar nav-menu"},"Support")),e.auth.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{onClick:function(a){a.preventDefault(),e.logoutUser()},variant:"contained",className:"navbar navbar-button"},"Logout")),!e.auth.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{component:c.b,to:"/register",variant:"outlined",className:"navbar navbar-button"},"Register"),r.a.createElement(G.a,{component:c.b,to:"/login",variant:"outlined",className:"navbar navbar-button"},"Login"))))})),H=t(12),M=t(216),$=t(209),K=t(194),Q=t(213),X=t(195),Y=t(211),Z=t(63),ee=t.n(Z),ae=Object(J.a)((function(e){return{paper:{paddingTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},input:{color:"white"},submit:{margin:e.spacing(3,0,2)}}}));var te=Object(s.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,a){return function(t){t({type:"GET_ERRORS",payload:""}),j.a.post("".concat(w,"api/users/register"),e).then((function(e){return a.push("/login")})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(i.g)((function(e){var a=ae(),t=Object(n.useState)(""),l=Object(H.a)(t,2),o=l[0],c=l[1],i=Object(n.useState)(""),s=Object(H.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(H.a)(d,2),E=p[0],g=p[1],b=Object(n.useState)(""),v=Object(H.a)(b,2),f=v[0],h=v[1],y=Object(n.useState)(!1),j=Object(H.a)(y,2),O=j[0],w=j[1];return Object(n.useEffect)((function(){e.auth.isAuthenticated&&e.history.push("/dashboard"),void 0===e.errors.name&&void 0===e.errors.email&&void 0===e.errors.password&&void 0===e.errors.password2||w(!0)}),[e.errors,e.auth,e.history]),r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),w(!1);var t={name:o,email:f,password:u,password2:E};e.registerUser(t,e.history)},className:"form form-auth",noValidate:!0},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(M.a,{className:a.avatar},r.a.createElement(ee.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h5"},"Register"),O&&e.errors.name&&r.a.createElement(Y.a,{severity:"error"},e.errors.name),O&&e.errors.email&&r.a.createElement(Y.a,{severity:"error"},e.errors.email),O&&e.errors.password&&r.a.createElement(Y.a,{severity:"error"},e.errors.password),O&&e.errors.password2&&r.a.createElement(Y.a,{severity:"error"},e.errors.password2)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{autoComplete:"uname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:o,onChange:function(e){return c(e.target.value)},autoFocus:!0})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:f,onChange:function(e){return h(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:u,onChange:function(e){return m(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",autoComplete:"confirm-password",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:E,onChange:function(e){return g(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(K.a,{control:r.a.createElement(Q.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(X.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))}))),ne=Object(J.a)((function(e){return{paper:{paddingTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},input:{color:"white"},submit:{margin:e.spacing(3,0,2)}}}));var re=Object(s.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(a){a({type:"GET_ERRORS",payload:""}),j.a.post("".concat(w,"api/users/login"),e).then((function(e){console.log(e);var t=e.data.token;localStorage.setItem("jwtToken",t),O(t);var n=Object(h.a)(t);a(N(n))})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})((function(e){var a=ne(),t=Object(n.useState)(""),l=Object(H.a)(t,2),o=l[0],c=l[1],i=Object(n.useState)(""),s=Object(H.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(null),p=Object(H.a)(d,2),E=p[0],g=p[1];return Object(n.useEffect)((function(){e.auth.isAuthenticated&&e.history.push("/dashboard"),void 0===e.errors.email&&void 0===e.errors.password&&void 0===e.errors.emailnotfound&&void 0===e.errors.passwordincorrect||g(!0)}),[e.errors,e.auth.isAuthenticated,e.history]),r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t={email:u,password:o};e.loginUser(t)},className:"form form-auth",noValidate:!0},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(M.a,{className:a.avatar},r.a.createElement(ee.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h5"},"Login"),E&&r.a.createElement(Y.a,{severity:"error"},e.errors.email,e.errors.password,e.errors.passwordincorrect,e.errors.emailnotfound)),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:u,onChange:function(e){return m(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement($.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",InputLabelProps:{className:a.input},InputProps:{className:a.input},value:o,onChange:function(e){return c(e.target.value)}}))),r.a.createElement(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Login"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(X.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))}));var le=t(196),oe=t(197),ce=t(217),ie=t(192),se=t(198),ue=t(210),me=t(199),de=t(102),pe=t.n(de),Ee=t(101),ge=t.n(Ee),be=t(96),ve=t.n(be),fe=t(97),he=t.n(fe),ye=t(98),je=t.n(ye),Oe=t(99),we=t.n(Oe),Ne=t(100),xe=t.n(Ne),Se=Object(J.a)({root:{"& > *":{borderBottom:"unset"}}});var Ce=function(e){var a=Object(n.useState)(e.item),t=Object(H.a)(a,2),l=t[0],o=(t[1],Object(n.useState)(!1)),c=Object(H.a)(o,2),i=c[0],s=c[1],u=Se();return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{className:u.root},r.a.createElement(oe.a,{align:"center",component:"th",scope:"item"},l.company),r.a.createElement(oe.a,{align:"center"},l.position),r.a.createElement(oe.a,{align:"center"},l.stack),r.a.createElement(oe.a,{align:"center"},l.comment),r.a.createElement(oe.a,{align:"center"},0===l.status&&r.a.createElement(ce.a,{label:"Non postul\xe9",icon:r.a.createElement(ve.a,null),variant:"outlined"}),1===l.status&&r.a.createElement(ce.a,{label:"En attente",icon:r.a.createElement(he.a,null),variant:"outlined",color:"primary"}),2===l.status&&r.a.createElement(ce.a,{label:"En discussion",icon:r.a.createElement(je.a,{style:{color:"#ffb74d"}}),variant:"outlined",style:{color:"#ffb74d",borderColor:"#ffb74d"}}),3===l.status&&r.a.createElement(ce.a,{label:"Refus\xe9",icon:r.a.createElement(we.a,{style:{color:"#f44336"}}),variant:"outlined",style:{color:"#f44336",borderColor:"#f44336"}}),4===l.status&&r.a.createElement(ce.a,{label:"Valid\xe9",icon:r.a.createElement(xe.a,{style:{color:"#4caf50"}}),variant:"outlined",style:{color:"#4caf50",borderColor:"#4caf50"}})),r.a.createElement(oe.a,null,r.a.createElement(ie.a,{"aria-label":"expand row",size:"small",onClick:function(){return s(!i)}},i?r.a.createElement(ge.a,null):r.a.createElement(pe.a,null)))),r.a.createElement(le.a,null,r.a.createElement(oe.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},r.a.createElement(se.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(ue.a,{margin:1},r.a.createElement(B.a,{variant:"h6",gutterBottom:!0,component:"div"},"History"),r.a.createElement(me.a,null,l.company,l.position,l.stack,l.link,l.contact))))))},ke=t(214),Ie=t(215),Ae=t(200),Re=t(201),Te=t(202),Pe=t(203),We=t(218),Fe=t(204),Ue=t(107),Le=t.n(Ue),_e=t(103),De=t.n(_e),qe=t(104),Be=t.n(qe),Ge=t(106),Je=t.n(Ge),ze=t(105),Ve=t.n(ze);function He(e){return r.a.createElement(Y.a,Object.assign({elevation:6,variant:"filled"},e))}var Me=[{value:"0",label:"Non postul\xe9"},{value:"1",label:"En attente"},{value:"2",label:"En discussion"},{value:"3",label:"Refus\xe9"},{value:"4",label:"Accept\xe9"}];var $e=function(e){var a=Object(n.useState)(!1),t=Object(H.a)(a,2),l=t[0],o=t[1],c=function(){o(!1)},i=Object(n.useState)(""),s=Object(H.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(H.a)(d,2),E=p[0],g=p[1],b=Object(n.useState)(""),v=Object(H.a)(b,2),f=v[0],h=v[1],y=Object(n.useState)(""),O=Object(H.a)(y,2),N=O[0],x=O[1],S=Object(n.useState)(""),k=Object(H.a)(S,2),I=k[0],A=k[1],R=Object(n.useState)(""),T=Object(H.a)(R,2),P=T[0],W=T[1],F=Object(n.useState)(""),U=Object(H.a)(F,2),L=U[0],_=U[1],D=Object(n.useState)("0"),q=Object(H.a)(D,2),B=q[0],J=q[1],z=Object(n.useState)(!1),V=Object(H.a)(z,2),M=V[0],K=V[1],Q=Object(n.useState)(""),X=Object(H.a)(Q,2),Y=X[0],Z=X[1],ee=function(e,a){"clickaway"!==a&&K(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{variant:"contained",color:"primary",onClick:function(){o(!0)}},"+"),r.a.createElement(ke.a,{open:M,autoHideDuration:6e3,onClose:ee},r.a.createElement(He,{onClose:ee,severity:"error"},Y)),r.a.createElement(Ie.a,{open:l,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ae.a,{id:"form-dialog-title"},"Subscribe"),r.a.createElement(Re.a,null,r.a.createElement(Te.a,null,"Add application"),r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"company",label:"Company",type:"text",InputProps:{startAdornment:r.a.createElement(Pe.a,{position:"start"},r.a.createElement(De.a,null))},fullWidth:!0,value:u,onChange:function(e){m(e.target.value)}}),r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"position",label:"Position",type:"text",fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Pe.a,{position:"start"},r.a.createElement(Be.a,null))},value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12,sm:4},r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"stack",label:"Stack",type:"text",InputProps:{startAdornment:r.a.createElement(Pe.a,{position:"start"},r.a.createElement(Ve.a,null))},value:f,onChange:function(e){h(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12,sm:4},r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"link",label:"Link",type:"text",InputProps:{startAdornment:r.a.createElement(Pe.a,{position:"start"},r.a.createElement(Je.a,null))},value:N,onChange:function(e){x(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12,sm:4},r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"contact",label:"Contact",type:"text",InputProps:{startAdornment:r.a.createElement(Pe.a,{position:"start"},r.a.createElement(Le.a,null))},value:I,onChange:function(e){A(e.target.value)}}))),r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,multiline:!0,rows:4,variant:"outlined",value:P,onChange:function(e){W(e.target.value)}}),r.a.createElement($.a,{autoFocus:!0,margin:"dense",id:"comment",label:"Comment",type:"text",fullWidth:!0,value:L,onChange:function(e){_(e.target.value)}}),r.a.createElement($.a,{autoFocus:!0,select:!0,margin:"dense",id:"status",label:"Status",type:"text",value:B,onChange:function(e){J(e.target.value)},fullWidth:!0},Me.map((function(e){return r.a.createElement(We.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement(Fe.a,null,r.a.createElement(G.a,{onClick:c,color:"primary"},"Cancel"),r.a.createElement(G.a,{onClick:function(a){a.preventDefault();var t,n,r={author:e.user.id,company:u,position:E,stack:f,link:N,contact:I,description:P,comment:L,status:B};t=r,n=function(a){console.log(a),400===a.status?(console.log(a.data.error),K(!0),Z(a.data.error)):200===a.status&&(console.log("blblblbl"),c(),m(""),g(""),h(""),x(""),A(""),W(""),_(""),J(""),e.onAddApplication())},j.a.post("".concat(w,"api/jobs/add"),{author:t.author,company:t.company,position:t.position,stack:t.stack,link:t.link,contact:t.contact,description:t.description,comment:t.comment,status:t.status}).then((function(e){console.log(e),200===e.status&&n(e)})).catch((function(e){console.log(e.response),n(e.response)}))},color:"primary"},"Add new application"))))},Ke=t(205),Qe=t(110),Xe=t(206),Ye=t(207),Ze=t(208);var ea=Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var a=e.auth.user,t=Object(n.useState)([]),l=Object(H.a)(t,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){var e,t;0===o.length&&(e=a,t=function(e){c(e)},j.a.get("".concat(w,"api/jobs"),{params:{author:e.id}}).then((function(e){200===e.status&&t(e.data)})).catch((function(e){console.log(e)})))}),[o,a]),r.a.createElement(ue.a,{pt:2},r.a.createElement(S.a,null,r.a.createElement(C.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:"test"},"Hello ",a.name),r.a.createElement(C.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",className:"test"},r.a.createElement("h2",null,"Mes candidatures"),r.a.createElement(C.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center"},r.a.createElement($e,{user:a,onAddApplication:function(){c([])}})))),r.a.createElement(S.a,null,r.a.createElement(Ke.a,{component:Qe.a},r.a.createElement(Xe.a,{"aria-label":"collapsible table"},r.a.createElement(Ye.a,null,r.a.createElement(le.a,null,r.a.createElement(oe.a,{align:"center"},"Company"),r.a.createElement(oe.a,{align:"center"},"Position"),r.a.createElement(oe.a,{align:"center"},"Stack"),r.a.createElement(oe.a,{align:"center"},"Comment"),r.a.createElement(oe.a,{align:"center"},"Status"),r.a.createElement(oe.a,null))),r.a.createElement(Ze.a,null,o.map((function(e){return r.a.createElement(Ce,{key:e._id,item:e})})))))))}));var aa=function(){return r.a.createElement(S.a,{className:"footer"},r.a.createElement("footer",null,"blblblb"))},ta=t(108),na=Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var a=e.component,t=e.auth,n=Object(ta.a)(e,["component","auth"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===t.isAuthenticated?r.a.createElement(a,e):r.a.createElement(i.a,{to:"/login"})}}))}));if(localStorage.jwtToken){var ra=localStorage.jwtToken;O(ra);var la=Object(h.a)(ra);f.dispatch(N(la));var oa=Date.now()/1e3;la.exp<oa&&(f.dispatch(x()),window.location.href="./login")}var ca=function(){return r.a.createElement(s.a,{store:f},r.a.createElement(c.a,{basename:"/searchJobToolFront"},r.a.createElement("div",{className:"app"},r.a.createElement(V,null),r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{exact:!0,path:"/",component:_}),r.a.createElement(i.b,{exact:!0,path:"/register",component:te}),r.a.createElement(i.b,{exact:!0,path:"/login",component:re}),r.a.createElement(i.d,null,r.a.createElement(na,{exact:!0,path:"/dashboard",component:ea}))),r.a.createElement(aa,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ca,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){e.exports=t.p+"static/media/home.0d1d09fc.svg"},93:function(e,a,t){e.exports=t.p+"static/media/organisation.3d22461b.svg"},94:function(e,a,t){e.exports=t.p+"static/media/interview.fb0df896.svg"},95:function(e,a,t){e.exports=t.p+"static/media/job.cd3a65e8.svg"}},[[125,1,2]]]);
//# sourceMappingURL=main.c9357b91.chunk.js.map
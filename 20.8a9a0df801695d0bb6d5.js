(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{PUb1:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),b=u("aCFN"),i=u("yM0y"),r=u("oBZk"),a=u("ZZ/e"),s=u("gIcY"),c=u("AytR"),d=u("t/Na"),p=function(){function n(n){this.http=n}return n.prototype.send=function(n){return this.http.post(c.a.apiEndpoint+"/users/feedback",n)},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(d.c))},token:n,providedIn:"root"}),n}(),f=u("k7jt"),h=function(){function n(n,l,u){this.formBuilder=n,this.feedbackService=l,this.notifyService=u,this.title="Share Your Feedback"}return n.prototype.ngOnInit=function(){this.buildForm()},n.prototype.buildForm=function(){this.form=this.formBuilder.group({feedback:["",[s.o.minLength(10)]]})},n.prototype.onSend=function(){var n=this;this.form.valid&&(console.log("form feedback submitted"),this.feedbackService.send(this.form.value).subscribe(function(l){return console.log("server feedback resp!",l),n.notifyService.show(l.ok?"You're the best! Thanks for helping \ud83d\ude01":"Error feedback not sent!")}))},n.prototype.onReset=function(){this.form.reset()},n}(),g=e.nb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-header",[["title","Feedback"]],null,null,null,b.b,b.a)),e.ob(1,114688,null,0,i.a,[],{title:[0,"title"]},null),(n()(),e.pb(2,0,null,null,34,"ion-content",[],null,null,null,r.cb,r.m)),e.ob(3,49152,null,0,a.u,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,32,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,o=n.component;return"submit"===l&&(t=!1!==e.yb(n,6).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.yb(n,6).onReset()&&t),"ngSubmit"===l&&(t=!1!==o.onSend()&&t),t},null,null)),e.ob(5,16384,null,0,s.q,[],null,null),e.ob(6,540672,null,0,s.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,s.a,null,[s.d]),e.ob(8,16384,null,0,s.k,[[4,s.a]],null,null),(n()(),e.pb(9,0,null,null,27,"ion-card",[],null,null,null,r.Z,r.f)),e.ob(10,49152,null,0,a.m,[e.h,e.k],null,null),(n()(),e.pb(11,0,null,0,6,"ion-card-header",[],null,null,null,r.W,r.h)),e.ob(12,49152,null,0,a.o,[e.h,e.k],null,null),(n()(),e.pb(13,0,null,0,4,"ion-card-title",[],null,null,null,r.Y,r.j)),e.ob(14,49152,null,0,a.q,[e.h,e.k],null,null),(n()(),e.pb(15,0,null,0,1,"ion-icon",[["name","chatboxes"]],null,null,null,r.ib,r.s)),e.ob(16,49152,null,0,a.C,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Fb(17,0,[" "," "])),(n()(),e.pb(18,0,null,0,18,"ion-card-content",[],null,null,null,r.V,r.g)),e.ob(19,49152,null,0,a.n,[e.h,e.k],null,null),(n()(),e.pb(20,0,null,0,13,"ion-item",[],null,null,null,r.pb,r.v)),e.ob(21,49152,null,0,a.H,[e.h,e.k],null,null),(n()(),e.pb(22,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.qb,r.A)),e.ob(23,49152,null,0,a.N,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Fb(-1,0,["Message"])),(n()(),e.pb(25,0,null,0,8,"ion-textarea",[["formControlName","feedback"],["placeholder","Tell me what you think of the app..."],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,27)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,27)._handleInputEvent(u.target.value)&&t),t},r.Cb,r.M)),e.ob(26,49152,null,0,a.xb,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"]},null),e.ob(27,16384,null,0,a.Nb,[e.k],null,null),e.ob(28,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Cb(1024,null,s.g,function(n){return[n]},[s.n]),e.Cb(1024,null,s.h,function(n){return[n]},[a.Nb]),e.ob(31,671744,null,0,s.c,[[3,s.a],[6,s.g],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),e.Cb(2048,null,s.i,null,[s.c]),e.ob(33,16384,null,0,s.j,[[4,s.i]],null,null),(n()(),e.pb(34,0,null,0,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,r.T,r.d)),e.ob(35,49152,null,0,a.k,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),e.Fb(-1,0,["Send"]))],function(n,l){var u=l.component;n(l,1,0,"Feedback"),n(l,6,0,u.form),n(l,16,0,"chatboxes"),n(l,23,0,"floating"),n(l,26,0,"Tell me what you think of the app...",""),n(l,28,0,""),n(l,31,0,"feedback"),n(l,35,0,!u.form.valid,"block","submit")},function(n,l){var u=l.component;n(l,4,0,e.yb(l,8).ngClassUntouched,e.yb(l,8).ngClassTouched,e.yb(l,8).ngClassPristine,e.yb(l,8).ngClassDirty,e.yb(l,8).ngClassValid,e.yb(l,8).ngClassInvalid,e.yb(l,8).ngClassPending),n(l,17,0,u.title),n(l,25,0,e.yb(l,28).required?"":null,e.yb(l,33).ngClassUntouched,e.yb(l,33).ngClassTouched,e.yb(l,33).ngClassPristine,e.yb(l,33).ngClassDirty,e.yb(l,33).ngClassValid,e.yb(l,33).ngClassInvalid,e.yb(l,33).ngClassPending)})}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-feedback-page",[],null,null,null,m,g)),e.ob(1,114688,null,0,h,[s.b,p,f.a],null,null)],function(n,l){n(l,1,0)},null)}var k=e.lb("app-feedback-page",h,y,{},{},[]),v=u("Ip0R"),w=u("PCNd"),C=u("ZYCi");u.d(l,"FeedbackModuleNgFactory",function(){return S});var S=e.mb(t,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[o.a,k]],[3,e.j],e.x]),e.wb(4608,v.m,v.l,[e.u,[2,v.w]]),e.wb(4608,a.b,a.b,[e.z,e.g]),e.wb(4608,a.Hb,a.Hb,[a.b,e.j,e.q,v.d]),e.wb(4608,a.Kb,a.Kb,[a.b,e.j,e.q,v.d]),e.wb(4608,s.r,s.r,[]),e.wb(4608,s.b,s.b,[]),e.wb(1073742336,v.c,v.c,[]),e.wb(1073742336,a.Db,a.Db,[]),e.wb(1073742336,s.p,s.p,[]),e.wb(1073742336,s.f,s.f,[]),e.wb(1073742336,s.m,s.m,[]),e.wb(1073742336,w.a,w.a,[]),e.wb(1073742336,C.o,C.o,[[2,C.u],[2,C.m]]),e.wb(1073742336,t,t,[]),e.wb(1024,C.k,function(){return[[{path:"",component:h}]]},[])])})}}]);
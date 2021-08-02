(self.webpackChunkclient=self.webpackChunkclient||[]).push([[422],{3422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AccountModule:()=>J});var n=r(1116),i=r(1462),o=r(7368),s=r(3230),l=r(8709),a=r(3722);let u=(()=>{class e{constructor(e,t,r){this.accountservice=e,this.router=t,this.activatedRoute=r}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new i.NI("",i.kI.required)})}onSubmit(){this.accountservice.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.B),o.Y36(l.F0),o.Y36(l.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return t.onSubmit()}),o.TgZ(3,"div",3),o.TgZ(4,"h1",4),o._uU(5,"Login"),o.qZA(),o.qZA(),o._UZ(6,"app-text-input",5),o._UZ(7,"app-text-input",6),o.TgZ(8,"button",7),o._uU(9," Sign in "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("formGroup",t.loginForm),o.xp6(4),o.Q6J("label","Email Address"),o.xp6(1),o.Q6J("label","Password")("type","password"),o.xp6(1),o.Q6J("disabled",t.loginForm.invalid))},directives:[i._Y,i.JL,i.sg,a.t,i.JJ,i.u],styles:[""]}),e})();var c=r(8318),p=r(8569),m=r(8470);function d(e){return!(0,m.k)(e)&&e-parseFloat(e)+1>=0}var g=r(6163);function b(e){const{index:t,period:r,subscriber:n}=e;if(n.next(t),!n.closed){if(-1===r)return n.complete();e.index=t+1,this.schedule(e,r)}}var f=r(878),h=r(4689),Z=r(9996);function v(e,t){if(1&e&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e)}}function w(e,t){if(1&e&&(o.TgZ(0,"ul",10),o.YNc(1,v,2,1,"li",11),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.errors)}}const x=[{path:"login",component:u},{path:"register",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.accountService=t,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[i.kI.required]],email:[null,[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[i.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(e=>{this.router.navigateByUrl("/shop")},e=>{console.log(e),this.errors=e.errors})}validateEmailNotTaken(){return e=>function(e=0,t,r){let n=-1;return d(t)?n=Number(t)<1?1:Number(t):(0,g.K)(t)&&(r=t),(0,g.K)(r)||(r=p.P),new c.y(t=>{const i=d(e)?e:+e-r.now();return r.schedule(b,i,{index:0,period:n,subscriber:t})})}(500).pipe((0,h.w)(()=>e.value?this.accountService.checkEmailExists(e.value).pipe((0,Z.U)(e=>e?{emailExists:!0}:null)):(0,f.of)(null)))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(i.qu),o.Y36(s.B),o.Y36(l.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return t.onSubmit()}),o.TgZ(3,"div",3),o.TgZ(4,"h1",4),o._uU(5,"Register"),o.qZA(),o.qZA(),o._UZ(6,"app-text-input",5),o._UZ(7,"app-text-input",6),o._UZ(8,"app-text-input",7),o.YNc(9,w,2,1,"ul",8),o.TgZ(10,"button",9),o._uU(11," Register "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("formGroup",t.registerForm),o.xp6(4),o.Q6J("label","Display Name"),o.xp6(1),o.Q6J("label","Email Address"),o.xp6(1),o.Q6J("label","Password")("type","password"),o.xp6(1),o.Q6J("ngIf",t.errors),o.xp6(1),o.Q6J("disabled",t.registerForm.invalid))},directives:[i._Y,i.JL,i.sg,a.t,i.JJ,i.u,n.O5,n.sg],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),e})();var q=r(5425);let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,y,q.m]]}),e})()}}]);
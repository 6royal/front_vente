"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[76],{2362:(b,p,s)=>{s.d(p,{J:()=>i});var t=s(4450),e=s(4438),d=s(3410),u=s(9950),h=s(177),l=s(1188);const g=n=>({subdrop:n}),m=(n,a)=>({"d-block":n,"d-none":a});function o(n,a){if(1&n&&(e.j41(0,"li")(1,"a",9),e.EFF(2),e.k0s()()),2&n){const r=a.$implicit;e.R7$(),e.Y8G("routerLink",r.routes),e.R7$(),e.JRh(r.title)}}function P(n,a){if(1&n){const r=e.RV6();e.j41(0,"li",5),e.bIt("click",function(){const _=e.eBV(r).$implicit,f=e.XpG();return e.Njj(f.toggleSubMenu(_))}),e.j41(1,"a",6),e.nrm(2,"i"),e.j41(3,"span"),e.EFF(4),e.k0s(),e.nrm(5,"span",7),e.k0s(),e.j41(6,"ul",8),e.Z7z(7,o,3,2,"li",null,e.fX1),e.k0s()()}if(2&n){const r=a.$implicit,c=e.XpG();e.Y8G("ngClass",e.eq3(7,g,r.expanded)),e.R7$(),e.AVh("active",c.page===r.page),e.R7$(),e.HbH(r.icon),e.R7$(2),e.JRh(r.title),e.R7$(2),e.Y8G("ngClass",e.l_i(9,m,r.expanded,!r.expanded)),e.R7$(),e.Dyx(r.subMenu)}}let i=(()=>{class n{constructor(r,c){this.common=r,this.setting=c,this.routes=t.J,this.base="",this.page="",this.last="",this.menuItems=[],this.common.base.subscribe(_=>{this.base=_}),this.common.page.subscribe(_=>{this.page=_}),this.common.last.subscribe(_=>{this.last=_}),this.menuItems=this.setting.settings_sidebar}toggleSubMenu(r){r.expanded=!r.expanded}static{this.\u0275fac=function(c){return new(c||n)(e.rXU(d.h),e.rXU(u.o))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-settings-sidebar"]],decls:8,vars:0,consts:[["id","sidebar2",1,"sidebars","settings-sidebar","stickybar"],[1,"sidebar-inner","slimscroll"],["id","sidebar-menu5",1,"sidebar-menu"],[1,"submenu-open"],[1,"submenu",3,"ngClass"],[1,"submenu",3,"click","ngClass"],["href","javascript:void(0);"],[1,"menu-arrow"],[3,"ngClass"],["routerLinkActive","active",3,"routerLink"]],template:function(c,_){1&c&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul")(4,"li",3)(5,"ul"),e.Z7z(6,P,9,12,"li",4,e.fX1),e.k0s()()()()()()),2&c&&(e.R7$(6),e.Dyx(_.menuItems))},dependencies:[h.YU,l.Wk,l.wQ],changeDetection:0})}}return n})()},3657:(b,p,s)=>{s.d(p,{G:()=>d});var t=s(1562),e=s(4438);let d=(()=>{class u{constructor(l){this.http=l,this.BASE_URL="http://localhost:8080/"}getAllProduct(){return this.http.get(this.BASE_URL+"api/products",{headers:this.createAuthorizationHeader()})}updateProduct(l){return this.http.put(`${this.BASE_URL}api/products/update/${l.id}`,l,{headers:this.createAuthorizationHeader()})}createProduct(l){return this.http.post(this.BASE_URL+"api/products/save",l,{headers:this.createAuthorizationHeader()})}createAuthorizationHeader(){const l=localStorage.getItem("jwt");if(l)return console.log("JWT token found in local storage:",l),(new t.Lr).set("Authorization",`Bearer ${l}`);console.log("JWT token not found in local storage")}static{this.\u0275fac=function(g){return new(g||u)(e.KVO(t.Qq))}}static{this.\u0275prov=e.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})()},4860:(b,p,s)=>{s.d(p,{B:()=>m});var t=s(4438),e=s(6414),d=s(177);const u=o=>({disabled:o});function h(o,P){if(1&o){const i=t.RV6();t.j41(0,"li",12),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage-2))}),t.j41(1,"a",13),t.EFF(2," ... "),t.k0s()()}if(2&o){const i=t.XpG(2);t.Y8G("hidden",1===i.currentPage)}}function l(o,P){if(1&o){const i=t.RV6();t.j41(0,"li",12),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage+2))}),t.j41(1,"a",13),t.EFF(2," ... "),t.k0s()()}if(2&o){const i=t.XpG(2);t.Y8G("hidden",i.currentPage>=i.pageNumberArray[i.pageNumberArray.length-2]||i.totalData<i.serialNumberArray[i.serialNumberArray.length-1])}}function g(o,P){if(1&o){const i=t.RV6();t.j41(0,"li",6)(1,"a",9),t.bIt("click",function(){const a=t.eBV(i).$implicit,r=t.XpG();return t.Njj(r.moveToPage(a))}),t.EFF(2),t.k0s()(),t.DNE(3,h,3,1,"li",11)(4,l,3,1,"li",11)}if(2&o){const i=P.$implicit,n=P.$index,a=t.XpG();t.AVh("active",i===a.currentPage),t.Y8G("ngClass",a.pageNumberArray[a.currentPage-2]>i&&1!==i&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<i&&1!==i&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==i?"hide-page-no":"show-page-no"),t.R7$(2),t.SpI(" ",i," "),t.R7$(),t.vxM(0===n&&a.pageNumberArray.length>6&&a.currentPage>2?3:-1),t.R7$(),t.vxM(n===a.pageNumberArray.length-2&&a.pageNumberArray.length>6?4:-1)}}let m=(()=>{class o{constructor(i){this.pagination=i,this.pageSize=10,this.tableData=[],this.lastIndex=0,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.tableData=[],this.pagination.calculatePageSize.subscribe(n=>{this.calculateTotalPages(n.totalData,n.pageSize,n.tableData,n.serialNumberArray),this.pageSize=n.pageSize}),this.pagination.changePagesize.subscribe(n=>{this.changePageSize(n.pageSize)})}getMoreData(i){"next"==i?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.pagination.tablePageSize.next({skip:this.skip,limit:this.limit,pageSize:this.pageSize})):"previous"==i&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.pagination.tablePageSize.next({skip:this.skip,limit:this.limit,pageSize:this.pageSize}))}moveToPage(i){this.currentPage=i,this.skip=this.pageSelection[i-1].skip,this.limit=this.pageSelection[i-1].limit,i>this.currentPage?this.pageIndex=i-1:i<this.currentPage&&(this.pageIndex=i+1),this.pagination.tablePageSize.next({skip:this.skip,limit:this.limit,pageSize:this.pageSize})}changePageSize(i){this.pageSelection=[],this.limit=i,this.skip=0,this.currentPage=1,this.pagination.tablePageSize.next({skip:this.skip,limit:this.limit,pageSize:this.pageSize})}calculateTotalPages(i,n,a,r){this.tableData=a,this.pageNumberArray=[],this.serialNumberArray=r,this.totalData=i,this.totalPages=i/n,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let c=1;c<=this.totalPages;c++){const _=n*c,f=_-n;this.pageNumberArray.push(c),this.pageSelection.push({skip:f,limit:_})}}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(e.m))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-custom-pagination"]],decls:17,vars:9,consts:[[1,"table-footer"],[1,"dataTables_length"],[1,"pagination"],[1,"entries"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],[1,"fa","fa-angle-left"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"fa","fa-angle-right"],[1,"page-item",3,"hidden"],[1,"page-item",3,"click","hidden"],["href","javascript:void(0);",1,"page-link"]],template:function(n,a){1&n&&(t.j41(0,"div",0)(1,"div",1),t.nrm(2,"label"),t.k0s(),t.j41(3,"div",2)(4,"div",3),t.EFF(5),t.k0s(),t.j41(6,"div",4)(7,"div",5)(8,"ul",2)(9,"li",6)(10,"a",7),t.bIt("click",function(){return a.getMoreData("previous")}),t.nrm(11,"i",8),t.k0s()(),t.Z7z(12,g,5,6,null,null,t.fX1),t.j41(14,"li",6)(15,"a",9),t.bIt("click",function(){return a.getMoreData("next")}),t.nrm(16,"i",10),t.k0s()()()()()()()),2&n&&(t.R7$(5),t.E5c(" ",a.serialNumberArray[0]," - ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," items "),t.R7$(4),t.Y8G("ngClass",t.eq3(5,u,1===a.currentPage)),t.R7$(3),t.Dyx(a.pageNumberArray),t.R7$(2),t.Y8G("ngClass",t.eq3(7,u,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.tableData.length)))},dependencies:[d.YU]})}}return o})()},1287:(b,p,s)=>{s.d(p,{m:()=>e.m}),s(4134);var e=s(6414)},3718:(b,p,s)=>{s.d(p,{W:()=>u});var t=s(8032),e=s.n(t),d=s(4438);let u=(()=>{class h{deleteBtn(){const g=e().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"me-2 btn btn-danger"},buttonsStyling:!1});g.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(m=>{m.isConfirmed?g.fire("Deleted!","Your file has been deleted.","success"):m.dismiss===e().DismissReason.cancel&&g.fire("Cancelled","Your imaginary file is safe :)","error")})}static{this.\u0275fac=function(m){return new(m||h)}}static{this.\u0275prov=d.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}}return h})()}}]);
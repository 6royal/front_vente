"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[80],{9699:(D,p,o)=>{o.r(p),o.d(p,{OtherSettingsModule:()=>V});var m=o(177),c=o(1188),e=o(4438);let b=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-other-settings"]],decls:1,vars:0,template:function(a,i){1&a&&e.nrm(0,"router-outlet")},dependencies:[c.n3]})}}return t})();var k=o(8032),u=o.n(k),h=o(9950),F=o(2798),j=o(6600),l=o(9417),C=o(4860),g=o(4823),v=o(2362);const f=()=>({standalone:!0}),E=(t,n)=>({"d-block":t,"d-none":n});function y(t,n){1&t&&e.nrm(0,"i",7)}function S(t,n){1&t&&e.nrm(0,"i",8)}function w(t,n){if(1&t&&(e.j41(0,"mat-option",36),e.EFF(1),e.k0s()),2&t){const s=n.$implicit;e.Y8G("value",s.value),e.R7$(),e.SpI(" ",s.value," ")}}function x(t,n){if(1&t&&(e.j41(0,"mat-option",36),e.EFF(1),e.k0s()),2&t){const s=n.$implicit;e.Y8G("value",s.value),e.R7$(),e.SpI(" ",s.value," ")}}function T(t,n){1&t&&e.nrm(0,"i",7)}function I(t,n){1&t&&e.nrm(0,"i",8)}const A=[{path:"",component:b,children:[{path:"ban-ip-address",component:(()=>{class t{constructor(s){this.sidebar=s,this.selectedValue1="",this.selectedValue2="",this.selectedList1=[{value:"Sort by Datee"},{value:"Newest"},{value:"Oldest"}],this.selectedList2=[{value:"Choose IP"},{value:"211.11.0.25"},{value:"211.03.0.11"}],this.isCollapsed=!1,this.filter=!1}toggleCollapse(){this.sidebar.toggleCollapse(),this.isCollapsed=!this.isCollapsed}openFilter(){this.filter=!this.filter}confirmColor(){const s=u().mixin({customClass:{confirmButton:" btn btn-success",cancelButton:"me-2 btn btn-danger"},buttonsStyling:!1});s.fire({title:"Are you sure?",text:"You won't be able to revert this!",confirmButtonText:"Yes, delete it!",showCancelButton:!0,cancelButtonText:"Cancel",reverseButtons:!0}).then(a=>{a.isConfirmed?s.fire("Deleted!","Your file has been deleted.","success"):a.dismiss===u().DismissReason.cancel&&s.fire("Cancelled","Your imaginary file is safe :)","error")})}static{this.\u0275fac=function(a){return new(a||t)(e.rXU(h.o))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-ban-ip-address"]],decls:227,vars:12,consts:[[1,"page-header","settings-pg-header"],[1,"add-item","d-flex"],[1,"page-title"],[1,"table-top-head"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Refresh","matTooltip","Refresh","matTooltipPosition","above"],[1,"feather","icon-rotate-ccw","feather-rotate-ccw"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Collapse","id","collapse-header","matTooltip","Collapse","matTooltipPosition","above",3,"click"],[1,"feather","icon-chevron-up","feather-chevron-up"],[1,"feather","icon-chevron-down","feather-chevron-down"],[1,"row"],[1,"col-xl-12"],[1,"settings-wrapper","d-flex"],[1,"settings-page-wrap","w-50"],[1,"setting-title"],[1,"page-header","bank-settings","justify-content-end"],[1,"page-btn"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#add-banip",1,"btn","btn-added"],[1,"feather","icon-plus-circle","me-2"],[1,"col-lg-12"],[1,"card","table-list-card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],["href","javascript:void(0);",1,"btn","btn-searchset"],[1,"feather","icon-search","feather-search"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control"],[1,"search-path"],[1,"d-flex","align-items-center"],["id","filter_search",1,"btn","btn-filter",3,"click"],[1,"feather","icon-filter","filter-icon"],["src","assets/img/icons/closes.svg","alt","img"],[1,"form-sort"],[1,"feather","icon-sliders","info-img"],["placeholder","Sort by Date",1,"select","space-select",3,"ngModelChange","ngModel","ngModelOptions"],[3,"value"],["id","filter_inputs",1,"card",3,"ngClass"],[1,"card-body","pb-0"],[1,"col-lg-4","col-sm-6","col-12"],[1,"input-blocks"],[1,"feather","icon-zap","info-img"],["placeholder","Choose IP",1,"select","space-select",3,"ngModelChange","ngModel","ngModelOptions"],[1,"col-lg-3","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],[1,"table-responsive"],[1,"table","datanew"],[1,"no-sort"],[1,"checkboxs"],["type","checkbox","id","select-all"],[1,"checkmarks"],[1,"no-sort","text-end"],["type","checkbox"],[1,"action-table-data","justify-content-end"],[1,"edit-delete-action"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#edit-banip",1,"me-2","p-2"],[1,"feather","icon-edit","feather-edit"],["href","javascript:void(0);",1,"confirm-text","p-2"],[1,"feather","icon-trash-2","feather-trash-2"],[1,"feather","icon-trash-2","feather-trash-2",3,"click"],["id","add-banip",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","custom-modal-two"],[1,"modal-content"],[1,"page-wrapper-new","p-0"],[1,"content"],[1,"modal-header","border-0","custom-modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body","custom-modal-body"],[1,"mb-3"],[1,"form-label"],["type","text",1,"form-control"],["rows","4","placeholder","Type your message",1,"form-control"],[1,"status-toggle","modal-status","d-flex","justify-content-between","align-items-center"],[1,"status-label"],["type","checkbox","id","user5","checked","",1,"check"],["for","user5",1,"checktoggle"],[1,"modal-footer-btn"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel","me-2"],["type","submit",1,"btn","btn-submit"],["id","edit-banip",1,"modal","fade"],["type","text","value","211.11.0.25",1,"form-control"],["rows","4","placeholder","Temporarily block to protect user accounts from internet fraudsters.",1,"form-control"],["type","checkbox","id","user4","checked","",1,"check"],["for","user4",1,"checktoggle"]],template:function(a,i){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),e.EFF(4,"Settings"),e.k0s(),e.j41(5,"h6"),e.EFF(6,"Manage your settings on portal"),e.k0s()()(),e.j41(7,"ul",3)(8,"li")(9,"a",4),e.nrm(10,"i",5),e.k0s()(),e.j41(11,"li")(12,"a",6),e.bIt("click",function(){return i.toggleCollapse()}),e.DNE(13,y,1,0,"i",7)(14,S,1,0,"i",8),e.k0s()()()(),e.j41(15,"div",9)(16,"div",10)(17,"div",11),e.nrm(18,"app-settings-sidebar"),e.j41(19,"div",12)(20,"div",13)(21,"h4"),e.EFF(22,"Ban IP Address"),e.k0s()(),e.j41(23,"div",14)(24,"div",15)(25,"a",16),e.nrm(26,"i",17),e.EFF(27,"Add New Ban IP"),e.k0s()()(),e.j41(28,"div",9)(29,"div",18)(30,"div",19)(31,"div",20)(32,"div",21)(33,"div",22)(34,"div",23)(35,"a",24),e.nrm(36,"i",25),e.k0s(),e.j41(37,"div",26)(38,"label"),e.nrm(39,"input",27),e.k0s()()()(),e.j41(40,"div",28)(41,"div",29)(42,"a",30),e.bIt("click",function(){return i.openFilter()}),e.nrm(43,"i",31),e.j41(44,"span"),e.nrm(45,"img",32),e.k0s()()()(),e.j41(46,"div",33),e.nrm(47,"i",34),e.j41(48,"mat-select",35),e.mxI("ngModelChange",function(d){return e.DH7(i.selectedValue1,d)||(i.selectedValue1=d),d}),e.Z7z(49,w,2,2,"mat-option",36,e.fX1),e.k0s()()(),e.j41(51,"div",37)(52,"div",38)(53,"div",9)(54,"div",39)(55,"div",40),e.nrm(56,"i",41),e.j41(57,"mat-select",42),e.mxI("ngModelChange",function(d){return e.DH7(i.selectedValue2,d)||(i.selectedValue2=d),d}),e.Z7z(58,x,2,2,"mat-option",36,e.fX1),e.k0s()()(),e.j41(60,"div",43)(61,"div",40)(62,"a",44),e.nrm(63,"i",25),e.EFF(64," Search "),e.k0s()()()()()(),e.j41(65,"div",45)(66,"table",46)(67,"thead")(68,"tr")(69,"th",47)(70,"label",48),e.nrm(71,"input",49)(72,"span",50),e.k0s()(),e.j41(73,"th"),e.EFF(74,"IP Address"),e.k0s(),e.j41(75,"th"),e.EFF(76,"Reason"),e.k0s(),e.j41(77,"th"),e.EFF(78,"Date"),e.k0s(),e.j41(79,"th",51),e.EFF(80,"Action"),e.k0s()()(),e.j41(81,"tbody")(82,"tr")(83,"td")(84,"label",48),e.nrm(85,"input",52)(86,"span",50),e.k0s()(),e.j41(87,"td"),e.EFF(88," 211.11.0.25 "),e.k0s(),e.j41(89,"td")(90,"p"),e.EFF(91,"You can get on-demand services in order to find a nearby service."),e.k0s()(),e.j41(92,"td"),e.EFF(93," 12 Jul 2023 "),e.k0s(),e.j41(94,"td",53)(95,"div",54)(96,"a",55),e.nrm(97,"i",56),e.k0s(),e.j41(98,"a",57),e.nrm(99,"i",58),e.k0s()()()(),e.j41(100,"tr")(101,"td")(102,"label",48),e.nrm(103,"input",52)(104,"span",50),e.k0s()(),e.j41(105,"td"),e.EFF(106," 211.03.0.11 "),e.k0s(),e.j41(107,"td")(108,"p"),e.EFF(109,"Extract pricing information at inventory levels."),e.k0s()(),e.j41(110,"td"),e.EFF(111," 24 Aug 2023 "),e.k0s(),e.j41(112,"td",53)(113,"div",54)(114,"a",55),e.nrm(115,"i",56),e.k0s(),e.j41(116,"a",57),e.nrm(117,"i",58),e.k0s()()()(),e.j41(118,"tr")(119,"td")(120,"label",48),e.nrm(121,"input",52)(122,"span",50),e.k0s()(),e.j41(123,"td"),e.EFF(124," 211.24.0.17 "),e.k0s(),e.j41(125,"td")(126,"p"),e.EFF(127,"Fetching data for competitors to gain competitive advantage."),e.k0s()(),e.j41(128,"td"),e.EFF(129," 07 Sep 2023 "),e.k0s(),e.j41(130,"td",53)(131,"div",54)(132,"a",55),e.nrm(133,"i",56),e.k0s(),e.j41(134,"a",57),e.nrm(135,"i",58),e.k0s()()()(),e.j41(136,"tr")(137,"td")(138,"label",48),e.nrm(139,"input",52)(140,"span",50),e.k0s()(),e.j41(141,"td"),e.EFF(142," 211.12.0.34 "),e.k0s(),e.j41(143,"td")(144,"p"),e.EFF(145,"Temporarily block to protect user accounts from internet fraudsters."),e.k0s()(),e.j41(146,"td"),e.EFF(147," 13 Oct 2023 "),e.k0s(),e.j41(148,"td",53)(149,"div",54)(150,"a",55),e.nrm(151,"i",56),e.k0s(),e.j41(152,"a",57)(153,"i",59),e.bIt("click",function(){return i.confirmColor()}),e.k0s()()()()()()()(),e.nrm(154,"app-custom-pagination"),e.k0s()()()()(),e.j41(155,"div",60)(156,"div",61)(157,"div",62)(158,"div",63)(159,"div",64)(160,"div",65)(161,"div",2)(162,"h4"),e.EFF(163,"Add New Ban IP Address"),e.k0s()(),e.j41(164,"button",66)(165,"span",67),e.EFF(166,"\xd7"),e.k0s()()(),e.j41(167,"div",68)(168,"form")(169,"div",9)(170,"div",18)(171,"div",69)(172,"label",70),e.EFF(173,"IP Address"),e.k0s(),e.nrm(174,"input",71),e.k0s()(),e.j41(175,"div",18)(176,"div",69)(177,"label",70),e.EFF(178,"Reason For Ban"),e.k0s(),e.nrm(179,"textarea",72),e.k0s()(),e.j41(180,"div",18)(181,"div",73)(182,"span",74),e.EFF(183,"Status"),e.k0s(),e.nrm(184,"input",75)(185,"label",76),e.k0s()()(),e.j41(186,"div",77)(187,"button",78),e.EFF(188,"Cancel"),e.k0s(),e.j41(189,"button",79),e.EFF(190,"Submit"),e.k0s()()()()()()()()(),e.j41(191,"div",80)(192,"div",61)(193,"div",62)(194,"div",63)(195,"div",64)(196,"div",65)(197,"div",2)(198,"h4"),e.EFF(199,"Edit Ban IP Address"),e.k0s()(),e.j41(200,"button",66)(201,"span",67),e.EFF(202,"\xd7"),e.k0s()()(),e.j41(203,"div",68)(204,"form")(205,"div",9)(206,"div",18)(207,"div",69)(208,"label",70),e.EFF(209,"IP Address"),e.k0s(),e.nrm(210,"input",81),e.k0s()(),e.j41(211,"div",18)(212,"div",69)(213,"label",70),e.EFF(214,"Reason For Ban"),e.k0s(),e.nrm(215,"textarea",82),e.k0s()(),e.j41(216,"div",18)(217,"div",73)(218,"span",74),e.EFF(219,"Status"),e.k0s(),e.nrm(220,"input",83)(221,"label",84),e.k0s()()(),e.j41(222,"div",77)(223,"button",78),e.EFF(224,"Cancel"),e.k0s(),e.j41(225,"button",79),e.EFF(226,"Save Changes"),e.k0s()()()()()()()()()()()()),2&a&&(e.R7$(13),e.vxM(i.isCollapsed?-1:13),e.R7$(),e.vxM(i.isCollapsed?14:-1),e.R7$(34),e.R50("ngModel",i.selectedValue1),e.Y8G("ngModelOptions",e.lJ4(7,f)),e.R7$(),e.Dyx(i.selectedList1),e.R7$(2),e.Y8G("ngClass",e.l_i(8,E,i.filter,!i.filter)),e.R7$(6),e.R50("ngModel",i.selectedValue2),e.Y8G("ngModelOptions",e.lJ4(11,f)),e.R7$(),e.Dyx(i.selectedList1))},dependencies:[m.YU,F.VO,j.wT,l.qT,l.BC,l.cb,l.vS,l.cV,C.B,g.oV,v.J]})}}return t})()},{path:"storage-settings",component:(()=>{class t{constructor(s){this.sidebar=s,this.isCollapsed=!1}toggleCollapse(){this.sidebar.toggleCollapse(),this.isCollapsed=!this.isCollapsed}static{this.\u0275fac=function(a){return new(a||t)(e.rXU(h.o))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-storage-settings"]],decls:114,vars:2,consts:[[1,"page-header","settings-pg-header"],[1,"add-item","d-flex"],[1,"page-title"],[1,"table-top-head"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Refresh","matTooltip","Refresh","matTooltipPosition","above"],[1,"feather","icon-rotate-ccw","feather-rotate-ccw"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Collapse","matTooltip","Collapse","matTooltipPosition","above","id","collapse-header",3,"click"],[1,"feather","icon-chevron-up","feather-chevron-up"],[1,"feather","icon-chevron-down","feather-chevron-down"],[1,"row"],[1,"col-xl-12"],[1,"settings-wrapper","d-flex"],[1,"settings-page-wrap"],[1,"setting-title"],[1,"page-header","text-end","justify-content-end"],["href","javascript:void(0);",1,"btn-added","btn-primary"],[1,"feather","icon-mail","me-2"],[1,"col-xxl-4","col-lg-6","col-md-4","col-sm-6","d-flex"],[1,"connected-app-card","d-flex","w-100"],[1,"w-100","d-flex","justify-content-between","align-items-center"],[1,"storage-icon","mb-0"],[1,"system-app-icon"],["src","assets/img/icons/storage-icon-01.svg","alt",""],[1,"setting-gateway","d-flex","align-items-center"],["href","javascript:void(0);"],[1,"feather","icon-settings","me-2"],[1,"status-toggle","modal-status","d-flex","justify-content-between","align-items-center","ms-2"],["type","checkbox","id","user1","checked","",1,"check"],["for","user1",1,"checktoggle"],[1,"col-xl-4","col-lg-6","col-md-4","col-sm-6","d-flex"],["src","assets/img/icons/storage-icon-02.svg","alt",""],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#aws-config"],["type","checkbox","id","user2","checked","",1,"check"],["for","user2",1,"checktoggle"],["id","aws-config",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","custom-modal-two"],[1,"modal-content"],[1,"page-wrapper-new","p-0"],[1,"content"],[1,"modal-header","border-0","custom-modal-header"],[1,"w-100","status-toggle","modal-status","d-flex","justify-content-end","align-items-center","ms-auto","me-2"],["type","checkbox","id","user4","checked","",1,"check"],["for","user4",1,"checktoggle"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body","custom-modal-body"],[1,"col-lg-12"],[1,"mb-3"],[1,"form-label"],["type","text",1,"form-control"],[1,"mb-0"],[1,"modal-footer-btn"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel","me-2"],["type","submit",1,"btn","btn-submit"]],template:function(a,i){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),e.EFF(4,"Settings"),e.k0s(),e.j41(5,"h6"),e.EFF(6,"Manage your settings on portal"),e.k0s()()(),e.j41(7,"ul",3)(8,"li")(9,"a",4),e.nrm(10,"i",5),e.k0s()(),e.j41(11,"li")(12,"a",6),e.bIt("click",function(){return i.toggleCollapse()}),e.DNE(13,T,1,0,"i",7)(14,I,1,0,"i",8),e.k0s()()()(),e.j41(15,"div",9)(16,"div",10)(17,"div",11),e.nrm(18,"app-settings-sidebar"),e.j41(19,"div",12)(20,"div",13)(21,"h4"),e.EFF(22,"Storage"),e.k0s()(),e.j41(23,"div",14)(24,"a",15),e.nrm(25,"i",16),e.EFF(26,"Send test email"),e.k0s()(),e.j41(27,"div",9)(28,"div",17)(29,"div",18)(30,"ul",19)(31,"li",20)(32,"span",21),e.nrm(33,"img",22),e.k0s(),e.j41(34,"h6"),e.EFF(35,"Local Storage"),e.k0s()(),e.j41(36,"li",23)(37,"a",24),e.nrm(38,"i",25),e.k0s(),e.j41(39,"div",26),e.nrm(40,"input",27)(41,"label",28),e.k0s()()()()(),e.j41(42,"div",29)(43,"div",18)(44,"ul",19)(45,"li",20)(46,"span",21),e.nrm(47,"img",30),e.k0s(),e.j41(48,"h6"),e.EFF(49,"AWS"),e.k0s()(),e.j41(50,"li",23)(51,"a",31),e.nrm(52,"i",25),e.k0s(),e.j41(53,"div",26),e.nrm(54,"input",32)(55,"label",33),e.k0s()()()()()()()()()(),e.j41(56,"div",34)(57,"div",35)(58,"div",36)(59,"div",37)(60,"div",38)(61,"div",39)(62,"div",2)(63,"h4"),e.EFF(64,"AWS Settings"),e.k0s()(),e.j41(65,"div",40),e.nrm(66,"input",41)(67,"label",42),e.k0s(),e.j41(68,"button",43)(69,"span",44),e.EFF(70,"\xd7"),e.k0s()()(),e.j41(71,"div",45)(72,"form")(73,"div",9)(74,"div",46)(75,"div",47)(76,"label",48),e.EFF(77,"AWS Access Key "),e.j41(78,"span"),e.EFF(79," *"),e.k0s()(),e.nrm(80,"input",49),e.k0s()(),e.j41(81,"div",46)(82,"div",47)(83,"label",48),e.EFF(84,"Secret Key "),e.j41(85,"span"),e.EFF(86," *"),e.k0s()(),e.nrm(87,"input",49),e.k0s()(),e.j41(88,"div",46)(89,"div",47)(90,"label",48),e.EFF(91," Bucket Name "),e.j41(92,"span"),e.EFF(93," *"),e.k0s()(),e.nrm(94,"input",49),e.k0s()(),e.j41(95,"div",46)(96,"div",47)(97,"label",48),e.EFF(98," Region "),e.j41(99,"span"),e.EFF(100," *"),e.k0s()(),e.nrm(101,"input",49),e.k0s()(),e.j41(102,"div",46)(103,"div",50)(104,"label",48),e.EFF(105," Base URL "),e.j41(106,"span"),e.EFF(107," *"),e.k0s()(),e.nrm(108,"input",49),e.k0s()()(),e.j41(109,"div",51)(110,"button",52),e.EFF(111,"Cancel"),e.k0s(),e.j41(112,"button",53),e.EFF(113,"Submit"),e.k0s()()()()()()()()()),2&a&&(e.R7$(13),e.vxM(i.isCollapsed?-1:13),e.R7$(),e.vxM(i.isCollapsed?14:-1))},dependencies:[l.qT,l.cb,l.cV,g.oV,v.J]})}}return t})()}]}];let M=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[c.iI.forChild(A),c.iI]})}}return t})();var R=o(4134);let V=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[m.MD,M,R.E]})}}return t})()}}]);
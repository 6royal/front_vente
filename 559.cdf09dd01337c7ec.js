"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[559],{9559:(Q,F,r)=>{r.r(F),r.d(F,{DashboardModule:()=>H});var h=r(177),l=r(1188),t=r(4438);let $=(()=>{class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(i,s){1&i&&t.nrm(0,"router-outlet")},dependencies:[l.n3]})}}return a})();var R=r(9159),g=r(4450),D=r(8032),k=r.n(D),b=r(3410),w=r(5026),C=r(7812),S=r(1287),v=r(2042),j=r(4160),c=r(9417),f=r(255);const L=["chart"],p=()=>({duration:10});function G(a,d){if(1&a&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&a){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.count)}}function x(a,d){if(1&a&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&a){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.type)}}function A(a,d){if(1&a&&(t.j41(0,"div",23),t.DNE(1,G,2,1,"h4",67)(2,x,2,1,"h5",67),t.k0s()),2&a){const e=d.$implicit;t.R7$(),t.Y8G("ngIf","Grossiste"===e.type),t.R7$(),t.Y8G("ngIf","Grossiste"===e.type)}}function T(a,d){if(1&a&&(t.j41(0,"h4"),t.EFF(1),t.k0s()),2&a){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.count)}}function Y(a,d){if(1&a&&(t.j41(0,"h5"),t.EFF(1),t.k0s()),2&a){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.type)}}function M(a,d){if(1&a&&(t.j41(0,"div",23),t.DNE(1,T,2,1,"h4",67)(2,Y,2,1,"h5",67),t.k0s()),2&a){const e=d.$implicit;t.R7$(),t.Y8G("ngIf","Grossiste"===e.type),t.R7$(),t.Y8G("ngIf","Grossiste"===e.type)}}function O(a,d){if(1&a){const e=t.RV6();t.j41(0,"tr")(1,"td")(2,"label",68)(3,"input",69),t.mxI("ngModelChange",function(s){const o=t.eBV(e).$implicit;return t.DH7(o.isSelected,s)||(o.isSelected=s),t.Njj(s)}),t.k0s(),t.nrm(4,"span",62),t.k0s()(),t.j41(5,"td")(6,"div",48)(7,"a",70),t.nrm(8,"img",71),t.k0s(),t.j41(9,"a",72),t.EFF(10),t.k0s()()(),t.j41(11,"td")(12,"a",72),t.EFF(13),t.k0s()(),t.j41(14,"td"),t.EFF(15),t.k0s(),t.j41(16,"td"),t.EFF(17),t.k0s(),t.j41(18,"td",73)(19,"div",74)(20,"a",75),t.nrm(21,"i",76),t.k0s(),t.j41(22,"a",77),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.confirmColor())}),t.nrm(23,"i",78),t.k0s()()()()}if(2&a){const e=d.$implicit;t.R7$(3),t.R50("ngModel",e.isSelected),t.R7$(5),t.Y8G("src",e.img,t.B4B),t.R7$(2),t.SpI("",e.product," "),t.R7$(3),t.JRh(e.sku),t.R7$(2),t.JRh(e.manufacturedDate),t.R7$(2),t.JRh(e.expiredDate)}}let P=(()=>{class a{constructor(e,i,s,o,n){this.common=e,this.setting=i,this.data=s,this.pagination=o,this.router=n,this.initChecked=!1,this.routes=g.J,this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.totalSales=0,this.clientParType=[],this.chartOptions={series:[{name:"Sales",data:[130,210,300,290,150,50,210,280,105]},{name:"Purchase",data:[-150,-90,-50,-180,-50,-70,-100,-90,-105]}],colors:["#28C76F","#EA5455"],chart:{type:"bar",height:320,stacked:!0,zoom:{enabled:!0}},responsive:[{breakpoint:280,options:{legend:{position:"bottom",offsetY:0}}}],plotOptions:{bar:{horizontal:!1,borderRadius:4,borderRadiusApplication:"end",borderRadiusWhenStacked:"all",columnWidth:"20%"}},dataLabels:{enabled:!1},yaxis:{min:-200,max:300,tickAmount:5},xaxis:{categories:[" Jan ","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},legend:{show:!1},fill:{opacity:1}},this.common.currency$.subscribe(m=>{this.currency=m}),this.data.getDataTable().subscribe(m=>{this.totalData=m.totalData,this.pagination.tablePageSize.subscribe(y=>{this.router.url==this.routes.adminDashboard&&(this.getTableData({skip:y.skip,limit:this.totalData}),this.pageSize=y.pageSize)})})}ngOnInit(){this.getTotalSale(),this.getClientParType()}getTotalSale(){this.data.getTotalSales().subscribe(e=>{this.totalSales=e,console.log(this.totalSales)})}getClientParType(){this.data.getClientParType().subscribe(e=>{this.clientParType=Object.entries(e).map(([i,s])=>({type:i,count:s}))})}getTableData(e){this.data.getExpiredProduct().subscribe(i=>{this.tableData=[],this.serialNumberArray=[],this.totalData=i.totalData,i.data.map((s,o)=>{const n=o+1;o>=e.skip&&n<=e.limit&&(s.sNo=n,this.tableData.push(s),this.serialNumberArray.push(n))}),this.dataSource=new R.I6(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray})})}confirmColor(){const e=k().mixin({customClass:{confirmButton:" btn btn-success",cancelButton:"me-2 btn btn-danger"},buttonsStyling:!1});e.fire({title:"Are you sure?",text:"You won't be able to revert this!",confirmButtonText:"Yes, delete it!",showCancelButton:!0,cancelButtonText:"Cancel",reverseButtons:!0}).then(i=>{i.isConfirmed?e.fire("Deleted!","Your file has been deleted.","success"):i.dismiss===k().DismissReason.cancel&&e.fire("Cancelled","Your imaginary file is safe :)","error")})}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}static{this.\u0275fac=function(i){return new(i||a)(t.rXU(b.h),t.rXU(w.h),t.rXU(C.u),t.rXU(S.m),t.rXU(l.Ix))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-admin-dashboard"]],viewQuery:function(i,s){if(1&i&&t.GBs(L,5),2&i){let o;t.mGM(o=t.lsd())&&(s.chart=o.first)}},decls:195,vars:31,consts:[[1,"row"],[1,"col-xl-3","col-sm-6","col-12","d-flex"],[1,"dash-widget","w-100"],[1,"dash-widgetimg"],["src","assets/img/icons/dash1.svg","alt","img"],[1,"dash-widgetcontent"],["data-count","totalSales",1,"counters",3,"countUp","options"],[1,"dash-widget","dash1","w-100"],["src","assets/img/icons/dash2.svg","alt","img"],["data-count","4385.00",1,"counters",3,"countUp","options"],[1,"dash-widget","dash2","w-100"],["src","assets/img/icons/dash3.svg","alt","img"],["data-count","385656.50",1,"counters",3,"countUp","options"],[1,"dash-widget","dash3","w-100"],["src","assets/img/icons/dash4.svg","alt","img"],["data-count","40000.00",1,"counters",3,"countUp","options"],[1,"dash-count"],["class","dash-counts",4,"ngFor","ngForOf"],[1,"dash-imgs"],[1,"feather","icon-user"],[1,"dash-count","das1"],[1,"feather","icon-user-check"],[1,"dash-count","das2"],[1,"dash-counts"],["src","assets/img/icons/file-text-icon-01.svg","alt","icon",1,"img-fluid"],[1,"dash-count","das3"],[1,"feather","icon-file"],[1,"col-xl-7","col-sm-12","col-12","d-flex"],[1,"card","flex-fill"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-title","mb-0"],[1,"graph-sets"],[1,"mb-0"],[1,"dropdown","dropdown-wraper"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-light","btn-sm","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],[1,"card-body"],["id","sales_charts"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","colors"],[1,"col-xl-5","col-sm-12","col-12","d-flex"],[1,"card","flex-fill","default-cover","mb-4"],[1,"view-all-link"],["href","javascript:void(0);",1,"view-all","d-flex","align-items-center"],[1,"ps-2","d-flex","align-items-center"],[1,"feather","icon-arrow-right","feather-16"],[1,"table-responsive","dataview"],[1,"table","dashboard-recent-products"],[1,"productimgname"],[1,"product-img",3,"routerLink"],["src","assets/img/products/stock-img-01.png","alt","product"],[3,"routerLink"],["src","assets/img/products/stock-img-06.png","alt","product"],["src","assets/img/products/stock-img-02.png","alt","product"],["src","assets/img/products/stock-img-03.png","alt","product"],[1,"card"],[1,"card-header"],[1,"card-title"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","dashboard-expired-products"],[1,"no-sort"],[1,"checkboxs",3,"click"],["type","checkbox","id","select-all",3,"ngModelChange","ngModel"],[1,"checkmarks"],["mat-sort-header","product"],["mat-sort-header","sku"],["mat-sort-header","date"],["mat-sort-header","expireddate"],[4,"ngIf"],[1,"checkboxs"],["type","checkbox",3,"ngModelChange","ngModel"],["href","javascript:void(0);",1,"product-img","stock-img"],["alt","product",3,"src"],["href","javascript:void(0);"],[1,"action-table-data"],[1,"edit-delete-action"],["href","javascript:void(0);",1,"me-2","p-2"],[1,"feather","icon-edit","feather-edit"],["href","javascript:void(0);",1,"confirm-text","p-2",3,"click"],[1,"feather","icon-trash-2","feather-trash-2"]],template:function(i,s){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),t.nrm(5,"img",4),t.k0s()(),t.j41(6,"div",5)(7,"h5")(8,"span",6),t.EFF(9),t.k0s(),t.EFF(10," FCFA"),t.k0s(),t.j41(11,"h6"),t.EFF(12,"Total Purchase Due"),t.k0s()()()(),t.j41(13,"div",1)(14,"div",7)(15,"div",3)(16,"span"),t.nrm(17,"img",8),t.k0s()(),t.j41(18,"div",5)(19,"h5"),t.EFF(20," $"),t.j41(21,"span",9),t.EFF(22,"$4385"),t.k0s()(),t.j41(23,"h6"),t.EFF(24,"Total Sales Due"),t.k0s()()()(),t.j41(25,"div",1)(26,"div",10)(27,"div",3)(28,"span"),t.nrm(29,"img",11),t.k0s()(),t.j41(30,"div",5)(31,"h5"),t.EFF(32," $"),t.j41(33,"span",12),t.EFF(34,"$385656"),t.k0s()(),t.j41(35,"h6"),t.EFF(36,"Total Sale Amount"),t.k0s()()()(),t.j41(37,"div",1)(38,"div",13)(39,"div",3)(40,"span"),t.nrm(41,"img",14),t.k0s()(),t.j41(42,"div",5)(43,"h5"),t.EFF(44," $"),t.j41(45,"span",15),t.EFF(46,"$400"),t.k0s()(),t.j41(47,"h6"),t.EFF(48,"Total Expense Amount"),t.k0s()()()(),t.j41(49,"div",1)(50,"div",16),t.DNE(51,A,3,2,"div",17),t.j41(52,"div",18),t.nrm(53,"i",19),t.k0s()()(),t.j41(54,"div",1)(55,"div",20),t.DNE(56,M,3,2,"div",17),t.j41(57,"div",18),t.nrm(58,"i",21),t.k0s()()(),t.j41(59,"div",1)(60,"div",22)(61,"div",23)(62,"h4"),t.EFF(63,"150"),t.k0s(),t.j41(64,"h5"),t.EFF(65,"Purchase Invoice"),t.k0s()(),t.j41(66,"div",18),t.nrm(67,"img",24),t.k0s()()(),t.j41(68,"div",1)(69,"div",25)(70,"div",23)(71,"h4"),t.EFF(72,"170"),t.k0s(),t.j41(73,"h5"),t.EFF(74,"Sales Invoice"),t.k0s()(),t.j41(75,"div",18),t.nrm(76,"i",26),t.k0s()()()(),t.j41(77,"div",0)(78,"div",27)(79,"div",28)(80,"div",29)(81,"h5",30),t.EFF(82,"Purchase & Sales"),t.k0s(),t.j41(83,"div",31)(84,"ul",32)(85,"li")(86,"span"),t.EFF(87,"Sales"),t.k0s()(),t.j41(88,"li")(89,"span"),t.EFF(90,"Purchase"),t.k0s()()(),t.j41(91,"div",33)(92,"button",34),t.EFF(93," 2023 "),t.k0s(),t.j41(94,"ul",35)(95,"li")(96,"a",36),t.EFF(97,"2023"),t.k0s()(),t.j41(98,"li")(99,"a",36),t.EFF(100,"2022"),t.k0s()(),t.j41(101,"li")(102,"a",36),t.EFF(103,"2021"),t.k0s()()()()()(),t.j41(104,"div",37)(105,"div",38),t.nrm(106,"apx-chart",39),t.k0s()()()(),t.j41(107,"div",40)(108,"div",41)(109,"div",29)(110,"h4",30),t.EFF(111,"Recent Products"),t.k0s(),t.j41(112,"div",42)(113,"a",43),t.EFF(114," View All"),t.j41(115,"span",44),t.nrm(116,"i",45),t.k0s()()()(),t.j41(117,"div",37)(118,"div",46)(119,"table",47)(120,"thead")(121,"tr")(122,"th"),t.EFF(123,"#"),t.k0s(),t.j41(124,"th"),t.EFF(125,"Products"),t.k0s(),t.j41(126,"th"),t.EFF(127,"Price"),t.k0s()()(),t.j41(128,"tbody")(129,"tr")(130,"td"),t.EFF(131,"1"),t.k0s(),t.j41(132,"td",48)(133,"a",49),t.nrm(134,"img",50),t.k0s(),t.j41(135,"a",51),t.EFF(136,"Lenevo 3rd Generation"),t.k0s()(),t.j41(137,"td"),t.EFF(138,"$12500"),t.k0s()(),t.j41(139,"tr")(140,"td"),t.EFF(141,"2"),t.k0s(),t.j41(142,"td",48)(143,"a",49),t.nrm(144,"img",52),t.k0s(),t.j41(145,"a",51),t.EFF(146,"Bold V3.2"),t.k0s()(),t.j41(147,"td"),t.EFF(148,"$1600"),t.k0s()(),t.j41(149,"tr")(150,"td"),t.EFF(151,"3"),t.k0s(),t.j41(152,"td",48)(153,"a",49),t.nrm(154,"img",53),t.k0s(),t.j41(155,"a",51),t.EFF(156,"Nike Jordan"),t.k0s()(),t.j41(157,"td"),t.EFF(158,"$2000"),t.k0s()(),t.j41(159,"tr")(160,"td"),t.EFF(161,"4"),t.k0s(),t.j41(162,"td",48)(163,"a",49),t.nrm(164,"img",54),t.k0s(),t.j41(165,"a",51),t.EFF(166,"Apple Series 5 Watch"),t.k0s()(),t.j41(167,"td"),t.EFF(168,"$800"),t.k0s()()()()()()()()(),t.j41(169,"div",55)(170,"div",56)(171,"h4",57),t.EFF(172,"Expired Products"),t.k0s()(),t.j41(173,"div",37)(174,"div",46)(175,"table",58)(176,"thead")(177,"tr")(178,"th",59)(179,"label",60),t.bIt("click",function(){return s.selectAll(s.initChecked)}),t.j41(180,"input",61),t.mxI("ngModelChange",function(n){return t.DH7(s.initChecked,n)||(s.initChecked=n),n}),t.k0s(),t.nrm(181,"span",62),t.k0s()(),t.j41(182,"th",63),t.EFF(183,"Product"),t.k0s(),t.j41(184,"th",64),t.EFF(185,"SKU"),t.k0s(),t.j41(186,"th",65),t.EFF(187,"Manufactured Date"),t.k0s(),t.j41(188,"th",66),t.EFF(189,"Expired Date"),t.k0s(),t.j41(190,"th",59),t.EFF(191,"Action"),t.k0s()()(),t.j41(192,"tbody"),t.Z7z(193,O,24,6,"tr",null,t.fX1),t.k0s()()()()()),2&i&&(t.R7$(8),t.Y8G("countUp",s.totalSales)("options",t.lJ4(27,p)),t.R7$(),t.JRh(s.totalSales),t.R7$(12),t.Y8G("countUp",4385)("options",t.lJ4(28,p)),t.R7$(12),t.Y8G("countUp",385656.5)("options",t.lJ4(29,p)),t.R7$(12),t.Y8G("countUp",4e4)("options",t.lJ4(30,p)),t.R7$(6),t.Y8G("ngForOf",s.clientParType),t.R7$(5),t.Y8G("ngForOf",s.clientParType),t.R7$(50),t.Y8G("series",s.chartOptions.series)("chart",s.chartOptions.chart)("dataLabels",s.chartOptions.dataLabels)("plotOptions",s.chartOptions.plotOptions)("yaxis",s.chartOptions.yaxis)("xaxis",s.chartOptions.xaxis)("colors",s.chartOptions.colors),t.R7$(27),t.Y8G("routerLink",s.routes.productList),t.R7$(2),t.Y8G("routerLink",s.routes.productList),t.R7$(8),t.Y8G("routerLink",s.routes.productList),t.R7$(2),t.Y8G("routerLink",s.routes.productList),t.R7$(8),t.Y8G("routerLink",s.routes.productList),t.R7$(2),t.Y8G("routerLink",s.routes.productList),t.R7$(8),t.Y8G("routerLink",s.routes.productList),t.R7$(2),t.Y8G("routerLink",s.routes.productList),t.R7$(15),t.R50("ngModel",s.initChecked),t.R7$(13),t.Dyx(s.tableData))},dependencies:[h.Sq,h.bT,l.Wk,v.B4,v.aE,j.Q,c.Zm,c.BC,c.vS,f.G]})}}return a})();var U=r(9950),B=r(534),J=r(4823),E=r(339);const I=["chart"],u=()=>({duration:10});function N(a,d){1&a&&t.nrm(0,"i",11)}function V(a,d){1&a&&t.nrm(0,"i",12)}const X=[{path:"",component:$,children:[{path:"",pathMatch:"full",redirectTo:"admin-dashboard"},{path:"admin-dashboard",component:P},{path:"sales-dashboard",component:(()=>{class a{constructor(e,i,s){this.sidebar=e,this.common=i,this.renderer=s,this.base="",this.page="",this.last="",this.routes=g.J,this.bsValue=new Date,this.maxDate=new Date,this.isCollapsed=!1,this.maxDate.setDate(this.maxDate.getDate()+7),this.bsRangeValue=[this.bsValue,this.maxDate],this.chartOptionsOne={series:[{name:"Sales Analysis",data:[25,30,18,15,22,20,30,20,22,18,15,20]}],chart:{height:273,type:"area",zoom:{enabled:!1}},colors:["#E645AF"],dataLabels:{enabled:!1},stroke:{curve:"straight"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yaxis:{min:10,max:60,tickAmount:5,labels:{formatter:o=>o/1+"K"}},legend:{position:"top",horizontalAlign:"left"}},this.common.base.subscribe(o=>{this.base=o}),this.common.page.subscribe(o=>{this.page=o}),this.common.last.subscribe(o=>{this.last=o}),"sales-dashboard"==this.page&&this.renderer.addClass(document.body,"date-picker-dashboard")}toggleCollapse(){this.sidebar.toggleCollapse(),this.isCollapsed=!this.isCollapsed}static{this.\u0275fac=function(i){return new(i||a)(t.rXU(U.o),t.rXU(b.h),t.rXU(t.sFG))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-sales-dashboard"]],viewQuery:function(i,s){if(1&i&&t.GBs(I,5),2&i){let o;t.mGM(o=t.lsd())&&(s.chart=o.first)}},decls:324,vars:40,consts:[[1,"welcome","d-lg-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-center","welcome-text"],[1,"d-flex","align-items-center"],["src","assets/img/icons/hi.svg","alt","img"],[1,"position-relative","daterange-wraper","me-2"],[1,"input-groupicon","calender-input","date-input1"],["type","text","placeholder","Select","value","13 Aug 1992","bsDaterangepicker","","container",".date-input1",1,"form-control","date-range","bookingrange",3,"ngModelChange","ngModel"],[1,"feather","icon-calendar","feather-14"],["type","button","data-toggle","tooltip","data-bs-toggle","tooltip","data-bs-placement","top","matTooltip","Refresh","matTooltipPosition","above",1,"btn","btn-white-outline","d-none","d-md-inline-block"],[1,"feather","icon-rotate-ccw","feather-16"],["href","javascript:void(0);","data-bs-toggle","tooltip","data-bs-placement","top","matTooltip","Collapse","matTooltipPosition","above","id","collapse-header",1,"d-none","d-lg-inline-block",3,"click"],[1,"feather","icon-chevron-up","feather-chevron-up"],[1,"feather","icon-chevron-down","feather-chevron-down"],[1,"row","sales-cards"],[1,"col-xl-6","col-sm-12","col-12"],[1,"card","d-flex","align-items-center","justify-content-between","default-cover","mb-4"],["data-count","95000.45",1,"counters",3,"countUp","options"],[1,"sales-range"],[1,"text-success"],[1,"feather","icon-chevron-up","feather-16"],["src","assets/img/icons/weekly-earning.svg","alt","img"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card","color-info","bg-primary","mb-4"],["src","assets/img/icons/total-sales.svg","alt","img"],["data-count","10000.00",1,"counters",3,"countUp","options"],["data-bs-toggle","tooltip","data-bs-placement","top","matTooltip","Refresh","matTooltipPosition","above",1,"feather","icon-rotate-ccw","feather-16"],[1,"card","color-info","bg-secondary","mb-4"],["src","assets/img/icons/purchased-earnings.svg","alt","img"],["data-count","800.00",1,"counters",3,"countUp","options"],[1,"row"],[1,"col-sm-12","col-md-12","col-xl-4","d-flex"],[1,"card","flex-fill","default-cover","w-100","mb-4"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-title","mb-0"],[1,"dropdown"],["href","javascript:void(0);",1,"view-all","d-flex","align-items-center"],[1,"ps-2","d-flex","align-items-center"],[1,"feather","icon-arrow-right","feather-16"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-borderless","best-seller"],[1,"product-info"],[1,"product-img",3,"routerLink"],["src","assets/img/products/stock-img-01.png","alt","product"],[1,"info"],[3,"routerLink"],[1,"dull-text"],[1,"head-text"],["src","assets/img/products/stock-img-06.png","alt","product"],["src","assets/img/products/stock-img-02.png","alt","product"],["src","assets/img/products/stock-img-03.png","alt","product"],["src","assets/img/products/stock-img-04.png","alt","product"],[1,"col-sm-12","col-md-12","col-xl-8","d-flex"],[1,"table","table-borderless","recent-transactions"],["src","assets/img/products/stock-img-05.png","alt","product"],[1,"dull-text","d-flex","align-items-center"],[1,"feather","icon-clock","feather-14"],[1,"d-block","head-text"],[1,"text-blue"],[1,"badge","background-less","border-success"],["src","assets/img/products/expire-product-01.png","alt","product"],[1,"badge","background-less","border-danger"],["src","assets/img/products/expire-product-02.png","alt","product"],[1,"badge","background-less","border-primary"],["src","assets/img/products/expire-product-03.png","alt","product"],["src","assets/img/products/expire-product-04.png","alt","product"],[1,"row","sales-board"],[1,"col-md-12","col-lg-7","col-sm-12","col-12"],[1,"card","flex-fill","default-cover"],[1,"graph-sets"],[1,"dropdown","dropdown-wraper"],["type","button","id","dropdown-sales","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle","d-flex","align-items-center"],["aria-labelledby","dropdown-sales",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],["id","sales-analysis",1,"chart-set"],[3,"series","chart","xaxis","stroke","tooltip","dataLabels","fill","colors"],[1,"col-md-12","col-lg-5","col-sm-12","col-12"],[1,"card","default-cover"],["type","button","id","dropdown-country-sales","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle","d-flex","align-items-center"],["aria-labelledby","dropdown-country-sales",1,"dropdown-menu"],["id","sales_db_world_map",2,"height","265px"],["src",t.wXG`https://www.google.com/maps/embed`,"allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",1,"contact-map",2,"height","265px"]],template:function(i,s){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"h3",2),t.nrm(3,"img",3),t.EFF(4,"\xa0Hi John Smilga,"),t.k0s(),t.EFF(5," \xa0"),t.j41(6,"h6"),t.EFF(7,"here's what's happening with your store today."),t.k0s()(),t.j41(8,"div",2)(9,"div",4)(10,"div",5)(11,"input",6),t.mxI("ngModelChange",function(n){return t.DH7(s.bsRangeValue,n)||(s.bsRangeValue=n),n}),t.k0s()(),t.nrm(12,"i",7),t.k0s(),t.j41(13,"button",8),t.nrm(14,"i",9),t.k0s(),t.j41(15,"a",10),t.bIt("click",function(){return s.toggleCollapse()}),t.DNE(16,N,1,0,"i",11)(17,V,1,0,"i",12),t.k0s()()(),t.j41(18,"div",13)(19,"div",14)(20,"div",15)(21,"div")(22,"h6"),t.EFF(23,"Weekly Earning"),t.k0s(),t.j41(24,"h3"),t.EFF(25,"$"),t.j41(26,"span",16),t.EFF(27,"95000.45"),t.k0s()(),t.j41(28,"p",17)(29,"span",18),t.nrm(30,"i",19),t.EFF(31,"48%\xa0"),t.k0s(),t.EFF(32,"increase compare to last week "),t.k0s()(),t.nrm(33,"img",20),t.k0s()(),t.j41(34,"div",21)(35,"div",22),t.nrm(36,"img",23),t.j41(37,"h3",24),t.EFF(38,"10,000+"),t.k0s(),t.j41(39,"p"),t.EFF(40,"No of Total Sales"),t.k0s(),t.nrm(41,"i",25),t.k0s()(),t.j41(42,"div",21)(43,"div",26),t.nrm(44,"img",27),t.j41(45,"h3",28),t.EFF(46,"800+"),t.k0s(),t.j41(47,"p"),t.EFF(48,"No of Total Sales"),t.k0s(),t.nrm(49,"i",25),t.k0s()()(),t.j41(50,"div",29)(51,"div",30)(52,"div",31)(53,"div",32)(54,"h4",33),t.EFF(55,"Best Seller"),t.k0s(),t.j41(56,"div",34)(57,"a",35),t.EFF(58," View All"),t.j41(59,"span",36),t.nrm(60,"i",37),t.k0s()()()(),t.j41(61,"div",38)(62,"div",39)(63,"table",40)(64,"tbody")(65,"tr")(66,"td")(67,"div",41)(68,"a",42),t.nrm(69,"img",43),t.k0s(),t.j41(70,"div",44)(71,"a",45),t.EFF(72,"Lenovo 3rd Generation"),t.k0s(),t.j41(73,"p",46),t.EFF(74,"$4420"),t.k0s()()()(),t.j41(75,"td")(76,"p",47),t.EFF(77,"Sales"),t.k0s(),t.EFF(78," 6547 "),t.k0s()(),t.j41(79,"tr")(80,"td")(81,"div",41)(82,"a",42),t.nrm(83,"img",48),t.k0s(),t.j41(84,"div",44)(85,"a",45),t.EFF(86,"Bold V3.2"),t.k0s(),t.j41(87,"p",46),t.EFF(88,"$1474"),t.k0s()()()(),t.j41(89,"td")(90,"p",47),t.EFF(91,"Sales"),t.k0s(),t.EFF(92," 3474 "),t.k0s()(),t.j41(93,"tr")(94,"td")(95,"div",41)(96,"a",42),t.nrm(97,"img",49),t.k0s(),t.j41(98,"div",44)(99,"a",45),t.EFF(100,"Nike Jordan"),t.k0s(),t.j41(101,"p",46),t.EFF(102,"$8784"),t.k0s()()()(),t.j41(103,"td")(104,"p",47),t.EFF(105,"Sales"),t.k0s(),t.EFF(106," 1478 "),t.k0s()(),t.j41(107,"tr")(108,"td")(109,"div",41)(110,"a",42),t.nrm(111,"img",50),t.k0s(),t.j41(112,"div",44)(113,"a",45),t.EFF(114,"Apple Series 5 Watch"),t.k0s(),t.j41(115,"p",46),t.EFF(116,"$3240"),t.k0s()()()(),t.j41(117,"td")(118,"p",47),t.EFF(119,"Sales"),t.k0s(),t.EFF(120," 987 "),t.k0s()(),t.j41(121,"tr")(122,"td")(123,"div",41)(124,"a",42),t.nrm(125,"img",51),t.k0s(),t.j41(126,"div",44)(127,"a",45),t.EFF(128,"Amazon Echo Dot"),t.k0s(),t.j41(129,"p",46),t.EFF(130,"$597"),t.k0s()()()(),t.j41(131,"td")(132,"p",47),t.EFF(133,"Sales"),t.k0s(),t.EFF(134," 784 "),t.k0s()()()()()()()(),t.j41(135,"div",52)(136,"div",31)(137,"div",32)(138,"h4",33),t.EFF(139,"Recent Transactions"),t.k0s(),t.j41(140,"div",34)(141,"a",35),t.EFF(142," View All"),t.j41(143,"span",36),t.nrm(144,"i",37),t.k0s()()()(),t.j41(145,"div",38)(146,"div",39)(147,"table",53)(148,"thead")(149,"tr")(150,"th"),t.EFF(151,"#"),t.k0s(),t.j41(152,"th"),t.EFF(153,"Order Details"),t.k0s(),t.j41(154,"th"),t.EFF(155,"Payment"),t.k0s(),t.j41(156,"th"),t.EFF(157,"Status"),t.k0s(),t.j41(158,"th"),t.EFF(159,"Amount"),t.k0s()()(),t.j41(160,"tbody")(161,"tr")(162,"td"),t.EFF(163,"1"),t.k0s(),t.j41(164,"td")(165,"div",41)(166,"a",42),t.nrm(167,"img",54),t.k0s(),t.j41(168,"div",44)(169,"a",45),t.EFF(170,"Lobar Handy"),t.k0s(),t.j41(171,"span",55),t.nrm(172,"i",56),t.EFF(173,"15 Mins"),t.k0s()()()(),t.j41(174,"td")(175,"span",57),t.EFF(176,"Paypal"),t.k0s(),t.j41(177,"span",58),t.EFF(178,"#416645453773"),t.k0s()(),t.j41(179,"td")(180,"span",59),t.EFF(181,"Success"),t.k0s()(),t.j41(182,"td"),t.EFF(183,"$1,099.00"),t.k0s()(),t.j41(184,"tr")(185,"td"),t.EFF(186,"2"),t.k0s(),t.j41(187,"td")(188,"div",41)(189,"a",42),t.nrm(190,"img",60),t.k0s(),t.j41(191,"div",44)(192,"a",45),t.EFF(193,"Red Premium Handy"),t.k0s(),t.j41(194,"span",55),t.nrm(195,"i",56),t.EFF(196,"10 Mins"),t.k0s()()()(),t.j41(197,"td")(198,"span",57),t.EFF(199,"Apple Pay"),t.k0s(),t.j41(200,"span",58),t.EFF(201,"#147784454554"),t.k0s()(),t.j41(202,"td")(203,"span",61),t.EFF(204,"Canceled"),t.k0s()(),t.j41(205,"td"),t.EFF(206,"$600.55"),t.k0s()(),t.j41(207,"tr")(208,"td"),t.EFF(209,"3"),t.k0s(),t.j41(210,"td")(211,"div",41)(212,"a",42),t.nrm(213,"img",62),t.k0s(),t.j41(214,"div",44)(215,"a",45),t.EFF(216,"Iphone 14 Pro"),t.k0s(),t.j41(217,"span",55),t.nrm(218,"i",56),t.EFF(219,"10 Mins"),t.k0s()()()(),t.j41(220,"td")(221,"span",57),t.EFF(222,"Stripe"),t.k0s(),t.j41(223,"span",58),t.EFF(224,"#147784454554"),t.k0s()(),t.j41(225,"td")(226,"span",63),t.EFF(227,"Pending"),t.k0s()(),t.j41(228,"td"),t.EFF(229,"$1,099.00"),t.k0s()(),t.j41(230,"tr")(231,"td"),t.EFF(232,"4"),t.k0s(),t.j41(233,"td")(234,"div",41)(235,"a",42),t.nrm(236,"img",64),t.k0s(),t.j41(237,"div",44)(238,"a",45),t.EFF(239,"Black Slim 200"),t.k0s(),t.j41(240,"span",55),t.nrm(241,"i",56),t.EFF(242,"10 Mins"),t.k0s()()()(),t.j41(243,"td")(244,"span",57),t.EFF(245,"PayU"),t.k0s(),t.j41(246,"span",58),t.EFF(247,"#147784454554"),t.k0s()(),t.j41(248,"td")(249,"span",59),t.EFF(250,"Success"),t.k0s()(),t.j41(251,"td"),t.EFF(252,"$1,569.00"),t.k0s()(),t.j41(253,"tr")(254,"td"),t.EFF(255,"5"),t.k0s(),t.j41(256,"td")(257,"div",41)(258,"a",42),t.nrm(259,"img",65),t.k0s(),t.j41(260,"div",44)(261,"a",45),t.EFF(262,"Woodcraft Sandal"),t.k0s(),t.j41(263,"span",55),t.nrm(264,"i",56),t.EFF(265,"15 Mins"),t.k0s()()()(),t.j41(266,"td")(267,"span",57),t.EFF(268,"Paytm"),t.k0s(),t.j41(269,"span",58),t.EFF(270,"#147784454554"),t.k0s()(),t.j41(271,"td")(272,"span",59),t.EFF(273,"Success"),t.k0s()(),t.j41(274,"td"),t.EFF(275,"$1,478.00"),t.k0s()()()()()()()()(),t.j41(276,"div",66)(277,"div",67)(278,"div",68)(279,"div",32)(280,"h5",33),t.EFF(281,"Sales Analytics"),t.k0s(),t.j41(282,"div",69)(283,"div",70)(284,"button",71),t.nrm(285,"i",7),t.EFF(286,"2023"),t.k0s(),t.j41(287,"ul",72)(288,"li")(289,"a",73),t.EFF(290,"2023"),t.k0s()(),t.j41(291,"li")(292,"a",73),t.EFF(293,"2022"),t.k0s()(),t.j41(294,"li")(295,"a",73),t.EFF(296,"2021"),t.k0s()()()()()(),t.j41(297,"div",38)(298,"div",74),t.nrm(299,"apx-chart",75),t.k0s()()()(),t.j41(300,"div",76)(301,"div",77)(302,"div",32)(303,"h5",33),t.EFF(304,"Sales by Countries"),t.k0s(),t.j41(305,"div",69)(306,"div",70)(307,"button",78),t.EFF(308,"This Week"),t.k0s(),t.j41(309,"ul",79)(310,"li")(311,"a",73),t.EFF(312,"This Month"),t.k0s()(),t.j41(313,"li")(314,"a",73),t.EFF(315,"This Year"),t.k0s()()()()()(),t.j41(316,"div",38)(317,"div",80),t.nrm(318,"iframe",81),t.k0s(),t.j41(319,"p",17)(320,"span",18),t.nrm(321,"i",19),t.EFF(322,"48%\xa0"),t.k0s(),t.EFF(323,"increase compare to last week "),t.k0s()()()()()),2&i&&(t.R7$(11),t.R50("ngModel",s.bsRangeValue),t.R7$(5),t.vxM(s.isCollapsed?-1:16),t.R7$(),t.vxM(s.isCollapsed?17:-1),t.R7$(9),t.Y8G("countUp",95000.45)("options",t.lJ4(37,u)),t.R7$(11),t.Y8G("countUp",1e4)("options",t.lJ4(38,u)),t.R7$(8),t.Y8G("countUp",800)("options",t.lJ4(39,u)),t.R7$(23),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(11),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(11),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(11),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(11),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(39),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(20),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(20),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(20),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(20),t.Y8G("routerLink",s.routes.productList),t.R7$(3),t.Y8G("routerLink",s.routes.productList),t.R7$(38),t.Y8G("series",s.chartOptionsOne.series)("chart",s.chartOptionsOne.chart)("xaxis",s.chartOptionsOne.xaxis)("stroke",s.chartOptionsOne.stroke)("tooltip",s.chartOptionsOne.tooltip)("dataLabels",s.chartOptionsOne.dataLabels)("fill",s.chartOptionsOne.fill)("colors",s.chartOptionsOne.colors))},dependencies:[l.Wk,j.Q,c.me,c.BC,c.vS,B.dg,J.oV,E.Kn,E.mO,f.G]})}}return a})()}]}];let z=(()=>{class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[l.iI.forChild(X),l.iI]})}}return a})();var W=r(4134);let H=(()=>{class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[h.MD,z,W.E]})}}return a})()}}]);
(this["webpackJsonpapp2-mobile"]=this["webpackJsonpapp2-mobile"]||[]).push([[0],{20:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(21),i=c.n(s),n=(c(28),c(29),c(3)),r=c(12),l=c.n(r),j=c(16),o=c(8),d=c(2),b=c(0),m=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],i=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition(function(){var e=Object(j.a)(l.a.mark((function e(t){var a,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coords.latitude,i=t.coords.longitude,e.next=4,fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"+").concat(i,"&key=de9e05067bf44ff49fa395a739a34a0d")).then((function(e){return e.json()}));case 4:n=e.sent,console.log(n.results[0].formatted),s(n.results[0].formatted),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12 mx-auto",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsxs)(d.b,{className:"navbar-brand",to:"/",children:[Object(b.jsx)("strong",{className:"brand-name",children:"App2"}),"Food"]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("form",{className:"data_inline my-2 ",children:Object(b.jsx)("input",{className:"form-control",type:"search",placeholder:"Please click to get current Location","aria-label":"Search",onClick:i,value:c})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsxs)(d.b,{className:"nav-link",to:"/catageory",children:["Catageory ",Object(b.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(d.b,{className:"nav-link",to:"/product",children:"Product"})})]})})]})})})})})},p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"container my-4 mx-auto",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"cata-image",children:[Object(b.jsx)("img",{className:"img-fluid image1",src:"/app2-mobile/Images/image1.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"img-fluid image2",src:"/app2-mobile/Images/image3.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"img-fluid image3",src:"/app2-mobile/Images/image4.jpg",alt:"Random_Image"})]})})}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"main",children:" Main Catageory"}),Object(b.jsxs)("div",{className:"catalog-image",children:[Object(b.jsx)("img",{className:"image4",src:"/app2-mobile/Images/image5.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"image5",src:"/app2-mobile/Images/image6.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"image6",src:"/app2-mobile/Images/image7.jpg",alt:"Random_Image"})]}),Object(b.jsxs)("div",{className:"catalog-image my-3",children:[Object(b.jsx)("img",{className:"image4",src:"/app2-mobile/Images/image8.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"image5",src:"/app2-mobile/Images/image9.jpg",alt:"Random_Image"}),Object(b.jsx)("img",{className:"image6",src:"/app2-mobile/Images/image10.jpg",alt:"Random_Image"})]})]})})]})})})},x=c(23),h=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"cards",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:e.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d.b,{to:"#",className:"btn btn-primary",onClick:function(){e.HandleCart(e)},children:"ADD"}),Object(b.jsx)(d.b,{to:"#",className:"btn btn-primary",children:e.price})]})]})})})})},O=[{title:"Kadai Paneer Tikka",price:100},{title:"Makhni Paneer Tikka",price:80},{title:"Rustic Paneer Pizza",price:50},{title:"Rustic Paneer Pizza",price:90},{title:"Rustic Paneer Pizza",price:140},{title:"Rustic Paneer Pizza",price:150},{title:"Rustic Paneer Pizza",price:160},{title:"Rustic Paneer Pizza",price:200},{title:"Mushroom Pizza",price:800},{src:"https://images.pexels.com/photos/4340677/pexels-photo-4340677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Cheese",price:80},{src:"https://images.pexels.com/photos/5108601/pexels-photo-5108601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Supreme",price:50},{src:"https://images.pexels.com/photos/5108603/pexels-photo-5108603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",title:"Mushroom",price:60},{src:"https://images.pexels.com/photos/4340677/pexels-photo-4340677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",title:"Cheese and Corn",price:80}],g=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row sidenav",children:Object(b.jsxs)("div",{className:"w3-sidebar w3-bar-block w3-light-grey w3-card",children:[Object(b.jsxs)("div",{className:"w3-dropdown-hover",children:[Object(b.jsxs)("button",{className:"w3-button",children:["Pizza",Object(b.jsx)("i",{className:"zmdi zmdi-long-arrow-down"})]}),Object(b.jsxs)("div",{className:"w3-dropdown-content w3-bar-block",children:[Object(b.jsx)(d.b,{to:"/nonvegpizza",className:"w3-bar-item w3-button",children:"Non Veg Pizza"}),Object(b.jsx)(d.b,{to:"/vegpizza",className:"w3-bar-item w3-button",children:"Veg Pizza"}),Object(b.jsx)(d.b,{to:"/mixedpizaa",className:"w3-bar-item w3-button",children:"Mixed Pizza"})]})]}),Object(b.jsxs)("div",{className:"w3-dropdown-hover",children:[Object(b.jsxs)("button",{className:"w3-button",children:["Sandwitch",Object(b.jsx)("i",{className:"zmdi zmdi-long-arrow-down"})]}),Object(b.jsxs)("div",{className:"w3-dropdown-content w3-bar-block",children:[Object(b.jsx)(d.b,{to:"/nonvegsandwitch",className:"w3-bar-item w3-button",children:"Non Veg Sandwitch"}),Object(b.jsx)(d.b,{to:"/vegsandwitch",className:"w3-bar-item w3-button",children:"Veg Sandwitch"}),Object(b.jsx)(d.b,{to:"/mixedpizaa",className:"w3-bar-item w3-button",children:"Mixed Sandwitch"})]})]}),Object(b.jsx)(d.b,{to:"/soup",className:"w3-bar-item w3-button",children:"Soup"}),Object(b.jsxs)("div",{className:"w3-dropdown-hover",children:[Object(b.jsxs)("button",{className:"w3-button",children:["Pasta",Object(b.jsx)("i",{className:"zmdi zmdi-long-arrow-down"})]}),Object(b.jsxs)("div",{className:"w3-dropdown-content w3-bar-block",children:[Object(b.jsx)(d.b,{to:"/nonvegpasta",className:"w3-bar-item w3-button",children:"Non Veg Pasta"}),Object(b.jsx)(d.b,{to:"/vegpasta",className:"w3-bar-item w3-button",children:"Veg Pasta"}),Object(b.jsx)(d.b,{to:"/vegpasta",className:"w3-bar-item w3-button",children:"Mixed Pasta"})]})]}),Object(b.jsx)(d.b,{to:"/desert",className:"w3-bar-item w3-button",children:"Dessert"}),Object(b.jsx)(d.b,{to:"/breakfastitem",className:"w3-bar-item w3-button",children:"Breakfast Item"}),Object(b.jsx)(d.b,{to:"burger",className:"w3-bar-item w3-button",children:"Burger"}),Object(b.jsx)(d.b,{to:"#",className:"w3-bar-item w3-button",children:"Breakfast Items"}),Object(b.jsxs)("div",{className:"w3-dropdown-hover",children:[Object(b.jsxs)("button",{className:"w3-button",children:["Hot-Foods",Object(b.jsx)("i",{className:"zmdi zmdi-long-arrow-down"})]}),Object(b.jsxs)("div",{className:"w3-dropdown-content w3-bar-block",children:[Object(b.jsx)(d.b,{to:"/kalemusturd",className:"w3-bar-item w3-button",children:"Non Veg Hot-Foods"}),Object(b.jsx)(d.b,{to:"/onions",className:"w3-bar-item w3-button",children:"Veg Hot-Foods"}),Object(b.jsx)(d.b,{to:"/garlic",className:"w3-bar-item w3-button",children:"Mixed Hot-Foods"}),Object(b.jsx)(d.b,{to:"/wintersquash",className:"w3-bar-item w3-button",children:"Winter Squash"})]})]})]})})})})},u=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row clicked-list",children:[Object(b.jsxs)("select",{id:"dropdown",className:"clicked-list1",children:[Object(b.jsx)("option",{value:"1",selected:!0,disabled:!0,children:"1"}),Object(b.jsx)("option",{value:"1",selected:!0,children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"})]}),Object(b.jsx)("div",{className:"clicked-list2",children:e.title}),Object(b.jsx)("div",{className:"clicked-list3",children:e.price}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d.b,{className:"for-delete",to:"#",onClick:function(){e.deleteItem(e.id)},children:"DELETE"}),Object(b.jsx)(d.b,{className:"for-edit",to:"#",children:"EDIT"})]})]})})})},v=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"cards1",children:Object(b.jsxs)("div",{className:"card1",children:[Object(b.jsx)("img",{className:"card-img-top",src:e.src,alt:"Random"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title1",children:e.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d.b,{to:"#",className:"btn btn-primary1",onClick:function(){e.PassNote(e)},children:"ADD"}),Object(b.jsx)(d.b,{to:"#",className:"btn btn-primary1",children:e.price})]})]})]})})})},N=(c(20),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(0),n=Object(o.a)(i,2),r=n[0],l=n[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),m=d[0],p=d[1],N=Object(a.useState)(0),w=Object(o.a)(N,2),f=w[0],z=w[1],k=Object(a.useState)(0),P=Object(o.a)(k,2),y=P[0],C=P[1],I=Object(a.useState)(0),S=Object(o.a)(I,2),F=S[0],R=S[1],H=function(e){var t=e.price;R(F+t)},_=function(e){s((function(t){return[e].concat(Object(x.a)(t))}));var t=e.price;l(r+t),z(f=30.5),p(m=50);var c=r+f+m+e.price;C(c)},D=function(e){s((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container-fluid prod-page",children:Object(b.jsxs)("div",{className:"row ",children:[Object(b.jsx)("div",{className:"col-md-3 side-wala",children:Object(b.jsx)(g,{})}),Object(b.jsx)("div",{className:"col-md-6 menu_disp",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-2 grid3",children:[Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[0].title,price:O[0].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[1].title,price:O[1].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[2].title,price:O[2].price,HandleCart:_})})]}),Object(b.jsxs)("div",{className:"col-md-2 grid1",children:[Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[3].title,price:O[3].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[4].title,price:O[4].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[5].title,price:O[5].price,HandleCart:_})})]}),Object(b.jsxs)("div",{className:"col-md-2 grid2",children:[Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[6].title,price:O[3].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[7].title,price:O[4].price,HandleCart:_})}),Object(b.jsx)("div",{children:Object(b.jsx)(h,{title:O[8].title,price:O[5].price,HandleCart:_})})]})]})})}),Object(b.jsxs)("div",{className:"col-md-3 third-data",children:[Object(b.jsx)("div",{className:"row data-list",children:c.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u,{id:t,title:e.title,price:e.price,deleteItem:D},t)})}))}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row data-lis",children:[Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{type:"text",name:"instruction",className:"inpu-fiel",placeholder:"Please Enter Special Instruction"})}),Object(b.jsxs)("div",{children:["total:",r]}),Object(b.jsxs)("div",{children:["Taxes:",f]}),Object(b.jsxs)("div",{children:["Delievery Charge : ",m]}),Object(b.jsxs)("div",{className:"data-lis1",children:[Object(b.jsx)(v,{src:O[9].src,title:O[9].title,price:O[9].price,PassNote:H}),Object(b.jsx)(v,{src:O[10].src,title:O[10].title,price:O[10].price,PassNote:H}),Object(b.jsx)(v,{src:O[11].src,title:O[11].title,price:O[11].price,PassNote:H})]}),Object(b.jsxs)("div",{className:"data-lis6",children:[" CheckOut",Object(b.jsxs)("div",{className:"data-lis7",children:["ToTal Price  ",Object(b.jsx)("p",{className:"data-lis8",children:y})]})]})]})})]})]})})})}),w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{className:"page-footer font-small black",children:Object(b.jsxs)("div",{className:"footer-copyright text-center my-1",children:["\xa9 2021 Copyright:",Object(b.jsx)("a",{href:"https://mdbootstrap.com/",children:" Food Service"})]})})})},f=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(N,{})})};var z=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(n.d,{children:[Object(b.jsx)(n.b,{exact:!0,path:"/catageory",component:p}),Object(b.jsx)(n.b,{exact:!0,path:"/product",component:N}),Object(b.jsx)(n.b,{exact:!0,path:"/nonvegpizza",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/vegpizza",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/mixedpizaa",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/nonvegsandwitch",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/vegsandwitch",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/soup",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/nonvegpasta",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/vegpasta",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/desert",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/breakfastitem",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/burger",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/kalemusturd",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/onions",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/garlic",component:f}),Object(b.jsx)(n.b,{exact:!0,path:"/wintersquash",component:f}),Object(b.jsx)(n.a,{to:"/catageory"})]}),Object(b.jsx)(w,{})]})};i.a.render(Object(b.jsx)(d.a,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.64d93dbc.chunk.js.map
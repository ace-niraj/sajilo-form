(this.webpackJsonpform_sajilo=this.webpackJsonpform_sajilo||[]).push([[0],{246:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(8),r=a.n(n),i=a(13),s=a(11),l=a(16),j=a(18),o=a(278),b=a(279),u=a(280),d=a(61),O=a(281),m=a(3),h=["name"],x=function(e){var t=e.name,a=Object(d.a)(e,h),c=Object(j.c)(t),n=Object(s.a)(c,2),r=n[0],l=n[1],o=Object(i.a)(Object(i.a)(Object(i.a)({},r),a),{},{fullWidth:!0,variant:"outlined",autoComplete:"off"});return l&&l.touched&&l.error&&(o.error=!0,o.helperText=l.error),Object(m.jsx)(O.a,Object(i.a)({},o))},p=a(282),f=["name","options","disabled","searchDistrict","setsearchDistrict"],v=function(e){var t=e.name,a=e.options,c=e.disabled,n=e.searchDistrict,r=e.setsearchDistrict,l=Object(d.a)(e,f),o=Object(j.d)().setFieldValue,b=Object(j.c)(t),u=Object(s.a)(b,2),h=u[0],x=u[1],v=Object(i.a)(Object(i.a)(Object(i.a)({},h),l),{},{select:!0,variant:"outlined",fullWidth:!0,onChange:function(e){var a=e.target.value;if(o(t,a),""===n)return r(a)},disabled:c});return x&&x.touched&&x.error&&(v.error=!0,v.helperText=x.error),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a,Object(i.a)(Object(i.a)({},v),{},{children:Object.keys(a).map((function(e,t){return Object(m.jsx)(p.a,{value:a[e],children:a[e]},t)}))}))})},g=a(30),S=a.n(g),y=function(e){var t=e.next,a=e.data,n=e.validate,r=Object(c.useState)([]),i=Object(s.a)(r,2),d=i[0],O=i[1],h=Object(c.useState)(a.payout_district),p=Object(s.a)(h,2),f=p[0],g=p[1],y=Object(c.useState)([a.select_agent]),_=Object(s.a)(y,2),E=_[0],q=_[1],R=Object(c.useState)(a.amount),F=Object(s.a)(R,2),P=F[0],N=F[1],D=Object(c.useState)(a.total),k=Object(s.a)(D,2),A=k[0],C=k[1],T=Object(c.useState)(!1),B=Object(s.a)(T,2),I=B[0],M=B[1];Object(c.useEffect)((function(){S.a.get("http://192.168.190.128:8000/api/bmt/district/").then((function(e){O(e.data.district)})).catch((function(e){return e.message}))}),[]),Object(c.useEffect)((function(){S.a.get("http://192.168.190.128:8000/api/bmt/agent/").then((function(e){e.data.agent.map((function(e){e[e.length-1]===f&&q((function(t){return[].concat(Object(l.a)(t),[e])}))}))})).catch((function(e){return e.message}))}),[f]),Object(c.useEffect)((function(){var e=parseInt(P,10),t=e+e/100*10;C(t),S.a.get("http://192.168.190.128:8000/api/bmt/balance/").then((function(e){e.data.data.wallet.balance>=t&&t>0?M(!0):M(!1)})).catch((function(e){return e.message}))}),[P]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Step one"}),Object(m.jsx)(j.b,{initialValues:a,validationSchema:n,onSubmit:function(e){e.amount=P,e.total=A,e.charge=A-P,t(e)},children:Object(m.jsx)(j.a,{children:Object(m.jsxs)(o.a,{container:!0,direction:"column",spacing:2,children:[Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(v,{name:"payout_district",label:"Select District",options:d,searchDistrict:f,setsearchDistrict:g})}),""===f?Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(v,{name:"select_agent",label:"Select Agent",options:E,disabled:!0})}):Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(v,{name:"select_agent",label:"Select Agent",options:E})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{value:P,onChange:function(e){(""===e.target.value||/^[0-9]+$/.test(e.target.value))&&N(e.target.value)},name:"amount",type:"number",label:"Amount"})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{value:A-P,name:"charge",label:"Charge",disabled:!0})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{value:A,name:"total",label:"Total",disabled:!0})}),!0===I||0===A?"":Object(m.jsx)(b.a,{color:"secondary",children:"Insufficient Balance"}),console.log(I),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(u.a,{disabled:!I,variant:"contained",color:"secondary",type:"submit",children:"Next"})})]})})})]})},_=["Education Expenses","EMI Payment","Business Loan Or Interest Payment","Medical Expenses","Professional Services","Rent Payment","Repai And Maintenance","Salary","Utility Payments","Other"],E=["Spouse","Mother","Father","Brother","Friend","Relatives"],q=function(e){var t=e.next,a=e.prev,n=e.data,r=e.validate,i=Object(c.useState)({}),l=Object(s.a)(i,2),b=l[0],d=l[1];Object(c.useEffect)((function(){S.a.get("http://192.168.190.128:8000/api/bmt/balance/").then((function(e){d(e.data.data.user_kyc)})).catch((function(e){return e.message}))}),[]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Step two"}),Object(m.jsx)(j.b,{initialValues:n,validationSchema:r,onSubmit:function(e){e.sender=b,t(e,!0)},children:function(e){var t=e.values;return Object(m.jsx)(j.a,{children:Object(m.jsxs)(o.a,{container:!0,direction:"column",spacing:2,children:[Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{name:"receiver_name",label:"Receiver Name"})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{name:"receiver_address",label:"Receiver Address"})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(x,{name:"receiver_number",label:"Receiver Number"})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(v,{name:"relation",label:"Select Relation",options:E})}),Object(m.jsx)(o.a,{xs:6,item:!0,children:Object(m.jsx)(v,{name:"purpose",label:"Select Purpose",options:_})}),Object(m.jsxs)(o.a,{xs:6,item:!0,children:[Object(m.jsx)(u.a,{style:{marginRight:"20px"},variant:"contained",onClick:function(){return a(t)},type:"button",children:"Back"}),Object(m.jsx)(u.a,{variant:"contained",type:"submit",children:"Next"})]})]})})}})]})},R=function(e){var t=e.success;return void 0===t?Object(m.jsx)("div",{}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Message : ",t[1]]}),Object(m.jsxs)("h1",{children:["Control Number : ",t[2]]}),Object(m.jsxs)("h1",{children:["Total Amount : ",t[3]]})]})},F=a(19),P=function(){var e=Object(c.useState)({payout_district:"",select_agent:"",amount:0,charge:0,total:0,receiver_name:"",receiver_address:"",receiver_number:"",relation:"",purpose:"",sender:{}}),t=Object(s.a)(e,2),a=t[0],n=t[1],r=F.c().shape({payout_district:F.d().required("Please select district"),select_agent:F.a().required("This field is required"),amount:F.b().required("Enter amount in NRS")}),l=F.c().shape({receiver_name:F.d().required("This field is required").min(7,"Enter Full Name"),receiver_address:F.d().required("Receiver address is required"),receiver_number:F.d().required("Receiver Number cannot be empty").max(10,"Enter valid number").min(10,"Enter valid number"),relation:F.d().required("Please select relation"),purpose:F.d().required("Please select remitance purpose")}),j=Object(c.useState)(0),o=Object(s.a)(j,2),b=o[0],u=o[1],d=Object(c.useState)(),O=Object(s.a)(d,2),h=O[0],x=O[1],p=function(e){S.a.post("http://192.168.190.128:8000/api/bmt/execute/",e).then((function(e){x(e.data.message)})),console.log("Form submitted",e)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n((function(t){return Object(i.a)(Object(i.a)({},t),e)})),t&&p(e),u((function(e){return e+1}))},v=[Object(m.jsx)(y,{data:a,validate:r,next:f}),Object(m.jsx)(q,{data:a,validate:l,prev:function(e){n((function(t){return Object(i.a)(Object(i.a)({},t),e)})),u((function(e){return e-1}))},next:f}),Object(m.jsx)(R,{success:h})];return Object(m.jsx)(m.Fragment,{children:v[b]})};r.a.render(Object(m.jsx)(P,{}),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.1cd6168a.chunk.js.map
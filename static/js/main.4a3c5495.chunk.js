(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),i=n.n(r),s=n(26),o=n(11),l=n(14),j=n(45),u=n(9),d=n(7),b=n(41),h=n.n(b),O=n(73),m=n(74),x=n(80),f=n(43),p=n(78),v=n(76),g=["Amelia","Bowie","Coco","Dan","Emma","Finn","Grace","Henry","Irene","Jack"],y="config",k=g.slice(0,6).map((function(e){return{text:e,enabled:!0,time:30}}));var w,N=n(10),C=(w={},Object(N.a)(w,600,(function(){return"10 minutes"})),Object(N.a)(w,300,(function(){return"5 minutes"})),Object(N.a)(w,180,(function(){return"3 minutes"})),Object(N.a)(w,120,(function(){return"2 minutes"})),Object(N.a)(w,60,(function(){return"1 minute"})),Object(N.a)(w,30,(function(){return"30 seconds"})),Object(N.a)(w,15,(function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")})),Object(N.a)(w,10,(function(e){return e.started?"Change in 10":"Start in 10"})),Object(N.a)(w,5,(function(){return"Five"})),Object(N.a)(w,2,(function(){return"Two"})),Object(N.a)(w,1,(function(){return"One"})),Object(N.a)(w,0,(function(e){var t=e.nextAthlete;return e.started?"Change to ".concat(t):"Let's go"})),w);function S(e,t){C[e]&&function(e,t){var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.voice=t,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(C[e](t))}function D(e){return Math.round(e/1e3)}function T(e){var t=Math.floor(e/60),n=e-60*t;return 0===t?"".concat(n,"s"):"".concat(t,":").concat(n.toString().padStart(2,"0"),"min")}var A=n(28),z=n.n(A),E=n(39),L="wakeLock"in navigator;var _=n(68),B=n(44),M=n(69),I=n(70),R=n(71),J=n(75),G=n(67),F=n(2);function P(e){var t=e.command,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useRef)(void 0);return Object(F.jsx)(J.a,{placement:"right",overlay:Object(F.jsx)(G.a,{id:"tooltip-copy-athletes",children:r?"Copied!":"Copy Discord Bot command"}),children:Object(F.jsx)(f.a,{variant:"outline-link",size:"sm",className:"m-0 p-0 border-0",onClick:function(){navigator.clipboard.writeText(t),s.current&&(clearTimeout(s.current),s.current=void 0),i(!0),s.current=setTimeout((function(){return i(!1)}),5e3)},children:Object(F.jsx)(d.a,{icon:u.d})})})}function W(e){var t=e.athletes,n=e.onChange,c=e.running,a="!t config athletes ".concat(t.map((function(e){return"".concat(e.text.trim().replaceAll(" ","_").replaceAll(" ","_"),":").concat(e.time)})).join(" ")),r=function(e){return c?t[e].enabled?"#fff":"#6c757d80":"#fff"};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("h2",{className:"mb-3",children:["Athletes ",Object(F.jsx)(P,{command:a})]}),t.map((function(e,a){return Object(F.jsx)(v.a.Group,{as:_.a,controlId:"athlete-".concat(a),children:Object(F.jsx)(B.a,{sm:12,children:Object(F.jsxs)(M.a,{children:[Object(F.jsx)(v.a.Control,{style:{background:r(a)},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(o.a)(Object(o.a)({},t),{},{text:e.target.value}):t})))}}),Object(F.jsx)(v.a.Control,{style:{background:r(a)},type:"number",placeholder:"Time (in seconds)",min:5,step:5,value:e.time,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(o.a)(Object(o.a)({},t),{},{time:+e.target.value}):t})))}}),Object(F.jsx)(M.a.Append,{children:Object(F.jsxs)(I.a,{toggle:!0,children:[c&&Object(F.jsx)(R.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(a,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===t.filter((function(e){return e.enabled})).length,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(o.a)(Object(o.a)({},t),{},{enabled:!e.target.checked}):t})))},children:Object(F.jsx)(d.a,{icon:u.j})}),!c&&Object(F.jsx)(f.a,{variant:"danger",disabled:1===t.length,onClick:function(){return n(t.filter((function(e,t){return t!==a})))},children:Object(F.jsx)(d.a,{icon:u.l})})]})})]})})},a)})),!c&&Object(F.jsxs)(f.a,{variant:"light",block:!0,onClick:function(){var e;n([].concat(Object(s.a)(t),[{text:null!==(e=g[t.length])&&void 0!==e?e:"",time:30,enabled:!0}]))},children:[Object(F.jsx)(d.a,{icon:u.i})," Add athlete"]})]})}var H=n(79),U=n(72),q=n.p+"static/media/discord.3372aeeb.svg",X=n.p+"static/media/discordMark.d2c3bfa7.svg";function K(){return Object(F.jsxs)(H.a,{variant:"info",children:[Object(F.jsxs)(H.a.Heading,{children:["Discord Bot"," ",Object(F.jsx)(U.a,{pill:!0,variant:"primary",children:"Beta"})]}),Object(F.jsxs)(_.a,{children:[Object(F.jsxs)(B.a,{xs:12,sm:4,md:2,children:[Object(F.jsx)("img",{src:q,alt:"Discord Logo",className:"d-block d-sm-none"}),Object(F.jsx)("img",{src:X,alt:"Discord Logo",className:"d-none d-sm-block"})]}),Object(F.jsxs)(B.a,{xs:12,sm:8,md:10,children:[Object(F.jsxs)("p",{className:"mt-2",children:["No need to run the Web App on a rider's computer and mess around with the audio setup. Just add the TTT-Timer Discord Bot to your server and type ",Object(F.jsx)("code",{children:"!t help"})," for details on how to use it. After starting the timer, it will appear as a user within your call and coach you through the race."]}),Object(F.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(F.jsx)("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:"https://andipaetzold.github.io/tttt-discord",children:"Documentation"}),Object(F.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",rel:"noopener noreferrer",href:"https://discord.com/api/oauth2/authorize?client_id=806979974594560060&permissions=3155968&scope=bot",children:"Install"})]})]})]})]})}var Q=n(40);function V(){return Object(F.jsxs)("footer",{className:"text-muted mt-4 mb-2 text-center",children:[Object(F.jsx)("p",{children:Object(F.jsxs)("small",{children:["Made with \u2665 for"," ",Object(F.jsx)("a",{href:"https://www.wtrl.racing",rel:"noopener noreferrer",target:"_blank",children:"WTRL"})," ","by"," ",Object(F.jsx)("a",{href:"mailto:tttt@andipaetzold.com",rel:"noopener noreferrer",target:"_blank",children:"Andi P\xe4tzold"})]})}),Object(F.jsx)("p",{children:Object(F.jsx)("small",{children:Object(F.jsxs)("a",{href:"https://paypal.me/andipaetzold",rel:"noopener noreferrer",target:"_blank",children:[Object(F.jsx)(d.a,{icon:Q.b})," Donate via PayPal"]})})}),Object(F.jsx)("p",{children:Object(F.jsx)("small",{children:Object(F.jsxs)("a",{href:"https://github.com/andipaetzold/tttt",rel:"noopener noreferrer",target:"_blank",children:[Object(F.jsx)(d.a,{icon:Q.a})," GitHub"]})})})]})}var Y=n(77);function Z(){return Object(F.jsx)(Y.a,{bg:"light",className:"mb-2",children:Object(F.jsxs)(Y.a.Brand,{className:"mx-auto",children:[Object(F.jsx)(d.a,{icon:u.b})," Team Time Trial Timer ",Object(F.jsx)(d.a,{icon:u.b})]})})}var $=n(46),ee=function(){try{var e=localStorage.getItem(y),t=JSON.parse(e);return{athletes:t.athletes||k,speechEnabled:t.speechEnabled,startDelay:t.startDelay}}catch(n){return{athletes:k,speechEnabled:true,startDelay:0}}}();function te(){var e=Object(c.useState)("stopped"),t=Object(l.a)(e,2),n=t[0],a=t[1],r="stopped"!==n,i=Object($.a)(),b=i.node,g=i.active,k=i.enter,w=i.exit;!function(e){var t=Object(c.useRef)(null);Object(c.useEffect)((function(){if(L&&e){var n=function(){var e=Object(E.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.current)||void 0===n?void 0:n.release();case 2:t.current=null;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("visible"===document.visibilityState){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n();case 5:return e.next=7,navigator.wakeLock.request("screen");case 7:t.current=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c(),document.addEventListener("visibilitychange",c),function(){n(),document.removeEventListener("visibilitychange",c)}}}),[e])}("running"===n||"paused"===n);var N=Object(c.useState)(ee.startDelay),C=Object(l.a)(N,2),A=C[0],_=C[1],B=Object(c.useState)(ee.speechEnabled),M=Object(l.a)(B,2),I=M[0],R=M[1],J=Object(c.useState)(ee.athletes),G=Object(l.a)(J,2),H=G[0],U=G[1],q=function(e){return void 0===e?"":H[e].text||"Athlete ".concat(e+1)},X=Object(c.useState)(0),Q=Object(l.a)(X,2),Y=Q[0],te=Q[1],ne=Object(c.useState)(void 0),ce=Object(l.a)(ne,2),ae=ce[0],re=ce[1];Object(c.useEffect)((function(){var e;e={athletes:H,startDelay:A,speechEnabled:I},localStorage.setItem(y,JSON.stringify(e))}),[H,A,I]);var ie=Object(c.useMemo)((function(){var e=H.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{index:t})}));return void 0===ae?e.find((function(e){return e.enabled})).index:[].concat(Object(s.a)(e.slice(ae+1)),Object(s.a)(e)).filter((function(e){return e.enabled}))[0].index}),[ae,H]),se=Object(c.useRef)(),oe=Object(c.useRef)(),le=Object(c.useRef)(),je=function(){re(ie),te(H[ie].time);var e=Date.now();se.current=e,"paused"===n&&(le.current=e)};h()((function(){if("running"===n){var e,t=void 0===ae?A:H[ae].time,c=Date.now(),a=D(c-se.current);a!==D(oe.current-se.current)&&(e=Math.max(0,t-a),I&&S(e,{nextAthlete:q(ie),started:void 0!==ae}),a>=t?je():te(Math.max(t-a,0))),oe.current=c}}),500);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Z,{}),Object(F.jsxs)(O.a,{children:[Object(F.jsxs)(m.a,{className:"pt-4 mb-2 position-relative d-flex flex-column align-items-center justify-content-center",ref:b,children:[r?Object(F.jsxs)("div",{className:"w-100",children:[Object(F.jsx)("h1",{className:"text-center display-2",children:void 0===ae?"Wait":q(ae)}),Object(F.jsxs)("h2",{className:"text-center display-5",children:[Object(F.jsx)(d.a,{icon:u.a})," ",q(ie)]}),Object(F.jsxs)("h3",{className:"text-center display-6",children:[Object(F.jsx)(d.a,{icon:j.a})," ",T(Y)]}),Object(F.jsx)(x.a,{style:{transform:"scaleX(-1)",background:"white"},now:Y,max:void 0===ae?A:H[ae].time}),Object(F.jsxs)("div",{className:"mt-4 text-center",children:[Object(F.jsxs)(f.a,{variant:"danger",className:"mr-1",onClick:function(){a("stopped"),U((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{enabled:!0})}))}))},children:[Object(F.jsx)(d.a,{icon:u.k})," Stop"]}),"paused"===n?Object(F.jsxs)(f.a,{variant:"info",className:"mr-1",onClick:function(){a("running"),se.current=Date.now()-(le.current-se.current)},children:[Object(F.jsx)(d.a,{icon:u.h})," Resume"]}):Object(F.jsxs)(f.a,{variant:"info",className:"mr-1",onClick:function(){a("paused"),le.current=Date.now()},children:[Object(F.jsx)(d.a,{icon:u.g})," Pause"]}),Object(F.jsxs)(f.a,{variant:"warning",onClick:je,children:[Object(F.jsx)(d.a,{icon:u.f})," Skip"]})]})]}):Object(F.jsx)("div",{className:"text-center",children:Object(F.jsxs)(f.a,{variant:"primary",onClick:function(){var e=Date.now();oe.current=e,se.current=e,te(A>0?A:H[0].time),re(A>0?void 0:ie),U((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{enabled:!0})}))})),a("running")},size:"lg",children:[Object(F.jsx)(d.a,{icon:u.h})," Start"," ",A>0&&"in ".concat(T(A))]})}),Object(F.jsxs)("div",{className:"position-absolute",style:{right:16,bottom:16},children:[I?Object(F.jsx)(f.a,{size:"sm",variant:"secondary",onClick:function(){return R(!1)},children:Object(F.jsx)(d.a,{icon:u.n})}):Object(F.jsx)(f.a,{size:"sm",variant:"danger",onClick:function(){return R(!0)},children:Object(F.jsx)(d.a,{icon:u.m})}),g?Object(F.jsx)(f.a,{className:"ml-2",size:"sm",variant:"danger",onClick:w,children:Object(F.jsx)(d.a,{icon:u.c})}):Object(F.jsx)(f.a,{className:"ml-2",size:"sm",variant:"secondary",onClick:k,children:Object(F.jsx)(d.a,{icon:u.e})})]}),Object(F.jsx)("div",{className:"mt-5",style:{maxWidth:"500px"},children:Object(F.jsx)(W,{athletes:H,onChange:U,started:r})})]}),Object(F.jsx)(p.a,{className:"mb-2",children:Object(F.jsxs)(p.a.Body,{children:[Object(F.jsx)("h3",{children:"Settings"}),Object(F.jsxs)(v.a.Group,{controlId:"startDelay",children:[Object(F.jsxs)(v.a.Label,{children:["Start Delay (in seconds) ",Object(F.jsx)(P,{command:"!t config delay ".concat(A)})]}),Object(F.jsx)(v.a.Control,{type:"number",value:A,onChange:function(e){return _(+e.target.value)},min:0,step:30,disabled:r})]})]})}),Object(F.jsx)(K,{}),Object(F.jsx)(V,{})]})]})}n(61);i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(te,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4a3c5495.chunk.js.map
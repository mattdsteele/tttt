(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(13),o=n.n(i),s=n(25),l=n(11),u=n(10),j=n(31),d=n(9),b=n(8),h=n(27),f=n.n(h),O=n(53),x=n(54),p=n(58),v=n(32),m=n(57),g=n(56),y="config",w=["Amelia","Bowie","Coco","Dan","Emma","Finn"].map((function(e){return{text:e,enabled:!0,time:30}}));var k={voiceChanged:function(){return"Go faster!"},start:function(){return"Start"},15:function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")},10:function(){return"Change in 10"},5:function(){return"Five"},2:function(){return"Two"},1:function(){return"One"},0:function(e){var t=e.nextAthlete;return"Change to ".concat(t)}};function S(e,t,n){k[e]&&function(e,t){var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.voice=t,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(k[e](t),n)}function C(e){return Math.round(e/1e3)}var N=n(16),D=n.n(N),I=n(23),E="wakeLock"in navigator;var R=n(49),T=n(28),A=n(50),U=n(51),z=n(52);function G(e){var t=e.athletes,n=e.onChange;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Athletes"}),t.map((function(e,r){return Object(c.jsx)(g.a.Group,{as:R.a,controlId:"athlete-".concat(r),children:Object(c.jsx)(T.a,{sm:12,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(g.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return n(t.map((function(t,n){return n===r?Object(l.a)(Object(l.a)({},t),{},{text:e.target.value}):t})))}}),Object(c.jsx)(g.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"number",placeholder:"Time (in seconds)",min:1,value:e.time,onChange:function(e){return n(t.map((function(t,n){return n===r?Object(l.a)(Object(l.a)({},t),{},{time:+e.target.value}):t})))}}),Object(c.jsx)(A.a.Append,{children:Object(c.jsx)(U.a,{toggle:!0,children:Object(c.jsx)(z.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(r,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===t.filter((function(e){return e.enabled})).length,onChange:function(e){return n(t.map((function(t,n){return n===r?Object(l.a)(Object(l.a)({},t),{},{enabled:!e.target.checked}):t})))},children:Object(c.jsx)(b.a,{icon:d.f})})})})]})})},r)}))]})}var L=n(24);function F(){return Object(c.jsxs)("footer",{className:"text-muted mt-4 mb-2 text-center",children:[Object(c.jsx)("p",{children:Object(c.jsxs)("small",{children:["Made with \u2665 for"," ",Object(c.jsx)("a",{href:"https://www.wtrl.racing",rel:"noopener noreferrer",target:"_blank",children:"WTRL"})," ","by"," ",Object(c.jsx)("a",{href:"https://zwiftpower.com/profile.php?z=1861132",rel:"noopener noreferrer",target:"_blank",children:"Andi P\xe4tzold"})]})}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:Object(c.jsxs)("a",{href:"paypal.me/andipaetzold",rel:"noopener noreferrer",target:"_blank",children:[Object(c.jsx)(b.a,{icon:L.b})," Donate via PayPal"]})})}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:Object(c.jsxs)("a",{href:"https://github.com/andipaetzold/tttt",rel:"noopener noreferrer",target:"_blank",children:[Object(c.jsx)(b.a,{icon:L.a})," GitHub"]})})})]})}var M=n(55);function B(){return Object(c.jsx)(M.a,{bg:"light",className:"mb-2",children:Object(c.jsxs)(M.a.Brand,{className:"mx-auto",children:[Object(c.jsx)(b.a,{icon:d.b})," Team Time Trial Timer"," ",Object(c.jsx)(b.a,{icon:d.b})]})})}function J(e){var t=e.voices,n=e.voice,r=e.onChange;return Object(c.jsxs)(g.a.Group,{controlId:"voice",children:[Object(c.jsx)(g.a.Label,{children:"Voice"}),Object(c.jsx)(g.a.Control,{as:"select",onChange:function(e){var n=e.target.value,c=t.find((function(e){return e.voiceURI===n}));c&&(S("voiceChanged",{},c),r(c))},value:null===n||void 0===n?void 0:n.voiceURI,disabled:0===t.length,children:t.length>0?t.map((function(e){return Object(c.jsx)("option",{value:e.voiceURI,children:e.name},e.voiceURI)})):Object(c.jsx)("option",{children:"Default"},"default")}),Object(c.jsxs)(g.a.Text,{children:["If the voice output does not work anymore, click"," ",Object(c.jsx)(v.a,{style:{padding:0,fontSize:"100%",border:"none"},variant:"link",onClick:function(){r(void 0),setTimeout((function(){window.location.reload()}),0)},children:"here"})," ","to reset the app and keep the default voice."]})]})}var P=function(){try{var e=localStorage.getItem(y),t=JSON.parse(e);return{athletes:t.athletes||w,speechEnabled:t.speechEnabled,startDelay:t.startDelay,voice:t.voice}}catch(n){return{athletes:w,speechEnabled:false,startDelay:0}}}();function V(){var e=Object(r.useState)("stopped"),t=Object(u.a)(e,2),n=t[0],a=t[1];!function(e){var t=Object(r.useRef)(null);Object(r.useEffect)((function(){if(E&&e){var n=function(){var e=Object(I.a)(D.a.mark((function e(){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.current)||void 0===n?void 0:n.release();case 2:t.current=null;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(I.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("visible"===document.visibilityState){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n();case 5:return e.next=7,navigator.wakeLock.request("screen");case 7:t.current=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c(),document.addEventListener("visibilitychange",c),function(){n(),document.removeEventListener("visibilitychange",c)}}}),[e])}("running"===n||"paused"===n);var i=Object(r.useState)(P.startDelay),o=Object(u.a)(i,2),h=o[0],w=o[1],k=Object(r.useState)(P.speechEnabled),N=Object(u.a)(k,2),R=N[0],T=N[1],A=Object(r.useState)(P.athletes),U=Object(u.a)(A,2),z=U[0],L=U[1],M=function(e){return void 0===e?"":z[e].text||"Athlete ".concat(e+1)},V=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=function(){c(window.speechSynthesis.getVoices())};return Object(r.useEffect)((function(){if("undefined"!==typeof window.speechSynthesis)return a(),window.speechSynthesis.onvoiceschanged=a,function(){return window.speechSynthesis.onvoiceschanged=void 0}}),[]),n.filter((function(e){return e.lang.startsWith("en-")}))}(),_=Object(r.useState)(P.voice),W=Object(u.a)(_,2),q=W[0],H=W[1],X=V.find((function(e){return e.voiceURI===q})),K=Object(r.useState)(0),Q=Object(u.a)(K,2),Y=Q[0],Z=Q[1],$=Object(r.useState)(void 0),ee=Object(u.a)($,2),te=ee[0],ne=ee[1];Object(r.useEffect)((function(){var e;e={athletes:z,startDelay:h,speechEnabled:R,voice:q},localStorage.setItem(y,JSON.stringify(e))}),[z,h,R,q]);var ce=Object(r.useMemo)((function(){var e=z.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{index:t})}));return void 0===te?e.find((function(e){return e.enabled})).index:[].concat(Object(s.a)(e.slice(te+1)),Object(s.a)(e)).filter((function(e){return e.enabled}))[0].index}),[te,z]),re=Object(r.useRef)(),ae=Object(r.useRef)(),ie=Object(r.useRef)(),oe=function(e){R&&S(e,{nextAthlete:M(ce)},X)},se=function(){ne(ce),Z(z[ce].time);var e=Date.now();re.current=e,"paused"===n&&(ie.current=e)};f()((function(){if("running"===n){var e=void 0===te?h:z[te].time,t=Date.now(),c=C(t-re.current);c!==C(ae.current-re.current)&&(c>=e?(oe(void 0===te?"start":0),se()):(oe(e-c),Z(Math.max(e-c,0)))),ae.current=t}}),500);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(B,{}),Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x.a,{className:"mb-2",children:"stopped"!==n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"text-center display-2",children:void 0===te?"Wait":M(te)}),Object(c.jsxs)("h2",{className:"text-center display-5",children:[Object(c.jsx)(b.a,{icon:d.a})," ",M(ce)]}),Object(c.jsxs)("h3",{className:"text-center display-6",children:[Object(c.jsx)(b.a,{icon:j.a})," ",Y,"s"]}),Object(c.jsx)(p.a,{style:{transform:"scaleX(-1)",background:"white"},now:Y,max:void 0===te?h:z[te].time}),Object(c.jsxs)("div",{className:"mt-4 text-center",children:[Object(c.jsxs)(v.a,{variant:"danger",className:"mr-1",onClick:function(){a("stopped")},children:[Object(c.jsx)(b.a,{icon:d.g})," Stop"]}),"paused"===n?Object(c.jsxs)(v.a,{variant:"info",className:"mr-1",onClick:function(){a("running"),re.current=Date.now()-(ie.current-re.current)},children:[Object(c.jsx)(b.a,{icon:d.e})," Resume"]}):Object(c.jsxs)(v.a,{variant:"info",className:"mr-1",onClick:function(){a("paused"),ie.current=Date.now()},children:[Object(c.jsx)(b.a,{icon:d.d})," Pause"]}),Object(c.jsxs)(v.a,{variant:"warning",onClick:se,children:[Object(c.jsx)(b.a,{icon:d.c})," Skip"]})]})]}):Object(c.jsx)("div",{className:"text-center",children:Object(c.jsxs)(v.a,{variant:"primary",onClick:function(){var e=Date.now();ae.current=e,re.current=e,Z(h>0?h:z[0].time),ne(h>0?void 0:ce),a("running")},size:"lg",children:[Object(c.jsx)(b.a,{icon:d.e})," Start"]})})}),Object(c.jsx)(m.a,{className:"mb-2",children:Object(c.jsxs)(m.a.Body,{children:[Object(c.jsx)(G,{athletes:z,onChange:L}),Object(c.jsx)("h3",{children:"Settings"}),Object(c.jsxs)(g.a.Group,{controlId:"startDelay",children:[Object(c.jsx)(g.a.Label,{children:"Start Delay (in seconds)"}),Object(c.jsx)(g.a.Control,{type:"number",value:h,onChange:function(e){return w(+e.target.value)},min:0})]}),Object(c.jsxs)(g.a.Group,{controlId:"speechEnabled",children:[Object(c.jsx)(g.a.Check,{type:"checkbox",label:"Voice Output",checked:R,onChange:function(e){return T(e.target.checked)}}),Object(c.jsx)(g.a.Text,{children:"Voice Output is not supported on iOS"})]}),Object(c.jsx)(J,{voices:V,voice:X,onChange:function(e){return H(null===e||void 0===e?void 0:e.voiceURI)}})]})}),Object(c.jsx)(F,{})]})]})}n(46);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.196d3fc2.chunk.js.map
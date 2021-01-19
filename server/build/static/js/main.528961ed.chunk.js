(this["webpackJsonpteltrium-spetrum-dashboard"]=this["webpackJsonpteltrium-spetrum-dashboard"]||[]).push([[0],{101:function(e,t,a){"use strict";t.a=function(e,t){if(!e)return"";var a=86400*Math.floor(e-25569),n=new Date(1e3*a),r=n.getDate(),c=r<10?"0"+r:r,o=n.getFullYear(),i=n.getMonth()+1;return o+t+"-"+(i<10?"0"+i:i)+"-"+c}},378:function(e,t){},379:function(e,t,a){"use strict";var n=a(24),r=a(0);t.a=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}},403:function(e,t,a){e.exports=a(619)},615:function(e,t){},616:function(e,t){},619:function(e,t,a){"use strict";a.r(t);a(404),a(414),a(598),a(599);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=a(380),s=a(390),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=a(391),d=a(633),f=a(59),h=a(28),p=a(392),b=a(672),g=a(675),y=a(156),E=a(211),j=a(24),v=a(648),O=a(42),w=a(103),x=a(666),S=a(662),k=a(667),_=a(668),C=a(669),F=a(649),z=a(376),N=a.n(z),H=a(49),T=a(122),A=a(650),q=a(651),D=a(652),M=a(653),G=a(654),L=a(655),W=["#808000","#FFFF00","#00FF00","#00FFFF","#FF00FF","#0000FF","#FF0000","#000080","#008080","#008000","#800080","#800000","#808080","#FEC433","#C0C0C0"],R=a(379),I=a(101),U=[{id:"no",name:"no"},{id:"Customer",name:"name"},{id:"Chart_Type",name:"band"},{id:"Link_Type",name:"link type"},{id:"SFreq_GHz",name:"min freq (ghz)"},{id:"EFreq_GHz",name:"max freq (ghz)"},{id:"SDate",name:"start date"},{id:"EDate",name:"end date"}],B={y_start:0,y_stop:0,y_step:0},Y=function(e){var t=e.scope,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)([]),l=Object(j.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)(0),f=Object(j.a)(d,2),h=f[0],p=f[1],b=Object(n.useState)(B),g=Object(j.a)(b,2),y=g[0],E=g[1],v=Object(n.useState)([]),O=Object(j.a)(v,2),x=O[0],S=O[1],k=Object(R.a)();return Object(n.useEffect)((function(){var e={},t=new XMLHttpRequest;t.open("GET","static/excel/data.xlsx",!0),t.responseType="arraybuffer",t.onload=function(a){var n=new Uint8Array(t.response),r=H.read(n,{type:"array"});r.SheetNames.forEach((function(t){var a=[],n=H.utils.sheet_to_json(r.Sheets[t],{header:1});e[t]=[],n.forEach((function(e,t){t>0&&a.push(T.a.object(n[0],e))})),e[t]=a})),e[Object.keys(e)[0]].forEach((function(t){t.data=e[Object.keys(e)[1]].filter((function(e){return t.Chart_Type===e.Chart_Type}))})),i(e[Object.keys(e)[0]])},t.send()}),[]),Object(n.useEffect)((function(){var e=0,a=0,n=0,r=0,c=[];o.forEach((function(o){var i=o;if(o.Chart_Type===t.split("_").join(" ")){if(e=Object.keys(o).includes("data")&&o.data.length>0?o.data[0].SDate:o.X_Axis_Start,n=o.Y_Axis_Step_Size,a=o.Y_Axis_Start,r=o.Y_Axis_Stop,Object.keys(i).includes("data")&&i.data.length>0)o.data.forEach((function(t,a){var r=new Date(t.SDate),i=new Date(e),s=t.SFreq_GHz+Math.abs(t.SFreq_GHz-t.EFreq_GHz)/2,l=!0;r<i&&(e=t.SDate),o.data.forEach((function(e,n){n<a&&e.Customer===t.Customer&&(a=n,l=!1)}));var u={name:t.Customer,x:[Object(I.a)(t.SDate,0),Object(I.a)(t.EDate,0)],y:[s,s],mode:"lines",line:{width:Math.abs(t.SFreq_GHz-t.EFreq_GHz)/(10*n)*340,color:W[a%W.length]},showlegend:l};c.push(u)}));else{var s={name:"",x:[e,e+10],y:[a,a],mode:"lines",line:{width:Math.abs(a-r)/(10*n)*340,color:"transparent"},showlegend:!1,marker:{size:12,shape:["line-ew","diamond-open","line-ew","line-ew","diamond-open","line-ew"]}};c.push(s)}S(o.data)}})),m(c),p(e),E({y_start:a,y_stop:r,y_step:n})}),[t,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(w.a,{variant:"h6",component:"strong"},"Known LEO's supported by system"))),r.a.createElement(F.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(N.a,{data:u,layout:{width:.75*k.width,xaxis:{title:"",titlefont:{size:10,color:"#212529"},tickfont:{size:12},range:[Object(I.a)(h,-1),Object(I.a)(h,7)],dtick:"M12",showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Frequency (GHZ)",titlefont:{size:12,color:"#212529"},tickfont:{size:12},range:[y.y_start,y.y_stop],dtick:y.y_step,showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},legend:{orientation:"h",xanchor:"right",x:1,traceorder:"normal",font:{family:"sans-serif",size:12,color:"#000"},bordercolor:"#212529",borderwidth:1,tracegroupgap:100},margin:{l:60,b:80,r:30,t:30,pad:5},showlegend:!0},config:{displayModeBar:!1}})),r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(A.a,{style:{maxHeight:440}},r.a.createElement(q.a,{stickyHeader:!0,"aria-label":"sticky table",className:"customized-gantt-chart-table"},r.a.createElement(D.a,null,r.a.createElement(M.a,null,U.map((function(e){return r.a.createElement(G.a,{key:e.id,align:"center"},e.name.toUpperCase())})))),r.a.createElement(L.a,null,x.map((function(e,t){return r.a.createElement(M.a,{hover:!0,key:"".concat(e.Chart_Type.split(" ").join("_"),"_").concat(t)},U.map((function(a,n){return r.a.createElement(G.a,{key:a.id,align:"center"},0!==n?"SFreq_GHz"===a.id||"EFreq_GHz"===a.id?e[a.id].toFixed(7):"SDate"===a.id||"EDate"===a.id?Object(I.a)(e[a.id],0):e[a.id]:t+1)})))}))))))))},X=a(4),P=a(676),J=a(658),K=Object(v.a)((function(e){return{root:{textAlignLast:"center"},default:{color:O.a.grey[500],opacity:.9}}})),Z=function(e){var t=e.className,a=e.system,c=e.onChange,o=Object(n.useState)([]),i=Object(j.a)(o,2),s=i[0],l=i[1],u=K();return Object(n.useEffect)((function(){var e=[],t=new XMLHttpRequest;t.open("GET","static/excel/systems.xlsx",!0),t.responseType="arraybuffer",t.onload=function(a){var n=new Uint8Array(t.response),r=H.read(n,{type:"array"}),c=r.Sheets[r.SheetNames[0]];H.utils.sheet_to_json(c,{header:1}).forEach((function(t,a){a>0&&!e.includes(t[0])&&e.push(t[0])})),l(e)},t.send()}),[]),r.a.createElement(P.a,{name:"system",value:a,onChange:c,className:Object(X.a)(u.root,t),fullWidth:!0},r.a.createElement(J.a,{value:"none",className:u.default,disabled:!0},"Select System"),s.map((function(e){return r.a.createElement(J.a,{value:e,key:e},e)})))},$=Object(v.a)((function(e){return{root:{textAlignLast:"center"},default:{color:O.a.grey[500],opacity:.9}}})),Q=function(e){var t=e.className,a=e.status,c=e.onChange,o=Object(n.useState)([]),i=Object(j.a)(o,2),s=i[0],l=i[1],u=$();return Object(n.useEffect)((function(){var e=[],t=new XMLHttpRequest;t.open("GET","static/excel/systems.xlsx",!0),t.responseType="arraybuffer",t.onload=function(n){var r=new Uint8Array(t.response),c=H.read(r,{type:"array"}),o=c.Sheets[c.SheetNames[0]];H.utils.sheet_to_json(o,{header:1}).forEach((function(t){t[0]!==a.system||e.includes(t[1])||e.push(t[1])})),l(e)},t.send()}),[a.system]),r.a.createElement(P.a,{name:"band",value:a.band,onChange:c,className:Object(X.a)(u.root,t),fullWidth:!0},r.a.createElement(J.a,{value:"none",className:u.default,disabled:!0},"Select Frequency Band"),s.map((function(e){return r.a.createElement(J.a,{value:e,key:e},e)})))},V=a(671),ee=a(678),te=a(673),ae=function(e,t,a){return{width:Math.abs(e-t)/a*95+"%"}},ne=function(e,t){var a=40/t+"vh";return e.vertical?{writingMode:"vertical-rl",backgroundColor:e.hex,minHeight:a,maxHeight:a,transform:"rotate(-180deg)"}:{backgroundColor:e.hex,minHeight:a,maxHeight:a,textAlign:"center"}},re=Object(v.a)((function(e){return{root:{position:"relative"},grid:{minHeight:e.spacing(2),"&:before":{content:"attr(data-start)"},"&:after":{content:"attr(data-end)",position:"absolute",right:e.spacing(3),top:0}},block:{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",border:"1px solid #000",cursor:"pointer"},scoped:{boxShadow:e.shadows[10],zIndex:1e3},service:{fontSize:e.typography.pxToRem(12)},remark:{fontSize:e.typography.pxToRem(10)},announce:{marginTop:e.spacing(1)},box:{width:"100%",minHeight:e.spacing(30),justifyContent:"center",alignItems:"center",display:"flex"}}})),ce=function(e){var t=e.className,a=e.band,c=e.scope,o=e.onScope,i=e.onContent,s=Object(n.useState)([]),l=Object(j.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)([]),f=Object(j.a)(d,2),h=f[0],p=f[1],b=Object(n.useState)(0),g=Object(j.a)(b,2),y=g[0],E=g[1],v=Object(n.useState)(1),x=Object(j.a)(v,2),S=x[0],k=x[1],_=Object(n.useState)(1),C=Object(j.a)(_,2),z=C[0],N=C[1],A=re();Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","/static/excel/dataset.xlsx",!0),e.responseType="arraybuffer",e.onload=function(t){var n=new Uint8Array(e.response),r=H.read(n,{type:"array"}),c=H.utils.sheet_to_json(r.Sheets[a],{header:1}),s=[],l=[];Object.keys(c).length>2?(c.forEach((function(e,t){t>0&&s.push(T.a.object(c[0],e))})),s.forEach((function(e){var t=s.filter((function(t){return e.master===t.master}));T.a.filter(l,(function(t){return e.master===t.master})).length<1&&e.master&&l.push({master:e.master,start:e.start,end:e.end,data:t,vertical:e.vertical})})),m(l),N(Object.keys(l).length/8),o(l[0].data[0].chart_type),i(l[0].data[0].content)):(m([]),N(0),k(1),o(""),i(""))},e.send()}),[a]),Object(n.useEffect)((function(){if(Object.keys(u).length>0){var e=u[8*(S-1)],t=S<z?u[8*S-1]:u[8*z-1];if(t&&Object.keys(t).includes("end")){var a=Math.abs(e.start-t.end),n=Object.values(u).filter((function(e){return e.master>8*(S-1)&&e.master<=8*S}));E(a),p(n)}}else E(0),p([])}),[S,u,z]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{container:!0,alignItems:"center",justify:"center",style:{position:"relative"},className:Object(X.a)(t,A.root)},0===Object.keys(h).length&&r.a.createElement(V.a,{border:1,borderColor:O.a.blue[200],className:A.box,textAlign:"center"},r.a.createElement(w.a,{variant:"body2",color:"textSecondary"},"No Band Data Entered Yet.")),Object.keys(h).length>0&&Object.values(h).map((function(e,t){return r.a.createElement(F.a,{item:!0,key:e.master,className:A.grid,style:ae(e.start,e.end,y),"data-start":e.start,"data-end":7===t?e.end:""},r.a.createElement(F.a,{container:!0,alignItems:"center",justify:"center"},e.data.map((function(a,n){return r.a.createElement(ee.a,{key:"".concat((s=a.service,s.split(" ").join("_")),"-").concat(t,"-").concat(n),title:a.service,disableFocusListener:!a.tooltip,disableHoverListener:!a.tooltip,arrow:!0},r.a.createElement(F.a,{item:!0,md:12,onClick:function(){return e=a.chart_type,t=a.content,o(e),void i(t);var e,t},style:ne(a,e.data.length),className:Object(X.a)(A.block,a.chart_type===c&&A.scoped)},!a.tooltip&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:A.service},a.service),""!==a.remark&&r.a.createElement(w.a,{className:A.remark},a.remark))));var s}))))}))),r.a.createElement(F.a,{container:!0,alignItems:"center",spacing:3,className:A.announce},r.a.createElement(F.a,{item:!0,md:9},r.a.createElement(w.a,{variant:"body1"},"This chart will only work with 1024 x 768. We recommend full screen mode.")),r.a.createElement(F.a,{item:!0,md:3},r.a.createElement(F.a,{container:!0,justify:"flex-end"},r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(te.a,{count:Math.ceil(z),page:S,defaultPage:1,variant:"outlined",shape:"rounded",onChange:function(e,t){k(t)}}))))))},oe=Object(v.a)((function(e){return{root:{}}})),ie=function(e){var t=e.className,a=e.content,n=oe();return r.a.createElement(F.a,{container:!0,justify:"center",alignItems:"center",className:Object(X.a)(t,n.root)},r.a.createElement(F.a,{item:!0,md:4},r.a.createElement(w.a,{variant:"h6",component:"strong"},"Regulatory Notes")),r.a.createElement(F.a,{item:!0,md:8}),r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(V.a,{borderColor:"primary.main",border:2,borderRadius:5,padding:2},r.a.createElement(w.a,{variant:"body2"},a))))},se=a(644),le=a(660),ue=a(661),me=a(663),de=a(664),fe=a(665),he=Object(n.forwardRef)((function(e,t){return r.a.createElement(se.a,Object.assign({direction:"left",ref:t},e))})),pe=Object(v.a)((function(e){return{root:{},content:{marginBottom:e.spacing(6)}}})),be=function(){var e=Object(le.a)("(max-width: 1000px)"),t=pe();return r.a.createElement(ue.a,{open:e,TransitionComponent:he,keepMounted:!0},r.a.createElement(S.a,null),r.a.createElement(me.a,null,"Screen Resolution Alert"),r.a.createElement(de.a,null,r.a.createElement(fe.a,{className:t.content},"Your screen resolution is under 1024 x 768. We can't confirm your resolution of this Spectrum Chart. Please Check your screen mode again.")))},ge={system:"none",band:"none"},ye=Object(v.a)((function(e){return{root:{margin:e.spacing(5)},card:{padding:e.spacing(2)},content:{backgroundColor:O.a.grey[50]}}})),Ee=function(){return r.a.createElement(w.a,{component:"h1",variant:"h5",color:"textSecondary"},"Spectrum Dashboard")},je=function(){var e=Object(n.useState)(ge),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),s=i[0],l=i[1],u=Object(n.useState)(""),m=Object(j.a)(u,2),d=m[0],f=m[1],h=ye(),p=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(y.a)({},a,n))}))};return r.a.createElement("div",{className:h.root},r.a.createElement(x.a,{component:"main",maxWidth:"lg"},r.a.createElement(S.a,null),r.a.createElement(k.a,{className:h.card},r.a.createElement(_.a,{title:r.a.createElement(Ee,null)}),r.a.createElement(C.a,null,r.a.createElement(F.a,{container:!0,alignItems:"center",spacing:3},r.a.createElement(F.a,{item:!0,md:3},r.a.createElement(Z,{system:a.system,onChange:p})),r.a.createElement(F.a,{item:!0,md:3},r.a.createElement(Q,{status:a,onChange:p})),r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(ce,{scope:d,band:a.band,onScope:function(e){f(e)},onContent:function(e){l(e)}})),r.a.createElement(F.a,{item:!0,md:12,className:h.content},s&&""!==s&&r.a.createElement(ie,{content:s})),r.a.createElement(F.a,{item:!0,md:12},r.a.createElement(Y,{scope:d})))))),r.a.createElement(be,null))},ve=a(212),Oe=a.n(ve),we=a(670),xe=Object(v.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",minHeight:"100%",padding:e.spacing(3)}}})),Se=function(){var e=xe();return Object(n.useEffect)((function(){return Oe.a.start(),function(){Oe.a.done()}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(V.a,{width:400},r.a.createElement(we.a,null)))},ke=[{exact:!0,path:"/404",component:Object(n.lazy)((function(){return a.e(3).then(a.bind(null,680))}))},{exact:!0,path:"/maintenance",component:Object(n.lazy)((function(){return a.e(4).then(a.bind(null,681))}))},{path:"*",routes:[{exact:!0,path:"/",component:je},{component:function(){return r.a.createElement(d.a,{to:"/404"})}}]}],_e=Object(h.b)({plugins:Object(m.a)(Object(b.a)().plugins)}),Ce=Object(f.a)(),Fe=function(){return r.a.createElement(g.b,{jss:_e},r.a.createElement(p.a,{dense:!0,maxSnack:3},r.a.createElement(d.c,{history:Ce},function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement(n.Suspense,{fallback:r.a.createElement(Se,null)},r.a.createElement(d.d,null,t.map((function(t,a){var c=t.component;return r.a.createElement(d.b,{key:a,path:t.path,exact:t.exact,render:function(a){return r.a.createElement(n.Fragment,null,t.routes?e(t.routes):r.a.createElement(c,a))}})}))))}(ke))))};Object(s.a)(),o.a.render(r.a.createElement(i.a,null,r.a.createElement(Fe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()}},[[403,1,2]]]);
//# sourceMappingURL=main.528961ed.chunk.js.map
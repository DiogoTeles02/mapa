"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4970],{3936:function(e,t,n){var a=n(9619),s=n(1055),r=n(7051),i=n(824),o=n(677),c=n(4688),u=n(2776),l=n(5002),f=n(1976),w=n(4711),d=n(8111),g=n(5117),Z=n(1733),m=n(2893),p=n(6117);const h=document.getElementById("distance"),v=document.getElementById("min-distance"),I=new Array(2e4),k=45e5;for(let e=0;e<2e4;++e){const t=[2*k*Math.random()-k,2*k*Math.random()-k];I[e]=new a.Z(new r.Z(t))}const y=new w.Z({features:I}),C=new d.Z({distance:parseInt(h.value,10),minDistance:parseInt(v.value,10),source:y}),E={},x=new Z.Z({source:C,style:function(e){const t=e.get("features").length;let n=E[t];return n||(n=new o.ZP({image:new c.Z({radius:10,stroke:new u.Z({color:"#fff"}),fill:new l.Z({color:"#3399CC"})}),text:new f.Z({text:t.toString(),fill:new l.Z({color:"#fff"})})}),E[t]=n),n}}),D=new m.Z({source:new g.Z}),M=new s.Z({layers:[D,x],target:"map",view:new i.ZP({center:[0,0],zoom:2})});h.addEventListener("input",(function(){C.setDistance(parseInt(h.value,10))})),v.addEventListener("input",(function(){C.setMinDistance(parseInt(v.value,10))})),M.on("click",(e=>{x.getFeatures(e.pixel).then((e=>{if(e.length){const t=e[0].get("features");if(t.length>1){const e=(0,p.hI)(t.map((e=>e.getGeometry().getCoordinates())));M.getView().fit(e,{duration:1e3,padding:[50,50,50,50]})}}}))}))}},function(e){var t;t=3936,e(e.s=t)}]);
//# sourceMappingURL=cluster.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685],{7934:function(e,n,t){var o=t(4805),r=t(1055),c=t(1733),i=t(4711),u=t(824),s=t(677),a=t(5002),l=t(2776);const g=new s.ZP({fill:new a.Z({color:"#eeeeee"})}),w=new c.Z({background:"#1a2b39",source:new i.Z({url:"https://openlayers.org/data/vector/ecoregions.json",format:new o.Z}),style:function(e){const n=e.get("COLOR")||"#eeeeee";return g.getFill().setColor(n),g}}),f=new r.Z({layers:[w],target:"map",view:new u.ZP({center:[0,0],zoom:1})}),Z=new c.Z({source:new i.Z,map:f,style:new s.ZP({stroke:new l.Z({color:"rgba(255, 255, 255, 0.7)",width:2})})});let p;const d=function(e){const n=f.forEachFeatureAtPixel(e,(function(e){return e})),t=document.getElementById("info");t.innerHTML=n&&n.get("ECO_NAME")||"&nbsp;",n!==p&&(p&&Z.getSource().removeFeature(p),n&&Z.getSource().addFeature(n),p=n)};f.on("pointermove",(function(e){if(e.dragging)return;const n=f.getEventPixel(e.originalEvent);d(n)})),f.on("click",(function(e){d(e.pixel)}))}},function(e){var n;n=7934,e(e.s=n)}]);
//# sourceMappingURL=vector-layer.js.map
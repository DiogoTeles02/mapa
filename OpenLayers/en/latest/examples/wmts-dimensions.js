"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4194],{669:function(e,t,n){var a=n(1055),s=n(5117),o=n(2893),i=n(824),r=n(2661),l=n(2804),c=n(1625),d=n(6117);const m=(0,c.U2)("EPSG:3857"),u=(0,d.dz)(m.getExtent())/256,h=[],g=[];for(let e=0;e<=14;e++)h[e]=e,g[e]=u/Math.pow(2,e);const p=new l.Z({origin:(0,d.rL)(m.getExtent()),resolutions:g,matrixIds:h}),f=new r.Z({url:"https://ts2.scalgo.com/olpatch/wmts?token=CC5BF28A7D96B320C7DFBFD1236B5BEB",layer:"SRTM_4_1:SRTM_4_1_flooded_sealevels",format:"image/png",matrixSet:"EPSG:3857",attributions:['<a href="https://scalgo.com" target="_blank">SCALGO</a>','<a href="https://cgiarcsi.community/data/srtm-90m-digital-elevation-database-v4-1" target="_blank">CGIAR-CSI SRTM</a>'],tileGrid:p,style:"default",dimensions:{threshold:100}}),w=(new a.Z({target:"map",view:new i.ZP({projection:m,center:[-9871995,3566245],zoom:6}),layers:[new o.Z({source:new s.Z}),new o.Z({opacity:.5,source:f})]}),document.getElementById("slider")),v=function(){f.updateDimensions({threshold:w.value}),document.getElementById("theinfo").innerHTML=w.value+" meters"};w.addEventListener("input",v),v()}},function(e){var t;t=669,e(e.s=t)}]);
//# sourceMappingURL=wmts-dimensions.js.map
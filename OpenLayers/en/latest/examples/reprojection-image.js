"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5115],{7130:function(e,n,t){var i=t(1055),s=t(5117),o=t(4020),r=t(824),a=t(1840),c=t(1802),l=t(2893),p=t(6117),u=t(5250),d=t(1625);a.Z.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),(0,u.z2)(a.Z);const w=[0,0,7e5,13e5],g=new c.Z,m=(new i.Z({layers:[new l.Z({source:new s.Z}),g],target:"map",view:new r.ZP({center:(0,d.vs)((0,p.qg)(w),"EPSG:27700","EPSG:3857"),zoom:4})}),document.getElementById("interpolate"));function h(){const e=new o.Z({url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/British_National_Grid.svg/2000px-British_National_Grid.svg.png",crossOrigin:"",projection:"EPSG:27700",imageExtent:w,interpolate:m.checked});g.setSource(e)}h(),m.addEventListener("change",h)}},function(e){var n;n=7130,e(e.s=n)}]);
//# sourceMappingURL=reprojection-image.js.map
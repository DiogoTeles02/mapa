"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3673],{2021:function(e,t,n){var r=n(1055),o=n(2893),a=n(824),i=n(4469),s=n(1625),c=n(1027);const p="get_your_own_D6rA4zTHduk6KOKTXzGB",u='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',l=new o.Z({source:new i.Z({attributions:u,url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key="+p,tileSize:512,maxZoom:22})}),h=new o.Z({source:new i.Z({attributions:u,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+p,maxZoom:20})}),m=document.getElementById("map"),w=new r.Z({layers:[l,h],target:m,view:new a.ZP({center:(0,s.mi)([-109,46.5]),zoom:6})});let d=75;document.addEventListener("keydown",(function(e){38===e.which?(d=Math.min(d+5,150),w.render(),e.preventDefault()):40===e.which&&(d=Math.max(d-5,25),w.render(),e.preventDefault())}));let f=null;m.addEventListener("mousemove",(function(e){f=w.getEventPixel(e),w.render()})),m.addEventListener("mouseout",(function(){f=null,w.render()})),h.on("prerender",(function(e){const t=e.context;if(t.save(),t.beginPath(),f){const n=(0,c.CR)(e,f),r=(0,c.CR)(e,[f[0]+d,f[1]]),o=Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2));t.arc(n[0],n[1],o,0,2*Math.PI),t.lineWidth=5*o/d,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()}t.clip()})),h.on("postrender",(function(e){e.context.restore()}))}},function(e){var t;t=2021,e(e.s=t)}]);
//# sourceMappingURL=layer-spy.js.map
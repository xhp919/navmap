(function(){"use strict";var e={6996:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,a){const c=(0,r.up)("Homepage");return(0,r.wg)(),(0,r.j4)(c)}const a={id:"map"};function c(e,t,n,o,i,c){return(0,r.wg)(),(0,r.iD)("div",a)}n(1827);var l=n(3203),s=n(7793),u=n(9345),d=n(5028),m=n(4109),p=n(1505),f=n(3886),g=n(4711),w=n(1673),v=n(8537),h=n(6525),Z=n(2567),b=n(8406);class y extends b.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-zoom-extent-custom ol-unselectable ol-control",super({element:o,target:t.target}),n.addEventListener("click",(()=>{let e=this.getMap().getView();e.animate({center:e.getProperties().defaultCenter,zoom:e.getMinZoom(),duration:250})}))}}class C extends b.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-grid-custom ol-unselectable ol-control",super({element:o,target:t.target}),n.addEventListener("click",(()=>{let e=t.layer;e.getVisible()?e.setVisible(!1):e.setVisible(!0)}))}}class j extends b.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-location-custom ol-unselectable ol-control",super({element:o,target:t.target});t.geolocation,t.locationLayer;n.addEventListener("click",(()=>{}))}}var k=n(1317),x=n(1508),O=n(2949),P=n(9966),E=n(7339),V=n(7712),L=n(2205),G=n(6241),H=n(3292),z=n(9821),A=n.n(z),M={name:"Homepage",setup(){(0,r.bv)((()=>{let e=new p.Z({key:"Q57tupj2UBsQNQdju4xL~xBceblfTd6icjljunbuaCw~AhwA-whmGMsfIpVhslZyknWhFYq-GvWJZqBnqV8Zq1uRlI5YM_qr7_hxvdgnU7nH",imagerySet:"Aerial"});const t=new u.Z({strokeStyle:new P.Z({color:"rgba(191,182,182,0.5)",width:2,lineDash:[.5,4]}),showLabels:!0}),n=new d.Z,o=new l.Z({target:"map",controls:(0,f.c)({rotate:!1,zoom:!1,attribution:!1}),interactions:(0,h.c)({pinchRotate:!1}),layers:[new m.Z({source:e}),t,n],view:new s.ZP({center:[117.695,23.96],zoom:4,minZoom:4,maxZoom:19,projection:"EPSG:4326"})});o.getView().setProperties({defaultCenter:o.getView().getCenter()}),o.addControl(new g.Z({zoomInTipLabel:"放大",zoomOutTipLabel:"缩小"})),o.addControl(new w.Z),o.addControl(new v.Z({className:"ol-mousePosition-custom",projection:o.getView().getProjection(),placeholder:"未知",coordinateFormat:e=>(0,Z.V7)(e)})),o.addControl(new y({title:"复位"})),o.addControl(new C({title:"经纬网",layer:t}));const r=new k.Z({projection:o.getView().getProjection(),tracking:!0,trackingOptions:{enableHighAccuracy:!0}});let i=new x.Z,a=new E.Z({fill:new V.Z({color:"#3399CC"}),points:3,radius:6,displacement:[0,10],rotation:r.getHeading(),angle:0});i.setStyle([new L.ZP({image:new G.Z({radius:6,fill:new V.Z({color:"#3399CC"}),stroke:new P.Z({color:"#fff",width:2})})}),new L.ZP({image:a})]);let c=new x.Z;n.setSource(new H.Z({features:[c,i]})),r.on("change",(function(){let e=r.getPosition();i.setGeometry(e?new O.Z(e):null)})),r.on("change:accuracyGeometry",(function(){c.setGeometry(r.getAccuracyGeometry())}));new(A());window.addEventListener("deviceorientation",(function(e){let t=e.webkitCompassHeading||e.alpha;a.setRotation(Math.PI/180*(360-t)),i.changed()})),o.addControl(new j({title:"定位",geolocation:r,locationLayer:n}))}))}},_=n(89);const q=(0,_.Z)(M,[["render",c],["__scopeId","data-v-c52c24ca"]]);var I=q,N={name:"App",components:{Homepage:I}};const S=(0,_.Z)(N,[["render",i]]);var T=S;(0,o.ri)(T).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],l=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var u=l(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunknavmap"]=self["webpackChunknavmap"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6996)}));o=n.O(o)})();
//# sourceMappingURL=app.5a6184ee.js.map
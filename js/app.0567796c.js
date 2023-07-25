(function(){"use strict";var e={8319:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,a){const l=(0,r.up)("Homepage");return(0,r.wg)(),(0,r.j4)(l)}var a=n(7139);const l=e=>((0,r.dD)("data-v-e445cd56"),e=e(),(0,r.Cn)(),e),c=l((()=>(0,r._)("div",{id:"map"},null,-1))),u={id:"panel"},s=l((()=>(0,r._)("br",null,null,-1))),d=l((()=>(0,r._)("br",null,null,-1))),m=l((()=>(0,r._)("br",null,null,-1))),p=l((()=>(0,r._)("br",null,null,-1)));function g(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[c,(0,r._)("div",u,[(0,r.Uk)(" 坐标系："+(0,a.zw)(o.proj),1),s,(0,r.Uk)(" 坐标： "+(0,a.zw)(o.locationCoord),1),d,(0,r.Uk)("精度： "+(0,a.zw)(o.accuracy),1),m,(0,r.Uk)("海拔："+(0,a.zw)(o.altitude)+" ",1),p,(0,r.Uk)("方位角："+(0,a.zw)(o.heading),1)])],64)}var w=n(4870),f=(n(1827),n(3203)),v=n(7793),h=n(9345),b=n(5028),Z=n(4109),y=n(1505),C=n(3886),k=n(4711),j=n(1673),P=n(8537),V=n(6525),x=n(2567),O=n(8406);class z extends O.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-zoom-extent-custom ol-unselectable ol-control",super({element:o,target:t.target}),n.addEventListener("click",(()=>{let e=this.getMap().getView();e.animate({center:e.getProperties().defaultCenter,zoom:e.getMinZoom(),duration:250})}))}}class E extends O.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-grid-custom ol-unselectable ol-control",super({element:o,target:t.target}),n.addEventListener("click",(()=>{let e=t.layer;e.getVisible()?e.setVisible(!1):e.setVisible(!0)}))}}class H extends O.Z{constructor(e){const t=e||{},n=document.createElement("button"),o=document.createElement("div");o.title=t.title,o.appendChild(n),o.className="ol-location-custom ol-unselectable ol-control",super({element:o,target:t.target});let r=t.geolocation;n.addEventListener("click",(()=>{let e=r.getPosition();void 0!==e&&this.getMap().getView().animate({center:e,zoom:15,duration:3e3})}))}}var _=n(1317),A=n(1508),L=n(2949),G=n(9966),M=n(7339),S=n(7712),U=n(2205),q=n(6241),D=n(3292),I={name:"Homepage",setup(){let e=(0,w.iH)(""),t=(0,w.iH)(""),n=(0,w.iH)(""),o=(0,w.iH)(""),i=(0,w.iH)("");return(0,r.bv)((()=>{let r=new y.Z({key:"Q57tupj2UBsQNQdju4xL~xBceblfTd6icjljunbuaCw~AhwA-whmGMsfIpVhslZyknWhFYq-GvWJZqBnqV8Zq1uRlI5YM_qr7_hxvdgnU7nH",imagerySet:"Aerial"});const a=new h.Z({strokeStyle:new G.Z({color:"rgba(191,182,182,0.5)",width:2,lineDash:[.5,4]}),showLabels:!0}),l=new b.Z,c=new f.Z({target:"map",controls:(0,C.c)({rotate:!1,zoom:!1,attribution:!1}),interactions:(0,V.c)({pinchRotate:!1}),layers:[new Z.Z({source:r}),a,l],view:new v.ZP({center:[117.695,23.96],zoom:4,minZoom:4,maxZoom:19,projection:"EPSG:4326"})});e.value=c.getView().getProjection().getCode(),c.getView().setProperties({defaultCenter:c.getView().getCenter()}),c.addControl(new k.Z({zoomInTipLabel:"放大",zoomOutTipLabel:"缩小"})),c.addControl(new j.Z),c.addControl(new P.Z({className:"ol-mousePosition-custom",projection:c.getView().getProjection(),placeholder:"未知",coordinateFormat:e=>(0,x.V7)(e)})),c.addControl(new z({title:"复位"})),c.addControl(new E({title:"经纬网",layer:a}));const u=new _.Z({projection:c.getView().getProjection(),tracking:!0,trackingOptions:{enableHighAccuracy:!0}});let s=new A.Z,d=new M.Z({fill:new S.Z({color:"#3399CC"}),points:3,radius:5,displacement:[0,0],rotation:0,angle:0});s.setStyle([new U.ZP({image:new q.Z({radius:6,fill:new S.Z({color:"#3399CC"}),stroke:new G.Z({color:"#fff",width:2})})}),new U.ZP({image:d})]);let m=new A.Z;l.setSource(new D.Z({features:[m,s]})),u.on("change",(function(){let e=u.getPosition();t.value=(0,x.V7)(e,4);let n=u.getAltitude();o.value=void 0!==n?`${n.toString()}m`:"",s.setGeometry(e?new L.Z(e):null)})),u.on("change:accuracyGeometry",(function(){m.setGeometry(u.getAccuracyGeometry()),n.value=`${u.getAccuracy().toString()}m`})),window.addEventListener("deviceorientationabsolute",(function(e){let t=e.webkitCompassHeading||e.alpha;d.setRotation(Math.PI/180*(360-t)),null===t||!1===e.absolute?(d.setDisplacement([0,0]),i.value=""):(d.setDisplacement([0,10]),i.value=360-t+"°"),s.changed()})),c.addControl(new H({title:"定位",geolocation:u}))})),{proj:e,locationCoord:t,accuracy:n,altitude:o,heading:i}}},N=n(89);const T=(0,N.Z)(I,[["render",g],["__scopeId","data-v-e445cd56"]]);var B=T,F={name:"App",components:{Homepage:B}};const Q=(0,N.Z)(F,[["render",i]]);var R=Q;(0,o.ri)(R).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var s=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunknavmap"]=self["webpackChunknavmap"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8319)}));o=n.O(o)})();
//# sourceMappingURL=app.0567796c.js.map
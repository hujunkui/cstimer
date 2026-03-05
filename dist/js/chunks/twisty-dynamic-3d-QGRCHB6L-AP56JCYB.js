import{i as ba,k as qt,q as Ra,t as wa}from"./chunk-UN5XYYXI.js";import{a as to,b as fr,c as mi,d as Tt,e as Aa,f as io,g as En,h as Pt,i as Bi,j as U}from"./chunk-LOSNG7XO.js";import{f as ya}from"./chunk-EMNDHDXY.js";import{b as ms}from"./chunk-6GXGV4UO.js";import"./chunk-RXBSIEJR.js";import{m as Ta}from"./chunk-6FI4VHCZ.js";import{b as he,c as xn,d as cr,e as Sn,f as Mn}from"./chunk-WE6LAEKP.js";var Ca="170";var Da=0,gs=1,Pa=2;var no=1,La=2,ti=3,_t=0,Ke=1,yt=2,Yt=0,yi=1,_s=2,vs=3,xs=4,Ua=5,Ai=100,Ia=101,Fa=102,Na=103,Oa=104,Ba=200,Ga=201,ka=202,Ha=203,ur=204,dr=205,Va=206,za=207,Wa=208,Xa=209,qa=210,Ya=211,Za=212,Ka=213,ja=214,ro=0,oo=1,so=2,Gi=3,ao=4,lo=5,co=6,fo=7,uo=0,Ja=1,$a=2,Zt=0,Qa=1,el=2,tl=3,il=4,nl=5,rl=6,ol=7;var Ss=300,ii=301,gi=302,hr=303,pr=304,ki=306,mr=1e3,ni=1001,gr=1002,Rt=1003,sl=1004;var _r=1005;var Lt=1006,ho=1007;var ri=1008;var wt=1009,po=1010,mo=1011,bi=1012,Tn=1013,Ht=1014,Ut=1015,_i=1016,yn=1017,An=1018,oi=1020,go=35902,_o=1021,vo=1022,St=1023,xo=1024,So=1025,vi=1026,xi=1027,Mo=1028,bn=1029,Eo=1030,Rn=1031;var wn=1033,Cn=33776,Dn=33777,Pn=33778,Ln=33779,vr=35840,xr=35841,Sr=35842,Mr=35843,Er=36196,Tr=37492,yr=37496,Ar=37808,br=37809,Rr=37810,wr=37811,Cr=37812,Dr=37813,Pr=37814,Lr=37815,Ur=37816,Ir=37817,Fr=37818,Nr=37819,Or=37820,Br=37821,Un=36492,Gr=36494,kr=36495,To=36283,Hr=36284,Vr=36285,zr=36286;var al=3200,ll=3201;var cl=0,fl=1,Kt="",It="srgb",si="srgb-linear",tn="linear",We="srgb";var nn=7680;var Ms=519,ul=512,dl=513,hl=514,yo=515,pl=516,ml=517,gl=518,_l=519,Es=35044;var Ts="300 es",Ot=2e3,rn=2001;var we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var gt=new U,Ao=new we,ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Es,this.updateRanges=[],this.gpuType=Ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),o=Pt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Es&&(e.usage=this.usage),e}};var In=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fn=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var jt=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}};var wi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ai):ai.fromBufferAttribute(o,s),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Ro.subVectors(this.max,Wr),Nn.subVectors(e.a,Wr),On.subVectors(e.b,Wr),Bn.subVectors(e.c,Wr),Hi.subVectors(On,Nn),Vi.subVectors(Bn,On),sn.subVectors(Nn,Bn);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-sn.z,sn.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,sn.z,0,-sn.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-sn.y,sn.x,0];return!ys(t,Nn,On,Bn,Ro)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,Nn,On,Bn,Ro))?!1:(wo.crossVectors(Hi,Vi),t=[wo.x,wo.y,wo.z],ys(t,Nn,On,Bn,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new U,new U,new U,new U,new U,new U,new U,new U],ai=new U,bo=new wi,Nn=new U,On=new U,Bn=new U,Hi=new U,Vi=new U,sn=new U,Wr=new U,Ro=new U,wo=new U,an=new U;function ys(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){an.fromArray(i,o);let a=r.x*Math.abs(an.x)+r.y*Math.abs(an.y)+r.z*Math.abs(an.z),l=e.dot(an),f=t.dot(an),u=n.dot(an);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>a)return!1}return!0}var Bt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var Vd=new wi,Xr=new U,As=new U,zi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(As)),this.expandByPoint(Xr.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};var ke=class i{constructor(e,t,n,r,o,s,a,l,f,u,p,h,m,x,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,f,u,p,h,m,x,M,d)}set(e,t,n,r,o,s,a,l,f,u,p,h,m,x,M,d){let c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=f,c[6]=u,c[10]=p,c[14]=h,c[3]=m,c[7]=x,c[11]=M,c[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Gn.setFromMatrixColumn(e,0).length(),o=1/Gn.setFromMatrixColumn(e,1).length(),s=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),f=Math.sin(r),u=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){let h=s*u,m=s*p,x=a*u,M=a*p;t[0]=l*u,t[4]=-l*p,t[8]=f,t[1]=m+x*f,t[5]=h-M*f,t[9]=-a*l,t[2]=M-h*f,t[6]=x+m*f,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,m=l*p,x=f*u,M=f*p;t[0]=h+M*a,t[4]=x*a-m,t[8]=s*f,t[1]=s*p,t[5]=s*u,t[9]=-a,t[2]=m*a-x,t[6]=M+h*a,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,m=l*p,x=f*u,M=f*p;t[0]=h-M*a,t[4]=-s*p,t[8]=x+m*a,t[1]=m+x*a,t[5]=s*u,t[9]=M-h*a,t[2]=-s*f,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,m=s*p,x=a*u,M=a*p;t[0]=l*u,t[4]=x*f-m,t[8]=h*f+M,t[1]=l*p,t[5]=M*f+h,t[9]=m*f-x,t[2]=-f,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,m=s*f,x=a*l,M=a*f;t[0]=l*u,t[4]=M-h*p,t[8]=x*p+m,t[1]=p,t[5]=s*u,t[9]=-a*u,t[2]=-f*u,t[6]=m*p+x,t[10]=h-M*p}else if(e.order==="XZY"){let h=s*l,m=s*f,x=a*l,M=a*f;t[0]=l*u,t[4]=-p,t[8]=f*u,t[1]=h*p+M,t[5]=s*u,t[9]=m*p-x,t[2]=x*p-m,t[6]=a*u,t[10]=M*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Wd)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Wi.crossVectors(n,Vt),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Wi.crossVectors(n,Vt)),Wi.normalize(),Co.crossVectors(Vt,Wi),r[0]=Wi.x,r[4]=Co.x,r[8]=Vt.x,r[1]=Wi.y,r[5]=Co.y,r[9]=Vt.y,r[2]=Wi.z,r[6]=Co.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],f=n[12],u=n[1],p=n[5],h=n[9],m=n[13],x=n[2],M=n[6],d=n[10],c=n[14],A=n[3],y=n[7],E=n[11],B=n[15],R=r[0],b=r[4],w=r[8],S=r[12],_=r[1],C=r[5],z=r[9],G=r[13],X=r[2],j=r[6],V=r[10],Q=r[14],H=r[3],ne=r[7],ce=r[11],Se=r[15];return o[0]=s*R+a*_+l*X+f*H,o[4]=s*b+a*C+l*j+f*ne,o[8]=s*w+a*z+l*V+f*ce,o[12]=s*S+a*G+l*Q+f*Se,o[1]=u*R+p*_+h*X+m*H,o[5]=u*b+p*C+h*j+m*ne,o[9]=u*w+p*z+h*V+m*ce,o[13]=u*S+p*G+h*Q+m*Se,o[2]=x*R+M*_+d*X+c*H,o[6]=x*b+M*C+d*j+c*ne,o[10]=x*w+M*z+d*V+c*ce,o[14]=x*S+M*G+d*Q+c*Se,o[3]=A*R+y*_+E*X+B*H,o[7]=A*b+y*C+E*j+B*ne,o[11]=A*w+y*z+E*V+B*ce,o[15]=A*S+y*G+E*Q+B*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],f=e[13],u=e[2],p=e[6],h=e[10],m=e[14],x=e[3],M=e[7],d=e[11],c=e[15];return x*(+o*l*p-r*f*p-o*a*h+n*f*h+r*a*m-n*l*m)+M*(+t*l*m-t*f*h+o*s*h-r*s*m+r*f*u-o*l*u)+d*(+t*f*p-t*a*m-o*s*p+n*s*m+o*a*u-n*f*u)+c*(-r*a*u-t*l*p+t*a*h+r*s*p-n*s*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],f=e[7],u=e[8],p=e[9],h=e[10],m=e[11],x=e[12],M=e[13],d=e[14],c=e[15],A=p*d*f-M*h*f+M*l*m-a*d*m-p*l*c+a*h*c,y=x*h*f-u*d*f-x*l*m+s*d*m+u*l*c-s*h*c,E=u*M*f-x*p*f+x*a*m-s*M*m-u*a*c+s*p*c,B=x*p*l-u*M*l-x*a*h+s*M*h+u*a*d-s*p*d,R=t*A+n*y+r*E+o*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return e[0]=A*b,e[1]=(M*h*o-p*d*o-M*r*m+n*d*m+p*r*c-n*h*c)*b,e[2]=(a*d*o-M*l*o+M*r*f-n*d*f-a*r*c+n*l*c)*b,e[3]=(p*l*o-a*h*o-p*r*f+n*h*f+a*r*m-n*l*m)*b,e[4]=y*b,e[5]=(u*d*o-x*h*o+x*r*m-t*d*m-u*r*c+t*h*c)*b,e[6]=(x*l*o-s*d*o-x*r*f+t*d*f+s*r*c-t*l*c)*b,e[7]=(s*h*o-u*l*o+u*r*f-t*h*f-s*r*m+t*l*m)*b,e[8]=E*b,e[9]=(x*p*o-u*M*o-x*n*m+t*M*m+u*n*c-t*p*c)*b,e[10]=(s*M*o-x*a*o+x*n*f-t*M*f-s*n*c+t*a*c)*b,e[11]=(u*a*o-s*p*o-u*n*f+t*p*f+s*n*m-t*a*m)*b,e[12]=B*b,e[13]=(u*M*r-x*p*r+x*n*h-t*M*h-u*n*d+t*p*d)*b,e[14]=(x*a*r-s*M*r-x*n*l+t*M*l+s*n*d-t*a*d)*b,e[15]=(s*p*r-u*a*r+u*n*l-t*p*l-s*n*h+t*a*h)*b,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,f=o*s,u=o*a;return this.set(f*s+n,f*a-r*l,f*l+r*a,0,f*a+r*l,u*a+n,u*l-r*s,0,f*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,f=o+o,u=s+s,p=a+a,h=o*f,m=o*u,x=o*p,M=s*u,d=s*p,c=a*p,A=l*f,y=l*u,E=l*p,B=n.x,R=n.y,b=n.z;return r[0]=(1-(M+c))*B,r[1]=(m+E)*B,r[2]=(x-y)*B,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+c))*R,r[6]=(d+A)*R,r[7]=0,r[8]=(x+y)*b,r[9]=(d-A)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,o=Gn.set(r[0],r[1],r[2]).length(),s=Gn.set(r[4],r[5],r[6]).length(),a=Gn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);let f=1/o,u=1/s,p=1/a;return li.elements[0]*=f,li.elements[1]*=f,li.elements[2]*=f,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=p,li.elements[9]*=p,li.elements[10]*=p,t.setFromRotationMatrix(li),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Ot){let l=this.elements,f=2*o/(t-e),u=2*o/(n-r),p=(t+e)/(t-e),h=(n+r)/(n-r),m,x;if(a===Ot)m=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===rn)m=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Ot){let l=this.elements,f=1/(t-e),u=1/(n-r),p=1/(s-o),h=(t+e)*f,m=(n+r)*u,x,M;if(a===Ot)x=(s+o)*p,M=-2*p;else if(a===rn)x=o*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gn=new U,li=new ke,zd=new U(0,0,0),Wd=new U(1,1,1),Wi=new U,Co=new U,Vt=new U;var vl=new ke,xl=new Bi,ft=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],f=r[5],u=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ft.DEFAULT_ORDER="XYZ";var Xi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Ee=class i{constructor(e,t,n,r,o,s,a,l,f){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,f)}set(e,t,n,r,o,s,a,l,f){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],f=n[1],u=n[4],p=n[7],h=n[2],m=n[5],x=n[8],M=r[0],d=r[3],c=r[6],A=r[1],y=r[4],E=r[7],B=r[2],R=r[5],b=r[8];return o[0]=s*M+a*A+l*B,o[3]=s*d+a*y+l*R,o[6]=s*c+a*E+l*b,o[1]=f*M+u*A+p*B,o[4]=f*d+u*y+p*R,o[7]=f*c+u*E+p*b,o[2]=h*M+m*A+x*B,o[5]=h*d+m*y+x*R,o[8]=h*c+m*E+x*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],f=e[7],u=e[8];return t*s*u-t*a*f-n*o*u+n*a*l+r*o*f-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],f=e[7],u=e[8],p=u*s-a*f,h=a*l-u*o,m=f*o-s*l,x=t*p+n*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=p*M,e[1]=(r*f-u*n)*M,e[2]=(a*n-r*s)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*o-a*t)*M,e[6]=m*M,e[7]=(n*l-f*t)*M,e[8]=(s*t-n*o)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let l=Math.cos(o),f=Math.sin(o);return this.set(n*l,n*f,-n*(l*s+f*a)+s+e,-r*f,r*l,-r*(-f*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bs.makeScale(e,t)),this}rotate(e){return this.premultiply(bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bs=new Ee;var Xd=0,Sl=new U,kn=new Bi,Ci=new ke,Do=new U,qr=new U,qd=new U,Yd=new Bi,Ml=new U(1,0,0),El=new U(0,1,0),Tl=new U(0,0,1),yl={type:"added"},Zd={type:"removed"},Hn={type:"childadded",child:null},Rs={type:"childremoved",child:null},pt=class i extends Bt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new ft,n=new Bi,r=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ee}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(qr,Do,this.up):Ci.lookAt(Do,qr,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),kn.setFromRotationMatrix(Ci),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){let p=l[f];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){let a=s(e.geometries),l=s(e.materials),f=s(e.textures),u=s(e.images),p=s(e.shapes),h=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(a){let l=[];for(let f in a){let u=a[f];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Po(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bl(){let i=qi("canvas");return i.style.display="block",i}var Al={};function ln(i){i in Al||(Al[i]=!0,console.warn(i))}function Rl(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function wl(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cl(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Kd=0,Jt=new ke,ws=new pt,Vn=new U,zt=new wi,Yr=new wi,Mt=new U,At=class i extends Bt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Po(e)?Fn:In)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Ee().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,r=t.count;n<r;n++){let o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];zt.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(zt.min,Yr.min),zt.expandByPoint(Mt),Mt.addVectors(zt.max,Yr.max),zt.expandByPoint(Mt)):(zt.expandByPoint(Yr.min),zt.expandByPoint(Yr.max))}zt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Mt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],l=this.morphTargetsRelative;for(let f=0,u=a.count;f<u;f++)Mt.fromBufferAttribute(a,f),l&&(Vn.fromBufferAttribute(e,f),Mt.add(Vn)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new U,l[w]=new U;let f=new U,u=new U,p=new U,h=new we,m=new we,x=new we,M=new U,d=new U;function c(w,S,_){f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),p.fromBufferAttribute(n,_),h.fromBufferAttribute(o,w),m.fromBufferAttribute(o,S),x.fromBufferAttribute(o,_),u.sub(f),p.sub(f),m.sub(h),x.sub(h);let C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(C),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(C),a[w].add(M),a[S].add(M),a[_].add(M),l[w].add(d),l[S].add(d),l[_].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let w=0,S=A.length;w<S;++w){let _=A[w],C=_.start,z=_.count;for(let G=C,X=C+z;G<X;G+=3)c(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new U,E=new U,B=new U,R=new U;function b(w){B.fromBufferAttribute(r,w),R.copy(B);let S=a[w];y.copy(S),y.sub(B.multiplyScalar(B.dot(S))).normalize(),E.crossVectors(R,S);let C=E.dot(l[w])<0?-1:1;s.setXYZW(w,y.x,y.y,y.z,C)}for(let w=0,S=A.length;w<S;++w){let _=A[w],C=_.start,z=_.count;for(let G=C,X=C+z;G<X;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let r=new U,o=new U,s=new U,a=new U,l=new U,f=new U,u=new U,p=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){let x=e.getX(h+0),M=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,M),s.fromBufferAttribute(t,d),u.subVectors(s,o),p.subVectors(r,o),u.cross(p),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),f.fromBufferAttribute(n,d),a.add(u),l.add(u),f.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,f.x,f.y,f.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),p.subVectors(r,o),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){let f=a.array,u=a.itemSize,p=a.normalized,h=new f.constructor(l.length*u),m=0,x=0;for(let M=0,d=l.length;M<d;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let c=0;c<u;c++)h[x++]=f[m++]}return new ct(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],f=e(l,n);t.setAttribute(a,f)}let o=this.morphAttributes;for(let a in o){let l=[],f=o[a];for(let u=0,p=f.length;u<p;u++){let h=f[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let f=s[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let f=n[l];e.data.attributes[l]=f.toJSON(e.data)}let r={},o=!1;for(let l in this.morphAttributes){let f=this.morphAttributes[l],u=[];for(let p=0,h=f.length;p<h;p++){let m=f[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let f in r){let u=r[f];this.setAttribute(f,u.clone(t))}let o=e.morphAttributes;for(let f in o){let u=[],p=o[f];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let f=0,u=s.length;f<u;f++){let p=s[f];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Si=class i extends At{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],f=[],u=[],p=[],h=0,m=0;x("z","y","x",-1,-1,n,t,e,s,o,0),x("z","y","x",1,-1,n,t,-e,s,o,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,o,4),x("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(p,2));function x(M,d,c,A,y,E,B,R,b,w,S){let _=E/b,C=B/w,z=E/2,G=B/2,X=R/2,j=b+1,V=w+1,Q=0,H=0,ne=new U;for(let ce=0;ce<V;ce++){let Se=ce*C-G;for(let Be=0;Be<j;Be++){let tt=Be*_-z;ne[M]=tt*A,ne[d]=Se*y,ne[c]=X,f.push(ne.x,ne.y,ne.z),ne[M]=0,ne[d]=0,ne[c]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),p.push(Be/b),p.push(1-ce/w),Q+=1}}for(let ce=0;ce<w;ce++)for(let Se=0;Se<b;Se++){let Be=h+Se+j*ce,tt=h+Se+j*(ce+1),q=h+(Se+1)+j*(ce+1),ee=h+(Se+1)+j*ce;l.push(Be,tt,ee),l.push(tt,q,ee),H+=6}a.addGroup(m,H,S),m+=H,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};var Ds=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,l,f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return f.push(u,p),this},this.removeHandler=function(u){let p=f.indexOf(u);return p!==-1&&f.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=f.length;p<h;p+=2){let m=f[p],x=f[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}},Dl=new Ds;var cn=class{constructor(e){this.manager=e!==void 0?e:Dl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};cn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=class extends cn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=Cs.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;let a=qi("img");function l(){u(),Cs.add(e,this),t&&t(this),o.manager.itemEnd(e)}function f(p){u(),r&&r(p),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}};var Ie={enabled:!0,workingColorSpace:si,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===We&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===We&&(i.r=fn(i.r),i.g=fn(i.g),i.b=fn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kt?tn:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pl=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Ul=[.3127,.329],Il=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie.define({[si]:{primaries:Pl,whitePoint:Ul,transfer:tn,toXYZ:Il,fromXYZ:Fl,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Pl,whitePoint:Ul,transfer:We,toXYZ:Il,fromXYZ:Fl,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});var zn,Uo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=qi("canvas")),zn.width=e.width,zn.height=e.height;let n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ci(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var jd=0,Wn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ps(r[s].image)):o.push(Ps(r[s]))}else o=Ps(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function Ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,mt=class i extends Bt{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,r=ni,o=Lt,s=ri,a=St,l=wt,f=i.DEFAULT_ANISOTROPY,u=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=mi(),this.name="",this.source=new Wn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ss)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Ss;mt.DEFAULT_ANISOTROPY=1;var Zr=class extends cn{constructor(e){super(e)}load(e,t,n,r){let o=new mt,s=new Lo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}};var Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Ls(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ie.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ie.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ie.workingColorSpace){if(e=Aa(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Ls(s,o,e+1/3),this.g=Ls(s,o,e),this.b=Ls(s,o,e-1/3)}return Ie.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ie.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Tt(Ct.r*255,0,255))*65536+Math.round(Tt(Ct.g*255,0,255))*256+Math.round(Tt(Ct.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,r=Ct.g,o=Ct.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,f,u=(a+s)/2;if(a===s)l=0,f=0;else{let p=s-a;switch(f=u<=.5?p/(s+a):p/(2-s-a),s){case n:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-n)/p+2;break;case o:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=f,e.l=u,e}getRGB(e,t=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=It){Ie.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,r=Ct.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Io);let n=io(Yi.h,Io.h,t),r=io(Yi.s,Io.s,t),o=io(Yi.l,Io.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new ye;ye.NAMES=Nl;var $d=0,Mi=class extends Bt{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=mi(),this.name="",this.blending=yi,this.side=_t,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=dr,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ms,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==_t&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ms&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};var je=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ft,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fi=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Di=new U,Us=new U,Fo=new U,Zi=new U,Is=new U,No=new U,Fs=new U,Xn=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Us.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Us);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Fo),a=Zi.dot(this.direction),l=-Zi.dot(Fo),f=Zi.lengthSq(),u=Math.abs(1-s*s),p,h,m,x;if(u>0)if(p=s*l-a,h=s*a-l,x=o*u,p>=0)if(h>=-x)if(h<=x){let M=1/u;p*=M,h*=M,m=p*(p+s*h+2*a)+h*(s*p+h+2*l)+f}else h=o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+f;else h=-o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+f;else h<=-x?(p=Math.max(0,-(-s*o+a)),h=p>0?-o:Math.min(Math.max(-o,-l),o),m=-p*p+h*(h+2*l)+f):h<=x?(p=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+f):(p=Math.max(0,-(s*o+a)),h=p>0?o:Math.min(Math.max(-o,-l),o),m=-p*p+h*(h+2*l)+f);else h=s>0?-o:o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Us).addScaledVector(Fo,h),m}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l,f=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,r=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,r=(e.min.x-h.x)*f),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,r,o){Is.subVectors(t,e),No.subVectors(n,e),Fs.crossVectors(Is,No);let s=this.direction.dot(Fs),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(No.crossVectors(Zi,No));if(l<0)return null;let f=a*this.direction.dot(Is.cross(Zi));if(f<0||l+f>s)return null;let u=-a*Zi.dot(Fs);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,l=e.elements,f=l[0],u=l[4],p=l[8],h=l[1],m=l[5],x=l[9],M=l[2],d=l[6],c=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-M)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+M)<.1&&Math.abs(x+d)<.1&&Math.abs(f+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(f+1)/2,E=(m+1)/2,B=(c+1)/2,R=(u+h)/4,b=(p+M)/4,w=(x+d)/4;return y>E&&y>B?y<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(y),r=R/n,o=b/n):E>B?E<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),n=R/r,o=w/r):B<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(B),n=b/o,r=w/o),this.set(n,r,o,t),this}let A=Math.sqrt((d-x)*(d-x)+(p-M)*(p-M)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(d-x)/A,this.y=(p-M)/A,this.z=(h-u)/A,this.w=Math.acos((f+m+c-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var ui=new U,Pi=new U,Ns=new U,Li=new U,qn=new U,Yn=new U,Ol=new U,Os=new U,Bs=new U,Gs=new U,ks=new et,Hs=new et,Vs=new et,Ki=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ui.subVectors(e,t),r.cross(ui);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){ui.subVectors(r,t),Pi.subVectors(n,t),Ns.subVectors(e,t);let s=ui.dot(ui),a=ui.dot(Pi),l=ui.dot(Ns),f=Pi.dot(Pi),u=Pi.dot(Ns),p=s*f-a*a;if(p===0)return o.set(0,0,0),null;let h=1/p,m=(f*l-a*u)*h,x=(s*u-a*l)*h;return o.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(s,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return ks.setScalar(0),Hs.setScalar(0),Vs.setScalar(0),ks.fromBufferAttribute(e,t),Hs.fromBufferAttribute(e,n),Vs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ks,o.x),s.addScaledVector(Hs,o.y),s.addScaledVector(Vs,o.z),s}static isFrontFacing(e,t,n,r){return ui.subVectors(n,t),Pi.subVectors(e,t),ui.cross(Pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ui.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;qn.subVectors(r,n),Yn.subVectors(o,n),Os.subVectors(e,n);let l=qn.dot(Os),f=Yn.dot(Os);if(l<=0&&f<=0)return t.copy(n);Bs.subVectors(e,r);let u=qn.dot(Bs),p=Yn.dot(Bs);if(u>=0&&p<=u)return t.copy(r);let h=l*p-u*f;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(qn,s);Gs.subVectors(e,o);let m=qn.dot(Gs),x=Yn.dot(Gs);if(x>=0&&m<=x)return t.copy(o);let M=m*f-l*x;if(M<=0&&f>=0&&x<=0)return a=f/(f-x),t.copy(n).addScaledVector(Yn,a);let d=u*x-m*p;if(d<=0&&p-u>=0&&m-x>=0)return Ol.subVectors(o,r),a=(p-u)/(p-u+(m-x)),t.copy(r).addScaledVector(Ol,a);let c=1/(d+M+h);return s=M*c,a=h*c,t.copy(n).addScaledVector(qn,s).addScaledVector(Yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Bl=new ke,un=new Xn,Oo=new zi,Gl=new U,Bo=new U,Go=new U,ko=new U,zs=new U,Ho=new U,kl=new U,Vo=new U,ut=class extends pt{constructor(e=new At,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Ho.set(0,0,0);for(let l=0,f=o.length;l<f;l++){let u=a[l],p=o[l];u!==0&&(zs.fromBufferAttribute(p,e),s?Ho.addScaledVector(zs,u):Ho.addScaledVector(zs.sub(t),u))}t.add(Ho)}return t}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(o),un.copy(e.ray).recast(e.near),!(Oo.containsPoint(un.origin)===!1&&(un.intersectSphere(Oo,Gl)===null||un.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Bl.copy(o).invert(),un.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,un)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,f=o.attributes.uv,u=o.attributes.uv1,p=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,M=h.length;x<M;x++){let d=h[x],c=s[d.materialIndex],A=Math.max(d.start,m.start),y=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let E=A,B=y;E<B;E+=3){let R=a.getX(E),b=a.getX(E+1),w=a.getX(E+2);r=zo(this,c,e,n,f,u,p,R,b,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=x,c=M;d<c;d+=3){let A=a.getX(d),y=a.getX(d+1),E=a.getX(d+2);r=zo(this,s,e,n,f,u,p,A,y,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,M=h.length;x<M;x++){let d=h[x],c=s[d.materialIndex],A=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=A,B=y;E<B;E+=3){let R=E,b=E+1,w=E+2;r=zo(this,c,e,n,f,u,p,R,b,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let d=x,c=M;d<c;d+=3){let A=d,y=d+1,E=d+2;r=zo(this,s,e,n,f,u,p,A,y,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}};function Qd(i,e,t,n,r,o,s,a){let l;if(e.side===Ke?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===_t,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let f=t.ray.origin.distanceTo(Vo);return f<t.near||f>t.far?null:{distance:f,point:Vo.clone(),object:i}}function zo(i,e,t,n,r,o,s,a,l,f){i.getVertexPosition(a,Bo),i.getVertexPosition(l,Go),i.getVertexPosition(f,ko);let u=Qd(i,e,t,n,Bo,Go,ko,kl);if(u){let p=new U;Ki.getBarycoord(kl,Bo,Go,ko,p),r&&(u.uv=Ki.getInterpolatedAttribute(r,a,l,f,p,new we)),o&&(u.uv1=Ki.getInterpolatedAttribute(o,a,l,f,p,new we)),s&&(u.normal=Ki.getInterpolatedAttribute(s,a,l,f,p,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c:f,normal:new U,materialIndex:0};Ki.getNormal(Bo,Go,ko,h.normal),u.face=h,u.barycoord=p}return u}var Zn=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};var ji=new U,Hl=new we,Vl=new we,Et=class extends Zn{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Vl),t.subVectors(Vl,Hl)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,f=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/f,r*=s.width/l,n*=s.height/f}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zl=new ke,Ws=class{constructor(e,t,n=0,r=1/0){this.ray=new Xn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zl),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Xs(e[r],this,n,t);return n.sort(Wl),n}};function Wl(i,e){return i.distance-e.distance}function Xs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Xs(o[s],e,t,!0)}}var qs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ys=new U,eh=new U,th=new Ee,di=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ys.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||th.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};var dn=new zi,Wo=new U,Kn=class{constructor(e=new di,t=new di,n=new di,r=new di,o=new di,s=new di){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ot){let n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],f=r[4],u=r[5],p=r[6],h=r[7],m=r[8],x=r[9],M=r[10],d=r[11],c=r[12],A=r[13],y=r[14],E=r[15];if(n[0].setComponents(l-o,h-f,d-m,E-c).normalize(),n[1].setComponents(l+o,h+f,d+m,E+c).normalize(),n[2].setComponents(l+s,h+u,d+x,E+A).normalize(),n[3].setComponents(l-s,h-u,d-x,E-A).normalize(),n[4].setComponents(l-a,h-p,d-M,E-y).normalize(),t===Ot)n[5].setComponents(l+a,h+p,d+M,E+y).normalize();else if(t===rn)n[5].setComponents(a,p,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dn)}intersectsSprite(e){return dn.center.set(0,0,0),dn.radius=.7071067811865476,dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(dn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xo(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Xl(i){let e=new WeakMap;function t(a,l){let f=a.array,u=a.usage,p=f.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,f,u),a.onUploadCallback();let m;if(f instanceof Float32Array)m=i.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=i.SHORT;else if(f instanceof Uint32Array)m=i.UNSIGNED_INT;else if(f instanceof Int32Array)m=i.INT;else if(f instanceof Int8Array)m=i.BYTE;else if(f instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,f){let u=l.array,p=l.updateRanges;if(i.bindBuffer(f,a),p.length===0)i.bufferSubData(f,0,u);else{p.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<p.length;m++){let x=p[h],M=p[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,p[h]=M)}p.length=h+1;for(let m=0,x=p.length;m<x;m++){let M=p[m];i.bufferSubData(f,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let f=e.get(a);if(f===void 0)e.set(a,t(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,a,l),f.version=a.version}}return{get:r,remove:o,update:s}}var jn=class i extends At{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),f=a+1,u=l+1,p=e/a,h=t/l,m=[],x=[],M=[],d=[];for(let c=0;c<u;c++){let A=c*h-s;for(let y=0;y<f;y++){let E=y*p-o;x.push(E,-A,0),M.push(0,0,1),d.push(y/a),d.push(1-c/l)}}for(let c=0;c<l;c++)for(let A=0;A<a;A++){let y=A+f*c,E=A+f*(c+1),B=A+1+f*(c+1),R=A+1+f*c;m.push(y,E,R),m.push(E,B,R)}this.setIndex(m),this.setAttribute("position",new jt(x,3)),this.setAttribute("normal",new jt(M,3)),this.setAttribute("uv",new jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=Ui(i[t]);for(let r in n)e[r]=n[r]}return e}function ql(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}var Yl={clone:Ui,merge:Dt};var Zl=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Kl=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var Ft=class extends Mi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=ql(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};var jl=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Jl=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var $l=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Ql=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var ec=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var tc=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var ic=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var nc=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var rc=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`;var oc=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var sc=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var ac=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var lc=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var cc=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var fc=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var uc=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`;var dc=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var hc=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var pc=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var mc=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`;var gc=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`;var _c=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`;var vc=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`;var xc=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var Sc=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`;var Mc=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`;var Ec=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var Tc=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var yc=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var Ac=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var bc=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var Rc=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var wc=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`;var Cc=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`;var Dc=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var Pc=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var Lc=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var Uc=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var Ic=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var Fc=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var Nc=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var Oc=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var Bc=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var Gc=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var kc=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var Hc=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`;var Vc=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`;var zc=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var Wc=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var Xc=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var qc=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var Yc=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var Zc=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Kc=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var jc=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Jc=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var $c=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Qc=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var ef=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var tf=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var nf=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var rf=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var of=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var sf=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var af=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var lf=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var cf=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var ff=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var uf=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var df=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`;var hf=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var pf=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var mf=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var gf=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var _f=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var vf=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`;var xf=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var Sf=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var Mf=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var Ef=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var Tf=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var yf=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var Af=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`;var bf=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var Rf=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var wf=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var Cf=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var Df=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var Pf=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var Lf=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`;var Uf=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var If=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var Ff=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var Nf=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Of=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var Bf=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var Gf=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var kf=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var Hf=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Vf=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var zf=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var Wf=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var Xf=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job 
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var qf=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Yf=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Zf=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var Kf=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var jf=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Jf=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var $f=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Qf=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var eu=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,tu=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var iu=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,nu=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`;var ru=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,ou=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`;var su=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,au=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var lu=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,cu=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var fu=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,uu=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var du=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,hu=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var pu=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,mu=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var gu=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,_u=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var vu=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,xu=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Su=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Mu=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Eu=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Tu=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var yu=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Au=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var bu=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ru=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var wu=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Cu=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var Pe={alphahash_fragment:jl,alphahash_pars_fragment:Jl,alphamap_fragment:$l,alphamap_pars_fragment:Ql,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:ic,aomap_pars_fragment:nc,batching_pars_vertex:rc,batching_vertex:oc,begin_vertex:sc,beginnormal_vertex:ac,bsdfs:lc,iridescence_fragment:cc,bumpmap_pars_fragment:fc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:dc,clipping_planes_pars_vertex:hc,clipping_planes_vertex:pc,color_fragment:mc,color_pars_fragment:gc,color_pars_vertex:_c,color_vertex:vc,common:xc,cube_uv_reflection_fragment:Sc,defaultnormal_vertex:Mc,displacementmap_pars_vertex:Ec,displacementmap_vertex:Tc,emissivemap_fragment:yc,emissivemap_pars_fragment:Ac,colorspace_fragment:bc,colorspace_pars_fragment:Rc,envmap_fragment:wc,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Dc,envmap_pars_vertex:Pc,envmap_physical_pars_fragment:Vc,envmap_vertex:Lc,fog_vertex:Uc,fog_pars_vertex:Ic,fog_fragment:Fc,fog_pars_fragment:Nc,gradientmap_pars_fragment:Oc,lightmap_pars_fragment:Bc,lights_lambert_fragment:Gc,lights_lambert_pars_fragment:kc,lights_pars_begin:Hc,lights_toon_fragment:zc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:qc,lights_physical_fragment:Yc,lights_physical_pars_fragment:Zc,lights_fragment_begin:Kc,lights_fragment_maps:jc,lights_fragment_end:Jc,logdepthbuf_fragment:$c,logdepthbuf_pars_fragment:Qc,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:tf,map_fragment:nf,map_pars_fragment:rf,map_particle_fragment:of,map_particle_pars_fragment:sf,metalnessmap_fragment:af,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:ff,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:hf,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:vf,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:yf,packing:Af,premultiplied_alpha_fragment:bf,project_vertex:Rf,dithering_fragment:wf,dithering_pars_fragment:Cf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Uf,shadowmap_vertex:If,shadowmask_pars_fragment:Ff,skinbase_vertex:Nf,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:Gf,specularmap_fragment:kf,specularmap_pars_fragment:Hf,tonemapping_fragment:Vf,tonemapping_pars_fragment:zf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:Kf,background_vert:jf,background_frag:Jf,backgroundCube_vert:$f,backgroundCube_frag:Qf,cube_vert:eu,cube_frag:tu,depth_vert:iu,depth_frag:nu,distanceRGBA_vert:ru,distanceRGBA_frag:ou,equirect_vert:su,equirect_frag:au,linedashed_vert:lu,linedashed_frag:cu,meshbasic_vert:fu,meshbasic_frag:uu,meshlambert_vert:du,meshlambert_frag:hu,meshmatcap_vert:pu,meshmatcap_frag:mu,meshnormal_vert:gu,meshnormal_frag:_u,meshphong_vert:vu,meshphong_frag:xu,meshphysical_vert:Su,meshphysical_frag:Mu,meshtoon_vert:Eu,meshtoon_frag:Tu,points_vert:yu,points_frag:Au,shadow_vert:bu,shadow_frag:Ru,sprite_vert:wu,sprite_frag:Cu};var te={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}};var $t={basic:{uniforms:Dt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Dt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ye(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Dt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Dt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Dt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ye(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Dt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Dt([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Dt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Dt([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Dt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Dt([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Dt([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Dt([te.lights,te.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};$t.physical={uniforms:Dt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var Yo={r:0,b:0,g:0},hn=new ft,xh=new ke;function Du(i,e,t,n,r,o,s){let a=new ye(0),l=o===!0?0:1,f,u,p=null,h=0,m=null;function x(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function M(A){let y=!1,E=x(A);E===null?c(a,l):E&&E.isColor&&(c(E,1),y=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,s):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(A,y){let E=x(y);E&&(E.isCubeTexture||E.mapping===ki)?(u===void 0&&(u=new ut(new Si(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Ui($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hn.copy(y.backgroundRotation),hn.x*=-1,hn.y*=-1,hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xh.makeRotationFromEuler(hn)),u.material.toneMapped=Ie.getTransfer(E.colorSpace)!==We,(p!==E||h!==E.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=E,h=E.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new ut(new jn(2,2),new Ft({name:"BackgroundMaterial",uniforms:Ui($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.toneMapped=Ie.getTransfer(E.colorSpace)!==We,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||h!==E.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=E,h=E.version,m=i.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function c(A,y){A.getRGB(Yo,qo(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,y,s)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,c(a,l)},render:M,addToRenderList:d}}function Pu(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),o=r,s=!1;function a(_,C,z,G,X){let j=!1,V=p(G,z,C);o!==V&&(o=V,f(o.object)),j=m(_,G,z,X),j&&x(_,G,z,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,E(_,C,z,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function f(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function p(_,C,z){let G=z.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let j=X[C.id];j===void 0&&(j={},X[C.id]=j);let V=j[G];return V===void 0&&(V=h(l()),j[G]=V),V}function h(_){let C=[],z=[],G=[];for(let X=0;X<t;X++)C[X]=0,z[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:G,object:_,attributes:{},index:null}}function m(_,C,z,G){let X=o.attributes,j=C.attributes,V=0,Q=z.getAttributes();for(let H in Q)if(Q[H].location>=0){let ce=X[H],Se=j[H];if(Se===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(Se=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(Se=_.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;V++}return o.attributesNum!==V||o.index!==G}function x(_,C,z,G){let X={},j=C.attributes,V=0,Q=z.getAttributes();for(let H in Q)if(Q[H].location>=0){let ce=j[H];ce===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor));let Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),X[H]=Se,V++}o.attributes=X,o.attributesNum=V,o.index=G}function M(){let _=o.newAttributes;for(let C=0,z=_.length;C<z;C++)_[C]=0}function d(_){c(_,0)}function c(_,C){let z=o.newAttributes,G=o.enabledAttributes,X=o.attributeDivisors;z[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),X[_]!==C&&(i.vertexAttribDivisor(_,C),X[_]=C)}function A(){let _=o.newAttributes,C=o.enabledAttributes;for(let z=0,G=C.length;z<G;z++)C[z]!==_[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function y(_,C,z,G,X,j,V){V===!0?i.vertexAttribIPointer(_,C,z,X,j):i.vertexAttribPointer(_,C,z,G,X,j)}function E(_,C,z,G){M();let X=G.attributes,j=z.getAttributes(),V=C.defaultAttributeValues;for(let Q in j){let H=j[Q];if(H.location>=0){let ne=X[Q];if(ne===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),ne!==void 0){let ce=ne.normalized,Se=ne.itemSize,Be=e.get(ne);if(Be===void 0)continue;let tt=Be.buffer,q=Be.type,ee=Be.bytesPerElement,_e=q===i.INT||q===i.UNSIGNED_INT||ne.gpuType===Tn;if(ne.isInterleavedBufferAttribute){let re=ne.data,be=re.stride,De=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)c(H.location+Ge,re.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)d(H.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ge=0;Ge<H.locationSize;Ge++)y(H.location+Ge,Se/H.locationSize,q,ce,be*ee,(De+Se/H.locationSize*Ge)*ee,_e)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)c(H.location+re,ne.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<H.locationSize;re++)d(H.location+re);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let re=0;re<H.locationSize;re++)y(H.location+re,Se/H.locationSize,q,ce,Se*ee,Se/H.locationSize*re*ee,_e)}}else if(V!==void 0){let ce=V[Q];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(H.location,ce);break;case 3:i.vertexAttrib3fv(H.location,ce);break;case 4:i.vertexAttrib4fv(H.location,ce);break;default:i.vertexAttrib1fv(H.location,ce)}}}}A()}function B(){w();for(let _ in n){let C=n[_];for(let z in C){let G=C[z];for(let X in G)u(G[X].object),delete G[X];delete C[z]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let z in C){let G=C[z];for(let X in G)u(G[X].object),delete G[X];delete C[z]}delete n[_.id]}function b(_){for(let C in n){let z=n[C];if(z[_.id]===void 0)continue;let G=z[_.id];for(let X in G)u(G[X].object),delete G[X];delete z[_.id]}}function w(){S(),s=!0,o!==r&&(o=r,f(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:d,disableUnusedAttributes:A}}function Lu(i,e,t){let n;function r(f){n=f}function o(f,u){i.drawArrays(n,f,u),t.update(u,n,1)}function s(f,u,p){p!==0&&(i.drawArraysInstanced(n,f,u,p),t.update(u,n,p))}function a(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,u,0,p);let m=0;for(let x=0;x<p;x++)m+=u[x];t.update(m,n,1)}function l(f,u,p,h){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<f.length;x++)s(f[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(n,f,0,u,0,h,0,p);let x=0;for(let M=0;M<p;M++)x+=u[M]*h[M];t.update(x,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uu(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==St&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let w=b===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ut&&!w)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",u=l(f);u!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);let p=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:d,maxAttributes:c,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:B,maxSamples:R}}function Iu(i){let e=this,t=null,n=0,r=!1,o=!1,s=new di,a=new Ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let m=p.length!==0||h||n!==0||r;return r=h,n=p.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){let x=p.clippingPlanes,M=p.clipIntersection,d=p.clipShadows,c=i.get(p);if(!r||x===null||x.length===0||o&&!d)o?u(null):f();else{let A=o?0:n,y=A*4,E=c.clippingState||null;l.value=E,E=u(x,h,y,m);for(let B=0;B!==y;++B)E[B]=t[B];c.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,m,x){let M=p!==null?p.length:0,d=null;if(M!==0){if(d=l.value,x!==!0||d===null){let c=m+M*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<c)&&(d=new Float32Array(c));for(let y=0,E=m;y!==M;++y,E+=4)s.copy(p[y]).applyMatrix4(A,a),s.normal.toArray(d,E),d[E+3]=s.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,d}}var Zo=class extends Bt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gt=class extends Zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var Jn=-90,$n=1,Ko=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Et(Jn,$n,e,t);r.layers=this.layers,this.add(r);let o=new Et(Jn,$n,e,t);o.layers=this.layers,this.add(o);let s=new Et(Jn,$n,e,t);s.layers=this.layers,this.add(s);let a=new Et(Jn,$n,e,t);a.layers=this.layers,this.add(a);let l=new Et(Jn,$n,e,t);l.layers=this.layers,this.add(l);let f=new Et(Jn,$n,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(let f of t)this.remove(f);if(e===Ot)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rn)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,f,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};var Qn=class extends mt{constructor(e,t,n,r,o,s,a,l,f,u){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,r,o,s,a,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var jo=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),o=new Ft({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Yt});o.uniforms.tEquirect.value=t;let s=new ut(r,o),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Lt),new Ko(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function Fu(i){let e=new WeakMap;function t(s,a){return a===hr?s.mapping=ii:a===pr&&(s.mapping=gi),s}function n(s){if(s&&s.isTexture){let a=s.mapping;if(a===hr||a===pr)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let f=new jo(l.height);return f.fromEquirectangularTexture(i,s),e.set(s,f),s.addEventListener("dispose",r),t(f.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}var Jo=class extends Zn{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,s=o+f*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var tr=4,Nu=[.125,.215,.35,.446,.526,.582],mn=20,Zs=new Jo,Ou=new ye,Ks=null,js=0,Js=0,$s=!1,pn=(1+Math.sqrt(5))/2,er=1/pn,Bu=[new U(-pn,er,0),new U(pn,er,0),new U(-er,0,pn),new U(er,0,pn),new U(0,pn,-er),new U(0,pn,er),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ks=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,js,Js),this._renderer.xr.enabled=$s,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:_i,format:St,colorSpace:si,depthBuffer:!1},r=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sh(o)),this._blurMaterial=Mh(o,e,t)}return r}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,r){let a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(Ou),u.toneMapping=Zt,u.autoClear=!1;let m=new je({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),x=new ut(new Si,m),M=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,M=!0):(m.color.copy(Ou),M=!0);for(let c=0;c<6;c++){let A=c%3;A===0?(a.up.set(0,l[c],0),a.lookAt(f[c],0,0)):A===1?(a.up.set(0,0,l[c]),a.lookAt(0,f[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,f[c]));let y=this._cubeSize;$o(r,A*y,c>2?y:0,y,y),u.setRenderTarget(r),M&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ii||e.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new ut(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Zs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let o=1;o<r;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Bu[(r-o-1)%Bu.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){let l=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,p=new ut(this._lodPlanes[r],f),h=f.uniforms,m=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*mn-1),M=o/x,d=isFinite(o)?1+Math.floor(u*M):mn;d>mn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mn}`);let c=[],A=0;for(let b=0;b<mn;++b){let w=b/M,S=Math.exp(-w*w/2);c.push(S),b===0?A+=S:b<d&&(A+=2*S)}for(let b=0;b<c.length;b++)c[b]=c[b]/A;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-n;let E=this._sizeLods[r],B=3*E*(r>y-tr?r-y+tr:0),R=4*(this._cubeSize-E);$o(t,B,R,3*E,2*E),l.setRenderTarget(t),l.render(p,Zs)}};function Sh(i){let e=[],t=[],n=[],r=i,o=i-tr+1+Nu.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);t.push(a);let l=1/a;s>i-tr?l=Nu[s-i+tr-1]:s===0&&(l=0),n.push(l);let f=1/(a-2),u=-f,p=1+f,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,x=6,M=3,d=2,c=1,A=new Float32Array(M*x*m),y=new Float32Array(d*x*m),E=new Float32Array(c*x*m);for(let R=0;R<m;R++){let b=R%3*2/3-1,w=R>2?0:-1,S=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];A.set(S,M*x*R),y.set(h,d*x*R);let _=[R,R,R,R,R,R];E.set(_,c*x*R)}let B=new At;B.setAttribute("position",new ct(A,M)),B.setAttribute("uv",new ct(y,d)),B.setAttribute("faceIndex",new ct(E,c)),e.push(B),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=ki,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Mh(i,e,t){let n=new Float32Array(mn),r=new U(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function ku(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Hu(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,f=l===hr||l===pr,u=l===ii||l===gi;if(f||u){let p=e.get(a),h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Kr(i)),p=f?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let m=a.image;return f&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Kr(i)),p=f?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",o),p.texture):null}}}return a}function r(a){let l=0,f=6;for(let u=0;u<f;u++)a[u]!==void 0&&l++;return l===f}function o(a){let l=a.target;l.removeEventListener("dispose",o);let f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function zu(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ln("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wu(i,e,t,n){let r={},o=new WeakMap;function s(p){let h=p.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);for(let x in h.morphAttributes){let M=h.morphAttributes[x];for(let d=0,c=M.length;d<c;d++)e.remove(M[d])}h.removeEventListener("dispose",s),delete r[h.id];let m=o.get(h);m&&(e.remove(m),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(p){let h=p.attributes;for(let x in h)e.update(h[x],i.ARRAY_BUFFER);let m=p.morphAttributes;for(let x in m){let M=m[x];for(let d=0,c=M.length;d<c;d++)e.update(M[d],i.ARRAY_BUFFER)}}function f(p){let h=[],m=p.index,x=p.attributes.position,M=0;if(m!==null){let A=m.array;M=m.version;for(let y=0,E=A.length;y<E;y+=3){let B=A[y+0],R=A[y+1],b=A[y+2];h.push(B,R,R,b,b,B)}}else if(x!==void 0){let A=x.array;M=x.version;for(let y=0,E=A.length/3-1;y<E;y+=3){let B=y+0,R=y+1,b=y+2;h.push(B,R,R,b,b,B)}}else return;let d=new(Po(h)?Fn:In)(h,1);d.version=M;let c=o.get(p);c&&e.remove(c),o.set(p,d)}function u(p){let h=o.get(p);if(h){let m=p.index;m!==null&&h.version<m.version&&f(p)}else f(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Xu(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,m){i.drawElements(n,m,o,h*s),t.update(m,n,1)}function f(h,m,x){x!==0&&(i.drawElementsInstanced(n,m,o,h*s,x),t.update(m,n,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,h,0,x);let d=0;for(let c=0;c<x;c++)d+=m[c];t.update(d,n,1)}function p(h,m,x,M){if(x===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let c=0;c<h.length;c++)f(h[c]/s,m[c],M[c]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,o,h,0,M,0,x);let c=0;for(let A=0;A<x;A++)c+=m[A]*M[A];t.update(c,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function qu(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}var ir=class extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};function Yu(i,e,t){let n=new WeakMap,r=new et;function o(s,a,l){let f=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==p){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],c=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],y=0;m===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let E=a.attributes.position.count*y,B=1;E>e.maxTextureSize&&(B=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let R=new Float32Array(E*B*4*p),b=new ir(R,E,B,p);b.type=Ut,b.needsUpdate=!0;let w=y*4;for(let _=0;_<p;_++){let C=d[_],z=c[_],G=A[_],X=E*B*4*_;for(let j=0;j<C.count;j++){let V=j*w;m===!0&&(r.fromBufferAttribute(C,j),R[X+V+0]=r.x,R[X+V+1]=r.y,R[X+V+2]=r.z,R[X+V+3]=0),x===!0&&(r.fromBufferAttribute(z,j),R[X+V+4]=r.x,R[X+V+5]=r.y,R[X+V+6]=r.z,R[X+V+7]=0),M===!0&&(r.fromBufferAttribute(G,j),R[X+V+8]=r.x,R[X+V+9]=r.y,R[X+V+10]=r.z,R[X+V+11]=G.itemSize===4?r.w:1)}}h={count:p,texture:b,size:new we(E,B)},n.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let M=0;M<f.length;M++)m+=f[M];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Zu(i,e,t,n){let r=new WeakMap;function o(l){let f=n.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==f&&(h.update(),r.set(h,f))}return p}function s(){r=new WeakMap}function a(l){let f=l.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:s}}var Qo=class extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends mt{constructor(e,t,n,r,o,s,a,l,f,u=vi){if(u!==vi&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=Ht),n===void 0&&u===xi&&(n=oi),super(null,r,o,s,a,l,u,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var id=new mt,Ku=new nr(1,1),nd=new ir,rd=new Qo,od=new Qn,ju=[],Ju=[],$u=new Float32Array(16),Qu=new Float32Array(9),ed=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=ju[r];if(o===void 0&&(o=new Float32Array(r),ju[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function es(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Eh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Th(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function yh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Ah(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function bh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;ed.set(n),i.uniformMatrix2fv(this.addr,!1,ed),xt(t,n)}}function Rh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),xt(t,n)}}function wh(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),xt(t,n)}}function Ch(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Ph(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Lh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Uh(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ih(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Fh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Nh(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Oh(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=yo,o=Ku):o=id,t.setTexture2D(e||o,r)}function Bh(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||rd,r)}function Gh(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||od,r)}function kh(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nd,r)}function Hh(i){switch(i){case 5126:return Eh;case 35664:return Th;case 35665:return yh;case 35666:return Ah;case 35674:return bh;case 35675:return Rh;case 35676:return wh;case 5124:case 35670:return Ch;case 35667:case 35671:return Dh;case 35668:case 35672:return Ph;case 35669:case 35673:return Lh;case 5125:return Uh;case 36294:return Ih;case 36295:return Fh;case 36296:return Nh;case 35678:case 36198:case 36298:case 36306:case 35682:return Oh;case 35679:case 36299:case 36307:return Bh;case 35680:case 36300:case 36308:case 36293:return Gh;case 36289:case 36303:case 36311:case 36292:return kh}}function Vh(i,e){i.uniform1fv(this.addr,e)}function zh(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Wh(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Xh(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function qh(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yh(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zh(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kh(i,e){i.uniform1iv(this.addr,e)}function jh(i,e){i.uniform2iv(this.addr,e)}function Jh(i,e){i.uniform3iv(this.addr,e)}function $h(i,e){i.uniform4iv(this.addr,e)}function Qh(i,e){i.uniform1uiv(this.addr,e)}function ep(i,e){i.uniform2uiv(this.addr,e)}function tp(i,e){i.uniform3uiv(this.addr,e)}function ip(i,e){i.uniform4uiv(this.addr,e)}function np(i,e,t){let n=this.cache,r=e.length,o=es(t,r);vt(n,o)||(i.uniform1iv(this.addr,o),xt(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||id,o[s])}function rp(i,e,t){let n=this.cache,r=e.length,o=es(t,r);vt(n,o)||(i.uniform1iv(this.addr,o),xt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||rd,o[s])}function op(i,e,t){let n=this.cache,r=e.length,o=es(t,r);vt(n,o)||(i.uniform1iv(this.addr,o),xt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||od,o[s])}function sp(i,e,t){let n=this.cache,r=e.length,o=es(t,r);vt(n,o)||(i.uniform1iv(this.addr,o),xt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||nd,o[s])}function ap(i){switch(i){case 5126:return Vh;case 35664:return zh;case 35665:return Wh;case 35666:return Xh;case 35674:return qh;case 35675:return Yh;case 35676:return Zh;case 5124:case 35670:return Kh;case 35667:case 35671:return jh;case 35668:case 35672:return Jh;case 35669:case 35673:return $h;case 5125:return Qh;case 36294:return ep;case 36295:return tp;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return sp}}var ta=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hh(t.type)}},ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ap(t.type)}},na=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},ea=/(\w+)(\])?(\[|\.)?/g;function td(i,e){i.seq.push(e),i.map[e.id]=e}function lp(i,e,t){let n=i.name,r=n.length;for(ea.lastIndex=0;;){let o=ea.exec(n),s=ea.lastIndex,a=o[1],l=o[2]==="]",f=o[3];if(l&&(a=a|0),f===void 0||f==="["&&s+2===r){td(t,f===void 0?new ta(a,i,e):new ia(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new na(a),td(t,p)),t=p}}}var Ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);lp(o,s,this)}}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function ra(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cp=37297,fp=0;function up(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var sd=new Ee;function dp(i){Ie._getMatrix(sd,Ie.workingColorSpace,i);let e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(Ie.getTransfer(i)){case tn:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+up(i.getShaderSource(e),s)}else return r}function hp(i,e){let t=dp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pp(i,e){let t;switch(e){case Qa:t="Linear";break;case el:t="Reinhard";break;case tl:t="Cineon";break;case il:t="ACESFilmic";break;case rl:t="AgX";break;case ol:t="Neutral";break;case nl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ts=new U;function mp(){Ie.getLuminanceCoefficients(ts);let i=ts.x.toFixed(4),e=ts.y.toFixed(4),t=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function _p(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function jr(i){return i!==""}function ld(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(i){return i.replace(xp,Mp)}var Sp=new Map;function Mp(i,e){let t=Pe[e];if(t===void 0){let n=Sp.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oa(t)}var Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(Ep,Tp)}function Tp(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ud(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===La?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ap(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ii:case gi:e="ENVMAP_TYPE_CUBE";break;case ki:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ja:e="ENVMAP_BLENDING_MIX";break;case $a:e="ENVMAP_BLENDING_ADD";break}return e}function wp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dd(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,l=yp(t),f=Ap(t),u=bp(t),p=Rp(t),h=wp(t),m=gp(t),x=_p(o),M=r.createProgram(),d,c,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(jr).join(`
`),d.length>0&&(d+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(jr).join(`
`),c.length>0&&(c+=`
`)):(d=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),c=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Zt?pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,hp("linearToOutputTexel",t.outputColorSpace),mp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),s=oa(s),s=ld(s,t),s=cd(s,t),a=oa(a),a=ld(a,t),a=cd(a,t),s=fd(s),a=fd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,c=["#define varying in",t.glslVersion===Ts?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ts?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let y=A+d+s,E=A+c+a,B=ra(r,r.VERTEX_SHADER,y),R=ra(r,r.FRAGMENT_SHADER,E);r.attachShader(M,B),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(C){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(M).trim(),G=r.getShaderInfoLog(B).trim(),X=r.getShaderInfoLog(R).trim(),j=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,B,R);else{let Q=ad(r,B,"vertex"),H=ad(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Q+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||X==="")&&(V=!1);V&&(C.diagnostics={runnable:j,programLog:z,vertexShader:{log:G,prefix:d},fragmentShader:{log:X,prefix:c}})}r.deleteShader(B),r.deleteShader(R),w=new Ji(r,M),S=vp(r,M)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,cp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=R,this}var Cp=0,is=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sa(e),t.set(e,n)),n}},sa=class{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}};function hd(i,e,t,n,r,o,s){let a=new Xi,l=new is,f=new Set,u=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return f.add(S),S===0?"uv":`uv${S}`}function d(S,_,C,z,G){let X=z.fog,j=G.geometry,V=S.isMeshStandardMaterial?z.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=Q&&Q.mapping===ki?Q.image.height:null,ne=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=ce!==void 0?ce.length:0,Be=0;j.morphAttributes.position!==void 0&&(Be=1),j.morphAttributes.normal!==void 0&&(Be=2),j.morphAttributes.color!==void 0&&(Be=3);let tt,q,ee,_e;if(ne){let Qe=$t[ne];tt=Qe.vertexShader,q=Qe.fragmentShader}else tt=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);let re=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),De=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,lt=!!S.map,qe=!!S.matcap,ht=!!Q,I=!!S.aoMap,Wt=!!S.lightMap,He=!!S.bumpMap,Ve=!!S.normalMap,Te=!!S.displacementMap,ot=!!S.emissiveMap,Me=!!S.metalnessMap,T=!!S.roughnessMap,g=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,K=S.iridescence>0,W=S.sheen>0,ve=S.transmission>0,oe=g&&!!S.anisotropyMap,fe=F&&!!S.clearcoatMap,Ye=F&&!!S.clearcoatNormalMap,J=F&&!!S.clearcoatRoughnessMap,ue=K&&!!S.iridescenceMap,Ae=K&&!!S.iridescenceThicknessMap,Re=W&&!!S.sheenColorMap,de=W&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Fe=!!S.specularColorMap,it=!!S.specularIntensityMap,D=ve&&!!S.transmissionMap,ie=ve&&!!S.thicknessMap,k=!!S.gradientMap,Z=!!S.alphaMap,le=S.alphaTest>0,se=!!S.alphaHash,Le=!!S.extensions,dt=Zt;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(dt=i.toneMapping);let bt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:De,instancingColor:De&&G.instanceColor!==null,instancingMorph:De&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:si,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:qe,envMap:ht,envMapMode:ht&&Q.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Wt,bumpMap:He,normalMap:Ve,displacementMap:h&&Te,emissiveMap:ot,normalMapObjectSpace:Ve&&S.normalMapType===fl,normalMapTangentSpace:Ve&&S.normalMapType===cl,metalnessMap:Me,roughnessMap:T,anisotropy:g,anisotropyMap:oe,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:Ye,clearcoatRoughnessMap:J,dispersion:Y,iridescence:K,iridescenceMap:ue,iridescenceThicknessMap:Ae,sheen:W,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:ze,specularColorMap:Fe,specularIntensityMap:it,transmission:ve,transmissionMap:D,thicknessMap:ie,gradientMap:k,opaque:S.transparent===!1&&S.blending===yi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:se,combine:S.combine,mapUv:lt&&M(S.map.channel),aoMapUv:I&&M(S.aoMap.channel),lightMapUv:Wt&&M(S.lightMap.channel),bumpMapUv:He&&M(S.bumpMap.channel),normalMapUv:Ve&&M(S.normalMap.channel),displacementMapUv:Te&&M(S.displacementMap.channel),emissiveMapUv:ot&&M(S.emissiveMap.channel),metalnessMapUv:Me&&M(S.metalnessMap.channel),roughnessMapUv:T&&M(S.roughnessMap.channel),anisotropyMapUv:oe&&M(S.anisotropyMap.channel),clearcoatMapUv:fe&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(S.sheenRoughnessMap.channel),specularMapUv:ze&&M(S.specularMap.channel),specularColorMapUv:Fe&&M(S.specularColorMap.channel),specularIntensityMapUv:it&&M(S.specularIntensityMap.channel),transmissionMapUv:D&&M(S.transmissionMap.channel),thicknessMapUv:ie&&M(S.thicknessMap.channel),alphaMapUv:Z&&M(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ve||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(lt||Z),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:be,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&Ie.getTransfer(S.map.colorSpace)===We,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(S.emissiveMap.colorSpace)===We,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yt,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=f.has(1),bt.vertexUv2s=f.has(2),bt.vertexUv3s=f.has(3),f.clear(),bt}function c(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)_.push(C),_.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(_,S),y(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function A(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function y(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){let _=x[S.type],C;if(_){let z=$t[_];C=Yl.clone(z.uniforms)}else C=S.uniforms;return C}function B(S,_){let C;for(let z=0,G=u.length;z<G;z++){let X=u[z];if(X.cacheKey===_){C=X,++C.usedTimes;break}}return C===void 0&&(C=new dd(i,_,S,o),u.push(C)),C}function R(S){if(--S.usedTimes===0){let _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function w(){l.dispose()}return{getParameters:d,getProgramCacheKey:c,getUniforms:E,acquireProgram:B,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:w}}function pd(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gd(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(p,h,m,x,M,d){let c=i[e];return c===void 0?(c={id:p.id,object:p,geometry:h,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:d},i[e]=c):(c.id=p.id,c.object=p,c.geometry=h,c.material=m,c.groupOrder=x,c.renderOrder=p.renderOrder,c.z=M,c.group=d),e++,c}function a(p,h,m,x,M,d){let c=s(p,h,m,x,M,d);m.transmission>0?n.push(c):m.transparent===!0?r.push(c):t.push(c)}function l(p,h,m,x,M,d){let c=s(p,h,m,x,M,d);m.transmission>0?n.unshift(c):m.transparent===!0?r.unshift(c):t.unshift(c)}function f(p,h){t.length>1&&t.sort(p||Dp),n.length>1&&n.sort(h||md),r.length>1&&r.sort(h||md)}function u(){for(let p=e,h=i.length;p<h;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:f}}function _d(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new gd,i.set(n,[s])):r>=o.length?(s=new gd,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ye};break;case"SpotLight":t={position:new U,direction:new U,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Lp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Up=0;function Ip(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vd(i){let e=new Pp,t=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new U);let r=new U,o=new ke,s=new ke;function a(f){let u=0,p=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,x=0,M=0,d=0,c=0,A=0,y=0,E=0,B=0,R=0,b=0;f.sort(Ip);for(let S=0,_=f.length;S<_;S++){let C=f[S],z=C.color,G=C.intensity,X=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*G,p+=z.g*G,h+=z.b*G;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],G);b++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=V,m++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(z).multiplyScalar(G),V.distance=X,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[M]=V;let Q=C.shadow;if(C.map&&(n.spotLightMap[B]=C.map,B++,Q.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[M]=Q.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=j,E++}M++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(z).multiplyScalar(G),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=V,d++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let Q=C.shadow,H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=C.shadow.matrix,y++}n.point[x]=V,x++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(G),V.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[c]=V,c++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let w=n.hash;(w.directionalLength!==m||w.pointLength!==x||w.spotLength!==M||w.rectAreaLength!==d||w.hemiLength!==c||w.numDirectionalShadows!==A||w.numPointShadows!==y||w.numSpotShadows!==E||w.numSpotMaps!==B||w.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=d,n.point.length=x,n.hemi.length=c,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,w.directionalLength=m,w.pointLength=x,w.spotLength=M,w.rectAreaLength=d,w.hemiLength=c,w.numDirectionalShadows=A,w.numPointShadows=y,w.numSpotShadows=E,w.numSpotMaps=B,w.numLightProbes=b,n.version=Up++)}function l(f,u){let p=0,h=0,m=0,x=0,M=0,d=u.matrixWorldInverse;for(let c=0,A=f.length;c<A;c++){let y=f[c];if(y.isDirectionalLight){let E=n.directional[p];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),p++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),m++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),s.identity(),o.copy(y.matrixWorld),o.premultiply(d),s.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){let E=n.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){let E=n.hemi[M];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),M++}}}return{setup:a,setupView:l,state:n}}function xd(i){let e=new vd(i),t=[],n=[];function r(u){f.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Sd(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new xd(i),e.set(r,[a])):o>=s.length?(a=new xd(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ns=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var rs=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Md=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Ed=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Td(i,e,t){let n=new Kn,r=new we,o=new we,s=new et,a=new ns({depthPacking:ll}),l=new rs,f={},u=t.maxTextureSize,p={[_t]:Ke,[Ke]:_t,[yt]:yt},h=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Md,fragmentShader:Ed}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new At;x.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ut(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let c=this.type;this.render=function(R,b,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Yt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=c!==ti&&this.type===ti,X=c===ti&&this.type!==ti;for(let j=0,V=R.length;j<V;j++){let Q=R[j],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ne=H.getFrameExtents();if(r.multiply(ne),o.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,H.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,H.mapSize.y=o.y)),H.map===null||G===!0||X===!0){let Se=this.type!==ti?{minFilter:Rt,magFilter:Rt}:{};H.map!==null&&H.map.dispose(),H.map=new Gt(r.x,r.y,Se),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ce=H.getViewportCount();for(let Se=0;Se<ce;Se++){let Be=H.getViewport(Se);s.set(o.x*Be.x,o.y*Be.y,o.x*Be.z,o.y*Be.w),z.viewport(s),H.updateMatrices(Q,Se),n=H.getFrustum(),E(b,w,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===ti&&A(H,w),H.needsUpdate=!1}c=this.type,d.needsUpdate=!1,i.setRenderTarget(S,_,C)};function A(R,b){let w=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gt(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,w,h,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,w,m,M,null)}function y(R,b,w,S){let _=null,C=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)_=C;else if(_=w.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let z=_.uuid,G=b.uuid,X=f[z];X===void 0&&(X={},f[z]=X);let j=X[G];j===void 0&&(j=_.clone(),X[G]=j,b.addEventListener("dispose",B)),_=j}if(_.visible=b.visible,_.wireframe=b.wireframe,S===ti?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:p[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=i.properties.get(_);z.light=w}return _}function E(R,b,w,S,_){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);let G=e.update(R),X=R.material;if(Array.isArray(X)){let j=G.groups;for(let V=0,Q=j.length;V<Q;V++){let H=j[V],ne=X[H.materialIndex];if(ne&&ne.visible){let ce=y(R,ne,S,_);R.onBeforeShadow(i,R,b,w,G,ce,H),i.renderBufferDirect(w,null,G,ce,R,H),R.onAfterShadow(i,R,b,w,G,ce,H)}}}else if(X.visible){let j=y(R,X,S,_);R.onBeforeShadow(i,R,b,w,G,j,null),i.renderBufferDirect(w,null,G,j,R,null),R.onAfterShadow(i,R,b,w,G,j,null)}}let z=R.children;for(let G=0,X=z.length;G<X;G++)E(z[G],b,w,S,_)}function B(R){R.target.removeEventListener("dispose",B);for(let w in f){let S=f[w],_=R.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Np={[ro]:oo,[so]:co,[ao]:fo,[Gi]:lo,[oo]:ro,[co]:so,[fo]:ao,[lo]:Gi};function yd(i,e){function t(){let D=!1,ie=new et,k=null,Z=new et(0,0,0,0);return{setMask:function(le){k!==le&&!D&&(i.colorMask(le,le,le,le),k=le)},setLocked:function(le){D=le},setClear:function(le,se,Le,dt,bt){bt===!0&&(le*=dt,se*=dt,Le*=dt),ie.set(le,se,Le,dt),Z.equals(ie)===!1&&(i.clearColor(le,se,Le,dt),Z.copy(ie))},reset:function(){D=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,k=null,Z=null,le=null;return{setReversed:function(se){if(ie!==se){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let dt=le;le=null,this.setClear(dt)}ie=se},getReversed:function(){return ie},setTest:function(se){se?re(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(se){k!==se&&!D&&(i.depthMask(se),k=se)},setFunc:function(se){if(ie&&(se=Np[se]),Z!==se){switch(se){case ro:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=se}},setLocked:function(se){D=se},setClear:function(se){le!==se&&(ie&&(se=1-se),i.clearDepth(se),le=se)},reset:function(){D=!1,k=null,Z=null,le=null,ie=!1}}}function r(){let D=!1,ie=null,k=null,Z=null,le=null,se=null,Le=null,dt=null,bt=null;return{setTest:function(Qe){D||(Qe?re(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!D&&(i.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,Qt,Ei){(k!==Qe||Z!==Qt||le!==Ei)&&(i.stencilFunc(Qe,Qt,Ei),k=Qe,Z=Qt,le=Ei)},setOp:function(Qe,Qt,Ei){(se!==Qe||Le!==Qt||dt!==Ei)&&(i.stencilOp(Qe,Qt,Ei),se=Qe,Le=Qt,dt=Ei)},setLocked:function(Qe){D=Qe},setClear:function(Qe){bt!==Qe&&(i.clearStencil(Qe),bt=Qe)},reset:function(){D=!1,ie=null,k=null,Z=null,le=null,se=null,Le=null,dt=null,bt=null}}}let o=new t,s=new n,a=new r,l=new WeakMap,f=new WeakMap,u={},p={},h=new WeakMap,m=[],x=null,M=!1,d=null,c=null,A=null,y=null,E=null,B=null,R=null,b=new ye(0,0,0),w=0,S=!1,_=null,C=null,z=null,G=null,X=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Q>=2);let ne=null,ce={},Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),tt=new et().fromArray(Se),q=new et().fromArray(Be);function ee(D,ie,k,Z){let le=new Uint8Array(4),se=i.createTexture();i.bindTexture(D,se),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<k;Le++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ie+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return se}let _e={};_e[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),re(i.DEPTH_TEST),s.setFunc(Gi),He(!1),Ve(gs),re(i.CULL_FACE),I(Yt);function re(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function be(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function De(D,ie){return p[D]!==ie?(i.bindFramebuffer(D,ie),p[D]=ie,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ge(D,ie){let k=m,Z=!1;if(D){k=h.get(ie),k===void 0&&(k=[],h.set(ie,k));let le=D.textures;if(k.length!==le.length||k[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Le=le.length;se<Le;se++)k[se]=i.COLOR_ATTACHMENT0+se;k.length=le.length,Z=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Z=!0);Z&&i.drawBuffers(k)}function lt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let qe={[Ai]:i.FUNC_ADD,[Ia]:i.FUNC_SUBTRACT,[Fa]:i.FUNC_REVERSE_SUBTRACT};qe[Na]=i.MIN,qe[Oa]=i.MAX;let ht={[Ba]:i.ZERO,[Ga]:i.ONE,[ka]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[qa]:i.SRC_ALPHA_SATURATE,[Wa]:i.DST_COLOR,[Va]:i.DST_ALPHA,[Ha]:i.ONE_MINUS_SRC_COLOR,[dr]:i.ONE_MINUS_SRC_ALPHA,[Xa]:i.ONE_MINUS_DST_COLOR,[za]:i.ONE_MINUS_DST_ALPHA,[Ya]:i.CONSTANT_COLOR,[Za]:i.ONE_MINUS_CONSTANT_COLOR,[Ka]:i.CONSTANT_ALPHA,[ja]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ie,k,Z,le,se,Le,dt,bt,Qe){if(D===Yt){M===!0&&(be(i.BLEND),M=!1);return}if(M===!1&&(re(i.BLEND),M=!0),D!==Ua){if(D!==d||Qe!==S){if((c!==Ai||E!==Ai)&&(i.blendEquation(i.FUNC_ADD),c=Ai,E=Ai),Qe)switch(D){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,y=null,B=null,R=null,b.set(0,0,0),w=0,d=D,S=Qe}return}le=le||ie,se=se||k,Le=Le||Z,(ie!==c||le!==E)&&(i.blendEquationSeparate(qe[ie],qe[le]),c=ie,E=le),(k!==A||Z!==y||se!==B||Le!==R)&&(i.blendFuncSeparate(ht[k],ht[Z],ht[se],ht[Le]),A=k,y=Z,B=se,R=Le),(dt.equals(b)===!1||bt!==w)&&(i.blendColor(dt.r,dt.g,dt.b,bt),b.copy(dt),w=bt),d=D,S=!1}function Wt(D,ie){D.side===yt?be(i.CULL_FACE):re(i.CULL_FACE);let k=D.side===Ke;ie&&(k=!k),He(k),D.blending===yi&&D.transparent===!1?I(Yt):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),o.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){_!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),_=D)}function Ve(D){D!==Da?(re(i.CULL_FACE),D!==C&&(D===gs?i.cullFace(i.BACK):D===Pa?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),C=D}function Te(D){D!==z&&(V&&i.lineWidth(D),z=D)}function ot(D,ie,k){D?(re(i.POLYGON_OFFSET_FILL),(G!==ie||X!==k)&&(i.polygonOffset(ie,k),G=ie,X=k)):be(i.POLYGON_OFFSET_FILL)}function Me(D){D?re(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),ne!==D&&(i.activeTexture(D),ne=D)}function g(D,ie,k){k===void 0&&(ne===null?k=i.TEXTURE0+j-1:k=ne);let Z=ce[k];Z===void 0&&(Z={type:void 0,texture:void 0},ce[k]=Z),(Z.type!==D||Z.texture!==ie)&&(ne!==k&&(i.activeTexture(k),ne=k),i.bindTexture(D,ie||_e[D]),Z.type=D,Z.texture=ie)}function F(){let D=ce[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function de(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function ze(D,ie){let k=f.get(ie);k===void 0&&(k=new WeakMap,f.set(ie,k));let Z=k.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ie,D.name),k.set(D,Z))}function Fe(D,ie){let Z=f.get(ie).get(D);l.get(ie)!==Z&&(i.uniformBlockBinding(ie,Z,D.__bindingPointIndex),l.set(ie,Z))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,ce={},p={},h=new WeakMap,m=[],x=null,M=!1,d=null,c=null,A=null,y=null,E=null,B=null,R=null,b=new ye(0,0,0),w=0,S=!1,_=null,C=null,z=null,G=null,X=null,tt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:re,disable:be,bindFramebuffer:De,drawBuffers:Ge,useProgram:lt,setBlending:I,setMaterial:Wt,setFlipSided:He,setCullFace:Ve,setLineWidth:Te,setPolygonOffset:ot,setScissorTest:Me,activeTexture:T,bindTexture:g,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ue,texImage3D:Ae,updateUBOMapping:ze,uniformBlockBinding:Fe,texStorage2D:Ye,texStorage3D:J,texSubImage2D:W,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Re,viewport:de,reset:it}}function aa(i,e,t,n){let r=Op(n);switch(t){case _o:return i*e;case xo:return i*e;case So:return i*e*2;case Mo:return i*e/r.components*r.byteLength;case bn:return i*e/r.components*r.byteLength;case Eo:return i*e*2/r.components*r.byteLength;case Rn:return i*e*2/r.components*r.byteLength;case vo:return i*e*3/r.components*r.byteLength;case St:return i*e*4/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case Cn:case Dn:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pn:case Ln:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xr:case Mr:return Math.max(i,16)*Math.max(e,8)/4;case vr:case Sr:return Math.max(i,8)*Math.max(e,8)/2;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case br:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Or:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Br:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Un:case Gr:case kr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Hr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vr:case zr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case wt:case po:return{byteLength:1,components:1};case bi:case mo:case _i:return{byteLength:2,components:1};case yn:case An:return{byteLength:2,components:4};case Ht:case Tn:case Ut:return{byteLength:4,components:1};case go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ad(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new we,u=new WeakMap,p,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return m?new OffscreenCanvas(T,g):qi("canvas")}function M(T,g,F){let Y=1,K=Me(T);if((K.width>F||K.height>F)&&(Y=F/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let W=Math.floor(Y*K.width),ve=Math.floor(Y*K.height);p===void 0&&(p=x(W,ve));let oe=g?x(W,ve):p;return oe.width=W,oe.height=ve,oe.getContext("2d").drawImage(T,0,0,W,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+ve+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function d(T){return T.generateMipmaps}function c(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,g,F,Y,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),g===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),g===i.RGBA){let ve=K?tn:Ie.getTransfer(Y);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=ve===We?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(T,g){let F;return T?g===null||g===Ht||g===oi?F=i.DEPTH24_STENCIL8:g===Ut?F=i.DEPTH32F_STENCIL8:g===bi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ht||g===oi?F=i.DEPTH_COMPONENT24:g===Ut?F=i.DEPTH_COMPONENT32F:g===bi&&(F=i.DEPTH_COMPONENT16),F}function B(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Lt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){let g=T.target;g.removeEventListener("dispose",R),w(g),g.isVideoTexture&&u.delete(g)}function b(T){let g=T.target;g.removeEventListener("dispose",b),_(g)}function w(T){let g=n.get(T);if(g.__webglInit===void 0)return;let F=T.source,Y=h.get(F);if(Y){let K=Y[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(T),Object.keys(Y).length===0&&h.delete(F)}n.remove(T)}function S(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let F=T.source,Y=h.get(F);delete Y[g.__cacheKey],s.memory.textures--}function _(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let K=0;K<g.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=T.textures;for(let Y=0,K=F.length;Y<K;Y++){let W=n.get(F[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),s.memory.textures--),n.remove(F[Y])}n.remove(T)}let C=0;function z(){C=0}function G(){let T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function X(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){let F=n.get(T);if(T.isVideoTexture&&Te(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,T,g);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function V(T,g){let F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function Q(T,g){let F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function H(T,g){let F=n.get(T);if(T.version>0&&F.__version!==T.version){ee(F,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let ne={[mr]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},ce={[Rt]:i.NEAREST,[sl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Se={[ul]:i.NEVER,[_l]:i.ALWAYS,[dl]:i.LESS,[yo]:i.LEQUAL,[hl]:i.EQUAL,[gl]:i.GEQUAL,[pl]:i.GREATER,[ml]:i.NOTEQUAL};function Be(T,g){if(g.type===Ut&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Lt||g.magFilter===ho||g.magFilter===_r||g.magFilter===ri||g.minFilter===Lt||g.minFilter===ho||g.minFilter===_r||g.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==_r&&g.minFilter!==ri||g.type===Ut&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function tt(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));let Y=g.source,K=h.get(Y);K===void 0&&(K={},h.set(Y,K));let W=X(g);if(W!==T.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),K[W].usedTimes++;let ve=K[T.__cacheKey];ve!==void 0&&(K[T.__cacheKey].usedTimes--,ve.usedTimes===0&&S(g)),T.__cacheKey=W,T.__webglTexture=K[W].texture}return F}function q(T,g,F){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);let K=tt(T,g),W=g.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);let ve=n.get(W);if(W.version!==ve.__version||K===!0){t.activeTexture(i.TEXTURE0+F);let oe=Ie.getPrimaries(Ie.workingColorSpace),fe=g.colorSpace===Kt?null:Ie.getPrimaries(g.colorSpace),Ye=g.colorSpace===Kt||oe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let J=M(g.image,!1,r.maxTextureSize);J=ot(g,J);let ue=o.convert(g.format,g.colorSpace),Ae=o.convert(g.type),Re=y(g.internalFormat,ue,Ae,g.colorSpace,g.isVideoTexture);Be(Y,g);let de,ze=g.mipmaps,Fe=g.isVideoTexture!==!0,it=ve.__version===void 0||K===!0,D=W.dataReady,ie=B(g,J);if(g.isDepthTexture)Re=E(g.format===xi,g.type),it&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Re,J.width,J.height,0,ue,Ae,null));else if(g.isDataTexture)if(ze.length>0){Fe&&it&&t.texStorage2D(i.TEXTURE_2D,ie,Re,ze[0].width,ze[0].height);for(let k=0,Z=ze.length;k<Z;k++)de=ze[k],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,Ae,de.data):t.texImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,ue,Ae,de.data);g.generateMipmaps=!1}else Fe?(it&&t.texStorage2D(i.TEXTURE_2D,ie,Re,J.width,J.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ue,Ae,J.data)):t.texImage2D(i.TEXTURE_2D,0,Re,J.width,J.height,0,ue,Ae,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,ze[0].width,ze[0].height,J.depth);for(let k=0,Z=ze.length;k<Z;k++)if(de=ze[k],g.format!==St)if(ue!==null)if(Fe){if(D)if(g.layerUpdates.size>0){let le=aa(de.width,de.height,g.format,g.type);for(let se of g.layerUpdates){let Le=de.data.subarray(se*le/de.data.BYTES_PER_ELEMENT,(se+1)*le/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,se,de.width,de.height,1,ue,Le)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,J.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Re,de.width,de.height,J.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,J.depth,ue,Ae,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Re,de.width,de.height,J.depth,0,ue,Ae,de.data)}else{Fe&&it&&t.texStorage2D(i.TEXTURE_2D,ie,Re,ze[0].width,ze[0].height);for(let k=0,Z=ze.length;k<Z;k++)de=ze[k],g.format!==St?ue!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,ue,Ae,de.data):t.texImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,ue,Ae,de.data)}else if(g.isDataArrayTexture)if(Fe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,J.width,J.height,J.depth),D)if(g.layerUpdates.size>0){let k=aa(J.width,J.height,g.format,g.type);for(let Z of g.layerUpdates){let le=J.data.subarray(Z*k/J.data.BYTES_PER_ELEMENT,(Z+1)*k/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ue,Ae,le)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Ae,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,ue,Ae,J.data);else if(g.isData3DTexture)Fe?(it&&t.texStorage3D(i.TEXTURE_3D,ie,Re,J.width,J.height,J.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Ae,J.data)):t.texImage3D(i.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,ue,Ae,J.data);else if(g.isFramebufferTexture){if(it)if(Fe)t.texStorage2D(i.TEXTURE_2D,ie,Re,J.width,J.height);else{let k=J.width,Z=J.height;for(let le=0;le<ie;le++)t.texImage2D(i.TEXTURE_2D,le,Re,k,Z,0,ue,Ae,null),k>>=1,Z>>=1}}else if(ze.length>0){if(Fe&&it){let k=Me(ze[0]);t.texStorage2D(i.TEXTURE_2D,ie,Re,k.width,k.height)}for(let k=0,Z=ze.length;k<Z;k++)de=ze[k],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,ue,Ae,de):t.texImage2D(i.TEXTURE_2D,k,Re,ue,Ae,de);g.generateMipmaps=!1}else if(Fe){if(it){let k=Me(J);t.texStorage2D(i.TEXTURE_2D,ie,Re,k.width,k.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ae,J)}else t.texImage2D(i.TEXTURE_2D,0,Re,ue,Ae,J);d(g)&&c(Y),ve.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ee(T,g,F){if(g.image.length!==6)return;let Y=tt(T,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let W=n.get(K);if(K.version!==W.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);let ve=Ie.getPrimaries(Ie.workingColorSpace),oe=g.colorSpace===Kt?null:Ie.getPrimaries(g.colorSpace),fe=g.colorSpace===Kt||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ye=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Ye&&!J?ue[Z]=M(g.image[Z],!0,r.maxCubemapSize):ue[Z]=J?g.image[Z].image:g.image[Z],ue[Z]=ot(g,ue[Z]);let Ae=ue[0],Re=o.convert(g.format,g.colorSpace),de=o.convert(g.type),ze=y(g.internalFormat,Re,de,g.colorSpace),Fe=g.isVideoTexture!==!0,it=W.__version===void 0||Y===!0,D=K.dataReady,ie=B(g,Ae);Be(i.TEXTURE_CUBE_MAP,g);let k;if(Ye){Fe&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ze,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){k=ue[Z].mipmaps;for(let le=0;le<k.length;le++){let se=k[le];g.format!==St?Re!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,se.width,se.height,Re,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ze,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,se.width,se.height,Re,de,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,ze,se.width,se.height,0,Re,de,se.data)}}}else{if(k=g.mipmaps,Fe&&it){k.length>0&&ie++;let Z=Me(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Re,de,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ue[Z].width,ue[Z].height,0,Re,de,ue[Z].data);for(let le=0;le<k.length;le++){let Le=k[le].image[Z].image;Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Le.width,Le.height,Re,de,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ze,Le.width,Le.height,0,Re,de,Le.data)}}else{Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,de,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Re,de,ue[Z]);for(let le=0;le<k.length;le++){let se=k[le];Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Re,de,se.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,ze,Re,de,se.image[Z])}}}d(g)&&c(i.TEXTURE_CUBE_MAP),W.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function _e(T,g,F,Y,K,W){let ve=o.convert(F.format,F.colorSpace),oe=o.convert(F.type),fe=y(F.internalFormat,ve,oe,F.colorSpace),Ye=n.get(g),J=n.get(F);if(J.__renderTarget=g,!Ye.__hasExternalTextures){let ue=Math.max(1,g.width>>W),Ae=Math.max(1,g.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,fe,ue,Ae,g.depth,0,ve,oe,null):t.texImage2D(K,W,fe,ue,Ae,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,He(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let Y=g.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=E(g.stencilBuffer,K),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=He(g);Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,W,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{let Y=g.textures;for(let K=0;K<Y.length;K++){let W=Y[K],ve=o.convert(W.format,W.colorSpace),oe=o.convert(W.type),fe=y(W.internalFormat,ve,oe,W.colorSpace),Ye=He(g);F&&Ve(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,fe,g.width,g.height):Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,fe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,fe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);let K=Y.__webglTexture,W=He(g);if(g.depthTexture.format===vi)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(g.depthTexture.format===xi)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function De(T){let g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){let K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(g.__webglFramebuffer,T)}else if(F){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),re(g.__webglDepthbuffer[Y],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),re(g.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(T,g,F){let Y=n.get(T);g!==void 0&&_e(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&De(T)}function lt(T){let g=T.texture,F=n.get(T),Y=n.get(g);T.addEventListener("dispose",b);let K=T.textures,W=T.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,s.memory.textures++),W){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let fe=0;fe<g.mipmaps.length;fe++)F.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,fe=K.length;oe<fe;oe++){let Ye=n.get(K[oe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&Ve(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let fe=K[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let Ye=o.convert(fe.format,fe.colorSpace),J=o.convert(fe.type),ue=y(fe.internalFormat,Ye,J,fe.colorSpace,T.isXRRenderTarget===!0),Ae=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),re(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)_e(F.__webglFramebuffer[oe][fe],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else _e(F.__webglFramebuffer[oe],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);d(g)&&c(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,fe=K.length;oe<fe;oe++){let Ye=K[oe],J=n.get(Ye);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Be(i.TEXTURE_2D,Ye),_e(F.__webglFramebuffer,T,Ye,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),d(Ye)&&c(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Be(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)_e(F.__webglFramebuffer[fe],T,g,i.COLOR_ATTACHMENT0,oe,fe);else _e(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,oe,0);d(g)&&c(oe),t.unbindTexture()}T.depthBuffer&&De(T)}function qe(T){let g=T.textures;for(let F=0,Y=g.length;F<Y;F++){let K=g[F];if(d(K)){let W=A(T),ve=n.get(K).__webglTexture;t.bindTexture(W,ve),c(W),t.unbindTexture()}}}let ht=[],I=[];function Wt(T){if(T.samples>0){if(Ve(T)===!1){let g=T.textures,F=T.width,Y=T.height,K=i.COLOR_BUFFER_BIT,W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),oe=g.length>1;if(oe)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);let Ye=n.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,K,i.NEAREST),l===!0&&(ht.length=0,I.length=0,ht.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(W),I.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);let Ye=n.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function He(T){return Math.min(r.maxSamples,T.samples)}function Ve(T){let g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Te(T){let g=s.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ot(T,g){let F=T.colorSpace,Y=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==si&&F!==Kt&&(Ie.getTransfer(F)===We?(Y!==St||K!==wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(f.width=T.naturalWidth||T.width,f.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(f.width=T.displayWidth,f.height=T.displayHeight):(f.width=T.width,f.height=T.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function bd(i,e){function t(n,r=Kt){let o,s=Ie.getTransfer(r);if(n===wt)return i.UNSIGNED_BYTE;if(n===yn)return i.UNSIGNED_SHORT_4_4_4_4;if(n===An)return i.UNSIGNED_SHORT_5_5_5_1;if(n===go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===po)return i.BYTE;if(n===mo)return i.SHORT;if(n===bi)return i.UNSIGNED_SHORT;if(n===Tn)return i.INT;if(n===Ht)return i.UNSIGNED_INT;if(n===Ut)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===_o)return i.ALPHA;if(n===vo)return i.RGB;if(n===St)return i.RGBA;if(n===xo)return i.LUMINANCE;if(n===So)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===Mo)return i.RED;if(n===bn)return i.RED_INTEGER;if(n===Eo)return i.RG;if(n===Rn)return i.RG_INTEGER;if(n===wn)return i.RGBA_INTEGER;if(n===Cn||n===Dn||n===Pn||n===Ln)if(s===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Cn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Cn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ln)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vr||n===xr||n===Sr||n===Mr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Er||n===Tr||n===yr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Er||n===Tr)return s===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===yr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ar||n===br||n===Rr||n===wr||n===Cr||n===Dr||n===Pr||n===Lr||n===Ur||n===Ir||n===Fr||n===Nr||n===Or||n===Br)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ar)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===br)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ur)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ir)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nr)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Br)return s===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Un||n===Gr||n===kr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Un)return s===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Hr||n===Vr||n===zr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Un)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var os=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Bp={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){s=!0;for(let M of e.hand.values()){let d=t.getJointPose(M,n),c=this._getHandJoint(f,M);d!==null&&(c.matrix.fromArray(d.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=d.radius),c.visible=d!==null}let u=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,x=.005;f.inputState.pinching&&h>m+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=m-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),f!==null&&(f.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ss=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new mt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:Gp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var as=class extends Bt{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,f=null,u=null,p=null,h=null,m=null,x=null,M=new ss,d=t.getContextAttributes(),c=null,A=null,y=[],E=[],B=new we,R=null,b=new Et;b.viewport=new et;let w=new Et;w.viewport=new et;let S=[b,w],_=new os,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=y[q];return ee===void 0&&(ee=new or,y[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=y[q];return ee===void 0&&(ee=new or,y[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=y[q];return ee===void 0&&(ee=new or,y[q]=ee),ee.getHandSpace()};function G(q){let ee=E.indexOf(q.inputSource);if(ee===-1)return;let _e=y[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,f||s),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let q=0;q<y.length;q++){let ee=E[q];ee!==null&&(E[q]=null,y[q].disconnect(ee))}C=null,z=null,M.reset(),e.setRenderTarget(c),m=null,h=null,p=null,r=null,A=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){let ee={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Gt(m.framebufferWidth,m.framebufferHeight,{format:St,type:wt,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ee=null,_e=null,re=null;d.depth&&(re=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=d.stencil?xi:vi,_e=d.stencil?oi:Ht);let be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:o};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Gt(h.textureWidth,h.textureHeight,{format:St,type:wt,depthTexture:new nr(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),f=null,s=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(q){for(let ee=0;ee<q.removed.length;ee++){let _e=q.removed[ee],re=E.indexOf(_e);re>=0&&(E[re]=null,y[re].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){let _e=q.added[ee],re=E.indexOf(_e);if(re===-1){for(let De=0;De<y.length;De++)if(De>=E.length){E.push(_e),re=De;break}else if(E[De]===null){E[De]=_e,re=De;break}if(re===-1)break}let be=y[re];be&&be.connect(_e)}}let V=new U,Q=new U;function H(q,ee,_e){V.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);let re=V.distanceTo(Q),be=ee.projectionMatrix.elements,De=_e.projectionMatrix.elements,Ge=be[14]/(be[10]-1),lt=be[14]/(be[10]+1),qe=(be[9]+1)/be[5],ht=(be[9]-1)/be[5],I=(be[8]-1)/be[0],Wt=(De[8]+1)/De[0],He=Ge*I,Ve=Ge*Wt,Te=re/(-I+Wt),ot=Te*-I;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Me=Ge+Te,T=lt+Te,g=He-ot,F=Ve+(re-ot),Y=qe*lt/T*Me,K=ht*lt/T*Me;q.projectionMatrix.makePerspective(g,F,Y,K,Me,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ee=q.near,_e=q.far;M.texture!==null&&(M.depthNear>0&&(ee=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),_.near=w.near=b.near=ee,_.far=w.far=b.far=_e,(C!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,z=_.far),b.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,_.layers.mask=b.layers.mask|w.layers.mask;let re=q.parent,be=_.cameras;ne(_,re);for(let De=0;De<be.length;De++)ne(be[De],re);be.length===2?H(_,b,w):_.projectionMatrix.copy(b.projectionMatrix),ce(q,_,re)};function ce(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let Se=null;function Be(q,ee){if(u=ee.getViewerPose(f||s),x=ee,u!==null){let _e=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let re=!1;_e.length!==_.cameras.length&&(_.cameras.length=0,re=!0);for(let De=0;De<_e.length;De++){let Ge=_e[De],lt=null;if(m!==null)lt=m.getViewport(Ge);else{let ht=p.getViewSubImage(h,Ge);lt=ht.viewport,De===0&&(e.setRenderTargetTextures(A,ht.colorTexture,h.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(A))}let qe=S[De];qe===void 0&&(qe=new Et,qe.layers.enable(De),qe.viewport=new et,S[De]=qe),qe.matrix.fromArray(Ge.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ge.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),De===0&&(_.matrix.copy(qe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),re===!0&&_.cameras.push(qe)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){let De=p.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&M.init(e,De,r.renderState)}}for(let _e=0;_e<y.length;_e++){let re=E[_e],be=y[_e];re!==null&&be!==void 0&&be.update(re,ee,f||s)}Se&&Se(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}let tt=new Xo;tt.setAnimationLoop(Be),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}};var gn=new ft,Hp=new ke;function Rd(i,e){function t(d,c){d.matrixAutoUpdate===!0&&d.updateMatrix(),c.value.copy(d.matrix)}function n(d,c){c.color.getRGB(d.fogColor.value,qo(i)),c.isFog?(d.fogNear.value=c.near,d.fogFar.value=c.far):c.isFogExp2&&(d.fogDensity.value=c.density)}function r(d,c,A,y,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(d,c):c.isMeshToonMaterial?(o(d,c),p(d,c)):c.isMeshPhongMaterial?(o(d,c),u(d,c)):c.isMeshStandardMaterial?(o(d,c),h(d,c),c.isMeshPhysicalMaterial&&m(d,c,E)):c.isMeshMatcapMaterial?(o(d,c),x(d,c)):c.isMeshDepthMaterial?o(d,c):c.isMeshDistanceMaterial?(o(d,c),M(d,c)):c.isMeshNormalMaterial?o(d,c):c.isLineBasicMaterial?(s(d,c),c.isLineDashedMaterial&&a(d,c)):c.isPointsMaterial?l(d,c,A,y):c.isSpriteMaterial?f(d,c):c.isShadowMaterial?(d.color.value.copy(c.color),d.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(d,c){d.opacity.value=c.opacity,c.color&&d.diffuse.value.copy(c.color),c.emissive&&d.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.bumpMap&&(d.bumpMap.value=c.bumpMap,t(c.bumpMap,d.bumpMapTransform),d.bumpScale.value=c.bumpScale,c.side===Ke&&(d.bumpScale.value*=-1)),c.normalMap&&(d.normalMap.value=c.normalMap,t(c.normalMap,d.normalMapTransform),d.normalScale.value.copy(c.normalScale),c.side===Ke&&d.normalScale.value.negate()),c.displacementMap&&(d.displacementMap.value=c.displacementMap,t(c.displacementMap,d.displacementMapTransform),d.displacementScale.value=c.displacementScale,d.displacementBias.value=c.displacementBias),c.emissiveMap&&(d.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,d.emissiveMapTransform)),c.specularMap&&(d.specularMap.value=c.specularMap,t(c.specularMap,d.specularMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);let A=e.get(c),y=A.envMap,E=A.envMapRotation;y&&(d.envMap.value=y,gn.copy(E),gn.x*=-1,gn.y*=-1,gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gn.y*=-1,gn.z*=-1),d.envMapRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(gn)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=c.reflectivity,d.ior.value=c.ior,d.refractionRatio.value=c.refractionRatio),c.lightMap&&(d.lightMap.value=c.lightMap,d.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,d.lightMapTransform)),c.aoMap&&(d.aoMap.value=c.aoMap,d.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,d.aoMapTransform))}function s(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform))}function a(d,c){d.dashSize.value=c.dashSize,d.totalSize.value=c.dashSize+c.gapSize,d.scale.value=c.scale}function l(d,c,A,y){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.size.value=c.size*A,d.scale.value=y*.5,c.map&&(d.map.value=c.map,t(c.map,d.uvTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function f(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.rotation.value=c.rotation,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function u(d,c){d.specular.value.copy(c.specular),d.shininess.value=Math.max(c.shininess,1e-4)}function p(d,c){c.gradientMap&&(d.gradientMap.value=c.gradientMap)}function h(d,c){d.metalness.value=c.metalness,c.metalnessMap&&(d.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,d.metalnessMapTransform)),d.roughness.value=c.roughness,c.roughnessMap&&(d.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,d.roughnessMapTransform)),c.envMap&&(d.envMapIntensity.value=c.envMapIntensity)}function m(d,c,A){d.ior.value=c.ior,c.sheen>0&&(d.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),d.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(d.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,d.sheenColorMapTransform)),c.sheenRoughnessMap&&(d.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,d.sheenRoughnessMapTransform))),c.clearcoat>0&&(d.clearcoat.value=c.clearcoat,d.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(d.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,d.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(d.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ke&&d.clearcoatNormalScale.value.negate())),c.dispersion>0&&(d.dispersion.value=c.dispersion),c.iridescence>0&&(d.iridescence.value=c.iridescence,d.iridescenceIOR.value=c.iridescenceIOR,d.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(d.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,d.iridescenceMapTransform)),c.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),c.transmission>0&&(d.transmission.value=c.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),c.transmissionMap&&(d.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,d.transmissionMapTransform)),d.thickness.value=c.thickness,c.thicknessMap&&(d.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=c.attenuationDistance,d.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(d.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(d.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=c.specularIntensity,d.specularColor.value.copy(c.specularColor),c.specularColorMap&&(d.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,d.specularColorMapTransform)),c.specularIntensityMap&&(d.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,c){c.matcap&&(d.matcap.value=c.matcap)}function M(d,c){let A=e.get(c).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wd(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){let E=y.program;n.uniformBlockBinding(A,E)}function f(A,y){let E=r[A.id];E===void 0&&(x(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",d));let B=y.program;n.updateUBOMapping(A,B);let R=e.render.frame;o[A.id]!==R&&(h(A),o[A.id]=R)}function u(A){let y=p();A.__bindingPointIndex=y;let E=i.createBuffer(),B=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function p(){for(let A=0;A<a;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){let y=r[A.id],E=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,b=E.length;R<b;R++){let w=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,_=w.length;S<_;S++){let C=w[S];if(m(C,R,S,B)===!0){let z=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],X=0;for(let j=0;j<G.length;j++){let V=G[j],Q=M(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+X,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,y,E,B){let R=A.value,b=y+"_"+E;if(B[b]===void 0)return typeof R=="number"||typeof R=="boolean"?B[b]=R:B[b]=R.clone(),!0;{let w=B[b];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return B[b]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function x(A){let y=A.uniforms,E=0,B=16;for(let b=0,w=y.length;b<w;b++){let S=Array.isArray(y[b])?y[b]:[y[b]];for(let _=0,C=S.length;_<C;_++){let z=S[_],G=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=G.length;X<j;X++){let V=G[X],Q=M(V),H=E%B,ne=H%Q.boundary,ce=H+ne;E+=ne,ce!==0&&B-ce<Q.storage&&(E+=B-ce),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Q.storage}}}let R=E%B;return R>0&&(E+=B-R),A.__size=E,A.__cache={},this}function M(A){let y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function d(A){let y=A.target;y.removeEventListener("dispose",d);let E=s.indexOf(y.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function c(){for(let A in r)i.deleteBuffer(r[A]);s=[],r={},o={}}return{bind:l,update:f,dispose:c}}var la=class{constructor(e={}){let{canvas:t=bl(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;let x=new Uint32Array(4),M=new Int32Array(4),d=null,c=null,A=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Zt,this.toneMappingExposure=1;let E=this,B=!1,R=0,b=0,w=null,S=-1,_=null,C=new et,z=new et,G=null,X=new ye(0),j=0,V=t.width,Q=t.height,H=1,ne=null,ce=null,Se=new et(0,0,V,Q),Be=new et(0,0,V,Q),tt=!1,q=new Kn,ee=!1,_e=!1,re=new ke,be=new ke,De=new U,Ge=new et,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ht(){return w===null?H:1}let I=n;function Wt(v,P){return t.getContext(v,P)}try{let v={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){let P="webgl2";if(I=Wt(P,v),I===null)throw Wt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Ve,Te,ot,Me,T,g,F,Y,K,W,ve,oe,fe,Ye,J,ue,Ae,Re,de,ze,Fe,it,D;function ie(){He=new zu(I),He.init(),Fe=new bd(I,He),Ve=new Uu(I,He,e,Fe),Te=new yd(I,He),Ve.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),ot=new qu(I),Me=new pd,T=new Ad(I,He,Te,Me,Ve,Fe,ot),g=new Fu(E),F=new Vu(E),Y=new Xl(I),it=new Pu(I,Y),K=new Wu(I,Y,ot,it),W=new Zu(I,K,Y,ot),Re=new Yu(I,Ve,T),J=new Iu(Me),ve=new hd(E,g,F,He,Ve,it,J),oe=new Rd(E,Me),fe=new _d,Ye=new Sd(He),Ae=new Du(E,g,F,Te,W,m,l),ue=new Td(E,W,Ve),D=new wd(I,ot,Ve,Te),de=new Lu(I,He,ot),ze=new Xu(I,He,ot),ot.programs=ve.programs,E.capabilities=Ve,E.extensions=He,E.properties=Me,E.renderLists=fe,E.shadowMap=ue,E.state=Te,E.info=ot}ie();let k=new as(E,I);this.xr=k,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(V,Q,!1))},this.getSize=function(v){return v.set(V,Q)},this.setSize=function(v,P,N=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,Q=P,t.width=Math.floor(v*H),t.height=Math.floor(P*H),N===!0&&(t.style.width=v+"px",t.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(V*H,Q*H).floor()},this.setDrawingBufferSize=function(v,P,N){V=v,Q=P,H=N,t.width=Math.floor(v*N),t.height=Math.floor(P*N),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,P,N,O){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,P,N,O),Te.viewport(C.copy(Se).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,P,N,O){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,P,N,O),Te.scissor(z.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){Te.setScissorTest(tt=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(v=!0,P=!0,N=!0){let O=0;if(v){let L=!1;if(w!==null){let $=w.texture.format;L=$===wn||$===Rn||$===bn}if(L){let $=w.texture.type,ae=$===wt||$===Ht||$===bi||$===oi||$===yn||$===An,pe=Ae.getClearColor(),me=Ae.getClearAlpha(),Ce=pe.r,Ue=pe.g,ge=pe.b;ae?(x[0]=Ce,x[1]=Ue,x[2]=ge,x[3]=me,I.clearBufferuiv(I.COLOR,0,x)):(M[0]=Ce,M[1]=Ue,M[2]=ge,M[3]=me,I.clearBufferiv(I.COLOR,0,M))}else O|=I.COLOR_BUFFER_BIT}P&&(O|=I.DEPTH_BUFFER_BIT),N&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),Ye.dispose(),Me.dispose(),g.dispose(),F.dispose(),W.dispose(),it.dispose(),D.dispose(),ve.dispose(),k.dispose(),k.removeEventListener("sessionstart",ma),k.removeEventListener("sessionend",ga),en.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let v=ot.autoReset,P=ue.enabled,N=ue.autoUpdate,O=ue.needsUpdate,L=ue.type;ie(),ot.autoReset=v,ue.enabled=P,ue.autoUpdate=N,ue.needsUpdate=O,ue.type=L}function se(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Le(v){let P=v.target;P.removeEventListener("dispose",Le),dt(P)}function dt(v){bt(v),Me.remove(v)}function bt(v){let P=Me.get(v).programs;P!==void 0&&(P.forEach(function(N){ve.releaseProgram(N)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,N,O,L,$){P===null&&(P=lt);let ae=L.isMesh&&L.matrixWorld.determinant()<0,pe=Gd(v,P,N,O,L);Te.setMaterial(O,ae);let me=N.index,Ce=1;if(O.wireframe===!0){if(me=K.getWireframeAttribute(N),me===void 0)return;Ce=2}let Ue=N.drawRange,ge=N.attributes.position,Ze=Ue.start*Ce,nt=(Ue.start+Ue.count)*Ce;$!==null&&(Ze=Math.max(Ze,$.start*Ce),nt=Math.min(nt,($.start+$.count)*Ce)),me!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,me.count)):ge!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,ge.count));let st=nt-Ze;if(st<0||st===1/0)return;it.setup(L,O,pe,N,me);let Nt,Je=de;if(me!==null&&(Nt=Y.get(me),Je=ze,Je.setIndex(Nt)),L.isMesh)O.wireframe===!0?(Te.setLineWidth(O.wireframeLinewidth*ht()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(L.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),Te.setLineWidth(xe*ht()),L.isLineSegments?Je.setMode(I.LINES):L.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else L.isPoints?Je.setMode(I.POINTS):L.isSprite&&Je.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Je.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let xe=L._multiDrawStarts,Ti=L._multiDrawCounts,$e=L._multiDrawCount,ei=me?Y.get(me).bytesPerElement:1,vn=Me.get(O).currentProgram.getUniforms();for(let kt=0;kt<$e;kt++)vn.setValue(I,"_gl_DrawID",kt),Je.render(xe[kt]/ei,Ti[kt])}else if(L.isInstancedMesh)Je.renderInstances(Ze,st,L.count);else if(N.isInstancedBufferGeometry){let xe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ti=Math.min(N.instanceCount,xe);Je.renderInstances(Ze,st,Ti)}else Je.render(Ze,st)};function Qe(v,P,N){v.transparent===!0&&v.side===yt&&v.forceSinglePass===!1?(v.side=Ke,v.needsUpdate=!0,eo(v,P,N),v.side=_t,v.needsUpdate=!0,eo(v,P,N),v.side=yt):eo(v,P,N)}this.compile=function(v,P,N=null){N===null&&(N=v),c=Ye.get(N),c.init(P),y.push(c),N.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(c.pushLight(L),L.castShadow&&c.pushShadow(L))}),v!==N&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(c.pushLight(L),L.castShadow&&c.pushShadow(L))}),c.setupLights();let O=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let $=L.material;if($)if(Array.isArray($))for(let ae=0;ae<$.length;ae++){let pe=$[ae];Qe(pe,N,L),O.add(pe)}else Qe($,N,L),O.add($)}),y.pop(),c=null,O},this.compileAsync=function(v,P,N=null){let O=this.compile(v,P,N);return new Promise(L=>{function $(){if(O.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){L(v);return}setTimeout($,10)}He.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Qt=null;function Ei(v){Qt&&Qt(v)}function ma(){en.stop()}function ga(){en.start()}let en=new Xo;en.setAnimationLoop(Ei),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(v){Qt=v,k.setAnimationLoop(v),v===null?en.stop():en.start()},k.addEventListener("sessionstart",ma),k.addEventListener("sessionend",ga),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,P,w),c=Ye.get(v,y.length),c.init(P),y.push(c),be.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ee=J.init(this.clippingPlanes,_e),d=fe.get(v,A.length),d.init(),A.push(d),k.enabled===!0&&k.isPresenting===!0){let $=E.xr.getDepthSensingMesh();$!==null&&ps($,P,-1/0,E.sortObjects)}ps(v,P,0,E.sortObjects),d.finish(),E.sortObjects===!0&&d.sort(ne,ce),qe=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,qe&&Ae.addToRenderList(d,v),this.info.render.frame++,ee===!0&&J.beginShadows();let N=c.state.shadowsArray;ue.render(N,v,P),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=d.opaque,L=d.transmissive;if(c.setupLights(),P.isArrayCamera){let $=P.cameras;if(L.length>0)for(let ae=0,pe=$.length;ae<pe;ae++){let me=$[ae];va(O,L,v,me)}qe&&Ae.render(v);for(let ae=0,pe=$.length;ae<pe;ae++){let me=$[ae];_a(d,v,me,me.viewport)}}else L.length>0&&va(O,L,v,P),qe&&Ae.render(v),_a(d,v,P);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),v.isScene===!0&&v.onAfterRender(E,v,P),it.resetDefaultState(),S=-1,_=null,y.pop(),y.length>0?(c=y[y.length-1],ee===!0&&J.setGlobalState(E.clippingPlanes,c.state.camera)):c=null,A.pop(),A.length>0?d=A[A.length-1]:d=null};function ps(v,P,N,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)c.pushLight(v),v.castShadow&&c.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){O&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);let ae=W.update(v),pe=v.material;pe.visible&&d.push(v,ae,pe,N,Ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){let ae=W.update(v),pe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ge.copy(ae.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){let me=ae.groups;for(let Ce=0,Ue=me.length;Ce<Ue;Ce++){let ge=me[Ce],Ze=pe[ge.materialIndex];Ze&&Ze.visible&&d.push(v,ae,Ze,N,Ge.z,ge)}}else pe.visible&&d.push(v,ae,pe,N,Ge.z,null)}}let $=v.children;for(let ae=0,pe=$.length;ae<pe;ae++)ps($[ae],P,N,O)}function _a(v,P,N,O){let L=v.opaque,$=v.transmissive,ae=v.transparent;c.setupLightsView(N),ee===!0&&J.setGlobalState(E.clippingPlanes,N),O&&Te.viewport(C.copy(O)),L.length>0&&Qr(L,P,N),$.length>0&&Qr($,P,N),ae.length>0&&Qr(ae,P,N),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function va(v,P,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[O.id]===void 0&&(c.state.transmissionRenderTarget[O.id]=new Gt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?_i:wt,minFilter:ri,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));let $=c.state.transmissionRenderTarget[O.id],ae=O.viewport||C;$.setSize(ae.z,ae.w);let pe=E.getRenderTarget();E.setRenderTarget($),E.getClearColor(X),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),qe&&Ae.render(N);let me=E.toneMapping;E.toneMapping=Zt;let Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),c.setupLightsView(O),ee===!0&&J.setGlobalState(E.clippingPlanes,O),Qr(v,N,O),T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ge=0,Ze=P.length;ge<Ze;ge++){let nt=P[ge],st=nt.object,Nt=nt.geometry,Je=nt.material,xe=nt.group;if(Je.side===yt&&st.layers.test(O.layers)){let Ti=Je.side;Je.side=Ke,Je.needsUpdate=!0,xa(st,N,O,Nt,Je,xe),Je.side=Ti,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($))}E.setRenderTarget(pe),E.setClearColor(X,j),Ce!==void 0&&(O.viewport=Ce),E.toneMapping=me}function Qr(v,P,N){let O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,$=v.length;L<$;L++){let ae=v[L],pe=ae.object,me=ae.geometry,Ce=O===null?ae.material:O,Ue=ae.group;pe.layers.test(N.layers)&&xa(pe,P,N,me,Ce,Ue)}}function xa(v,P,N,O,L,$){v.onBeforeRender(E,P,N,O,L,$),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(E,P,N,O,v,$),L.transparent===!0&&L.side===yt&&L.forceSinglePass===!1?(L.side=Ke,L.needsUpdate=!0,E.renderBufferDirect(N,P,O,L,v,$),L.side=_t,L.needsUpdate=!0,E.renderBufferDirect(N,P,O,L,v,$),L.side=yt):E.renderBufferDirect(N,P,O,L,v,$),v.onAfterRender(E,P,N,O,L,$)}function eo(v,P,N){P.isScene!==!0&&(P=lt);let O=Me.get(v),L=c.state.lights,$=c.state.shadowsArray,ae=L.state.version,pe=ve.getParameters(v,L.state,$,P,N),me=ve.getProgramCacheKey(pe),Ce=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?F:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Le),Ce=new Map,O.programs=Ce);let Ue=Ce.get(me);if(Ue!==void 0){if(O.currentProgram===Ue&&O.lightsStateVersion===ae)return Ma(v,pe),Ue}else pe.uniforms=ve.getUniforms(v),v.onBeforeCompile(pe,E),Ue=ve.acquireProgram(pe,me),Ce.set(me,Ue),O.uniforms=pe.uniforms;let ge=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ge.clippingPlanes=J.uniform),Ma(v,pe),O.needsLights=Hd(v),O.lightsStateVersion=ae,O.needsLights&&(ge.ambientLightColor.value=L.state.ambient,ge.lightProbe.value=L.state.probe,ge.directionalLights.value=L.state.directional,ge.directionalLightShadows.value=L.state.directionalShadow,ge.spotLights.value=L.state.spot,ge.spotLightShadows.value=L.state.spotShadow,ge.rectAreaLights.value=L.state.rectArea,ge.ltc_1.value=L.state.rectAreaLTC1,ge.ltc_2.value=L.state.rectAreaLTC2,ge.pointLights.value=L.state.point,ge.pointLightShadows.value=L.state.pointShadow,ge.hemisphereLights.value=L.state.hemi,ge.directionalShadowMap.value=L.state.directionalShadowMap,ge.directionalShadowMatrix.value=L.state.directionalShadowMatrix,ge.spotShadowMap.value=L.state.spotShadowMap,ge.spotLightMatrix.value=L.state.spotLightMatrix,ge.spotLightMap.value=L.state.spotLightMap,ge.pointShadowMap.value=L.state.pointShadowMap,ge.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Ue,O.uniformsList=null,Ue}function Sa(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Ji.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ma(v,P){let N=Me.get(v);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Gd(v,P,N,O,L){P.isScene!==!0&&(P=lt),T.resetTextureUnits();let $=P.fog,ae=O.isMeshStandardMaterial?P.environment:null,pe=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:si,me=(O.isMeshStandardMaterial?F:g).get(O.envMap||ae),Ce=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ue=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!N.morphAttributes.position,Ze=!!N.morphAttributes.normal,nt=!!N.morphAttributes.color,st=Zt;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=E.toneMapping);let Nt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Je=Nt!==void 0?Nt.length:0,xe=Me.get(O),Ti=c.state.lights;if(ee===!0&&(_e===!0||v!==_)){let Xt=v===_&&O.id===S;J.setState(O,v,Xt)}let $e=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Ti.state.version||xe.outputColorSpace!==pe||L.isBatchedMesh&&xe.batching===!1||!L.isBatchedMesh&&xe.batching===!0||L.isBatchedMesh&&xe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xe.instancing===!1||!L.isInstancedMesh&&xe.instancing===!0||L.isSkinnedMesh&&xe.skinning===!1||!L.isSkinnedMesh&&xe.skinning===!0||L.isInstancedMesh&&xe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xe.instancingMorph===!1&&L.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==$||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==J.numPlanes||xe.numIntersection!==J.numIntersection)||xe.vertexAlphas!==Ce||xe.vertexTangents!==Ue||xe.morphTargets!==ge||xe.morphNormals!==Ze||xe.morphColors!==nt||xe.toneMapping!==st||xe.morphTargetsCount!==Je)&&($e=!0):($e=!0,xe.__version=O.version);let ei=xe.currentProgram;$e===!0&&(ei=eo(O,P,L));let vn=!1,kt=!1,ar=!1,at=ei.getUniforms(),pi=xe.uniforms;if(Te.useProgram(ei.program)&&(vn=!0,kt=!0,ar=!0),O.id!==S&&(S=O.id,kt=!0),vn||_!==v){Te.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),wl(re),Cl(re),at.setValue(I,"projectionMatrix",re)):at.setValue(I,"projectionMatrix",v.projectionMatrix),at.setValue(I,"viewMatrix",v.matrixWorldInverse);let Ni=at.map.cameraPosition;Ni!==void 0&&Ni.setValue(I,De.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&at.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,kt=!0,ar=!0)}if(L.isSkinnedMesh){at.setOptional(I,L,"bindMatrix"),at.setOptional(I,L,"bindMatrixInverse");let Xt=L.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),at.setValue(I,"boneTexture",Xt.boneTexture,T))}L.isBatchedMesh&&(at.setOptional(I,L,"batchingTexture"),at.setValue(I,"batchingTexture",L._matricesTexture,T),at.setOptional(I,L,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",L._indirectTexture,T),at.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",L._colorsTexture,T));let lr=N.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Re.update(L,N,ei),(kt||xe.receiveShadow!==L.receiveShadow)&&(xe.receiveShadow=L.receiveShadow,at.setValue(I,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(pi.envMap.value=me,pi.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(pi.envMapIntensity.value=P.environmentIntensity),kt&&(at.setValue(I,"toneMappingExposure",E.toneMappingExposure),xe.needsLights&&kd(pi,ar),$&&O.fog===!0&&oe.refreshFogUniforms(pi,$),oe.refreshMaterialUniforms(pi,O,H,Q,c.state.transmissionRenderTarget[v.id]),Ji.upload(I,Sa(xe),pi,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ji.upload(I,Sa(xe),pi,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&at.setValue(I,"center",L.center),at.setValue(I,"modelViewMatrix",L.modelViewMatrix),at.setValue(I,"normalMatrix",L.normalMatrix),at.setValue(I,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Xt=O.uniformsGroups;for(let Ni=0,Oi=Xt.length;Ni<Oi;Ni++){let Ea=Xt[Ni];D.update(Ea,ei),D.bind(Ea,ei)}}return ei}function kd(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Hd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(v,P,N){Me.get(v.texture).__webglTexture=P,Me.get(v.depthTexture).__webglTexture=N;let O=Me.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){let N=Me.get(v);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,N=0){w=v,R=P,b=N;let O=!0,L=null,$=!1,ae=!1;if(v){let me=Me.get(v);if(me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(me.__hasExternalTextures)T.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ge=v.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(v.width!==ge.image.width||v.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}let Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ae=!0);let Ue=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[P])?L=Ue[P][N]:L=Ue[P],$=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?L=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?L=Ue[N]:L=Ue,C.copy(v.viewport),z.copy(v.scissor),G=v.scissorTest}else C.copy(Se).multiplyScalar(H).floor(),z.copy(Be).multiplyScalar(H).floor(),G=tt;if(Te.bindFramebuffer(I.FRAMEBUFFER,L)&&O&&Te.drawBuffers(v,L),Te.viewport(C),Te.scissor(z),Te.setScissorTest(G),$){let me=Me.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,N)}else if(ae){let me=Me.get(v.texture),Ce=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,N||0,Ce)}S=-1},this.readRenderTargetPixels=function(v,P,N,O,L,$,ae){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){Te.bindFramebuffer(I.FRAMEBUFFER,pe);try{let me=v.texture,Ce=me.format,Ue=me.type;if(!Ve.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&N>=0&&N<=v.height-L&&I.readPixels(P,N,O,L,Fe.convert(Ce),Fe.convert(Ue),$)}finally{let me=w!==null?Me.get(w).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(v,P,N,O,L,$,ae){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){let me=v.texture,Ce=me.format,Ue=me.type;if(!Ve.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&N>=0&&N<=v.height-L){Te.bindFramebuffer(I.FRAMEBUFFER,pe);let ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.bufferData(I.PIXEL_PACK_BUFFER,$.byteLength,I.STREAM_READ),I.readPixels(P,N,O,L,Fe.convert(Ce),Fe.convert(Ue),0);let Ze=w!==null?Me.get(w).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Ze);let nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rl(I,nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,$),I.deleteBuffer(ge),I.deleteSync(nt),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,N=0){v.isTexture!==!0&&(ln("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);let O=Math.pow(2,-N),L=Math.floor(v.image.width*O),$=Math.floor(v.image.height*O),ae=P!==null?P.x:0,pe=P!==null?P.y:0;T.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,ae,pe,L,$),Te.unbindTexture()},this.copyTextureToTexture=function(v,P,N=null,O=null,L=0){v.isTexture!==!0&&(ln("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,N=null);let $,ae,pe,me,Ce,Ue,ge,Ze,nt,st=v.isCompressedTexture?v.mipmaps[L]:v.image;N!==null?($=N.max.x-N.min.x,ae=N.max.y-N.min.y,pe=N.isBox3?N.max.z-N.min.z:1,me=N.min.x,Ce=N.min.y,Ue=N.isBox3?N.min.z:0):($=st.width,ae=st.height,pe=st.depth||1,me=0,Ce=0,Ue=0),O!==null?(ge=O.x,Ze=O.y,nt=O.z):(ge=0,Ze=0,nt=0);let Nt=Fe.convert(P.format),Je=Fe.convert(P.type),xe;P.isData3DTexture?(T.setTexture3D(P,0),xe=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(T.setTexture2DArray(P,0),xe=I.TEXTURE_2D_ARRAY):(T.setTexture2D(P,0),xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);let Ti=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),kt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue);let ar=v.isDataArrayTexture||v.isData3DTexture,at=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let pi=Me.get(v),lr=Me.get(P),Xt=Me.get(pi.__renderTarget),Ni=Me.get(lr.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Oi=0;Oi<pe;Oi++)ar&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,L,Ue+Oi),v.isDepthTexture?(at&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(P).__webglTexture,L,nt+Oi),I.blitFramebuffer(me,Ce,$,ae,ge,Ze,$,ae,I.DEPTH_BUFFER_BIT,I.NEAREST)):at?I.copyTexSubImage3D(xe,L,ge,Ze,nt+Oi,me,Ce,$,ae):I.copyTexSubImage2D(xe,L,ge,Ze,nt+Oi,me,Ce,$,ae);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(xe,L,ge,Ze,nt,$,ae,pe,Nt,Je,st.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,L,ge,Ze,nt,$,ae,pe,Nt,st.data):I.texSubImage3D(xe,L,ge,Ze,nt,$,ae,pe,Nt,Je,st):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,ge,Ze,$,ae,Nt,Je,st.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,ge,Ze,st.width,st.height,Nt,st.data):I.texSubImage2D(I.TEXTURE_2D,L,ge,Ze,$,ae,Nt,Je,st);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ti),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt),L===0&&P.generateMipmaps&&I.generateMipmap(xe),Te.unbindTexture()},this.copyTextureToTexture3D=function(v,P,N=null,O=null,L=0){return v.isTexture!==!0&&(ln("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),ln('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,N,O,L)},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),Te.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,Te.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ot}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ie._getUnpackColorSpace()}};var ca=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ft,this.environmentIntensity=1,this.environmentRotation=new ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};function Fd(i){return i*i*i*(10-i*(15-6*i))}var Cd=new Zr,Vp=new je({color:new ye(6710886).convertLinearToSRGB()}),zp=new je({color:new ye(13421772).convertLinearToSRGB(),side:Ke,transparent:!0,opacity:.75}),us=new je({visible:!1}),Wp=new je({color:4513228}),Xp=new je({color:4513228,side:Ke,transparent:!0,opacity:.5}),qp=new je({color:16776618}),Yp=new je({color:16775545,side:Ke,transparent:!0,opacity:.5}),Zp=new je({color:15911883}),Kp=new je({color:15911883,side:Ke,transparent:!0,opacity:.5}),sr=class{constructor(i,e,t,n,r,o){he(this,"stickerMaterial");he(this,"hintStickerMaterial");this.vector=i,this.fromZ=e,this.color=t,this.dimColor=n,this.hintOpacityScale=r;let s=new ye(t).convertLinearToSRGB(),a=new ye(n).convertLinearToSRGB();this.stickerMaterial={regular:new je({color:s,side:_t}),dim:new je({color:a,side:_t}),oriented:Wp,experimentalOriented2:qp,ignored:Vp,invisible:us,mystery:Zp},this.hintStickerMaterial={regular:new je({color:new ye(o?.hintColor??t).convertLinearToSRGB(),side:Ke,transparent:!0,opacity:.5*r}),dim:new je({color:new ye(o?.hintDimColor??n).convertLinearToSRGB(),side:Ke,transparent:!0,opacity:.5*r}),oriented:Xp,experimentalOriented2:Yp,ignored:zp,invisible:us,mystery:Kp}}},Ii=[new sr(new U(0,1,0),new ft(-qt/4,0,0),16777215,14540253,1.25),new sr(new U(-1,0,0),new ft(0,-qt/4,0),16750848,8934656,1,{hintDimColor:8930304}),new sr(new U(0,0,1),new ft(0,0,0),65280,34816,1,{hintDimColor:39168}),new sr(new U(1,0,0),new ft(0,qt/4,0),16711680,6684672,1,{hintDimColor:6684672}),new sr(new U(0,0,-1),new ft(0,qt/2,0),2254591,1127304,.75,{hintDimColor:6246}),new sr(new U(0,-1,0),new ft(qt/4,0,0),16776960,8947712,1.25,{hintDimColor:14540032})],Xe={U:0,L:1,F:2,R:3,B:4,D:5},jp={U:Xe.U,u:Xe.U,Uw:Xe.U,Uv:Xe.U,y:Xe.U,L:Xe.L,l:Xe.L,Lw:Xe.L,Lv:Xe.L,M:Xe.L,F:Xe.F,f:Xe.F,Fw:Xe.F,Fv:Xe.F,S:Xe.F,z:Xe.F,R:Xe.R,r:Xe.R,Rw:Xe.R,Rv:Xe.R,x:Xe.R,B:Xe.B,b:Xe.B,Bw:Xe.B,Bv:Xe.B,D:Xe.D,d:Xe.D,Dw:Xe.D,Dv:Xe.D,E:Xe.D},_n={stickerElevation:.503,foundationWidth:1,hintStickerElevation:1.45},Jp=2,$p={showMainStickers:!0,hintFacelets:"floating",showFoundation:!0,experimentalStickeringMask:void 0,foundationSprite:null,hintSprite:null,initialHintFaceletsAnimation:"auto",faceletScale:"auto"},Qp=.85;function fa(i){return typeof i.faceletScale>"u"||i.faceletScale==="auto"?Qp:i.faceletScale}var em=new je({color:0,opacity:1,transparent:!0}),tm=new je({color:0,opacity:.3,transparent:!0}),rt=class{constructor(i,e,t){he(this,"matrix");he(this,"stickerFaces");this.orbit=i;let n=typeof e=="string"?e.split(""):e;this.stickerFaces=n.map(r=>Xe[r]),this.matrix=new ke,this.matrix.setPosition(cs[i]),this.matrix.premultiply(new ke().makeRotationFromQuaternion(t))}};function Ne(i,e){return new Bi().setFromAxisAngle(i,qt*e/4)}var Oe={O:new U(0,0,0),U:new U(0,-1,0),L:new U(1,0,0),F:new U(0,0,-1),R:new U(-1,0,0),B:new U(0,0,1),D:new U(0,1,0)},cs={EDGES:new U(0,1,1),CORNERS:new U(1,1,1),CENTERS:new U(0,1,0)},im={EDGES:[0,1].map(i=>new ke().makeRotationAxis(cs.EDGES.clone().normalize(),-i*qt/2)),CORNERS:[0,1,2].map(i=>new ke().makeRotationAxis(cs.CORNERS.clone().normalize(),-i*qt/3)),CENTERS:[0,1,2,3].map(i=>new ke().makeRotationAxis(cs.CENTERS.clone().normalize(),-i*qt/4))},ua=[Xe.U,Xe.F,Xe.R],Jr={EDGES:[new rt("EDGES","UF",Ne(Oe.O,0)),new rt("EDGES","UR",Ne(Oe.U,3)),new rt("EDGES","UB",Ne(Oe.U,2)),new rt("EDGES","UL",Ne(Oe.U,1)),new rt("EDGES","DF",Ne(Oe.F,2)),new rt("EDGES","DR",Ne(Oe.F,2).premultiply(Ne(Oe.D,1))),new rt("EDGES","DB",Ne(Oe.F,2).premultiply(Ne(Oe.D,2))),new rt("EDGES","DL",Ne(Oe.F,2).premultiply(Ne(Oe.D,3))),new rt("EDGES","FR",Ne(Oe.U,3).premultiply(Ne(Oe.R,3))),new rt("EDGES","FL",Ne(Oe.U,1).premultiply(Ne(Oe.R,3))),new rt("EDGES","BR",Ne(Oe.U,3).premultiply(Ne(Oe.R,1))),new rt("EDGES","BL",Ne(Oe.U,1).premultiply(Ne(Oe.R,1)))],CORNERS:[new rt("CORNERS","UFR",Ne(Oe.O,0)),new rt("CORNERS","URB",Ne(Oe.U,3)),new rt("CORNERS","UBL",Ne(Oe.U,2)),new rt("CORNERS","ULF",Ne(Oe.U,1)),new rt("CORNERS","DRF",Ne(Oe.F,2).premultiply(Ne(Oe.D,1))),new rt("CORNERS","DFL",Ne(Oe.F,2).premultiply(Ne(Oe.D,0))),new rt("CORNERS","DLB",Ne(Oe.F,2).premultiply(Ne(Oe.D,3))),new rt("CORNERS","DBR",Ne(Oe.F,2).premultiply(Ne(Oe.D,2)))],CENTERS:[new rt("CENTERS","U",Ne(Oe.O,0)),new rt("CENTERS","L",Ne(Oe.R,3).premultiply(Ne(Oe.U,1))),new rt("CENTERS","F",Ne(Oe.R,3)),new rt("CENTERS","R",Ne(Oe.R,3).premultiply(Ne(Oe.D,1))),new rt("CENTERS","B",Ne(Oe.R,3).premultiply(Ne(Oe.D,2))),new rt("CENTERS","D",Ne(Oe.R,2))]},da=1/3,ls={EDGES:[[[0,4,6],[0,4,5]],[[3,5,7],[0,7,5]],[[2,4,8],[0,10,5]],[[1,3,7],[0,1,5]],[[2,4,2],[2,4,3]],[[3,5,1],[2,7,3]],[[0,4,0],[2,10,3]],[[1,3,1],[2,1,3]],[[3,5,4],[3,6,4]],[[1,3,4],[1,2,4]],[[1,9,4],[1,8,4]],[[3,11,4],[3,0,4]]],CORNERS:[[[0,5,6],[0,5,5],[0,6,5]],[[3,5,8],[0,8,5],[0,9,5]],[[2,3,8],[0,11,5],[0,0,5]],[[1,3,6],[0,2,5],[0,3,5]],[[3,5,2],[2,6,3],[2,5,3]],[[2,3,2],[2,3,3],[2,2,3]],[[1,3,0],[2,0,3],[2,11,3]],[[0,5,0],[2,9,3],[2,8,3]]],CENTERS:[[[0,4,7]],[[0,1,4]],[[0,4,4]],[[0,7,4]],[[0,10,4]],[[0,4,1]]]},Dd=null;function nm(){return Dd??(Dd=new Si(_n.foundationWidth,_n.foundationWidth,_n.foundationWidth))}function pa(){let i=new At,e=.5;return i.setAttribute("position",new ct(new Float32Array([e,e,0,-e,e,0,e,-e,0,-e,e,0,-e,-e,0,e,-e,0]),3)),i.setAttribute("uv",new ct(new Float32Array([1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1]),2)),i}var Pd=null;function rm(){return Pd??(Pd=pa())}var ds,Qi,fs,Nd,Ud,om=(Ud=class extends pt{constructor(e,t,n={}){super();cr(this,Qi);he(this,"kpuzzleFaceletInfo");he(this,"pieces",{});he(this,"options");he(this,"experimentalHintStickerMeshes",[]);he(this,"experimentalFoundationMeshes",[]);he(this,"setSpriteURL");he(this,"sprite",new Promise(e=>{this.setSpriteURL=t=>{Cd.load(t,e)}}));he(this,"setHintSpriteURL");he(this,"hintSprite",new Promise(e=>{this.setHintSpriteURL=t=>{Cd.load(t,e)}}));cr(this,ds,null);if(this.kpuzzle=e,this.scheduleRenderCallback=t,this.options={...$p},Object.assign(this.options,n),this.kpuzzle.name()!=="3x3x3")throw new Error(`Invalid puzzle for this Cube3D implementation: ${this.kpuzzle.name()}`);n.foundationSprite&&this.setSprite(n.foundationSprite),n.hintSprite&&this.setHintSprite(n.hintSprite),this.kpuzzleFaceletInfo={};for(let r in Jr){let o=[];this.kpuzzleFaceletInfo[r]=o,this.pieces[r]=Jr[r].map(this.createCubie.bind(this,r,o))}this.scale.set(da,da,da),this.options.experimentalStickeringMask&&this.setStickeringMask(this.options.experimentalStickeringMask),Mn(this,Qi,Nd).call(this),this.options.faceletScale&&this.experimentalSetFaceletScale(this.options.faceletScale)}setSprite(e){this.sprite=e}setHintSprite(e){this.hintSprite=e}experimentalSetStickerSpriteURL(e){this.setSpriteURL(e)}experimentalSetHintStickerSpriteURL(e){this.setHintSpriteURL(e)}setStickeringMask(e){if(e.specialBehaviour==="picture"){for(let t of Object.values(this.kpuzzleFaceletInfo))for(let n of t)for(let r of n){r.facelet.material=us;let{hintFacelet:o}=r;o&&(o.material=us)}return}this.options.experimentalStickeringMask=e;for(let[t,n]of Object.entries(e.orbits))for(let r=0;r<n.pieces.length;r++){let o=n.pieces[r];if(o){let s=this.kpuzzleFaceletInfo[t][r];for(let a=0;a<s.length;a++){let l=o.facelets[a];if(l){let f=s[a],u=typeof l=="string"?l:l?.mask;f.facelet.material=Ii[f.faceIdx].stickerMaterial[u];let p=typeof l=="string"?u:l.hintMask??u;f.hintFacelet&&(f.hintFacelet.material=Ii[f.faceIdx].hintStickerMaterial[p])}}}}this.scheduleRenderCallback&&this.scheduleRenderCallback()}experimentalUpdateOptions(e){if("showMainStickers"in e)throw new Error("Unimplemented");let t=e.showFoundation;if(typeof t<"u"&&this.options.showFoundation!==t){this.options.showFoundation=t;for(let s of this.experimentalFoundationMeshes)s.visible=t}let n=e.hintFacelets;if(typeof n<"u"&&this.options.hintFacelets!==n&&ba[n]){this.options.hintFacelets=n;for(let s of this.experimentalHintStickerMeshes)s.visible=n==="floating";this.scheduleRenderCallback()}let{experimentalStickeringMask:r}=e;typeof r<"u"&&(this.options.experimentalStickeringMask=r,this.setStickeringMask(r),this.scheduleRenderCallback());let{faceletScale:o}=e;typeof o<"u"&&this.experimentalSetFaceletScale(o)}onPositionChange(e){let t=e.pattern;for(let n in Jr){let r=Jr[n];for(let o=0;o<r.length;o++){let s=t.patternData[n].pieces[o];this.pieces[n][s].matrix.copy(Jr[n][o].matrix),this.pieces[n][s].matrix.multiply(im[n][t.patternData[n].orientation[o]])}for(let o of e.movesInProgress){let s=o.move,a=Ii[jp[s.family]].vector,l=new ke().makeRotationAxis(a,-this.ease(o.fraction)*o.direction*s.amount*qt/4);for(let f=0;f<r.length;f++){let u=this.kpuzzle.moveToTransformation(s.modified({amount:1})),p=u.transformationData[n].permutation[f];if(f!==p||u.transformationData[n].orientationDelta[f]!==0){let h=t.patternData[n].pieces[f];this.pieces[n][h].matrix.premultiply(l)}}}}this.scheduleRenderCallback()}createCubie(e,t,n,r){let o=[];t.push(o);let s=new fi;if(this.options.showFoundation){let a=this.createCubieFoundation();s.add(a),this.experimentalFoundationMeshes.push(a)}for(let a=0;a<n.stickerFaces.length;a++){let l=this.createSticker(Ii[ua[a]],Ii[n.stickerFaces[a]],!1),f={faceIdx:n.stickerFaces[a],facelet:l};if(s.add(l),this.options.hintFacelets==="floating"){let u=this.createSticker(Ii[ua[a]],Ii[n.stickerFaces[a]],!0);s.add(u),f.hintFacelet=u,this.experimentalHintStickerMeshes.push(u)}if(this.options.experimentalStickeringMask?.specialBehaviour==="picture"&&ls[e]&&ls[e][r]&&ls[e][r][a]){let[u,p,h]=ls[e][r][a];(async()=>{let m=async x=>{let M=await(x?this.hintSprite:this.sprite),d=this.createSticker(Ii[ua[a]],Ii[n.stickerFaces[a]],x);d.material=new je({map:M,side:x?Ke:yt,transparent:!0});let c=p/12,A=(p+1)/12,y=h/9,E=(h+1)/9,B=new we(c,y),R=new we(c,E),b=new we(A,E),w=new we(A,y);switch(u){case 1:{[B,R,b,w]=[R,b,w,B];break}case 2:{[B,R,b,w]=[b,w,B,R];break}case 3:{[B,R,b,w]=[w,B,R,b];break}}d.geometry.setAttribute("uv",new ct(new Float32Array([b.x,b.y,R.x,R.y,w.x,w.y,R.x,R.y,B.x,B.y,w.x,w.y]),2)),s.add(d)};m(!0),m(!1)})()}o.push(f)}return s.matrix.copy(n.matrix),s.matrixAutoUpdate=!1,this.add(s),s}createCubieFoundation(){let e=nm();return new ut(e,this.options.experimentalStickeringMask?.specialBehaviour==="picture"?em:tm)}createSticker(e,t,n){let r=this.options.experimentalStickeringMask?.specialBehaviour==="picture"?pa():n?Mn(this,Qi,fs).call(this):rm(),o=new ut(r,n?t.hintStickerMaterial.regular:t.stickerMaterial.regular);return o.setRotationFromEuler(e.fromZ),o.position.copy(e.vector),o.position.multiplyScalar(n?this.options.experimentalStickeringMask?.specialBehaviour==="picture"?Jp:_n.hintStickerElevation:_n.stickerElevation),o.scale.setScalar(fa(this.options)),o}experimentalSetFoundationOpacity(e){this.experimentalFoundationMeshes[0].material.opacity=e}experimentalSetFaceletScale(e){this.options.faceletScale=e;for(let t of Object.values(this.kpuzzleFaceletInfo))for(let n of t)for(let r of n)r.facelet.scale.setScalar(fa(this.options)),r.hintFacelet?.scale.setScalar(fa(this.options))}ease(e){return Fd(e)}},ds=new WeakMap,Qi=new WeakSet,fs=function(){return xn(this,ds)??Sn(this,ds,pa())},Nd=function(){if(this.options.initialHintFaceletsAnimation==="none"||this.options.initialHintFaceletsAnimation!=="always"&&wa())return;let e=_n.hintStickerElevation-_n.stickerElevation;Mn(this,Qi,fs).call(this).translate(0,0,-e),setTimeout(()=>{let t=performance.now(),n=0,r=1e3;function o(a){return a*(2-a)}let s=()=>{let a=performance.now()-t,l=o(a/r)*e;Mn(this,Qi,fs).call(this).translate(0,0,l-n),n=l,a<r&&(requestAnimationFrame(s),this.scheduleRenderCallback?.())};s()},500)},Ud),Ld=new je({side:yt,color:0}),$i=new je({visible:!1}),$r=new je({vertexColors:!0});function ha(i,e,t){return Math.hypot(i[3*e]-i[3*t],i[3*e+1]-i[3*t+1],i[3*e+2]-i[3*t+2])}function sm(i,e,t,n){let r=ha(i,e,t),o=ha(i,t,n),s=ha(i,e,n),a=(r+o+s)/2;return Math.sqrt(a*(a-r)*(a-o)*(a-s))}function am(i){let e=0;for(let t=2;3*t<i.length;t++)e+=sm(i,0,1,t);return e}function lm(i){let e=Math.hypot(i[0],i[1],i[2]);return i[0]/=e,i[1]/=e,i[2]/=e,i}function cm(i,e){let t=new Array(3);return t[0]=i[1]*e[2]-i[2]*e[1],t[1]=i[2]*e[0]-i[0]*e[2],t[2]=i[0]*e[1]-i[1]*e[0],t}function fm(i){let e=[i[3]-i[0],i[4]-i[1],i[5]-i[2]],t=[i[6]-i[3],i[7]-i[4],i[8]-i[5]],n=cm(e,t);return lm(n)}function um(i,e){let t=[],n=new Array(3),r=new Array(3);for(let o=1;o<10;o++){for(let a=0;a<i.length;a+=3){let l=(a+i.length-3)%i.length,f=(a+3)%i.length;for(let x=0;x<3;x++)n[x]=i[l+x]-i[a+x],r[x]=i[f+x]-i[a+x];let u=Math.hypot(n[0],n[1],n[2]),p=Math.hypot(r[0],r[1],r[2]);for(let x=0;x<3;x++)n[x]/=u,r[x]/=p;let h=n[0]*r[0]+n[1]*r[1]+n[2]*r[2],m=e/Math.sqrt(1-h*h);for(let x=0;x<3;x++)t[a+x]=i[a+x]+(n[x]+r[x])*m}let s=!0;for(let a=0;s&&a<t.length;a+=3){let l=(a+3)%i.length,f=0;for(let u=0;u<3;u++){let p=i[l+u]-i[a+u],h=t[l+u]-t[a+u];f+=p*h}f<=0&&(s=!1)}if(s)return t;e/=2}return i}var Od=class{constructor(i,e){he(this,"pos");he(this,"ipos");he(this,"vertices");he(this,"colors");he(this,"uvs");he(this,"ind");this.sz=i,this.tm=e,this.vertices=new Float32Array(9*i),this.uvs=void 0,this.colors=new Uint8Array(18*i),this.ind=new Uint8Array(i),this.pos=0,this.ipos=0}add(i,e,t){this.vertices[this.pos]=i[3*e+0],this.vertices[this.pos+1]=i[3*e+1],this.vertices[this.pos+2]=i[3*e+2],this.colors[this.pos]=t>>16,this.colors[this.pos+1]=t>>8&255,this.colors[this.pos+2]=t&255,this.pos+=3}addUncolored(i,e){this.vertices[this.pos]=i[3*e+0],this.vertices[this.pos+1]=i[3*e+1],this.vertices[this.pos+2]=i[3*e+2],this.pos+=3}setind(i){this.ind[this.ipos++]=i}makePoly(i,e,t){let n=i;for(let r=1;3*(r+1)<n.length;r++)this.add(n,0,e),this.add(n,r,e),this.add(n,r+1,e),this.setind(t)}setAttributes(i){i.setAttribute("position",new ct(this.vertices,3));let e=this.colors.subarray(0,9*this.sz);i.setAttribute("color",new ct(e,3,!0))}makeGroups(i){i.clearGroups();for(let e=0;e<this.ipos;){let t=e++,n=this.ind[t];for(;this.ind[e]===n;)e++;i.addGroup(3*t,3*(e-t),n)}}saveOriginalColors(){this.colors.copyWithin(this.pos,0,this.pos)}},dm=class{constructor(i,e,t,n){he(this,"origColor");he(this,"origColorStickeringMask");he(this,"faceColor");he(this,"texturePtr");he(this,"twistVal",-1);he(this,"stickerStart");he(this,"stickerEnd");he(this,"hintStart");he(this,"hintEnd");he(this,"foundationStart");he(this,"foundationEnd");he(this,"isDup");he(this,"faceNum");this.isDup=!!e.isDup,this.faceNum=e.face,this.stickerStart=i.ipos;let r=new ye(e.color).getHex();this.origColor=r,this.origColorStickeringMask=r,n?.stickeringMask&&this.setStickeringMask(i,n.stickeringMask),this.faceColor=r;let o=this.stickerCoords(e.coords,t);i.makePoly(o,this.faceColor,this.isDup?4:0),this.stickerEnd=i.ipos}stickerCoords(i,e){return um(i.slice(),e)}hintCoords(i,e,t,n){i=this.stickerCoords(i,t),n=n.slice();for(let o=0;o<3;o++)n[o]*=.5*e;let r=new Array(i.length);for(let o=0;3*o<i.length;o++){let s=i.length/3-1-o;r[3*o]=i[3*s]+n[0],r[3*o+1]=i[3*s+1]+n[1],r[3*o+2]=i[3*s+2]+n[2]}return r}foundationCoords(i){let e=i.slice();for(let t=0;t<i.length;t++)e[t]=i[t]*.999;return e}addHint(i,e,t,n,r,o){this.hintStart=i.ipos;let s=this.hintCoords(e.coords,n,r,o);i.makePoly(s,this.faceColor,t&&!this.isDup?2:4),this.hintEnd=i.ipos}addFoundation(i,e,t){this.foundationStart=i.ipos;let n=this.foundationCoords(e.coords);i.makePoly(n,t,this.isDup?4:6),this.foundationEnd=i.ipos}setHintStickers(i,e){let t=this.isDup||!e?4:2;for(let n=this.hintStart;n<this.hintEnd;n++)i.ind[n]=t|i.ind[n]&1}setStickeringMask(i,e){let t=0;switch(e){case"regular":{t=this.origColor;break}case"dim":{this.origColor===16777215?t=14540253:t=new ye(this.origColor).multiplyScalar(.5).getHex();break}case"oriented":{t=4513228;break}case"experimentalOriented2":{t=16776618;break}case"ignored":{t=4473924;break}case"mystery":{t=15911883;break}case"invisible":t=this.origColor}this.origColorStickeringMask=t;for(let n=9*this.stickerStart;n<9*this.stickerEnd;n+=3)i.colors[i.pos+n]=t>>16,i.colors[i.pos+n+1]=t>>8&255,i.colors[i.pos+n+2]=t&255;for(let n=9*this.hintStart;n<9*this.hintEnd;n+=3)i.colors[i.pos+n]=t>>16,i.colors[i.pos+n+1]=t>>8&255,i.colors[i.pos+n+2]=t&255;this.setHintStickers(i,e!=="invisible"&&!this.isDup)}addUVs(i){let e=i.uvs,t=i.vertices,n=new Array(3);for(let r=3*this.stickerStart;r<3*this.stickerEnd;r++){n[0]=t[3*r],n[1]=t[3*r+1],n[2]=t[3*r+2];let o=i.tm.getuv(this.faceNum,n);e[2*r]=o[0],e[2*r+1]=o[1]}for(let r=3*this.hintStart;r<3*this.hintEnd;r++){n[0]=t[3*r],n[1]=t[3*r+1],n[2]=t[3*r+2];let o=i.tm.getuv(this.faceNum,n);e[2*r]=o[0],e[2*r+1]=o[1]}}setTexture(i,e){if(this.texturePtr===e)return 0;this.texturePtr=e;let t=6*i.sz;return i.uvs.copyWithin(6*this.stickerStart,6*e.stickerStart+t,6*e.stickerEnd+t),i.uvs.copyWithin(6*this.hintStart,6*e.hintStart+t,6*e.hintEnd+t),1}setColor(i,e){let t=e.origColorStickeringMask;if(this.faceColor!==t){this.faceColor=t;let n=i.pos;return i.colors.copyWithin(9*this.stickerStart,9*e.stickerStart+n,9*e.stickerEnd+n),i.colors.copyWithin(9*this.hintStart,9*e.hintStart+n,9*e.hintEnd+n),1}else return 0}},hm=class{constructor(i,e,t){he(this,"cubie");he(this,"geo");this.cubie=new fi;let n=i.coords,r=new Od(n.length/3-2,e);for(let s=1;3*s+3<n.length;s++)r.addUncolored(n,0),r.addUncolored(n,s),r.addUncolored(n,s+1);this.geo=new At,r.setAttributes(this.geo);let o=new ut(this.geo,$i);o.userData.quantumMove=t.notationMapper.notationToExternal(new Ta(i.name)),this.cubie.scale.setScalar(.99),this.cubie.add(o)}},pm=class{constructor(i){he(this,"axis");he(this,"order");let e=i.coordinates;this.axis=new U(e[0],e[1],e[2]),this.order=i.order}},mm=.71,Fi=.5,hi,hs,Bd,Id,gm=(Id=class extends pt{constructor(e,t,n,r=!1,o=!1,s=1,a=1,l={}){super();cr(this,hs);he(this,"stickers");he(this,"axesInfo");he(this,"stickerTargets",[]);he(this,"controlTargets",[]);he(this,"movingObj");he(this,"filler");he(this,"foundationBound");he(this,"fixedGeo");he(this,"lastPos");he(this,"lastMoveTransformation");he(this,"hintMaterial");he(this,"stickerMaterial");he(this,"materialArray1");he(this,"materialArray2");he(this,"textured",!1);he(this,"showHintStickers",!1);he(this,"showFoundations",!1);he(this,"hintMaterialDisposable");he(this,"stickerMaterialDisposable");cr(this,hi,!1);he(this,"isPG3DForTwisty3DPuzzleWrapper");if(this.scheduleRenderCallback=e,this.kpuzzle=t,this.stickerDat=n,this.faceletScale=a,this.params=l,n.stickers.length===0)throw Error("Reuse of stickerdat from pg; please don't do that.");this.hintMaterial=new je({vertexColors:!0,transparent:!0,opacity:.5}),this.hintMaterialDisposable=!0,this.stickerMaterial=$r,this.stickerMaterialDisposable=!1,this.axesInfo={};let f=this.stickerDat.axis;for(let w of f)this.axesInfo[w.quantumMove.family]=new pm(w);let u=this.stickerDat.stickers;this.stickers={},this.materialArray1=new Array(8),this.materialArray2=new Array(8),this.showFoundation(r),r=!0;let p=0,h=3;for(let w of u){let S=w.coords.length/3;p+=h*(S-2)}let m=new Od(p,n.textureMapper),x=0,M=[],d=0;for(let w of n.faces)M.push(fm(w.coords)),d+=am(w.coords);let c=a!=="auto"?a*a:mm,A=0;for(let w of u)w.isDup||A++;let y=Math.sqrt(d/A)*(1-Math.sqrt(c))/2;for(let w of u){let S=w.orbit,_=w.ord,C=w.ori;this.stickers[S]||(this.stickers[S]=[]),this.stickers[S][C]||(this.stickers[S][C]=[]);let z={};l.stickeringMask&&(z.stickeringMask=ms(l.stickeringMask,S,_,C,!1));let G=new dm(m,w,y,z);this.stickers[S][C][_]=G}this.showHintStickers=o,o=!0;for(let w of u){let S=w.orbit,_=w.ord,C=w.ori;this.stickers[S][C][_].addHint(m,w,o,s,y,M[w.face])}this.foundationBound=m.ipos;for(let w of u){let S=w.orbit,_=w.ord,C=w.ori;r&&this.stickers[S][C][_].addFoundation(m,w,x)}let E=new At;m.setAttributes(E),m.makeGroups(E);let B=new ut(E,this.materialArray1);B.scale.set(Fi,Fi,Fi),this.add(B);let R=new ut(E,this.materialArray2);R.scale.set(Fi,Fi,Fi),this.add(R);let b=this.stickerDat.faces;this.movingObj=R,this.fixedGeo=E,this.filler=m;for(let w of b){let S=new hm(w,n.textureMapper,this.stickerDat);S.cubie.scale.set(Fi,Fi,Fi),this.add(S.cubie),this.controlTargets.push(S.cubie.children[0])}m.saveOriginalColors(),n.stickers=[],this.updateMaterialArrays()}dispose(){this.fixedGeo&&this.fixedGeo.dispose(),this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterial=$r,this.stickerMaterialDisposable=!1),this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterial=$r,this.hintMaterialDisposable=!1)}experimentalGetStickerTargets(){return this.stickerTargets}experimentalGetControlTargets(){return this.controlTargets}getClosestMoveToAxis(e,t){let n=null,r=0,o=a=>a;switch(t.depth){case"secondSlice":{o=a=>a.modified({innerLayer:2});break}case"rotation":{o=a=>a.modified({family:`${a.family}v`});break}}for(let a of this.stickerDat.axis){let l=e.dot(new U(...a.coordinates));if(l>r){let f=this.stickerDat.notationMapper.notationToExternal(o(a.quantumMove));if(!f)continue;Mn(this,hs,Bd).call(this,f)&&(r=l,n=f)}}if(!n)return null;t.invert&&(n=n.invert());let s=this.kpuzzle.moveToTransformation(n).repetitionOrder();return{move:n,order:s}}setStickeringMask(e){if(this.params.stickeringMask=e,e.specialBehaviour!=="picture")for(let t of this.kpuzzle.definition.orbits){let{numPieces:n,numOrientations:r}=t;for(let o=0;o<n;o++)for(let s=0;s<r;s++){let a=ms(e,t.orbitName,o,s,!1),l=this.stickers[t.orbitName][s][o];this.textured&&this.hintMaterialDisposable&&a==="invisible"||l.setStickeringMask(this.filler,a)}}Sn(this,hi,!0),this.lastPos&&this.onPositionChange(this.lastPos)}onPositionChange(e){let t=e.pattern.experimentalToTransformation();if(!t)throw new Error("indistinguishable pieces are not supported by PG3D yet");let n=new ft;this.movingObj.rotation.copy(n);let r=0,o=this.filler,s=o.ind;if(!this.lastPos||xn(this,hi)||!this.lastPos.pattern.experimentalToTransformation().isIdentical(t)){for(let l in this.stickers){let f=this.stickers[l],u=t.transformationData[l],p=f.length;if(p===1){let h=f[0];for(let m=0;m<h.length;m++){let x=u.permutation[m];this.textured?r+=h[m].setTexture(o,h[x]):r+=h[m].setColor(o,h[x])}}else for(let h=0;h<p;h++){let m=f[h];for(let x=0;x<m.length;x++){let M=(h+p-u.orientationDelta[x])%p,d=u.permutation[x];this.textured?r+=m[x].setTexture(o,f[M][d]):r+=m[x].setColor(o,f[M][d])}}}this.lastPos=e}let a=0;for(let l of e.movesInProgress){let f=l.move,u=this.stickerDat.unswizzle(f);if(!u)return;let p=f,h;try{h=this.kpuzzle.moveToTransformation(p.modified({amount:1}))}catch(d){let c=this.stickerDat.notationMapper.notationToInternal(p);if(c){let A=this.stickerDat.notationMapper.notationToExternal(c.modified({amount:1}));A&&(h=this.kpuzzle.moveToTransformation(A))}if(!h)throw console.log(d),d}let m=this.axesInfo[u.family],x=m.axis,M=-this.ease(l.fraction)*l.direction*u.amount*qt/m.order;if(this.movingObj.rotateOnAxis(x,M),this.lastMoveTransformation!==h){for(let d in this.stickers){let c=this.stickers[d],A=c.length,y=h.transformationData[d];for(let E=0;E<A;E++){let B=c[E];for(let R=0;R<B.length;R++){let b=B[R],w=y.permutation[R],S=0;if((w!==R||y.orientationDelta[R]!==0)&&(S=1),S!==b.twistVal){if(S){for(let _=b.stickerStart;_<b.stickerEnd;_++)s[_]|=1;for(let _=b.hintStart;_<b.hintEnd;_++)s[_]|=1;for(let _=b.foundationStart;_<b.foundationEnd;_++)s[_]|=1}else{for(let _=b.stickerStart;_<b.stickerEnd;_++)s[_]&=-2;for(let _=b.hintStart;_<b.hintEnd;_++)s[_]&=-2;for(let _=b.foundationStart;_<b.foundationEnd;_++)s[_]&=-2}b.twistVal=S,a++}}}}this.lastMoveTransformation=h}}(xn(this,hi)||a)&&this.filler.makeGroups(this.fixedGeo),(xn(this,hi)||r)&&(this.textured&&(this.fixedGeo.getAttribute("uv").addUpdateRange(0,6*this.foundationBound),this.fixedGeo.getAttribute("uv").needsUpdate=!0),(xn(this,hi)||!this.textured)&&(this.fixedGeo.getAttribute("color").addUpdateRange(0,9*this.foundationBound),this.fixedGeo.getAttribute("color").needsUpdate=!0)),this.scheduleRenderCallback(),Sn(this,hi,!1)}ease(e){return Fd(e)}showHintFacelets(e){this.showHintStickers=e}updateMaterialArrays(){for(let e=0;e<8;e++)this.materialArray1[e]=$i,this.materialArray2[e]=$i;this.materialArray1[0]=this.stickerMaterial,this.materialArray2[1]=this.stickerMaterial,this.showHintStickers?(this.materialArray1[2]=this.hintMaterial,this.materialArray2[3]=this.hintMaterial):(this.materialArray1[2]=$i,this.materialArray2[3]=$i),this.showFoundations?(this.materialArray1[6]=Ld,this.materialArray2[7]=Ld):(this.materialArray1[6]=$i,this.materialArray2[7]=$i)}showFoundation(e){this.showFoundations=e}setHintStickerOpacity(e){this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),e===0?this.hintMaterial=$i:e===1?this.hintMaterial=this.stickerMaterial:(this.hintMaterial=new je({vertexColors:!0,transparent:!0,opacity:e}),this.hintMaterialDisposable=!0)}experimentalUpdateOptions(e){e.hintFacelets!==void 0&&this.showHintFacelets(e.hintFacelets!=="none"),e.showFoundation!==void 0&&this.showFoundation(e.showFoundation),e.hintStickerOpacity!==void 0&&this.setHintStickerOpacity(e.hintStickerOpacity),Sn(this,hi,!0),this.lastPos&&this.onPositionChange(this.lastPos),typeof e.faceletScale<"u"&&e.faceletScale!==this.faceletScale&&console.warn("Dynamic facelet scale is not yet supported for PG3D. For now, re-create the TwistyPlayer to change the facelet scale."),this.updateMaterialArrays(),this.scheduleRenderCallback()}adduvs(){let e=this.filler;if(e.uvs)return;this.filler.uvs=new Float32Array(12*e.sz);for(let n in this.stickers){let r=this.stickers[n],o=r.length;for(let s=0;s<o;s++){let a=r[s];for(let l of a)l.addUVs(this.filler)}}e.uvs.copyWithin(6*e.sz,0,6*e.sz);let t=e.uvs.subarray(0,6*e.sz);this.fixedGeo.setAttribute("uv",new ct(t,2,!0))}experimentalUpdateTexture(e,t,n){t||(e=!1),e&&!this.filler.uvs&&this.adduvs(),this.textured=e,this.stickerMaterialDisposable&&(this.stickerMaterial.dispose(),this.stickerMaterialDisposable=!1),e?(this.stickerMaterial=new je({map:t,side:_t,transparent:!1}),this.stickerMaterialDisposable=!0):this.stickerMaterial=$r,this.hintMaterialDisposable&&(this.hintMaterial.dispose(),this.hintMaterialDisposable=!1),e?(this.hintMaterial=new je({map:n,side:_t,transparent:!0}),this.hintMaterialDisposable=!0):this.hintMaterial=$r,e&&this.showHintFacelets(n!==null),this.updateMaterialArrays(),Sn(this,hi,!0),this.lastPos&&this.onPositionChange(this.lastPos),this.scheduleRenderCallback()}},hi=new WeakMap,hs=new WeakSet,Bd=function(e){try{return this.kpuzzle.moveToTransformation(e),!0}catch{return!1}},Id),JA=class{constructor(){he(this,"renderTargets",new Set);he(this,"twisty3Ds",new Set);he(this,"threeJSScene",(async()=>new(await Ra()).ThreeScene)())}addRenderTarget(i){this.renderTargets.add(i)}scheduleRender(){for(let i of this.renderTargets)i.scheduleRender()}async addTwisty3DPuzzle(i){this.twisty3Ds.add(i),(await this.threeJSScene).add(i)}async removeTwisty3DPuzzle(i){this.twisty3Ds.delete(i),(await this.threeJSScene).remove(i)}async clearPuzzles(){for(let i of this.twisty3Ds)(await this.threeJSScene).remove(i);this.twisty3Ds.clear()}};async function $A(i,e){return new om(await ya.kpuzzle(),i,e)}async function QA(i,e,t,n,r){return new gm(i,await e.kpuzzle(),(await e.pg()).get3d({darkIgnoredOrbits:r}),!0,t==="floating",void 0,n)}export{om as Cube3D,gm as PG3D,Et as ThreePerspectiveCamera,Ws as ThreeRaycaster,ca as ThreeScene,qs as ThreeSpherical,Zr as ThreeTextureLoader,we as ThreeVector2,U as ThreeVector3,la as ThreeWebGLRenderer,JA as Twisty3DScene,$A as cube3DShim,QA as pg3dShim};
//# sourceMappingURL=twisty-dynamic-3d-QGRCHB6L-AP56JCYB.js.map

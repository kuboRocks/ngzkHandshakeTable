import{S as X,i as j,s as x,a as O,k as I,c as M,l as w,m as z,h as v,n as S,b as P,g as k,v as N,d as E,f as R,K as V,y as Y,z as K,A as y,D as d,B as H,q as Q,r as W,w as $,a0 as ee,Y as te,O as le,u as ne}from"./index.1836ee11.js";import{c as se,d as ie,t as re,l as ae,b as oe,e as F,s as Z,S as J}from"./StateButton.87d6b99b.js";import{Q as ue,S as fe,R as ce,T as he,U as _e}from"./processData.9e32fa0b.js";function me(){}function ge(l,e,t){var r=-1,n=l.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var f=Array(n);++r<n;)f[r]=l[r+e];return f}function be(l,e){return e.length<2?l:se(l,ge(e,0,-1))}function pe(l,e){return e=ie(e,l),l=be(l,e),l==null||delete l[re(ae(e))]}var ve=Array.prototype,de=ve.splice;function ke(l,e){for(var t=l?e.length:0,r=t-1;t--;){var n=e[t];if(t==r||n!==f){var f=n;ue(n)?de.call(l,n,1):pe(l,n)}}return l}function Se(l,e){var t=[];if(!(l&&l.length))return t;var r=-1,n=[],f=l.length;for(e=oe(e);++r<f;){var i=l[r];e(i,r,l)&&(t.push(i),n.push(r))}return ke(l,n),t}var Ie=1/0,we=F&&1/Z(new F([,-0]))[1]==Ie?function(l){return new F(l)}:me;const Ae=we;var Ee=200;function Oe(l,e,t){var r=-1,n=ce,f=l.length,i=!0,c=[],s=c;if(t)i=!1,n=he;else if(f>=Ee){var o=e?null:Ae(l);if(o)return Z(o);i=!1,n=_e,s=new fe}else s=e?[]:c;e:for(;++r<f;){var u=l[r],_=e?e(u):u;if(u=t||u!==0?u:0,i&&_===_){for(var h=s.length;h--;)if(s[h]===_)continue e;e&&s.push(_),c.push(u)}else n(s,_,t)||(s!==c&&s.push(_),c.push(u))}return c}function Me(l){return l&&l.length?Oe(l):[]}function q(l,e,t){const r=l.slice();return r[13]=e[t],r[14]=e,r[15]=t,r}function D(l,e,t){const r=l.slice();return r[16]=e[t],r}function L(l){let e,t,r,n,f,i;t=new J({props:{states:["全員選ぶ","全員外す"]}}),t.$on("changeFrom",l[8]);let c=!l[2]&&T();return{c(){e=I("div"),Y(t.$$.fragment),r=O(),c&&c.c(),n=O(),f=I("br"),this.h()},l(s){e=w(s,"DIV",{class:!0});var o=z(e);K(t.$$.fragment,o),r=M(o),c&&c.l(o),n=M(o),f=w(o,"BR",{}),o.forEach(v),this.h()},h(){S(e,"class","memberGrouping svelte-152z6xu")},m(s,o){P(s,e,o),y(t,e,null),d(e,r),c&&c.m(e,null),d(e,n),d(e,f),i=!0},p(s,o){s[2]?c&&(c.d(1),c=null):c||(c=T(),c.c(),c.m(e,n))},i(s){i||(k(t.$$.fragment,s),i=!0)},o(s){E(t.$$.fragment,s),i=!1},d(s){s&&v(e),H(t),c&&c.d()}}}function T(l){let e,t;return{c(){e=I("span"),t=Q("18個以下を選択することを推奨します"),this.h()},l(r){e=w(r,"SPAN",{class:!0});var n=z(e);t=W(n,"18個以下を選択することを推奨します"),n.forEach(v),this.h()},h(){S(e,"class","weaker svelte-152z6xu")},m(r,n){P(r,e,n),d(e,t)},d(r){r&&v(e)}}}function U(l){let e,t,r,n=!1,f,i=l[16].kanji+"",c,s,o,u;return s=te(l[12][0]),{c(){e=I("label"),t=I("input"),f=O(),c=Q(i),this.h()},l(_){e=w(_,"LABEL",{});var h=z(e);t=w(h,"INPUT",{type:!0,name:!0,class:!0}),f=M(h),c=W(h,i),h.forEach(v),this.h()},h(){S(t,"type","checkbox"),S(t,"name","selectedMembers"),t.__value=r=l[16].member,t.value=t.__value,S(t,"class","svelte-152z6xu"),s.p(t)},m(_,h){P(_,e,h),d(e,t),t.checked=~(l[0]||[]).indexOf(t.__value),d(e,f),d(e,c),o||(u=le(t,"change",l[11]),o=!0)},p(_,h){h&8&&r!==(r=_[16].member)&&(t.__value=r,t.value=t.__value,n=!0),(n||h&9)&&(t.checked=~(_[0]||[]).indexOf(t.__value)),h&8&&i!==(i=_[16].kanji+"")&&ne(c,i)},d(_){_&&v(e),s.r(),o=!1,u()}}}function C(l){let e,t,r=l[15],n,f,i;const c=()=>l[9](t,r),s=()=>l[9](null,r);function o(...m){return l[10](l[13],...m)}let u={states:l[13].labels};t=new J({props:u}),c(),t.$on("changeFrom",o);let _=l[13].consistsOf,h=[];for(let m=0;m<_.length;m+=1)h[m]=U(D(l,_,m));return{c(){e=I("div"),Y(t.$$.fragment),n=O();for(let m=0;m<h.length;m+=1)h[m].c();f=O(),this.h()},l(m){e=w(m,"DIV",{class:!0});var b=z(e);K(t.$$.fragment,b),n=M(b);for(let p=0;p<h.length;p+=1)h[p].l(b);f=M(b),b.forEach(v),this.h()},h(){S(e,"class","groupList svelte-152z6xu")},m(m,b){P(m,e,b),y(t,e,null),d(e,n);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);d(e,f),i=!0},p(m,b){l=m,r!==l[15]&&(s(),r=l[15],c());const p={};if(b&8&&(p.states=l[13].labels),t.$set(p),b&9){_=l[13].consistsOf;let a;for(a=0;a<_.length;a+=1){const g=D(l,_,a);h[a]?h[a].p(g,b):(h[a]=U(g),h[a].c(),h[a].m(e,f))}for(;a<h.length;a+=1)h[a].d(1);h.length=_.length}},i(m){i||(k(t.$$.fragment,m),i=!0)},o(m){E(t.$$.fragment,m),i=!1},d(m){m&&v(e),s(),H(t),V(h,m)}}}function Pe(l){let e,t,r,n=l[1].length>1&&L(l),f=l[3],i=[];for(let s=0;s<f.length;s+=1)i[s]=C(q(l,f,s));const c=s=>E(i[s],1,1,()=>{i[s]=null});return{c(){n&&n.c(),e=O(),t=I("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){n&&n.l(s),e=M(s),t=w(s,"DIV",{class:!0});var o=z(t);for(let u=0;u<i.length;u+=1)i[u].l(o);o.forEach(v),this.h()},h(){S(t,"class","memberGrouping svelte-152z6xu")},m(s,o){n&&n.m(s,o),P(s,e,o),P(s,t,o);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(t,null);r=!0},p(s,[o]){if(s[1].length>1?n?(n.p(s,o),o&2&&k(n,1)):(n=L(s),n.c(),k(n,1),n.m(e.parentNode,e)):n&&(N(),E(n,1,1,()=>{n=null}),R()),o&57){f=s[3];let u;for(u=0;u<f.length;u+=1){const _=q(s,f,u);i[u]?(i[u].p(_,o),k(i[u],1)):(i[u]=C(_),i[u].c(),k(i[u],1),i[u].m(t,null))}for(N(),u=f.length;u<i.length;u+=1)c(u);R()}},i(s){if(!r){k(n);for(let o=0;o<f.length;o+=1)k(i[o]);r=!0}},o(s){E(n),i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)E(i[o]);r=!1},d(s){n&&n.d(s),s&&v(e),s&&v(t),V(i,s)}}}function ze(l,e,t){let r,n,{selectables:f}=e,{selectedMembers:i}=e,{nolimit:c=!1}=e;function s(a,g){let G=r.find(A=>A.gen==parseInt(a));if(g.match(/選ぶ$/))for(let A of G.consistsOf)i.find(B=>A.member==B.member)||i.push(A.member);else G.consistsOf.map(A=>Se(i,B=>B==A.member));t(0,i)}function o(){for(let a of n)a.resetState(0)}const u=a=>t(0,i=a.match(/選ぶ$/)?f.map(g=>g.member):[]),_=[[]],h=a=>u(a.detail.text);function m(a,g){$[a?"unshift":"push"](()=>{n[g]=a,t(4,n),t(3,r),t(1,f)})}const b=(a,g)=>s(a.gen,g.detail.text);function p(){i=ee(_[0],this.__value,this.checked),t(0,i)}return l.$$set=a=>{"selectables"in a&&t(1,f=a.selectables),"selectedMembers"in a&&t(0,i=a.selectedMembers),"nolimit"in a&&t(2,c=a.nolimit)},l.$$.update=()=>{l.$$.dirty&2&&t(3,r=Me(f.map(a=>a.gen)).sort((a,g)=>parseInt(a)-parseInt(g)).map(a=>({gen:a,labels:[`全${a}期生選ぶ`,`全${a}期生外す`],consistsOf:f.filter(g=>g.gen==a)}))),l.$$.dirty&8&&t(4,n=Array(r.length))},[i,f,c,r,n,s,u,o,h,m,b,p,_]}class Ne extends X{constructor(e){super(),j(this,e,ze,Pe,x,{selectables:1,selectedMembers:0,nolimit:2,reset:7})}get reset(){return this.$$.ctx[7]}}export{Ne as S,Me as u};
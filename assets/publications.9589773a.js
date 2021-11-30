import{S as T,i as V,s as X,d as b,H as g,v as H,I as P,C as w,E as k,J as K,K as R,t as j,p as C,F as x,D as h,j as f,q as m,e as d,h as p,L as B,f as E,y}from"./vendor.29f5cc4f.js";import{L as F,S as I}from"./index.18f977df.js";import{B as U}from"./Banner.c3a88d58.js";const _="src/pages/publications.md";function q(l){let t,s,o;const c={c:function(){t=d("h3"),t.textContent="Selected Publications",s=h(),o=d("p"),o.textContent="Cisco is proud to contribute to research across the industry.",p(t,_,12,0,429),p(o,_,13,0,460)},m:function(n,e){f(n,t,e),f(n,s,e),f(n,o,e)},d:function(n){n&&m(t),n&&m(s),n&&m(o)}};return b("SvelteRegisterBlock",{block:c,id:q.name,type:"slot",source:'(12:0) <Banner img=\\"img/banner-publications.jpg\\">',ctx:l}),c}function J(l){let t,s,o,c,a,n,e,i,u,$;const A={c:function(){t=d("h1"),t.textContent="Selected Publications",s=h(),o=d("p"),c=B("If you are interested in deep diving to some of the public work we have done, please have a lok at the list of articles and patents in our google scholar list  "),a=d("a"),a.textContent="here",n=h(),e=d("p"),i=B("For more information, please "),u=d("a"),u.textContent="contact us",$=B("."),p(t,_,16,0,549),E(a,"href","https://scholar.google.com/citations?hl=en&user=aI49tUEAAAAJ&view_op=list_works&sortby=pubdate"),E(a,"rel","nofollow"),p(a,_,17,163,743),p(o,_,17,0,580),E(u,"href","#/contact"),p(u,_,21,32,913),p(e,_,21,0,881)},m:function(r,v){f(r,t,v),f(r,s,v),f(r,o,v),y(o,c),y(o,a),f(r,n,v),f(r,e,v),y(e,i),y(e,u),y(e,$)},d:function(r){r&&m(t),r&&m(s),r&&m(o),r&&m(n),r&&m(e)}};return b("SvelteRegisterBlock",{block:A,id:J.name,type:"slot",source:"(16:0) <Section>",ctx:l}),A}function M(l){let t,s,o,c;t=new U({props:{img:"img/banner-publications.jpg",$$slots:{default:[q]},$$scope:{ctx:l}},$$inline:!0}),o=new I({props:{$$slots:{default:[J]},$$scope:{ctx:l}},$$inline:!0});const a={c:function(){w(t.$$.fragment),s=h(),w(o.$$.fragment)},m:function(e,i){k(t,e,i),f(e,s,i),k(o,e,i),c=!0},p:function(e,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:e}),t.$set(u);const $={};i&2&&($.$$scope={dirty:i,ctx:e}),o.$set($)},i:function(e){c||(j(t.$$.fragment,e),j(o.$$.fragment,e),c=!0)},o:function(e){C(t.$$.fragment,e),C(o.$$.fragment,e),c=!1},d:function(e){x(t,e),e&&m(s),x(o,e)}};return b("SvelteRegisterBlock",{block:a,id:M.name,type:"slot",source:"(10:0) <Layout_MDSVEX_DEFAULT {...$$props} {...metadata}>",ctx:l}),a}function L(l){let t,s;const o=[l[0],S];let c={$$slots:{default:[M]},$$scope:{ctx:l}};for(let n=0;n<o.length;n+=1)c=g(c,o[n]);t=new F({props:c,$$inline:!0});const a={c:function(){w(t.$$.fragment)},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,i){k(t,e,i),s=!0},p:function(e,[i]){const u=i&1?K(o,[i&1&&R(e[0]),i&0&&R(S)]):{};i&2&&(u.$$scope={dirty:i,ctx:e}),t.$set(u)},i:function(e){s||(j(t.$$.fragment,e),s=!0)},o:function(e){C(t.$$.fragment,e),s=!1},d:function(e){x(t,e)}};return b("SvelteRegisterBlock",{block:a,id:L.name,type:"component",source:"",ctx:l}),a}const S={layout:"page"},{layout:N}=S;function z(l,t,s){let{$$slots:o={},$$scope:c}=t;return H("Publications",o,[]),l.$$set=a=>{s(0,t=g(g({},t),P(a)))},l.$capture_state=()=>({metadata:S,layout:N,Layout_MDSVEX_DEFAULT:F,Banner:U,Section:I}),l.$inject_state=a=>{s(0,t=g(g({},t),a))},t&&"$$inject"in t&&l.$inject_state(t.$$inject),t=P(t),[t]}class W extends T{constructor(t){super(t);V(this,t,z,L,X,{}),b("SvelteRegisterComponent",{component:this,tagName:"Publications",options:t,id:L.name})}}export{W as default,S as metadata};

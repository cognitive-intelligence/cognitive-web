import{S as V,i as X,s as Y,d as h,l as b,L as R,v as z,m as L,n as J,o as w,p as j,q as N,r as D,t as S,j as C,w as x,x as y,f as c,k as f,e as m,b as _,y as M,z as E,a as F,A as k}from"./index.f9292b2e.js";import{B as A}from"./Banner.ddc26272.js";const d="src/pages/jobs.md";function T(l){let e,a,n;const r={c:function(){e=m("h3"),e.textContent="Find Your Fit. Make Your Mark.",a=y(),n=m("p"),n.textContent=`Finding the right fit for the right people makes Cisco stronger and helps us work better together.
Search open opportunities to put your skills and career goals to work for you and Cisco.`,_(e,d,12,0,461),_(n,d,13,0,501)},m:function(o,t){c(o,e,t),c(o,a,t),c(o,n,t)},p:M,d:function(o){o&&f(e),o&&f(a),o&&f(n)}};return h("SvelteRegisterBlock",{block:r,id:T.name,type:"slot",source:'(12:0) <Banner img=\\"img/banner-jobs.jpg\\">',ctx:l}),r}function q(l){let e,a,n,r,s,o,t,i;const p={c:function(){e=m("h1"),e.textContent="Open positions",a=y(),n=m("p"),n.textContent="We always look for the new colleagues which could help us both in research and engineering tasks.",r=y(),s=m("p"),o=E("The "),t=m("a"),t.textContent="list of the currently open positions",i=E(` is available for your selection.
But if you do not get the job specification you look for please do not hessitate to get in tuch with us anyway.`),_(e,d,17,0,716),_(n,d,18,0,740),F(t,"href","https://jobs.cisco.com/jobs/SearchJobs/cognitiveintelligence"),F(t,"rel","nofollow"),_(t,d,19,7,853),_(s,d,19,0,846)},m:function(u,g){c(u,e,g),c(u,a,g),c(u,n,g),c(u,r,g),c(u,s,g),k(s,o),k(s,t),k(s,i)},p:M,d:function(u){u&&f(e),u&&f(a),u&&f(n),u&&f(r),u&&f(s)}};return h("SvelteRegisterBlock",{block:p,id:q.name,type:"slot",source:"(17:0) <Section>",ctx:l}),p}function U(l){let e,a,n,r;e=new A({props:{img:"img/banner-jobs.jpg",$$slots:{default:[T]},$$scope:{ctx:l}},$$inline:!0}),n=new J({props:{$$slots:{default:[q]},$$scope:{ctx:l}},$$inline:!0});const s={c:function(){w(e.$$.fragment),a=y(),w(n.$$.fragment)},m:function(t,i){j(e,t,i),c(t,a,i),j(n,t,i),r=!0},p:function(t,i){const p={};i&2&&(p.$$scope={dirty:i,ctx:t}),e.$set(p);const $={};i&2&&($.$$scope={dirty:i,ctx:t}),n.$set($)},i:function(t){r||(S(e.$$.fragment,t),S(n.$$.fragment,t),r=!0)},o:function(t){C(e.$$.fragment,t),C(n.$$.fragment,t),r=!1},d:function(t){x(e,t),t&&f(a),x(n,t)}};return h("SvelteRegisterBlock",{block:s,id:U.name,type:"slot",source:"(10:0) <Layout_MDSVEX_DEFAULT {...$$props} {...metadata}>",ctx:l}),s}function B(l){let e,a;const n=[l[0],v];let r={$$slots:{default:[U]},$$scope:{ctx:l}};for(let o=0;o<n.length;o+=1)r=b(r,n[o]);e=new R({props:r,$$inline:!0});const s={c:function(){w(e.$$.fragment)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,i){j(e,t,i),a=!0},p:function(t,[i]){const p=i&1?N(n,[i&1&&D(t[0]),i&0&&D(v)]):{};i&2&&(p.$$scope={dirty:i,ctx:t}),e.$set(p)},i:function(t){a||(S(e.$$.fragment,t),a=!0)},o:function(t){C(e.$$.fragment,t),a=!1},d:function(t){x(e,t)}};return h("SvelteRegisterBlock",{block:s,id:B.name,type:"component",source:"",ctx:l}),s}const v={layout:"page"},{layout:O}=v;function P(l,e,a){let{$$slots:n={},$$scope:r}=e;return z("Jobs",n,[]),l.$$set=s=>{a(0,e=b(b({},e),L(s)))},l.$capture_state=()=>({metadata:v,layout:O,Layout_MDSVEX_DEFAULT:R,Banner:A,Section:J}),l.$inject_state=s=>{a(0,e=b(b({},e),s))},e&&"$$inject"in e&&l.$inject_state(e.$$inject),e=L(e),[e]}class H extends V{constructor(e){super(e),X(this,e,P,B,Y,{}),h("SvelteRegisterComponent",{component:this,tagName:"Jobs",options:e,id:B.name})}}export{H as default,v as metadata};

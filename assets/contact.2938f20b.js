import{S as V,i as X,s as J,d as B,v as W,e as u,T as Y,f as S,h as f,j as $,n as Q,q as w,H as G,I as Z,C as L,E as D,J as re,K as ee,t as F,p as T,F as z,D as C,L as j,y as l}from"./vendor.f28ecf85.js";import{L as te,S as P}from"./index.6da47abd.js";const ae="src/lib/BannerGoogleMap.svelte";function N(a){let e,r;const t={c:function(){e=u("iframe"),Y(e.src,r=a[0])||S(e,"src",r),e.allowFullscreen=!0,S(e,"loading","lazy"),S(e,"class","s-oDkruLRj-vBz"),f(e,ae,5,0,345)},l:function(o){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(o,c){$(o,e,c)},p:function(o,[c]){c&1&&!Y(e.src,r=o[0])&&S(e,"src",r)},i:Q,o:Q,d:function(o){o&&w(e)}};return B("SvelteRegisterBlock",{block:t,id:N.name,type:"component",source:"",ctx:a}),t}function le(a,e,r){let{$$slots:t={},$$scope:i}=e;W("BannerGoogleMap",t,[]);let{src:o="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.3999650674177!2d14.418543334229037!3d50.07542643634334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94952346a89f%3A0x98cc85393e9c0e37!2sCisco%20Systems%20(Czech%20Republic)%20S.r.o!5e0!3m2!1sen!2snl!4v1635608087121!5m2!1sen!2snl"}=e;const c=["src"];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<BannerGoogleMap> was created with unknown prop '${s}'`)}),a.$$set=s=>{"src"in s&&r(0,o=s.src)},a.$capture_state=()=>({src:o}),a.$inject_state=s=>{"src"in s&&r(0,o=s.src)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[o]}class ne extends V{constructor(e){super(e);X(this,e,le,N,J,{src:0}),B("SvelteRegisterComponent",{component:this,tagName:"BannerGoogleMap",options:e,id:N.name})}get src(){throw new Error("<BannerGoogleMap>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set src(e){throw new Error("<BannerGoogleMap>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const m="src/pages/contact.md";function oe(a){let e,r,t,i,o,c,s,p,n,d,_,b,h,k,M,g,y,A,O,E,I,R;const K={c:function(){e=u("h1"),e.textContent="Feel free to email us",r=C(),t=u("p"),i=u("strong"),i.textContent="Tomas Macek",o=j(", "),c=u("em"),c.textContent="Head of Research",s=u("br"),p=C(),n=u("a"),n.textContent="tmacek@cisco.com",d=C(),_=u("p"),b=u("strong"),b.textContent="Katerina Svrcinova",h=j(", "),k=u("em"),k.textContent="Business Operations Manager",M=u("br"),g=C(),y=u("a"),y.textContent="ksvrcino@cisco.com",A=u("br"),O=C(),E=u("p"),I=j("Follow us on twitter "),R=u("a"),R.textContent="#ciscocognitive",f(e,m,13,0,473),f(i,m,14,3,507),f(c,m,14,33,537),f(s,m,14,58,562),S(n,"href","mailto:tmacek@cisco.com"),f(n,m,15,0,568),f(t,m,14,0,504),f(b,m,16,3,630),f(k,m,16,40,667),f(M,m,16,76,703),S(y,"href","mailto:ksvrcino@cisco.com"),f(y,m,17,0,709),f(A,m,17,58,767),f(_,m,16,0,627),S(R,"href","https://twitter.com/hashtag/ciscocognitive?src=hashtag_click&f=live"),S(R,"rel","nofollow"),f(R,m,18,24,801),f(E,m,18,0,777)},m:function(v,x){$(v,e,x),$(v,r,x),$(v,t,x),l(t,i),l(t,o),l(t,c),l(t,s),l(t,p),l(t,n),$(v,d,x),$(v,_,x),l(_,b),l(_,h),l(_,k),l(_,M),l(_,g),l(_,y),l(_,A),$(v,O,x),$(v,E,x),l(E,I),l(E,R)},d:function(v){v&&w(e),v&&w(r),v&&w(t),v&&w(d),v&&w(_),v&&w(O),v&&w(E)}};return B("SvelteRegisterBlock",{block:K,id:oe.name,type:"slot",source:"(13:0) <Section>",ctx:a}),K}function se(a){let e,r,t,i,o,c,s,p,n,d,_,b,h;const k={c:function(){e=u("h3"),e.textContent="Address",r=C(),t=u("p"),i=j("CISCO SYSTEMS (Czech Republic) s.r.o."),o=u("br"),c=j(`
Charles Square 2097/10`),s=u("br"),p=j(`
120 00 Prague 2 - New Town`),n=u("br"),d=j(`
Czechia`),_=C(),b=u("p"),h=u("em"),h.textContent="We look forward to meeting you in person.",f(e,m,24,0,956),f(o,m,25,40,1013),f(s,m,26,22,1041),f(n,m,27,26,1073),f(t,m,25,0,973),f(h,m,29,3,1094),f(b,m,29,0,1091)},m:function(g,y){$(g,e,y),$(g,r,y),$(g,t,y),l(t,i),l(t,o),l(t,c),l(t,s),l(t,p),l(t,n),l(t,d),$(g,_,y),$(g,b,y),l(b,h)},d:function(g){g&&w(e),g&&w(r),g&&w(t),g&&w(_),g&&w(b)}};return B("SvelteRegisterBlock",{block:k,id:se.name,type:"slot",source:"(24:0) <Section gray={true}>",ctx:a}),k}function ce(a){let e,r,t,i,o,c;e=new ne({$$inline:!0}),t=new P({props:{$$slots:{default:[oe]},$$scope:{ctx:a}},$$inline:!0}),o=new P({props:{gray:!0,$$slots:{default:[se]},$$scope:{ctx:a}},$$inline:!0});const s={c:function(){L(e.$$.fragment),r=C(),L(t.$$.fragment),i=C(),L(o.$$.fragment)},m:function(n,d){D(e,n,d),$(n,r,d),D(t,n,d),$(n,i,d),D(o,n,d),c=!0},p:function(n,d){const _={};d&2&&(_.$$scope={dirty:d,ctx:n}),t.$set(_);const b={};d&2&&(b.$$scope={dirty:d,ctx:n}),o.$set(b)},i:function(n){c||(F(e.$$.fragment,n),F(t.$$.fragment,n),F(o.$$.fragment,n),c=!0)},o:function(n){T(e.$$.fragment,n),T(t.$$.fragment,n),T(o.$$.fragment,n),c=!1},d:function(n){z(e,n),n&&w(r),z(t,n),n&&w(i),z(o,n)}};return B("SvelteRegisterBlock",{block:s,id:ce.name,type:"slot",source:"(10:0) <Layout_MDSVEX_DEFAULT {...$$props} {...metadata}>",ctx:a}),s}function H(a){let e,r;const t=[a[0],q];let i={$$slots:{default:[ce]},$$scope:{ctx:a}};for(let c=0;c<t.length;c+=1)i=G(i,t[c]);e=new te({props:i,$$inline:!0});const o={c:function(){L(e.$$.fragment)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,p){D(e,s,p),r=!0},p:function(s,[p]){const n=p&1?re(t,[p&1&&ee(s[0]),p&0&&ee(q)]):{};p&2&&(n.$$scope={dirty:p,ctx:s}),e.$set(n)},i:function(s){r||(F(e.$$.fragment,s),r=!0)},o:function(s){T(e.$$.fragment,s),r=!1},d:function(s){z(e,s)}};return B("SvelteRegisterBlock",{block:o,id:H.name,type:"component",source:"",ctx:a}),o}const q={layout:"page"},{layout:ie}=q;function ue(a,e,r){let{$$slots:t={},$$scope:i}=e;return W("Contact",t,[]),a.$$set=o=>{r(0,e=G(G({},e),Z(o)))},a.$capture_state=()=>({metadata:q,layout:ie,Layout_MDSVEX_DEFAULT:te,BannerGoogleMap:ne,Section:P}),a.$inject_state=o=>{r(0,e=G(G({},e),o))},e&&"$$inject"in e&&a.$inject_state(e.$$inject),e=Z(e),[e]}class pe extends V{constructor(e){super(e);X(this,e,ue,H,J,{}),B("SvelteRegisterComponent",{component:this,tagName:"Contact",options:e,id:H.name})}}export{pe as default,q as metadata};

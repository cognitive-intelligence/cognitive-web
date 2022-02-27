import{S as R,i as E,s as P,d as _,c as L,v as G,e as $,f as b,h as g,j as d,u as O,m as I,o as D,t as w,p as h,q as m,D as v,y as Q,U as he,O as be,P as ve,M as A,H as U,I as Y,C,E as k,J as ye,K as z,F as B,L as J}from"./vendor.29f5cc4f.js";import{L as x,S as Ce}from"./index.60846e47.js";import{B as ee}from"./Banner.c3a88d58.js";const ke="src/lib/Cards.svelte";function V(u){let e,o;const i=u[1].default,n=L(i,u,u[0],null),l={c:function(){e=$("div"),n&&n.c(),b(e,"class","s-UMQuJLIaUOa3"),g(e,ke,0,0,0)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,s){d(t,e,s),n&&n.m(e,null),o=!0},p:function(t,[s]){n&&n.p&&(!o||s&1)&&O(n,i,t,t[0],o?D(i,t[0],s,null):I(t[0]),null)},i:function(t){o||(w(n,t),o=!0)},o:function(t){h(n,t),o=!1},d:function(t){t&&m(e),n&&n.d(t)}};return _("SvelteRegisterBlock",{block:l,id:V.name,type:"component",source:"",ctx:u}),l}function Be(u,e,o){let{$$slots:i={},$$scope:n}=e;G("Cards",i,["default"]);const l=[];return Object.keys(e).forEach(c=>{!~l.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Cards> was created with unknown prop '${c}'`)}),u.$$set=c=>{"$$scope"in c&&o(0,n=c.$$scope)},[n,i]}class te extends R{constructor(e){super(e);E(this,e,Be,V,P,{}),_("SvelteRegisterComponent",{component:this,tagName:"Cards",options:e,id:V.name})}}const Z="src/lib/Card.svelte";function q(u){let e,o,i,n,l,c;const t=u[3].default,s=L(t,u,u[2],null),r={c:function(){e=$("a"),o=$("span"),s&&s.c(),i=v(),n=$("figure"),b(o,"class","s-rd2yZI2QwEJR"),g(o,Z,6,2,70),b(n,"style",l=`background-image: url("${u[0]}")`),b(n,"class","s-rd2yZI2QwEJR"),g(n,Z,9,2,102),b(e,"href",u[1]),b(e,"class","s-rd2yZI2QwEJR"),g(e,Z,5,0,57)},l:function(a){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(a,p){d(a,e,p),Q(e,o),s&&s.m(o,null),Q(e,i),Q(e,n),c=!0},p:function(a,[p]){s&&s.p&&(!c||p&4)&&O(s,t,a,a[2],c?D(t,a[2],p,null):I(a[2]),null),(!c||p&1&&l!==(l=`background-image: url("${a[0]}")`))&&b(n,"style",l),(!c||p&2)&&b(e,"href",a[1])},i:function(a){c||(w(s,a),c=!0)},o:function(a){h(s,a),c=!1},d:function(a){a&&m(e),s&&s.d(a)}};return _("SvelteRegisterBlock",{block:r,id:q.name,type:"component",source:"",ctx:u}),r}function je(u,e,o){let{$$slots:i={},$$scope:n}=e;G("Card",i,["default"]);let{img:l}=e,{href:c}=e;const t=["img","href"];return Object.keys(e).forEach(s=>{!~t.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Card> was created with unknown prop '${s}'`)}),u.$$set=s=>{"img"in s&&o(0,l=s.img),"href"in s&&o(1,c=s.href),"$$scope"in s&&o(2,n=s.$$scope)},u.$capture_state=()=>({img:l,href:c}),u.$inject_state=s=>{"img"in s&&o(0,l=s.img),"href"in s&&o(1,c=s.href)},e&&"$$inject"in e&&u.$inject_state(e.$$inject),[l,c,n,i]}class N extends R{constructor(e){super(e);E(this,e,je,q,P,{img:0,href:1}),_("SvelteRegisterComponent",{component:this,tagName:"Card",options:e,id:q.name});const{ctx:o}=this.$$,i=e.props||{};o[0]===void 0&&!("img"in i)&&console.warn("<Card> was created without expected prop 'img'"),o[1]===void 0&&!("href"in i)&&console.warn("<Card> was created without expected prop 'href'")}get img(){throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set img(e){throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get href(){throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set href(e){throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ne="src/lib/CardButton.svelte";function oe(u){let e,o;const i=u[3].default,n=L(i,u,u[2],null),l={c:function(){e=$("span"),n&&n.c(),b(e,"role","button"),b(e,"class","s-IcUqiRQZXKD5"),A(e,"filled",u[0]),g(e,ne,10,2,149)},m:function(t,s){d(t,e,s),n&&n.m(e,null),o=!0},p:function(t,s){n&&n.p&&(!o||s&4)&&O(n,i,t,t[2],o?D(i,t[2],s,null):I(t[2]),null),s&1&&A(e,"filled",t[0])},i:function(t){o||(w(n,t),o=!0)},o:function(t){h(n,t),o=!1},d:function(t){t&&m(e),n&&n.d(t)}};return _("SvelteRegisterBlock",{block:l,id:oe.name,type:"else",source:"(10:0) {:else}",ctx:u}),l}function se(u){let e,o;const i=u[3].default,n=L(i,u,u[2],null),l={c:function(){e=$("a"),n&&n.c(),b(e,"role","button"),b(e,"href",u[1]),b(e,"class","s-IcUqiRQZXKD5"),A(e,"filled",u[0]),g(e,ne,6,2,81)},m:function(t,s){d(t,e,s),n&&n.m(e,null),o=!0},p:function(t,s){n&&n.p&&(!o||s&4)&&O(n,i,t,t[2],o?D(i,t[2],s,null):I(t[2]),null),(!o||s&2)&&b(e,"href",t[1]),s&1&&A(e,"filled",t[0])},i:function(t){o||(w(n,t),o=!0)},o:function(t){h(n,t),o=!1},d:function(t){t&&m(e),n&&n.d(t)}};return _("SvelteRegisterBlock",{block:l,id:se.name,type:"if",source:"(6:0) {#if href}",ctx:u}),l}function F(u){let e,o,i,n;const l=[se,oe],c=[];function t(r,f){return r[1]?0:1}e=t(u),o=c[e]=l[e](u);const s={c:function(){o.c(),i=he()},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,a){c[e].m(f,a),d(f,i,a),n=!0},p:function(f,[a]){let p=e;e=t(f),e===p?c[e].p(f,a):(be(),h(c[p],1,1,()=>{c[p]=null}),ve(),o=c[e],o?o.p(f,a):(o=c[e]=l[e](f),o.c()),w(o,1),o.m(i.parentNode,i))},i:function(f){n||(w(o),n=!0)},o:function(f){h(o),n=!1},d:function(f){c[e].d(f),f&&m(i)}};return _("SvelteRegisterBlock",{block:s,id:F.name,type:"component",source:"",ctx:u}),s}function Se(u,e,o){let{$$slots:i={},$$scope:n}=e;G("CardButton",i,["default"]);let{filled:l=!1}=e,{href:c}=e;const t=["filled","href"];return Object.keys(e).forEach(s=>{!~t.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<CardButton> was created with unknown prop '${s}'`)}),u.$$set=s=>{"filled"in s&&o(0,l=s.filled),"href"in s&&o(1,c=s.href),"$$scope"in s&&o(2,n=s.$$scope)},u.$capture_state=()=>({filled:l,href:c}),u.$inject_state=s=>{"filled"in s&&o(0,l=s.filled),"href"in s&&o(1,c=s.href)},e&&"$$inject"in e&&u.$inject_state(e.$$inject),[l,c,n,i]}class j extends R{constructor(e){super(e);E(this,e,Se,F,P,{filled:0,href:1}),_("SvelteRegisterComponent",{component:this,tagName:"CardButton",options:e,id:F.name});const{ctx:o}=this.$$,i=e.props||{};o[1]===void 0&&!("href"in i)&&console.warn("<CardButton> was created without expected prop 'href'")}get filled(){throw new Error("<CardButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set filled(e){throw new Error("<CardButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get href(){throw new Error("<CardButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set href(e){throw new Error("<CardButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Re="src/lib/GtaLogin.svelte";function T(u){let e,o;const i=u[2].default,n=L(i,u,u[1],null),l={c:function(){e=$("div"),n&&n.c(),b(e,"class","s-s1F-rVGJBWbY"),g(e,Re,4,0,39)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,s){d(t,e,s),n&&n.m(e,null),o=!0},p:function(t,[s]){n&&n.p&&(!o||s&2)&&O(n,i,t,t[1],o?D(i,t[1],s,null):I(t[1]),null)},i:function(t){o||(w(n,t),o=!0)},o:function(t){h(n,t),o=!1},d:function(t){t&&m(e),n&&n.d(t)}};return _("SvelteRegisterBlock",{block:l,id:T.name,type:"component",source:"",ctx:u}),l}function Ee(u,e,o){let{$$slots:i={},$$scope:n}=e;G("GtaLogin",i,["default"]);let{href:l}=e;const c=["href"];return Object.keys(e).forEach(t=>{!~c.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<GtaLogin> was created with unknown prop '${t}'`)}),u.$$set=t=>{"href"in t&&o(0,l=t.href),"$$scope"in t&&o(1,n=t.$$scope)},u.$capture_state=()=>({href:l}),u.$inject_state=t=>{"href"in t&&o(0,l=t.href)},e&&"$$inject"in e&&u.$inject_state(e.$$inject),[l,n,i]}class re extends R{constructor(e){super(e);E(this,e,Ee,T,P,{href:0}),_("SvelteRegisterComponent",{component:this,tagName:"GtaLogin",options:e,id:T.name});const{ctx:o}=this.$$,i=e.props||{};o[0]===void 0&&!("href"in i)&&console.warn("<GtaLogin> was created without expected prop 'href'")}get href(){throw new Error("<GtaLogin>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set href(e){throw new Error("<GtaLogin>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const y="src/pages/index.md";function ie(u){let e,o,i,n;const l={c:function(){e=$("p"),e.textContent="Cisco Global Threat Alerts",o=v(),i=$("p"),n=$("a"),n.textContent="Login",g(e,y,16,0,612),b(n,"href","https://cognitive.cisco.com/CWSP/ctaLogin"),b(n,"rel","nofollow"),g(n,y,17,3,649),g(i,y,17,0,646)},m:function(t,s){d(t,e,s),d(t,o,s),d(t,i,s),Q(i,n)},d:function(t){t&&m(e),t&&m(o),t&&m(i)}};return _("SvelteRegisterBlock",{block:l,id:ie.name,type:"slot",source:"(16:0) <GtaLogin>",ctx:u}),l}function ce(u){let e;const o={c:function(){e=J("Prague Team")},m:function(n,l){d(n,e,l)},d:function(n){n&&m(e)}};return _("SvelteRegisterBlock",{block:o,id:ce.name,type:"slot",source:'(24:4) <CardButton filled={true} href=\\"#/about\\">',ctx:u}),o}function le(u){let e,o,i,n,l,c,t;c=new j({props:{filled:!0,href:"#/about",$$slots:{default:[ce]},$$scope:{ctx:u}},$$inline:!0});const s={c:function(){e=$("h3"),e.textContent="About us",o=v(),i=$("p"),i.textContent="Cisco Cognitive Intelligence is part of Cisco Secure, the largest enterprise cybersecurity company in the world. We are developing complex systems for cyber threats detection using Machine learning and Artificial intelligence.",n=v(),l=$("div"),C(c.$$.fragment),g(e,y,20,0,778),g(i,y,21,0,796),g(l,y,22,0,1030)},m:function(f,a){d(f,e,a),d(f,o,a),d(f,i,a),d(f,n,a),d(f,l,a),k(c,l,null),t=!0},p:function(f,a){const p={};a&2&&(p.$$scope={dirty:a,ctx:f}),c.$set(p)},i:function(f){t||(w(c.$$.fragment,f),t=!0)},o:function(f){h(c.$$.fragment,f),t=!1},d:function(f){f&&m(e),f&&m(o),f&&m(i),f&&m(n),f&&m(l),B(c)}};return _("SvelteRegisterBlock",{block:s,id:le.name,type:"slot",source:'(20:0) <Banner img=\\"img/banner-about.jpg\\">',ctx:u}),s}function ue(u){let e;const o={c:function(){e=J("Open positions")},m:function(n,l){d(n,e,l)},d:function(n){n&&m(e)}};return _("SvelteRegisterBlock",{block:o,id:ue.name,type:"slot",source:"(32:0) <CardButton>",ctx:u}),o}function fe(u){let e,o,i,n,l,c;l=new j({props:{$$slots:{default:[ue]},$$scope:{ctx:u}},$$inline:!0});const t={c:function(){e=$("h3"),e.textContent="Put your talent to work",o=v(),i=$("p"),i.textContent=`Cisconians work hard \u2014 and we reward hard.
We go beyond the usual benefits with surprising extras we think you\u2019ll love.`,n=v(),C(l.$$.fragment),g(e,y,28,0,1173),g(i,y,29,0,1206)},m:function(r,f){d(r,e,f),d(r,o,f),d(r,i,f),d(r,n,f),k(l,r,f),c=!0},p:function(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),l.$set(a)},i:function(r){c||(w(l.$$.fragment,r),c=!0)},o:function(r){h(l.$$.fragment,r),c=!1},d:function(r){r&&m(e),r&&m(o),r&&m(i),r&&m(n),B(l,r)}};return _("SvelteRegisterBlock",{block:t,id:fe.name,type:"slot",source:'(28:0) <Card img=\\"img/card-2.jpg\\" href=\\"#/jobs\\">',ctx:u}),t}function ae(u){let e;const o={c:function(){e=J("View offers")},m:function(n,l){d(n,e,l)},d:function(n){n&&m(e)}};return _("SvelteRegisterBlock",{block:o,id:ae.name,type:"slot",source:"(38:0) <CardButton>",ctx:u}),o}function de(u){let e,o,i,n,l,c;l=new j({props:{$$slots:{default:[ae]},$$scope:{ctx:u}},$$inline:!0});const t={c:function(){e=$("h3"),e.textContent="Students",o=v(),i=$("p"),i.textContent=`Put your skills to the test to create technology and experiences
that\u2019s shaping how the future works.`,n=v(),C(l.$$.fragment),g(e,y,34,0,1427),g(i,y,35,0,1445)},m:function(r,f){d(r,e,f),d(r,o,f),d(r,i,f),d(r,n,f),k(l,r,f),c=!0},p:function(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),l.$set(a)},i:function(r){c||(w(l.$$.fragment,r),c=!0)},o:function(r){h(l.$$.fragment,r),c=!1},d:function(r){r&&m(e),r&&m(o),r&&m(i),r&&m(n),B(l,r)}};return _("SvelteRegisterBlock",{block:t,id:de.name,type:"slot",source:'(34:0) <Card img=\\"img/card-3.jpg\\" href=\\"#/students\\">',ctx:u}),t}function me(u){let e;const o={c:function(){e=J("Selected papers")},m:function(n,l){d(n,e,l)},d:function(n){n&&m(e)}};return _("SvelteRegisterBlock",{block:o,id:me.name,type:"slot",source:"(43:0) <CardButton>",ctx:u}),o}function pe(u){let e,o,i,n,l,c;l=new j({props:{$$slots:{default:[me]},$$scope:{ctx:u}},$$inline:!0});const t={c:function(){e=$("h3"),e.textContent="Selected publications",o=v(),i=$("p"),i.textContent="If you are interested to deep dive to what we are doing, have a look at some of the papers.",n=v(),C(l.$$.fragment),g(e,y,40,0,1649),g(i,y,41,0,1680)},m:function(r,f){d(r,e,f),d(r,o,f),d(r,i,f),d(r,n,f),k(l,r,f),c=!0},p:function(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),l.$set(a)},i:function(r){c||(w(l.$$.fragment,r),c=!0)},o:function(r){h(l.$$.fragment,r),c=!1},d:function(r){r&&m(e),r&&m(o),r&&m(i),r&&m(n),B(l,r)}};return _("SvelteRegisterBlock",{block:t,id:pe.name,type:"slot",source:'(40:0) <Card img=\\"img/card-5.jpg\\" href=\\"#/publications\\">',ctx:u}),t}function _e(u){let e;const o={c:function(){e=J("Get in touch")},m:function(n,l){d(n,e,l)},d:function(n){n&&m(e)}};return _("SvelteRegisterBlock",{block:o,id:_e.name,type:"slot",source:"(50:0) <CardButton>",ctx:u}),o}function $e(u){let e,o,i,n,l,c;l=new j({props:{$$slots:{default:[_e]},$$scope:{ctx:u}},$$inline:!0});const t={c:function(){e=$("h3"),e.textContent="Contact us",o=v(),i=$("p"),i.textContent=`In the center of one of Europe\u2019s most beautiful cities, with a splendid view
of the ancient Prague castle, just steps away from the Vltava River \u2013 sits our
Cisco Office in Prague.`,n=v(),C(l.$$.fragment),g(e,y,45,0,1873),g(i,y,46,0,1893)},m:function(r,f){d(r,e,f),d(r,o,f),d(r,i,f),d(r,n,f),k(l,r,f),c=!0},p:function(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),l.$set(a)},i:function(r){c||(w(l.$$.fragment,r),c=!0)},o:function(r){h(l.$$.fragment,r),c=!1},d:function(r){r&&m(e),r&&m(o),r&&m(i),r&&m(n),B(l,r)}};return _("SvelteRegisterBlock",{block:t,id:$e.name,type:"slot",source:'(45:0) <Card img=\\"img/card-4.jpg\\" href=\\"#/contact\\">',ctx:u}),t}function ge(u){let e,o,i,n,l,c,t,s;e=new N({props:{img:"img/card-2.jpg",href:"#/jobs",$$slots:{default:[fe]},$$scope:{ctx:u}},$$inline:!0}),i=new N({props:{img:"img/card-3.jpg",href:"#/students",$$slots:{default:[de]},$$scope:{ctx:u}},$$inline:!0}),l=new N({props:{img:"img/card-5.jpg",href:"#/publications",$$slots:{default:[pe]},$$scope:{ctx:u}},$$inline:!0}),t=new N({props:{img:"img/card-4.jpg",href:"#/contact",$$slots:{default:[$e]},$$scope:{ctx:u}},$$inline:!0});const r={c:function(){C(e.$$.fragment),o=v(),C(i.$$.fragment),n=v(),C(l.$$.fragment),c=v(),C(t.$$.fragment)},m:function(a,p){k(e,a,p),d(a,o,p),k(i,a,p),d(a,n,p),k(l,a,p),d(a,c,p),k(t,a,p),s=!0},p:function(a,p){const S={};p&2&&(S.$$scope={dirty:p,ctx:a}),e.$set(S);const X={};p&2&&(X.$$scope={dirty:p,ctx:a}),i.$set(X);const K={};p&2&&(K.$$scope={dirty:p,ctx:a}),l.$set(K);const H={};p&2&&(H.$$scope={dirty:p,ctx:a}),t.$set(H)},i:function(a){s||(w(e.$$.fragment,a),w(i.$$.fragment,a),w(l.$$.fragment,a),w(t.$$.fragment,a),s=!0)},o:function(a){h(e.$$.fragment,a),h(i.$$.fragment,a),h(l.$$.fragment,a),h(t.$$.fragment,a),s=!1},d:function(a){B(e,a),a&&m(o),B(i,a),a&&m(n),B(l,a),a&&m(c),B(t,a)}};return _("SvelteRegisterBlock",{block:r,id:ge.name,type:"slot",source:"(27:0) <Cards>",ctx:u}),r}function we(u){let e,o,i,n,l,c;e=new re({props:{$$slots:{default:[ie]},$$scope:{ctx:u}},$$inline:!0}),i=new ee({props:{img:"img/banner-about.jpg",$$slots:{default:[le]},$$scope:{ctx:u}},$$inline:!0}),l=new te({props:{$$slots:{default:[ge]},$$scope:{ctx:u}},$$inline:!0});const t={c:function(){C(e.$$.fragment),o=v(),C(i.$$.fragment),n=v(),C(l.$$.fragment)},m:function(r,f){k(e,r,f),d(r,o,f),k(i,r,f),d(r,n,f),k(l,r,f),c=!0},p:function(r,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:r}),e.$set(a);const p={};f&2&&(p.$$scope={dirty:f,ctx:r}),i.$set(p);const S={};f&2&&(S.$$scope={dirty:f,ctx:r}),l.$set(S)},i:function(r){c||(w(e.$$.fragment,r),w(i.$$.fragment,r),w(l.$$.fragment,r),c=!0)},o:function(r){h(e.$$.fragment,r),h(i.$$.fragment,r),h(l.$$.fragment,r),c=!1},d:function(r){B(e,r),r&&m(o),B(i,r),r&&m(n),B(l,r)}};return _("SvelteRegisterBlock",{block:t,id:we.name,type:"slot",source:"(14:0) <Layout_MDSVEX_DEFAULT {...$$props} {...metadata}>",ctx:u}),t}function W(u){let e,o;const i=[u[0],M];let n={$$slots:{default:[we]},$$scope:{ctx:u}};for(let c=0;c<i.length;c+=1)n=U(n,i[c]);e=new x({props:n,$$inline:!0});const l={c:function(){C(e.$$.fragment)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,s){k(e,t,s),o=!0},p:function(t,[s]){const r=s&1?ye(i,[s&1&&z(t[0]),s&0&&z(M)]):{};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){o||(w(e.$$.fragment,t),o=!0)},o:function(t){h(e.$$.fragment,t),o=!1},d:function(t){B(e,t)}};return _("SvelteRegisterBlock",{block:l,id:W.name,type:"component",source:"",ctx:u}),l}const M={layout:"page"},{layout:Pe}=M;function Le(u,e,o){let{$$slots:i={},$$scope:n}=e;return G("Pages",i,[]),u.$$set=l=>{o(0,e=U(U({},e),Y(l)))},u.$capture_state=()=>({metadata:M,layout:Pe,Layout_MDSVEX_DEFAULT:x,Cards:te,Card:N,CardButton:j,Section:Ce,Banner:ee,GtaLogin:re}),u.$inject_state=l=>{o(0,e=U(U({},e),l))},e&&"$$inject"in e&&u.$inject_state(e.$$inject),e=Y(e),[e]}class De extends R{constructor(e){super(e);E(this,e,Le,W,P,{}),_("SvelteRegisterComponent",{component:this,tagName:"Pages",options:e,id:W.name})}}export{De as default,M as metadata};

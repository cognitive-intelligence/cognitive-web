import{S as m,i as _,s as g,d as f,c as p,v as h,e as v,f as u,h as w,j as B,u as b,m as y,o as j,t as k,p as E,q as S}from"./vendor.29f5cc4f.js";const R="src/lib/Banner.svelte";function d(a){let e,i,o;const r=a[2].default,n=p(r,a,a[1],null),l={c:function(){e=v("div"),n&&n.c(),u(e,"style",i=`background-image: url("${a[0]}")`),u(e,"class","s-dQZucNedGvzR"),w(e,R,4,0,38)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,c){B(s,e,c),n&&n.m(e,null),o=!0},p:function(s,[c]){n&&n.p&&(!o||c&2)&&b(n,r,s,s[1],o?j(r,s[1],c,null):y(s[1]),null),(!o||c&1&&i!==(i=`background-image: url("${s[0]}")`))&&u(e,"style",i)},i:function(s){o||(k(n,s),o=!0)},o:function(s){E(n,s),o=!1},d:function(s){s&&S(e),n&&n.d(s)}};return f("SvelteRegisterBlock",{block:l,id:d.name,type:"component",source:"",ctx:a}),l}function q(a,e,i){let{$$slots:o={},$$scope:r}=e;h("Banner",o,["default"]);let{img:n}=e;const l=["img"];return Object.keys(e).forEach(t=>{!~l.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Banner> was created with unknown prop '${t}'`)}),a.$$set=t=>{"img"in t&&i(0,n=t.img),"$$scope"in t&&i(1,r=t.$$scope)},a.$capture_state=()=>({img:n}),a.$inject_state=t=>{"img"in t&&i(0,n=t.img)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[n,r,o]}class N extends m{constructor(e){super(e);_(this,e,q,d,g,{img:0}),f("SvelteRegisterComponent",{component:this,tagName:"Banner",options:e,id:d.name});const{ctx:i}=this.$$,o=e.props||{};i[0]===void 0&&!("img"in o)&&console.warn("<Banner> was created without expected prop 'img'")}get img(){throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set img(e){throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{N as B};

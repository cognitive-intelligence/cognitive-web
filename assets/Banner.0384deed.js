import{S as m,i as g,s as p,d as f,c as _,v as h,e as v,a as u,b as w,f as b,u as y,g as B,h as k,t as j,j as z,k as x}from"./index.b2170959.js";const R="src/lib/Banner.svelte";function d(i){let e,a,s;const r=i[2].default,n=_(r,i,i[1],null),l={c:function(){e=v("div"),n&&n.c(),u(e,"style",a=`background-image: url("${i[0]}")`),u(e,"class","s-dQZucNedGvzR"),w(e,R,4,0,38)},l:function(o){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(o,c){b(o,e,c),n&&n.m(e,null),s=!0},p:function(o,[c]){n&&n.p&&(!s||c&2)&&y(n,r,o,o[1],s?k(r,o[1],c,null):B(o[1]),null),(!s||c&1&&a!==(a=`background-image: url("${o[0]}")`))&&u(e,"style",a)},i:function(o){s||(j(n,o),s=!0)},o:function(o){z(n,o),s=!1},d:function(o){o&&x(e),n&&n.d(o)}};return f("SvelteRegisterBlock",{block:l,id:d.name,type:"component",source:"",ctx:i}),l}function N(i,e,a){let{$$slots:s={},$$scope:r}=e;h("Banner",s,["default"]);let{img:n}=e;const l=["img"];return Object.keys(e).forEach(t=>{!~l.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Banner> was created with unknown prop '${t}'`)}),i.$$set=t=>{"img"in t&&a(0,n=t.img),"$$scope"in t&&a(1,r=t.$$scope)},i.$capture_state=()=>({img:n}),i.$inject_state=t=>{"img"in t&&a(0,n=t.img)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[n,r,s]}class G extends m{constructor(e){super(e),g(this,e,N,d,p,{img:0}),f("SvelteRegisterComponent",{component:this,tagName:"Banner",options:e,id:d.name});const{ctx:a}=this.$$,s=e.props||{};a[0]===void 0&&!("img"in s)&&console.warn("<Banner> was created without expected prop 'img'")}get img(){throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set img(e){throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{G as B};

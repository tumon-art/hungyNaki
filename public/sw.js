if(!self.define){let e,c={};const a=(a,i)=>(a=new URL(a+".js",i).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};c[n]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/351-cb5e756785285435.js",revision:"cb5e756785285435"},{url:"/_next/static/chunks/659-ea12a1b49145a313.js",revision:"ea12a1b49145a313"},{url:"/_next/static/chunks/framework-ba86d075c3365de8.js",revision:"ba86d075c3365de8"},{url:"/_next/static/chunks/main-619c021dd0fad8d6.js",revision:"619c021dd0fad8d6"},{url:"/_next/static/chunks/pages/_app-896b1342482b7206.js",revision:"896b1342482b7206"},{url:"/_next/static/chunks/pages/_error-66eb88f2a856484a.js",revision:"66eb88f2a856484a"},{url:"/_next/static/chunks/pages/foods-91102dba29ca921d.js",revision:"91102dba29ca921d"},{url:"/_next/static/chunks/pages/foods/%5Bid%5D-174abf21ab273f9b.js",revision:"174abf21ab273f9b"},{url:"/_next/static/chunks/pages/index-537df604e55f3bd7.js",revision:"537df604e55f3bd7"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3433a2a2d0cf6fb6.js",revision:"3433a2a2d0cf6fb6"},{url:"/_next/static/css/49e3af4c637448a6.css",revision:"49e3af4c637448a6"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/jjsysYbMe5HWW_tZ6iiyT/_buildManifest.js",revision:"56c4059144624dc8233dc003cf59ead9"},{url:"/_next/static/jjsysYbMe5HWW_tZ6iiyT/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/bread(1).5a56394c.png",revision:"26a4a2136a2d62229da878921cb353e3"},{url:"/_next/static/media/bread(2).115d4596.png",revision:"59389592bc3011abf3748bf797d67369"},{url:"/_next/static/media/bread(3).350ba91d.png",revision:"729f134cdaf04758c2881bb7d984b8bf"},{url:"/_next/static/media/product_01.1.c1a5cf78.webp",revision:"615e632b506fc95c0cb5c601925b57c8"},{url:"/_next/static/media/product_01.3.90b1662b.webp",revision:"ab9d81c75b5d3c612254024db7088c3c"},{url:"/_next/static/media/product_01.55ae7989.webp",revision:"18ce312650d5dc7ab0d129955d2302d7"},{url:"/_next/static/media/product_04.4b7e98d0.webp",revision:"49df7ba3c325bcc1bff7753679047de6"},{url:"/_next/static/media/product_08.1cbee774.webp",revision:"a07fafcb3b9cfcd8523396ec6349ffbc"},{url:"/_next/static/media/product_09.14a28aa4.webp",revision:"a9231508b9c3021191478f8c8c5cca96"},{url:"/_next/static/media/product_2.1.9ba85e6a.webp",revision:"72c9e3485b877402ed0c53d373cd153c"},{url:"/_next/static/media/product_2.2.e8c95510.webp",revision:"91063ef48f0299f94197364667f9527c"},{url:"/_next/static/media/product_2.3.6016af55.webp",revision:"3974b7e221703119987a6a7c640657b4"},{url:"/_next/static/media/product_3.1.b449bdcd.webp",revision:"c070cb37cf6f735386311ce9435ff196"},{url:"/_next/static/media/product_3.2.64cf5cd2.webp",revision:"5ceabad4569fc0a6125dab73ba477c21"},{url:"/_next/static/media/product_3.3.2ad61d4e.webp",revision:"71a2c44db78d8fb3b63da895c6482602"},{url:"/_next/static/media/product_4.1.820053c5.webp",revision:"4a079294b1e91711f477b1f256cb5301"},{url:"/_next/static/media/product_4.2.8aee6dfb.webp",revision:"3cce12fb0539e0d97254c6e8c2ef14b2"},{url:"/_next/static/media/product_4.3.4cf81e7a.webp",revision:"34aa3f4fdd94d45d6bb59dc5d7f1b266"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/allfoods.webp",revision:"81ba4eb6d22182a3b5418a59f023c294"},{url:"/ava-1.webp",revision:"8d7bc2a388f8bf6b03590c246a354ca7"},{url:"/ava-2.webp",revision:"c9b4d90646cdd1f354c6d0e5515f26c9"},{url:"/ava-3.webp",revision:"c45f5cd619d915d029826853c84840c7"},{url:"/ava-4.webp",revision:"7b23cffd2eaabaca3bff235035e46456"},{url:"/bread(1).png",revision:"26a4a2136a2d62229da878921cb353e3"},{url:"/bread(2).png",revision:"59389592bc3011abf3748bf797d67369"},{url:"/bread(3).png",revision:"729f134cdaf04758c2881bb7d984b8bf"},{url:"/bread.png",revision:"1b562dd3fac03f1ad2dc5798364ae812"},{url:"/category-01.png",revision:"44e7b04b3dd7e92833bc1aab6d8fe6bf"},{url:"/category-02.png",revision:"18271cb0ae03c48fd15c198b05824bf1"},{url:"/category-03.png",revision:"cc2799b5a61484c47925760ffba1efbe"},{url:"/category-04.png",revision:"80be968e3398d7ab10cc419c6de28b05"},{url:"/favicon.ico",revision:"80be968e3398d7ab10cc419c6de28b05"},{url:"/fried-potatoes.png",revision:"58a0b47df684b75e04d8d01b0ca4758c"},{url:"/hamburger.png",revision:"9f3b9b9f3dabe2d27bd5fce260457a6d"},{url:"/hero.webp",revision:"b08a55e9ff6cccc66f6b32ea56ecef97"},{url:"/icon-192x192.png",revision:"01ac8334a03d5c0d213d743743117f14"},{url:"/icon-256x256.png",revision:"16dd5af8b360cf82cb2db29d670f7289"},{url:"/icon-384x384.png",revision:"f0c52e2ab61a35e35575b2ddded47580"},{url:"/icon-512x512.png",revision:"b07162e1efc6d07d62deb0b235a97047"},{url:"/index.js",revision:"0c8a538aac90655ce994004a7f74c115"},{url:"/location.webp",revision:"693302f4d2b443dd12052f07aecb4b07"},{url:"/manifest.json",revision:"17dccd6afd05d027c4cc9da4ef0308b4"},{url:"/network.webp",revision:"fcbefbbc783b9442e786fcfd83fa1aa9"},{url:"/pizza.png",revision:"c81e5fdbbc7fb81bec7e7a05272a997a"},{url:"/product_01.1.webp",revision:"615e632b506fc95c0cb5c601925b57c8"},{url:"/product_01.3.webp",revision:"ab9d81c75b5d3c612254024db7088c3c"},{url:"/product_01.webp",revision:"18ce312650d5dc7ab0d129955d2302d7"},{url:"/product_04.webp",revision:"49df7ba3c325bcc1bff7753679047de6"},{url:"/product_08.webp",revision:"a07fafcb3b9cfcd8523396ec6349ffbc"},{url:"/product_09.webp",revision:"a9231508b9c3021191478f8c8c5cca96"},{url:"/product_2.1.webp",revision:"72c9e3485b877402ed0c53d373cd153c"},{url:"/product_2.2.webp",revision:"91063ef48f0299f94197364667f9527c"},{url:"/product_2.3.webp",revision:"3974b7e221703119987a6a7c640657b4"},{url:"/product_3.1.webp",revision:"c070cb37cf6f735386311ce9435ff196"},{url:"/product_3.2.webp",revision:"5ceabad4569fc0a6125dab73ba477c21"},{url:"/product_3.3.webp",revision:"71a2c44db78d8fb3b63da895c6482602"},{url:"/product_4.1.webp",revision:"4a079294b1e91711f477b1f256cb5301"},{url:"/product_4.2.webp",revision:"3cce12fb0539e0d97254c6e8c2ef14b2"},{url:"/product_4.3.webp",revision:"34aa3f4fdd94d45d6bb59dc5d7f1b266"},{url:"/res-logo.png",revision:"2b82a8a1f41923e2d0741a2fefbb0f29"},{url:"/service-01.png",revision:"5f82318daa80c75436f7af2a33778bb2"},{url:"/service-02.png",revision:"a09774d921939ccb086803dad2c3c495"},{url:"/service-03.png",revision:"1db1db0625e3b4058bcef4e4732057d7"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:a,state:i})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-25084f87.js",revision:null},{url:"assets/ComputerView-c4940a38.js",revision:null},{url:"assets/ComputerView-e5398670.css",revision:null},{url:"assets/index-a2a1f0ad.js",revision:null},{url:"assets/index-d0696dc3.css",revision:null},{url:"index.html",revision:"da6f054127638afa97da6d1bc14b90fd"},{url:"registerSW.js",revision:"c9296d3b9ff4d32a43b2203810970a7d"},{url:"manifest.webmanifest",revision:"536368374cefe2ffcec62a7bd2ae3db8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8102:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/componenets/Allblogs",function(){return a(7821)}])},7821:function(e,t,a){"use strict";a.r(t);var l=a(5893),s=a(7294);let n=e=>{let{blogger:t,blog:a,onLearnMore:s}=e;return(0,l.jsx)("div",{className:"p-4 md:w-1/3",children:(0,l.jsxs)("div",{className:"h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 bg-gray-400 flex flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"mb-2 text-lg title-font font-semibold text-black",children:a.title}),(0,l.jsx)("p",{className:"leading-relaxed text-base mb-3",children:a.content}),(0,l.jsxs)("p",{className:"leading-relaxed mb-3 text-sm font-medium",children:["BY:",t.email]}),(0,l.jsx)("p",{className:"text-xs text-gray-700",children:new Date(a.date).toLocaleDateString()})]}),(0,l.jsx)("button",{className:"mt-4 bg-blue-500 text-white py-1 px-2 rounded focus:outline-none hover:bg-blue-600",onClick:()=>s(t),children:"Learn More"})]})},a.date)};t.default=()=>{let[e,t]=(0,s.useState)([]),[a,o]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/api/bloggerdata");if(!e.ok)throw Error("Network response was not ok");let a=await e.json();t(a.data)}catch(e){console.log("There was a problem with the fetch operation:",e.message)}};e()},[]);let r=e=>(e.blogs||[]).sort((e,t)=>new Date(t.date)-new Date(e.date));return(0,l.jsx)("section",{className:"text-gray-600 body-font bg-gray-100",children:(0,l.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,l.jsx)("div",{className:"flex flex-wrap -m-4",children:a?r(a).map(e=>(0,l.jsx)(n,{blogger:a,blog:e},e.date)):e.flatMap(e=>r(e).map(t=>(0,l.jsx)(n,{blogger:e,blog:t,onLearnMore:o},t.date)))}),a&&(0,l.jsx)("div",{className:"text-center my-4",children:(0,l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>o(null),children:"Go back to all bloggers"})})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8102)}),_N_E=e.O()}]);
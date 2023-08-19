(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registerLogin",function(){return a(8629)}])},5073:function(e,t,a){"use strict";a.r(t);var r=a(5893),s=a(7294),n=a(1163);t.default=()=>{let[e,t]=(0,s.useState)(!1),a=(0,s.useRef)(null),i=(0,n.useRouter)(),[o,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{l("true"===sessionStorage.getItem("isLoggedIn"))},[]),(0,s.useEffect)(()=>{let e=e=>{a.current&&!a.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"min-h-full",children:(0,r.jsx)("nav",{className:"bg-gray-800",children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)("img",{className:"h-8 w-8",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[(0,r.jsx)("a",{href:"#",className:"bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium","aria-current":"page",children:"Blogger web"}),(0,r.jsx)("a",{href:"/",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",children:"Blogs"}),(0,r.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",children:"contact us"})]})})]}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)("div",{className:"ml-4 flex items-center md:ml-6",children:(0,r.jsx)("div",{className:"relative ml-3",ref:a,children:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{type:"button",className:"relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",onClick:()=>{t(!e)},children:[(0,r.jsx)("span",{className:"absolute -inset-1.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,r.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]}),e&&(0,r.jsx)("div",{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabIndex:"-1",children:(0,r.jsx)("button",{onClick:()=>{sessionStorage.setItem("isLoggedIn","false"),i.push("/login")},className:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabIndex:"-1",id:"user-menu-item-2",children:"Sign out"})})]}):(0,r.jsx)("a",{href:"/login",className:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",children:"login"})})})}),(0,r.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,r.jsxs)("button",{type:"button",className:"relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800","aria-controls":"mobile-menu","aria-expanded":"false",children:[(0,r.jsx)("span",{className:"absolute -inset-0.5"}),(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,r.jsx)("svg",{className:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,r.jsx)("svg",{className:"hidden h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})})]})})})})})}},8629:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(5893),s=a(7294),n=a(5073);function i(){let[e,t]=(0,s.useState)({email:"",password:""}),[a,i]=(0,s.useState)(""),o=e=>{let{name:a,value:r}=e.target;t(e=>({...e,[a]:r}))},l=async a=>{a.preventDefault();try{let a=await fetch("/api/checklogin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await a.json();200===a.status?(i(r.message),t({email:"",password:""})):i(r.message)}catch(e){console.error("There was an error:",e),i("An error occurred.")}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{}),(0,r.jsxs)("section",{className:"h-screen",children:[(0,r.jsx)("div",{className:"h-full",children:(0,r.jsxs)("div",{className:"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between",children:[(0,r.jsx)("div",{className:"shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12",children:(0,r.jsx)("img",{src:"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",className:"w-full",alt:"Sample image"})}),(0,r.jsx)("div",{className:"mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12",children:(0,r.jsxs)("form",{onSubmit:l,children:[(0,r.jsx)("div",{className:"flex flex-row items-center justify-center lg:justify-start",children:(0,r.jsx)("p",{className:"mb-0 mr-4 text-lg",children:"Sign in with"})}),(0,r.jsx)("div",{className:"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300",children:(0,r.jsx)("p",{className:"mx-4 mb-0 text-center font-semibold dark:text-black",children:"Or"})}),(0,r.jsxs)("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:[(0,r.jsx)("input",{type:"text",name:"email",className:"peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 placeholder-opacity-50 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",id:"exampleFormControlInput2",value:e.email,onChange:o,placeholder:"Email address"}),(0,r.jsx)("label",{htmlFor:"exampleFormControlInput2",className:"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-800 transition-all duration-200 ease-out ".concat(e.email?"-translate-y-[1.15rem] scale-[0.8]":""," peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary"),children:"Email address"})]}),(0,r.jsxs)("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:[(0,r.jsx)("input",{name:"password",type:"password",value:e.password,onChange:o,className:"peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-400 dark:placeholder:text-gray-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",id:"exampleFormControlInput22",placeholder:"Password"}),(0,r.jsx)("label",{htmlFor:"exampleFormControlInput22",className:"absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out ".concat(e.password?"-translate-y-[1.15rem] scale-[0.8]":""," peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary"),children:"Password"})]}),(0,r.jsxs)("div",{className:"text-center lg:text-left",children:[(0,r.jsx)("button",{type:"submit",className:"inline-block rounded bg-facebook px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Register"}),(0,r.jsxs)("p",{className:"mb-0 mt-2 pt-1 text-sm font-semibold",children:["Have an account?",(0,r.jsx)("a",{href:"/login",className:"text-red-600 transition duration-150 ease-in-out hover:text-red-900 focus:text-red-800 active:text-red-900",children:"Login"})]})]})]})})]})}),(0,r.jsx)("div",{className:"text-center",children:a})]})]})}},1163:function(e,t,a){e.exports=a(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=0)}),_N_E=e.O()}]);
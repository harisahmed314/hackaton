import React, { useState } from "react";


import { useRouter } from "next/router";
import Header from "./componenets/Header";




export default function login() {

    // 1. Set the State for Email and Password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const router = useRouter();



    const handleLogin = (e) => {
        e.preventDefault();

        fetch('/api/userlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Login successful') {
                    console.log("Login successful");
                    setLoginMessage("Login successful");
                    
                        // ...
                    sessionStorage.setItem("isLoggedIn", "true");
                        

                    // Redirect to dashboard
                    router.push(`/${encodeURIComponent(email)}/`);

                } else {
                    console.log("Login failed");
                    setLoginMessage("Login failed. Please check your credentials.");
                }
            })
            .catch(error => {
                console.error("There was an error logging in:", error);
                setLoginMessage("An error occurred. Please try again later.");
            });
    };



    return (
        <>
            <Header />
            <section className="h-screen">
                <div className="h-full">

                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image" />
                        </div>


                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>

                                <div
                                    className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg">Sign in</p>



                                </div>


                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-black">
                                        Or
                                    </p>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 placeholder-opacity-50 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2"
                                        onChange={(e) => setEmail(e.target.value)} // Set email state on change
                                        value={email}
                                        placeholder="Email address" />
                                    <label
                                        htmlFor="exampleFormControlInput2"
                                        className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out ${email ? "-translate-y-[1.15rem] scale-[0.8]" : ""} peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary`}
                                    >Email address
                                    </label>


                                </div>



                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)} // Set password state on change
                                        value={password}
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput22"
                                        placeholder="Password" />
                                    <label
                                        htmlFor="exampleFormControlInput22"
                                        className={`absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out ${password ? "-translate-y-[1.15rem] scale-[0.8]" : ""} peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary`}
                                    >Password
                                    </label>


                                </div>

                                

                                   


                                <div className="text-center lg:text-left">
                                    <button
                                        onClick={handleLogin}
                                        type="button"
                                        className="inline-block rounded bg-facebook px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Login
                                    </button>


                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Don't have an account?
                                        <a
                                            href="/registerLogin"
                                            className="text-red-600 transition duration-150 ease-in-out hover:text-red-900 focus:text-red-800 active:text-red-900"
                                        >Register</a
                                        >
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    {loginMessage}
                </div>
            </section>


        </>
    )


}
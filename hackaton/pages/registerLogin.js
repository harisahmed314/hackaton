import React, { useState } from 'react';
import Header from "@/pages/componenets/Header";

async function postCredentials(email, password) {
    const apiUrl = 'https://example.com/api/login'; // replace with your API endpoint

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`API responded with HTTP ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error("There was an error posting the credentials:", error);
        throw error;
    }
}

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await postCredentials(email, password);
            console.log(result);
            // Handle the API response as needed
        } catch (error) {
            // Handle errors (e.g., show a notification or update UI)
        }
    }
  return( 
  <>

    <Header />

    <div className="section bg-gray-800">
    <section class="h-screen bg-gray-800">
      <div class="h-full ">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div
            class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image" />
          </div>

          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form onSubmit={handleLogin}>
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="mb-0 mr-4 text-lg">Sign up</p>
              </div>

              

                
                

              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                  class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address" />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Email address
                </label>
              </div>

              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="Password" />
                <label
                  for="exampleFormControlInput22"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Password
                </label>
              </div>


              <div class="text-center lg:text-left">
                <button
                  type="submit"
                  class="inline-block bg-blue-700 rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Login
                </button>

                <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  <a
                    href="#!"
                    class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>

    


  </>

  )
}

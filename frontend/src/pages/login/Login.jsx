import React from 'react'

function Login() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col border-0 font-mono ">
        <h1
          className="absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter">
        </h1>
        <br></br>
        <fieldset className="fieldset w-3xl bg-base-300 border-0 p-4 rounded-box">
          <h1 className="text-2xl font-bold">Welcome back,</h1>
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg focus:-y text-base-200" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <button className="btn btn-link text-primary">Sign Up</button>
        </fieldset>
      </div >
    </>
  )
}

export default Login
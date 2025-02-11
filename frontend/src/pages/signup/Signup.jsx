import React from 'react'

function Signup() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col font-mono">
        <h1 className="absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter"></h1>
        <fieldset className="fieldset w-2xl bg-base-300 border-0 p-4 rounded-box text-center">
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <label className="fieldset-label">Full Name</label>
          <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Full Name" />
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email" />
          <label className="fieldset-label">Username</label>
          <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Username" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Password" />
          <label className="fieldset-label">Confirm Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Confirm Password" />
          <button className="btn btn-neutral mt-4">Sign Up</button>
          <button className="btn btn-link text-primary">Login</button>
        </fieldset>
      </div>
    </>
  )
}

export default Signup
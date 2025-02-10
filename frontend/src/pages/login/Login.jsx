import React from 'react'

function Login() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col border-0 ">
        <h1 className="text-9xl font-bold">Login</h1>
        <br></br>
        <fieldset className="fieldset w-xs bg-base-100 border-0 p-4 rounded-box drop-shadow-lg hover:drop-shadow-2xl">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input bg-base-300 border-0 hover:drop-shadow-lg" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input bg-base-300 border-0 hover:drop-shadow-lg" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <button className="btn btn-link text-primary">Sign Up</button>
        </fieldset>
      </div>
    </>
  )
}

export default Login
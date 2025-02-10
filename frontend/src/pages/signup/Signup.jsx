import React from 'react'

function Signup() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <label className="fieldset-label">Full Name</label>
          <input type="text" className="input" placeholder="Full Name" />
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Username</label>
          <input type="text" className="input" placeholder="Username" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="fieldset-label">Confirm Password</label>
          <input type="password" className="input" placeholder="Confirm Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </>
  )
}

export default Signup
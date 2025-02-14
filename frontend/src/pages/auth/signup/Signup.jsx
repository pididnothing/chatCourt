import React from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup.js'
import toast from 'react-hot-toast';

function Signup() {

  const [inputs, setInputs] = React.useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    try {
      await signup(inputs);
    }
    catch (error) {
      console.log("Error in signup");
      toast.error("Error in signup");
      toast.error(error.message);
    }
  }

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col font-mono">
        <h1 className="sm:absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter"></h1>
        <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box text-center">
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <label className="fieldset-label">Full Name</label>
          <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Full Name"
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} value={inputs.fullname}
          />
          <div className="validator-hint hidden">Enter valid name</div>
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email}
          />
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="fieldset-label">Username</label>
          <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Username"
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} value={inputs.username}
          />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password}
          />
          <label className="fieldset-label">Confirm Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Confirm Password"
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} value={inputs.confirmPassword}
          />
          <button type="submit" onClick={handleSubmit} className="btn btn-neutral mt-4" disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
          </button>

          <Link to="/login">
            <button className="btn btn-link text-primary">Login</button>
          </Link>
        </fieldset>
      </div>
    </>
  )
}

//Starter Code
// function Signup() {
//   return (
//     <>
//       <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col font-mono">
//         <h1 className="sm:absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter"></h1>
//         <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box text-center">
//           <h1 className="text-2xl font-bold">Create an Account</h1>
//           <label className="fieldset-label">Full Name</label>
//           <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Full Name" />
//           <label className="fieldset-label">Email</label>
//           <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email" />
//           <label className="fieldset-label">Username</label>
//           <input type="text" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Username" />
//           <label className="fieldset-label">Password</label>
//           <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Password" />
//           <label className="fieldset-label">Confirm Password</label>
//           <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Confirm Password" />
//           <button className="btn btn-neutral mt-4">Sign Up</button>
//           <button className="btn btn-link text-primary">Login</button>
//         </fieldset>
//       </div>
//     </>
//   )
// }

export default Signup
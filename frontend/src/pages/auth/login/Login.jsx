import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../hooks/useLogin'
import toast from 'react-hot-toast'

function Login() {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  })

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    try {
      await login(inputs);

    } catch (error) {
      console.log("Error in login");
      toast.error("Error in login");
      toast.error(error.message);
    }
  }

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col border-0 font-mono ">
        <h1
          className="absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter">
        </h1>
        <br></br>
        <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs bg-base-300 border-0 p-4 rounded-box">
          <h1 className="text-2xl font-bold">Welcome back,</h1>
          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email}
          />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg focus:-y text-base-200" placeholder="Password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password}
          />
          <button onClick={handleSubmit} className="btn btn-neutral mt-4">
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
          </button>
          <Link to="/signup" className='justify-self-center'>
            <button className="btn btn-link text-primary">Sign Up</button>
          </Link>
        </fieldset>
      </div >
    </>
  )
}

//Starter Code
// function Login() {
//   return (
//     <>
//       <div className="p-4 h-screen flex items-center justify-center gap-y-6 flex-col border-0 font-mono ">
//         <h1
//           className="absolute top-1 w-[max-content] font-mono text-6xl before:animate-typewriter">
//         </h1>
//         <br></br>
//         <fieldset className="fieldset 2xl:w-3xl md:w-md sm:w-2xs   bg-base-300 border-0 p-4 rounded-box">
//           <h1 className="text-2xl font-bold">Welcome back,</h1>
//           <label className="fieldset-label">Email</label>
//           <input type="email" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg text-base-200" placeholder="Email" />
//           <label className="fieldset-label">Password</label>
//           <input type="password" className="input w-full bg-base-300 border-0 transition duration-500 hover:-translate-y-0.5 hover:drop-shadow-lg focus:-y text-base-200" placeholder="Password" />
//           <button className="btn btn-neutral mt-4">Login</button>
//           <button className="btn btn-link text-primary">Sign Up</button>
//         </fieldset>
//       </div >
//     </>
//   )
// }

export default Login
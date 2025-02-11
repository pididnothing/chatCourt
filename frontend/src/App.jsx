import './App.css'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Dashboard from './pages/user/dashboard'
//scales img src: https://pixabay.com/vectors/scales-balance-weigh-justice-8870744/ 

function App() {

  return (
    <>
      <div className="sm:bg-[url('./assets/scales.png')]  bg-left-top bg-no-repeat bg-contain  p-2 h-screen flex items-center justify-center flex-col">
        {/* <Login /> */}
        {/* <Signup /> */}
        <Dashboard />

      </div>
    </>
  )
}

export default App

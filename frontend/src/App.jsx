import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Dashboard from './pages/user/Dashboard.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext.jsx'
//scales img src: https://pixabay.com/vectors/scales-balance-weigh-justice-8870744/ 

function App() {
  const { authUser } = useAuthContext();
  console.log(authUser)
  return (
    <>
      <div className="sm:bg-[url('./assets/scales.png')]  bg-left-top bg-no-repeat bg-contain  p-2 h-screen flex items-center justify-center flex-col">
        <Routes>
          <Route path="/login" element={authUser ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App

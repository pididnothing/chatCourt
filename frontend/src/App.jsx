import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
//scales img src: https://pixabay.com/vectors/scales-balance-weigh-justice-8870744/ 

function App() {

  return (
    <>
      <div className="bg-[url('./assets/scales.png')] bg-center bg-cover bg-no-repeat  p-4 h-screen flex items-center justify-center flex-col">
        <Signup />
      </div>
    </>
  )
}

export default App

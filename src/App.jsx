import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersDetail from './components/UsersDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersDetail />
    </>
  )
}

export default App

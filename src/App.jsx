import HomePage from "./pages/HomePage"
import "./styles/index.css"

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

function App() {

  return (
    <>
      <HomePage/>
      <ToastContainer autoClose={3500} />

    </>
  )
}

export default App

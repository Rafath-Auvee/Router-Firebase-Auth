import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import Header from './components/Header/Header.js'
import Register from './components/Register/Register.js'

function App() {
  return (
      <div className="App">
        <Header/>
        <br /><br />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
  );
}

export default App;

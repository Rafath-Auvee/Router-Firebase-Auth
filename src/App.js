import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Login from "components/Login/Login";
import Register from "components/Register/Register";
import Home from "components/Home/Home";
import Account from "components/Account/Account";
import RequireAuth from "components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import InputForm from "./components/InputForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={<InputForm mode={mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>

      <Footer mode={mode} />
    </BrowserRouter>
  );
}

export default App;

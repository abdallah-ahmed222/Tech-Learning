import { Outlet } from "react-router-dom";
import AppNav from "./components/AppNav";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App()
{
  return (
    <div className="App">
      <AppNav />
      <ToastContainer theme="dark" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

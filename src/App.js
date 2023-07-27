// import logo from "./logo.svg";
import "./App.css";
import PageRoutes from "./routes/routes";
import NavBar from "./Components/navbar/navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;

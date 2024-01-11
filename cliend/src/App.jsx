import Admin from "./pages/Admin";
import FormPage from "./pages/FormPage";
import "./App.css";
import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
   <div>
    <Switch>
    <Route path="/" Component={Home} />
    <Route path="/form" Component={FormPage} />
    
    <Route path="/formoad" Component={Admin} />
    </Switch>
   </div>
  );
}

export default App;

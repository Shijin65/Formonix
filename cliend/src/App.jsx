import Admin from "./pages/Admin";
import FormPage from "./pages/FormPage";
import "./App.css";
import { Routes as Switch, Route } from "react-router-dom";
function App() {
  return (
   <div>
    <Switch>
    <Route path="/" Component={FormPage} />
    
    <Route path="/admin" Component={Admin} />
    </Switch>
   </div>
  );
}

export default App;

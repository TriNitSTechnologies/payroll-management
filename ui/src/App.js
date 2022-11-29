import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Report from "./Components/Report/Report";
import Company from "./Components/Company/Company";
import Employees from "./Components/Employees/Employees";
import Settings from "./Components/Settings/Settings";
import Documents from "./Components/Documents/Documents";
import Help from "./Components/Help/Help";
import Refer from "./Components/Refer/Refer";

import AddressProof from "./Components/AddressProof/AddressProof";
import AddressProofForm from "./Components/AddressProofForm/AddressProofForm";

function App() {
  return (
    <div>
      <div className="head">
        <Header />
      </div>

      <div className="d-flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/report">
              <Report />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/refer">
              <Refer />
            </Route>
            <Route path="/addressProof">
              <AddressProof />
              </Route>
              <Route path="/addressProof">
                <AddressProofForm />
              </Route>
            
        
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

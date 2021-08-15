import "./assets/css/bootstrap.min.css"
import "./assets/scss/style.css"
import Header from "./views/components/Header"
import MobileHeader from "./views/pages/MobileInstaller/Header"
import Sidebar from "./views/components/Sidebar"
import Index from "./views/pages/Index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import VehicleDetails from "./views/pages/VehicleDetails"
import AddNewCar from "./views/pages/AddNewCar"
import CarList from "./views/pages/CarList"
import OtoLink from "./views/pages/OtoLink"
import Add from "./views/pages/MobileInstaller/Add"
import Provider from "./views/components/Provider"
import Details from "./views/pages/MobileInstaller/Details"
import AllSet from "./views/pages/MobileInstaller/AllSet"
import Error from "./views/pages/MobileInstaller/Error"

function App() {

  return (
    <Router>
      
    <div className="container-fluid p-0">
      <Sidebar/>
      
        <Provider>
        <Header/>
        <MobileHeader/>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/add-new-car">
            <AddNewCar/>
          </Route>

          <Route exact path="/vehicle-details">
              <VehicleDetails/>
          </Route>

          <Route exact path="/car-list">
              <CarList/>
          </Route>

          <Route exact path="/oto-link">
              <OtoLink/>
          </Route>

          <Route exact path="/mobile/add">
              <Add/>
          </Route>

          <Route exact path="/mobile/detail">
              <Details/>  
          </Route>

          
          <Route exact path="/mobile/all-set">
              <AllSet/>
          </Route>

          <Route exact path="/mobile/error">
              <Error/>  
          </Route>
        
        
        </Switch>
        </Provider>
    </div>
    </Router>
  );
}

export default App;

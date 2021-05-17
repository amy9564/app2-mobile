import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Switch , Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Catageory from "./Catageory";
import Product from "./Product";
import Footer from "./Footer";
import Pizza from "./Pizza";
import "./index.css";

function App() {
  return (
    <>
    <Header />   
    <Switch> 
            <Route exact path="/catageory" component={ Catageory } />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/nonvegpizza" component={ Pizza } />
            <Route exact path="/vegpizza" component={ Pizza } />
            <Route exact path="/mixedpizaa" component={ Pizza } />
            <Route exact path="/nonvegsandwitch" component={ Pizza } />
            <Route exact path="/vegsandwitch" component={ Pizza } />
            <Route exact path="/soup" component={ Pizza } />
            <Route exact path="/nonvegpasta" component={ Pizza } />
            <Route exact path="/vegpasta" component={ Pizza } />
            <Route exact path="/desert" component={ Pizza } />
            <Route exact path="/breakfastitem" component={ Pizza } />
            <Route exact path="/burger" component={ Pizza } />
            <Route exact path="/kalemusturd" component={ Pizza } />
            <Route exact path="/onions" component={ Pizza } />
            <Route exact path="/garlic" component={ Pizza } />
            <Route exact path="/wintersquash" component={ Pizza } />
            <Redirect to="/catageory" />
        </Switch>
        <Footer />
    </>
  );
}

export default App;

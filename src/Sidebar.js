import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <> 
        <div className="container-fluid">
            <div className="row sidenav">
                <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" >
                <div className="w3-dropdown-hover">
                        <button className="w3-button">Pizza
                            <i className="zmdi zmdi-long-arrow-down"></i>
                        </button>
                        <div className="w3-dropdown-content w3-bar-block">
                            <NavLink to="/nonvegpizza" className="w3-bar-item w3-button">Non Veg Pizza</NavLink>
                            <NavLink to="/vegpizza" className="w3-bar-item w3-button">Veg Pizza</NavLink>
                            <NavLink to="/mixedpizaa" className="w3-bar-item w3-button">Mixed Pizza</NavLink>
                        </div>
                    </div>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Sandwitch
                            <i className="zmdi zmdi-long-arrow-down"></i>
                        </button>
                        <div className="w3-dropdown-content w3-bar-block">
                            <NavLink to="/nonvegsandwitch" className="w3-bar-item w3-button">Non Veg Sandwitch</NavLink>
                            <NavLink to="/vegsandwitch" className="w3-bar-item w3-button">Veg Sandwitch</NavLink>
                            <NavLink to="/mixedpizaa" className="w3-bar-item w3-button">Mixed Sandwitch</NavLink>
                        </div>
                    </div>
                    <NavLink to="/soup" className="w3-bar-item w3-button">Soup</NavLink> 
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Pasta
                            <i className="zmdi zmdi-long-arrow-down"></i>
                        </button>
                        <div className="w3-dropdown-content w3-bar-block">
                            <NavLink to="/nonvegpasta" className="w3-bar-item w3-button">Non Veg Pasta</NavLink>
                            <NavLink to="/vegpasta" className="w3-bar-item w3-button">Veg Pasta</NavLink>
                            <NavLink to="/vegpasta" className="w3-bar-item w3-button">Mixed Pasta</NavLink>
                        </div>
                    </div>
                    <NavLink to="/desert" className="w3-bar-item w3-button">Dessert</NavLink>
                    <NavLink to="/breakfastitem" className="w3-bar-item w3-button">Breakfast Item</NavLink>
                    <NavLink to="burger" className="w3-bar-item w3-button">Burger</NavLink>  
                    <NavLink to="#" className="w3-bar-item w3-button">Breakfast Items</NavLink>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button">Hot-Foods
                            <i className="zmdi zmdi-long-arrow-down"></i>
                        </button>
                        <div className="w3-dropdown-content w3-bar-block">
                            <NavLink to="/kalemusturd" className="w3-bar-item w3-button">Non Veg Hot-Foods</NavLink>
                            <NavLink to="/onions" className="w3-bar-item w3-button">Veg Hot-Foods</NavLink>
                            <NavLink to="/garlic" className="w3-bar-item w3-button">Mixed Hot-Foods</NavLink>
                            <NavLink to="/wintersquash" className="w3-bar-item w3-button">Winter Squash</NavLink>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
};

export default Sidebar;
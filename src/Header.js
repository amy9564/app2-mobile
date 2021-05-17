import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [pos,setPos] = useState();
    const UserLocation = async () => {    
        navigator.geolocation.getCurrentPosition(async (position)=> {
            const lat = position.coords.latitude ;
            const long = position.coords.longitude ;         
            const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=de9e05067bf44ff49fa395a739a34a0d`)
            .then(res=>res.json());
            console.log(res.results[0].formatted);
            setPos(res.results[0].formatted);
            console.log(pos);
                            });                
    };
         
        
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">             
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/"><strong className="brand-name">App2</strong>Food</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form className="data_inline my-2 ">
                            <input className="form-control" type="search" placeholder="Please click to get current Location" aria-label="Search" onClick={UserLocation} value={pos} />
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/catageory">Catageory <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
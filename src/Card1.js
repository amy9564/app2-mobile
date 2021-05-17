import React from "react";
import { NavLink } from "react-router-dom";

const Card1 = (props) =>{

    const PriceData = () => {    
        props.HandleCart(props);  
    };
    
    return (
            <>
                <div className="cards">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <div>
                                <NavLink to="#" className="btn btn-primary" onClick={PriceData} >ADD</NavLink>
                                <NavLink to="#" className="btn btn-primary" >{props.price}</NavLink>    
                            </div>
                        </div>
                    </div>
                </div>
            </>              
    )};

export default Card1;

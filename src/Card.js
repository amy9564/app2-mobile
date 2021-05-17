import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) =>{
    const InputData = () => {
        props.PassNote(props);
    }    
    return (
            <>
                <div className="cards1">
                    <div className="card1">
                      <img className="card-img-top" src={props.src} alt="Random" />
                        <div className="card-body">
                            <h4 className="card-title1">{props.title}</h4>
                            <div>
                                <NavLink to="#" className="btn btn-primary1" onClick={InputData}>ADD</NavLink>
                                <NavLink to="#" className="btn btn-primary1" >{props.price}</NavLink>    
                            </div>
                        </div>
                    </div>
                </div>
            </>              
    )};

export default Card;

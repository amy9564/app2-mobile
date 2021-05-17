import React from "react";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
    
    const handleEvent = () => {
        props.deleteItem(props.id);
    };
    
    return (   
            <>
            <div className="container">
                <div className="row clicked-list">
                    <select id = "dropdown" className="clicked-list1" >
                    <option value="1" selected disabled>1</option>
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                        <div className="clicked-list2">{props.title}</div>
                        <div className="clicked-list3">{props.price}</div>
                        <div>
                            <NavLink className="for-delete" to="#"  onClick={handleEvent}>DELETE</NavLink>
                            <NavLink className="for-edit" to="#">EDIT</NavLink>
                        </div>
                </div>
            </div>
            </>
        )
    };    
         

export default Cart;
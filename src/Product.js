import React, { useState } from "react";
import Card1 from "./Card1";
import Sdata from "./Sdata";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import Card from "./Card";
import "./index.css";

const Product = () => {
    
    const [count,setCount] = useState([]);
    var [rand,setRand] = useState(0);
    var [del,setDel] = useState(0);
    var [tax,subtax] = useState(0);
    var [data,setData] = useState(0);
    var [click,setClick] = useState(0);  

    const MiniCart = (valu) => {
        var minpric = valu.price;
        setClick(click+minpric);
    };

    const HandleCart = (value) =>{           
        setCount((preData)=>{
            return [value,...preData];
        });
        const Random2 = value.price;
        setRand(rand+Random2)
        subtax(tax=30.5);
        setDel(del=50);
        const Randow = (rand + tax + del + value.price);
        setData(Randow);
        };
    
    const onDelete = (id) =>{
        setCount((oldData)=>
        oldData.filter((currdata,indx)=>{
            return indx !== id;
        })
        )
    }

    return (
        <>             
              <div className="container-fluid prod-page">
                    <div className="row ">
                        <div className="col-md-3 side-wala">
                            <Sidebar />
                        </div>
                        <div className="col-md-6 menu_disp">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-2 grid3">
                                        <div>
                                            <Card1 title={Sdata[0].title} price={Sdata[0].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                            <Card1 title={Sdata[1].title} price={Sdata[1].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                            <Card1 title={Sdata[2].title} price={Sdata[2].price} HandleCart={HandleCart} />
                                        </div>
                                    </div>
                                    <div className="col-md-2 grid1">
                                        <div>
                                            <Card1 title={Sdata[3].title} price={Sdata[3].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                            <Card1 title={Sdata[4].title} price={Sdata[4].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                            <Card1 title={Sdata[5].title} price={Sdata[5].price} HandleCart={HandleCart} />
                                        </div>                    
                                    </div>
                                    <div className="col-md-2 grid2">
                                        <div>
                                            <Card1 title={Sdata[6].title} price={Sdata[3].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                           <Card1 title={Sdata[7].title} price={Sdata[4].price} HandleCart={HandleCart} />
                                        </div>
                                        <div>
                                            <Card1 title={Sdata[8].title} price={Sdata[5].price} HandleCart={HandleCart} />
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3 third-data">                
                                <div className="row data-list">
                                    {count.map((cval,index)=>{
                                        return (
                                            <>
                                            <Cart 
                                            key = {index}
                                            id = {index}
                                            title={cval.title} 
                                            price={cval.price}
                                            deleteItem={onDelete} 
                                            />
                                            </>
                                        )
                                })}
                                </div>
                                <div className="container">
                                    <div className="row data-lis">
                                        <div>   
                                            <textarea type="text" name="instruction" className="inpu-fiel" placeholder="Please Enter Special Instruction" />
                                        </div> 
                                        <div>total:{rand}</div>
                                        <div>Taxes:{tax}</div>
                                        <div>Delievery Charge : {del}</div>
                                        <div className="data-lis1">
                                            <Card src={Sdata[9].src} title={Sdata[9].title} price={Sdata[9].price} PassNote={MiniCart}/>
                                            <Card src={Sdata[10].src} title={Sdata[10].title} price={Sdata[10].price} PassNote={MiniCart} />
                                            <Card src={Sdata[11].src} title={Sdata[11].title} price={Sdata[11].price} PassNote={MiniCart} />
                                        </div>
                                            <div className="data-lis6"> CheckOut  
                                                <div className="data-lis7">ToTal Price  <p className="data-lis8">{data}</p></div> 
                                            </div>
                                    </div>
                                </div>
                        </div>
            
                    </div>
              </div>
        
        </>
    )
}
export default Product;
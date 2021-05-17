import React from "react";

const Catageory = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="container my-4 mx-auto">
                    <div className="row">
                        <div className="cata-image">
                            <img className="img-fluid image1" src={process.env.PUBLIC_URL + "/Images/image1.jpg"} alt="Random_Image" />
                            <img className="img-fluid image2" src={process.env.PUBLIC_URL + "/Images/image3.jpg"} alt="Random_Image" />
                            <img className="img-fluid image3" src={process.env.PUBLIC_URL + "/Images/image4.jpg"} alt="Random_Image" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="main"> Main Catageory</div>
                            <div className="catalog-image">
                                <img className="image4" src={process.env.PUBLIC_URL + "/Images/image5.jpg"} alt="Random_Image" />
                                <img className="image5" src={process.env.PUBLIC_URL + "/Images/image6.jpg"} alt="Random_Image" />
                                <img className="image6" src={process.env.PUBLIC_URL + "/Images/image7.jpg"} alt="Random_Image" />
                            </div>
                            <div className="catalog-image my-3">
                                <img className="image4" src={process.env.PUBLIC_URL + "/Images/image8.jpg"} alt="Random_Image" />
                                <img className="image5" src={process.env.PUBLIC_URL + "/Images/image9.jpg"} alt="Random_Image" />
                                <img className="image6" src={process.env.PUBLIC_URL + "/Images/image10.jpg"} alt="Random_Image" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Catageory;
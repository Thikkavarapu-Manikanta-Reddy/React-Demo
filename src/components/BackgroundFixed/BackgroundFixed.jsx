import React from 'react';
import userLogo from "../../assets/user.svg";
import phoneLogo from "../../assets/screen-4.png";
import "./BackgroundFixed.css";

function BackgroundFixed() {
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <div style={{
                    backgroundImage: `url('${phoneLogo}')`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                                <div className="card" style={{ width: "300px", margin: "auto" }}>
                                    <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                            <div className="card" style={{ width: "300px", margin: "auto" }}>
                                <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div> */}
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                                <div className="card" style={{ width: "300px", margin: "auto" }}>
                                    <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div><br />
                            </div>
                            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                            <div className="card" style={{ width: "300px", margin: "auto" }}>
                                <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div><br />
                        </div> */}
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div style={{ marginTop: "100px" }} />
                        <div className="card" style={{ width: "300px", margin: "auto" }}>
                            <img className="card-img-top" src={userLogo} alt="Card image" style={{ width: "20%" }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default React.memo(BackgroundFixed)

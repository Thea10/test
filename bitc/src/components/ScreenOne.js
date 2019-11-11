import React from 'react';
import Nav from './Nav';
import Account from './Account';
import Settings from '@material-ui/icons/Settings';
import bit from '../img/bitcmd.PNG';
import eth from '../img/eth.PNG';
import lite from '../img/lite.PNG';
import peer from '../img/peer.PNG';

const Main = () => {
    return (
        <div>
            <div className="wrapper">
                <section className="one">
                    <Nav />
                    <div className="text-white">
                        <h3> 20 159.52 <span className="font-weight-light"> USD <i className="fa fa-chevron-down" style={{ fontSize: "1.3rem" }} aria-hidden="true"></i> </span>  </h3>

                        <h6 className="font-weight-light" > Balance <span>  +1254.33 </span></h6>
                        <div className="row">
                            <div className="col-md-5">
                                <h6>BTC</h6>
                                <h6>40%</h6>
                                <span> +5%</span>
                            </div>
                            <div className="col-md-5">
                                <h6>BTC</h6>
                                <h6>40%</h6>
                                <span> +5%</span>
                            </div>
                            <div className=" col-md-5"> <button className="fa fa-plus  btn" aria-hidden="true"></button> Add Funds</div>

                            <button className=" col-md-5 btn"> <span style={{ top: "15px", left: "15px" }}></span> Dynamic <i className="fa fa-chevron-down" aria-hidden="true"></i> </button>
                        </div>
                    </div>

                </section>
                <section className="second p-3">
                    <h5 className="d-flex justify-content-between mt-3">
                        Accounts <i>  <Settings /></i> </h5>

                    <div className="row mt-2">
                        <Account img={bit} type="Bitcoin" color= "#f8af29" rate="50" amount="5000.00" />
                        <Account img={eth} type="Ethereum" color= "#db4dff" rate="4" amount="2000.00" />
                        <Account img={lite} type="Litecoin" color= "#03A9F4" rate="60" amount="1000.00" />
                        <Account img={peer} type="Peercoin" color= "#854fe4" rate="9" amount="1000.00" />
                    </div>

                    <hr />
                </section>
            </div>

        </div>
    )
}

export default Main;
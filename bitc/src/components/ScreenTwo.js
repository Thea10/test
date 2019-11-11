import React from 'react';
import Nav from './Nav';
import Graph from './Graph';
import btc from '../img/bitclg.PNG';

const Main = () =>{
    return(
        <div>
            <section className="two">
                <Nav />
                <div className="text-blue d-flex">
                   <img src={btc} height="50" />
                   <div>
                    <h5>BTC</h5>
                    <h6>Bitcoin</h6>
                    <h3 className="mt-2 font-weight-bolder">4 154.10 <span className="font-weight-lighter">USD</span></h3>
                    <h6 className="text-success">+1425.85</h6>
                   </div>
                </div>

                <h6 className="d-flex"> <span className="fa fa-bar-chart" aria-hidden="true" ></span> <i className="fa fa-link" aria-hidden="true"></i> </h6>

                <div className="stats d-flex mt-2 justify-content-around">
                    <button className="btn"  type="button" data-toggle="collapse" data-target="#daily"> Daily </button>
                    <button className="btn"  type="button" data-toggle="collapse" data-target="#weekly" > Weekly </button>
                    <button className="btn"  type="button" data-toggle="collapse" data-target="#monthly"> Monthly </button>
                    <button className="btn"  type="button" data-toggle="collapse" data-target="#yearly"> Yearly </button>
                </div>
                <div className="collapse"  id="daily">
                    {/*<Graph /> */}
                </div>
                <div className="collapse" id="weekly">
                    {/*<Graph /> */}
                </div>
                <div className="collapse" id="monthly">
                    {/*<Graph /> */}
                </div>
                <div className="collapse" id="yearly">
                    {/*<Graph /> */}
                </div>

                <section >
                    <h5 style={{marginTop: "9rem"}}>
                        Market Top 
                    </h5>

                    <div className="row">
                        <div className="col-md-3">
                            <h5>BTC</h5>
                            <h6 className="font-weight-lighter">+1425.85</h6>
                            <button className="fa fa-plus float-right btn" aria-hidden="true"></button>  
                        </div>
                        <div className="col-md-3">
                            <h5>BTC</h5>
                            <h6 className="font-weight-lighter">+1425.85</h6>
                            <button className="fa fa-plus float-right btn" aria-hidden="true"></button>  
                        </div>
                        <div className="col-md-3">
                            <h5>BTC</h5>
                            <h6 className="font-weight-lighter">+1425.85</h6>
                            <button className="fa fa-plus float-right btn" aria-hidden="true"></button>  
                        </div>
                    </div>
                </section>
            </section>
           
        </div>
    )
}

export default Main;
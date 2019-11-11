import React from 'react';
import Calendar from 'react-calendar';

const Main = () =>{
    return(
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-building" aria-hidden="true"></i>
                <h6>Housing</h6>
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                <h6>Jobs</h6>
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <h6>For Sale</h6> 
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <h6>Personal</h6> 
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-bus" aria-hidden="true"></i>
                <h6>Services</h6>  
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-users" aria-hidden="true"></i>
                <h6>Community</h6> 
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-forumbee" aria-hidden="true"></i>
                <h6>Forums</h6> 
            </div>
            <div className="col-md-3 col-sm-12">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <h6>Event Calendar</h6> 
                <Calendar />
            </div>

        </div>
    )
}

export default Main;
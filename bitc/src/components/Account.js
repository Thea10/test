import React from 'react';

const Account = (props) => {

    let {img, type, amount, rate, color} = props;
    let colorclass;
    if (rate > 10){
        colorclass="text-success d-flex justify-content-between";
    } else{
        colorclass="text-danger d-flex justify-content-between";
    }
    return (
        <div className="col-md-5">
            <img src={img} />
            <div className="mt-1 ml-1">
                <h6 style={{ color: color }}>{type}</h6>
                <h6 className="font-weight-bold">${amount}</h6>
                <h6 className={colorclass} > {rate}% <i className="fa fa-chevron-down mt-1" aria-hidden="true"></i> </h6>
            </div>

        </div>
    )
}

export default Account;
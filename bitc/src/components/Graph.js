import React from 'react';
import {Chart} from 'react-charts';

const Graph = () => {

    let days = {Sat: "Sat", Sun: "Sun", Mon: 'Mon', Tue: "Tue", Wed: "Wed", Thu:"Thu", Fri: "Fri"} 

    let data = React.useMemo(
        () => [
            {
                data:[[0,3],[1,8]]  
            },
            {
                data:[[2,3],[4,8]] 
            },

        ],
        []
    );
    let axes = React.useMemo(
        () => [
            {
                primary: true, type: 'linear', position: 'bottom'
            },
            {
                type: 'linear', position: 'left'
            }
        ],
        []
    );

    return (
        <div style={{
            width: "150px",
           height: "150px"
       }}>
           <Chart data={data} axes={axes} />
       </div>
    )
}

export default Graph

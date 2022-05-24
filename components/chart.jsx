import {useState} from 'react';
import {Line} from 'react-chartjs-2';
const Chart = () =>{
    const data= {
        labels: ['January','February', 'March','April'],
        datasets: [{
            data: [0.5,0.2,0.3,0.4]
        }]
    }

    const options = {
        plugins:{
            legend:{
                display: false
            },
        },
        elements: {
            line:{
                tension: 0,
                borderWidth: 2,
                borderColor: "rgba(47,97,68,1)",
                fill: "start",
                backgroundColor: "white"
            },
            point: {
                radius:0,
                hitRadius: 0
            }
        },
        scales: {
            xAxis:{
                display: true,
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            },
        },
    }
    return (
        <>
        <div className='line-chart'>
        <Line data={data} width={80} height={80} options={options} />
        </div>
        </>
    );
}

export default Chart;
import React from 'react'
import { Bar } from 'react-chartjs-2'

function remplirColor(colors,mult) {
    for(let i = 0; i < colors.length; i++) {
        console.log("false "+colors[i]);
        colors[i] = colors[i]+', '+String(mult)+')';
        console.log("true "+colors[i]);
    }
    return colors;
}

function BarChart(props) {
    let colorbg = remplirColor(props.colors,props.multbg);
    let colorborder = remplirColor(props.colorsbd,props.mult);
    return (
    <div>
        <Bar
            data={{
                labels: props.labels,
                datasets: [{
                    title: props.nomLabel,
                    label: props.nomLabel,
                    data: props.data,
                    backgroundColor: colorbg,
                    borderColor: colorborder,
                    borderWidth: 1,
                },
            {
                label: props.nomLabelFrance,
                data: props.dataFrance,
                backgroundColor: props.colorsFrance,
                borderColor: props.colorsFranceBd,
                borderWidth: 1,
                hidden: true,
            },

        ],

        }} 
            height={400}
            width={600}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: props.nom
                    },
                    subtitle: {
                        display: true,
                        text: props.nom
                    }
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            }}
        />
    </div>
    )
}

export default BarChart
import React from 'react'
import { Line } from 'react-chartjs-2'

function remplirColor(colors,mult) {
    for(let i = 0; i < colors.length; i++) {
        console.log("false "+colors[i]);
        colors[i] = colors[i]+', '+String(mult)+')';
        console.log("true "+colors[i]);
    }
    return colors;
}


function Lines(props) {
    let colorbg = remplirColor(props.colors,props.multbg);
    let colorborder = remplirColor(props.colorsbd,props.mult);
    return (
    <div>
        <Line
            data={{
                labels: props.labels,
                datasets: [{
                    label: props.nomLabel,
                    data: props.data,
                    backgroundColor: colorbg,
                    borderColor: colorborder,
                    borderWidth: props.width,
                },

            ]
            }
            } 
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
                        text: props.sousnom
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

export default Lines
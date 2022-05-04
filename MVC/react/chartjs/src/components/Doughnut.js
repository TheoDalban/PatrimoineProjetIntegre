
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function remplirColor(colors,mult) {
    for(let i = 0; i < colors.length; i++) {
        console.log("false "+colors[i]);
        colors[i] = colors[i]+', '+String(mult)+')';
        console.log("true "+colors[i]);
    }
    return colors;
}


function Doug(props) {
    let colorbg = remplirColor(props.colors,props.multbg);
    let colorborder = remplirColor(props.colorsbd,props.mult);
    return (
    <div>
        <Doughnut
            data={{
                labels: props.labels,
                datasets: [{
                    label: props.nomLabel,
                    data: props.data,
                    backgroundColor: colorbg,
                    borderColor: colorborder,
                    borderWidth: 1,
                },

            ]
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
            }}
        />
    </div>
    )
}

export default Doug
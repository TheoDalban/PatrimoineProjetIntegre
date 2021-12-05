import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const BarChart = () => {
    return (
    <div>
        <Doughnut
            data={{
                labels: ['Monument', 'Nom', 'Titre', 'Commentaire', 'Date_Post', 'Date_Visite', 'Année', 'Groupe', 'Note', 'Lieu', 'Pays', 'Continents', 'Contributions'],
                datasets: [{
                    title: "Fourvières",
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3,4 , 6, 6, 25, 7, 6 , 8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 119, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(124, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(124, 78, 12, 0.2)'

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 119, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(124, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(124, 78, 12, 1)'
                    ],
                    borderWidth: 1,
                },
                {
                    labels: 'score',
                    data: [12,24,35]
                }

            ]
            }} 
            height={400}
            width={600}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Fourvière'
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
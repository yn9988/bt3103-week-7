import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                label: 'west',
                borderColor: "#3e95cd",
                fill: false
            },
            { 
                data: [],
                label: 'national',
                borderColor: "#8e5ea2",
                fill: false
            },
            { 
                data: [],
                label: 'east',
                borderColor: "#3cba9f",
                fill: false
            },
            { 
                data: [],
                label: 'central',
                borderColor: "#e8c3b9",
                fill: false
            },
            { 
                data: [],
                label: 'south',
                borderColor: "#c45850",
                fill: false
            },
            { 
                data: [],
                label: 'north',
                borderColor: '#FFFF00',
                fill: false
            }
        ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI 24 Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            this.results=response.data.items
            console.log(this.results)
            for (var result of this.results) {
                this.datacollection.labels.push(result.timestamp)
                var psi = result.readings.psi_twenty_four_hourly
                console.log(psi)
                var i = 0
                for (var key in psi) {
                    console.log(key)
                    this.datacollection.datasets[i].data.push(psi[key])
                    i++
                }
            }
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}
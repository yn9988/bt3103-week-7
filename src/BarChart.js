import { Bar } from 'vue-chartjs'
import database from './firebase.js'

export default {
    extends: Bar,
    data:function() {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    backgroundColor: '#77C3EC',
                    data: []
                  }]
            },
            options: {
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Total Number of Each Dish'
                },
                scales:{
                    yAxes:[{
                        ticks:{
                            min:0
                        }
                     }],
                     
                },
                responsive: true,
                maintainAspectRatio: false
            },
            orders: {}
        }
      },
      methods: {
        fetchItems: function () {   
            database.collection('orders').get().then((querySnapShot)=>{
                querySnapShot.forEach(doc=>{
                    const order = doc.data()
                    var dishes = Object.keys(order)
                    var i
                    for (i = 0; i < dishes.length; i++) {
                        var dish = dishes[i]
                        if (dish in this.orders) {
                            this.orders[dish] += order[dish]
                        } else {
                            this.orders[dish] = order[dish]
                        }
                    }
                })
                for (var key of Object.keys(this.orders)) {
                    this.datacollection.labels.push(key)
                    this.datacollection.datasets[0].data.push(this.orders[key])
                }
                this.renderChart(this.datacollection, this.options)
            })
        }
      },
      created() {
        this.fetchItems()
      }
}
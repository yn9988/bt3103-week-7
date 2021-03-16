<template>
    <div>
        <ul id="un">
            <li id="boxed" v-for="order of orders" v-bind:key="order.id">
                <ol style="list-style-type: none">
                    <li v-for="(value, key) in order" v-bind:key="key">
                        <p id="docid"></p>
                        <p v-if="key != 'id'">{{key}}: {{value}}</p>
                    </li>
                </ol>
                <button v-on:click="deleteItem(order)">Delete</button>
                <button v-on:click="route(order.id)">Modify</button>
            </li>
        </ul>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            orders: []
        }
    },

    methods:{
        fetchItems:function(){
            database.collection('orders').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
                    item.id=doc.id
                    this.orders.push(item) 
                })      
            })
            console.log(this.orders)    
        },
        deleteItem:function(order) {
            database.collection('orders').doc(order.id).delete().then(
                setTimeout(function () {
                        location.reload()
                }, 5000));
        },
        route: function(doc_id) {
            this.$router.push({name: "modify", params: {docid: doc_id}, props: true})    
        }  
    },

    created(){
      this.fetchItems()    
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    #boxed {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        border: 1px solid #222;
        margin: 10px;
    }

    button {
        width: 65px;
        height: 30px;
        background-color: #f7cac9;
        border-radius: 10px;
        border-width: 1px;
    }
</style>
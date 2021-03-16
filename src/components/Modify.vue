<template>
    <div>
        <ul style="list-style-type: none">
           <li v-for="(value, key, index) in this.datapacket" v-bind:key=index> 
                {{key}}: {{value}}<br><br>
                <input type="number" v-bind:id="index" placeholder=0 min="0"><br><br>
            </li>
        </ul>
        <button style="background-color: pink" v-on:click="updateOrder">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.docid).get().then((docRef) => this.datapacket = docRef.data())
        },
        updateOrder: function() {
            var i = 0
            var dpCopy = Object.assign({}, this.datapacket)
            for (const key of Object.keys(this.datapacket)) {
                if (document.getElementById(i).value > 0) {
                    dpCopy[key] = parseInt(document.getElementById(i).value)
                }              
                i++
            }
            database.collection('orders').doc(this.docid).set(dpCopy).then(
                        this.$router.push({path: '/orders'}))
        }
    },

    created() {
        this.fetchItems()
    },

    props: {
        docid: {
            type: String
        }
    },

    data() {
        return {
            datapacket: [],
        }
    }
}
</script>


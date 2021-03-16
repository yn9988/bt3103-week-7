<template>
    <div>
        Menu:
        <ul>
            <li v-for="item in itemsSelected" v-bind:key="item[0]">
                {{item[0]}} x {{item[1]}}
            </li>
        </ul>
        <button style="background-color: pink" v-on:click="findTotal(); sendOrder()">Calculate Total</button>
        <p v-show="show">Subtotal: ${{subTotal}}</p>
        <p v-show="show">Grand Total: ${{grandTotal}}</p>
    </div>
</template>

<script>
    import database from '../firebase.js'
    export default {
        props: {
            itemsSelected: {
                type: Array
            }
        },
        data() {
            return {
                subTotal: 0,
                show: false,
            }
        },
        methods: {
            findTotal: function() {
                var i;
                this.subTotal = 0;
                for (i=0; i<this.itemsSelected.length; i++) {
                    var item = this.itemsSelected[i];
                    this.subTotal += parseInt(item[2]) * parseInt(item[1]); 
                }
                this.show = true;
            },

            sendOrder: function() {
                var order = new Object();
                var i;
                for (i=0; i<this.itemsSelected.length; i++) {
                    var name = this.itemsSelected[i][0];
                    var quantity = this.itemsSelected[i][1];
                    order[name] = quantity;
                }
                database.collection('orders').add(order).then(
                    setTimeout(function () {
                        location.reload()
                    }, 5000));
            }
        },
        computed: {
            grandTotal: function() {
                var num = this.subTotal * 1.07;
                return num.toFixed(2);
            }
        }
    }
</script>

<style scoped>
    div {
        font-size: 20px;
    }
</style>
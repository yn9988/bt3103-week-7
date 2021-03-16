<template>
    <div>
        <button v-on:click="decrease">-</button>
        <span>{{counter}}</span>
        <button v-on:click="increase">+</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
            }
        },
        methods: {
            decrease: function() {
                if (this.counter > 0) {
                    this.counter--;
                }
                this.$emit('counter', this.item, this.counter)
            },
            increase: function() {
                if (this.counter < 10) {
                    this.counter++;
                } else {
                    alert("You cannot buy more than 10 items.");
                }
                this.$emit('counter', this.item, this.counter)
            }
        },
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    button {
        text-align: center;
        background-color: pink;
        font-size: 40px;
        width: 50px;
        height: 50px;
    }
    span {
        font-size: 40px;
        padding: 10px;
    }
</style>
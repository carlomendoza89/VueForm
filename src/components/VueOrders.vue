<template>
    <ul>
        <li v-for="order in orders" :key="order['_id']">Item: {{order.item}}, Quantity: {{order.quantity}}</li>
    </ul>
</template>

<script>
    import db from '../firebase'
    import axios from 'axios'
    export default {
        name: "VueOrders",
        data(){
            return {
                orders: []
            }
        },
        // mounted() {
        //     axios.get('https://mongotest4711.serveo.net/orders')
        //         .then(res => {
        //             this.orders = res.data;
        //         })
        //         .catch(console.error)
        // }
        firestore () {
            return {
                orders: db.collection('orders')
            }
        }
    }
</script>

<style scoped>

</style>

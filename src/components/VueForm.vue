'<template>
    <form @submit.prevent="submit">
        <h1>Enter an Item</h1>
        Name: <input type="text" v-model="item"/>
        Quantity: <input type="number" v-model="quantity"/>
        <button>Order</button>
    </form>
</template>

<script>
    import db from '../firebase'
    import axios from 'axios'
    export default {
        name: "VueForm",
        data() {
            return {
                item: '',
                quantity: ''
            }
        },
        firestore () {
            return {
                orders: db.collection('orders')
            }
        },
        methods: {
            submit(){
                // axios.post('https://mongotest4711.serveo.net/orders', {
                //     "item": this.item,
                //     "quantity": this.quantity
                // })
                this.$firestore.orders.add({item: this.item, quantity: this.quantity})
                    .then(()=>{this.$router.push('/orders')})
                    .catch(console.error)
            }
        }
    }
</script>

<style scoped>

</style>

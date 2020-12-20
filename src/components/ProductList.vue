<template>
    <div class="product-list">
        <ul>
            <li v-for="product in products" :key="product.id">
                <span class="quantity">{{ product.quantity }}x</span>
                <span class="name">{{ product.name }}</span>
                <span class="price">€ {{ product.price.toFixed(2) }}</span>
                <span class="delete" @click="deleteProduct(product)">X</span>
            </li>
        </ul>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "ProductList",

        computed: {
            products() {
                return this.$store.state.products;
            }
        },
        methods: {
            deleteProduct(product) {
                console.log(product.id)
                axios.delete('http://vuex-store-backend.test/api/product/' + product.id)
                    .then(
                        (response) => console.log(response)
                    )
                    .catch(
                        (error) => console.log(error)
                    );
            }
        }
    }
</script>

<style scoped>
    .product-list {
        background-color: #131722;
        height: 50vh;
        width: 25%;
        border-radius: 10px;
        border: 1px solid #888888;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        padding: 15px;
        display: flex;
        font-size: 20px;
        color: #888;
        justify-content: space-between;
    }
    li:nth-child(odd) {
        background-color: #ffffff0f;
    }
    .name {
        font-size: 20px;
    }
    .price {
        color: #79b83d;
        font-size: 20px;
    }
</style>
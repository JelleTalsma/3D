<template>
    <div class="add-product">
        <ul>
            <li v-for="product in products" :key="product.id" :class="{active: isActive(product)}"
                @click="selectProduct(product)">
                <span class="name">{{ product.name }}</span>
                <span class="price">€ {{ product.price.toFixed(2) }}</span>
                <input type="text" class="quantity" v-model="product.quantity">
            </li>
        </ul>

        <div class="selected-product" v-if="selectedProduct">
            <span class="name">{{ selectedProduct.name }}</span>
            <span class="price">€{{ selectedProduct.price }}</span>
            <span class="quantity">{{ selectedProduct.quantity }}</span>
            <button @click="AddToCart(selectedProduct)" type="submit">Add To Cart</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AddProduct",

        data() {
            return {
                selectedProduct: {},
                active: false,
            }
        },

        computed: {
            products() {
                return this.$store.state.products;
            },
        },

        methods: {
            isActive(product) {
                return this.selectedProduct === product;
            },
            selectProduct(product) {
                if (this.selectedProduct === product) {
                    return this.selectedProduct = !this.selectedProduct;
                }
                this.selectedProduct = product;
            },
            AddToCart(product) {
                axios.post('http://vuex-store-backend.test/api/product', {
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price
                })
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
    .add-product {
        background-color: #131722;
        height: 50vh;
        width: 50%;
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
        cursor: pointer;
        transition: all ease 0.3s;
    }

    li:hover, li:nth-child(odd):hover {
        background-color: rgba(133, 116, 52, .2);
    }

    li:nth-child(odd) {
        background-color: #ffffff0f;
    }

    li.active {
        background-color: rgba(121,184,61,.3) !important;
    }

    .name {
        font-size: 20px;
    }

    .price {
        color: #79b83d;
        font-size: 20px;
    }

    .quantity {
        border-radius: 50px;
        border: 1px solid #888888;
        background-color: #080a10;
        color: #888888;
        max-width: 50px;
        padding-left: 10px;
    }

    .quantity:focus {
        outline: none;
    }

    .selected-product {
        position: relative;
        bottom: 0;
        left: 0;
        top: 260px;
        right: 0;
        color: #888888;
        background-color: #080a10;
        border-radius: inherit;
        border-top: 1px solid #888888;
        padding: 15px;
        display: flex;
        font-size: 20px;
        justify-content: space-between;
        transition: all ease 0.3s;
    }
</style>
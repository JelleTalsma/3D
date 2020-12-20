<template>
    <div id="app">
        <Canvas/>
        <!--            <algorithm></algorithm>-->
        <!--            <tree></tree>-->
        <!--            <Navbar></Navbar>-->
        <!--            <div class="row justify-content-between m-0">-->
        <!--                <product-list></product-list>-->
        <!--                <AddProduct></AddProduct>-->
        <!--                <cart></cart>-->
        <!--            </div>-->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    // import Algorithm from "@/components/Algorithm";
    import Canvas from "@/components/Canvas";
    // import Tree from "@/components/Tree";
    // import ProductList from "@/components/ProductList";
    // import Navbar from "@/components/Navbar";
    // import AddProduct from "@/components/AddProduct";
    // import Cart from "@/components/Cart";

    export default {
        name: 'App',
        components: {
            Canvas
            // Cart,
            // AddProduct,
            // ProductList,
            // Navbar,
            // Tree,
            // Algorithm
        },
        computed: {
            ...mapState([
                'products'
            ])
        },
        mounted() {
            // this.$store.dispatch('loadProducts');
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    #app {
        height: 100vh;
        /*background-color: #080a10;*/
    }
</style>

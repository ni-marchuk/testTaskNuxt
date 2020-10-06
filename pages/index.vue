<template>
    <div class="main">
        <div class="container">
            <products class="main__products"/>
        </div>
    </div>
</template>

<script>
    import Products from '../componets/products/index'

    export default {
        name: 'Index',

        components: {
            Products,
        },

        async asyncData({app, route, store}) {
            await store.dispatch('lastProductRequest');
        }

    }

</script>

<style lang="scss">
    .main {
        display: flex;
        background: aliceblue;
    }
</style>

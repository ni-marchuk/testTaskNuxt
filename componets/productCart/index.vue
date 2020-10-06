<template>
    <div class="productCart" v-if="product">
        <div class="productCart__wrapper">
            <div class="productCart__header">
                <p class="productCart__id">{{product.id}}</p>
                <p class="productCart__name">{{product.name}}</p>
            </div>
            <img class="productCart__image" :src="product.image_url ? product.image_url : 'default.svg'"/>
            <p class="productCart__description">{{product.description}}</p>
            <p class="productCart__brewersTips">{{product.brewers_tips}}</p>
            <div class="productCart__controls">
                <button class="productCart__btn edit" @click="$emit('editProduct')">Edit</button>
                <button class="productCart__btn delete" @click="deleteProduct(product.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCart",

        props: {
            product: {
                type: Object,
                required: true,
            }

        },

        methods: {
            deleteProduct(element) {
                if (element) {
                    this.$store.commit('DEL_PRODUCT', element);
                }
            }
        }

    }
</script>

<style lang="scss">

    .productCart {
        position: relative;
        display: flex;

        width: 100%;
        max-width: 250px;
        margin: 0 10px 20px 10px;
        padding: 10px;

        background: #FCFCFC;
        border: 2px solid #D22027;
        border-radius: 5px;

        -webkit-box-shadow: 4px 4px 7px -4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 4px 4px 7px -4px rgba(0, 0, 0, 0.75);
        box-shadow: 4px 4px 7px -4px rgba(0, 0, 0, 0.75);

        &__wrapper {
            display: flex;
            flex-direction: column;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        &__id {
            font-size: 12px;
            margin-right: 5px;
            font-weight: bold;
        }

        &__name {
            font-size: 12px;
            font-weight: bold;

        }

        &__image {
            display: flex;
            width: 100%;
            height: 100%;
            max-height: 150px;
            object-fit: contain;
            margin-bottom: 20px;
        }

        &__description {
            font-size: 14px;
            margin-bottom: 20px;
        }

        &__brewersTips {
            padding: 5px;
            margin-bottom: 10px;

            font-size: 11px;

            border-radius: 5px;

            background: #D22027;
            color: white;

            -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
            box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
        }

        &__controls {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        &__btn {
            width: 100px;
            padding: 5px 10px;

            color: white;
            border-radius: 3px;
            -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
            box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.75);
        }

        &__btn.delete {
            background: #D22027;

            &:hover {
                background: #A82128;
            }
        }

        &__btn.edit {
            margin-right: 25px;
            background: darkgreen;

            &:hover {
                background: #005700;
            }
        }

    }

</style>

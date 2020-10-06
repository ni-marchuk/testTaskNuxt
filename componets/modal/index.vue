<template>
    <div v-if="isOpen && product" class="modal">
        <div class="modal__wrapper">
            <slot name="modal__body">

            </slot>
            <button class="modal__btn save" @click="$emit('modalSave',product)">Save</button>
            <button class="modal__btn close" @click="$emit('modalClose')">Close</button>
        </div>
        <div class="modal__overlay" @click="$emit('modalClose')"></div>
    </div>
</template>

<script>
    export default {
        name: "Modal",

        props: {
            isOpen: {
                type: Boolean,
                required: true,
                default: false,
            },

            product: {
                type: Object,
                required: true,
            },
        },

    }

</script>

<style lang="scss">

    .modal {
        position: fixed;
        top: calc(50% - 300px);

        width: 300px;
        height: 300px;

        display: flex;
        justify-content: center;
        align-items: center;

        &__wrapper {
            position: relative;
            width: 100%;
            margin: 0 auto;
            padding: 20px 30px;

            background-color: #fff;
            z-index: 9999;
        }

        &__overlay {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
        }


        &__body {

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

        &__btn.close {
            background: #D22027;

            &:hover {
                background: #A82128;
            }
        }

        &__btn.save {
            margin-right: 25px;

            background: darkgreen;

            &:hover {
                background: #005700;
            }
        }

    }

</style>

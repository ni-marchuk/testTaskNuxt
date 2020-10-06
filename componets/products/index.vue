<template>
    <div class="products">
        <div class="products__wrapper">
            <productCart v-for="(product,index) in products"
                         class="products__productCart"
                         :product="product"
                         @editProduct="editProduct(product)"
                         :key="index"/>
        </div>
        <pagination class="products__pagination" v-show="products && products.length > 0"/>
        <modal :isOpen="isOpenModal"
               class="products__modal"
               :product="editableProduct"
               @modalClose="modalClose"
               @modalSave="modalSave">
            <template slot='modal__body'>
                <form class="products__modalForm">
                    <div class="products__modalInput">
                        <label class="products__modalInputLabel">Name</label>
                        <input class="products__modalNameInput"
                               placeholder="name"
                               v-model="modalDataName"/>
                    </div>
                    <div class="products__modalInput">
                        <label class="products__modalInputLabel">Description</label>
                        <input class="products__modalDescriptionInput"
                               placeholder="description"
                               v-model="modalDataDescription"/>
                    </div>
                </form>
            </template>
        </modal>
    </div>
</template>

<script>
    import ProductCart from '../../componets/productCart/index'
    import Pagination from '../../componets/pagination/index'
    import Modal from '../../componets/modal/index'

    export default {
        name: "Products",

        components: {Pagination, ProductCart, Modal},

        data() {
            return {
                isOpenModal: false,
                editableProduct: {},
                modalDataName: '',
                modalDataDescription: '',
            }
        },

        computed: {
            products: {

                get() {
                    return this.$store.state.PRODUCTS;
                },

                set(value) {
                    this.$store.commit('SET_PRODUCTS', value);
                }

            },
        },

        methods: {

            editProduct(product) {
                if (product) {
                    this.editableProduct = product;
                    this.isOpenModal = true;
                    console.log('OPEN');
                }
            },

            modalClose() {
                this.editableProduct = {};
                this.isOpenModal = false;
                this.modalDataName = '';
                this.modalDataDescription = '';
            },

            modalSave(product) {

                if (this.modalDataName && this.modalDataName !== '' && this.modalDataDescription && this.modalDataDescription !== '' && product) {

                    let editData = {
                        id: product.id,
                        name: this.modalDataName,
                        description: this.modalDataDescription,
                    };

                    this.$store.commit('EDIT_PRODUCT', editData);

                    this.isOpenModal = false;
                    this.modalClose();
                }

            },

        },

    }
</script>

<style lang="scss">

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 100%;
        padding-top: 30px;

        &__pagination {
            display: flex;
            justify-content: center;
            width: 100%;

            margin-top: 30px;
            margin-bottom: 30px;
        }

        &__wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
        }

        &__modalInput {
            padding-bottom: 15px;
        }

        &__modalInputLabel {
            font-size: 16px;
            font-weight: bold;
            color: black;
        }
    }
</style>

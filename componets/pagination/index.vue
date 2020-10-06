<template>
    <div class="pagination">
        <button v-if="isNext"
                class="pagination__btn next"
                @click="nextPage">
            {{!loading ? 'Show next' : 'Loading'}}
        </button>
    </div>
</template>


<script>
    export default {
        name: "Pagination",

        data() {
            return {
                loading: false,
            }
        },

        computed: {
            isNext() {
                return this.$store.getters.NEXT_PAGE
            }
        },

        methods: {
            async nextPage() {
                if (this.isNext) {
                    this.loading = true;
                    await this.$store.dispatch('nextPage');
                    await this.$store.dispatch('lastProductRequest');
                    this.loading = false;
                } else {
                    this.isNext = false;
                }
            },
        },
    }
</script>

<style lang="scss">
    .pagination {
        display: flex;

        button:first-child {
            margin-right: 10px;
        }

        &__btn {
            padding: 5px 10px;
            max-height: 30px;
            height: 100%;

            color: #47494E;
            border: 1px solid #D22027;
            border-radius: 3px;

            -webkit-box-shadow: 2px 2px 5px -4px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 2px 2px 5px -4px rgba(0, 0, 0, 0.75);
            box-shadow: 2px 2px 5px -4px rgba(0, 0, 0, 0.75);
        }

    }

</style>

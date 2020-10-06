<template>
    <header class="header">
        <h2>BeeEer!</h2>
    </header>

</template>

<script>

    export default {
        name: "Header",

    }
</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 15px 0;

        color: white;
        background: #D22027;

        -webkit-box-shadow: 4px 4px 7px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 4px 7px -4px rgba(0,0,0,0.75);
        box-shadow: 4px 4px 7px -4px rgba(0,0,0,0.75);
    }
</style>

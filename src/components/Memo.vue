<template>
    <div id="memo" class="container">
        <h2>{{notita}}</h2>
        <!-- <p>{{noteMemo}}</p> -->
    </div>
</template>
<script>
export default {
    name: "Memo",
    props:["notita"]
}
</script>
<style scoped>
h1, h2{
        font-family: 'Azeret Mono', monospace;
    }
    p{
       font-family: 'Anonymous Pro', monospace;
    }
</style>
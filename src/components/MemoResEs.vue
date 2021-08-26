<template>
    <div>
        <p>{{letritas}}</p>
    </div>
</template>
<script>
export default {
    props:["letritas"]
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

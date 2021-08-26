<template>
    <div>
        <p>{{previewMemo}}</p>
        
    </div>
</template>
<script>
export default {
    name: "Memo",
    props:["previewMemo"],
}
</script>
<style scoped>
    p{
       font-family: 'Anonymous Pro', monospace;
    }
</style>
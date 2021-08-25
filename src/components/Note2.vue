<template>
    <div>
        <h1>Dejá un MEMO</h1>
        <input type="text" placeholder="Escribe tu MEMO aquí" v-model="texto2">
        <Memo2 :letritas="texto2" />        
    </div>
</template>
<script>
import Memo2 from '@/components/Memo2.vue'
export default {
    name: "memo2",
    components:{
        Memo2
    },
    data(){
        return{
            texto2:""
        }
    }
}
</script>
<style scoped>

</style>
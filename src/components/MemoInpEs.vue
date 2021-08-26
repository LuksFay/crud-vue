<template>
    <div>    
        <div>
            <h1>Dejá un MEMO</h1>
            <input type="text" placeholder="Escríbe tu MEMO aquí" v-model="texto2">
            <MemoResEs :letritas="texto2" />        
        </div>
        <div>
            <router-link to="/memo-en">English</router-link> |
            <router-link to ="/memo-pt">Português</router-link>
        </div>
    </div>
</template>
<script>
import MemoResEs from '@/components/MemoResEs.vue'
export default {
    name: "memo",
    components:{
        MemoResEs
    },
    data(){
        return{
            texto2:""
        }
    }
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
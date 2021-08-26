<template>
    <div>
        <div>
            <h1>Deixa um MEMO</h1>
            <input type="text" placeholder="Escreva seu MEMO aqui" v-model="letrinhas">
            <MemoResPt :letrinhasMemo=" letrinhas"/>
        </div>
        <div>
            <router-link to="/memo-en">English</router-link> |
            <router-link to="/memo-es">Español</router-link>
        </div>
    </div>
</template>
<script>
import MemoResPt from '@/components/MemoResPt'
export default {
    name: "memo",
    components:{
        MemoResPt
    },
    data(){
        return{
            letrinhas:""
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
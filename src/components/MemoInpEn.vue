<template>
    <div>
        <div>
            <h1>Leave a MEMO</h1>
            <input type="text" v-model="writeMemo" @keyup.enter="memItFunction" placeholder="Write here your MEMO">
            <MemoResEn :previewMemo="writeMemo"/>
            <button @click="memItFunction">MEM-it</button>
        </div>
        <div>
            <router-link to="/memo-es">Español</router-link> |
            <router-link to ="/memo-pt">Português</router-link>
        </div>
        <div class="memits-container container">
            <div v-for="(memit,index) in memits" :key='index' class="mem-it">
               <p>{{ memit }}</p> 
            </div>
        </div>
        
    </div>
    <!-- Un v-model conecta  -->
</template>
<script>
import MemoResEn from '@/components/MemoResEn.vue'
export default {
 name: 'memo',
 components: {
    MemoResEn
  },
 data(){
     return{
         writeMemo: "",
         memits: [],
     }
 },
    methods: {
        memItFunction() {
            this.memits.push(
                  this.writeMemo
            );
            this.writeMemo='';
            
        },
    },
}
</script>
<style scoped>
    h1{
        font-family: 'Azeret Mono', monospace;
    }
    p{
       font-family: 'Anonymous Pro', monospace;
    }
    .memits-container{
        display: flex;
        gap: 20px;
    }
    .mem-it{
        background: #74ff34;
        min-width: 10px;
    }
</style>

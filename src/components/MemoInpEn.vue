<template>
    <div class="container">
        <div>
            <h1>Leave a MEMO</h1>
            <div class="container memo-inputs">     
                    <input type="text" name="Memo title"  placeholder="Title" maxlength="27" v-model="writeMemo">
                    <textarea cols="25" rows="5" maxlength="280" v-model="writeMemoBody" placeholder="Body"></textarea>  
                    <button @click="createMemit">MEM-it</button>     
            </div>
            <MemoResEn :previewMemo="writeMemo"/>
            <MemoResEn :previewMemo="writeMemoBody"/>
        </div>
        <div>
            <router-link to="/memo-es">Español</router-link> |
            <router-link to ="/memo-pt">Português</router-link>
        </div>
        <div class="memits-container container">
            <div v-for="(memit) in memits" :key='memit.id' class="mem-it">
                <div>
               <h3>{{ memit.title }}</h3> 
                <p>{{ memit.body }}</p>
                <div class="button-position">
                    <button @click="editMemit(memit.id, memit.title, memit.body)">Edit</button>
                    <button @click.capture="deleteMemit(memit.id, memit.title)">X</button>
                </div>
                </div>
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
            writeMemoBody: "",
            memits: [],
             
        }
    },
    methods: {

        createMemit() {
            this.memits.push({
                id: Math.random() + Math.random(),
                title:this.writeMemo,
                body:this.writeMemoBody
            });
            this.writeMemo='';
            this.writeMemoBody='';
            localStorage.setItem('all-memits',JSON.stringify(this.memits));              
        },
        deleteMemit(id){
           let nodeletes = this.memits.filter(memit => memit.id != id);
            localStorage.setItem('all-memits',JSON.stringify(nodeletes))
            let saveMemit = JSON.parse(localStorage.getItem('all-memits'));
                if(saveMemit === null){
                    this.memits = [];
                }else{
                    this.memits = saveMemit;
                }
            },
        editMemit(id, title, body){
            console.log("This edit the memit");
            console.log('original memit: ', id , title, body);
            let newarray = this.memits.map(memit => {
                if(memit.id === id){
                   return {
                       
                       id: memit.id,
                       title: prompt('Nuevo Titulo para el memit', title),
                       body: prompt('Nuevo cuerpo para el memit', body)   
                   }
                }else{
                    return memit
                }
            })
            console.log(newarray);
            localStorage.setItem('all-memits',JSON.stringify(newarray))
            let saveMemit = JSON.parse(localStorage.getItem('all-memits'));
                if(saveMemit === null){
                    this.memits = [];
                }else{
                    this.memits = saveMemit;
                }
        }   

    },
    created(){
                let saveMemit = JSON.parse(localStorage.getItem('all-memits'));
                if(saveMemit === null){
                    this.memits = [];
                }else{
                    this.memits = saveMemit;
                }
    }

}
// METODO (Que debe ser función) created() se ejectua antes de que cargue el documento. donde deberiamos leer el local storage/coockies/etc 
</script>
<style scoped>
    h1, h3{
        font-family: 'Azeret Mono', monospace;
    }
    p{
       font-family: 'Anonymous Pro', monospace;
    }
    .memits-container{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    .mem-it{
        background: #74ff34;
        min-width: 10px;
        max-width: 300px;
        word-break: break-word;
        padding: 20px;
    }
    textarea {
        resize: none;
    }
    .memo-inputs{
        display: flex;
        flex-direction: column;
        max-width: 30%;
        gap: 10px;
    }
    
    
    
</style>

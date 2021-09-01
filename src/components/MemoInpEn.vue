<template>
    <div class="container">
        <div>
            <h1>Leave a MEMIT</h1>
            <div class="container memo-inputs"> 


                     <input type="text" name="Memo title"  placeholder="Title" maxlength="27" v-model="writeMemo"> 
                    <textarea cols="25" rows="5" placeholder="Body" maxlength="280" v-model="writeMemoBody"></textarea>  
                    <button @click="createMemit">MEM-it</button>


                    <div v-show="modal_directive">
                        <div class="modal-background"></div>
                        <div class="modal-editor container">
                            <h1>Edit your MEMIT</h1>
                            <input type="text" v-model="editedmemit.title">
                            <textarea name="" id="" cols="25" rows="5" v-model="editedmemit.body"></textarea>
                            <button @click="editMemit(editedmemit.id)">MEM-dit</button>
                            <button @click="modalFunction">Cancel</button>
                        </div>    
                    </div>   


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
                    <div>
                        <button @click="modalFunction(memit)" >Edit</button>
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
            modal_directive: false,
            editedmemit:{}
        }
    },
    created(){
                let saveMemit = JSON.parse(localStorage.getItem('all-memits'));
                if(saveMemit === null){
                    this.memits = [];
                }else{
                    this.memits = saveMemit;
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
          modalFunction(objMemit){
            this.modal_directive = !this.modal_directive
            this.editedmemit = {...objMemit}
        },
        deleteMemit(id){
           let nodeletes = this.memits.filter(memit => memit.id != id);
           this.memits = nodeletes;
           localStorage.setItem('all-memits',JSON.stringify(nodeletes))
        },
        editMemit(id){
            let edition = this.memits.map( memit => {
                if (memit.id === id){
                    return{
                        id: memit.id,
                        title: this.editedmemit.title,
                        body: this.editedmemit.body
                    }
                }else{
                    return memit
                } 
            })
            this.memits = edition
            localStorage.setItem('all-memits', JSON.stringify(edition))
            this.modal_directive = !this.modal_directive
         },   
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
    .modal-background{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0000007e;
    }
    .modal-editor{
        background: #74ff34;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 19%;
        padding: 20px;
    }
    .memo-inputs{
        display: flex;
        flex-direction: column;
        max-width: 30%;
        gap: 10px;
    } 
</style>

<template>
    <div>
        <div>
            <h1>Leave a MEMO</h1>
            <div>     
                    <input type="text" name="Memo title"  placeholder="Write here your MEMO" maxlength="27" v-model="writeMemo">
                    <textarea name="" id="" cols="25" rows="5" maxlength="280" v-model="writeMemoBody"></textarea>  
                         
            </div>
            <button @click="createMemit">MEM-it</button>
            <MemoResEn :previewMemo="writeMemo"/>
            <MemoResEn :previewMemo="writeMemoBody"/>
        </div>
        <div>
            <router-link to="/memo-es">Español</router-link> |
            <router-link to ="/memo-pt">Português</router-link>
        </div>
        <div class="memits-container container">
            <div v-for="(memit,index) in memits" :key='index' class="mem-it">
                <div>
               <h3>{{ memit.title }}</h3> 
                <p>{{ memit.body }}</p>
                <button @click="editMemit">Edit</button>
                <button @click="deleteMemit">X</button>
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
                title:this.writeMemo,
                body:this.writeMemoBody
            });
            this.writeMemo='';
            this.writeMemoBody='';
            localStorage.setItem('old-memits',JSON.stringify(this.memits));              
        },
        editMemit(){
            console.log("This edit the memit")
            console.log(this.memits)
            localStorage.setItem('old-memits',JSON.stringify(this.memits));
        },
        deleteMemit(index){
            console.log("this delete the memit");
            let areUSure = prompt("are u sure of deleting this memit? D: \nIf the answer is 'yes': \nwrite 'yes' bellow (whitout the ' ' ) ");
            if(areUSure === 'yes'){
                this.memits.splice(index,1)   
            }else{
                console.log("the memit survived to the assassination attempt");
                return
            }
            localStorage.setItem('old-memits',JSON.stringify(this.memits));
        }

    },
    created(){
                let saveMemit = JSON.parse(localStorage.getItem('old-memits'));
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
    }
    .mem-it{
        background: #74ff34;
        min-width: 10px;
    }
    textarea {
        resize: none;
    }
</style>

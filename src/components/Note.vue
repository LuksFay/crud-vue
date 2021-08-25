<template class="container">
    <div id="notes-component container">
            <h1>Leave your MEMO</h1>
        <div class="memo-body container">
            <input type="text" name="text" v-model="noteTitle" placeholder="Title:">
            <!-- <textarea name="" id="" cols="30" rows="5" v-model="noteMemo" placeholder="MEMO:"></textarea>
            <input type="submit" value="MEMO"> -->
        </div>
        <Memo :notita="noteTitle"/>
        
    </div>
    <!-- Un v-model conecta  -->
</template>
<script>

import Memo from '@/components/Memo.vue'

export default {
 name: 'memo',
 components: {
    Memo
  },
 data(){
     return{
         noteTitle: ""
        //  noteMemo:""
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
    #notes-component{      
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .memo-body{ 
        display: flex;
        flex-direction: column;
        gap: 10px;    
    }

</style>

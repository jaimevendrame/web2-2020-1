<template>
   <div class="comp">
      <h2>{{title}}</h2>
   <p>#formulário</p>
   </div>
   
</template>
<script>
export default {
   data (){
      return {
         title: 'FormComponent'
      }
   }
    
}
</script>
<style scoped>
.comp {border: 1px solid green; margin: 5px; padding: 5px;}

</style>
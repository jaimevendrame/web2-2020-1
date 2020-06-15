<template>
    <div class="comp">
        <h2>{{title}}</h2>
        <p>Teste</p>
        <form-component> </form-component>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
import FormComponent from './FormComponent'
export default {
    data () {
        return {
            msg: 'Curso JaimeVue JS',
            title: 'TesteComponent'
        }
    }, 
    components:{
        FormComponent
    }
    
}
</script>

<style scoped>
p{color:red;}
.comp {border: 1px solid red; margin: 5px; padding: 5px;}
</style>
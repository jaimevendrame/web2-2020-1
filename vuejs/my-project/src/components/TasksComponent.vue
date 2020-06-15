<template>
<div class="comp">
    <h2>{{title}}</h2>
    <table> 
        <tr>
            <td>Nome</td>
            <td>Completada?</td>
        </tr>
        <tr v-for= "(task, index) in tasks" :key="index">
            <td>{{ task.name}}</td>
            <td>{{ task.completed ? 'Sim' : 'Não' }}</td>
        </tr>
    </table>
</div>
    
</template>
<script>
export default {
    data () {
        return {
            tasks: [
                {name: 'Arrumar o quarto', completed: true},
                {name: 'Formatar computador', completed: false},
                {name: 'Assistir Tv', completed: true},
                {name: 'Programar', completed: true},
            ],
            title: 'TasksComponent'
        }
    }
}
</script>
<style scoped>
.comp {border: 1px solid rgb(229, 255, 0); margin: 5px; padding: 5px;}

</style>
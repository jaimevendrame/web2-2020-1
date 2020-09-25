<template>
    <div>
        <h1 v-text="title"></h1>
        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Informe o CEP:" v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>
        <div v-if="preloader">
            <img src="../assets/preloader.gif" alt="Carregando...">
            Carregando...
        </div>
        <div v-if="error != ''">
            {{ error }}
        </div>

        <div v-show = "address.bairro">
            <p><b>Logradouro: </b> {{ address.logradouro }} </p>
            <p><b>Bairro: </b> {{ address.bairro }} </p>
            <p><b>Cidade: </b> {{ address.cidade }} </p>
            <p><b>Estado: </b> {{ address.estado }} </p>
            <p><b>Cep: </b> {{ address.cep }} </p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: 'Buscar CEP com Vue JS',
            cep: '',
            address: {
                
            },
            preloader: false,
            error: ''
        }
    },
    methods: {
        onSubmit () {
            this.preloader = true,
            // this.error = '',
            // this.address = {bairro: ''}
            this.reset(),
            this.$http.get('https://api.postmon.com.br/v1/cep/' + this.cep)
            .then( response => {
                this.address = response.body
                
            }, error => {
                console.log(error)

                this.error = 'Cep Errado!'
                
            })
            .finally(() => {
                this.preloader = false
            })
        },
        reset (){
            this.error = '',
            this.address = {}
        }
    }
}
</script>
<style scoped>

</style>
<template>
    <div>
        <h1>Meu nome é: {{ nome }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'LyfeCycle',
        data() {
            return{
                nome: 'Ainda não sei'
            }
        },
        created(){
            setTimeout(() => {
                this.nome = 'Erick'
            }, 1000)

            this.lifeCycle();
            
        },
        mounted() {
            setTimeout(() => {
                this.nome = 'Zeriguin'
            }, 2000)
            
        },
        methods: {
            lifeCycle() {
                console.log("Executou");
            }
        }
    }
</script>
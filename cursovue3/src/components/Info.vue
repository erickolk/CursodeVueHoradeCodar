<template>
    <div>
    
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou em busca de novas Oportunidades</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
    </ul>
    <div>
        <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: <a href="email">{{ email }}</a></p>
    <p>Para acessar meu portifólio <a :href="meu_link">basta clicar aqui.</a></p>
    <Picture/>
</div>
</template>

<script>
import Picture from './Picture.vue';
    export default {
    name: "Info",
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            email: "erick.erick669@gmail.com",
            meu_link: "https://www.google.com",
            textoBotao: 'Mostrar e-mail'
        };
    },
    components: { Picture },

    methods: {
        showEmail (){
            
                this.mostrar_email = !this.mostrar_email
                if (!this.mostrar_email){
                    this.textoBotao = 'Mostrar e-mail'
                } else {
                    this.textoBotao = 'Esconder e-mail'
                }
        }
    }
}
</script>
<template>
    <div>
        <h2>Está é a descrição da pessoa: </h2>
        <Info/>
        <Form />
    </div>
</template>

<script>
import Form from './form/Form.vue';
import Info from './Info.vue';
import App from '@/App.vue';
    export default {
    name: "Pessoa",
    data() {
        return {
            nome: "Erick"
        };
    },
    components: { App,
        Info,
        Form
     }
}
</script>
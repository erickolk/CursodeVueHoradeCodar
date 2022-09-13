const MyNameApp = {
    data() {
        return {
            name: "",
            age: "25",
            input_name: ""
        }
    },
    methods: {
        submitForms(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }
        
        
    }
}

Vue.createApp(MyNameApp).mount("#app");
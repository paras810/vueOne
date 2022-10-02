const app = Vue.createApp({

})
app.component('login-form', {
    template: `
    <form @submit.prevent.stop="handleSub() ">
      <h1>{{title}}</h1>
            
        <input type="text" :placeholder="form_Name" v-model="form_Name"><br><br>
        <input type="text" :placeholder="form_Mail" v-model="form_Mail"><br><br>
        <button>Submit</button>
      </form>
    `,
    data() {
        return {
            title: "Login form",
            form_Name:'Name',
            form_Mail:'Email'
        }
    },
    methods: {
        handleSub(){
            alert('form submitted')
            console.warn(this.form_Name, " ", this.form_Mail)
        }
    },
})
app.mount("#app")
const app = Vue.createApp({});
app.component("login-form", {
  template: `
    <form @submit.prevent.stop="handleSub() ">
      <h1>{{title}}</h1>
            
        <input-form v-model="email"  
        :label="emailLabel" />
        <br><br>
        <input-form v-model="password"
        :label="passwordLabel" /><br><br>
        <button>Submit</button>
      </form>
    `,
  components: ["input-form"],
  data() {
    return {
      title: "Login form",
      email: "hhh",
      password: "ddd",
      emailLabel: "Email",
      passwordLabel: "Password",
    };
  },
  methods: {
    handleSub() {
      alert("form submitted");
      console.warn(this.email, " ", this.password);
    },
  },
});

app.component("input-form", {
  template: `
  <label >{{label}}
  <input type="text" v-model="inputVal">
  
</label>
  `,
props:['label','modelValue'],
computed: {
  inputVal:{
    get(){
      console.log('get function')
      return this.modelValue;
    },
    set(value){
    //  console.log('set function')
   
    this.$emit('update:modelValue',value)
    }
  }
}
,
// data(){
//   return{
//     inputVal: ''
//   }
// }
});
app.mount("#app");

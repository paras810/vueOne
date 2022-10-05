const app = Vue.createApp({});
app.component("login-form", {
  template: `
    <form @submit.prevent.stop="handleSub() ">
      <h1>{{title}}</h1>

        <input-form
        v-for="item,i in inputs"
        :key="i"
         v-model="item.value"  
        :label="item.label"
        :type="item.type" />
        <br><br>

        <button>Submit</button>
      </form>
    `,
  components: ["input-form"],
  data() {
    return {
      title: "Login form",
      inputs:[
        {
          label:'Email: ',
          value:'',
          type:'email'
        },
        {
          label:'Password: ',
          value:'',
          type:'password'
        }
      ]
    };
  },
  methods: {
    handleSub() {
      console.log("form submitted");
      console.warn(this.inputs[0].value, this.inputs[1].value);
    },
  },
});

app.component("input-form", {
  template: `
  <label >{{label}}
  <input :type="type" v-model="inputVal">
  
</label>
  `,
props:['label','modelValue','type'],
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

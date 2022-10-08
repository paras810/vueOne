const app = Vue.createApp({

  data() {
      return {
         isVisible:false,
      }
  },
  methods: {
    toggleBox(){
      this.isVisible = !this.isVisible
    },
  
  },
  updated() {
    console.warn('main comp. updated')
  },
  
})
app.component('test-box',{
  template:`
  <div class="box" ></div>
  
  `,created() {
    console.log(' test comp. created')
  },
  mounted() {
    console.log('test comp. mounted')
  },
  unmounted() {
    console.warn('test comp. unmounted')
  },
})
app.mount("#app")
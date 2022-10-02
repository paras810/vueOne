const app = Vue.createApp({

    data() {
        return {
           greeting : "hello vue 3!" ,
           anGreet:'good morning',
           isVisible:false,
        }
    },
    methods:{
        toggleBox(){
            this.isVisible = !this.isVisible
        },
        greet(miniGreet){
            console.log(this.anGreet)
            console.warn(miniGreet)
        }
    }
})
app.mount("#app")
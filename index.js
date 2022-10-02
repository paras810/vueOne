const app = Vue.createApp({

    data() {
        return {
           greeting : "hello vue 3!" ,
           isVisible:false,
           isVisible2:true,
        }
    },
})
app.mount("#app")
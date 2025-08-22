const app = Vue.createApp({
  // Create functions, data
  //template: "<h2>This is my template...</h2>"
  data(){
    return{
        title: 'The Ledger',
        author: 'Joseph Esquivel',
        age: 34
    }
  }
});


app.mount('#app');

<template>
  <div id="app">
    <div class="header">
      <h2>{{title}}</h2>

      <div v-if="!inicio" class="nav">
        <button v-on:click="procesarInicio" >Inicio</button>
        <button v-on:click="procesarAgregar">Agregar</button>
        <button v-on:click="procesarConsulta">Consultar</button>
        <button v-on:click="procesarEditar">Editar</button>
        <button v-on:click="procesarEliminar">Eliminar</button>
      </div>

    </div>
    
    <div class="main">
      <router-view 
        v-on:select-category="selectCategory"  
        v-on:select-product="selectProduct"  
      ></router-view>
    </div>


    <Footer></Footer>

  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Footer
  },

  data: function(){
    return {
        inicio:   true,
        category: false,
        product: false,
        title: "Mis Finanzas App"
    }
  },

  methods:{
    selectCategory: function(){
        this.inicio   = false
        this.category = true
        this.product = false
        this.title= "TusFinanzas app"
        this.$router.push({name: "inicio_category"})
    }, 

    selectProduct: function(){
        this.inicio   = false
        this.category = false
        this.product = true
        this.title= "My Category APP: Product"
        this.$router.push({name: "inicio_product"})
    },
    procesarInicio: function(){
        this.inicio   = true
        this.category = false
        this.product = false
        this.title= "My Category APP"
        this.$router.push({name: "inicio"})
    },
    procesarAgregar:function(){
      if(this.category == true){
        this.$router.push({name: "agregar_category"})
      }
      else{
        
      }
    },

    procesarConsulta:function(){
      if(this.category == true){
        this.$router.push({name: "consultar_category"})
      }
      else{
        
      }
    },

    procesarEditar: function(){
      if(this.category == true){
        this.$router.push({name: "inicio_category"})
      }
      else{
        
      }
    },

    procesarEliminar: function(){
      if(this.category == true){
        this.$router.push({name: "inicio_category"})
      }
      else{
        
      }
    },

  },
  

  created: function(){
    this.$router.push({name: "inicio"})
  }



}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  body{
    margin: 0 0 0 0;
    padding: 0;
  }
  .header{
    padding: 0 5% 0 5%;
    background-color: #088d70;
    height: 10vh;

    color:#EBF5FB;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-family: 'Dancing Script', cursive;
  }

  .header h2{
    width: 20%;
  }

  .nav{
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav button{
    background: #088d70;
    color: #EBF5FB;
    border: 1px solid #EBF5FB;
    border-radius: 3px;
    padding: 10px 30px;
  }

  .nav button:hover {
    background:  #EBF5FB;
    color:#088d70;
  }

  .main{
    width: 100%;
    height: 80vh;
  }

</style>

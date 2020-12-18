<template>
    <div id="AgregarCategory">
        <h2>Agregar Categoria</h2>
        <form v-on:submit.prevent="procesarGuardado" >
            <input type="text" v-model="category.name" placeholder="Nombre">
            <br>
            <input type="text" v-model="category.password" placeholder="Clave">
            <br>
            <input type="text" v-model="category.saldo" placeholder="Saldo">
            <br>
            <input type="text" v-model="category.gastos" placeholder="Gastos">
            <br>
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';
import Footer from './Footer.vue';

export default {
  components: { Footer },
    name: "AgregarCategory", 
    data: function(){
        return {
            category: {
                name:"",
                password:"",
                gastos:"",
                saldo:"",

            }
        }
    },
    methods:{
        procesarGuardado: function(){
            let self = this
            
            axios.post("https://cajero-api1993.herokuapp.com/usuario/crear/", self.category, {headers: {}})
                .then((result)=>{
                    alert("Usuario Agregado")
                })
                .catch((error)=>{
                    alert("ERROR: " + error.response.status)
                })
        }
    }
}
</script>

<style>

</style>
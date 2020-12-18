<template>
    <div id="consultarCategory">
        <h2>Consultar Categoria</h2>
        <input v-model="name" type="text" placeholder="Name"> 
        <button v-on:click="procesarConsulta"> Consultar</button>
        <br>
        <p v-if="hay_datos" ><span>Name: </span> {{category.name}}</p>
        <p v-if="hay_datos"><span>Saldo: </span> {{category.saldo}} </p>
    </div>
</template>



<script>
import axios from 'axios';
export default {
    name: "ConsultarCategory",
    data:function(){
        return {
            name:"",
            hay_datos: false,
            category: {
                name:"",
                saldo:""
            }
        }
    },
    methods:{
        procesarConsulta: function(){
            let self = this
            axios.get("http://127.0.0.1:8000/usuario/"+self.name)
                .then((result)=>{
                    self.category.name = result.data.name
                    self.category.saldo = result.data.saldo
                    self.hay_datos = true
                })
                .catch((error)=>{
                    self.hay_datos = false
                    alert("ERROR: " + error.response.status)
                })
        }

    }
}
</script>



<style>

</style>
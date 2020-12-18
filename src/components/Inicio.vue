<template>
    <div id="Inicio">
        <button v-on:click="procesarCategory" >Usuarios</button>
    </div>
</template>


<script>
export default {
    name: "Inicio",
    data: function(){
        return{
        
        }
    },
    methods:{
        procesarCategory: function(){
            this.$emit('select-category')
        },
    }
}
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');

    #Inicio{


        width: 100%;
        height: 100%;
        padding: 0 20%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        box-sizing: border-box;
    }

    #Inicio button{
        width: 25%;
        height: 30%;
        
        background: #088d70;
        /*background: radial-gradient(circle, rgba(46,134,193,1) 0%, rgba(33,97,140,1) 12%);*/

        color: #EBF5FB;
        font-size: 25px;

        border: 1px solid #EBF5FB;
        border-radius: 5px;

        font-family: 'Langar', cursive;
    }

    #Inicio button:hover{
        background:#065c49;
        /*background: radial-gradient(circle, rgba(46,134,193,1) 0%, rgba(33,97,140,1) 100%);*/

        
        font-size: 30px;
    }

    

</style>
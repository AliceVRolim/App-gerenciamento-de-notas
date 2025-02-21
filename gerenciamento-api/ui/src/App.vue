
<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Notas</a>
      </div>
    </nav>

    <div class="container">
      
      <form @submit.prevent="salvar"> 

          <label>Título</label>
          <input type="text" placeholder="Título" v-model="nota.title">
          <label>conteúdo</label>
          <input type="text" placeholder="conteúdo" v-model="nota.content">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>conteúdo</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="(nota,index) of notas" :key="nota.id">

            <td>{{ index+1 }}</td>
            <td>{{ nota.title }}</td>
            <td>{{ nota.content }}</td>
          </tr>
        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
/* eslint-disable */ 
import Notas from './service/notas.js'

export default{
  data(){
        return {
            nota: {
              "title":'',
              "content":''
            },
            notas: []
        }
    },

  mounted(){
    this.listar()
  },
  methods:{
    listar(){
      Notas.listar().then(res => {
        this.notas = res.data.data;
      })
    },

    salvar(){
      Notas.salvar(this.nota).then(resposta =>{},
      this.nota = {},
      this.listar()
    ).catch(e => {
        alert ("Título não pode estar vazio")
      })}
  } 
}

</script>

<style>

</style>

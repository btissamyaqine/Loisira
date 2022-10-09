<template>
  <div class="body">
    <div  class="cards">
      <div class="title-card">
        <h1>Nos coups de coeur</h1>
      </div>
      <div class="card-container">
        <ul class="card-wrapper">
          <li v-for="item in activite" :key="item.id"  class="card">
            <img :src="item.photo.url" alt=''>
            <div class="card-content">
              <div class="content-top">
                <div class="content-name">
                  <h3>{{item.nom}}</h3>
                  <span>{{item.ville}},{{item.pay}}</span>
                </div>
                <div class="content">
                  <div class="content-price">
                    <span>A PARTIE DE</span>&nbsp;<h3>{{item.prix.montant}}&#8364;</h3>
                  </div>
                </div>
              </div>
              <div class="content-buttom">
                <div v-for="star in activite" class="content-rating">
                  <i>{{star.evaluation}}</i>
                  
                </div>
                <div class="content-time">
                  <h3>1h</h3>
                </div>
              </div>
                
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
      
</template>
<script>
  import {mapState} from 'vuex';

  export default {

computed: mapState(['activite']),

    async asyncData({$axios}) {
      const api = 'http://localhost:4000/activite'
      const activite = await $axios.$get(api).then((response) => {
        return {activite: response}
      })
     
    },
    methods: {
      getRating() {
        
      }

    }
  // const getRating = () =>{

  // }

  }

</script>
<style>

</style>


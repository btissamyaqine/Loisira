<template>
  <div class="body">
    <div  class="cards">
      <div class="title-card">
        <h1>Nos coups de coeur</h1>
      </div>
      <div class="card-container">
        <ul class="card-wrapper">
          <li v-for="(item, index) in activite" :key="index" class="card">
            <img :src="item.photo.url" alt=''>
            <div class="card-content">
              <div class="content-top">
                <div class="content-name">
                  <h3>{{item.nom}}</h3>
                  <p>{{item.ville}},{{item.pay}}</p>
                </div>
                <div class="content">
                  <div class="content-price">
                    <span>A PARTIE DE</span>&nbsp;<h3>{{item.prix.montant}}&#8364;</h3>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="content-rating">
                  <div class="stars-outer">
                    <Icon />
                  </div>
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
  import Icon from "../../components/elements/Icon.vue";

  import {mapState} from 'vuex';

  export default {
    name: "card",
    components: { Icon },

    computed: mapState(['activite']),

    async asyncData({$axios}) {
      const api = 'http://localhost:4000/activite/'
      const activite = await $axios.$get(api).then((response) => {
        return {activite: response}
      })
     
    },
  
}

</script>
<style>

</style>


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
                  <p>{{item.ville}},{{item.pay}}</p>
                </div>
                <div class="content">
                  <div class="content-price">
                    <span>A PARTIE DE</span>&nbsp;<h3>{{item.prix.montant}}&#8364;</h3>
                  </div>
                </div>
              </div>
              <div class="content-buttom">
                <div class="content-rating">
                  <div class="stars-outer">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
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
  import {mapState} from 'vuex';

  export default {

  computed: mapState(['activite']),

    async asyncData({$axios}) {
      const api = 'http://localhost:4000/activite'
      const activite = await $axios.$get(api).then((response) => {
        return {activite: response}
      })
     
    },
}

</script>
<style>
.stars-outer i{
  font-size: 15px;
}
/* .stars-outer {
  position: relative;
  display: inline-block;
}
.star-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}
.stars-outer::before {
  content: '\f005';
  font-family: 'Font Awsome Free';
  font-weight: 900;
  color: black;
}
.stars-inner::before {
  content: "\f005";
  font-family: 'Font Awsome Free';
  font-weight: 900;
  color: yellow;
} */
</style>


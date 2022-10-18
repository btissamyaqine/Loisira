<template>
  
  <div class="app">
    <div  class="head">
      <div class="top-navBar">
        <div class="top-icon">
          <IconLoisira/>
        </div>
        <div class="nav">
          <HeaderList />
        </div>
      </div>
      <div for="search" class="top-search" >
        <input type="text" v-model="search" class="top-searchBar" >
        <button type="submit" class="top-search-btn">Rechercher</button>
      </div>
    </div>
hey am from filter

    <Filters :filterCards="filterCards"  />
    <div>
      <p v-for="filter in filters" :key="filter" @click="() => filterCards(filter)">
        {{filter}}
      </p>
    </div>
    <!-- <div class="activites">
          <div class="title-activite">
            <h1>Recherche par activite</h1>
          </div>
          <div class="activite-wrapper">
            <div class="activite" @click="toggel($event)">
              <i class="fas fa-skiing" >
                <div class="items" >Sport hiver</div>
              </i>
            </div>
            <div class="activite" @click="toggel($event)">
              <i class="fas fa-swimmer">
                <div class="items">Aquatique</div>
              </i>
            </div>
            <div class="activite" @click="toggel($event)">
              <i class="fas fa-skiing-nordic">
                <div class="items">Randonnée</div>
              </i>
            </div>
            <div class="activite" @click="toggel($event)">
              <i class="fas fa-parachute-box">
                <div class="items">Aérien</div>
              </i>
            </div>
            <div class="activite" @click="toggel($event)">
              <i class="fas fa-basketball-ball">
                <div class="items">Sport d'équipe</div>
              </i>
            </div>
          </div>
      </div> -->
      <div class="cards">
      <div class="title-card">
        <h1>Nos coups de coeur</h1>
      </div>
      <div class="card-container">
        <ul class="card-wrapper">
          <li v-for="card in searchCards" :key="card.id" :card="card" class="card">
            <img :src="card.photo.url" alt=''>
            <div class="card-content">
              <div class="content-top">
                <div class="content-name">
                  <h3>{{card.nom}}</h3>
                  <p>{{card.ville}},{{card.pay}}, {{card.categorie}}</p>
                </div>
                <div class="content">
                  <div class="content-price">
                    <span>A PARTIE DE</span>&nbsp;<h3>{{card.prix.montant}}&#8364;</h3>
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
    
    <Client />
    <Footer />
  </div>
      
</template>
<script>
  import Icon from "../elements/Icon.vue";
  import IconSolide from "../elements/IconSolide.vue";
  import IconLoisira from "../elements/IconLoisira.vue"
  import Client from './Client.vue'
  import Footer from './Footer.vue'
  import HeaderList from "../elements/HeaderList.vue"
  import Filters from './filters.vue'
  // const filters = []

   
  export default {
    name: "AppBody",
    components: { Icon, IconSolide, Client, Footer, IconLoisira, HeaderList, Filters },
    data: () => ({
      cards:[],
      search:'',
      filters:['All', 'Sport', 'Aquatique']
    }),
    computed: {
        searchCards() {
            return this.cards.filter(card => card.ville.toLowerCase().includes(this.search.toLowerCase()) || card.pay.toLowerCase().includes(this.search.toLowerCase()))
          }
        },
    async fetch() {
    this.cards = await this.$axios.$get('http://localhost:4000/cards/')
    }, 
    methods: {
      filterCards(catName) {
      this.resetCards()
      if (catName !== 'All') {
        this.cards = this.cards?.filter((card) => {
          return card.categorie === catName
        })
      }
    },
    resetCards() {
      this.cards = this.$axios.$get('http://localhost:4000/cards/') 
    }
  }
  }  
</script>
<style>

</style>


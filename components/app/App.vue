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
   
    <div class="activites">
          <div class="title-activite">
            <h1>Recherche par activite</h1>
          </div>
          <div class="activite-wrapper">
            <div class="activite" @click="cardsFilter($event)" >
              <i class="fas fa-skiing" >
                <div class="items" >Sport hiver</div>
              </i>
            </div>
            <div class="activite" @click="cardsFilter($event)">
              <i class="fas fa-swimmer">
                <div class="items">Aquatique</div>
              </i>
            </div>
            <div class="activite" @click="cardsFilter($event)">
              <i class="fas fa-skiing-nordic">
                <div class="items">Randonnée</div>
              </i>
            </div>
            <div class="activite" @click="cardsFilter($event)">
              <i class="fas fa-parachute-box">
                <div class="items">Aérien</div>
              </i>
            </div>
            <div class="activite" @click="cardsFilter($event)">
              <i class="fas fa-basketball-ball">
                <div class="items">Sport d'équipe</div>
              </i>
            </div>
          </div>
      </div>
      <div v-if="this.cardsFilterKey?.length > 0" :key="compKey" class="cards">
      <div class="title-card">
        <h1>Nos coups de coeur</h1>
      </div>
      <div class="card-container">
        <ul class="card-wrapper">
          <li v-for="card in (filtred)" :key="card.id" :card="filtred" class="card">
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
    <div v-else >There are no post left. Have you tried adding a category?</div>
    
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

   
  export default {
    name: "AppBody",
    components: { Icon, IconSolide, Client, Footer, IconLoisira, HeaderList, Filters },
    data: () => ({
      cards:[],
      search:'',
      cardsFilterKey: ['Aquatique','Aérien', 'Randonnée', 'Sport hiver'],
      compKey: 0
    }),
    computed: {
        filtred() {
          if(this.search != '' && this.search) {
            return this.cards.filter(card => card.ville.toLowerCase().includes(this.search.toLowerCase()) || card.pay.toLowerCase().includes(this.search.toLowerCase()));

          };
          if(this.cardsFilterKey?.length == 0){
            return;
          } else {
            return this.cards.filter(card => this.cardsFilterKey.includes(card.categorie))
          }
        }
          
        },
    async fetch() {
    this.cards = await this.$axios.$get('http://localhost:4000/cards/')

    }, 
    methods: {
      cardsFilter(event) {
        this.compKey++;
        const element = event.target;

        const text = element.textContent.trim()
        console.log('yay you on this ' + text);
        if(this.cardsFilterKey.includes(text)) {
          this.cardsFilterKey.splice(this.cardsFilterKey.indexOf(text), 1)
        } else {
          this.cardsFilterKey.push(text)
          // console.log(this.cardsFilterKey)
        }
      }
    }

  }  
</script>
<style>

</style>


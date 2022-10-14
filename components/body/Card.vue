<template>
  <div class="body">
    <div  class="cards">
      <div class="title-card">
        <h1>Nos coups de coeur</h1>
        <input class="top-searchBar" @keyup="search($event.target.value)">
      </div>
      <div class="card-container" @set-filters="filtersChanged($event)">
        <ul class="card-wrapper">
          <li v-for="(item, index) in card" :key="index" class="card">
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

  import { mapState } from 'vuex';

  export default {
    name: "card",
    components: { Icon },

    computed: mapState(['card']),
    data: () => ({
      allCards: [],
      filteredCards: [],
      card: [],
      filters: {
        s: ''
      }
  }),
  //   async fetch() {
  //   this.card = await this.$axios.$get('http://localhost:4000/card/')
  // },
  async mounted() {
    const response = await fetch('http://localhost:4000/card/');
    const content = await response.json();
    this.allCards = content;
    this.filteredCards = content.slice(0, this.filters.page * this.perPage);
  },
  methods: {
    search(s) {
      this.$emit('set-filters', {
        ...this.filters,
        s,
        page: 1
      });
    },
    filtersChanged(f) {
      this.filters.s = f.s
      let cards = this.allCards.filter(p => p.ville.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 ||
        p.pay.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0);

    },
  }
  // async fetch ({ store }) {
  //   await store.dispatch('activites/fetchAllActivites')
  // },
  // mounted () {
  //   if (!this.activites) {
  //     this.$store.dispatch('activites/fetchAllActivites')
  //   }
  // }

}

</script>
<style>

</style>


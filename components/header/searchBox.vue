<template>
  <div class="top-search">
    <input class="top-searchBar" >
    <button type="submit" class="top-search-btn">Rechercher</button>
  </div>
  
</template>
<!-- <script>
import debounce from 'lodash/debounce'
import Card from '../body/Card.vue';
export default {
    props: {
        search: {
            type: Function,
            required: true,
        },
    },
    data: () => ({
        searchInput: "",
    }),
    methods: {
        onInputChange: debounce(async function () {
            this.Card = await this.search(this.searchInput);
        }, 300),
    },
    components: { Card }
}
</script> -->

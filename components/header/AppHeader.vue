<template>
  
  <header class="head">
    <div class="top-navBar">
      <div class="top-icon">
        <IconLoisira/>
      </div>
      <div class="nav">
        <HeaderList/>
      </div>
    </div>
    <SearchBox />
  </header>
</template>
<style>

</style>

<script>
import HeaderList from "./HeaderList"
import IconLoisira from "./IconLoisira"
import SearchBox from "./searchBox.vue";
export default {
    name: "AppHeader",
    components: { HeaderList, IconLoisira, SearchBox },

  //   methods: {
  //   async fetchCard(searchInput) {
  //     const { data } = await this.$axios.$get('http://localhost:4000/card', {
  //       search_term: searchInput,
  //     })

  //     return data.card
  //   },
  // },
};
</script>

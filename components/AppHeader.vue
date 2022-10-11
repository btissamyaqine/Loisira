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
    <div class="search">
      <input type="text" class="searchBar">
      <button type="submit" class="search-btn">Rechercher</button>
    </div>
  </header>
</template>
<style>

</style>

<script>
import HeaderList from "../components/elements/HeaderList"
import IconLoisira from "../components/elements/IconLoisira"

export default {
    name: "AppHeader",
    components: {HeaderList, IconLoisira}
};
</script>

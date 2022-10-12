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
    <div class="top-search">
      <input type="text" class="top-searchBar">
      <button type="submit" class="top-search-btn">Rechercher</button>
    </div>
  </header>
</template>
<style>

</style>

<script>
import HeaderList from "./HeaderList"
import IconLoisira from "./IconLoisira"

export default {
    name: "AppHeader",
    components: {HeaderList, IconLoisira}
};
</script>

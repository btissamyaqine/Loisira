<template>
  
  <header class="header">
    <div class="navBar">
      <h1 class="title">Loisira</h1>
        <ul>
          <li><nuxt-link to="#">Reservation</nuxt-link></li>
          <li><nuxt-link to="#">Contact</nuxt-link></li>
        </ul>
        
    </div>
    <div class="search">
      <input type="text" class="searchBar">
      <button type="submit" class="btn" >recherche</button>
    </div>
  </header>
 
 


</template>

<script>
export default {
    name: "AppHeader",
};
</script>

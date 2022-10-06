<template>
  
  <footer class="footer">
    <div class="footer-app">
      <div class="navbar">
        <div class="nav">
          <p class="title">Navigation</p>
          <ul>
            <li>
              <nuxt-link to="#">Reservation</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="propos">
          <p class="title">A propos de nous</p>
          <ul>
            <li><nuxt-link to="#">Notre equipe</nuxt-link></li>
            <li><nuxt-link to="#">Nos conditions d'utilistions</nuxt-link></li>
            <li><nuxt-link to="#">Nos conditions de vente</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="email">
        <div class="mail">
          <p>Inscivez-vous a notre NewsLatter!</p>
          <input type="email" class="adress-mail" placeholder="Adress Email">
        </div>
        <div class="nav-bottom-icon">
          <i class="fab fa-discord"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>

    </div>
    
  
    <div class="loi">
    <span>@2021-Loisirama | Mine of ware developpement templat-Tous droits réservés</span>
    </div>
  </footer>
 
 


</template>

<script>
export default {
  name: "AppHeader"
};
</script>


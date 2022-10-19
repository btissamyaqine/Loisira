<template>
  
  <footer class="footer">
    <div class="footer-app">
      <div class="bottom-navbar">
        <div class="bottom-nav">
          <p class="bottom-nav-title"><b>Navigation</b></p>
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
          <p class="bottom-propos-title"><b>À propos de nous</b> </p>
          <ul>
            <li><nuxt-link to="#">Notre equipe</nuxt-link></li>
            <li><nuxt-link to="#">Nos conditions d'utilistions</nuxt-link></li>
            <li><nuxt-link to="#">Nos conditions de vente</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="email">
        <div class="mail">
          <p><b>Inscivez-vous a notre NewsLatter!</b></p>
          <input type="email" class="adress-email" placeholder="Adress Email">
        </div>
          <IconBottom/>
      </div>
    </div>
    <div class="loi">
      <span>@2021-Loisirama | Mine of ware developpement templat-Tous droits réservés</span>
    </div>
  </footer>
 
 


</template>

<script>
import IconBottom from '../elements/IconBottom.vue';
export default {
    name: "Footer",
    components: { IconBottom }
};
</script>


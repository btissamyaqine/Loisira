<template>
  
  <footer class="footer">
    <div class="footer-app">
      <div class="bottom-navbar">
        <div class="bottom-nav">
          <p class="bottom-nav-title"><b>Navigation</b></p>
          <NavList/>
        </div>
        <div class="propos">
          <p class="bottom-propos-title"><b>À propos de nous</b> </p>
          <FooterList/>
        </div>
      </div>
      <div class="email">
        <div class="mail">
          <p class="email-title"><b>Inscivez-vous a notre NewsLatter!</b></p>
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
import FooterList from '../elements/ProposList.vue';
import NavList from '../elements/NavList.vue';
export default {
    name: "Footer",
    components: { IconBottom, FooterList, NavList }
};
</script>


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

<style>
.footer {
  align-content: center;
  padding-bottom: 5rem;
  width: 100%;
  height: auto;
}
.footer-app {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-family: 'Fira Code', monospace;
}
.navbar {
  display: flex;
  /* justify-content: flex-start; */
}
.nav {
  padding-right: 40px;

}
.nav .title {
  font-size: 1.5rem;
  padding-left: 10px;
  color: brown;
}
.nav ul {
  display: grid;
  list-style-type: none;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 0px;
  
}
.nav a {
   float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  color: brown;

  
}

.propos .title {
  font-size: 1.5rem;
  color: brown;
}
.propos ul {
  display: grid;
  list-style-type: none;
  padding-left: 0px;
  padding-right: 0px;
  margin-right: 0px;
  
}
.propos a {
   float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  color: brown;
  
  
}
span {
  display: grid;
  justify-content: center;
  align-items: center;
  color:rgb(89, 93, 97);
  font-size: 10px;
}

.adress-mail {
  border: none ;
  border-radius: 10px;
  height: 2.6rem;
  width: 18.75rem;
  outline: 0;
  border-right: 0px solid transparent;
  border-radius: 10px;
  padding-left: 10px;
  /* border: 1px solid #555; */
  background-color: rgba(220,220,220,0.5) ;
}
.email {
  color: brown;
  padding-right: 20px;
}
.nav-bottom-icon {
  display: flex;
  justify-content: flex-end;
  /* list-style-type: none; */
  padding: 10px 1px;
}
.nav-bottom-icon i {
  padding-left: 2px;
  padding-right: 2px;
  color: brown;
}
@media screen and (max-width: 768px) {
  .footer-app {
    display: block;
    padding: 0;
  }
   .navbar {
    display: block;
    padding: 0;
  }
  .nav {
    width:100%;
    margin-bottom: 15px;
    
  }
   .navbar .propos  {
    width:100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 15px;
    padding-left: 15px;
  }


  .email{
    width:100%;
    display: inline-flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  .mail {
    width: 90%;
    /* padding-left: 15px; */
  }
  .nav-bottom-icon {
    display: inline-flex;
    justify-content: flex-end;
    align-items:end;
  }
}

</style>
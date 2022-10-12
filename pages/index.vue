<template>
  <div>
    <AppHeader />
    <Activite />
    <Card  />
    <Client />
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "../components/header/AppHeader.vue"
import AppFooter from "../components/footer/AppFooter.vue";
import Activite from "../components/body/Activite.vue";
import Card from "../components/body/Card.vue";
import Client from "../components/body/Client.vue";

export default {
    name: "IndexPage",
    components: { AppHeader, AppFooter, Activite, Card, Client },
  }



</script>

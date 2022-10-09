<template>
  <div>
    <AppHeader />
    <!-- <AppBody /> -->
    <Activite />
    <Card/>
    <Client/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import Activite from "../components/body/Activite.vue";
import Card from "../components/body/Card.vue";
import Client from "../components/body/Client.vue";

export default {
    name: "IndexPage",
    components: { AppFooter, Activite, Card, Client },

    // 
}

</script>

<template>
  <div>
    <AppHeader />
    <AppBody />
    <AppFooter/>
  </div>
</template>

<script>
import AppBody from "../components/AppBody.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
    name: "IndexPage",
    components: { AppBody, AppFooter }
}
</script>

<template>
  <div class="body">
    <div class="clients">
      <div class="client-title">
        <h1>Nos retours clients</h1>
      </div>
      
      <div class="client-container">
        <div v-for="item in client" :key="item.id" class="client">
          <div class="client-wrapper">
            <div class="client-profil">
              <div class="client-avatar">
                <img :src="item.image.url" alt="avatar">
              </div>
            </div>
            <div class="reviews">
              <div class="client-name">
                <strong>{{item.name}}</strong>
              </div>
              <div class="client-comment">
                <p>{{item.comment}}</p>
              </div>
              <div class="client-avis">
                <IconSolide/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
            <button class="button-cl">voir tout les avis</button>
      </div>
    </div>
  </div>
</template>
<script>
  import IconSolide from "../../components/elements/IconSolide.vue";
  import Icon from "../../components/elements/Icon.vue";

  export default {
    name: "client",
    components: { Icon, IconSolide },
    data: () => ({
      client: []
    }),
    async fetch() {
    this.client = await this.$axios.$get('http://localhost:4000/client/')
  },

}

</script>
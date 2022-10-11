<template>
  <div class="body">
    <div class="clients">
      <div class="client-title">
        <h1>Nos retours clients</h1>
      </div>
      
      <div class="client-container">
        <div v-for="(item, index) in client" :key="index" v-bind="client" class="client">
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
            <button class="button-cl">voir plus</button>
      </div>
    </div>
  </div>
</template>
<script>
  import IconSolide from "../../components/elements/IconSolide.vue";
  import Icon from "../../components/elements/Icon.vue";

  import {mapState} from 'vuex';

  export default {
    name: "client",
    components: { Icon, IconSolide },

    computed: mapState(['client']),

     asyncData({$axios}) {
      return $axios.$get('http://localhost:4000/client/')
      .then( response => {
        return {
          client: response
        }
      })
     
    }
}
</script>
<template>
  <div class="body">
    <div class="activites">
        <div class="title-activite">
          <h1>Recherche par activite</h1>
        </div>
        <div class="activite-wrapper">
          <div :class="{'' : status === 'sportSkiing'}" @click="handleStatusFilter('sportSkiing')" class="activite">
            <i class="fas fa-skiing">
              <div class="items">Sport hiver</div>
            </i>
          </div>
          <div :class="{'' : status === 'aquatique'}" @click="handleStatusFilter('aquatique')" class="activite">
            <i class="fas fa-swimmer">
              <div class="items">Aquatique</div>
            </i>
          </div>
          <div :class="{'' : status === 'randonne'}" @click="handleStatusFilter('randonne')" class="activite">
            <i class="fas fa-skiing-nordic">
              <div class="items">Randonnées</div>
            </i>
          </div>
          <div :class="{'' : status === 'aerien'}" @click="handleStatusFilter('aerien')" class="activite">
            <i class="fas fa-parachute-box">
              <div class="items">Aérien</div>
            </i>
          </div>
          <div :class="{'' : status === 'sportEquipe'}" @click="handleStatusFilter('sportEquipe')" class="activite">
            <i class="fas fa-basketball-ball">
              <div class="items">Sport d'équipe</div>
            </i>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default{
  computed: {
    status () {
      return this.$store.state.activites.filter.status
    }
  },
  methods: {
    handleStatusFilter (status) {
      this.$store.dispatch('activites/filterStatus', status)
    },
  },
  
}
</script>
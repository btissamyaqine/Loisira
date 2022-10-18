<template>
  <div>
      <p v-for="filter in filters" :key="filter" @click="() => filterPosts(filter)">
        {{filter}}
      </p>
    </div>
</template>
<script>
  const filters = ['All', 'Sport', 'Aquatique']
  export default {
      props: ['filterPosts', 'filtredPost'],
      data: () => ({
        filters:[],
      })

  }

</script>
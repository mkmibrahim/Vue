<template>
  <img :src="'/images/' + destination.image" />
  <h1>{{ destination.name }}</h1>
  <p>{{ destination.description }}</p>
</template>
<script>
import sourceData from "@/data.json";
export default {
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === parseInt(this.$route.params.id)
      );
    },
  },
};
</script>

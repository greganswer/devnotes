<template>
  <div>
    <p>Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical',
    };
  },
  methods: {
    changeStatus() {
      this.status = 'Normal';
    },
  },
};
</script>

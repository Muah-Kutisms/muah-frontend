<template>
  <v-main>
    <v-container>
      <v-text-field
        v-model="member_id"
        clearable
        type="number"
        label="사번"
        append-outer-icon="mdi-login-variant"
        v-on:click:append-outer="sendId"
        style="max-width: 400px;"
        counter="10"
        max-length="10"
      >
      </v-text-field>
    </v-container>
  </v-main>
</template>

<script>
export default {
  methods: {
    sendId() {
      alert(this.member_id);
    },
  },
};
</script>

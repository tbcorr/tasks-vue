<template>
  <div class="register">
    <h1 class="title is-1">Tasks Vue</h1>
    <p class="subtitle">Create a user and start adding tasks!</p>
    <form class="registration-form">
      <b-field label="Email" v-model="email">
        <b-input type="email"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="text"></b-input>
      </b-field>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'register',

  data () {
    return {
      email: "",
      password: ""
    }
  }
}
</script>

<style lang="scss">
.register {
  width: 33.33%;
}
</style>

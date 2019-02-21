<template>
  <div class="login">
    <h1 class="title is-1">Tasks Vue</h1>
    <p class="subtitle">Login and start adding tasks!</p>
    <form class="login-form" method="post">
      <b-field label="Email" label-for="email">
        <b-input id="email" type="email" name="email" placeholder="email" v-model="email"></b-input>
      </b-field>
      <b-field label="Password" label-for="password">
        <b-input id="password" type="password" name="password" placeholder="password" v-model="email"></b-input>
      </b-field>
      <button class="button is-fullwidth">Submit</button>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      email: "",
      password: ""
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 33.33%;

  h1, p {
    text-align: center;
  }
}
</style>

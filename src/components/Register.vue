<template>
  <div class="register">
    <h1 class="title is-1">Tasks Vue</h1>
    <p class="subtitle">Create a user and start adding tasks!</p>
    <form class="registration-form" method="post">
      <b-field label="First Name" label-for="first-name">
        <b-input id="first-name" type="text" name="firstName" placeholder="first name" v-model="firstName"></b-input>
      </b-field>
      <b-field label="Last Name" label-for="last-name">
        <b-input id="last-name" type="text" name="lastName" placeholder="last name" v-model="lastName"></b-input>
      </b-field>
      <b-field label="Email" label-for="email">
        <b-input id="email" type="email" name="email" placeholder="email" v-model="email"></b-input>
      </b-field>
      <b-field label="Password" label-for="password">
        <b-input id="password" type="text" name="password" placeholder="password" v-model="password"></b-input>
      </b-field>
      <b-field label="Password (Confirm)" label-for="password-confirm">
        <b-input id="password-confirm" type="text" name="passwordConfirm" placeholder="password (confirm)" v-model="passwordConfirm"></b-input>
      </b-field>
      <button class="button is-fullwidth">Submit</button>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'register',

  data () {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  }
}
</script>

<style lang="scss">
.register {
  width: 33.33%;

  h1, p {
    text-align: center;
  }
}
</style>

<template>
  <div class="register">
    <h1 class="title is-1">Tasks Vue</h1>
    <p class="subtitle">Create a user and start adding tasks!</p>
    <form class="registration-form" method="post">
      <b-field label="First Name">
        <b-input type="text" name="firstName" placeholder="first name" v-model="firstName"></b-input>
      </b-field>
      <b-field label="Last Name">
        <b-input type="text" name="lastName" placeholder="last name" v-model="lastName"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input type="email" name="email" placeholder="email" v-model="email"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="text" name="password" placeholder="password" v-model="email"></b-input>
      </b-field>
      <b-field label="Password (Confirm)">
        <b-input type="text" name="passwordConfirm" placeholder="password (confirm)" v-model="email"></b-input>
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
      email: "",
      password: ""
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

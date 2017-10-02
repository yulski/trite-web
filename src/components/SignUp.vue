<template>
    <div id="signup">
        <h2>Sign up</h2>
        <form action="#" method="post">
            <div class="message error" v-if="showError">
                <p v-if="nameInvalid">
                    Name cannot be empty
                </p>
                <p v-if="emailInvalid">
                    Email cannot be empty
                </p>
                <p v-if="passwordInvalid">
                    Password cannot be empty
                </p>
                <p v-if="repeatPasswordInvalid">
                    Repeat password cannot be empty
                </p>
                <p v-if="passwordsDontMatch">
                    Your passwords do not match
                </p>

            </div>
            <div>
                <section class="form-row">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name" required v-model="name"
                        v-bind:class="{'invalid': nameInvalid}" v-on:input="validateForm()">
                </section>
                <section class="form-row">
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" required v-model="email"
                        v-bind:class="{'invalid': emailInvalid}" v-on:input="validateForm()">
                </section>
                <section class="form-row">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" required v-model="password"
                        v-bind:class="{'invalid': passwordInvalid || passwordsDontMatch}"
                        v-on:input="validateForm()">
                </section>
                <section class="form-row">
                    <label for="repeat-password">Repeat password: </label>
                    <input type="password" id="repeat-password" name="repeat-password" required v-model="repeatPassword"
                        v-bind:class="{'invalid': repeatPasswordInvalid || passwordsDontMatch}"
                        v-on:input="validateForm()">
                </section>
            </div>
            <section class="btn-wrapper">
                <input type="submit" value="Sign Up" v-on:click="submitForm">
            </section>
        </form>
    </div>
</template>

<script>
export default {
    name: "signup",
    data: function() {
        return {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            nameInvalid: false,
            emailInvalid: false,
            passwordInvalid: false,
            repeatPasswordInvalid: false,
            passwordsDontMatch: false,
            showError: false,
            hasClickedSubmit: false
        }
    },
    methods: {
        validateForm: function() {
            if(!this.hasClickedSubmit) return;

            this.nameInvalid = this.name.length === 0;
            this.emailInvalid  = this.email.length === 0;
            this.passwordInvalid = this.password.length === 0;
            this.repeatPasswordInvalid = this.repeatPassword.length === 0;
            this.passwordsDontMatch = (this.password !== this.repeatPassword);

            var isValid = !(this.nameInvalid || this.emailInvalid || this.passwordInvalid || this.repeatPasswordInvalid || this.passwordsDontMatch);

            this.showError = !isValid;

            return isValid;
        },
        submitForm: function(e) {
            e.preventDefault();
            this.hasClickedSubmit = true;
            if(this.validateForm()) {
                console.log("Submitting form");
                // TODO submit form
            } else {
                console.log("Form is invalid. Cannot submit");
            }
        }
    }
}
</script>

<style>
    .btn-wrapper {
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }
</style>

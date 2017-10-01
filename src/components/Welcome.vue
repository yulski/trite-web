<template>
    <div id="welcome">
        <h2>Welcome to Trite!</h2>
        <p>Sign up to check just how reliable your internet connection is</p>
        <router-link :to="{ name: 'signup' }">
            <input type="button" value="Sign up">
        </router-link>
        <hr>
        <div id="about">
            <h3>About</h3>
            <p>Every few seconds Trite checks if you have an internet connection. If the connection is down,
                it gets recorded. You can view reports that detail how long the internet was down, the dates and times
                when it went down, and what percentage of the time it is down.</p>
            <p>You can have Trite email you these reports, or send them to your Dropbox</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "welcome"
}
</script>

<style scoped>
    #welcome {
        text-align: center;
    }
    h2 {
        font-size: 180%;
    }
    #about {
        margin-top: 20px;
    }
</style>
<style>
    /* TODO remove this once body height & position get fixed */
    body {
        overflow: hidden;
    }
</style>

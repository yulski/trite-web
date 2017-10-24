<template>
    <nav id="navbar">
        <h1><router-link to="/">TRITE</router-link></h1>
        <ul>
            <li>
                <router-link :to="{ name: 'welcome' }">Welcome</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'signup' }">Sign Up</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'settings' }">Settings</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
    h1 {
        font-size: 250%;
        padding: 0;
        margin-top: 4px;
        margin-bottom: 4px;
        letter-spacing: 20px;
    }
    h1 a {
        font-weight: normal;
        color: #d7d6d6;
        text-decoration: none;
    }
    h1 a:hover {
        letter-spacing: 22px;
    }
    #navbar {
        color: #d7d6d6;;
        background-color: #00120b;
        padding: 4px;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        margin-top: 0;
    }
    li {
        flex-shrink: 1;
        padding: 0 10px;
    }
    li a {
        text-decoration: none;
        font-size: 110%;
    }
</style>

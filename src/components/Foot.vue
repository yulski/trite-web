<template>
    <footer id="foot">
        <p>
            Created by <a href="https://github.com/yulski">Yulski</a> 2017.<br>
            This is just a small personal project.
        </p>
    </footer>
</template>

<script>
export default {
    name: "foot"
}
</script>

<style scoped>
    #foot {
        font-size: 90%;
        text-align: center;
        background: #a1cda8;
        padding: 10px;
        height: 100px;
        display: table;
        width: 100%;
    }
    #foot p {
        display: table-cell;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    a {
        color: #00120b;
        text-decoration: underline;
    }
</style>

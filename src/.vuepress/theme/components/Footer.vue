<template>
    <footer class="footer">
        <p>Copyright © {{ year }} Byte Gem</p>
        <p>蜀ICP备19019315号</p>
    </footer>
</template>

<script>
export default {
    name: 'ThemeFooter',
    computed: {
        year() {
            return (new Date).getFullYear();
        }
    }
}
</script>

<style lang="stylus" scoped>
.footer
    background: #475050;
    text-align: center;
    color: #fff;
    padding: 40px 0;
    font-size: .9rem;
</style>
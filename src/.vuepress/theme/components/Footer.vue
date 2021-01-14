<template>
    <footer class="footer">
        <p>Copyright © {{ year }} Byte Gem</p>
        <p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">蜀ICP备19019315号-1</a>
        </p>
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

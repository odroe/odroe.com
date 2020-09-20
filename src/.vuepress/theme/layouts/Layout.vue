<template>
    <div>
        <ParentLayout />
        <ThemeFooter />
    </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
import ThemeFooter from '@theme/components/Footer.vue';
export default {
    name: 'Layout',
    components: {
        ParentLayout,
        ThemeFooter,
    }
}
</script>
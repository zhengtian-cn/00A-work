<template>
    <div>
        <router-view/>
        <navMenu ref="navMenuRef"></navMenu>
    </div>
</template>

<script>
    import navMenu from '@/components/navMenu.vue'
    export default {
        name: "nav",
        components: {
            navMenu
        },
        data(){
            return{
                // navMenuIndex: 0
            }
        },
        methods: {
            navMenuRefVal(index){
                this.$refs.navMenuRef.navMenuIndex = index;
            }
        }
    }
</script>

<style scoped>

</style>
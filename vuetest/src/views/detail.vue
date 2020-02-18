<template>
    <div>
        <tou></tou>
        我是详情页
        {{list}}
        <!--{{$route}}-->
    </div>
</template>
<script>
    import tou from '../components/header'
    import jiao from '../components/footer'
    export default {
        data() {
            return {
                detailist: [],
                list: '',
            }
        },
        components: {
            tou,
            jiao,
        },
        mounted() {
            this.list = this.$route.query.aa;
            // console.log(this.$route.query.aa);
            this.$http.get('/api/w/website/findGoodsList', {
                params: {
                    info: this.list,
                    platId: 'd0a500ecf8ab41aa9ffe8e18ac6419e1'
                }
            }).then(res => {
                console.log(res);
            })
        },
    }
</script>
<style lang="">

</style>
<template>
    <div>
        <tou></tou>
        <div class="box" >
            <div class="item" v-for="(item,index) in datalist" :key="index">
                <img :src="item.icon" @click="detail(item.name)"/>
                <h3><font color="red">{{item.name}}</font></h3> 
            </div>
        </div>
        <jiao></jiao>
    </div>

</template>
<script>
    import tou from '../components/header'
    import jiao from '../components/footer'
    export default {
        data() {
            return {
                datalist: [],
            }
        },
        components: {
            tou,
            jiao,
        },
        created() {
            this.$http.get('/api/w/website/findGoodsTypeList').then(res => {
                console.log(res);
                this.datalist = res.data.data;
            })
        },
        methods: {
            detail(name) {
                console.log(name);
                this.$router.push('/detail?aa=' + name);
            }
        },
    }
</script>
<style lang="">
    .box {
        width: 90%;
        overflow: hidden;
        margin: 50px auto;
        border: 1px solid red
    }
    
    .item {
        width: 180px;
        height: 200px;
        float: left;
        margin: 10px;
        text-align: center;
        box-shadow: 0px 0px 5px #ccc;
    }
    
    .item img {
        width: 180px;
        height: 160px;
    }
</style>
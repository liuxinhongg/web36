<template>
    <div class="count">
        <h1>简单的计算器</h1>
        <input type="button" value="-" @click="jian" />
        <span>{{num}}</span>
        <input type="button" value="+" @click="add" />        
    </div>
</template>
<script>
    export default {
        // data() {
        //     return {
        //         num: this.$store.state.num,
        //     }
        // },
        //computed（数据同步）是用来监控自己定义的变量，该变量不在data里面定义（声明），直接在computed里面定义，
        // 然后就可以在页面上进行双向绑定展示出结果，或者对其进行操作
        // watch：主要用于监听vue实例的变化，watch监听变量必须在data里面声明才可以使用，
        // watch监听可以是一个变量也可以是一个对象
        computed: {
            num() {
                return this.$store.state.num
            }
        },
        methods: {
            add() {
                // this.num += 5;
                // commit提交状管理里面的mutations的函数名字
                this.$store.commit('increment');
            },
            jian() {
                // this.num -= 5;
                this.$store.commit('mincrement');

            }
        },
    }
</script>
<style lang="">
    .count {
        text-align: center;
    }
    
    .count input {
        width: 30px;
    }
</style>
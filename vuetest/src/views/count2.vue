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
        data() {
            return {
                num: this.$store.state.num,
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
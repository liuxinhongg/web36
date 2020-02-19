<template>
    <div class="count">
        <h1>简单的计算器</h1>
        <input type="button" value="-" @click="jian(3)" />
        <span>{{num}}</span>
        <input type="button" value="+" @click="add(2)" />        
    </div>
</template>
<script>
    export default {
        computed: {
            num() {
                return this.$store.state.num
            }
        },
        methods: {
            add(num) {
                // this.num += 5;
                // commit提交状管理里面的mutations的函数名字
                // this.$store.commit('increment', num);一个参数

                // 多个参数 方法一
                // this.$store.commit('increment', {
                //     n: num,
                //     name: 'zhangsan'
                // });
                // 方法二
                this.$store.commit({
                    type: 'increment',
                    n: num,
                    name: 'zhangsan'
                });
            },
            jian(num) {
                // this.num -= 5;
                this.$store.commit('mincrement', {
                    n: num,
                    name: 'lisi'
                });

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
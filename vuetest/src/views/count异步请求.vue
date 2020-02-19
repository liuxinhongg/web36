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
                this.$store.dispatch('Addaction');

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
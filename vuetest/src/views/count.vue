<template>
    <div class="count">
        <h1>简单的计算器</h1>
        <input type="button" value="-" @click="jian(3)" />
        <span>{{num}}</span>
        <input type="button" value="+" @click="add(2)" /> 
        <h1>{{name}}</h1>   
        <h1>{{age}}</h1>   
        {{count}}    
    </div>
</template>
<script>
    import {
        mapGetters,
        mapState,
        mapActions
    } from 'vuex'
    export default {
        computed: {
            ...mapState({
                num() {
                    return this.$store.state.num
                },
                name() {
                    return this.$store.state.name
                },
                age() {
                    return this.$store.state.age
                },
            }),
            ...mapGetters({
                count: 'count',
            })

        },
        methods: {
            ...mapActions({
                addhandle: 'Addaction',
            }),
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
new Vue({
    el: '#app',
    data: {
        title: "this is vue js life cycle example"
    },
    beforeCreate: function () {
        console.log('beforeCreate()');
    },
    created: function () {
        console.log('created()');
    },
    beforeMount: function () {
        console.log('beforeMount()');
    },
    mounted: function () {
        console.log('mounted()');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate()');
    },
    updated: function () {
        console.log('updated()');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy()');
    },
    destroyed: function () {
        console.log('Destroyed()');
    },
    methods: {
        destroy: function () {
            this.$destroy();
        }
    }
})
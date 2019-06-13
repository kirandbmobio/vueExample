let comp = {
    data: function () {
        return {
            status: 'critical'
        };
    },
    template: `<p>server status {{status}} <button @click="changeStatus"> change</button></p>`,
    methods: {
        changeStatus: function () {
            this.status = 'Hello '
        }
    }
}
new Vue({
    el: '#app',
    components: {
        'my-comp': comp
    }
})
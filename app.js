new Vue({
    el: '#app',

    data: {
        playerLife: 100, 
        monsterLife: 100,
        iniciar: true,
    },
    
    computed: {
        hasResult () {
            return this.monsterLife == 0 || this.playerLife == 0
        },
        
    },

    methods: {

    },

    watch: {

    }

})
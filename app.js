new Vue({
    el: '#app',

    data: {
        playerLife: 100, 
        monsterLife: 100,
        running: false,
    },
    
    computed: {
        hasResult () {
            return this.monsterLife == 0 || this.playerLife == 0
        },
    },

    methods: {
        startGame() {
            this.running = !this.running
            this.monsterLife = 100
            this.playerLife = 100
        },

    },

    watch: {

    }

})
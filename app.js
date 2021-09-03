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
            this.running = true
            this.monsterLife = 100
            this.playerLife = 100
        },
        funcAtack(special) {
           if (special == false) {
               this.hurt(7, 12, false)
           } else {this.hurt(8, 16, true)}
        },

        hurt(min, max, special) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this.playerLife = Math.max(this.playerLife - hurt, 0)
        },

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }

    },

    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }

})
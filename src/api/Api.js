const PlayerAPI = {
    players: [
      { number: 1, name: "Mardianto", desc: "Awali Dengan Bismillah , Akhiri Dengan Alhamdulillah", position: "G" },
      { number: 2, name: "Dian", desc: "Hidup Mulia Atau Mati Syahid", position: "D" },
      { number: 3, name: "Anto", desc: "Selalu Mencoba Memberikan Yang Terbaik", position: "D" },
      { number: 4, name: "April", desc: "Inget Filosofi Pohon", position: "M" },
      { number: 5, name: "Bunny", desc: "Luar Biasa Sekali, Hebat", position: "M" },
      { number: 6, name: "Bawel", desc: "Untuk Kali Ini Saya Lebih Baik Diam", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    },

    menus: [
        { id: 1, name: "Home", position: "H" },
        { id: 2, name: "Article", position: "F" },
        { id: 3, name: "About", position: "A" }
      ],
      allmenu: function() { return this.menus},
      getMenu: function(id) {
        const isMenu = p => p.id === id
        return this.menus.find(isMenu)
      }
  }
  
  
  export default PlayerAPI
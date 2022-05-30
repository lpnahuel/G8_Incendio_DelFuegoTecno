const User = {
    fileName: './data/users.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function () {
        return this.getData();
    },
    
    //buscar usuario por ID
    findByPk: function (id) { 
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    create: function (userData) {

    }
}

console.log(User.getData());
console.log(User.findbyPk(2));

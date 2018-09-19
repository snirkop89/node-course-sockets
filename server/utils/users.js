[{
    id: '/12312j312',
    name: 'Snir',
    room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }

    addUser(id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        let removed
 
        this.users = this.users.filter(user => {
          if (user.id === id) {
            removed = user
            return false
          }
          return true
        })

        return removed
    }

    getUser(id) {
        //return user object
        return this.users.filter(user => user.id === id)[0];
    }

    getUserList(room) {
        let users = this.users.filter(user =>  user.room === room)
        let namesArray = users.map((user) => user.name)

        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor(id, name, room) {
//         this.id = id,
//         this.name = name,
//         this.room = room
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }

// var me = new Person('Snir', 29);
// var desc = me.getUserDescription();
// console.log(desc);
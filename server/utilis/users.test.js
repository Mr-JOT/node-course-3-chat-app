const expect = require('expect');

const {Users} = require('./Users');

describe('Users', () => {
    var users;
    beforeEach( () => {
        users = new Users();
        users.users = [{
           id:'1',
           name: 'Mike',
           room: 'Node Course'

        },{
            id:'2',
            name: 'Joseph',
            room: 'React Course'
 
         },{
            id:'3',
            name: 'Chioma',
            room: 'Node Course'
 
         }];
    }); 

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Joseph',
            room: 'The Office Fans'
        };
        var resUser = users.addUsers(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);

    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should return names for node course', () =>  {
        var userList = users.getUserList('Node Course');
    
        expect(userList).toEqual(['Mike','Chioma'])
    
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Joseph']);
    });

     it('should find user',() => {
        var userId = '2';
        var user = users.getUser(userId);


        expect(user.id).toBe(userId);
     }); 

     it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
     });

    //it('Should return for node course', () => {
     //   var userList = users.getUserList('Node Course');

     //   expect(userList).toEqual(['Mike','Chioma']);
   // });
   // it('Should return for react course', () => {
     //   var userList = users.getUserList('React Course');

      //  expect(userList).toEqual(['Joseph']);
   // });
});
const chats =[
    {
isGroupChat: false,

users: [
    {
     name : "user1",
     email : "user1@gmail.com",
    },

    {
        name: "user2",
        email: "user2@gmail.com",
    }
    

    ],
    _id: "100020003",
    chatName: "friends",

},

{

    isGroupChat: true,

    users: [
        {
         name : "user1",
         email : "user1@gmail.com",
        },
    
        {
            name: "user2",
            email: "user2@gmail.com",
        }
        
    
        ],
        _id: "1000200030004",
        chatName: "friends_circle",
    
}

]

module.exports = {chats};
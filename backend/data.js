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
    _id: "1",
    chatName: "friends",

},

{
    isGroupChat: false,
    
    users: [
        {
         name : "user3",
         email : "user3@gmail.com",
        },
    
        {
            name: "user4",
            email: "user4@gmail.com",
        }
        
    
        ],
        _id: "3",
        chatName: "friends1",
    
    },


    {
        isGroupChat: true,
        
        users: [
            {
             name : "user5",
             email : "user5@gmail.com",
            },
        
            {
                name: "user6",
                email: "user6@gmail.com",
            }
            
        
            ],
            _id: "4",
            chatName: "friends2",
        
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
        _id: "2",
        chatName: "friends_circle",
    
},
{

    isGroupChat: true,

    users: [
        {
         name : "us1",
         email : "us1@gmail.com",
        },
    
        {
            name: "us2",
            email: "us2@gmail.com",
        }
        
    
        ],
        _id: "7",
        chatName: "friends_circle_official",
    
}
,

{

    isGroupChat: false,

    users: [
        {
         name : "usg2",
         email : "usg2@gmail.com",
        },
    
        {
            name: "usg2",
            email: "usg2@gmail.com",
        }
        
    
        ],
        _id: "8",
        chatName: "usersgrp",
    
}

]

module.exports = {chats};
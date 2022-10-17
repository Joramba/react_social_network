let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are u?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 21 },
            { id: 3, message: "Abrakadarawe", likesCount: 2321 },
            { id: 4, message: "TRRRRRRRRRRRRRRRRRRRR", likesCount: 32 },
        ],
    },
    dialogsPage: {
        messagesData: [
            { id: 1, message: 'Hello', from: 'me' },
            { id: 2, message: 'How are u?!', from: 'me' },
            { id: 3, message: 'YUooooo!', from: 'user' },
        ],
        dialogsData: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Jakub' },
            { id: 3, name: 'Georgiu' },
            { id: 4, name: 'Maksim' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Alex' },
        ]
    },
    sitebar: {
        friendslist: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Georgiu' },
            { id: 3, name: 'Victor' },
        ]
    }
}

export default state;
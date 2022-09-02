//Problem 1

const logPost = function (postId) {
    const getId = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    getId
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(
                `Title: ${data.title}
                Post: ${data.body}`
            )
        })
}

// logPost(5)

//Problem 2

const logUsers = () => {
    const getUsers = fetch(`https://jsonplaceholder.typicode.com/users/`)

    getUsers
        .then(response => {
            return response.json();
        })
        .then(data => {
            let userName = data.map(function (user) {
                return user.name
            }).join(", ")
            console.log("Get Users: ", userName)
        })
}

// logUsers()

//async & await

/*
const logUsers = async function () {
    const getUsers = await fetch("https://jsonplaceholder.typicode.com/users/")
    const json = await getUsers.json()
    const users = json.map(
        function (user) {
            return user.name
        }).join(", ")
    console.log(users)
}

logUsers()
*/

// Problem 3
/*
const getBizUsers = () => {
    const getBiz = fetch(`https://jsonplaceholder.typicode.com/users`);

    getBiz
        .then(response => {
            return response.json();
        })
        .then(data => {
            let findBiz = data.filter(function (user) {
                if (user.email.includes('biz')) {
                    return user
                }
            })
            console.log(findBiz)
        })

}

getBizUsers()
*/

//async & await

const getBizUsers = async function () {
    const getBiz = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await getBiz.json();
    const findBiz = json.filter(function (user) {
        if (user.email.includes('biz')) {
            return user
        }
    })
    console.log("Get Biz Users: ", findBiz)
}

// getBizUsers()

// Problem 4

/*
const longestPost = () => {
    const getPost = fetch(`https://jsonplaceholder.typicode.com/posts`);

    getPost
        .then(response => {
            return response.json()
        })
        .then(data => {
            sortPost = data.sort(
                function (a, b) {
                    return b.body.length - a.body.length
                })
                console.log("longest Post: ", sortPost[0])
        });
}

longestPost()
*/


//Async & Await
const longestPost = async function () {
    const getPost = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const json = await getPost.json();
    const sortPosts = json.sort(function (a, b) {
        return b.body.length - a.body.length
    })
    console.log("longest Post: ", sortPosts[0])
}

// longestPost()

// Problem 5
// This database has 200 `todos`. Write a function called `getCompletedTasks` that logs an array of all of the completed tasks.

/*
const getCompletedTasks = () => {
    const getTasks = fetch(`https://jsonplaceholder.typicode.com/todos`);

    getTasks 
        .then(response => {
            return response.json()
        })
        .then(data => {
            const completeTask = data.filter(function (task) {
                if (task.completed === true) {
                    return task
                }
            })
            console.log(completeTask)
        })
}

// getCompletedTasks()
*/

const getCompletedTasks = async function () {
    const getTasks = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    const json = await getTasks.json();
    const completeTask = json.filter(function (task) {
        if (task.completed === true) {
            return task
        }
    })
    console.log(completeTask)
}

getCompletedTasks()

//Problem 6
// Write a function, `displayPhotos`, that displays a grid of 9 photos in the browser.

/*
const displayPhotos = () => {
    const getPhotos = fetch(`https://jsonplaceholder.typicode.com/photos`);

    getPhotos
        .then(response => {
            return response.json()
        })
        .then(data => {
            let photos = data.slice(0, 9)
            console.log(photos)
            document.body.innerHTML = photos.map(function (photo) {
                return `<img src="${photo.url}" alt="${photo.title}">`
            }).join("")
        })
}

// displayPhotos()
*/

//async & await

const displayPhotos = async function () {
    const getPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos`);

    const json = await getPhotos.json();
    let photos = json.slice(0,9)
    document.body.innerHTML = photos.map(function (photo) {
        return `<img src="${photo.url}" alt="${photo.title}">`
    }).join("")
}

displayPhotos()

//Problem 7
// Write a function, `findClosest`, that logs the user that is geographically closest to where you are currently sitting.


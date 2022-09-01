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

logPost(5)

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
            console.log(userName)
        })
}

logUsers()

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

const getBizUsers = async function() {
    const getBiz = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await getBiz.json();
    const findBiz = json.filter(function (user) {
        if (user.email.includes('biz')) {
            return user
        }
    })
    console.log(findBiz)
}

getBizUsers()

// Problem 4


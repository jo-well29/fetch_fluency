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
                    let userName = data.map(function(user){
                        return user.name
                    })
                    console.log(userName)
                })
}

logUsers()

//async & await

/*
const logUsers = async function () {
	const usersReq = await fetch("https://jsonplaceholder.typicode.com/users/")
	const json = await usersReq.json()
	const users = json.map(
		function (user) {
			return user.name
		}).join(", ")
	console.log(users)
}

logUsers()
*/

// Problem 3




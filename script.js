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



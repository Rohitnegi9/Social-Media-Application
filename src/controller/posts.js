const { Posts, Users } = require('../db/models')

async function createNewPost(userId, title, body){
    const post = await Posts.create({
        title,
        body,
        userId,
    })

    return post
}


async function findAllPosts(query){
    const posts = await Posts.findAll({include: [Users]})

    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}

/*
async function task() {
    console.log(await createNewPost(1, 'This is a sample 1', 'Body of 1 post')),

    console.log(await createNewPost(2, 'This is a sample 2', 'Body of 2 post'))

    const posts = await showAllPosts()
    for(let p of posts){
        console.log(`${p.title}\n author: ${p.user.username}\n${p.body}\n==========`)
    }

}

task()*/
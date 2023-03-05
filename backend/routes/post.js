import express from 'express'
const router = express.Router()
import Post from '../model/Post.js'

router.get('/ping',(req,res) => {
    res.json({status: 'good'})
})

router.get('/',(req,res) => {
    res.json('This is the get route for for all posts!!!!')
})

router.get("/:id",async (req,res) => {
    const postId = req.params.id
    const post = await Post.findById(postId)
    console.log(post)
    return res.json(post)
})

router.delete("/:id", async (req,res) => {
    try {
        const postId = req.params.id
        Post.deleteOne({_id: postId})
            .then(result => (console.log(result)))
    } catch(error) {
        console.log(error)
    }
})

router.post("/", async (req,res)=> {
    console.log('hit?')
    console.log(req.body)
    const post = await Post.create({
        name:'hard coded'
        // name: req.body.name,
        // year: req.body.year,
        // caffine_content: req.body.caffine_content,
        // caffine_percentage: req.body.caffine_percentage
    })
    console.log(post)
    post.save()
})




export default router

// ### Post Routes
// | HTTP Method 	|     Route     	|      Parameters     	| Return                                                                	|
// |:-----------:	|:-------------:	|:-------------------:	|-----------------------------------------------------------------------	|
// |     GET     	| /post/ping        |          None        	| returns a {'status': 'good'}                                          	|
// |     GET     	| /post         	| order - [asc, desc] 	| index of all posts - default asc by post date                             |
// |     GET     	| /post/\<id>   	|         None        	| Returns single post with matching id                                   	|
// |     POST    	| /post         	|         None        	| Creates a new post and returns it                                     	|
// |    DELETE   	| /post/\<id>   	|         None        	| Destroys a post in the database - returns if deletion was a success 	    |

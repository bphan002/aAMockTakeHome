import express from 'express'
const router = express.Router()
import Coffee from '../model/Coffee.js'

router.get("/ping",(req,res) => {
    res.json({status:'good'})
})

router.get("/",(req,res) => {
    res.json('This is the get route for coffee!!')
})

router.get("/:id",async (req,res) => {
    const coffeeId = req.params.id
    const coffee = await Coffee.findById(coffeeId)
    console.log(coffee)
    return res.json(coffee)
})


router.post("/", async (req,res)=> {
        console.log(req.body)
        const coffee = await Coffee.create({
            name:'hard coded'
            // name: req.body.name,
            // year: req.body.year,
            // caffine_content: req.body.caffine_content,
            // caffine_percentage: req.body.caffine_percentage
        })
        console.log(coffee)
        coffee.save()
})

router.delete("/:id", async (req,res) => {
    try {
        const coffeeId = req.params.id
        Coffee.deleteOne({_id: coffeeId})
            .then(result => (console.log(result)))
    } catch(error) {
        console.log(error)
    }
})


export default router


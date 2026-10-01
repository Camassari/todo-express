import express from "express"
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Olá, Mundo!")
})

router.post('/', (req, res) => {
    const body = req.params.body
    console.log(body)

    res.status(204).send()
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    res.status(204).send()
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.status(204).send()
})

export default router
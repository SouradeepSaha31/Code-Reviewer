import {genAi} from "../services/ai.services.js"

const review_code = async (req, res) => {
    try {
        let prompt = req.body.code
        let review = await genAi(prompt)
        res.status(200).send({review})
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export {review_code}
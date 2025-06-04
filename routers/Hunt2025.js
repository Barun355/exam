import { Router } from "express";


const router = Router()


router.get("/", (_, res) => {
    res.send("<h4>This is the First test conducted by Code First Community. Make the get api request to <b>/api/2025/first</b> and start the test.</h4>")
})


router.get("/first", (_, res) => {

    res.cookie('codefirst', "DONE_COOKIE_QUERY", )
    res.json({ message: "It's not over yet. Find the key, value pair and add it into the query. Then make the post request to '/api/2025/first'." })
})

router.post("/first", (req, res) => {
    const query = req.query;

    console.log(query)
    if (!Object.keys(query).includes('codefirst')) {
        return res.status(400).json({ 
            error: "You are missing key pair values in query. Try again."
        });
    }

    if (query.codefirst.toLowerCase() !== "DONE_COOKIE_QUERY".toLowerCase()) {
        return res.status(400).json({ 
            error: "You are almost there, but you miss something. Try again."
        });
    }

    return res.json({ message: "Hurray you got it." });
})

export default router;
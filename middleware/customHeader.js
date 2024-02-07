const customHeader = (req, res, next) =>{
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === "luis01") {
            next()
        }else {
            res.status(403);
            res.send({error: "API-key-incorrecta"});
        }
    } catch (e) {
        res.status(403);
        res.send({error: "ERROR_EN_CUSTOM_HEADER"}); 
    }
}



module.exports = customHeader;
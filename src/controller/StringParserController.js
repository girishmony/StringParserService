let stringParserService = require("../service/StringParserService");

let v1Parser = async (req, res) => {
    let {data} = req.body;
    let resObj = await stringParserService.v1Parser(data);
    res.send(resObj)
}

let v2Parser = async (req, res) => {
    let {data} = req.body;
    let resObj = await stringParserService.v2Parser(data);
    res.send(resObj)
}

module.exports =  {v1Parser,v2Parser}
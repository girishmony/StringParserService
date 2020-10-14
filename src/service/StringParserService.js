
let v1Parser = data=> {
    return new Promise((resolve, reject) => {
        try {
            let resObj = {
                statusCode: 200,
                data:  {
                    firstName: data.substring(0,8),
                    lastName: data.substring(8,18),
                    clientId: data.substring(18,data.length)
                }
            }
            return resolve(resObj);
        } catch (error) {
            reject(error);
        }
    })
}

let v2Parser = data=> {
    return new Promise((resolve, reject) => {
        try {
            let resObj = {
                statusCode: 200,
                data:  {
                    firstName: data.substring(0,4),
                    lastName: data.substring(8,15),
                    clientId: `${data.substring(18,21)}-${data.substring(21,data.length)}`
                }
            }
            return resolve(resObj);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports =  {v1Parser,v2Parser}
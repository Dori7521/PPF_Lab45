function promises(){
    const successfulPromise = timeout(100).then(result => `success: ${result}`),
    const failingPromise = timeout(200,true).then(null,error => Promise.reject(`niepowodzenie: ${error}`),)
    const recoveredPromise = timeout(300,true).then(null, error => Promise.resolve(`nie powiodzło się i odzyskano: ${error}`),)
    successfulPromise.then(log,logError)
    failingPromise.then(log, logError)
    recoveredPromise.then(log,logError)
}

function asyncAwaits(){
    async function successfulAsyncAwait(){
        const result = await timeout(100)
        return `sukces: ${result}`
    }

    async function failedAsyncAwait(){
        const result = await timeout(200,true)
        return `nie powiodło się: ${result}`   
    }

    async function recoveredAsyncAwait(){
        let result
        try {
            result = await timeout(300, true)
            return `nie powiodło się: ${result}`
        }  catch (error) {
            return `nie powiodło się i odzyskało: ${error}`
        }
    }

    successfulAsyncAwait().then(log,logError)
    failedAsyncAwait().then(log,logError)
    recoveredAsyncAwait().then(log,logError)
    
}

function log(...args){
    console.log(...args)
}

function logError(...args){
    console.error(...args)
}


//Najwazniejszy element asynchronicznych działań

function timeout(duration = 0, schuldReject = false){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (schuldReject){
                reject(`rejected after ${duration}ms`)
            }else{
                resolve(`resolved after ${duration}ms`)
            }
        }, duration)
    })
}
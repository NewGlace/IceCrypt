const WebSocket = require("ws");

const WebSocketRequest = async ({type, token, text}) => {
    return new Promise(async (resolve, _) => {
      resolve(await WebSocketRequest2({type, token, text}))
    })
  
    function WebSocketRequest2({type, token, text}) {
        return new Promise(async (resolve, _) => {
            const wsClient = new WebSocket("ws://kaniwork.com:2323");

            wsClient.onopen = event => {
                wsClient.send(JSON.stringify({ type:type, token: token, text: text}));

                wsClient.onmessage = event => { 
                    try {
                        const object = JSON.parse(event.data);
                        resolve(object)
                    } catch (error) {
                        resolve({type:"error", content: error})
                    }
                  };  
              
                wsClient.onclose = event => {
                    if (event.wasClean) console.log("close");
                    else console.log("die");
                };
            
                wsClient.onerror = error => {
                    console.log("[error]", error.message);
                };
            }
        })
    }
}

module.exports = {
    WebSocketRequest
};
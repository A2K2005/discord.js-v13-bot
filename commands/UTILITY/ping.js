module.exports = {


    name : "ping",
pro : true,
    run : async (client,message,args)=> {





      message.channel.send({content : `pong! ${client.ws.ping}`})  
    }
}

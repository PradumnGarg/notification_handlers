const Handlebars = require("handlebars");

var sender={
    id: '1230',
    name: 'SUNIL',
    receiverid: '1232',
   };

var activeReceivers= {
     id: '1231', 
     name : 'PRADUMN'
    };

var passiveReceivers= [
    {
        id: '1232',
        name: 'Rajdip'
    },

    {
        id: '1233',
        name: 'Suman'
    } 
]

var Receiver= (activeReceivers.id==sender.receiverid)?"you":activeReceivers.name;
 

const template = Handlebars.compile("{{SENDER}} has assigned a task to {{RECEIVER}}");

var notificationText=template({ SENDER :sender.name , RECEIVER : Receiver });

console.log(notificationText);



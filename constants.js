//Data available through API Call
var sender={
    id: '1230',
    name: 'SUNIL',
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

//Exporting Data
module.exports={
    sender,
    activeReceivers,
    passiveReceivers
}
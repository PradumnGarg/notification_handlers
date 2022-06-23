//Importing modules
const Handlebars = require("handlebars");
const constants=require("./constants");

//Calling when task assigned and notification sent to the same person
modularizeData(constants.sender,constants.activeReceivers,constants.activeReceivers);

//Calling when task assigned and notification sent are to different person
modularizeData(constants.sender,constants.activeReceivers,constants.passiveReceivers);



//Moudlarizing data received and generating templates based on same
function modularizeData(sender,activeReceivers,notifyListner)
 
{

    //for active receiver
    if(activeReceivers.id==notifyListner.id)
      {
    generateTemplate(sender,"YOu");
         }
    else
      {
    //for passive listners
       for (const x of notifyListner)
        {
              generateTemplate(sender,activeReceivers.name);
           }
       }
    
    }


//Function to generate templates and print out notification text
function generateTemplate( sender ,Receiver ){

    const template = Handlebars.compile("{{SENDER}} has assigned a task to {{RECEIVER}}");
    
    var notificationText=template({ SENDER :sender.name , RECEIVER : Receiver });
    
    console.log(notificationText);

}





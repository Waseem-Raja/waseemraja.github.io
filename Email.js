

// script.js
function SendMail() 
{
    var params =
    {
        from_name: document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_fw5gb5v","template_rbal1mh",params).then(function(res){
        alert("email sent sucessfully");
         document.getElementById("fullName").value="";
         document.getElementById("email_id").value="";
         document.getElementById("message").value="";
    })
   
}


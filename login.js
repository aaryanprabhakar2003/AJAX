$(document).ready(function() {
    get_btn=document.getElementById("btn1");
    get_btn.addEventListener("click",buttonClickHandler);
    function buttonClickHandler(){ 
       // console.log("buttonClickHandler")
       const xhr=new XMLHttpRequest();
       xhr.open("GET","login.json",true);
       xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            //console.log(obj);
        
           // $("#btn1").click(function(){ 
                let str=$("#username").val();
                let str1=$("#password").val();
                //console.log(str);
                for(keys in obj.employee){
                  //  console.log(obj.employee[key]);
                    if(obj.employee[keys].name==str&& obj.employee[keys].password==str1){
                        alert("LOGGED IN")
                        break;
                    }
                   
            

                   

                }
                if(obj.employee[keys].name!=str&& obj.employee[keys].password!=str1){
                    alert("INVALID CREDENTIALS")
                    
                }
               
                
            //})
        }
        
        
    }  
    xhr.send();
}
});
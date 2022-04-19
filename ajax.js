$(document).ready(function(){
    let g_btn = document.getElementById('btn1');
    g_btn.addEventListener('click',buttonClickHandler)
    function buttonClickHandler() {
        console.log("you have clicked the get button!");
        const xhr = new XMLHttpRequest();
        xhr.open('GET','ajaxServer.txt',true)
        xhr.onprogress=function(){
            console.log("on progres ......")
        }
        xhr.onload=function() {
            if(this.status==200){
                alert(this.responseText);
            }
            else{
                console.log("server error occured")
            }
        }
        xhr.send();
    }

});
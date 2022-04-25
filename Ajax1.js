let get_btn = document.getElementById("btn1");
get_btn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("you have clicked the Get button");
    // create the instance of XMLHttpRequest Object

    const xhr = new XMLHttpRequest();
    // Open Request

    xhr.open('GET',"data.json", true);
    //xhr.getResponseHeader('Content-Type','application/json');
    // when response is ready to deliver from server to client
    xhr.onprogress = function () {
        console.log("in progress....");
    }

    xhr.onreadystatechange = function () {
        console.log("ready state is", xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            console.log(`<li>$(obj.employee[0]).name</li>`);

            let lst = document.getElementById("list");
            str = "";
            for (key in obj.employee) {
                str += `<li>$(obj.employee[0])</li>`;


            }
            lst.innerHTML = str;
        }

        else {
            console.error("Some Error occured");
        }
    }
    xhr.send();
    console.log("fetching data from server is completed")
    // send the request to the server
    /*prmtrs = {"name":"Ram","salary":"12000","age" : "25"};
    xhr.send(prmtrs);
    console.log("work done.....!");*/

}

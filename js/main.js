// start buttons function 
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll("button").forEach(function(buttons){
        buttons.onclick= function(){
            document.querySelector("#hello").style.color = buttons.dataset.color
        }
    })
})
// End buttons function 

// start form function 
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit = function(){
        value = document.querySelector("#input").value;
        error = document.querySelector("#error");
        // error.className = "error"
        // error.setAttribute("id","warning")
        output = document.querySelector("#output");
        if (value == "") {
            // error.innerHTML = "please enter data";
            return false;
        }else {
        myLi = document.createElement("li");
        myLi.innerHTML = value ;
        output.append(myLi) ;
        document.querySelector("#input").value = ""
        return false ;
    }
    }
})
// End form function 







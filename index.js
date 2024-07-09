function ShowMyName() {

    alert("successfully")
}

function ShowMyName() {

    alert("successfully")
}


var count = 0;
function IncDec(type) {
    
   
    if (type === "plush") {
        count = count + 1;
    } else {
        count = count - 1;
    }
    document.getElementById("ptag").innerText = count;
}

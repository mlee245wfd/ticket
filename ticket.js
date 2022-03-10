
function submit(){
    if(localStorage.setItem!=0)
        localStorage.setItem("count", Number(localStorage.get))

    document.getElementById("count").innerHTML = localStorage.getItem("count")
}
var x=new XMLHttpRequest()
x.send("precisetools.netlify.app/navbar");
x.responseType = "document"
x.onloadend = () => {
    document.querySelector("header").innerHTML = x.responseXML
}
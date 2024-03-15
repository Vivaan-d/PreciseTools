var x=new XMLHttpRequest()
x.responseType = "document"
x.open("GET", "https://precisetools.netlify.app/navbar")
x.send()
x.onloadend = () => {
    document.querySelector("header").innerHTML = x.responseXML.documentElement.innerHTML
}
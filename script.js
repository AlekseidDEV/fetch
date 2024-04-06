"use strict"

const sendData = (data) => {
    let xhr = new XMLHttpRequest()

    xhr.open('POST', "https://jsonplaceholder.typicode.com/posts")
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
        if(xhr.status < 205){
            console.log(xhr.response);
        } else{
            console.error("ошибка запроса " + xhr.status);
        }
    }

    xhr.send(JSON.stringify(data))
}

const getData = () => {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'db.json')

    xhr.onload = () => {
        if(xhr.statusText === 'OK'){
            const data = JSON.parse(xhr.response)
            sendData(data)
        } else{
            console.error("ошибка запроса" + xhr.status);
        }
    }

    xhr.send()
}

document.addEventListener('DOMContentLoaded', () => {
    getData()
})
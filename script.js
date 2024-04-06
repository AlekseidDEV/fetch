"use strict"

const getData = () => {
return fetch('db.json')
    .then(res => res.json())
}

const sendData = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

document.addEventListener('DOMContentLoaded', () => {
        getData()
            .then(data => {
                sendData(data)
                    .then(data => {
                        console.log(data)
                        console.log('отправка успешна');
                    })
                    .catch(() => console.error())
            })
            .catch(() => console.error())
})
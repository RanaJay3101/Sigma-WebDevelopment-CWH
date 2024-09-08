function createCard(title,cName,views,months,duration,thumbline){
    let html = 
    `<div class="card">
            <div class="image">
                <img src="${thumbline}"
                    alt="this is image">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>
                    ${title}
                </h1>
                <p>${cName} . ${views} views . ${months} months ago </p>
                <p></p>
            </div>
        </div>
    `;

    document.querySelector('.container').innerHTML += html;

}

createCard('Mera first video let\'s explore','Jay Rana ',1000,2,'1:30','https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA');
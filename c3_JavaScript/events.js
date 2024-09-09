
button = document.getElementById('btn');

let count = 0;

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener('mouseenter',()=>{
    count++;
    console.log('You clicked me');
    document.querySelector('.rj').innerHTML = count;
    
});


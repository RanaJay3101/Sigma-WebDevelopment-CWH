console.log("Welcome to DOm tut");

let boxes = document.getElementsByClassName('box');
console.log(boxes);

boxes[2].style.backgroundColor = 'yellow';

document.querySelectorAll('.box').forEach(e=>{
    e.style.backgroundColor="red";
    e.style.color="white";
})



/*
document.getElementById('idname').innerHTML -> return the innerHTML of the element
document.getElementById('idname').innerText -> return the text of the element
document.getElementById('idname').style -> return the style of the element
document.getElementById('idname').classList -> return the classList of the element
document.getElementById('idname').className -> return the className of the element
document.getElementById('idname').classList.add('newclass') -> add new class to the element
document.getElementById('idname').classList.remove('newclass') -> remove class from the element
document.getElementById('idname').classList.toggle('newclass') -> toggle class from the element
document.getElementById('idname').classList.contains('newclass') -> check if class is present or not
document.getElementById('idname').classList.replace('oldclass','newclass') -> replace class with new class
document.getElementById('idname').classList.item(0) -> return the class at index 0
document.getElementById('idname').classList.length -> return the length of classList
document.getElementById('idname').setAttribute('style','color:red') -> set attribute to the element
*/
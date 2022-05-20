document.querySelector('#submit').addEventListener('click',finish())

document.querySelector('.thankYou').innerHTML=" "

function finish(){
    output="Thank You for contacting us someone from Cardinal Group reach out to you within 24 busniess hours."
    document.querySelector('.thankYou').innerText=output
}
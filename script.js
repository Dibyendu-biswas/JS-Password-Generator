const btn =document.querySelector("button")
const img =document.querySelector("img")
const input =document.querySelector("input")

let uppercase="ABCDEFGGHIJKLMNOPQRSTWXYZUVQ"
let lowercase="abcdefghijklmnopqrstuvwxyz"
let number="1234567890"
let symbol="!@#$%^&*(){}[]~"
length=16;
let allchar=uppercase + lowercase + number + symbol

const generate=()=>{
    let password=""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += symbol[Math.floor(Math.random() * uppercase.length)]
    password += number[Math.floor(Math.random() * uppercase.length)]
    while( length > password.length){
        password +=allchar[Math.floor(Math.random() * allchar.length)]
    }
    input.value=password
}
btn.addEventListener("click",generate)
img.addEventListener("click",()=>{
    input.select()
    document.execCommand("copy")
})
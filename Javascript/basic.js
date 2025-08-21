// let str = "Ajay";
// for(let ch of str){
//     console.log(ch)
// }
const student = {
    name : "Sakshi Singh",
    course : "BCA"
}
for(let key in student){
    console.log(`key is ${key} and value is ${student[key]}`);
}
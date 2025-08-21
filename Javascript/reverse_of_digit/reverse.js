function reverseOfDigit(){
    let num = document.getElementById("num").value;
    let rem=0,rev=0;
    while(num>0){
        rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num/10)
    }
    document.getElementById("output").innerHTML = rev;
}
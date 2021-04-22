var answer = +prompt("Qo'ylar soni")
var jovob = '';

for (let i = 0; i < answer; i++) {
    if (i < 1) {
        jovob += ((i + 1) +  "qo'y..., ");
    } else if (i >= 1) {
        jovob += ((i + 1) +  "qo'ylar..., ");
    }
}
console.log(jovob);


let n1 = 0, n2 = 1;

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
    let next = n1 + n2;
    console.log(next);
    n1 = n2;
    n2 = next;
}

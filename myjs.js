let temp = '';
for (let i = 0; i < 10; i++) {
    temp += "<tr>";
    for (let j = 1; j < 10; j++) {
        temp += "<td>";
        temp += j + "x" + i + "=" + i * j;
        temp += "</td>";
    }
    temp += "</tr>";
}
document.getElementById("bcc").innerHTML = temp;

function setName() {
    var full_name = document.getElementById("userInput").value;
    document.getElementById("name").innerHTML = full_name;
}

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    data.name = decodeURI(data.name);
    data.number = decodeURI(data.number);
    data.dob = decodeURI(data.dob);
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('number').innerHTML = data.number;
    document.getElementById('badgedob').innerHTML = data.dob;
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
h = n.getHours() % 12;
if (h == 0) {
    h = 12
}
min = ('0' +  n.getMinutes()).slice(-2);
ampm = " AM";
if (n.getHours() > 12) {
    ampm = " PM";
}
document.getElementById("now").innerHTML = m + "/" + d + "/" + y + " " + h + ":" + min + ampm;
tmrrw = d+1
document.getElementById("tomorrow").innerHTML = m + "/" + tmrrw + "/" + y + " 10:00 AM";

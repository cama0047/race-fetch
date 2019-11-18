// initial
document.addEventListener('DOMContentLoaded', init);

// initial function
function init() {

    // links
    let datafile1 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json');
    let datafile2 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json');


    // Start
    // will return the faster
    Promise.race([datafile1, datafile2])
        .then(response => response.json())
        .then(go)
        .catch(err => {
            console.log(err);
        })




function go(prom) {
    let div = document.getElementById('output');
    let h2 = document.createElement('h2');
    type = prom.type.toUpperCase();
    h2.textContent = type;
    div.appendChild(h2);

    let arr = prom.data;
    if (prom.type == 'archer') {
        arr.forEach(element => {
            let h3 = document.createElement('h3');
            h3.textContent = element.id + ' ' + element.first_name + ' ' + element.last_name;
            div.appendChild(h3);
        });
    } else if (prom.type == 'The Big Lebowski') {
        arr.forEach(element => {
            let p = document.createElement('p');
            fullName = element.first_name + element.last_name;
            p.textContent = element.id + ' ' + element.character + ' ' + element.actor;
            div.appendChild(p);
        });
    } else {
        console.log(err);
    }
}

}
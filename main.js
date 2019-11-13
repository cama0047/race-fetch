const url1 = 'https://jsonbox.io/box_7ebd8cb0b8fb187873ef'
const url2 = 'https://jsonbox.io/box_82b5a4aa7a4a71abaa80'



let log = console.log;

let datafile1 = fetch('https://jsonbox.io/box_7ebd8cb0b8fb187873ef');
let datafile2 = fetch('https://jsonbox.io/box_82b5a4aa7a4a71abaa80');

Promise.all([datafile1, datafile2])
    // .then(response => console.log(response))
    .then(files => {
        files.forEach(file => {
            process(file.json());
        })
        // file[0].json()
        // file[1].json()

    })
    .catch(err => console.log(err));


function process(prom) {

    prom.then(data => {

        let p = document.createElement('p');
        p.textContent = data.type;
        document.getElementById('output').appendChild(p);


    })

}
let datafile1 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json');
let datafile2 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json');

Promise.race([datafile1, datafile2])
    // .then(response => console.log(response))
    .then({

    })
    .catch(err => console.log(err));


function process(prom) {

    prom.then(data => {

        let p = document.createElement('p');
        p.textContent = data.type;
        document.getElementById('output').appendChild(p);


    })

}
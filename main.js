
// initial
document.addEventListener('DOMContentLoaded', init);

// initial function
function init (){

    // links
    let datafile1 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json');
    let datafile2 = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json');

let div = document.querySelector('div')

// Start
Promise.race([datafile1, datafile2])

.then(response => {
    // console.log(response);
    return response.json();
        if (response[0].type == "archer"){
            console.log("Ahi vamos");
        }else{
            console.log("No vamos");
        }

}).then(data=>{


    let p = document.createElement("p");
    p.textContent = data[0].type;
    document.querySelector("div").appendChild(p);

    if (data[0].type == "archer"){
        div.className = "archer"
        

    
    data[0].data.map( i => {
        console.log(i);
        let p1 = document.createElement("p");
        p1.textContent ="ID: " + i.id;
        document.querySelector("div").appendChild(p1);
        let p = document.createElement("p");
        p.textContent ="First_name: " + i.first_name;
        document.querySelector("div").appendChild(p);

        let p2 = document.createElement("p");
        p2.textContent ="Last_name: " + i.last_name;
        document.querySelector("div").appendChild( p2);
    } )
    }else{
        
        div.className = "lebowski"
        data[0].data.map( i => {
        console.log(i);
        let p1 = document.createElement("p");
        p1.textContent ="ID: " + i.id;
        document.querySelector("div").appendChild(p1);
        let p = document.createElement("p");
        p.textContent ="Character: "+ i.character;
        document.querySelector("div").appendChild(p);

        let p2 = document.createElement("p");
        p2.textContent ="Actor: "+ i.actor;
        document.querySelector("div").appendChild(p2);

    })
}

}).catch(function(error){
    console.log(error);
});

}
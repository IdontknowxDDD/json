

//JSON - javascriptova objektova notace

const loadData = async () => {
    const file = await fetch("./res/data/data.json");
    const data = await file.json();
    return data;
}

//kdyz se nacte stranka - neco se stane
window.onload = async () => {
    const data = await loadData();
    //console.log(data[2].content);
    /*data.forEach((joke)=> {
        console.log(joke.content)
    })*/
    data.map((joke)=>{
        console.log(joke.content)
    })
}
const teachers = document.getElementsByClassName("teachers")[0];

//JSON - javascriptova objektova notace

const loadData = async () => {
    const file = await fetch("./res/data/teachers.json");
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
/*      data.map((joke)=>{
        console.log(joke.content);
    })                     */
    data.map((teacher) => {
        teachers.innerHTML += `
    <div class="teacher">
        <h1 class="teacher-heading">${teacher.title}${teacher.name}</h1>
        <p class="teacher-age">Věk:${teacher.age} </p>
        <p class="teacher-hair">Vlasy: ${teacher.hair}</p>
        <p class="teacher-characteristics">Charakteristika: ${teacher.characteristics}</p>
        <p class="teacher-subjects">Učí: ${teacher.subjects}</p>
    </div>
        `;
    })

}
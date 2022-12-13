let kertas = document.querySelector("#kertas");
let gunting = document.querySelector("#gunting")
let batu = document.querySelector("#batu");
let computerChoice = document.querySelector("#computerChoice");

// function untuk komputer memilih
const selectChoice = () => { //arrow function
    const options = ["Kertas","Gunting","Batu"];
    const result = options[Math.floor(Math.random()*3)];
    
    return result
}

batu.addEventListener('click', () => {
    let choice = selectChoice()
    computerChoice.innerHTML = choice

    setTimeout(() => {
        switch (choice) {
            case "Batu":
                alert("Seri")
                break;
            case "Gunting":
                alert("Kamu Menang!")
                break
            default:
                alert("Komputer Menang!")
                break;
        }
    }, 300);
})

gunting.addEventListener('click', () => {
    let choice = selectChoice()
    computerChoice.innerHTML = choice

    setTimeout(() => {
        switch (choice) {
            case "Gunting":
                alert("Seri")
                break;
            case "Kertas":
                alert("Kamu Menang!")
                break
            default:
                alert("Komputer Menang!")
                break;
        }
    }, 300);
})

kertas.addEventListener('click', () => {
    let choice = selectChoice()
    computerChoice.innerHTML = choice

    setTimeout(() => {
        switch (choice) {
            case "Kertas":
                alert("Seri")
                break;
            case "Batu":
                alert("Kamu Menang!")
                break
            default:
                alert("Komputer Menang!")
                break;
        }
    }, 300);
})




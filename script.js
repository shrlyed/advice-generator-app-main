const adviceNum = document.querySelector("h5");
const adviceAPI = document.querySelector("p");
const diceBtn = document.getElementById("btn");

diceBtn.addEventListener("click", async function () {
    try{
        const response = await fetch("https://api.adviceslip.com/advice?" + Math.random())
        const data = await response.json();

        adviceNum.textContent = `ADVICE #${data.slip.id}`;
        adviceAPI.textContent = `"${data.slip.advice}"`;

    } catch(error) {
        adviceAPI.textContent = "Failed to load advice";
        adviceNum.textContent = "ADVICE #???";
        console.error("Error fetching advice API", error);
    }
});
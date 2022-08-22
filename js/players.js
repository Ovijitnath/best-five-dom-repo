
const playerArray = [];

function displayPlayerNames(allPlayers) {
    const tableBody = document.getElementById('players');
    tableBody.innerHTML = "";
    for (let i = 0; i < allPlayers.length; i++) {
        const name = (playerArray[i]);
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i}</th>
        <th>${name}</th>`;
        tableBody.appendChild(tr);
    }
}

function addToPickedPlayers(element) {
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)

    const playerName = element.parentNode.parentNode.children[1].children[0].innerText;
    console.log(playerName);

    playerArray.push(playerName);
    // console.log(playerArray.length)

    document.getElementById('total-added-player').innerText = playerArray.length;

    displayPlayerNames(playerArray);

}
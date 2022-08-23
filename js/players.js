
const playerArray = [];

function displayPlayerNames(allPlayers) {
    const tableBody = document.getElementById('playersFromTable');
    tableBody.innerHTML = "";

    for (let i = 0; i < allPlayers.length; i++) {
        const name = (playerArray[i]);
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <th>${name}</th>`;
        tableBody.appendChild(tr);
    }
}


function addToPickedPlayers(element) {

    const playerName = element.parentNode.parentNode.children[1].children[0].innerText;

    playerArray.push(playerName);

    const selectedPlayerValue = document.getElementById('total-added-player');
    if (playerArray.length >= 6) {
        alert('Maximum Five players can be seleted!');
        return;
    }
    selectedPlayerValue.innerText = playerArray.length;

    displayPlayerNames(playerArray);

}
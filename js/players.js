
const playerArray = [];

function displayPlayerNames(allPlayers) {
    const tableBody = document.getElementById('players');
    tableBody.innerHTML = "";
    for (let i = 0; i < allPlayers.length; i++) {
        const name = (playerArray[i]);
        const tr = document.createElement("tr");
        if (allPlayers.length <= 5) {
            tr.innerHTML = `
        <th>${i + 1}</th>
        <th>${name}</th>`;
            tableBody.appendChild(tr);
        }
        else {
            alert('Maximum Five players can be seleted!')
            return 0;
        }

    }
}

function addToPickedPlayers(element) {

    const playerName = element.parentNode.parentNode.children[1].children[0].innerText;
    console.log(playerName);

    playerArray.push(playerName);
    const selectedPlayerValue = document.getElementById('total-added-player');
    selectedPlayerValue.innerText = playerArray.length;
    // if (selectedPlayerValue.innerText <= 5) {
    //     selectedPlayerValue.innerText = playerArray.length;

    // }
    // else if (selectedPlayerValue.innerText <= 6) {
    //     selectedPlayerValue.innerText = '';
    //     return 0;
    // }
    // else {
    //     alert('Maximum Five players can be seleted!')

    //     return 0;
    // }


    displayPlayerNames(playerArray);

}
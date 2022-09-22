function getStyle(player) {
    player.style.border = '1px solid goldenrod';
    player.style.borderRadius = '10px';
    player.style.padding = '10px';
    player.style.margin = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    getStyle(player);

    //we can add event handler to each player div

    /* player.addEventListener('click', function () {
        player.style.backgroundColor = 'yellow';
    }) */
}
document.getElementById('add-btn').addEventListener('click', function () {
    const newPlayer = document.createElement('div');
    newPlayer.innerHTML = `
    <h4 class="player-name">New player</h4>
                <p>Labore delectus, aut numquam temporibus possimus ea, voluptates eveniet debitis perferendis
                    necessitatibus laboriosam fugiat, veritatis blanditiis! Quod nihil eum minima nemo nobis porro quas
                    itaque id, alias laboriosam laudantium eligendi?</p>
    `
    newPlayer.classList.add('player');
    const playerContainer = document.getElementById('players');
    playerContainer.appendChild(newPlayer);

    getStyle(newPlayer);

    //we can give individual style to new element

    /*  newPlayer.addEventListener('click', function () {
         newPlayer.style.backgroundColor = 'yellow';
     }) */


});

//instead of giving individual player div style, we can give style to parent element and child elements can automatically get that style by event bubble.

document.getElementById('players').addEventListener('click', function (event) {

    //By event.target.tagName we can get the tagname of the element on which click event occurs
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'goldenrod';
    } else {
        //event.target.parentNode.style we can add style to the parent(div) of the element on which click event occurs(h4, p)
        event.target.parentNode.style.backgroundColor = 'goldenrod';
    }
});
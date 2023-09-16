function rollTheDice(faces)  {
    const rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand++;
    document.getElementById("rollResult").innerHTML = rand;
}
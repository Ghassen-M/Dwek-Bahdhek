var changed = 1;
document.getElementById("i1").addEventListener("click", fModifier);


function fModifier() {
    changed = -changed;
    if (changed == -1) {
        var donnees = document.getElementsByClassName("para");
        var valeurs = [];
        for (donne of donnees)
            valeurs.push(donne.innerText);
        document.getElementById("noun").innerHTML = `<input type="text" id="in1" class="inp form-control" value="${valeurs[0]}">`;
        document.getElementById("age").innerHTML = `<input type="number" id="in2" class="inp form-control" value="${valeurs[1]}">`;
        document.getElementById("sex").innerHTML = '<select class="inp form-select form-select-sm">'
            + '<option value="Homme">Homme</option>'
            + '<option value="Femme">Femme</option>';
        +'</select>';
        document.getElementById("email").innerHTML = `<input type="email" id="in4" class="inp form-control" value="${valeurs[3]}">`;
        document.getElementById("number").innerHTML = `<input type="number" id="in5" class="inp form-control" value="${valeurs[4]}">`;
        document.getElementById("address").innerHTML = `<input type="text" id="in6" class="inp form-control" value="${valeurs[5]}">`;

        document.getElementById("i1").innerText = "confirmer";
    }
    if (changed == 1) {
        var donnees = document.getElementsByClassName("inp");
        var valeurs = [];
        for (donne of donnees)
            valeurs.push(donne.value);
        document.getElementById("username").innerText = valeurs[0];
        document.getElementById("noun").innerHTML = `<p class="para">${valeurs[0]}</p>`;
        document.getElementById("age").innerHTML = `<p class="para">${valeurs[1]}</p>`;
        document.getElementById("sex").innerHTML = `<p class="para">${valeurs[2]}</p>`;
        document.getElementById("email").innerHTML = `<p class="para">${valeurs[3]}</p>`;
        document.getElementById("number").innerHTML = `<p class="para">${valeurs[4]}</p>`;
        document.getElementById("address").innerHTML = `<p class="para">${valeurs[5]}</p>`;


        document.getElementById("i1").innerText = 'modifier';

    }


}
var changed = 1;
document.getElementById("i1").addEventListener("click", fModifier);


function fModifier() {
    changed = -changed;
    if (changed == -1) {
        var donnees = document.getElementsByClassName("data");
        var quantites = document.getElementsByClassName("qte");
        for (var i = 0; i < donnees.length; i++) {
            document.getElementsByClassName("data")[i].innerHTML = '<input type="text" id="in1" class="d form-control" value="' + donnees[i].innerHTML + '">';
        }
        for (var i = 0; i < quantites.length; i++) {
            document.getElementsByClassName("qte")[i].innerHTML = '<input type="number" id="in2" class="q form-control" value="' + quantites[i].innerHTML + '">';
        }
        document.getElementById("i1").innerText = 'confirmer';
    }
    if (changed == 1) {
        var tabd = document.getElementsByClassName("d");
        var tabq = document.getElementsByClassName("q");
        var don = []; var quant = [];
        for (donne of tabd)
            don.push(donne.value);
        for (q of tabq) { quant.push(q.value); }
        for (var i = 0; i < don.length; i++) {
            document.getElementsByClassName("data")[i].innerText = don[i];
        }
        for (var i = 0; i < quant.length; i++) {
            document.getElementsByClassName("qte")[i].innerText = quant[i];
        }


        document.getElementById("i1").innerText = 'modifier';

    }


}
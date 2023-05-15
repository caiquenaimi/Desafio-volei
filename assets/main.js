var points = [];
var add = 0;
var sets = 0;
var ganhos1 = 0;
var ganhos2 = 0;
var maxPoints = 5;
var contadorA = 1;
var contadorB = 1;

function mais1() {
    if (ganhos1 == 3) {
        return
    }

    add++

    document.getElementById("p1").innerHTML = add;

    points.push(add);


    if (add == maxPoints) {
        document.getElementById("p" + contadorA + "s2").innerHTML = "set " + contadorA + ":" + add2;
        document.getElementById("p" + contadorA + "s1").innerHTML = "set " + contadorA + ":" + add;
        add = 0;



        sets++;
        sets2++;
        ganhos1++;
        document.getElementById("ganhos1").innerHTML = ganhos1;
        document.getElementById("p1s2").innerHTML = "set 1:" + add2;
        document.getElementById("p1s2").value;
        add2 = 0;

        points.push(add);
        document.getElementById("p1").innerHTML = "0";
        document.getElementById("p2").innerHTML = "0";
        contadorA++;
    }
    else if (ganhos1 + ganhos2 == 1 && add == maxPoints) {
        document.getElementById("p2s1").innerHTML = "set 2: 5"
        add = 0;
        sets++;
        sets2++;
        ganhos1++;
        document.getElementById("ganhos1").innerHTML = ganhos1;
        document.getElementById("p2s2").innerHTML = "set 2:" + add2;
        document.getElementById("p2s2").value;
        add2 = 0;

        points.push(add);
        document.getElementById("p1").innerHTML = "0"
    }
    else if (sets == 2 && add == maxPoints) {
        document.getElementById("p3s1").innerHTML = "set 3: 5"
        add = 0;
        sets++;
        sets2++;
        ganhos1++;
        document.getElementById("ganhos1").innerHTML = ganhos1;
        document.getElementById("p3s2").innerHTML = "set 3:" + add2;
        document.getElementById("p3s2").value;
        add2 = 0;

        points.push(add);
        document.getElementById("p1").innerHTML = "0";
        document.getElementById("p2").innerHTML = "0";
    }
    else if (sets == 3 && add == maxPoints) {
        document.getElementById("p4s1").innerHTML = "set 4: 5"
        add = 0;
        sets++;
        sets2++;
        ganhos1++;
        document.getElementById("ganhos1").innerHTML = ganhos1;
        document.getElementById("p4s2").innerHTML = "set 4:" + add2;
        document.getElementById("p4s2").value;
        add2 = 0;

        points.push(add);
        document.getElementById("p1").innerHTML = "0"
    }
    else if (sets == 4 && add == maxPoints) {
        document.getElementById("p5s1").innerHTML = "set 5: 5"
        add = 0;
        sets++;
        sets2++;
        ganhos1++;
        document.getElementById("ganhos1").innerHTML = ganhos1;
        document.getElementById("p5s2").innerHTML = "set 5:" + add2;
        document.getElementById("p5s2").value;
        add2 = 0;

        points.push(add);
        document.getElementById("p1").innerHTML = "0"
    }

    if (ganhos1 == 3) {
        document.getElementById("vencedor").innerHTML = "Equipe A ganhou!!!";
    }

}
var points2 = [];
var add2 = 0;
var sets2 = 0;
function mais2() {
    if (ganhos2 == 3) {
        return;
     }


    add2++
    document.getElementById("p2").innerHTML = add2;

    points2.push(add2);


    if (add2 == maxPoints) {



        document.getElementById("p" + contadorA + "s2").innerHTML = "set " + contadorA + ":" + add2;
        document.getElementById("p" + contadorA + "s1").innerHTML = "set " + contadorA + ":" + add;
        add2 = 0;

        sets2++;
        sets++;
        ganhos2++;
        document.getElementById("ganhos2").innerHTML = ganhos2;
        document.getElementById("p1s1").innerHTML = "set 1:" + add;
        document.getElementById("p1s1").value;
        add = 0;

        points.push(add2);
        document.getElementById("p1").innerHTML = "0";
        document.getElementById("p2").innerHTML = "0";
        contadorA++;
    }
    else if (sets2 == 1 && add2 == maxPoints) {
        document.getElementById("p2s2").innerHTML = "set 2: 5"
        add2 = 0;
        sets2++;
        sets++;
        ganhos2++;
        document.getElementById("ganhos2").innerHTML = ganhos2;
        document.getElementById("p2s1").innerHTML = "set 2:" + add;
        document.getElementById("p2s1").value;
        add = 0;

        points.push(add2);
        document.getElementById("p2").innerHTML = "0"
    }
    else if (sets2 == 2 && add2 == maxPoints) {
        document.getElementById("p3s2").innerHTML = "set 3: 5"
        add2 = 0;
        sets2++;
        sets++;
        ganhos2++;
        document.getElementById("ganhos2").innerHTML = ganhos2;
        document.getElementById("p3s1").innerHTML = "set 3:" + add;
        document.getElementById("p3s1").value;
        add = 0;

        points.push(add2);
        document.getElementById("p2").innerHTML = "0"
    }
    else if (sets2 == 3 && add2 == maxPoints) {
        document.getElementById("p4s2").innerHTML = "set 4: 5"
        add2 = 0;
        sets2++;
        sets++;
        ganhos2++;
        document.getElementById("ganhos2").innerHTML = ganhos2;
        document.getElementById("p4s1").innerHTML = "set 3:" + add;
        document.getElementById("p4s1").value;
        add = 0;

        points.push(add2);
        document.getElementById("p2").innerHTML = "0"
    }
    else if (sets2 == 4 && add2 == maxPoints) {
        document.getElementById("p5s2").innerHTML = "set 5: 5"
        add2 = 0;
        sets2++;
        sets++;
        ganhos2++;
        document.getElementById("ganhos2").innerHTML = ganhos2;
        document.getElementById("p5s1").innerHTML = "set 5:" + add;
        document.getElementById("p5s1").value;
        add = 0;

        points.push(add2);
        document.getElementById("p2").innerHTML = "0"
    }
    if (ganhos2 == 3) {
        document.getElementById("vencedor").innerHTML = "Equipe B ganhou!!!";
    }

}

function menos1() {
    document.getElementById("p1").innerHTML = add;



    if (add > 0) {
        add = add - 1;
    }
}


function menos2() {

    add = add - 1;
    document.getElementById("p2").innerHTML = add;


}
console.log(sets);
console.log(sets2);


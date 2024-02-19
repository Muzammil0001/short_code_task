
const Calculate = () => {

    var table = document.getElementById("myTable");


    //set Crdts into array from table=====
    let Credits = [];
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];

        let column3Data = row.cells[2].innerText;
        Credits.push(Number(column3Data));

    }

    //set GPs into array from table=====

    let GP = [];
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];

        let column4Data = row.cells[3].innerText;
        GP.push(parseFloat(column4Data));

    }

    // Total Credits clc===========
    let Total_credits = (Credits.reduce((total, num) => total + num));

    let GPsum = GP.reduce((total, num) => (total + num));
    //GPA clc==========
    let GPA = GPsum / GP.length;
    //Quality Points CLC====
    let QP = GPA * Total_credits;
    QP = QP.toFixed(2);
    //CGPA clc========   
    let CGPA = QP / Total_credits;
    CGPA = CGPA.toFixed(2);


    document.getElementById("Earned_Cr").innerText = Total_credits;

    document.getElementById("CGPA").innerText = CGPA;


    //Set Grade Condition based on CGPA====

    if (CGPA == 0.50) {
        document.getElementById("Grades").innerText = "E+";
    }
    else if (CGPA === 1.00) { document.getElementById("Grades").innerText = "D"; }

    else if (CGPA == 1.50) { document.getElementById("Grades").innerText = "D+"; }

    else if (CGPA == 2) { document.getElementById("Grades").innerText = "C"; }

    else if (CGPA == 2.50) { document.getElementById("Grades").innerText = "C+"; }

    else if (CGPA == 3.00) { document.getElementById("Grades").innerText = "B"; }

    else if (CGPA == 3.50) { document.getElementById("Grades").innerText = "B+"; }

    else if (CGPA == 4.00) { document.getElementById("Grades").innerText = "A"; }

    else {
        document.getElementById("Grades").innerText = "E";
    }

}


//ADD Row Button click func====

function addRow() {
    let valid_CHr = [2, 3, 4];
    let valid_GP = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
    console.log(valid_CHr)
    const inputs = document.querySelectorAll('input');
    const input = {};

    //ADD data to an object=======
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== "") {
            input['input' + (i + 1)] = inputs[i].value;
        }
    }


    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    //Entered data in Credit and GP field=============
    let EnteredCredits = inputs[2].value;

    let EnteredGP = inputs[3].value;

    //valdation=========
    if (Object.keys(input).length === 4) {

        let GP_match = valid_GP.some((value) => value == EnteredGP)

        let CHr_match = valid_CHr.some((value) => value == EnteredCredits)

        if (CHr_match == true && GP_match == true) {

            //ADD Row=======
            let newRow = table.insertRow(-1);

            //ADD Row data=======
            for (var i = 0; i < 4; i++) {
                var cell = newRow.insertCell(i);
                cell.innerHTML = inputs[i].value;
            }


        }
        else {
            console.log("Invalid Input");
            document.getElementById("pop_bg").style.display = "flex";

            document.getElementById("pop_text").innerHTML = "<span>⚠ Invalid Credits Hours or Grade Points</span>"
        }

    }
    //IF data value missing=======
    else {

        console.log("Invalid Input");
        document.getElementById("pop_bg").style.display = "flex";

        document.getElementById("pop_text").innerHTML = "<span>⚠ Some data fields are blank</span>"

    }


    //Set empty input data fields=======
    for (let i = 0; i < inputs.length; i++) {

        inputs[i].value = "";

    }

}

//POP UP button func====
const popButton = () => {
    document.getElementById('pop_bg').style.display = 'none'
}

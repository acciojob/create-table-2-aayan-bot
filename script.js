function createTable() {
    const table = document.getElementById("myTable");
    
    const rowsInput = prompt("Input number of rows");
    const colsInput = prompt("Input number of columns");

    const rn = parseInt(rowsInput, 10);
    const cn = parseInt(colsInput, 10);

    // Ignore non-numeric inputs
    if (isNaN(rn) || isNaN(cn)) {
        return;
    }

    // Alert and ignore for negative values or 0
    if (rn <= 0 || cn <= 0) {
        alert("Please enter numbers greater than 0");
        return;
    }

    // Clear any existing table content
    table.innerHTML = "";

    // Dynamically build the table
    for (let i = 0; i < rn; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < cn; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

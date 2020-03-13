// from data.js
var tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("tbody")
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let sighting = row.append("td");
            sighting.text(val)
        })
    })
}

function filterButton(){
    d3.event.preventDefault()
    let date = d3.select("#datetime").property("value")
    let city = d3.select("#city").property("value")
    let state = d3.select("#state").property("value")
    let filteredData = tableData;
    
    if(date) {
        filteredData = filteredData.filter((row) => row.datetime === date);
    }
    else if(city) {
        filteredData = filteredData.filter((row) => row.city === city);
    }
    else if(state) {
        filteredData = filteredData.filter((row) => row.state === state);
    }
    buildTable(filteredData);
}

d3.selectAll('#filter-btn').on("click", filterButton);
buildTable(tableData);
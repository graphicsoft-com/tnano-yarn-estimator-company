class Equipment{
    constructor(type, name, cost, maxThroughput, costExponent){
        this.type = type;
        this.name = name;
        this.cost = cost;
        this.maxThroughput = maxThroughput;
        this.costExponent = costExponent;
    }
}

class Material{
    constructor(type, costPerWafer){
        this.type = type;
        this.costPerWafer = costPerWafer;
    }
}

class Worker{
    constructor(type, hourlySalary, maxThroughput){
        this.type = type;
        this.hourlySalary = hourlySalary;
        this.maxThroughput = maxThroughput;
    }
}

class IndirectCost{
    constructor(type, monthlyCost){
        this.type = type;
        this.monthlyCost = monthlyCost;
    }
}

const equipment = [];
equipment[0] = new Equipment("CVD", "Easytube 3000", 185000, 0.75, 1);
equipment[1] = new Equipment("CVD", "Easytube 3000 EXT", 250000, 32, 1);
equipment[2] = new Equipment("CVD", "Easytube 6000", 800000, 200, 1);
equipment[3] = new Equipment("Laser Engraver", "Ray5 5W", 250, 50, 1);
equipment[4] = new Equipment("E-Gun Evaporator", "CHA Mark 50", 140000, 6, 1);
equipment[5] = new Equipment("Spinning Machine", "Custom", 2000, 1/4, 0.8);

const materials = [];
materials[0] = new Material("Silicon Wafers", 200/5);
materials[1] = new Material("Iron Pellets", 6.7/5);
materials[2] = new Material("Acetylene Gas", 4.41/5);
materials[3] = new Material("Hydrogen Gas", 3.5154/5);
materials[4] = new Material("Argon Gas", 5.7246/5);

const workers = [];
workers[0] = new Worker("Engineer", 62.5, 8);

const indirectCosts = [];
indirectCosts[0] = new IndirectCost("Rent", 4000);
indirectCosts[1] = new IndirectCost("Electricity", 120);

let amountInput = document.getElementById("amount");
let amountUnitInput = document.getElementById("amountUnit");
let monthsInput = document.getElementById("time");

let gramsPerMonth = 100;
let amountFactor = 1;
let months = 0;
let markup = 0;
let wafersPerMonth;
let countOfEquipment = [0, 0, 0, 0, 0, 0];

let timeCostLineChart = null;
let costPieChart = null;
let resultsBarChart = null;

// Runs the calculator to correct the placeholder numbers at start
RunCalculator();

function AmountUnitChanged(unit) {
    switch (unit) {
        case "grams":
            amountFactor = 1;
            break;
        case "kg":
            amountFactor = 1 / 1000;
            break;
        case "lbs":
            amountFactor = 1 / 453.592;
            break;
        case "km":
            amountFactor = 6.5 / 5;
            break;
        case "m":
            amountFactor = 6.5 / 5 * 1000;
            break;
        case "ft":
            amountFactor = 6.5 / 5 * 1000 * 3.28084;
    }
    amountInput.value = Math.round(gramsPerMonth * amountFactor * 100) / 100;
}

function CompareEquipment(e1, e2) {
    if (e1.maxThroughput < e2.maxThroughput)
        return 1;
    else
        return -1;
}

function GetEquipmentOfType(type) {
    let count = 0;
    equipment.forEach((equipment) => {
        if (equipment.type === type)
            count++;
    });

    let equipmentOfType = new Array(count);
    let index = 0;
    equipment.forEach((equipment) => {
        if (equipment.type === type) {
            equipmentOfType[index] = equipment;
            index++;
        }
    });

    // Sorts the array from largest capacity to smallest
    equipmentOfType.sort(CompareEquipment);

    return equipmentOfType;
}

function RunCalculator() {

    gramsPerMonth = document.getElementById("amount").value / amountFactor;
    months = document.getElementById("time").value;
    markup = document.getElementById("markup").value;

    wafersPerMonth = gramsPerMonth * 6.5 / 5 * 5;

    let totalEquipmentCost = 0;
    let totalMaterialCosts = 0;

    countOfEquipment = [0, 0, 0, 0, 0, 0];
    if(document.getElementById("productionMode").value == 0){
        
        let types = ["E-Gun Evaporator", "CVD", "Laser Engraver", "Spinning Machine"];
        types.forEach((type) => {
            let eq = GetEquipmentOfType(type);
            let wafersPerHourLeft = wafersPerMonth / 160;
    
            for (let i = 0; i < eq.length; i++) {
                while (wafersPerHourLeft > eq[i].maxThroughput) {
                    countOfEquipment[equipment.indexOf(eq[i])]++;
                    wafersPerHourLeft -= eq[i].maxThroughput;
                }
    
                if (i < eq.length - 1) {
                    let count = Math.round(wafersPerHourLeft / eq[i + 1].maxThroughput);
                    if (eq[i].cost < eq[i + 1].cost * count) {
                        countOfEquipment[equipment.indexOf(eq[i])]++;
                        wafersPerHourLeft -= eq[i].maxThroughput;
                    }
                }
            }
            let indexOfFinal = equipment.indexOf(GetEquipmentOfType(type)[GetEquipmentOfType(type).length - 1]);
            while (wafersPerHourLeft > 0) {
                countOfEquipment[indexOfFinal]++;
                wafersPerHourLeft -= equipment[indexOfFinal].maxThroughput;
            }
        });
        
        for (i = 0; i < equipment.length; i++) {
            totalEquipmentCost += equipment[i].cost * Math.pow(countOfEquipment[i], equipment[i].costExponent);
        }

        materials.forEach((material) => {
            totalMaterialCosts += material.costPerWafer * wafersPerMonth * months;
        });
    }
    else{
        totalEquipmentCost = Math.pow(Math.ceil(wafersPerMonth / 160 / equipment[5].maxThroughput), equipment[5].costExponent) * equipment[5].cost;
        totalMaterialCosts = wafersPerMonth * months * 1000;
    }
 
    let workerCount = Math.ceil(wafersPerMonth / 160 / workers[0].maxThroughput);
    let totalLaborCosts = workerCount * workers[0].hourlySalary * 160 * months;

    let totalIndirectCosts = 0;
    indirectCosts.forEach((idc) => {
        totalIndirectCosts += idc.monthlyCost * months;
    });
  
    let totalMontlyCosts = (totalLaborCosts + totalIndirectCosts + totalMaterialCosts + totalEquipmentCost) / months;
    let totalCost = totalMontlyCosts * months;
    let totalPrice = totalCost * (1 + markup / 100);
    let totalProfits = totalPrice - totalCost;

    let pricePerGram = totalPrice / months / gramsPerMonth;

    DrawTimePriceLineChart();
    DrawCostPieChart(totalEquipmentCost, totalLaborCosts, totalMaterialCosts, totalIndirectCosts);

    let monthlyRevenue = totalMontlyCosts * (1 + markup / 100);
    DrawResultsBarChart(Math.round(totalEquipmentCost), Math.round(totalLaborCosts/months), Math.round(totalMaterialCosts/months), Math.round(totalIndirectCosts/months), Math.round(monthlyRevenue));

    DrawText(wafersPerMonth, pricePerGram, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits);

    CloseAllDetails();

    ConsoleLogValues(wafersPerMonth, pricePerGram, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits);
}

function CloseAllDetails(){

    // Equipment
    let equipmentDetailHolder = document.getElementById("equipmentDetailHolder");
    if (equipmentDetailHolder.hasChildNodes()) {
        while (equipmentDetailHolder.firstChild) {
            equipmentDetailHolder.removeChild(equipmentDetailHolder.firstChild);
        }
        equipmentDetailHolder.style.display = "none";
    }

    // Materials
    let materialsDetailHolder = document.getElementById("materialsDetailHolder");
    if (materialsDetailHolder.hasChildNodes()) {
        while (materialsDetailHolder.firstChild) {
            materialsDetailHolder.removeChild(materialsDetailHolder.firstChild);
        }
        materialsDetailHolder.style.display = "none";
    }

    // Equipment
    let laborDetailHolder = document.getElementById("laborDetailHolder");
    if (laborDetailHolder.hasChildNodes()) {
        while (laborDetailHolder.firstChild) {
            laborDetailHolder.removeChild(laborDetailHolder.firstChild);
        }
        laborDetailHolder.style.display = "none";
    }

    // Indirect
    let indirectDetailHolder = document.getElementById("indirectDetailHolder");
    if (indirectDetailHolder.hasChildNodes()) {
        while (indirectDetailHolder.firstChild) {
            indirectDetailHolder.removeChild(indirectDetailHolder.firstChild);
        }
        indirectDetailHolder.style.display = "none";
    }
}

function ToggleEquipmentDetails() {
    let equipmentDetailHolder = document.getElementById("equipmentDetailHolder");

    // Check if the content has children
    if (equipmentDetailHolder.hasChildNodes()) {
        // Remove all children
        while (equipmentDetailHolder.firstChild) {
            equipmentDetailHolder.removeChild(equipmentDetailHolder.firstChild);
        }
        equipmentDetailHolder.style.display = "none";
    } else {
        equipmentDetailHolder.style.display = "flex";
        // If there are no children, add content
        if(document.getElementById("productionMode").value == 0){
            for(let i = 0; i < equipment.length; i++){
                if(countOfEquipment[i] !== 0){
                    let paragraphA = document.createElement('p');
                    let paragraphB = document.createElement('p');
                    paragraphA.textContent = countOfEquipment[i] + "x " + equipment[i].type + ": " + equipment[i].name;
                    paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                        Math.round(equipment[i].cost * countOfEquipment[i]*PerUnitFactor("totalCostUnit", wafersPerMonth, months)));
                    
                    paragraphA.style.flexGrow = 1;
                    paragraphB.style.flexGrow = 1;
                    paragraphB.style.minWidth = '30%';
                    paragraphB.style.textAlign = "right";
        
                    equipmentDetailHolder.appendChild(paragraphA);
                    equipmentDetailHolder.appendChild(paragraphB);
                }
            }
        }
        else{
            let paragraphA = document.createElement('p');
            paragraphA.textContent = "-";
            paragraphA.style.flexGrow = 1;
            equipmentDetailHolder.appendChild(paragraphA);
        }
    }
}

function ToggleMaterialDetails() {
    let materialDetailHolder = document.getElementById("materialsDetailHolder");

    // Check if the content has children
    if (materialDetailHolder.hasChildNodes()) {
        // Remove all children
        while (materialDetailHolder.firstChild) {
            materialDetailHolder.removeChild(materialDetailHolder.firstChild);
        }
        materialDetailHolder.style.display = "none";
    } else {
        // If there are no children, add content
        materialDetailHolder.style.display = "flex";
        if (document.getElementById("productionMode").value == 0) {
            for (let i = 0; i < materials.length; i++) {
                let paragraphA = document.createElement('p');
                let paragraphB = document.createElement('p');
                paragraphA.textContent = materials[i].type;
                paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                    Math.round(materials[i].costPerWafer * wafersPerMonth * months * PerUnitFactor("totalCostUnit", wafersPerMonth, months)));

                paragraphA.style.flexGrow = 1;
                paragraphA.style.minWidth = '40%';
                paragraphB.style.flexGrow = 1;
                paragraphB.style.minWidth = '40%';
                paragraphB.style.textAlign = "right";

                materialDetailHolder.appendChild(paragraphA);
                materialDetailHolder.appendChild(paragraphB);
            }
        }
        else {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            paragraphA.textContent = "Lintec Wafers";
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(1000 * wafersPerMonth * months * PerUnitFactor("totalCostUnit", wafersPerMonth, months)));

            paragraphA.style.flexGrow = 1;
            paragraphA.style.minWidth = '40%';
            paragraphB.style.flexGrow = 1;
            paragraphB.style.minWidth = '40%';
            paragraphB.style.textAlign = "right";

            materialDetailHolder.appendChild(paragraphA);
            materialDetailHolder.appendChild(paragraphB);
        }
    }
}

function ToggleLaborDetails() {
    let laborDetailHolder = document.getElementById("laborDetailHolder");

    // Check if the content has children
    if (laborDetailHolder.hasChildNodes()) {
        // Remove all children
        while (laborDetailHolder.firstChild) {
            laborDetailHolder.removeChild(laborDetailHolder.firstChild);
        }
        laborDetailHolder.style.display = "none";
    } else {
        // If there are no children, add content
        laborDetailHolder.style.display = "flex";
        for (let i = 0; i < workers.length; i++) {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            paragraphA.textContent = Math.ceil(wafersPerMonth / 160 / workers[i].maxThroughput) + " x " + workers[i].type;
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(workers[i].hourlySalary * 40*52/12 * months * PerUnitFactor("totalCostUnit", wafersPerMonth, months)));

            paragraphA.style.flexGrow = 1;
            paragraphA.style.minWidth = '40%';
            paragraphB.style.flexGrow = 1;
            paragraphB.style.minWidth = '40%';
            paragraphB.style.textAlign = "right";

            laborDetailHolder.appendChild(paragraphA);
            laborDetailHolder.appendChild(paragraphB);
        }
    }
}

function ToggleIndirectDetails() {
    let indirectDetailHolder = document.getElementById("indirectDetailHolder");

    // Check if the content has children
    if (indirectDetailHolder.hasChildNodes()) {
        // Remove all children
        while (indirectDetailHolder.firstChild) {
            indirectDetailHolder.removeChild(indirectDetailHolder.firstChild);
        }
        indirectDetailHolder.style.display = "none";
    } else {
        // If there are no children, add content
        indirectDetailHolder.style.display = "flex";
        for (let i = 0; i < indirectCosts.length; i++) {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            paragraphA.textContent = indirectCosts[i].type;
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(indirectCosts[i].monthlyCost * months * PerUnitFactor("totalCostUnit", wafersPerMonth, months)));

            paragraphA.style.flexGrow = 1;
            paragraphA.style.minWidth = '40%';
            paragraphB.style.flexGrow = 1;
            paragraphB.style.minWidth = '40%';
            paragraphB.style.textAlign = "right";

            indirectDetailHolder.appendChild(paragraphA);
            indirectDetailHolder.appendChild(paragraphB);
        }
    }
}

function ConsoleLogValues(wafersPerMonth, pricePerGram, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits){
    console.log("wafersPerMonth: " + wafersPerMonth);
    console.log("months: " + months);
    console.log("gramsPerMonth: " + gramsPerMonth);
    console.log("markup: " + markup);
    
    /* a foreach loop that prints the name of each equipment and the amount of each equipment */
    console.log("Equipment: ");
    equipment.forEach((eq) => {
        console.log(eq.name + ": " + countOfEquipment[equipment.indexOf(eq)]);
    });

    console.log("totalEquipmentCost: " + totalEquipmentCost);
    console.log("totalLaborCosts: " + totalLaborCosts);
    console.log("totalMaterialCosts: " + totalMaterialCosts);
    console.log("totalIndirectCosts: " + totalIndirectCosts);
    console.log("totalProfits: " + totalProfits);
    console.log("totalPrice: " + totalPrice);
    console.log("pricePerGram: " + pricePerGram);

}

function DrawText(wafersPerMonth, pricePerGram, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits){
    //Wafers per month (or day / year)
    let factor;
    switch(document.getElementById("waferVolumeUnit").value){
        case "total":
            factor = months;
            break;
        case "year":
            factor = 12;
            break;
        case "month":
            factor = 1;
            break;
        case "day":
            factor = 12 / 365;
            break;
    }
    UpdateTextContent("waferVolumeText", Math.round(wafersPerMonth*factor));

    //Yarn production volume
    switch(document.getElementById("productionVolumeUnit").value){
        case "grams":
            factor = 1;
            break;
        case "kg":
            factor = 1/1000;
            break;
        case "lbs":
            factor = 1/453.6;
            break;
        case "km":
            factor = 6.5/5;
            break;
        case "m":
            factor = 6.5/5 * 1000;
            break;
        case "ft":
            factor = 6.5/5 * 1000 * 3.048;
            break;
    }
    UpdateTextContent("productionVolumeText", Math.round(gramsPerMonth*months*factor*100)/100);

    //price per gram (or other)
    switch (document.getElementById("pricePerAmountUnit").value) {
        case "grams":
            factor = 1;
            break;
        case "kg":
            factor = 1000;
            break;
        case "lbs":
            factor = 453.592;
            break;
        case "km":
            factor = 5/6.5;
            break;
        case "m":
            factor = 5/6.5 / 1000;
            break;
        case "ft":
            factor = 5/6.5 / 1000 / 3.048;
            break;
    }
    UpdateTextContent("pricePerAmount", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(pricePerGram*factor)));

    //price in total
    UpdateTextContent("price", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(totalPrice)));

    //total cost per x
    UpdateTextContent("totalCost", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        (Math.round(totalEquipmentCost + totalMaterialCosts + totalLaborCosts + totalIndirectCosts) * PerUnitFactor("totalCostUnit", wafersPerMonth, months)) ));

    //equipment cost per x
    UpdateTextContent("equipmentCost", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(totalEquipmentCost*PerUnitFactor("totalCostUnit", wafersPerMonth, months))));

    //material cost per x
    UpdateTextContent("materialCost", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(totalMaterialCosts*PerUnitFactor("totalCostUnit", wafersPerMonth, months))));

    //labor cost per x
    UpdateTextContent("laborCost", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(totalLaborCosts*PerUnitFactor("totalCostUnit", wafersPerMonth, months))));

    //indirect cost per x
    UpdateTextContent("indirectCost", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(totalIndirectCosts*PerUnitFactor("totalCostUnit", wafersPerMonth, months))));

    //revenue
    UpdateTextContent("revenue", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        (Math.round(totalEquipmentCost + totalMaterialCosts + totalLaborCosts + totalIndirectCosts) * (1 + markup / 100) * PerUnitFactor("revenueUnit", wafersPerMonth, months))));

    //profit per x
    UpdateTextContent("profit", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(totalProfits*PerUnitFactor("profitUnit", wafersPerMonth, months))));
}

function UpdateTextContent(id, content){
    let contentElement = document.getElementById(id);
    if(contentElement.textContent != content){
        contentElement.classList.add("fadeOut");
        setTimeout(() => {
            contentElement.textContent = content;
            contentElement.classList.remove("fadeOut");
        }, 200);
    }
}

function PerUnitFactor(name){
    switch(document.getElementById(name).value){
        case "total":
            return 1;
        case "month":
            return (1/months);
        case "grams":
            return 1/(wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
        case "kg":
            return 1000/(wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
        case "lbs":
            return 453.592/(wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
        case "km":
            return 5/(6.5*wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
        case "m":
            return 5/(6.5*1000*wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
        case "ft":
            return 5/(3.28084*6.5*1000*wafersPerMonth*months * (1/( 6.5 / 5 * 5)));
    }
    throw new Error("ERROR! Couldn't match selected unit to factor");
    return null;
}

function DrawResultsBarChart(equipmentCost, montlyLabor, montlyMaterial, monthlyIndirect, monthlyRevenue){
    let equipment = [];
    let labor = [];
    let material = [];
    let indirect = [];
    let revenue = [];
    let profit = [];
    let label = [];
    for(let i = 0; i < months; i++){
        equipment[i] = 0;
        labor[i] = -1 * montlyLabor;
        material[i] = -1 * montlyMaterial;
        indirect[i] = -1 * monthlyIndirect;
        revenue[i] = monthlyRevenue;
        label[i] = i+1;
        if(i > 0){
            profit[i] = profit[i - 1] + labor[i] + material[i] + indirect[i] + revenue[i];
        }
        else{
            profit[i] = labor[i] + material[i] + indirect[i] + revenue[i]  - equipmentCost;
        }
    }
    equipment[0] = -1 * equipmentCost;

    let resultsBarChartCanvas = document.getElementById("resultsBarChart");

    if(resultsBarChart !== null){
        resultsBarChart.data.datasets[0].data = equipment;
        resultsBarChart.data.datasets[1].data = labor;
        resultsBarChart.data.datasets[2].data = material;
        resultsBarChart.data.datasets[3].data = indirect;
        resultsBarChart.data.datasets[4].data = revenue;
        resultsBarChart.data.datasets[5].data = profit;
        resultsBarChart.data.labels = label;
        resultsBarChart.update();
    }
    else{
        resultsBarChart = new Chart(resultsBarChartCanvas, {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: 'Equipment',
                    data: equipment,
                    backgroundColor: "#FF7719",
                    borderWidth: 0,
                    order: 1
                }, {
                    label: 'Labor',
                    data: labor,
                    backgroundColor: "#c75138",
                    order: 1
                }, {
                    label: 'Materials',
                    data: material,
                    backgroundColor: "yellow",
                    order: 1
                }, {
                    label: 'Indirect',
                    data: indirect,
                    backgroundColor: "#aa54ab",
                    order: 1
                }, {
                    label: 'Revenue',
                    data: revenue,
                    backgroundColor: "#55aa7e",
                    order: 1
                }, {
                    label: 'Total profit',
                    data: profit,
                    backgroundColor: "#0AD3FF",
                    type: 'line',
                    borderWidth: 1,
                    borderColor: "#0AD3FF",
                    order: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'rgb(200, 200, 200)',
                            font:{
                                weight: 'normal'
                            }

                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            display: false // This will hide the y-axis values
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            display: false // This will hide the y-axis values
                        }
                    }
                }
            }
        });
    }
}

function DrawCostPieChart(equipmentCost, laborCost, materialCost, indirectCost){
    const labels = ["Equipment", "Labor", "Material", "Indirect"];
    
    let values = [Math.round(equipmentCost), Math.round(laborCost), Math.round(materialCost), Math.round(indirectCost)];   

    const barColors = [
        "#FF7719", 
        "#73937E",
        "#585563",
        "#0AD3FF"
    ];

    if(costPieChart !== null){
        costPieChart.data.datasets[0].data = values;
        costPieChart.update();
    }
    else{
        costPieChart = new Chart(document.getElementById("costPieChart"), {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [{
                backgroundColor: barColors,
                borderColor: "#292929",
                borderWidth: 0,
                data: values
              }]
            },
            options: {
                radius: 100,
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            color: 'rgb(255, 255, 255)'
                        }
                    }
                },
            }
          });
    }
    
}

function DrawTimePriceLineChart(){

    let dataPoints = 20;

    let timeCostChartx = [];
    let timeCostCharty = [];   

    for(let i = 0; i < dataPoints; i++){
        //timeCostChartx[i] = Math.pow(1.4, i+1);
        timeCostChartx[i] = i+1;
    }
    
    for(let i = 0; i < timeCostChartx.length; i++){
        timeCostCharty[i] = Math.round(CostPerGram(timeCostChartx[i]) * (1 + markup / 100));
        // timeCostChartx[i] = Math.round(timeCostChartx[i]+10)/10;
    }

    if(timeCostLineChart !== null){
        timeCostLineChart.data.labels = timeCostChartx;
        timeCostLineChart.data.datasets[0].data = timeCostCharty;
        timeCostLineChart.update();
    }
    else{
        timeCostLineChart = new Chart(document.getElementById("timePriceChart"), {
            type: 'line',
            data: {
              labels: timeCostChartx,
              datasets: [{
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#FF7719",
                borderColor: "#FF7719",
                data: timeCostCharty,
                borderWidth: 2
              }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
              scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    beginAtZero: true
                }
              }
            }
          });
    }
    
}

function CostPerGram(grams){

    console.log("CostPerGramFunction, grams per month: " + grams);

    let wafPerMonth = grams * 6.5 / 5 * 5;
    console.log("CostPerGramFunction, wafers per month: " + wafPerMonth);

    let totalEquipmentCost = 0;
    let totalMaterialCosts = 0;

    let cOE = [0, 0, 0, 0, 0, 0];
    if(document.getElementById("productionMode").value == 0){
        let types = ["E-Gun Evaporator", "CVD", "Laser Engraver", "Spinning Machine"];
        types.forEach((type) => {
            let eq = GetEquipmentOfType(type);
            let wafersPerHourLeft = wafPerMonth / 160;
    
            for (let i = 0; i < eq.length; i++) {
                while (wafersPerHourLeft > eq[i].maxThroughput) {
                    cOE[equipment.indexOf(eq[i])]++;
                    wafersPerHourLeft -= eq[i].maxThroughput;
                }
    
                if (i < eq.length - 1) {
                    let count = Math.round(wafersPerHourLeft / eq[i + 1].maxThroughput);
                    if (eq[i].cost < eq[i + 1].cost * count) {
                        cOE[equipment.indexOf(eq[i])]++;
                        wafersPerHourLeft -= eq[i].maxThroughput;
                    }
                }
            }
    
            let indexOfFinal = equipment.indexOf(GetEquipmentOfType(type)[GetEquipmentOfType(type).length - 1]);
            while (wafersPerHourLeft > 0) {
                cOE[indexOfFinal]++;
                wafersPerHourLeft -= equipment[indexOfFinal].maxThroughput;
            }
        });
        
        for (i = 0; i < equipment.length; i++) {
            totalEquipmentCost += equipment[i].cost * Math.pow(cOE[i], equipment[i].costExponent);
        }

        materials.forEach((material) => {
            totalMaterialCosts += material.costPerWafer * wafPerMonth * months;
        });
    }
    else{
        totalEquipmentCost = Math.pow(Math.ceil(wafPerMonth / 160 / equipment[5].maxThroughput), equipment[5].costExponent) * equipment[5].cost;
        totalMaterialCosts = wafPerMonth * months * 1000;
    }  

    console.log("CostPerGramFunction, total equipment cost: " + totalEquipmentCost);
    console.log("CostPerGramFunction, total material cost: " + totalMaterialCosts);

    let workerCount = Math.ceil(wafPerMonth / 160 / workers[0].maxThroughput);
    let totalLaborCosts = workerCount * workers[0].hourlySalary * 160 * months;

    console.log("CostPerGramFunction, total labor cost: " + totalLaborCosts);

    let totalIndirectCosts = 0;
    indirectCosts.forEach((idc) => {
        totalIndirectCosts += idc.monthlyCost * months;
    });

    console.log("CostPerGramFunction, total indirect cost: " + totalIndirectCosts);

    let totalMontlyCosts = (totalLaborCosts + totalIndirectCosts + totalMaterialCosts + totalEquipmentCost) / months;

    console.log("CostPerGramFunction, cost per gram: " + (totalMontlyCosts / grams));
    // Price per gram equials
    return (totalMontlyCosts / grams);
}
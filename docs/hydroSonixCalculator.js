"use strict";
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
    constructor(type, costPerSpeaker){
        this.type = type;
        this.costPerSpeaker = costPerSpeaker;
    }
}

// Tasks that workers have to carry out
// taskTime is the time it takes to complete the task in hours per speaker
class WorkerTask{
    constructor(task, taskTime){
        this.task = task;
        this.taskTime = taskTime;
    }
}

class IndirectCost{
    constructor(type, monthlyCost){
        this.type = type;
        this.monthlyCost = monthlyCost;
    }
}

const speakersPerWafer = 243;

const equipment = [];
equipment[0] = new Equipment("CVD", "Easytube 3000", 185000, 0.75, 1);
equipment[1] = new Equipment("CVD", "Easytube 3000 EXT", 250000, 32, 1);
equipment[2] = new Equipment("CVD", "Easytube 6000", 800000, 200, 1);
equipment[3] = new Equipment("E-Gun Evaporator", "CHA Mark 50", 140000, 6, 1);

const Materials = [];
Materials[0] = new Material("Silicon Wafers", 200/5/speakersPerWafer);
Materials[1] = new Material("Iron Pellets", 6.7/5/speakersPerWafer);
Materials[2] = new Material("Acetylene Gas", 4.41/5/speakersPerWafer);
Materials[3] = new Material("Hydrogen Gas", 3.5154/5/speakersPerWafer);
Materials[4] = new Material("Argon Gas", 5.7246/5/speakersPerWafer);
Materials[5] = new Material("Amplifier Components", 195);
Materials[6] = new Material("Frame Components", 40);
Materials[7] = new Material("Purchased Wafers", 1000);

const workerTasks = [];
workerTasks[0] = new WorkerTask("Run E-gun Evaporator", 1/16/speakersPerWafer);
workerTasks[1] = new WorkerTask("Run CVD Furnace", 1/speakersPerWafer);
workerTasks[2] = new WorkerTask("Draw speaker from wafer", 15/60);
workerTasks[3] = new WorkerTask("Manufacturing frame", 2);
workerTasks[4] = new WorkerTask("Manufacturing amplifier", 6);
workerTasks[5] = new WorkerTask("Final assembly", 2);
workerTasks[6] = new WorkerTask("Testing", 1);

const indirectCosts = [];
indirectCosts[0] = new IndirectCost("Rent", 4000);
indirectCosts[1] = new IndirectCost("Electricity", 120);

let speakersPerMonth = 10;
let months = 0;
let markup = 0;
let wafersPerMonth = 0;
let countOfEquipment = [0, 0, 0, 0];

let hourlySalaryEngineer = 62.5;

let timeCostLineChart = null;
let costPieChart = null;
let resultsBarChart = null;

// Runs the calculator to correct the placeholder numbers at start
RunCalculator();

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

    speakersPerMonth = document.getElementById("amount").value;
    months = document.getElementById("time").value;
    markup = document.getElementById("markup").value;

    wafersPerMonth = speakersPerMonth / speakersPerWafer;

    let totalEquipmentCost = 0;
    countOfEquipment = [0, 0, 0, 0];
    let totalMaterialCosts = 0;
    let totalLaborCosts = 0;

    if(document.getElementById("productionMode").value == 0){
        
        let types = ["E-Gun Evaporator", "CVD"];
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
        
        for (let i = 0; i < equipment.length; i++) {
            totalEquipmentCost += equipment[i].cost * Math.pow(countOfEquipment[i], equipment[i].costExponent);
        }

        for (let i = 0; i < Materials.length - 1; i++) {
            totalMaterialCosts += Materials[i].costPerSpeaker * speakersPerMonth * months;
        }

        for (let i = 0; i < workerTasks.length; i++) {
            totalLaborCosts += workerTasks[i].taskTime * speakersPerMonth * months * hourlySalaryEngineer;
        }
    }
    else{

        for (let i = 5; i < Materials.length; i++) {
            totalMaterialCosts += Materials[i].costPerSpeaker * speakersPerMonth * months;
        }

        for (let i = 2; i < workerTasks.length; i++) {
            totalLaborCosts += workerTasks[i].taskTime * speakersPerMonth * months * hourlySalaryEngineer;
        }
    }

    let totalIndirectCosts = 0;
    indirectCosts.forEach((idc) => {
        totalIndirectCosts += idc.monthlyCost * months;
    });
  
    let totalCost = (totalLaborCosts + totalIndirectCosts + totalMaterialCosts + totalEquipmentCost);
    let totalMonthlyCosts = totalCost / months;
    let totalPrice = totalCost * (1 + markup / 100);
    let totalProfits = totalPrice - totalCost;

    let pricePerSpeaker = totalPrice / months / speakersPerMonth;

    ConsoleLogValues(wafersPerMonth, pricePerSpeaker, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits);

    
    DrawCostPieChart(totalEquipmentCost, totalLaborCosts, totalMaterialCosts, totalIndirectCosts);

    let monthlyRevenue = totalMonthlyCosts * (1 + markup / 100);
    DrawResultsBarChart(Math.round(totalEquipmentCost), Math.round(totalLaborCosts/months), Math.round(totalMaterialCosts/months), Math.round(totalIndirectCosts/months), Math.round(monthlyRevenue));

    DrawText(pricePerSpeaker, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits);

    CloseAllDetails();

    DrawTimePriceLineChart();
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

    // MaterialsAMaterialsA
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
    }
    else {
        // If there are no children, add content
        equipmentDetailHolder.style.display = "block";
        if(document.getElementById("productionMode").value == 0){
            for(let i = 0; i < equipment.length; i++){
                if(countOfEquipment[i] !== 0){
                    let paragraphA = document.createElement('p');
                    let paragraphB = document.createElement('p');
                    let divHolder = document.createElement('div');
                    paragraphA.textContent = countOfEquipment[i] + "x " + equipment[i].type + ": " + equipment[i].name;
                    paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                        Math.round(equipment[i].cost * countOfEquipment[i]*PerUnitFactor("totalCostUnit")));

                    equipmentDetailHolder.appendChild(divHolder);
                    divHolder.appendChild(paragraphA);
                    divHolder.appendChild(paragraphB);
                }
            }
        }
        else{
            let paragraphA = document.createElement('p');
            paragraphA.textContent = "-";
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
        materialDetailHolder.style.display = "block";
        let a;
        let b;
        if (document.getElementById("productionMode").value == 0) {
            a = 0;
            b = 1;
        }
        else {
           a = 5;
           b = 0;
        }
        for (let i = a; i < Materials.length - b; i++) {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            let divHolder = document.createElement('div');
            paragraphA.textContent = Materials[i].type;
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(Materials[i].costPerSpeaker * speakersPerMonth * months * PerUnitFactor("totalCostUnit")*100)/100);

            materialDetailHolder.appendChild(divHolder);
            divHolder.appendChild(paragraphA);
            divHolder.appendChild(paragraphB);
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
    }
    else {
        // If there are no children, add content
        laborDetailHolder.style.display = "block";

        let a;
        if(document.getElementById("productionMode").value == 0){
            a = 0;
        }
        else{
            a = 2;
        }
        for (let i = a; i < workerTasks.length; i++) {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            let divHolder = document.createElement('div');
            paragraphA.textContent = workerTasks[i].task;
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(workerTasks[i].taskTime * speakersPerMonth * months * hourlySalaryEngineer * PerUnitFactor("totalCostUnit")*100)/100);

            laborDetailHolder.appendChild(divHolder);
            divHolder.appendChild(paragraphA);
            divHolder.appendChild(paragraphB);
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
        indirectDetailHolder.style.display = "block";
        for (let i = 0; i < indirectCosts.length; i++) {
            let paragraphA = document.createElement('p');
            let paragraphB = document.createElement('p');
            let divHolder = document.createElement('div');
            paragraphA.textContent = indirectCosts[i].type;
            paragraphB.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Math.round(indirectCosts[i].monthlyCost * months * PerUnitFactor("totalCostUnit", wafersPerMonth, months)));

            indirectDetailHolder.appendChild(divHolder);
            divHolder.appendChild(paragraphA);
            divHolder.appendChild(paragraphB);
        }
    }
}

function ConsoleLogValues(wafersPerMonth, pricePerSpeaker, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits){
    console.log("wafersPerMonth: " + wafersPerMonth);
    console.log("months: " + months);
    console.log("speakersPerMonth: " + speakersPerMonth);
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
    console.log("pricePerSpeaker: " + pricePerSpeaker);

}

function DrawText(pricePerSpeaker, totalPrice, totalEquipmentCost, totalMaterialCosts, totalLaborCosts, totalIndirectCosts, totalProfits){

    let factor;
    //Speaker production volume
    switch (document.getElementById("productionVolumeUnit").value) {
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
    UpdateTextContent("productionVolumeText", Math.round(speakersPerMonth*factor*100)/100);
    
    //Wafer production volume
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
            factor = 12 / 52;
            break;
    }
    UpdateTextContent("waferVolumeText", Math.round(wafersPerMonth*factor*1000)/1000);


    UpdateTextContent("pricePerAmount", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        Math.round(pricePerSpeaker)));

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
        case "day":
            return (1/months/(52/12*40));
        case "speaker":
            return 1/(speakersPerMonth*months);
    }
    throw new Error("ERROR! Couldn't match selected unit to factor");
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
    let timeCostChartx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    let timeCostCharty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];   
    
    for(let o = 0; o < timeCostCharty.length; o++){
        timeCostCharty[o] = Math.round(PricePerSpeaker(timeCostChartx[o]));
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

function PricePerSpeaker(number){

    let wafPerMonth = number / speakersPerWafer;

    let totalEquipmentCost = 0;
    let totalMaterialCosts = 0;
    let totalLaborCosts = 0;

    let cOE = [0, 0, 0, 0];
    if(document.getElementById("productionMode").value == 0){
        
        let types = ["E-Gun Evaporator", "CVD"];
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
    
        
        for (let i = 0; i < equipment.length; i++) {
            totalEquipmentCost += equipment[i].cost * Math.pow(cOE[i], equipment[i].costExponent);
        }

        for (let i = 0; i < Materials.length - 1; i++) {
            totalMaterialCosts += Materials[i].costPerSpeaker * number * months;
        }

        for (let i = 0; i < workerTasks.length; i++) {
            totalLaborCosts += workerTasks[i].taskTime * number * months * hourlySalaryEngineer;
        }
    }
    else{

        for (let i = 5; i < Materials.length; i++) {
            totalMaterialCosts += Materials[i].costPerSpeaker * number * months;
        }

        for (let i = 2; i < workerTasks.length; i++) {
            totalLaborCosts += workerTasks[i].taskTime * number * months * hourlySalaryEngineer;
        }
    }

    let totalIndirectCosts = 0;
    indirectCosts.forEach((idc) => {
        totalIndirectCosts += idc.monthlyCost * months;
    });
  
    let totalCost = (totalLaborCosts + totalIndirectCosts + totalMaterialCosts + totalEquipmentCost);
    let totalPrice = totalCost * (1 + markup / 100);

    let pricePerSpeaker = totalPrice / months / number;

    return (pricePerSpeaker);
}
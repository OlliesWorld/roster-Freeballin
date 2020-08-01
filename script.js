/*document.getElementById("searchInput").addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();


        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.background = "green";
        } else {
            allNamesDOMCollection[counter].style.display = "block";
        }
    }
});*/


document.getElementById("play").addEventListener("click", function (event) {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    if (searchQuery.length >= 3) {
        for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
            const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();


            if (currentName.includes(searchQuery)) {
                allNamesDOMCollection[counter].style.background = "green";
            } else {
                allNamesDOMCollection[counter].style.display = "block";
            }
        }
    } else {
        alert("Fill in your name!")
    }

}, { once: true });
document.getElementById("nope").addEventListener("click", function (event) {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');

    if (searchQuery.length >= 3) {
        for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
            const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();


            if (currentName.includes(searchQuery)) {
                allNamesDOMCollection[counter].style.background = "red";
            } else {
                allNamesDOMCollection[counter].style.display = "block";
            }
        }
    } else {
        alert("Fill in your name!")
    }

}, { once: true });

function getTuesday() {
    var d = new Date(2020, 7, 4),
        month = d.getMonth(),
        tuesdays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 2) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Tuesdays in the month
    while (d.getMonth() === month) {
        tuesdays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return tuesdays;
}
var tuesDate = document.getElementById('dateTue')
tuesDate.textContent = getTuesday()
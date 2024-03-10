const citiesToVisit = ["Brighton", "Buenos Aires", "Cape Town", "Denver", "Kyoto", "Lisbon"];
const holidayButton = document.getElementById("HolidayButton");

const cityPicker = () => {
    holidayButton.onclick = () => {
    const randomCity = Math.floor(Math.random() * citiesToVisit.length);
    const destinationCity = citiesToVisit[randomCity];
    holidayButton.innerHTML = "Congratulations!!! You're going to " + destinationCity +"!";
    }
};
cityPicker();




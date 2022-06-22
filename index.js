const buttonMowLawn = document.querySelector(".btn-mow-lawn");
const buttonWashCar = document.querySelector(".btn-wash-car");
const buttonPullWeeds = document.querySelector(".btn-pull-weeds");
const sectionTasks = document.querySelector(".section-tasks");
const totalAmountDisplay = document.querySelector(".total-amount-display");
const sendInvoiceButton = document.querySelector(".btn-invoice");
let servicesRequested = [];
let totalAmount = 0;

buttonMowLawn.addEventListener("click", function () {
    includeService("Mow Lawn", 20);
})

buttonWashCar.addEventListener("click", function () {
    includeService("Wash Car", 10);
});

buttonPullWeeds.addEventListener("click", function () {
    includeService("Pull Weeds", 30);
});

sendInvoiceButton.addEventListener("click", function () {
    servicesRequested = [];
    totalAmount = 0;
    totalAmountDisplay.textContent = `$${totalAmount}`;
    sectionTasks.innerHTML = "";
})

function includeService(service, price) {
    if (!servicesRequested.includes(service)) {
        servicesRequested.push(service);
        totalAmount += price;
        totalAmountDisplay.textContent = `$${totalAmount}`;
        displayService(service, price);
    }
}

function displayService(service, price) {
    let divEl = document.createElement("div");
    divEl.classList.add("task");
    divEl.innerHTML = `
        <h2>${service}</h2>
        <span class="remove-span">Remove</span>
        <p>$<span>${price}</span></p>
    `;
    // TODO: Get rid of query by rewriting the block above
    let removeButton = divEl.querySelector(".remove-span");
    removeButton.addEventListener("click", function () {
        this.parentElement.remove();
        totalAmount -= price;
        totalAmountDisplay.textContent = `$${totalAmount}`;
        servicesRequested = servicesRequested.filter(item => item !== service);
    })
    sectionTasks.append(divEl);
}
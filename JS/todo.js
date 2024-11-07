document.getElementById("addItemButton").addEventListener("click", function () {
    const itemInput = document.getElementById("itemInput");
    const dateInput = document.getElementById("dateInput");
    const todoList = document.getElementById("todoList");

    const itemText = itemInput.value;
    const dateText = dateInput.value;

    if (itemText === "" || dateText === "") {
        alert("Please enter both an item and a date.");
        return;
    }

    const listItem = document.createElement("div");
    listItem.className = "todo-item";
    listItem.innerHTML = `
        <span class="items">${itemText} - <span class="date">${dateText}</span></span>
        <button class="deleteButton">Delete</button>
    `;

    todoList.appendChild(listItem);

    itemInput.value = "";
    dateInput.value = "";

    listItem
        .querySelector(".deleteButton")
        .addEventListener("click", function () {
            todoList.removeChild(listItem);
        });
});

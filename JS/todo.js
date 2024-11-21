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

    // Parse and format the date
    const date = new Date(dateText);
    const formattedDate = `${date.getMonth() + 1
        }/${date.getDate() + 1}/${date.getFullYear()}`;

    const listItem = document.createElement("div");
    listItem.className = "todo-item";
    listItem.innerHTML = `
          <div class="thing"><span class="items">${itemText} - ${formattedDate}</span>
          <button class="deleteButton">Delete</button></div>
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

// script.js

// Sample Task Data (Replace with your actual data)
const tasks = [
    {
        header: "ShopEasy",
        title: "Fix Mobile Button Issue",
        description: "Debug using Chrome DevTools, check for overlapping.",
        deadline: "21 March 2025",
        status: "completed"
    },
    {
        header: "CloudSync",
        title: "Add Dark Mode",
        description: "Store the user's preference in localStorage, update CSS.",
        deadline: "21 March 2025",
        status: "completed"
    },
    // ... more tasks
];

// Sample Activity Log Data (Replace with your actual data)
const activityLog = [
    "You have Complete The Task Add Dark Mode at 12:48:15 PM",
    "You have Complete The Task Add Dark Mode at 12:48:15 PM",
    // ... more log entries
];

// Function to create a task card element
function createTaskCard(task) {
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.innerHTML = `
        <div class="task-header">${task.header}</div>
        <div class="task-title">${task.title}</div>
        <div class="task-description">${task.description}</div>
        <div class="task-footer">
            <div class="deadline">Deadline<br>${task.deadline}</div>
            <div class="status ${task.status}">${task.status}</div>
        </div>
    `;
    return card;
}

// Function to create a log item element
function createLogItem(logMessage) {
    const item = document.createElement("div");
    item.classList.add("log-item");
    item.innerHTML = `<p>${logMessage}</p>`;
    return item;
}

// Get references to DOM elements
const tasksContainer = document.querySelector(".tasks");
const activityLogContainer = document.querySelector(".activity-log");
const clearHistoryButton = document.querySelector(".clear-history");

// Populate task cards
tasks.forEach(task => {
    const taskCard = createTaskCard(task);
    tasksContainer.appendChild(taskCard);
});

// Populate activity log
activityLog.forEach(logMessage => {
    const logItem = createLogItem(logMessage);
    activityLogContainer.appendChild(logItem);
});

// Clear history button functionality
clearHistoryButton.addEventListener("click", () => {
    activityLogContainer.innerHTML = ""; // Clear log items
});
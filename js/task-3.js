const inputControl = document.getElementById("name-input");
document.getElementById("name-input").addEventListener("input", () => {
    const data = inputControl.value.trim();
    document.getElementById("name-output").textContent = data === "" ? "Anonymous" : data;
});

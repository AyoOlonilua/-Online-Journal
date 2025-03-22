
function saveEntry() {
    let entryText = document.getElementById("journal-entry").value;
    if (entryText.trim() === "") {
        alert("Please enter some text.");
        return;
    }
    
    let entriesDiv = document.getElementById("entries");
    let newEntry = document.createElement("div");
    newEntry.classList.add("entry");
    newEntry.innerText = entryText;
    entriesDiv.prepend(newEntry);

    document.getElementById("journal-entry").value = "";
}
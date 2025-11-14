const fileInput = document.getElementById("file-input");
const dropArea = document.getElementById("drop-area");
const preview = document.getElementById("preview");
const uploadBtn = document.getElementById("upload-btn");
const statusText = document.getElementById("status");

let selectedFile = null;

// drag events
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#000";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.borderColor = "#cfcfcf";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#cfcfcf";
    selectedFile = e.dataTransfer.files[0];
    showPreview();
});

fileInput.addEventListener("change", () => {
    selectedFile = fileInput.files[0];
    showPreview();
});

function showPreview() {
    if (!selectedFile) return;
    const url = URL.createObjectURL(selectedFile);
    preview.src = url;
    preview.style.display = "block";
    uploadBtn.style.display = "inline-block";
}

// Upload API
uploadBtn.addEventListener("click", () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("video", selectedFile);

    statusText.innerText = "Uploading...";

    fetch("upload.php", {
        method: "POST",
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            statusText.innerText = data;
        });
});

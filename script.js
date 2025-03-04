document.addEventListener("DOMContentLoaded", function() {
    console.log("Resume Page Loaded!");
});

// Function to submit form data to Google Sheets
function submitForm() {
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbz4mbc3PDgJq-BmKUZO8BHrDROonIUxu2w8Biz9KftgRLnnkMsBpjTlNONpxny5DMY75A/execL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch(error => console.error("Error:", error));
}

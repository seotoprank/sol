document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("تم إرسال رسالتك بنجاح!");
        form.reset();
    });
});
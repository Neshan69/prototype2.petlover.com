    const adoptButtons = document.querySelectorAll(".card button");

    // Add click event to each button
    adoptButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Redirect user to contact page
            window.location.href = "contact.html";
        });
    });
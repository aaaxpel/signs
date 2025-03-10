function copyToClipboard(url) {
    navigator.clipboard.writeText(url).then(() => {
        const confirmation = document.getElementById('confirmation');
        confirmation.style.visibility = 'visible';
        setTimeout(() => {
            confirmation.style.visibility = 'hidden';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function filterSigns() {
    // Get the selected color group
    const selectedGroup = document.querySelector('input[name="color-group"]:checked')?.value;

    // Get all the sign images
    const allSigns = document.querySelectorAll('.sign-group img');
    
    // Loop through each sign image and hide/show based on the selected group
    allSigns.forEach(img => {
        const imgSrc = img.src.toLowerCase();

        if (selectedGroup === "none") {
            // Show all signs when "Show All Colors" is selected or if the sign is always visible
            img.style.display = "inline-block";
        } else if (selectedGroup === "black" && imgSrc.includes("black")) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "white" && imgSrc.includes("white")) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "red" && (imgSrc.includes("red"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "orange" && (imgSrc.includes("orange") || imgSrc.includes("tan"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "yellow" && (imgSrc.includes("yellow"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "green" && (imgSrc.includes("green")|| imgSrc.includes("cyan"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "blue" && (imgSrc.includes("blue") || imgSrc.includes("cyan"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "purple" && (imgSrc.includes("purple"))) {
            img.style.display = "inline-block";
        } else if (selectedGroup === "pink" && (imgSrc.includes("pink"))) {
            img.style.display = "inline-block";
        }else {
            img.style.display = "none";
        }
    });
}
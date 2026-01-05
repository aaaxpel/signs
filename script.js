let messageTimeout
let visibilityTimeout

function copyToClipboard(url) {
    navigator.clipboard.writeText(url).then(() => {
        clearTimeout(messageTimeout)
        clearTimeout(visibilityTimeout)
        const confirmation = document.getElementById('confirmation')
        https://download.dashmap.live/8b23a52e-a6fb-4cc9-a53b-0c46c08768fa/2x1_WhiteLeft4.png
        confirmation.innerHTML = url.split('/').pop()
        confirmation.style.visibility = 'visible'
        confirmation.style.opacity = 100
        messageTimeout = setTimeout(() => {
            confirmation.style.opacity = 0
            visibilityTimeout = setTimeout(() => {
                confirmation.style.visibility = 'hidden'                
            }, 200)
        }, 1000)
    }).catch(err => {
        console.error('Failed to copy: ', err)
    })
}

function filterSigns() {
    // Get the selected color group
    const selectedGroup = document.querySelector('input[name="color-group"]:checked')?.value

    // Get all the sign images
    const allSigns = document.querySelectorAll('.sign-group img')
    
    // Loop through each sign image and hide/show based on the selected group
    allSigns.forEach(img => {
        const imgSrc = img.src.toLowerCase()

        if (selectedGroup === "none") {
            // Show all signs when "Show All Colors" is selected or if the sign is always visible
            img.style.display = "inline-block"
        } else if (selectedGroup === "black" && imgSrc.includes("black")) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "white" && (imgSrc.includes("white") || imgSrc.includes("cream") || imgSrc.includes("gray") || imgSrc.includes("flaglogo"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "red" && (imgSrc.includes("red"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "orange" && (imgSrc.includes("orange") || imgSrc.includes("brown") || imgSrc.includes("tan"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "yellow" && (imgSrc.includes("yellow") || imgSrc.includes("cream") || imgSrc.includes("gold"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "green" && (imgSrc.includes("green") || imgSrc.includes("lime")  || imgSrc.includes("cyan"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "blue" && (imgSrc.includes("blue") || imgSrc.includes("indigo") || imgSrc.includes("cyan"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "purple" && (imgSrc.includes("purple") || imgSrc.includes("indigo"))) {
            img.style.display = "inline-block"
        } else if (selectedGroup === "pink" && (imgSrc.includes("pink"))) {
            img.style.display = "inline-block"
        }else {
            img.style.display = "none"
        }
    })
}
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})

const copyBtn = document.querySelectorAll('.copy');

async function copyText(e) {
    e.preventDefault()
    let link = this.getAttribute('link')
    console.log(`The link: "${link}"`)    
    try {
        await navigator.clipboard.writeText(link)
        alert("Link copied to clipboard")
    } catch (err) {
        console.error(err)    
    }
}

copyBtn.forEach(copyBtn =>
    copyBtn.addEventListener('click', copyText))
    
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    console.log("Hier lang!")
    setTimeout(() => {
        document.getElementById("werbe-link").href = "http://localhost:9081/realsurvey";
    }, 500)

});
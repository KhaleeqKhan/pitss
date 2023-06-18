let prints = [];
let log

function submitAccepted() {
    log.textContent = `Danke für ihr Feedback!`;
}

function submitRejected() {
    log.textContent = `Tut uns leid, sie haben bereits Teilegenommen.`;
}

function testParms(params){
    if (!prints.includes(params.hash)) {
        prints.push(params.hash)
        submitAccepted();
    }
    else {
        submitRejected()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    log = document.getElementById("log");
});

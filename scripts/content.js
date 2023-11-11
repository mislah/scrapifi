function clip(text) {
    let dummyKid = document.createElement("textarea");
    dummyKid.textContent = text;
    document.body.appendChild(dummyKid);
    dummyKid.select();
    document.execCommand('copy');
    dummyKid.blur();
    document.body.removeChild(dummyKid);
    console.log("copied")
}

function getData() {
    return {
        "url": window.location.href,
        "price": document.querySelector('[aria-label="Price"]').innerText,
        "location": document.querySelector('[aria-label="Property header"]').innerText,
        "area": document.querySelector('[aria-label="Area"]').innerText,
        "listing": document.querySelector('[aria-label="Reactivated date"]').innerText
    }
}

chrome.runtime.onMessage.addListener((request) => {
    let data = getData();
    console.log(data)
    if (request.message === "clip") {
        outText = ""
        Object.keys(data).forEach(key => {
            outText += data[key] + "\t"
        });
        clip(outText.replace(/\t$/,""))
    }
});
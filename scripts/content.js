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
    let data = {
        'url': window.location.href
    }
    const schema = schemas.find(element => element.host === window.location.host)['schema'];
    Object.keys(schema).forEach(key => {
        data[key] = document.querySelector(schema[key]).innerText;
    });
    return data;
}

chrome.runtime.onMessage.addListener((request) => {
    let data = getData();
    if (request.message === "clip") {
        let outText = ""
        format.forEach(key => {
            outText += (data[key] ?? "") + "\t"
        });
        clip(outText.replace(/\t$/, ""))
    }
});
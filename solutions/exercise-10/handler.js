
const reqListener = response => {
    const content = document.getElementById("content")
    content.innerHTML = response.currentTarget.response
}

const loadData = () => {
    const req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open("get", "jim.json", true);
    req.send();
};

window.onload = () => {
    const loadButton = document.getElementById("loadButton");
    loadButton.onclick = loadData;
};
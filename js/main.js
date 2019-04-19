console.log("we are happy");

const showItems = (legosData) => {
    const legoDisplay = document.getElementById("lego-display");

    legosData.LegoColorss.forEach((lego) => {
        let legoBlock = buildLego(lego);
        legoDisplay.innerHTML += legoBlock;
    });
};

const startTheShow = () => {
    loadLegos()
    .then((result) => {
        console.log("yeah", result);
        showItems(result);
    })
}

document.querySelector("#bt-getData").addEventListener("click", startTheShow);
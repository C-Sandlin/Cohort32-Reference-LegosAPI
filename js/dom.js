
const buildLego = (lego) => {
    //building a string to create the visual display

    //each seperated by comma
    let block = "",
        wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">`,
        title = `<h3>Name: ${lego.LegoName}</h3>`,
        years = `<div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;


    // let block = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${lego.ColorHex}">
    //             <h3>Name: ${lego.LegoName}</h3>
    //             <div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;


    let link = lego.ColorstreamLinkImage;
    if (link) {
        block += `<a href="${link}" target="_blank">${wrapper + title + years}</section></a>`;
    } else {
        block += `${wrapper + title + years}</section>`;
    }
    return block;
};
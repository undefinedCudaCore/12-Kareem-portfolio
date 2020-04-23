"use strict"

class SectionHeading {
    constructor(element) {
        this.element = element;
        this.text = element.dataset.h2;
        this.align = element.dataset.h2Align || '';

        this.render();
    }
    render() {
        const HTML = `<h2 class="${this.align}">${this.text}</h2>`;
        
        this.element.insertAdjacentHTML('afterbegin', HTML);
    }
}

export default SectionHeading;
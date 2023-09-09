class SVG {
    constructor(text, shape){
        this.text = text;
        this.shape = shape
    }
    setText(myText,color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${myText}</text>`;
        if (myText.length > 3) {
            const textError = new Error("Text must not exceed 3 characters.");
            throw(textError)
        }
    }
    setShape(shape) {
        this.shape = shape.render();
    }
    render() {
        if (this.text === undefined) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
        } else if (this.shape === undefined){
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}</svg>`
        } else {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`}
    }
}


module.exports = SVG
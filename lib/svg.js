class SVG {
    constructor(text){
        this.text = text
    }
    setText(myText,color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${myText}</text>`
    }
    render() {
        if (this.text === undefined) {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
        } else {return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}</svg>`}
    }
    setShape() {}
    setColor() {}
}


module.exports = {SVG}
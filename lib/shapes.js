class Square {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"`
    }
    setColor(newColor) {
        this.color = newColor
    }
}


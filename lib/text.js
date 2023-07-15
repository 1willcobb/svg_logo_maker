class Txt {
    constructor(txt, textColor) {
        this.txt = txt;
        this.textColor = textColor;
      }

    render() {
        return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-size="100">${this.txt}</text>`
    }
}

module.exports = Txt

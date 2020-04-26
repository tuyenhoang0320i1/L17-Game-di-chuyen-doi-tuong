class Hero {
    constructor(image, top, left, speedLeft, speedTop,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.speedLeft=speedLeft;
        this.speedTop=speedTop;
        this.size = size;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveHero() {
        if (this.left > window.innerWidth - this.size || this.left < 0 ) {
            this.speedLeft = -this.speedLeft;
        }
        if (this.top > window.innerHeight || this.top < 0) {
            this.speedTop = -this.speedTop;
        }
        this.left += this.speedLeft;
        this.top += this.speedTop;

    }
}

let hero = new Hero('iron.png', 200, 200, 70,70,200);

function start() {
    hero.moveHero();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
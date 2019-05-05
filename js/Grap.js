class Grap {
    constructor() {
        let list = document.querySelectorAll(".card");

        this.cardList = [];
        list.forEach(x => {
            let p = x.dataset.percent; //data-percent="값"
            let c = x.querySelector("canvas");
            
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector(".mySkills");
        window.addEventListener("scroll", this.scrollHandle.bind(this));
    }

    draw() {
        this.cardList.forEach(x => x.start());
    }

    scrollHandle(e) {
        if(window.scrollY * 4 >= this.p.offsetTop && !this.isDrawed) {
            this.draw();
            this.isDrawed = true;
        }
        else if(scrollY * 4 <= this.p.offsetTop && this.isDrawed) {
            this.isDrawed = false;
        }
    }
}

window.onload = function() {
    let grap = new Grap();
}
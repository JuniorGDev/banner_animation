function startAnimation() {
    function transitionFrameOne() {
        let linguica = document.querySelector('#linguica');
        let frango = document.querySelector('#frango');
        let costela = document.querySelector('#costela');
        linguica.classList.add('slide-in-left');
        frango.classList.add('slide-in-left1');
        costela.classList.add('slide-in-left2');
    }
    function transitionFrameTwo() {
        let frame = document.querySelector('#frame');
        let frameOne = document.querySelector('#frameOne');
        frame.classList.add('transition-none');
        frameOne.style.display = 'flex';
    }
    function transitionFrameThree() {
        let textLing = document.querySelector('#text-ling');
        textLing.classList.add('slide-in-top');
    }

    function transitionFramFour() {
        let textLing = document.querySelector('#text-ling');
        textLing.classList.add('transition-none');
    }

    function transitionFrameFive() {
        let textBrasa = document.querySelector('#text-brasa');
        textBrasa.style.display = 'block';
    }
    setTimeout(transitionFrameOne, 4000);
    setTimeout(transitionFrameTwo, 6000);
    setTimeout(transitionFrameThree, 9000);
    setTimeout(transitionFramFour, 10000);
    setTimeout(transitionFrameFive, 10000);
}


setTimeout(startAnimation, 1000);
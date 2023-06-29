const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//--container__body-new-opition btn

const btn_opition = $$('.container__body-new-opition-btn');
btn_opition.forEach((btn) => {
    btn.onclick = function() {
        $('.container__body-new-opition-btn.active').classList.remove('active');
        this.classList.add('active');
    }
});

//navbar__body-item focus
const items = $$('.navbar__body-item');
items.forEach((item) => {
    item.onclick = function() {
        $('.navbar__body-item.active').classList.remove('active');
        this.classList.add('active');
    }
})

//--action button heart
const heart = $('.music__play-song-action-heart');
heart.onclick = function() {
    const open = $('.music__play-song-action-heart i');
    open.classList.toggle('heart-active')
}

//pause && play button
const play = $('.music__playing-action-play');
play.onclick = function() {
    const play_pause = $$('.music__playing-action-play-icon');
    play_pause.forEach((i) => {
        i.classList.toggle('hidden');
    })
}

//--action button random
const randombtn = $('.music__playing-action-random');
randombtn.onclick = function() {
    const open = $('.music__playing-action-random i');
    open.classList.toggle('heart-active')
}

//--action button repeat
const repeatbtn = $('.music__playing-action-repeat');
repeatbtn.onclick = function() {
    const open = $('.music__playing-action-repeat i');
    open.classList.toggle('heart-active')
}

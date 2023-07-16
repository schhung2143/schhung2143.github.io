const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//--container__body-new-opition btn (focus )
const btn_opition = $$('.container__body-new-opition-btn');
btn_opition.forEach((btn) => {
    btn.onclick = function() {
        $('.container__body-new-opition-btn.active').classList.remove('active');
        this.classList.add('active');
    }
});

//--navbar-child-body-btn (focus navbar child)
const navbarchild = $$('.navbar-child-body-btn');
navbarchild.forEach((nav) => {
    nav.onclick = function() {
        $('.navbar-child-body-btn.active').classList.remove('active');
        this.classList.add('active');
    }
})

//--navbar__body-item focus
const items = $$('.navbar__body-item');
items.forEach((item) => {
    item.onclick = function() {
        $('.navbar__body-item.active').classList.remove('active');
        this.classList.add('active');
    }
})

//-- Playlist 
const player = $('.music__play')
const playing = $('.music__playing-action-play');
const musicplay = $('.music__play');
const audio = $('.music_audio');
const progress = $('.music__playing-progress');
const songname = $('.music__play-song-info-name');
const songsinger = $('.music__play-song-info-singer');
const songimg = $('.music__play-song-img');
const timenow = $('.music__playing-timeline-left');
const timeend = $('.music__playing-timeline-right')
const heart = $('.music__play-song-action-heart');
const randombtn = $('.music__playing-action-random');
const repeatbtn = $('.music__playing-action-repeat');
const nextbtn = $('.music__playing-action-next');
const prevbtn = $('.music__playing-action-before');

//-- list songs
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    songs: [
        {
            name: 'Đã Lỡ Yêu Em Nhiều',
            singer: 'JustaTee',
            music: './assest/music/daloyeu.mp3',
            img: './assest/img/daloyeu.jpg'
        },
        {
            name: 'Nàng Thơ',
            singer: 'Hoàng Dũng',
            music: './assest/music/nangtho.mp3',
            img: './assest/img/nangtho.jpg'
        },
        {
            name: 'Sau tất cả',
            singer: 'Erik',
            music: './assest/music/sautatca.mp3',
            img: './assest/img/sautatca.jpg'
        },
        {
            name: 'Chẳng Thể Tìm Được Em',
            singer: 'PhucXp ft. Freak D',
            music: './assest/music/changthe.mp3',
            img: './assest/img/changthetimdcem.jpg'
        },
        {
            name: 'Mãi Mãi Không Phải Anh',
            singer: 'Thanh Bình',
            music: './assest/music/maimai.mp3',
            img: './assest/img/maimaikolaanh.jpg'
        }
    ],

    render: function() {
        const html = this.songs.map(song => {
            return `
            <li class="category__recent-item">
            <div class="category__recent-item-level">
                <img src="${song.img}" alt="Anh" class="category__recent-item-img">
                <i class="category__recent-item-level-play fa-solid fa-play"></i>
                <div class="category__recent-item-info">
                    <div class="category__recent-item-name">${song.name}</div>
                    <span class="category__recent-item-sings">
                        <a class="category__recent-item-sing">${song.singer}</a>
                    </span>
                </div>
            </div>
            <div class="category__recent-item-btn">
                <div class="category__recent-item-btn-icon">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="category__recent-item-btn-icon">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </li>
            `
        })
        $('.category__recent-list').innerHTML = html.join('');
        const firstsong = $('.category__recent-item:first-child');
        firstsong.classList.add('category__recent-item-active')
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function() {
        const _this = this;

        //--action button heart (nut tha tym)
        heart.onclick = function() {
            const openheart = $('.music__play-song-action-heart i');
            openheart.classList.toggle('heart-active')
        }

        //--action button repeat (nut nghe lai)
        repeatbtn.onclick = function() {
            const openrepeat = $('.music__playing-action-repeat i');
            openrepeat.classList.toggle('heart-active')
        }

        //xu ly hanh dong click play
        playing.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        //khi song play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
        }

        //khi song play
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
        }


        //khi tien do bai hat thay doi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                let minuteend = Math.floor(audio.duration/60);
                let secondend = Math.floor(audio.duration%60);
                minuteend = minuteend > 9 ? String(minuteend) : '0' + String(minuteend);
                secondend = secondend > 9 ? String(secondend) : '0' + String(secondend);
                timeend.textContent = `${minuteend}:${secondend}`;

                let minutenow = Math.floor(audio.currentTime/60);
                let secondnow = Math.floor(audio.currentTime%60);
                minutenow = minutenow > 9 ? String(minutenow) : '0' + String(minutenow);
                secondnow = secondnow > 9 ? String(secondnow) : '0' + String(secondnow);
                timenow.textContent = `${minutenow}:${secondnow}`;
                const currentProgress = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = currentProgress;
                let val = progress.value;
                progress.style.backgroundSize = val + '% 100%';
            }
        }

        // xu ly khi nguoi dung tua nhac
        progress.onchange = function(e) {
            const seektime = e.target.value/100 * audio.duration;
            audio.currentTime = seektime;
        }

        //khi next song 
        nextbtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            // $('.category__recent-item.category__recent-item-active').classList.remove('category__recent-item-active');
            // let activesong = `.category__recent-item-active::nth-child(${this.currentIndex})`;
            // $(activesong).classList.add('category__recent-item-active');
        }

        //khi prev song 
        prevbtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
        }

        //khi bat/tat random
        randombtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            randombtn.classList.toggle('heart-active');
        }
    },

    loadCurentsong: function() {
        songimg.src = this.currentSong.img;
        songname.textContent = this.currentSong.name;
        songsinger.textContent = this.currentSong.singer;
        audio.src = this.currentSong.music;
    },

    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurentsong();
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length-1;
        }
        this.loadCurentsong();
    },

    randomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurentsong();
    },

    start: function() {
        //dinh nghia cac thuoc tinh cho obj
        this.defineProperties();

        //load currentsong (tai thong tin bai hat dau tien vao UI khi chay qpp)
        this.loadCurentsong();

        //lang nghe va xu ly cac su kies
        this.handleEvents();

        //render lai playlist
        this.render();
    }
} 

app.start();

// bong cua range
const rangeInputs = document.querySelector('.music__play-tool-volume-sidebar')
function handleInputchange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max -min) + '% 100%';
}

rangeInputs.addEventListener('input', handleInputchange);
progress.addEventListener('input', handleInputchange);
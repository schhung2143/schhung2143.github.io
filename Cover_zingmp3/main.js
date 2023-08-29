const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//-- Playlist 
const header = $('.container__header');
const container = $('.container');
const player = $('.music__play')
const playing = $('.music__playing-action-play');
const playlist = $('.category__recent-list');
const listsong = $('.category__body-list')
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
const btn_opition = $$('.container__body-new-opition-btn');
const navbarchild = $$('.navbar-child-body-btn');
const items = $$('.navbar__body-item');
const category = $('.category');
const toggle = $('.category__header-select');
const toggleAuto = $('.category__body-heading-auto');
const auto = $('.category__body-heading-toggle-auto');
const listCategory = $('.music__play-tool-list');
const volume = $('.music__play-tool-volume-sidebar');
const volumebtn = $('.music__play-tool-volume-icon')

//-- list songs
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isheart: false,
    isAuto: false,
    isCategory: false,
    ismute: false,
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
            name: 'Mãi mãi không phải anh',
            singer: 'Thanh Bình',
            music: './assest/music/maimai.mp3',
            img: './assest/img/maimaikolaanh.jpg'
        },
        {
            name: '3107',
            singer: 'ft. Nâu. Duongg',
            music: './assest/music/3107.mp3',
            img: './assest/img/3107.jpg'
        },
        {
            name: 'Ánh sao và bầu trời',
            singer: 'T.R.I x Cá',
            music: './assest/music/anhsaovabautroi.mp3',
            img: './assest/img/anhsaovabautroi.jpg'
        },
        {
            name: 'Ừ có anh đây',
            singer: 'Tino',
            music: './assest/music/coanhday.mp3',
            img: './assest/img/ucoanhday.jpg'
        },
        {
            name: 'Có em',
            singer: 'Madihu',
            music: './assest/music/coem.mp3',
            img: './assest/img/coem.jpg'
        },
        {
            name: 'Như anh đã thấy em',
            singer: 'PhucXp ft. Freak D',
            music: './assest/music/dathayem.mp3',
            img: './assest/img/nhuanhdathayem.jpg'
        },
        {
            name: `Don't côi`,
            singer: 'RPT Orijinn x Ronboogz',
            music: './assest/music/dontcoi.mp3',
            img: './assest/img/dontcoi.jpg'
        },
        {
            name: 'Kẻ điên tin vào tình yêu',
            singer: 'Lil Z',
            music: './assest/music/kedien.mp3',
            img: './assest/img/kedientinvaotinhyeu.jpg'
        },
        {
            name: 'Lạc nhau có phải muôn đời',
            singer: 'Erik',
            music: './assest/music/lacnhau.mp3',
            img: './assest/img/lacnhau.jpg'
        },
        {
            name: 'Lan man',
            singer: 'Ronboogz',
            music: './assest/music/lanman.mp3',
            img: './assest/img/lanman.jpg'
        },
        {
            name: 'Một nhà',
            singer: 'Da laD',
            music: './assest/music/motnha.mp3',
            img: './assest/img/motnha.jpg'
        },
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng M-TP',
            music: './assest/music/muonroi.mp3',
            img: './assest/img/Sơn_Tùng_M-TP_-_Muộn_rồi_mà_sao_còn.png'
        },
        {
            name: 'Nơi này có anh',
            singer: 'Sơn Tùng M-TP',
            music: './assest/music/noinaycoanh.mp3',
            img: './assest/img/noinaycoanh.jpg'
        },
        {
            name: 'Vi anh đâu có biết',
            singer: 'Mahihu',
            music: './assest/music/vianhdaucobt.mp3',
            img: './assest/img/vianhdaucobiet.jpg'
        }
    ],

    listsongs: [
        {
            name: 'Kẻ điên tin vào tình yêu',
            singer: 'Lil Z',
            music: './assest/music/kedien.mp3',
            img: './assest/img/kedientinvaotinhyeu.jpg'
        },
        {
            name: '3107',
            singer: 'ft. Nâu. Duongg',
            music: './assest/music/3107.mp3',
            img: './assest/img/3107.jpg'
        },
        {
            name: 'Ánh sao vào bầu trời',
            singer: 'T.R.I x Cá',
            music: './assest/music/anhsaovabautroi.mp3',
            img: './assest/img/anhsaovabautroi.jpg'
        },
        {
            name: 'Có em',
            singer: 'Madihu',
            music: './assest/music/coem.mp3',
            img: './assest/img/coem.jpg'
        },
        {
            name: `Don't côi`,
            singer: 'RPT Orijinn x Ronboogz',
            music: './assest/music/dontcoi.mp3',
            img: './assest/img/dontcoi.jpg'
        },
        {
            name: 'Forget me now',
            singer: 'Fishy ft. Trí Dũng',
            music: './assest/music/forgetmenow.mp3',
            img: './assest/img/forgetmenow.jpg'
        },
        {
            name: 'Như Anh đã thấy em',
            singer: 'PhucXp ft. Freak D',
            music: './assest/music/dathayem.mp3',
            img: './assest/img/nhuanhdathayem.jpg'
        },
        {
            name: 'Nơi này có anh',
            singer: 'Sơn Tùng M-TP',
            music: './assest/music/noinaycoanh.mp3',
            img: './assest/img/noinaycoanh.jpg'
        },
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng M-TP',
            music: './assest/music/muonroi.mp3',
            img: './assest/img/Sơn_Tùng_M-TP_-_Muộn_rồi_mà_sao_còn.png'
        },
        {
            name: 'Thằng Điên',
            singer: 'JustaTee x Phương Ly',
            music: './assest/music/thangdien.mp3',
            img: './assest/img/thangdien.jpg'
        },
        {
            name: 'Vì anh đâu có biết',
            singer: 'Madihu',
            music: './assest/music/vianhdaucobt.mp3',
            img: './assest/img/vianhdaucobiet.jpg'
        },
        {
            name: 'Ừ có anh đây',
            singer: 'Tino',
            music: './assest/music/coanhday.mp3',
            img: './assest/img/ucoanhday.jpg'
        },
        {
            name: 'Lạc nhau có phải muôn đời',
            singer: 'Erik',
            music: './assest/music/lacnhau.mp3',
            img: './assest/img/lacnhau.jpg'
        },
        {
            name: 'Một nhà',
            singer: 'Da LaD',
            music: './assest/music/motnha.mp3',
            img: './assest/img/motnha.jpg'
        },
        {
            name: 'Lan Man',
            singer: 'Ronboogz ',
            music: './assest/music/lanman.mp3',
            img: './assest/img/lanman.jpg'
        },
    ],

    render: function() {
        const html = this.songs.map((song, index) => {
            return `
            <li class="category__recent-item ${index === this.currentIndex ? 'category__recent-item-active' : ' '}" data-index = "${index}">
            <div class="category__recent-item-level">
                <img src="${song.img}" alt="Anh" class="category__recent-item-img">
                <div class="category__recent-item-play">
                    <i class="category__recent-item-level-play fa-solid fa-play"></i>
                    <div class="waves">
                        <span class="wave"></span>
                        <span class="wave"></span>
                        <span class="wave"></span>
                        <span class="wave"></span>
                        <span class="wave"></span>
                    </div>
                </div> 
                <div class="category__recent-item-info">
                    <div class="category__recent-item-name">${song.name}</div>
                    <span class="category__recent-item-sings">
                        <a class="category__recent-item-sing">${song.singer}</a>
                    </span>
                </div>
            </div>
            <div class="category__recent-item-btn">
                <div class="category__recent-item-btn-heart">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="category__recent-item-btn-menu">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </li>
            `
        })

        const html2 = this.listsongs.map((song, index) => {
            return `
            <li class="category__body-item data-index = "${index}"">
                <div class="category__body-item-level">
                    <img src="${song.img}" alt="Anh" class="category__body-item-level-img">
                    <i class="category__body-item-level-play fa-solid fa-play"></i>
                    <div class="category__body-item-level-info">
                        <div class="category__body-item-level-name">${song.name}</div>
                        <div class="category__body-item-level-sing">${song.singer}</div>
                    </div>
                </div>
                <div class="category__body-item-btn">
                    <div class="category__body-item-btn-icon">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="category__body-item-btn-icon">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </li>
            `
        })
        playlist.innerHTML = html.join('');
        listsong.innerHTML = html2.join('');
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

        //--container__body-new-opition btn (focus )
        btn_opition.forEach((btn) => {
            btn.onclick = function() {
                $('.container__body-new-opition-btn.active').classList.remove('active');
                this.classList.add('active');
            }
        });

        //--navbar-child-body-btn (focus navbar child)
        navbarchild.forEach((nav) => {
            nav.onclick = function() {
                $('.navbar-child-body-btn.active').classList.remove('active');
                this.classList.add('active');
            }
        })

        //--navbar__body-item focus
        items.forEach((item) => {
            item.onclick = function() {
                $('.navbar__body-item.active').classList.remove('active');
                this.classList.add('active');
            }
        })

        //--action button heart (nut tha tym)
        heart.onclick = function() {
            const openheart = $('.music__play-song-action-heart i');
            openheart.classList.toggle('heart-active')
        }

        //xu ly hanh dong click play
        playing.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        //hanh dong click vao nut play o list song
        const playbtn = $('.category__recent-item-play')    
        // playbtn.onclick = function() {
        //     playing.click();
        // }

        //khi song play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            category.classList.add('playing');
        }

        //khi song pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            category.classList.remove('playing');
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

        //khi ly khi dieu chinh am thanh
        volume.onchange = function(e) {
            let sound = e.target.value/100;
            audio.volume = sound;
            if(audio.volume == 0) {
                volumebtn.classList.add('mute');
            } else {
                volumebtn.classList.remove('mute');
            }
        }

        //khi next song 
        nextbtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }

        // khi prev song 
        prevbtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
        }

        // khi bat/tat random
        randombtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            randombtn.classList.toggle("active", _this.isRandom);
        }

        // khi bat/tat repeat
        repeatbtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            repeatbtn.classList.toggle("active", _this.isRepeat);
        }

        //bat/tat tu dong phat nhac
        toggleAuto.onclick = function() {
            _this.isAuto = !_this.isAuto;
            auto.classList.toggle("active", _this.isAuto);
        }

        // khi ket thuc 1 song ended song
        audio.onended = function() {
            if(_this.isAuto) {
                if(_this.isRepeat) {
                audio.play();
                } else {
                    nextbtn.click();
                }
            }
        }

        // hanh vi click vao songlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.category__recent-item:not(.category__recent-item-active')
            if(e.target.closest('.category__recent-item-btn-heart')) {
                _this.isheart = !_this.isheart;
                const tym = $('.category__recent-item-btn-heart');
                e.target.classList.toggle('heart-active', _this.isheart);
            }
            
            if(songNode && !e.target.closest('.category__recent-item-btn-heart') 
                && !e.target.closest('.category__recent-item-btn-menu')
                && !e.target.closest('.category__recent-item-sing')
            ) {
                // khi click vao song not active
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurentsong();
                    _this.render();
                    audio.play();
                }
            }
        }

        //đóng mỏ ds nghe gần đây
        toggle.onclick = function() {
            if(toggle.checked) {
                playlist.classList.add('hidden');
            } else {
                playlist.classList.remove('hidden');
            }
        }

        //Đóng mở DS bài hát
        listCategory.onclick = function() {
            _this.isCategory = !_this.isCategory;
            if(_this.isCategory) {
                category.classList.remove('hidden');
                header.style.right = 330 + 'px';
                container.style.marginRight = 330 + 'px';
            } else {
                category.classList.add('hidden');
                header.style.right = 0;
                container.style.marginRight = 0;
            }
        }

        //click vao nut volume
        volumebtn.onclick = function() {
            _this.ismute = !_this.ismute;
            volumebtn.classList.toggle('mute', _this.ismute);
            if(!_this.ismute) {
                audio.volume = 1;
                volume.value = 100;
            } else {
                audio.volume = 0;
                volume.value = 0;
            }
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
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex;
        this.loadCurentsong();
    },

    start: function() {
        //dinh nghia cac thuoc tinh cho obj
        this.defineProperties();

        //lang nghe va xu ly cac su kien
        this.handleEvents();

        //load currentsong (tai thong tin bai hat dau tien vao UI khi chay)
        this.loadCurentsong();

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
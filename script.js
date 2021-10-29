let iframes = document.getElementsByTagName('iframe');

const buttonClose1 = () => {
    document.getElementById('pop-up-01').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose2 = () => {
    document.getElementById('pop-up-02').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose3 = () => {
    document.getElementById('pop-up-03').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

const buttonClose4 = () => {
    document.getElementById('pop-up-04').style.display = 'none';
    if (iframes != null) {
        for (let i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src;
        }
    }
}

// Vue app
const app = new Vue({
    el: '#app',
    data: {
        header: 'My Favourite Topic',
        list: [
            {
                id: 1,
                name: 'Piano',
                description: 'The piano is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700, in which the strings are struck by wooden hammers that are coated with a softer material.',
                image_link: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-HD-Piano-Backgrounds-For-Desktop.jpg',
                wiki_link: 'https://en.wikipedia.org/wiki/Piano',
                demo_link: 'https://www.youtube.com/watch?v=wBef8xbGQzU',
                embed_link: 'https://www.youtube.com/embed/wBef8xbGQzU',
                min_price: 3000,
                max_price: 6500
            }, {
                id: 2,
                name: 'Guitar',
                description: 'The guitar is a musical instrument, usually made of wood, with six strings and a long neck, played with the fingers or a plectrum.',
                image_link: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                wiki_link: 'https://en.wikipedia.org/wiki/Guitar',
                demo_link: 'https://www.youtube.com/watch?v=y3nTJ3R2Tdk',
                embed_link: 'https://www.youtube.com/embed/y3nTJ3R2Tdk',
                min_price: 200,
                max_price: 600
            }, {
                id: 3,
                name: 'Drum',
                description: 'The drum is a member of the percussion group of musical instruments. In the Hornbostel-Sachs classification system, it is a membranophone.',
                image_link: 'https://wallpaperaccess.com/full/1262462.jpg',
                wiki_link: 'https://en.wikipedia.org/wiki/Drum',
                demo_link: 'https://www.youtube.com/watch?v=CzCM9YjNr6g',
                embed_link: 'https://www.youtube.com/embed/CzCM9YjNr6g',
                min_price: 300,
                max_price: 1000
            }, {
                id: 4,
                name: 'Violin',
                description: 'The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body.',
                image_link: 'https://cdn.wallpapersafari.com/92/13/gZsk4n.jpg',
                wiki_link: 'https://en.wikipedia.org/wiki/Violin',
                demo_link: 'https://www.youtube.com/watch?v=cRtUh7s3gA4',
                embed_link: 'https://www.youtube.com/embed/cRtUh7s3gA4',
                min_price: 1450,
                max_price: 25000
            },
        ]
    },
    methods: {
        windowPopUp: function (id) {
            for (let i = 0; i < this.list.length; i++) {
                if (id === this.list[i].id) {
                    document.getElementById(`pop-up-0${id}`).style.display = 'block';
                }
            }
        },
        buttonClose: function (id) {
            for (let i = 0; i < this.list.length; i++) {
                if (id === this.list[i].id) {
                    console.log(id);
                }
            }
        }
    }
});

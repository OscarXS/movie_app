export const slider = () => {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    // config param
    let countItem = items.length;
    let itemActive = 0;
    // event next click
    next.onclick = function() {
        itemActive = itemActive + 1;
        if(itemActive >= countItem) {
            itemActive = 0
        }
        showSlider();
    }
    // event prev click
    prev.onclick = function() {
        itemActive = itemActive - 1;
        if(itemActive < 0) {
            itemActive = countItem - 1; 
        }
        showSlider()
    }

    // auto run slider
    let refreshInterval = setInterval(() => {
        next.onclick();
    }, 5000)

    function showSlider() {
        // remove item active old
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
        itemActiveOld.classList.remove('active')
        thumbnailActiveOld.classList.remove('active')

        // active new item
        items[itemActive].classList.add('active')
        thumbnails[itemActive].classList.add('active');

        // clear interval time
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.onclick();
        }, 5000)
    }

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        })
    })
}

export const getCurrentMovies = () => {
    const currentMovies = async () => {
        fetch(`${import.meta.env.VITE_TMDB_URL}/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)  
        .then(res => res.json())
        .then(data => data.results)
        .then(data => console.log('Current Movies :', data))
      }
}
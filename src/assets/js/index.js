// бургер меню

const burgerMenu = document.querySelector('.header__burger');
const sideMenu = document.querySelector('.side-menu');

if (burgerMenu && sideMenu) {
    const closeBurgerMenuButton = document.querySelector('.side-menu__close');

    burgerMenu.addEventListener('click', () => {
        sideMenu.classList.add('side-menu--active');
    })

    closeBurgerMenuButton.addEventListener('click', () => {
        sideMenu.classList.remove('side-menu--active');
    })
}

// scroll слайдер, свaйпером было бы проще, но не знаю можно ли тут его юзать)

const reviewsContainer = document.querySelector('.main__reviews-container');
const reviewsContainerSpan = document.querySelector('.main__reviews-title span');
const dotsContainer = document.querySelector('.main__reviews-dots');
const cardsReviews = document.querySelectorAll('.main__card');
const cardsReviewsCount = cardsReviews.length
let activeCard = 1;

let isMobile = window.innerWidth <= 767;
if (isMobile) {
    reviewsContainerSpan.innerHTML = `${activeCard}/${cardsReviewsCount}`
} else {
    reviewsContainerSpan.innerHTML = `${cardsReviewsCount}`
}

if (reviewsContainer && cardsReviewsCount && isMobile) {
    const gapSize = 24;
    const cardWidth = 261 - gapSize;
    let scrollForNextCard = cardWidth;
    const reviewsContainerWidth = cardWidth * cardsReviewsCount;

    let lastScrollPos = 0
    let isScrollLeft = false

    reviewsContainer.addEventListener('scroll', (e) => {
            reviewsContainerSpan.innerHTML = `${activeCard}/${cardsReviewsCount}`
            let scrollPos = reviewsContainer.scrollLeft
            isScrollLeft = scrollPos > lastScrollPos;
            let newActiveCard = activeCard

            if (isScrollLeft && scrollForNextCard < reviewsContainerWidth && scrollForNextCard < reviewsContainer.scrollLeft) {
                activeCard++
                scrollForNextCard += cardWidth
            } else if (!isScrollLeft && scrollForNextCard > reviewsContainer.scrollLeft && scrollForNextCard > cardWidth) {
                activeCard--
                scrollForNextCard -= cardWidth
            }
            lastScrollPos = scrollPos

            if (newActiveCard === activeCard) return
            reviewsContainerSpan.innerHTML = `${activeCard}/${cardsReviewsCount}`
        }
    )
}

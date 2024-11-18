document.addEventListener('DOMContentLoaded', () => {

  const initPopups = () => {
    const links = document.querySelectorAll('.legend');
    const popups = document.querySelectorAll('.comics-popup');
    let currentPopupID = 0;

    const showClosePopup = () => {
      popups.forEach((popup) => {
        let popupID = Number(popup.getAttribute('id').split('comics-popup-')[1]);
        let popupBlock = popup.querySelector('.comics-popup__block');
        let popupCloseBtn = popup.querySelector('.comics-popup__close');

        if (popupID === currentPopupID) popup.classList.add('is-open');

        popupCloseBtn.addEventListener('click', () => popup.classList.remove('is-open'));

        popupBlock.addEventListener('click', (e) => e.stopPropagation());
        document.addEventListener('click', (e) => {
          if (!popupBlock.contains(e.target)) popup.classList.remove('is-open');
        });

      });
    }

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.stopPropagation();
        currentPopupID = Number(link.getAttribute('data-popup-id'));
        showClosePopup();
      });
    });
  }
  const initSliders = () => {
    const parameters = {
      direction: 'horizontal',
      slidePerView: 1,
      slidePerCount: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: false,

      pagination: {
        el: '.comics-slider__pagination',
        clickable: true
      },

      navigation: {
        prevEl: '.comics-slider__button-prev',
        nextEl: '.comics-slider__button-next',
        disabledClass: 'disabled'
      },
    }

    new Swiper('.comics-slider-1', parameters);
    new Swiper('.comics-slider-2', parameters);
    new Swiper('.comics-slider-3', parameters);
    new Swiper('.comics-slider-4', parameters);
  }

  initPopups();
  initSliders();
});
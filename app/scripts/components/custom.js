import $ from 'jquery'

export default () => {

  $('.mobile-table__title').on('click', function () {
    $(this).parents('.mobile-table').toggleClass('active')
    $(this).siblings('.blog__contents-list--mobile').slideToggle()
  })

  const navigationLinks = document.querySelectorAll('.blog__contents-list a');
  const sidebarMenu = document.querySelector('.blog__contents');

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', () => {
    navigationLinks.forEach(link => {
      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (isElementVisible(targetSection)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    const sidebarMenuRect = sidebarMenu.getBoundingClientRect();
    if (sidebarMenuRect.top < 0 || sidebarMenuRect.bottom > window.innerHeight) {
      sidebarMenu.classList.add('hidden');
    } else {
      sidebarMenu.classList.remove('hidden');
    }
  });

  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      const targetOffsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

      const headerHeight = 110;
      const targetScrollPosition = targetOffsetTop - headerHeight;
      window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    });
  });



  $('.faq__head').on('click', function () {
    $(this).parents('.faq__item').toggleClass('active')
    $(this).siblings('.faq__item-body').slideToggle()
  })

  if ($('.js-sticky').length) {
    $('.wrapper').addClass('wrapper--ovv')
  }

  $('.header__menu-btn').on('click', () => {
    $('.header__mobile').addClass('active')
    setTimeout(() => {
      $('.header__mobile-box').addClass('active')
    }, 300);
  })

  $('.js-close-menu').on('click', () => {
    $('.header__mobile-box').removeClass('active')
    setTimeout(() => {
      $('.header__mobile').removeClass('active')
    }, 300);
  })

  $('.header__search-btn').on('click', () => {
    $('.header').toggleClass('search')
  })

  $('.header__search-overlay').on('click', () => {
    $('.header').removeClass('search')
  })

  $('.blog__head-cell-author-link').on('click', function lang(event) {
    if ($(window).width() < 1200) {
      event.stopPropagation();
      $(this).parents('.blog__head-cell-author').toggleClass('active')
      return false
    }
  })

  $(document).on("click", (event) => {
    event.stopPropagation();
    if ($(event.target).closest(".blog__dropdown").length) return;
    $('.blog__head-cell-author').removeClass('active')
  });

}
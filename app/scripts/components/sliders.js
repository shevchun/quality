import $ from 'jquery';
import 'slick-carousel';

export default () => {

  if ($('.fag__slider').length) {
    $('.fag__slider').slick({
      infinite: false,
      slidesToShow: 3,
      prevArrow: '<span class="slick-prev"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 2.77748C12.1834 2.40751 12.8166 2.40751 13.2071 2.77748L21.7071 10.8301C22.0976 11.2001 22.0976 11.7999 21.7071 12.1699L13.2071 20.2225C12.8166 20.5925 12.1834 20.5925 11.7929 20.2225C11.4024 19.8526 11.4024 19.2527 11.7929 18.8827L18.5858 12.4474H3C2.44772 12.4474 2 12.0232 2 11.5C2 10.9768 2.44772 10.5526 3 10.5526H18.5858L11.7929 4.11726C11.4024 3.74729 11.4024 3.14745 11.7929 2.77748Z" /></svg></span>',
      nextArrow: '<span class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 2.77748C12.1834 2.40751 12.8166 2.40751 13.2071 2.77748L21.7071 10.8301C22.0976 11.2001 22.0976 11.7999 21.7071 12.1699L13.2071 20.2225C12.8166 20.5925 12.1834 20.5925 11.7929 20.2225C11.4024 19.8526 11.4024 19.2527 11.7929 18.8827L18.5858 12.4474H3C2.44772 12.4474 2 12.0232 2 11.5C2 10.9768 2.44772 10.5526 3 10.5526H18.5858L11.7929 4.11726C11.4024 3.74729 11.4024 3.14745 11.7929 2.77748Z" /></svg></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: "unslick"
        }
      ]
    })
  }

}
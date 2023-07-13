import './markup-menu.js'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import sliders from './components/sliders.js'
import custom from './components/custom.js'
import Tabs from './components/tabs.js'

globalThis.$ = $
globalThis.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  globalThis.Tabs = new Tabs()
  svg4everybody()
  sliders()
  custom()
})

$(window).on('load resize', () => {
  if ($(window).width() < 1200) {
    $('.header__mobile-header').append($('.header__btn'))
    $('.header__mobile-header').append($('.header__subscribe'))
  } else {
    $('.header__subscribe').insertBefore($('.header__search-btn'))
    $('.header__btn').insertBefore($('.header__subscribe'))
  }
})

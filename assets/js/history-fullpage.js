// fullpage.js
new fullpage('#fullpage', {
   sectionSelector: '.section',
   scrollOverflow: false,
   navigation: false,
   scrollingSpeed: 1000,
   parallax: true,
   autoScrolling: true,
   fitToSection: true,
   // Optional
   menu: '#menu',
   anchors: ['firstPage', 'secondPage', 'thirdPage', 'footerPage'],
 });
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(event) {
    event.currentTarget.classList.toggle('is-active');
    document.querySelector('.nav__list').classList.toggle('is-active');
  });
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    }
  });

  //1. найти все кнопки табов
  document.querySelectorAll('.steps__number').forEach(function(btn) {
    //2. для каждой кнопки вешаем обработчик событий - клик
    btn.addEventListener('click', function(event) {
      //получить значение атрибута data-path для элемента, на которого кликнули
      const path = event.currentTarget.dataset.path;

      //4. Найти все вкладки табов (и кнопки) и удалить класс активного элемента
      document.querySelectorAll('.steps__content').forEach(function(content) {
        content.classList.remove('steps__content_active');
      })
      document.querySelectorAll('.steps__number').forEach(function(content) {
        content.classList.remove('steps__number_active');
      })

      //5. добавить активному табу (и кнопке) класс
      document.querySelector('[data-target='+path+']').classList.add('steps__content_active');
      document.querySelector('[data-path='+path+']').classList.add('steps__number_active');
    })
  })

  document.querySelectorAll('.ask').forEach(function(title) {
    title.addEventListener('click', function(event) {
      //const content = event.currentTarget.nextElementSibling;
      event.currentTarget.classList.toggle('ask-active');
    })
  })


  document.querySelectorAll('.ask').forEach(function(el) {
    el.addEventListener('click', function() {
      if (el != document.querySelector('.ask:last-of-type')) {
        document.querySelector('.section-faq__content').classList.remove('border-color');
      }
    })
    el.addEventListener('mouseover', function() {
      if (el == document.querySelector('.ask:last-of-type')) {
        document.querySelector('.section-faq__content').classList.add('border-color');
      }
    });
    el.addEventListener('mouseleave', function() {
      if (el != document.querySelector('.ask:focus')) {
        document.querySelector('.section-faq__content').classList.remove('border-color');
      }
    })
  });

  document.addEventListener('click', function() {
    if (document.querySelector('.ask:last-of-type') != document.querySelector('.ask:focus')) {
      document.querySelector('.section-faq__content').classList.remove('border-color');
    }
  })
});

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    icons: false
  });
} );

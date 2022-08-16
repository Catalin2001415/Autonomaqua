            </main>
            <footer class="footer">
                <div class="container footer__container">
                    <div class="footer__top">
                        <a href="/" class="logo footer__logo">
                            <img width="160" height="110" src="<?=DEFAULT_TEMPLATE_PATH?>/img/logo2.svg" alt="АвтономАква">
                        </a>
                        <div class="footer__col">
                            <h2 class="footer__title">Услуги и сервисы</h2>
                            <ul class="list-reset footer-list">
                                <?
                                CModule::IncludeModule('iblock');
                                $menuTopRes = CIBlockElement::GetList(
                                    ['SORT' => 'ASC'],
                                    ['IBLOCK_ID' => 9,'ACTIVE' => 'Y'],
                                    false,
                                    false,
                                    ['ID','NAME','DETAIL_PAGE_URL']
                                );
                                while ($menuTop = $menuTopRes->GetNextElement()){
                                    $menuTopFields = $menuTop->GetFields();
                                    ?>
                                    <li class="footer-list__item">
                                        <a href="<?=$menuTopFields['DETAIL_PAGE_URL']?>" class="footer-list__link"><?=$menuTopFields['NAME']?></a>
                                    </li>
                                <?};?>
                            </ul>
                        </div>
                        <div class="footer__col">
                            <h2 class="footer__title">Информация</h2>
                            <ul class="list-reset footer-list">
                                <li class="footer-list__item"><a href="/about/" class="footer-list__link">О компании</a></li>
                                <li class="footer-list__item"><a href="/price/" class="footer-list__link">Стоимость</a></li>
                                <li class="footer-list__item"><a href="/reviews/" class="footer-list__link">Отзывы</a></li>
                                <li class="footer-list__item"><a href="/works/" class="footer-list__link">Наши работы</a></li>
                                <li class="footer-list__item"><a href="/contacts/" class="footer-list__link">Контакты</a></li>
                            </ul>
                        </div>
                        <div class="footer__col">
                            <div class="contact-item footer__contact-item">
                                <span class="contact-item__caption">Консультация и отдел продаж:</span>
                                <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?></a>
                            </div>
                            <div class="contact-item footer__contact-item">
                                <span class="contact-item__caption">Техническая поддержка:</span>
                                <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?></a>
                            </div>
                            <div class="contact-item footer__contact-item footer__contact-item--sm">
                                <span class="contact-item__caption">Адреc:</span>
                                <address class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_ADDRESS");?></address>
                            </div>
                            <div class="contact-item footer__contact-item footer__contact-item--sm">
                                <span class="contact-item__caption">Написать нам:</span>
                                <a href="mailto:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?>" class="contact-item__value contact-item__value--underline"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                        <ul class="list-reset footer-links">
                            <li class="footer-links__item">
                                <span class="footer-links__link"><?$APPLICATION->IncludeFile("/include/footer/copyright.php");?></span>
                            </li>
                            <li class="footer-links__item"><a href="/licenses/" class="footer-links__link">Лицензии</a></li>
                            <li class="footer-links__item"><a href="/policy/" class="footer-links__link">Политика конфиденциальности</a></li>
                        </ul>
                        <span class="footer__desc">
                            <span>Сделано в</span>
                            <a href="https://rusodot.ru/" target="_blank">
                                <svg>
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#ruso"></use>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
            <div class="modal">
                <div class="modal__container" role="dialog" aria-modal="true" data-modal-target="request-call">
                    <div class="modal__drawer">
                        <div class="modal__content">
                            <button class="btn-reset modal__close js-modal-close" aria-label="Закрыть модальное окно">
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                                </svg>
                            </button>
                            <h2 class="g-title g-title--sm modal__title">Заказать звонок</h2>
                            <p class="modal__desc">
                                Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.
                            </p>
                            <form action="#" class="modal-form" id="request-form">
                                <label class="g-input modal-form__input">
                                    <span class="g-input__caption">Ваше имя:</span>
                                    <input name="name" type="text" class="input-reset g-input__input validate-name" placeholder="Введите ваше имя">
                                </label>
                                <label class="g-input modal-form__input">
                                    <span class="g-input__caption">Ваш номер телефона:</span>
                                    <input name="phone" type="tel" class="input-reset g-input__input mask-input validate-tel" placeholder="Ваш номер телефона">
                                </label>
                                <label class="g-input g-input--textarea modal-form__input">
                                    <span class="g-input__caption">Комментарий:</span>
                                    <textarea name="text" class="input-reset g-input__input validate-message" placeholder="Дополнительная информация"></textarea>
                                </label>
                                <button class="btn-reset g-btn g-btn--fill modal-form__btn">Отправить заявку
                                    <svg aria-hidden="true">
                                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                                    </svg>
                                </button>
                                <p class="modal-form__desc">
                                    Нажимая «отправить», я даю согласие на <a href="/policy/">обработку&nbsp;персональных&nbsp;данных</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal__container" role="dialog" aria-modal="true" data-modal-target="thank">
                    <div class="modal__drawer modal__drawer--center">
                        <button class="btn-reset modal__close js-modal-close" aria-label="Закрыть модальное окно">
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                            </svg>
                        </button>
                        <div class="modal__content">
                            <img class="modal__image" src="<?=DEFAULT_TEMPLATE_PATH?>/img/thank.svg" alt="Ваша заявка принята!">
                            <h2 class="g-title g-title--sm modal__title">Ваша заявка принята!</h2>
                            <p class="modal__desc">
                                Наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!
                            </p>
                            <a href="/" class="btn-reset g-btn g-btn--fill modal-form__btn">
                                Вернуться на главную
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="modal__container modal__container--full" role="dialog" aria-modal="true" data-modal-target="work">
                    <div class="modal-body">
                        <button class="btn-reset modal-body__close js-modal-close" aria-label="Закрыть модальное окно">
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                            </svg>
                        </button>
                        <div class="modal-slider">
                            <div class="modal-slider__wrapper">
                                <div class="swiper modal-slider__main">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="1092" height="614" alt="Скважина с кессоном"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="1092" height="614" alt="Скважина с кессоном"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="1092" height="614" alt="Скважина с кессоном"></picture>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-slider__btns">
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--prev" aria-label="Назад">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                                        </svg>
                                    </button>
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--next" aria-label="Вперёд">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-slider__bottom">
                                <div class="swiper modal-slider__nav">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="95" height="54" alt="Скважина с кессоном"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="95" height="54" alt="Скважина с кессоном"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/work-image.jpg" class="modal-slider__image"
                                                     width="95" height="54" alt="Скважина с кессоном"></picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal__drawer">
                        <div class="modal__content">
                            <button class="btn-reset modal__close js-modal-close" aria-label="Закрыть модальное окно">
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                                </svg>
                            </button>
                            <h2 class="g-title g-title--sm modal__title modal__title--offset">Скважина с кессоном</h2>
                            <p class="modal__desc modal__desc--black">Владельцы загородного участка в поселении Краснопахорское
                                позвонили нашим специалистам с желанием устроить систему водоснабжения дома из своего источника.
                                Хорошим источником воды для такой системы будет является скважина, пробуренная до объемного
                                водоносного слоя. По договорённости с клиентом для обустройства скважины был выбран пластиковый
                                кессон. Кессон позволяет иметь простой доступ к обсадной трубе без выполнения каких-либо
                                земляных работ, что имеет значение при необходимости обслуживания или в случае ремонтных работ.
                                Предполагалось расположить внутри кессона оборудование для автономной работы системы
                                водоснабжения, чтобы не занимать пространство в доме.</p>
                            <ul class="list-reset modal-info">
                                <li class="modal-info__item">
                                    <svg>
                                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#location"></use>
                                    </svg>
                                    Москва, пос. Краснопахорское
                                </li>
                                <li class="modal-info__item">
                                    <svg>
                                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#deep"></use>
                                    </svg>
                                    Глубина : 65 м
                                </li>
                            </ul>
                            <span class="modal__price">2 357 ₽/м3</span>
                        </div>
                        <button class="btn-reset g-btn g-btn--fill modal__btn" type="button" data-modal-animation="fade" data-modal-path="request-call">
                            Заказать похожий проект
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="modal__container modal__container--full" role="dialog" aria-modal="true" data-modal-target="video-review">
                    <div class="modal-body">
                        <button class="btn-reset modal-body__close js-modal-close" aria-label="Закрыть модальное окно">
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                            </svg>
                        </button>
                        <div class="modal-slider">
                            <div class="modal-slider__wrapper modal-slider__wrapper--2">
                                <div class="swiper modal-slider__main">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <video class="player" data-poster="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.jpg" playsinline controls>
                                                <source src="<?=DEFAULT_TEMPLATE_PATH?>/review.mp4" type="video/mp4">
                                            </video>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <div class="player plyr__video-embed" data-poster="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.jpg">
                                                <iframe src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-slider__btns">
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--prev" aria-label="Назад">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                                        </svg>
                                    </button>
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--next" aria-label="Вперёд">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-slider__bottom">
                                <div class="swiper modal-slider__nav">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.jpg" class="modal-slider__image"
                                                     width="95" height="54" alt="Олег"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/review-image.jpg" class="modal-slider__image"
                                                     width="95" height="54" alt="Олег"></picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal__drawer">
                        <div class="modal__content">
                            <button class="btn-reset modal__close modal__close--offset js-modal-close"
                                    aria-label="Закрыть модальное окно">
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                                </svg>
                            </button>
                            <span class="modal__date">18 мая 2022</span>
                            <h2 class="g-title g-title--sm modal__title modal__title--offset">Олег</h2>
                            <p class="modal__desc modal__desc--black">Обращались в компанию за уборкой после ремонта общего
                                коридора на этаже. Загрязнения были сильными (шпатлевка, пыль, фуга и даже краска на пористой
                                плитке), но ребята (Андрей и напарник) со своим оборудованием и средствами справились на
                                отлично!</p>
                            <ul class="list-reset modal-info">
                                <li class="modal-info__item">
                                    <svg>
                                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#location"></use>
                                    </svg>
                                    Москва, пос. Краснопахорское
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal__container modal__container--gallery" role="dialog" aria-modal="true" data-modal-target="license">
                    <div class="modal-body">
                        <button class="btn-reset modal-body__close js-modal-close" aria-label="Закрыть модальное окно">
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                            </svg>
                        </button>
                        <div class="modal-slider">
                            <div class="modal-slider__wrapper">
                                <div class="swiper modal-slider__main">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image"
                                                     width="450" height="676" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image"
                                                     width="450" height="676" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image"
                                                     width="450" height="676" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image"
                                                     width="450" height="676" alt="Лицензия на бурение"></picture>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-slider__btns">
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--prev" aria-label="Назад">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                                        </svg>
                                    </button>
                                    <button class="btn-reset modal-slider__btn modal-slider__btn--next" aria-label="Вперёд">
                                        <svg aria-hidden="true">
                                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-slider__bottom">
                                <div class="swiper modal-slider__nav">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image" width="95"
                                                     height="54" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image" width="95"
                                                     height="54" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image" width="95"
                                                     height="54" alt="Лицензия на бурение"></picture>
                                        </div>
                                        <div class="swiper-slide modal-slider__slide">
                                            <picture>
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.avif" type="image/avif">
                                                <source srcset="<?=DEFAULT_TEMPLATE_PATH?>/img/license.webp" type="image/webp">
                                                <img loading="lazy" src="<?=DEFAULT_TEMPLATE_PATH?>/img/license.jpg" class="modal-slider__image" width="95"
                                                     height="54" alt="Лицензия на бурение"></picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal__container" role="dialog" aria-modal="true" data-modal-target="review">
                    <div class="modal__drawer">
                        <div class="modal__content">
                            <button class="btn-reset modal__close modal__close--offset js-modal-close"
                                    aria-label="Закрыть модальное окно">
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                                </svg>
                            </button>
                            <span class="modal__date">18 мая 2022</span>
                            <h2 class="g-title g-title--sm modal__title modal__title--offset">Олег</h2>
                            <p class="modal__desc modal__desc--black">Следует отметить, что курс на социально-ориентированный
                                национальный проект влечет за собой процесс внедрения и модернизации направлений прогрессивного
                                развития. Картельные сговоры не допускают ситуации, при которой ключевые особенности структуры
                                проекта будут преданы социально-демократической анафеме. Как уже неоднократно упомянуто,
                                тщательные исследования конкурентов и по сей день остаются уделом либералов, которые жаждут быть
                                подвергнуты целой серии независимых исследований.</p>
                            <ul class="list-reset modal-info">
                                <li class="modal-info__item">
                                    <svg>
                                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#location"></use>
                                    </svg>
                                    Москва, пос. Краснопахорское
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cookie">
                <div class="container cookie__container">
                    <p class="cookie__desc">
                        Этот сайт использует файлы cookie для хранения
                        данных. Продолжая использовать сайт, вы даёте своё согласие на работу с этими файлами. Для получения
                        дополнительной информации, пожалуйста, ознакомьтесь с нашей <a href="/policy/">Политикой обработки
                            персональных данных.</a>
                    </p>
                    <button class="btn-reset g-btn g-btn--fill cookie__accept">
                        Принять
                        <svg aria-hidden="true">
                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </body>
</html>
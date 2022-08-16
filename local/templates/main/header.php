<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();

use \Bitrix\Main\Page\Asset;
?>
<!DOCTYPE html>
<html lang="ru" class="page">
<head>
    <? $APPLICATION->ShowHead(); ?>
    <title><?$APPLICATION->ShowTitle();?></title>
    <?
    Asset::getInstance()->addString('<meta charset="UTF-8">');
    Asset::getInstance()->addString('<meta name="viewport" content="width=device-width,initial-scale=1">');
    Asset::getInstance()->addString('<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">');
    Asset::getInstance()->addString('<meta http-equiv="X-UA-Compatible" content="ie=edge">');
    Asset::getInstance()->addString('<meta name="theme-color" content="#2e4d99">');
    Asset::getInstance()->addString('<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">');
    Asset::getInstance()->addString('<link rel="icon" sizes="16x16" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/favicon-16x16.png" type="image/png">');
    Asset::getInstance()->addString('<link rel="icon" sizes="32x32" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/favicon-32x32.png" type="image/png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon-precomposed" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-precomposed.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="57x57" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-57x57.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="60x60" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-60x60.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="72x72" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-72x72.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="76x76" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-76x76.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="114x114" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-114x114.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="120x120" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-120x120.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="144x144" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-144x144.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="152x152" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-152x152.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="167x167" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-167x167.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="180x180" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-180x180.png">');
    Asset::getInstance()->addString('<link rel="apple-touch-icon" sizes="1024x1024" href="' . DEFAULT_TEMPLATE_PATH . '/favicons/apple-touch-icon-1024x1024.png">');


    Asset::getInstance()->addCss(DEFAULT_TEMPLATE_PATH . '/css/vendor.css');
    Asset::getInstance()->addCss(DEFAULT_TEMPLATE_PATH . '/css/main.css');
    Asset::getInstance()->addCss(DEFAULT_TEMPLATE_PATH . '/css/backend.css');

    Asset::getInstance()->addJs(DEFAULT_TEMPLATE_PATH . "/js/main.js");
    Asset::getInstance()->addJs(DEFAULT_TEMPLATE_PATH . "/js/backend.js");
    ?>
</head>
<body class="page__body">
<div id="panel">
    <? $APPLICATION->ShowPanel(); ?>
</div>
<div class="site-container">
    <header class="header <?=$APPLICATION->GetCurPage(true) == '/index.php' ? 'header--home' : 'header--light' ?>" <?=($USER->IsAdmin() && $APPLICATION->GetCurPage(true) == '/index.php') ? 'style="top:40px"': ''?>>
        <div class="header__container">
            <button class="btn-reset g-burger header__burger" aria-label="Открыть меню" data-burger>
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#burger"></use>
                </svg>
            </button>
            <div class="header__left">
                <a href="/" class="logo header__logo">
                    <img width="160" height="110" src="<?=DEFAULT_TEMPLATE_PATH?>/img/<?= $APPLICATION->GetCurPage(true) == '/index.php' ? 'logo' : 'logo2' ?>.svg" alt="АвтономАква">
                </a>
            </div>
            <div class="header__right">
                <div class="header__top">
                    <span class="header__caption"><?$APPLICATION->IncludeFile("/include/header/t-text.php");?></span>
                    <div class="contact-item <?=$APPLICATION->GetCurPage(true) == '/index.php' ? 'contact-item--light' : '' ?> header__contact-item">
                        <span class="contact-item__caption">Консультация и отдел продаж:</span>
                        <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?></a>
                    </div>
                    <div class="contact-item <?=$APPLICATION->GetCurPage(true) == '/index.php' ? 'contact-item--light' : '' ?> header__contact-item">
                        <span class="contact-item__caption">Техническая поддержка:</span>
                        <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?></a>
                    </div>
                    <div class="contact-item <?=$APPLICATION->GetCurPage(true) == '/index.php' ? 'contact-item--light' : '' ?> header__contact-item">
                        <span class="contact-item__caption">Написать нам:</span>
                        <a href="mailto:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?>" class="contact-item__value contact-item__value--underline"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?></a>
                    </div>
                    <button class="btn-reset g-btn <?=$APPLICATION->GetCurPage(true) == '/index.php' ? 'g-btn--stroke' : 'g-btn--fill' ?> header__btn" data-modal-animation="drawer" data-modal-path="request-call">
                        Заказать звонок
                        <svg aria-hidden="true">
                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                        </svg>
                    </button>
                </div>
                <nav class="nav">
                    <ul class="list-reset nav__list">
                        <li class="nav__item nav__item--dropdown">
                            <a href="/services/" class="nav__link">
                                Услуги и сервисы
                                <svg aria-hidden="true">
                                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-bottom"></use>
                                </svg>
                            </a>
                            <ul class="list-reset nav-dropdown">
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
                                    <li class="nav-dropdown__item">
                                        <a href="<?=$menuTopFields['DETAIL_PAGE_URL']?>" class="nav-dropdown__link"><?=$menuTopFields['NAME']?></a>
                                    </li>
                                <?};?>
                            </ul>
                        </li>
                        <li class="nav__item"><a href="/about/" class="nav__link">О компании</a></li>
                        <li class="nav__item"><a href="/price/" class="nav__link">Стоимость</a></li>
                        <li class="nav__item"><a href="/works/" class="nav__link">Наши работы</a></li>
                        <li class="nav__item"><a href="/reviews/" class="nav__link">Отзывы</a></li>
                        <li class="nav__item"><a href="/contacts/" class="nav__link">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <button class="btn-reset header__tel" aria-label="Заказать звонок" data-modal-animation="drawer" data-modal-path="request-call">
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#tel"></use>
                </svg>
            </button>
            <div class="menu" data-menu>
                <div class="menu-top">
                    <button class="btn-reset menu-top__close" aria-label="Закрыть меню" data-burger>
                        <svg aria-hidden="true">
                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
                        </svg>
                    </button>
                    <a href="/" class="menu-top__logo">
                        <img width="160" height="110" src="<?=DEFAULT_TEMPLATE_PATH?>/img/logo2.svg" alt="АвтономАква">
                    </a>
                    <button class="btn-reset menu-top__tel" aria-label="Заказать звонок" data-modal-animation="drawer" data-modal-path="request-call">
                        <svg aria-hidden="true">
                            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#tel"></use>
                        </svg>
                    </button>
                </div>
                <div class="menu-content">
                    <div class="menu-content__item">
                        <span class="menu-content__title">Услуги и сервисы</span>
                        <ul class="list-reset menu-list">
                            <li class="menu-list__item">
                                <a href="/services/" class="menu-list__link">Бурение скважин</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/services/" class="menu-list__link">Обустройство скважин</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/services/" class="menu-list__link">Автономная канализация</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/services/" class="menu-list__link">Автономное отопление</a>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-content__item">
                        <span class="menu-content__title">Информация</span>
                        <ul class="list-reset menu-list">
                            <li class="menu-list__item">
                                <a href="/about/" class="menu-list__link">О компании</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/price/" class="menu-list__link">Стоимость</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/reviews/" class="menu-list__link">Отзывы</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/works/" class="menu-list__link">Наши работы</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="/contacts/" class="menu-list__link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-item menu__contact-item">
                        <span class="contact-item__caption">Консультация и отдел продаж:</span>
                        <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?></a>
                    </div>
                    <div class="contact-item menu__contact-item">
                        <span class="contact-item__caption">Техническая поддержка:</span>
                        <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?></a>
                    </div>
                    <div class="contact-item menu__contact-item menu__contact-item--mail">
                        <span class="contact-item__caption">Написать нам:</span>
                        <a href="mailto:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?>" class="contact-item__value contact-item__value--underline"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="main">

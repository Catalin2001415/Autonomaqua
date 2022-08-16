<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

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
                    <?foreach ($arResult['PROPERTIES']['IMAGES']['VALUE'] as $img):?>
                        <div class="swiper-slide modal-slider__slide">
                            <picture>
                                <img loading="lazy" src="<?=CFile::GetPath($img)?>" class="modal-slider__image" width="1092" height="614" alt="<?=$arResult['NAME']?>">
                            </picture>
                        </div>
                    <?endforeach;?>
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
                    <?foreach ($arResult['PROPERTIES']['IMAGES']['VALUE'] as $img):?>
                        <div class="swiper-slide modal-slider__slide">
                            <picture>
                                <img loading="lazy" src="<?=CFile::GetPath($img)?>" class="modal-slider__image" width="95" height="54" alt="<?=$arResult['NAME']?>">
                            </picture>
                        </div>
                    <?endforeach;?>
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
        <h2 class="g-title g-title--sm modal__title modal__title--offset"><?=$arResult['NAME']?></h2>
        <p class="modal__desc modal__desc--black">
            <?=$arResult['DETAIL_TEXT']?>
        </p>
        <ul class="list-reset modal-info">
            <?if($arResult['PROPERTIES']['ADDRESS']['VALUE']):?>
                <li class="modal-info__item">
                    <svg>
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#location"></use>
                    </svg>
                    <?=$arResult['PROPERTIES']['ADDRESS']['VALUE']?>
                </li>
            <?endif;?>
            <?if($arResult['PROPERTIES']['ADDRESS']['VALUE']):?>
                <li class="modal-info__item">
                    <svg>
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#deep"></use>
                    </svg>
                    Глубина : <?=$arResult['PROPERTIES']['DEPTH']['VALUE']?>
                </li>
            <?endif;?>
        </ul>
        <span class="modal__price"><?=$arResult['PROPERTIES']['PRICE']['VALUE']?></span>
    </div>
    <button class="btn-reset g-btn g-btn--fill modal__btn" type="button" data-modal-animation="fade" data-modal-path="request-call">
        Заказать похожий проект
        <svg aria-hidden="true">
            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
        </svg>
    </button>
</div>
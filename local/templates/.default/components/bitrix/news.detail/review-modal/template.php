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

<?if($arResult['PROPERTIES']['VIDEO']['VALUE']['path'] || $arResult['PROPERTIES']['YT_VIDEO']['VALUE']):?>
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
                        <?if($arResult['PROPERTIES']['VIDEO']['VALUE']['path']):?>
                            <div class="swiper-slide modal-slider__slide">
                                <video class="player" data-poster="<?=$arResult['PROPERTIES']['VIDEO_POSTER']['VALUE'] ? CFile::GetPath($arResult['PROPERTIES']['VIDEO_POSTER']['VALUE']) : DEFAULT_TEMPLATE_PATH.'/img/review-image.jpg'?>" playsinline controls>
                                    <source src="<?=$arResult['PROPERTIES']['VIDEO']['VALUE']['path']?>" type="video/mp4">
                                </video>
                            </div>
                        <?endif;?>
                        <?if($arResult['PROPERTIES']['YT_VIDEO']['VALUE']):?>
                            <div class="swiper-slide modal-slider__slide">
                                <div class="player plyr__video-embed" data-poster="<?=$arResult['PROPERTIES']['VIDEO_POSTER']['VALUE'] ? CFile::GetPath($arResult['PROPERTIES']['YT_VIDEO_POSTER']['VALUE']) : DEFAULT_TEMPLATE_PATH.'/img/review-image.jpg'?>">
                                    <iframe src="<?=$arResult['PROPERTIES']['YT_VIDEO']['VALUE']?>" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                            </div>
                        <?endif;?>
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
                        <?if($arResult['PROPERTIES']['VIDEO']['VALUE']['path']):?>
                            <div class="swiper-slide modal-slider__slide">
                                <picture>
                                    <img loading="lazy" src="<?=$arResult['PROPERTIES']['VIDEO_POSTER']['VALUE'] ? CFile::GetPath($arResult['PROPERTIES']['VIDEO_POSTER']['VALUE']) : DEFAULT_TEMPLATE_PATH.'/img/review-image.jpg'?>" class="modal-slider__image" width="95" height="54" alt="<?=$arResult['NAME']?>">
                                </picture>
                            </div>
                        <?endif;?>
                        <?if($arResult['PROPERTIES']['YT_VIDEO']['VALUE']):?>
                            <div class="swiper-slide modal-slider__slide">
                                <picture>
                                    <img loading="lazy" src="<?=$arResult['PROPERTIES']['VIDEO_POSTER']['VALUE'] ? CFile::GetPath($arResult['PROPERTIES']['YT_VIDEO_POSTER']['VALUE']) : DEFAULT_TEMPLATE_PATH.'/img/review-image.jpg'?>" class="modal-slider__image" width="95" height="54" alt="<?=$arResult['NAME']?>">
                                </picture>
                            </div>
                        <?endif;?>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?endif;?>
<div class="modal__drawer">
    <div class="modal__content">
        <button class="btn-reset modal__close modal__close--offset js-modal-close"
                aria-label="Закрыть модальное окно">
            <svg aria-hidden="true">
                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#cross"></use>
            </svg>
        </button>
        <span class="modal__date"><?=$arResult['DISPLAY_ACTIVE_FROM']?></span>
        <h2 class="g-title g-title--sm modal__title modal__title--offset"><?=$arResult['NAME']?></h2>
        <p class="modal__desc modal__desc--black">
            <?=$arResult['PREVIEW_TEXT']?>
        </p>
        <?if($arResult['PROPERTIES']['ADDRESS']['VALUE']):?>
            <ul class="list-reset modal-info">
                <li class="modal-info__item">
                    <svg>
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#location"></use>
                    </svg>
                    <?=$arResult['PROPERTIES']['ADDRESS']['VALUE']?>
                </li>
            </ul>
        <?endif;?>
    </div>
</div>
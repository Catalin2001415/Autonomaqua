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
$this->setFrameMode(true);?>


<section class="licenses-section">
    <div class="container licenses-section__container">
        <h2 class="g-title g-title--lg licenses-section__title">Лицензии</h2>
        <div class="swiper licenses-slider">
            <div class="swiper-wrapper">
                <?foreach($arResult["ITEMS"] as $arItem):?>
                    <?
                    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                    ?>
                    <div class="swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                        <div class="license-item" data-modal-animation="fade" data-modal-path="license">
                            <picture>
                                <img loading="lazy" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="license-item__image" width="220" height="330" alt="<?=$arItem['NAME']?>">
                            </picture>
                            <h3 class="license-item__title"><?=$arItem['NAME']?></h3>
                            <p class="license-item__desc">
                                <?=$arItem['PREVIEW_TEXT']?>
                            </p>
                        </div>
                    </div>
                <?endforeach;?>
            </div>
        </div>
        <div class="licenses-slider__bottom">
            <div class="slider-nav slider-nav--light licenses-slider__nav">
                <button class="btn-reset slider-nav__btn licenses-slider__btn--prev">
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                    </svg>
                </button>
                <button class="btn-reset slider-nav__btn licenses-slider__btn--next">
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                    </svg>
                </button>
            </div>
            <div class="slider-scrollbar slider-scrollbar--light licenses-slider__scrollbar"></div>
            <a href="/licenses/" class="g-link licenses-section__link">
                Смотреть все лицензии
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                </svg>
            </a>
        </div>
    </div>
</section>

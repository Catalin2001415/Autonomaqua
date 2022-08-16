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

<section class="hero">
    <div class="swiper hero-slider">
        <div class="swiper-wrapper">
            <?foreach($arResult["ITEMS"] as $arItem):?>
                <?
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                ?>
                <div class="swiper-slide hero__slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>" <?=$arItem['PREVIEW_PICTURE'] ? 'style="background-image: url('.$arItem['PREVIEW_PICTURE']['SRC'].');"':''?>>
                    <div class="container hero__container">
                        <?if($arItem['PROPERTIES']['BANNER']['VALUE']):?>
                            <span class="hero__chip">Акции</span>
                        <?endif;?>
                        <h1 class="g-title g-title--xl g-title--white hero__title"><?=$arItem['NAME']?></h1>
                        <p class="hero__desc">
                            <?=$arItem['PREVIEW_TEXT']?>
                        </p>
                        <a class="g-btn g-btn--fill hero__btn" href="<?=$arItem['PROPERTIES']['LINK']['VALUE']?>">
                            Узнать подробнее
                            <svg aria-hidden="true">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            <?endforeach;?>
        </div>
        <div class="hero-slider__bottom">
            <div class="slider-nav hero-slider__nav">
                <button class="btn-reset slider-nav__btn hero-slider__btn--prev">
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                    </svg>
                </button>
                <button class="btn-reset slider-nav__btn hero-slider__btn--next">
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                    </svg>
                </button>
            </div>
            <div class="slider-scrollbar hero-slider__scrollbar"></div>
            <div class="slider-pagination hero-slider__pagination"></div>
        </div>
    </div>
</section>

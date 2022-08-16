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

<div class="swiper history-slider">
    <div class="swiper-wrapper">
        <?foreach($arResult["ITEMS"] as $arItem):?>
            <?
            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
            ?>
            <div class="swiper-slide" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                <div class="history-item">
                    <h3 class="g-title g-title--md history-item__title"><?=$arItem['NAME']?></h3>
                    <p class="history-item__desc">
                        <?=$arItem['PREVIEW_TEXT']?>
                    </p>
                </div>
            </div>
        <?endforeach;?>
    </div>
</div>
<?if(count($arResult["ITEMS"]) > 2):?>
    <div class="history-slider__bottom">
        <div class="slider-nav slider-nav--light history-slider__nav">
            <button class="btn-reset slider-nav__btn history-slider__btn--prev">
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-left"></use>
                </svg>
            </button>
            <button class="btn-reset slider-nav__btn history-slider__btn--next">
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                </svg>
            </button>
        </div>
        <div class="slider-scrollbar slider-scrollbar--light history-slider__scrollbar"></div>
    </div>
<?endif;?>

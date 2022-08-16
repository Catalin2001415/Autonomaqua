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

<ul class="list-reset services-list">
    <?foreach($arResult["ITEMS"] as $arItem):?>
        <?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        ?>
        <li class="services-list__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="services-item">
                <picture>
                    <img loading="lazy" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="services-item__image" width="360" height="650" alt="<?=$arItem['NAME']?>">
                </picture>
                <div class="services-item__content">
                    <h3 class="g-title g-title--md g-title--white services-item__title"><?=$arItem['NAME']?></h3>
                    <p class="services-item__desc">
                        <?=$arItem['PREVIEW_TEXT']?>
                    </p>
                </div>
                <span class="g-link services-item__link">
                    Подробнее
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                    </svg>
                </span>
            </a>
        </li>
    <?endforeach;?>
</ul>
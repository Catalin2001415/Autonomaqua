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

<?if(!empty($arResult["ITEMS"])):?>
    <ul class="list-reset licenses__list">
        <?foreach($arResult["ITEMS"] as $arItem):?>
            <?
            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
            ?>
            <li class="license-item" data-modal-animation="fade" data-modal-path="license" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                <picture>
                    <img loading="lazy" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="license-item__image" width="220" height="330" alt="<?=$arItem['NAME']?>">
                </picture>
                <h3 class="license-item__title"><?=$arItem['NAME']?></h3>
                <p class="license-item__desc">
                    <?=$arItem['PREVIEW_TEXT']?>
                </p>
            </li>
        <?endforeach;?>
    </ul>
    <div class="load-more">
    <button class="btn-reset g-link g-link--more">Показать еще
        <svg aria-hidden="true">
            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#more"></use>
        </svg>
    </button>
    <ul class="list-reset g-pagination load-more__pagination">
        <li class="g-pagination__item"><span
                class="g-pagination__link g-pagination__link--current">01</span></li>
        <li class="g-pagination__item"><a href="#" class="g-pagination__link">02</a></li>
        <li class="g-pagination__item"><a href="#" class="g-pagination__link">03</a></li>
        <li class="g-pagination__item"><a href="#" class="g-pagination__link">04</a></li>
        <li class="g-pagination__item"><a href="#" class="g-pagination__link">05</a></li>
        <li class="g-pagination__item"><a href="#" class="g-pagination__link">06</a></li>
    </ul>
</div>
<?else:?>
    <h1 style="text-align: center">Ничего не найденно!</h1>
<?endif;?>

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
    <div class="table price__table">
        <table class="table-top">
            <tr class="table-top__row">
                <th class="table-top__value">№</th>
                <th class="table-top__sep">/</th>
                <th class="table-top__value">Описание</th>
                <th class="table-top__value">Ед. измерения</th>
                <th class="table-top__value">Стоимость</th>
            </tr>
        </table>
        <ul class="list-reset table__items">
            <?foreach($arResult["ITEMS"] as $arItem):?>
                <?
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                ?>
                <li class="table__item price-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                    <div class="price-item__content">
                        <h2 class="price-item__title"><?=$arItem['NAME']?></h2>
                        <p class="price-item__desc">
                            <?=$arItem['PREVIEW_TEXT']?>
                        </p>
                    </div>
                    <span class="price-item__info">
                        <span class="price-item__caption">Ед. измерения</span>
                        <span class="price-item__value"><?=htmlspecialchars_decode($arItem['PROPERTIES']['MEASURE']['VALUE'])?></span>
                    </span>
                    <span class="price-item__info">
                        <span class="price-item__caption">Стоимость</span>
                        <span class="price-item__value"><?=$arItem['PROPERTIES']['PRICE']['VALUE']?></span>
                    </span>
                </li>
            <?endforeach;?>
        </ul>
    </div>
    <div class="load-more">
    <button class="btn-reset g-link g-link--more">
        Показать еще
        <svg aria-hidden="true">
            <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#more"></use>
        </svg>
    </button>
    <ul class="list-reset g-pagination load-more__pagination">
        <li class="g-pagination__item"><span class="g-pagination__link g-pagination__link--current">01</span></li>
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

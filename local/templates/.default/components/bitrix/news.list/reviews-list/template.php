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
<ul class="list-reset reviews-list">
    <?foreach($arResult["ITEMS"] as $arItem):?>
        <?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        ?>
        <li class="reviews-list__item <?=$arItem['PROPERTIES']['BIG_BLOCK']['VALUE'] == 'Да' ? 'reviews-list__item--big': ''?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <div data-detail-id="<?=$arItem['ID']?>" class="review <?=$arItem['PREVIEW_PICTURE']['SRC'] ? 'review--has-backdrop': ''?>" data-modal-animation="fade" data-modal-path="<?=($arItem['PROPERTIES']['VIDEO']['VALUE']['path'] || $arItem['PROPERTIES']['YT_VIDEO']['VALUE']) ? 'video-': ''?>review">
                <?if($arItem['PREVIEW_PICTURE']['SRC']):?>
                    <picture>
                        <img loading="lazy" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="review__backdrop" width="460" height="400" alt="Олег">
                    </picture>
                <?endif;?>
                <div class="review__content">
                    <div class="review__top">
                        <span class="review__name"><?=$arItem['NAME']?></span>
                        <span class="review__date"><?=$arItem['DISPLAY_ACTIVE_FROM']?></span>
                    </div>
                    <span class="g-play <?=($arItem['PROPERTIES']['VIDEO']['VALUE']['path'] || $arItem['PROPERTIES']['YT_VIDEO']['VALUE']) ? 'review__play' : 'review__quote'?>">
                        <svg aria-hidden="true">
                            <?if($arItem['PROPERTIES']['VIDEO']['VALUE']['path'] || $arItem['PROPERTIES']['YT_VIDEO']['VALUE']):?>
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#play"></use>
                            <?else:?>
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#quote"></use>
                            <?endif;?>
                        </svg>
                    </span>
                    <q class="review__txt">
                        <?=$arItem['PREVIEW_TEXT']?>
                    </q>
                </div>
            </div>
        </li>
    <?endforeach;?>
    <?if($arParams['SHOW_ADD_BLOCK'] == 'Y'):?>
        <li class="reviews-list__item">
            <div class="review review--center">
                <?$APPLICATION->IncludeFile("/include/review-block-last.php");?>
            </div>
        </li>
    <?endif;?>
</ul>
<?if($arParams['SHOW_PAGINATION']):?>
    <div class="load-more">
        <button class="btn-reset g-link g-link--more">
            Показать еще
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
        </ul>
    </div>
<?endif;?>

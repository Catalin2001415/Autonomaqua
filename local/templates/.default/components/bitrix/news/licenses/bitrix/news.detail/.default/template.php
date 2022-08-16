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
<div class="main-hero">
    <div class="container main-hero__top">
        <h1 class="g-title g-title--xl main-hero__title">
            <?=$arResult['NAME']?>
        </h1>
        <div class="main-hero__desc">
            <?=$arResult['DETAIL_TEXT']?>
        </div>
    </div>
    <picture>
        <img loading="lazy" src="<?=$arResult['DETAIL_PICTURE']['SRC']?>" class="main-hero__image" alt="<?=$arResult['NAME']?>">
    </picture>
</div>
<?$this->SetViewTarget('services-info-seo');?>
    <section class="info">
        <div class="container info__container">
            <h2 class="info__title"><?=$arResult['META_TAGS']['TITLE']?></h2>
            <div class="show-more">
                <p class="info__desc show-more__content">
                    <?=$arResult['META_TAGS']['DESCRIPTION']?>
                </p>
                <button class="btn-reset g-link info__more show-more__btn">Показать еще
                    <svg aria-hidden="true">
                        <use xlink:href="img/sprite.svg#arrow-bottom"></use>
                    </svg>
                </button>
            </div>
        </div>
    </section>
<?$this->EndViewTarget();?>
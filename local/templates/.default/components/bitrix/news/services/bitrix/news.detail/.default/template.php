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

<?$this->SetViewTarget('criteria');?>
    <?if($arResult['PROPERTIES']['CRITERIES_TITLE']['~VALUE']['TEXT']):?>
        <section class="criteria">
            <div class="container criteria__container">
                <?=$arResult['PROPERTIES']['CRITERIES_TITLE']['~VALUE']['TEXT']?>
                <ul class="list-reset criteria-list">
                    <?foreach ($arResult['PROPERTIES']['CRITERIES_NAME']['VALUE'] as $key=>$name):?>
                        <li class="criteria-list__item criteria-item">
                            <h3 class="g-title g-title--sm criteria-item__title">
                                <?=$name?>
                            </h3>
                            <p class="criteria-item__desc">
                                <?=$arResult['PROPERTIES']['CRITERIES_TEXT']['VALUE'][$key]?>
                            </p>
                        </li>
                    <?endforeach;?>
                </ul>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('blocks');?>
    <?if($arResult['PROPERTIES']['BLOCKS_IMG']['VALUE'][0]):?>
        <section class="service">
            <div class="container service__container">
                <?foreach ($arResult['PROPERTIES']['BLOCKS_IMG']['VALUE'] as $key=>$img):?>
                    <div class="service-item <?=$key%2 == 1 ? 'service-item--reverse' : ''?>">
                        <picture>
                            <img loading="lazy" src="<?=CFile::GetPath($img)?>" class="service-item__image" alt="Image">
                        </picture>
                        <div class="service-item__right">
                            <?=$arResult['PROPERTIES']['BLOCKS_TEXT']['~VALUE'][$key]['TEXT']?>
                        </div>
                    </div>
                <?endforeach;?>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('why');?>
    <?if($arResult['PROPERTIES']['WHY_WE_TITLE']['~VALUE']['TEXT']):?>
        <section class="why">
            <div class="container why__container">
                <?=$arResult['PROPERTIES']['WHY_WE_TITLE']['~VALUE']['TEXT']?>
                <ul class="list-reset why-list">
                    <?foreach ($arResult['PROPERTIES']['WHY_WE_ICONS']['VALUE'] as $key=>$img):?>
                        <li class="why-list__item why-item <?=$key > 2 ? 'why-item--big' : ''?>">
                            <svg aria-hidden="true" class="why-item__icon">
                                <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#<?=$img?>"></use>
                            </svg>
                            <h3 class="g-title g-title--sm why-item__title"><?=$arResult['PROPERTIES']['WHY_WE_NAME']['VALUE'][$key]?></h3>
                            <p class="why-item__desc">
                                <?=$arResult['PROPERTIES']['WHY_WE_TEXT']['VALUE'][$key]?>
                            </p>
                        </li>
                    <?endforeach;?>
                </ul>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('list');?>
    <?if($arResult['PROPERTIES']['LIST_HTML']['~VALUE']['TEXT']):?>
        <section class="varieties">
            <div class="container varieties__container">
                <?=$arResult['PROPERTIES']['LIST_HTML']['~VALUE']['TEXT']?>
                <?foreach ($arResult['PROPERTIES']['LIST_IMG']['VALUE'] as $key=>$img):?>
                    <div class="varieties-item">
                        <h3 class="g-title g-title--sm varieties-item__title"><?=$arResult['PROPERTIES']['LIST_TITLE']['VALUE'][$key]?></h3>
                        <div class="varieties-item__right">
                            <p class="varieties-item__desc">
                                <?=$arResult['PROPERTIES']['LIST_TEXT']['~VALUE'][$key]['TEXT']?>
                            </p>
                            <picture>
                                <img loading="lazy" src="<?=CFile::GetPath($img)?>" class="varieties-item__image" width="580" height="300" alt="<?=$arResult['PROPERTIES']['LIST_TITLE']['VALUE'][$key]?>">
                            </picture>
                        </div>
                    </div>
                <?endforeach;?>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('stages');?>
    <?if($arResult['PROPERTIES']['STEPS_TITLE']['~VALUE']['TEXT']):?>
        <section class="stages">
            <div class="container stages__container">
                <?=$arResult['PROPERTIES']['STEPS_TITLE']['~VALUE']['TEXT']?>
                <ul class="list-reset stages-list">
                    <?foreach ($arResult['PROPERTIES']['STEPS_TEXT']['VALUE'] as $key=>$val):?>
                        <li class="stages-list__item stages-item">
                            <p class="stages-item__desc">
                                <?=$val?>
                            </p>
                        </li>
                    <?endforeach;?>
                </ul>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('components');?>
    <?if($arResult['PROPERTIES']['COMPONENTS_TITLE']['~VALUE']['TEXT']):?>
        <section class="components">
            <div class="container components__container">
                <?=$arResult['PROPERTIES']['COMPONENTS_TITLE']['~VALUE']['TEXT']?>
                <ul class="list-reset components-list">
                    <?foreach ($arResult['PROPERTIES']['COMPONENTS_NAME']['VALUE'] as $key=>$val):?>
                        <li class="components-list__item components-item">
                            <h3 class="g-title g-title--sm components-item__title"><?=$val?></h3>
                            <p class="components-item__desc"><?=$arResult['PROPERTIES']['COMPONENTS_TEXT']['VALUE'][$key]?></p>
                        </li>
                    <?endforeach;?>
                </ul>
            </div>
        </section>
    <?endif;?>
<?$this->EndViewTarget();?>
<?$this->SetViewTarget('services-info-seo');?>
    <section class="info">
        <div class="container info__container">
            <h2 class="info__title"><?=$arResult['META_TAGS']['TITLE']?></h2>
            <div class="show-more">
                <p class="info__desc show-more__content">
                    <?=$arResult['META_TAGS']['DESCRIPTION']?>
                </p>
                <button class="btn-reset g-link info__more show-more__btn">
                    Показать еще
                    <svg aria-hidden="true">
                        <use xlink:href="img/sprite.svg#arrow-bottom"></use>
                    </svg>
                </button>
            </div>
        </div>
    </section>
<?$this->EndViewTarget();?>
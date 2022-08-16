<?if($APPLICATION->GetProperty('SEO_TITLE')):?>
<section class="info">
    <div class="container info__container">
        <h2 class="info__title"><?=$APPLICATION->GetProperty('SEO_TITLE')?></h2>
        <div class="show-more">
            <p class="info__desc show-more__content">
                <?=$APPLICATION->GetProperty('SEO_TEXT')?>
            </p>
            <button class="btn-reset g-link info__more show-more__btn">
                Показать еще
                <svg aria-hidden="true">
                    <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-bottom"></use>
                </svg>
            </button>
        </div>
    </div>
</section>
<?endif;?>
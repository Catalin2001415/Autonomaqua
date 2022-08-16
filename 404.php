<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("404 Not Found");
?>
    <section class="not-found">
        <div class="container not-found__container">
            <img src="<?=DEFAULT_TEMPLATE_PATH?>/img/404.svg" width="580" height="385" class="not-found__image" alt="Такой страницы не существует">
            <div class="not-found__right">
                <h1 class="g-title g-title--sm not-found__title">Такой страницы не существует</h1>
                <p class="not-found__desc">Вернитесь на главную или воспользуйтесь навигацией сайта</p>
                <a href="/" class="g-btn g-btn--fill not-found__link">
                    Вернуться на главную
                    <svg aria-hidden="true">
                        <use xlink:href="<?=DEFAULT_TEMPLATE_PATH?>/img/sprite.svg#arrow-right"></use>
                    </svg>
                </a>
            </div>
        </div>
    </section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
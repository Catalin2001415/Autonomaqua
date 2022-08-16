<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Контакты");
?>
    <script defer="defer" src="https://api-maps.yandex.ru/2.1/?apikey=09fde6c3-515b-47ff-ab53-6876a1f37784&lang=ru_RU"></script>
    <section class="contacts">
        <div class="container contacts__container">
            <?$APPLICATION->IncludeComponent("bitrix:breadcrumb", "breadcrumb", Array(
                "PATH" => "",	// Путь, для которого будет построена навигационная цепочка (по умолчанию, текущий путь)
                "SITE_ID" => "s1",	// Cайт (устанавливается в случае многосайтовой версии, когда DOCUMENT_ROOT у сайтов разный)
                "START_FROM" => "0",	// Номер пункта, начиная с которого будет построена навигационная цепочка
            ),
                false
            );?>
            <h1 class="g-title g-title--xl contacts__title">Контакты</h1>
            <div class="contacts__items">
                <div class="contact-item contacts__item">
                    <span class="contact-item__caption">Адреc:</span>
                    <span class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_ADDRESS");?></span>
                </div>
                <div class="contact-item contacts__item">
                    <span class="contact-item__caption">Консультация и отдел продаж:</span>
                    <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_1");?></a>
                </div>
                <div class="contact-item contacts__item">
                    <span class="contact-item__caption">Техническая поддержка:</span>
                    <a href="tel:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?>" class="contact-item__value"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_PHONE_2");?></a>
                </div>
                <div class="contact-item contacts__item">
                    <span class="contact-item__caption">Написать нам:</span>
                    <a href="mailto:<?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?>" class="contact-item__value contact-item__value--underline"><?=\Bitrix\Main\Config\Option::get( "askaron.settings", "UF_SHOW_EMAIL");?></a>
                </div>
            </div>
        </div>
        <div class="map contacts__map" id="map"></div>
    </section>
    <?$APPLICATION->IncludeFile("/include/blocks/questions.php",false,['SHOW_BORDER' => false]);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
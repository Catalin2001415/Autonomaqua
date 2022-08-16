<?

function debug($arr){
    global $USER;
    if($USER->IsAdmin()) {
        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    }
}

function imageX2($image_id,$image_width = 0,$image_height = 0){
    $img = CFile::GetFileArray($image_id);
    $proportional = 0;
    $imgValue = $image_id;
    if($image_width > 0){
    	$proportional = ($img['HEIGHT'] / 2)/($img['WIDTH'] / 2);
	    $width = $image_width;
	    $height = $image_width*$proportional;
    } elseif ($image_height > 0) {
		$proportional = ($img['WIDTH'] / 2)/($img['HEIGHT'] / 2);
    	$width = $image_height*$proportional;;
	    $height = $image_height;


		$width = $img['WIDTH'] / 2;
	    $height = $img['HEIGHT'] / 2;
    } else {
		$width = $img['WIDTH'] / 2;
	    $height = $img['HEIGHT'] / 2;
    }
    $tempX = CFile::ResizeImageGet(
        $imgValue,
        array('width' => $width, 'height' => $height,
            BX_RESIZE_IMAGE_PROPORTIONAL,
        ));
    $tempX2 = CFile::ResizeImageGet(
        $imgValue,
        array('width' => ($width * 2), 'height' => ($height * 2),
            BX_RESIZE_IMAGE_PROPORTIONAL,
        ));
    return [$tempX['src'],$tempX2['src']];
}
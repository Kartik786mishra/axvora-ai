<?php
if (isset($_FILES['video'])) {
    $file = $_FILES['video'];
    $folder = "uploads/";

    if (!file_exists($folder)) {
        mkdir($folder, 0777, true);
    }

    $path = $folder . basename($file["name"]);

    if (move_uploaded_file($file["tmp_name"], $path)) {
        echo "Upload successful!";
    } else {
        echo "Upload failed!";
    }
} else {
    echo "No file received!";
}
?>

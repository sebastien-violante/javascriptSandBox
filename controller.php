<?php

$onePoint = ['E', 'A', 'I', 'N', 'O', 'R', 'S', 'T', 'U', 'L'];
$twoPoints = ['D', 'G', 'M'];
$threePoints = ['B', 'C', 'P'];
$fourPoints = ['F', 'H', 'V'];
$eightPoints = ['J', 'Q'];
$tenPoints = ['K', 'W', 'X', 'Y', 'Z'];

$upperWord = strtoupper($_POST['word']);
$wordWithoutSpaces = str_replace(' ', '', $upperWord);

$rank = 0;
for ($i = 0; $i < strlen($wordWithoutSpaces) - 1; $i++) {
    if (in_array($wordWithoutSpaces[$i], $onePoint)) {
        $rank += 1;
    } elseif (in_array($wordWithoutSpaces[$i], $twoPoints)) {
        $rank += 2;
    } elseif (in_array($wordWithoutSpaces[$i], $threePoints)) {
        $rank += 3;
    } elseif (in_array($wordWithoutSpaces[$i], $fourPoints)) {
        $rank += 4;
    } elseif (in_array($wordWithoutSpaces[$i], $eightPoints)) {
        $rank += 8;
    } elseif (in_array($wordWithoutSpaces[$i], $tenPoints)) {
        $rank += 10;
    }
}

return $rank;

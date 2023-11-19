<?php

// arrays to determine the value of each letter
$onePoint = ['E', 'A', 'I', 'N', 'O', 'R', 'S', 'T', 'U', 'L'];
$twoPoints = ['D', 'G', 'M'];
$threePoints = ['B', 'C', 'P'];
$fourPoints = ['F', 'H', 'V'];
$eightPoints = ['J', 'Q'];
$tenPoints = ['K', 'W', 'X', 'Y', 'Z'];


// get the POST name and treat it 
$word = $_POST['word'];
$wordWithoutSpaces = str_replace(' ', '', $word);
$upperWord = strtoupper($wordWithoutSpaces);

// loop on the wold to determine the value of each letter and increment the rank
$rank = 0;
for ($i = 0; $i < strlen($upperWord); $i++) {
    if (in_array($upperWord[$i], $onePoint)) {
        $rank += 1;
    } elseif (in_array($upperWord[$i], $twoPoints)) {
        $rank += 2;
    } elseif (in_array($upperWord[$i], $threePoints)) {
        $rank += 3;
    } elseif (in_array($upperWord[$i], $fourPoints)) {
        $rank += 4;
    } elseif (in_array($upperWord[$i], $eightPoints)) {
        $rank += 8;
    } elseif (in_array($upperWord[$i], $tenPoints)) {
        $rank += 10;
    }
}

return $rank;

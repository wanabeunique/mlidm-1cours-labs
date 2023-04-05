<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Алгоритм Флойда — Уоршелла</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper hero">
        <form action="" class="hero__form" method="post">
            <div class="form__inputs">
                <textarea name="textarea"></textarea>
                <button type="submit" class="form__btn" onclick="">Найти матрицу достижимости</button>
            </div>
        </form>
        <!-- <img src="./1200px-Nicht_topologisch_sortierbarer_Graph.svg.png" alt="" class="img"> -->
        <?php
                $textarea = str_split($_POST['textarea']);
                $array = [];
                $cnt = 0;
                for ($i = 0; $i < count($textarea); $i++){
                    if ($textarea[$i] == '0' or $textarea[$i] == '1')
                    {
                        array_push($array, $textarea[$i]);
                    }
                }
                echo '<pre>' . 'Ваша матрица:' . '</pre>';
                for ($i = 0; $i < sqrt(count($array)); $i++)
                {
                    $array2d[$i] = [];
                    echo "<pre>";
                    for ($j = 0; $j < sqrt(count($array)); $j++)
                    {
                        settype($array[$cnt], "integer");
                        array_push($array2d[$i], $array[$cnt]);
                        echo "$array[$cnt]" . "   ";
                        $cnt++;
                    }
                    echo "</pre>";
                }
                echo '<pre>' . 'Матрица достижимости:' . '</pre>';
                for ($i = 0; $i < sqrt(count($array)); $i++)
                {
                    for ($j = 0; $j < sqrt(count($array)); $j++)
                    {
                        for ($k = 0; $k < sqrt(count($array)); $k++)
                        {
                            $array2d[$i][$j] = ($array2d[$i][$j] || ($array2d[$i][$k] && $array2d[$k][$j]));
                            if ($array2d[$i][$j] == false)
                                {
                                    $array2d[$i][$j] = 0;
                                }
                            
                            // if ($array2d[$i][$j] > ($array2d[$i][$k] + $array2d[$k][$j]))
                            // {
                            //     $array2d[$i][$j] = $array2d[$i][$k] + $array2d[$k][$j];
                            // }


                            // if ($array2d[$i][$j] < ($array2d[$i][$k] + $array2d[$k][$j]))
                            // {
                            //     $array2d[$i][$j] = 1;
                            // }  
                        }

                    }
                }
                for ($i = 0; $i < sqrt(count($array)); $i++)
                {
                    echo '<pre>';
                    for ($j = 0; $j < sqrt(count($array)); $j++)
                    {
                        echo $array2d[$i][$j] . "   ";
                    }
                    echo '</pre>';
                    
                }
                echo "</pre>";
            ?>  
        </div>
    </body>
</html>
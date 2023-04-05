<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <title>Алгоритм Дейстры</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper hero">
        <form action="" class="hero__form" method="post">
            <div class="form__inputs">
                <div class="start-input">
                    <p>Введите начальную точку</p>
                    <input type="text" name="start" value="1" required>
                </div>
                <div class="end-input">
                    <p> Введите конечную точку</p>
                    <input type="text" name="end" value="6" required>
                </div>
                <div class="">
                <p>Длина путей:</p>
                    <div class="item">
                        <p>1-2</p>
                        <input type="number" min="1" max="100" value="3" name="12" required> 
                    </div>
                    <div class="item">
                        <p>1-3</p>
                        <input type="number" min="1" max="100" value="1" name="13" required>
                    </div>
                    <div class="item">
                        <p>1-4</p>
                        <input type="number" min="1" max="100" value="3" name="14" required>
                    </div>
                    <div class="item">
                        <p>2-3</p>
                        <input type="number" min="1" max="100" value="4" name="23" required>
                    </div>
                    <div class="item">
                        <p>3-5</p>
                        <input type="number" min="1" max="100" value="7" name="35" required>
                    </div>
                    <div class="item">
                        <p>3-6</p>
                        <input type="number" min="1" max="100" value="5" name="36" required>
                    </div>
                    <div class="item">
                        <p>4-6</p>
                        <input type="number" min="1" max="100" value="2" name="46" required>
                    </div>
                    <div class="item">
                        <p>5-6</p>
                        <input type="number" min="1" max="100" value="4" name="56" required>
                    </div>
                </div>
                <button type="submit" class="form__btn" onclick="">Посчитать путь</button>
            </div>
        </form>
        <!-- <img src="./1200px-Nicht_topologisch_sortierbarer_Graph.svg.png" alt="" class="img"> -->
        <img src="./123.png" alt="" style="margin: 20px 0;">
        <?php
                $start = $_POST['start'];
                $end = $_POST['end'];
                $startValue = ((int) $start) - 1; 
                $endValue = ((int) $end); 
                $l12 = $_POST['12'];
                $l13 = $_POST['13'];
                $l14 = $_POST['14'];
                $l23 = $_POST['23'];
                $l35 = $_POST['35'];
                $l36 = $_POST['36'];
                $l46 = $_POST['46'];
                $l56 = $_POST['56'];

                echo "<pre>" . 'Начальная точка - ' . $start . "</pre>"; 
                echo "<pre>" . 'Конечная точка - ' . $end . "</pre>"; 
                echo 
                  "<pre>" . 'Расстояние от 1 до 2 : ' . $l12 . "</pre>" 
                . "<pre>" . 'Расстояние от 1 до 3 : ' . $l13 . "</pre>" 
                . "<pre>" . 'Расстояние от 1 до 4 : ' . $l14 . "</pre>" 
                . "<pre>" . 'Расстояние от 2 до 3 : ' . $l23 . "</pre>"
                . "<pre>" . 'Расстояние от 3 до 5 : ' . $l35 . "</pre>"
                . "<pre>" . 'Расстояние от 3 до 6 : ' . $l36 . "</pre>" 
                . "<pre>" . 'Расстояние от 4 до 6 : ' . $l46 . "</pre>" 
                . "<pre>" . 'Расстояние от 5 до 6 : ' . $l56 . "</pre>";

                $INT_MAX = 0x7FFFFFFF;

        function MinimumDistance($distance, $shortestPathTreeSet, $verticesCount)
        {
            global $INT_MAX;
            $min = $INT_MAX;
            $minIndex = 0;

            for ($v = 0; $v < $verticesCount; ++$v)
            {
                if ($shortestPathTreeSet[$v] == false && $distance[$v] <= $min)
                {
                    $min = $distance[$v];
                    $minIndex = $v;
                }
            }

        return $minIndex;
        }

        function PrintResult($distance, $verticesCount)
        {
            echo "<pre>" . "Вершина    Дистанция с начальной точки" . "</pre>";

            for ($i = 0 ; $i < $verticesCount; ++$i)
                echo "<pre>" . ($i+1) . "\t  " . $distance[$i] . "</pre>";
        }

        function Dijkstra($graph, $source, $verticesCount)
        {
        global $INT_MAX;
        $distance = array();
        $shortestPathTreeSet = array();

        for ($i = 0; $i < $verticesCount; ++$i)
        {
            $distance[$i] = $INT_MAX;
            $shortestPathTreeSet[$i] = false;
        }

        $distance[$source] = 0;

        for ($count = 0; $count < $verticesCount - 1; ++$count)
        {
            $u = MinimumDistance($distance, $shortestPathTreeSet, $verticesCount);
            $shortestPathTreeSet[$u] = true;

            for ($v = 0; $v < $verticesCount; ++$v)
                if (!$shortestPathTreeSet[$v] && $graph[$u][$v] && $distance[$u] != $INT_MAX && $distance[$u] + $graph[$u][$v] < $distance[$v])
                    $distance[$v] = $distance[$u] + $graph[$u][$v];
        }

        PrintResult($distance, $verticesCount);
        }

                $graph = array(
                    array('0',   $l12,   $l13,  $l14,   '0',    '0'  ),
                    array( $l12, '0',    $l23,  '0',    '0',    '0'  ),
                    array( $l13,  $l23,  '0',   '0',    $l35,    $l36),
                    array( $l14, '0',    '0',   '0',    '0',     $l46),
                    array('0',   '0',    $l35,  '0',    '0',     $l56),
                    array('0',   '0',    $l35,  $l46,   $l56,    '0' ),
                );
                Dijkstra($graph, $startValue, $endValue);

            ?>
        </div>
    </body>
</html>
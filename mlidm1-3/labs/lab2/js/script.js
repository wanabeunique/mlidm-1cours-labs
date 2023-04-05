var field = document.querySelector('#inputArea')

// поля с рез
var refRes = document.querySelector('.relation__ref')
var simRes = document.querySelector('.relation__sim')
var tranzRez = document.querySelector('.relation__tranz')



function getResult()
{
  let matrix = field.value
  var matrixArray = matrix.split('\n').join(' ').split(' ')
  if ((Math.sqrt(matrixArray.length) ** 2) != matrixArray.length)
  {
    alert('Увы, ваша матрица не квадратная')
    return 0
  }
  var matrix2D = [];
  for (let i=0; i <(Math.sqrt(matrixArray.length)); i++ )
  {
    matrix2D[i] = []
  }
  let m = 0
  for (let i=0 ; i <(Math.sqrt(matrixArray.length)); i++ )
  {
    for (let j=0; j <(Math.sqrt(matrixArray.length)); j++ )
    {
      matrix2D[i][j] = matrixArray[m]
      if ((matrixArray[m] != 0) && (matrixArray[m] != 1))
      {
        let l = m+1
        alert('Ошибка в значении ' + l +' элемента матрицы: ' + matrixArray[m])

        return 0 
      }
      m++
    }  
  }
  let reflCnt = 0
  let simCnt = 0
  let tranzCnt = true
  for (let i=0 ; i <(Math.sqrt(matrixArray.length)); i++ )
  {
    for (let j=0; j <(Math.sqrt(matrixArray.length)); j++ )
    {
      // Рефлективность
      if (i == j)
      {
        if (matrix2D[i][j] == 1)
        {
          reflCnt++
        }
      }
      // Симметричносить
      if (i != j)
      {
        if (matrix2D[i][j] == matrix2D[j][i])
        {
          simCnt++
        }
      }
    }
  }
  if (reflCnt != Math.sqrt(matrixArray.length))
  {
    refRes.innerHTML = 'Отношение антирефлексивное'
  }
  else
  {
    refRes.innerHTML = 'Отношение рефлексивное'
  }
  if (simCnt == (matrixArray.length - matrix2D.length))
  {
    simRes.innerHTML = 'Отношение симметрично'
  }
  else
  {
    simRes.innerHTML = 'Отношение антисимметрично'
  }
  for (let i=0 ; i <(Math.sqrt(matrixArray.length)); i++ )
  {
    for (let j=0 ; j <(Math.sqrt(matrixArray.length)); j++ )
    {
      for (let k=0 ; k <(Math.sqrt(matrixArray.length)); k++ )
      {
        if (i != j && j != k && k != i)
        {
          if (matrix2D[i][j] == 1 && matrix2D[j][k] == 1 && matrix2D[i][k] == 1)
          {
            continue
          }
          else
            tranzCnt = false
        }
      }
    }
  }
  console.log(tranzCnt);
  if (tranzCnt == true)
  {
    tranzRez.innerHTML = 'Отношение транзитивно'
  }
  else
  {
    tranzRez.innerHTML = 'Отношение не транзитивно'
  }
  console.log(tranzCnt);
}
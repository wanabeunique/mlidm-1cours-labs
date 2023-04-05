var field1 = document.querySelector('#funcInput1')
var field2 = document.querySelector('#funcInput2')
var field3 = document.querySelector('#funcInput3')
var res = document.querySelector('.fun__res')

function getRes()
{
  var value1 = field1.value
  var value2 = field2.value
  var value3 = field3.value

  var array1 = value1.split(' ')
  var array2 = value2.split(' ')
  var array3 = value3.split(' ')

  var arrayForRel = []

  var arrayForX = []
  var arrayForY = []

  for (let i = 0; i < array3.length; i++) 
  {
    arrayForRel[i] = new Object()
    arrayForRel[i].x = ''
    arrayForRel[i].y = ''
  }
  for (let i = 0; i < array3.length; i++) 
  {
    var el  = array3[i].replace('{','').replace('}','').split(',')
    arrayForRel[i].x = el[0]
    arrayForRel[i].y = el[1]
  }

  for (let i = 0; i < array3.length; i++)
  {
    let relX = arrayForRel[i].x
    let relY = arrayForRel[i].y
    // const evenX = (element, value) => element === relX;
    // const evenY = (element, value) => element === relY;

    arrayForX[i] = arrayForRel[i].x
    arrayForY[i] = arrayForRel[i].y
  }
  for (let i = 0; i < array3.length; i++)
  {
    if (array1.includes(arrayForX[i]) == false)
    {
      res.innerHTML = arrayForX[i] + ' Не принадлежит множеству'
      return 0
    }
    if (array2.includes(arrayForY[i]) == false)
    {
      res.innerHTML = arrayForY[i] + ' Не принадлежит множеству'
      return 0
    }
    for (let j = 0; j < array3.length; j++)
    {
      if (arrayForX[i] == arrayForX[j])
      {
        if((arrayForY[i] != arrayForY[j]))
          {
            res.innerHTML = 'Не является функцией'
            return 0
          }
      }
    }
    }
    for (let i = 0; i < array3.length; i++)
    {
      for (let j = 0; j < array3.length; j++)
      {
        if (arrayForY[i] == arrayForY[j])
        {
          if((arrayForX[i] != arrayForX[j]))
            {
              res.innerHTML = 'Не является функцией'
              return 0
            }
        }
      }
    }
  res.innerHTML = 'Является функцией'
  }
  // if (foundX == false)
  //   {
  //     alert('X не принадлежит множеству');
  //     return 0
  //   }
  // if (foundY == false)
  //   {
  //     alert('Y не принадлежит множеству');
  //     return 0
  //   }
  //   let cntCopyX = 0
  // for (let i = 0; i < array3.length; i++)
  //   {
  //     if (relX == array2[i]){
  //     cntCopyX++
  //   }
  // }
  // if (cntCopyX != 1)
  //   alert('error');
  // else
  //   console.log(('Является функцией'));
  
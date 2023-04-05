// bicb         буква   четная цифра   цифра  буква
let flag = ''
let flag1 = ''
let msgError

function UnityFunc(el1, el2)
{
  let res = el1 + "," + el2
  return res
}


function intersectionFunc(el1, el2)
{
  var setEl1 = new Set(el1);
  var setEl2 = new Set(el2);
  let intersection = new Set([...setEl1].filter(x => setEl2.has(x)));
  if (intersection.length == 0)
  {
    intersection = 'Сходств нет'
  }
  intersection = [...new Set(intersection)];
  console.log('Пересечение');
  console.log(intersection);
  return intersection
}


function unificationFunc(el1, el2)
{
  let dif = el2.filter(x => !el1.includes(x));
  return el1 + "," + dif
}


function massivProcessing(el)
{
  if (el.length != 4 && el.length != 0)
    {
      flag1 += '1'
      lenError = el.length - 4
      msgError = 'Недопустимая длина в ' + el + "<br>Уменшите строку на " + lenError  + " cимвол(а)"
      return 0
    }

  if (el[0] == undefined && el[1] == undefined && el[2] == undefined & el[3] == undefined)
  {
    flag += '0'
    return 0
  }
  
  let letter1 = (el[0].toLowerCase() !== el[0].toUpperCase())
  let letter2 = (el[3].toLowerCase() !== el[3].toUpperCase())
  
  if ( letter1 == true && el[1] % 2 == 0 && el[2] >= 0 && el[2] <= 9 && letter2 == true )
  {
    flag += '0'
  }
  else
  {
    flag += '1'
    msgError = 'Неправильный символ в ' + el 
  }
}

function differenceFunc1(el1, el2)
{
  let simmetricDifference1 = el1.filter(x => !el2.includes(x)).concat(el2.filter(x => !el1.includes(x)))
  return simmetricDifference1
}

function differenceFunc2(el1,el2) 
{
  let simmetricDifference2 = el2.filter(x => !el1.includes(x)).concat(el1.filter(x => !el2.includes(x)))
  return simmetricDifference2
}




function Processing()
{
  flag = '0'
  flag1 = '0'

  let input1 = document.querySelector('.hero__input1')
  let input2 = document.querySelector('.hero__input2')
  let error = document.querySelector('.hero__error')
  let unity = document.querySelector('.hero__unity-res')
  let intersection = document.querySelector('.hero__intersection-res')
  let unification = document.querySelector('.hero__unification-res')
  let difference1 = document.querySelector('.hero__difference1-res')
  let difference2 = document.querySelector('.hero__difference2-res')




  let value1 = input1.value
  let value2 = input2.value

  
  let arr1 = value1.split(' ')
  let arr2 = value2.split(' ')

  
  let arrZero = ''
  let arr1len = arr1.length;
  let arr2len = arr2.length;
  // for (let i = 0; i < arr1len; i++)
  // {
  //   if (arr1[i] == arrZero)
  //   delete arr1[i];
  // }
  // console.log(arr1);
  // for (var i = 0; i < arr2len; i++)
  // {
  //   if (arr2[i] == arrZero)
  //   delete arr2[i];

  // }


  console.log('Первый массив 1');
  console.log(arr1);
  console.log('Второй массив 1');
  console.log(arr2); 
  
  arr1 = arr1.filter(el => el!="")
  arr2 = arr2.filter(el => el!="")

  arr1 = arr1.filter((x, i) => arr1.indexOf(x) === i);
  arr2 = arr2.filter((x, i) => arr2.indexOf(x) === i);

  console.log('Первый массив 2');
  console.log(arr1);
  console.log('Второй массив 2');
  console.log(arr2);

  arr1.forEach(el => 
    {
      massivProcessing(el)
    });

  arr2.forEach(el => 
    {
      massivProcessing(el)
    });
  if (flag == 0 && flag1 == 0 )
  {
    error.innerHTML = 'Ошибок нет'
    unity.innerHTML = UnityFunc(arr1, arr2);
    intersection.innerHTML = intersectionFunc(arr1, arr2)
    unification.innerHTML = unificationFunc(arr1, arr2)
    difference1.innerHTML = differenceFunc1(arr1,arr2)
    difference2.innerHTML = differenceFunc2(arr1,arr2)
  }
  else
  { 
    // for (var i =0; i < length; i++)
    //   {
    //     if (flag[i] == '1') 
    //       error.innerHTML = "Неправильная буква/цифра в " + i + " Слове"
    //       if (flag1[i] == '1') 
    //       error.innerHTML = "Недопустимая длина " + i + " Слове"
    //   }
    error.innerHTML = "Ошибка <br>" + msgError
    unity.innerHTML = ''
    intersection.innerHTML = ''
    unification.innerHTML = ''
    difference1.innerHTML = ''
    difference2.innerHTML = ''
  }

}
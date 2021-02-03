const convertbtn = document.getElementById('cvt-btn');
let feetinput = document.getElementById('feet');
let inchinput = document.getElementById('inch');

function convertInCM() {
  if (feetinput.value == '' || inchinput.value == '') {
    alert('Please input valid values');
  } else {
    let feetvalue = parseInt(feetinput.value);
    let inchvalue = parseInt(inchinput.value);

    let heightincm = feetvalue * 30.48 + inchvalue * 2.24;
    document.getElementById('output').innerHTML = heightincm;
  }
}

convertbtn.addEventListener('click', convertInCM);

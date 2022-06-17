const num1= ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const  num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
var text = "";


function ones(n) {
if (Number(n) === 0) {
  console.log("ones");
  return '';
} else {
  var word = num1[n];
  // console.log(word);
  return word;
}

}

function tens(n) {
if (n < 20) {
  console.log("tens");
  return ones(n);
} else {
  var n1 = (n / 10).toString()[0];
  var n2 = (n % 10).toString();
  var word = n2 === '0' ? num2[n1 - 2] : num2[n1 - 2] + "-" + num1[n2];
  // console.log(word);
  return word;
}
}
function hundreds(n) {
if (Number(n) < 100) {
  console.log(n);
  return tens(n);
} else {
  var n1 = (n / 100).toString()[0];
  var n2 = (n % 100)
  var word = '';
  if (Number(n2) >= 20) {
    var x = tens(n2)
    word = num1[n1] + " hundred " + x;
  } else {
    var y = ones(n2)
    word = num1[n1] + " hundred " + y;
  }
  // console.log(word)
  return word;
}
}
function thousands(n) {

if (Number(n) < 1000) {
  console.log("th" + n);
  return hundreds(n);
} else {
  var n1 = (n / 1000).toString().split(".")[0];
  var n2 = (n % 1000)
  var word = '';
  var x = '';
  var y = '';
  if (Number(n2) < 100) {
    if (Number(n2) < 20) {
      x = ones(n2)

    } else {
      x = tens(n2)
    }
  } else {
    x = hundreds(n2)
  }
  if (Number(n1) > 20) {
    y = tens(n1)
    word = y + " thousand " + x
  } else {
    word = num1[n1] + " thousand " + x
  }
  // console.log(word)
  return word;
}
}
function lakhs(n) {
if (Number(n) < 100000) {
  return thousands(n)
} else {
  var n1 = (n / 100000).toString().split(".")[0];
  var n2 = (n % 100000)
  var word = '';
  var x = thousands(n2);
  var y = '';
  if (Number(n1) > 20) {
    y = tens(n1)
    word = y + " lakh " + x
  } else {
    word = num1[n1] + " lakh " + x
  }
  // console.log(word)
  return word;
}
}

function crore(n) {
var n1 = (n / 10000000).toString().split(".")[0];
var n2 = (n % 10000000)
var word = '';
var x = lakhs(n2);
var y = '';
if (Number(n1) > 20) {
  y = tens(n1)
  word = y + " crore " + x
} else {
  word = num1[n1] + " crore " + x
}
// console.log(word)
return word;
}
function handleChange() {

var num = document.getElementById("num").value;
console.log(num);
var n = Number(num)
var text = "";
if (n < 20) {
  text = ones(n)
  document.getElementById("word").innerHTML = text
}
if (n >= 20 && n < 100) {
  text = tens(n);
  document.getElementById("word").innerHTML = text
}
if (n >= 100 && n < 1000) {
  text = hundreds(n);
  document.getElementById("word").innerHTML = text
}
if (n >= 1000 && n < 100000) {
  text = thousands(n);
  document.getElementById("word").innerHTML = text
}
if (n >= 100000 && n < 10000000) {
  text = lakhs(n);
  document.getElementById("word").innerHTML = text
}
if (n >= 10000000 && n < 1000000000) {
  text = crore(n);
  document.getElementById("word").innerHTML = text
}
}

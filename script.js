// alert("Loading"); 

function addNewWEField(){
  // alert("Reached");

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-3');
  newNode.setAttribute('placeholder', 'Enter here')
  let weOb=document.getElementById('we');
  let weAddButtonOb = document.getElementById('weAddButton'); 

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add('mt-3');
  newNode.setAttribute('placeholder', 'Enter here')
  let aqOb=document.getElementById('aq');
  let aqAddButtonOb = document.getElementById('aqAddButton'); 

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV(){
  document.getElementById('cv-form').style.display='none';
  document.getElementById('cv-template').style.display='block';

  document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;
  document.getElementById('nameT2').innerHTML = document.getElementById('nameField').value;
  document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
  document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
  document.getElementById('linkedT').innerHTML = "LinkedIn";
  document.getElementById('linkedT').href = document.getElementById('linkedField').value;
  document.getElementById('gitHubT').innerHTML = "gitHub";
  document.getElementById('gitHubT').href = document.getElementById('gitHubField').value;
  document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

  let wes = document.getElementsByClassName('weField');
  let str = "";
  for(let e of wes){
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById('weT').innerHTML = str

  let aqs = document.getElementsByClassName('eqField');
  str = "";
  for(let e of aqs){
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById('aqT').innerHTML = str

  //code for setting image

  let file=document.getElementById('imgField').files[0]

  console.log(file);

  let reader=new FileReader()

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
  document.getElementById("imgTemplate").src = reader.result;
  };

}

function printCV(){
  window.print();
}
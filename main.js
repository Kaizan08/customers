// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var classElement = document.querySelector('.customers'); 

(function () {
  'use strict';
fetch('https://randomuser.me/api/?results=12&nat=us').then(function(response){
  response.json().then(function(data){
    dosomething(data);
  })
})

function dosomething(data){
  var output = data.results;
  for (var i=0; i < output.length; i++){
    buildprofile(output[i]);
  }
}
})();

function buildprofile(features){
  var customers = document.querySelector('.customers');
  var profilediv = document.createElement('div');
  profilediv.classList = "profile";
  customers.appendChild(profilediv);
  insertImg(features['picture']['medium'], profilediv);
  insertName(features['name'],profilediv); //name
  insertEmail(features,profilediv); //email
  insertAddress(features['location'], profilediv); //address
  insertPhone(features,profilediv);
}

function insertImg(thumbnail, parent){
  var img = document.createElement('img');
  img.setAttribute("src", thumbnail);
  img.classList = "profilepic";
  parent.appendChild(img);
}

function insertName(features, parent){
  var data = document.createElement('p');
  data.textContent = features['first'] + ' ' + features['last'];
  data.classList = "name";
  parent.appendChild(data);
}

function insertEmail(features, parent){
  var data = document.createElement('p');
  data.classList = 'email';
  data.textContent = features['email'];
  parent.appendChild(data);
}

function insertAddress(features, parent){
  var data = document.createElement('p');
  data.textContent = features['street'];
  data.classList = 'address';
  parent.appendChild(data);
  var csz = document.createElement('p');
  csz.classList = 'address';
  csz.textContent = features['city'] + ', ' + features['state'] + '  ' + features['postcode'];
  parent.appendChild(csz);
}

function insertPhone(features, parent){
  var data = document.createElement('p');
  data.textContent = features['phone'];
  data.classList = 'phone';
  parent.appendChild(data);
}

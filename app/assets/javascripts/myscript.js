$(document).ready(function($) {
  selectPage();

  if (window.location.pathname == "/favorites") loadFavorites();

});


function checkNames(){
  var gems = getGems();
  debugger
  gems.forEach(function(i){
    if (i.name == item) item.addClass("fave");
    console.log(i.name);
});
}

function selectPage() {
  //get the current URL
  var url = window.location.href;
  var activePage = url;
  $('li a').each(function() {
    var linkPage = this.href;

    //Add active class link that matches current URL
    if (activePage == linkPage) {
      $(this).closest("a").addClass("active");

    }
  });
}

function addFave() {
  var name = $('.gem-data a').text();
  var url = $('.gem-data a').attr('href');
  var gem = {
    name: name,
    url: url
  };
  addToStorage(gem);
}

function addToStorage(gem) {
  var gems = getGems();
  var included = false;

  gems.forEach(function(item) {
    if (item.name != gem.name) {
      included = false;
    } else {
      return included = true;
    }
  });

  if (!included) {
    gems.push(gem);
    console.log(`added ${gem.name} to collection`);
  }

  //Save gem array to local storage
  localStorage.setItem("gems", JSON.stringify(gems));
}

function getGems() {
  // Get gems from local storage
  gems = JSON.parse(localStorage.getItem("gems") || "[]");
  return gems;
}

function loadFavorites() {
  var gems = getGems();
  gems.forEach(function(item) {
    $('.favorite-gems ul').append(`<li> <a href=${item.url} target="_blank" >${item.name}</a> </li>`);
  });
}

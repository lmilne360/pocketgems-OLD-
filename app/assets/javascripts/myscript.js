$(document).ready(function($) {
  selectPage();

  if (window.location.pathname == "/favorites") loadFavorites();

  checkError();

});

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

function addFave(name, url) {
  var gem = {
    name: name,
    url: url
  };
  addToStorage(gem);
}

function addToStorage(gem) {
  var gems = getGems();

  function included(item) {
    return item.name === gem.name;
  }


  if (!gems.some(included)) {
    gems.push(gem);
    console.log(`added ${gem.name} to collection`);
  } else {
    console.log("Already part of your favorites");
  }

  //Save gem array to local storage
  localStorage.setItem("gems", JSON.stringify(gems));
}

function getGems() {
  // Get gems from local storage
  var gems = JSON.parse(localStorage.getItem("gems") || "[]");
  return gems;
}

function loadFavorites() {
  var gems = getGems();
  gems.forEach(function(item) {
    $('.favorite-gems ul').append(`<li class="col-md-4"> <a href=${item.url} target="_blank" >${item.name}</a> </li>`);
  });
  console.log("Favorite gems loaded");
}

function checkError() {
  var error = $('.error').text();
  if (error){
  $('.form-control, .input-group-btn > .btn.btn-default').css({"border-color":"#f55","color": "#f55"});
}

}

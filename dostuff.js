function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function scroll(target){
    $('html,body').animate({
        scrollTop: $("#"+target).offset().top
    });
}

var links = $(".restaurants__list a").map(function() {
    return this;
}).get();

var obj = links[randomInt(0, links.length)];
console.log(obj.href);

window.open(obj.href,'_blank');
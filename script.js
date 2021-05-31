var delay_popup = 5000;
var elem = document.querySelector('#elem');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var facts = [
    'В разных городах России и мира установлены десятки памятников Пушкину.',
    'Музеи, посвящённые жизни и творчеству поэта, находятся в Москве, Санкт-Петербурге, Пушкиногорском районе, Новгороде, Торжке, Киеве, Кишинёве, Гурзуфе, Одессе, Вильнюсе, в Бродзянах (Словакия) и других городах',
    'Именем Пушкина назван бывший город Царское Село и ряд других населённых пунктов.'
];
var kol = facts.length

if (localStorage.restart != 1){
    localStorage.run = 0
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
}

for (let i = 0; i < kol; i++) {
    star.insertAdjacentHTML('beforeend', '<span class="fa fa-star " id="loli"></span>');
    $('#loli').each(function () {
        this.id = i;
    });
}
$('#'+0).addClass('checked');

localStorage.restart = 1;
if (localStorage.run == 0){
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
}

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked != true){
        localStorage.run = 0;
    }else{
        localStorage.run = 1;
    }
}

var i = 0;
elem.innerHTML = facts[i]

next.addEventListener('click',function nextKey (){
    $('#'+ i).removeClass('checked');
    i++
    if (i == kol ){
        i = 0
    }
    elem.innerHTML = facts[i]
    $('#'+ i).addClass('checked');

});

prev.addEventListener('click',function prevKey (){
    $('#'+ i).removeClass('checked');
    if (i == 0 ) {
        i = 3
    }
    i--
    $('#'+ i).addClass('checked');
    elem.innerHTML = facts[i]
});

document.onkeydown = function(evt) {
    var isEscape = false;
    var isNext = false;
    var isPrev = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    }
    if (isEscape) {
        document.getElementById('overlay').style.display = 'none'
    }
    if ("key" in evt) {
        isNext = (evt.key === "ArrowRight" || evt.key === "39");

    }
    if (isNext) {
        $('#'+ i).removeClass('checked');
        i++
        if (i == kol ){
            i = 0
        }
        elem.innerHTML = facts[i]
        $('#'+ i).addClass('checked');
        isNext = False;
    }
    if ("key" in evt) {
        isPrev = (evt.key === "ArrowLeft" || evt.key === "37");
    }
    if (isPrev) {
        $('#'+ i).removeClass('checked');
        if (i == 0 ) {
            i = 3
        }
        i--
        $('#'+ i).addClass('checked');
        elem.innerHTML = facts[i]
        isPrev = False;
    }
};

var buttons = document.getElementById('star');
    console.log(buttons);
buttons.onclick = function(e) {
    $('#'+ i).removeClass('checked');
    $('#'+ e.target.id).addClass('checked');
    i = e.target.id
    elem.innerHTML = facts[i]
}










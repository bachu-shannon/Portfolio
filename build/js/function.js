window.onload = function() {
    var allCircle = document.getElementsByClassName('percent-circle');

    Array.prototype.forEach.call(allCircle, function(elem){
        var circleVal = elem.querySelector('.circle');
        var percentElem = elem.querySelector('.percent-val');
        var percentVal = percentElem.getAttribute("data-percent");
        animationCircle(circleVal, percentVal, percentElem);
    });

    function animationCircle(circle, num, elem){
        var radius = circle.getAttribute('r');
        var area = Math.PI * (radius * 2);

        if (num < 0) { num = 0;}
        if (num > 100) { num = 100;}

        var pct = ((100 - num ) / 100) * area;
        var full = area;
        var remain = (area - pct) / num;

        var interval = setInterval(function(){
            elem.innerHTML = 100 - Math.round(full/remain) + '%';
            if(pct <= full){
                full-=remain;
                circle.style.strokeDashoffset = full;
            }else{
                clearInterval(interval);
            }
        }, 20);
    }
};

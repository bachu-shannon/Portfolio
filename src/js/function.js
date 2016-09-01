var percentVal_1 = document.getElementById('percent-val-1').getAttribute('data-percent');
var percentVal_2 = document.getElementById('percent-val-2').getAttribute('data-percent');
var percentVal_3 = document.getElementById('percent-val-3').getAttribute('data-percent');
var percentVal_4 = document.getElementById('percent-val-4').getAttribute('data-percent');
var percentVal_5 = document.getElementById('percent-val-5').getAttribute('data-percent');


m = 0;
document.getElementById("percent-val-1").innerHTML = m;
var interval = setInterval('m = m+1; if(m > percentVal_1-1){clearInterval(interval)} document.getElementById("percent-val-1").innerHTML = m + "%";', 23);

timer = {
    path: '',
    length: '',
    duration: 2,
    start: function(duration) {
        this.path = this.path || document.querySelector('.circle>*');
        this.length = this.length || this.path.getTotalLength();
        this.duration = duration || this.duration;
        this.path.style.transition = this.path.style.webkitTransition = 'none';
        this.path.style.strokeDasharray = this.length;
        this.path.style.strokeDashoffset = -this.length;
        this.path.getBoundingClientRect();
        this.path.style.transition = 'stroke-dashoffset ' + (this.duration + 0.4) + 's linear';
        this.path.style.strokeDashoffset = 0;
    }
};

timer.start();
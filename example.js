var loop = setInterval(function(){
    ++$("#riders")[0].innerText >= 6844 && clearInterval(loop)
}, 0.01)

var interval = setInterval(function(){
    ++$("#rides")[0].innerText >= 4000 && clearInterval(interval)
}, 0.01)
 
var interval1 = setInterval(function(){
    ++$("#distence")[0].innerText >= 10000 && clearInterval(interval1)
}, 0.0001) 


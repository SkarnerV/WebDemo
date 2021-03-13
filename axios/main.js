

document.querySelector(".get").onclick = function() {
    axios.get("http://www.weather.com.cn/data/cityinfo/101010100.html")
    .then(function(response){
        console.log(response);
    },function(err){
        console.log(err);
    })
}
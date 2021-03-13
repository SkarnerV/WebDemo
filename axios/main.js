

var app = new Vue({
    el:"#app",
    data:{
        number:'',
        status:[],
        expName:'',
        timeTake:'',
        logo:''
    },

    methods:{
        getWeather:function(){
            console.log(this.number);
            var that = this;
            axios.get('https://api.apishop.net/common/express/getExpressInfo?apiKey=lbSTdFs78db4fe3e8da4832161d4bdf23ac016191b60571&expressNumber='+this.number)
                .then(function(response){
                    console.log(response);
                    that.status = response.data.result.list;
                    that.expName = response.data.result.expName;
                    that.timeTake = "用时："+response.data.result.takeTime;
                    that.logo = response.data.result.logo;
                },function(err){
                    console.log(err);
                })
                .catch(function(err){})
            
        }
    }

})




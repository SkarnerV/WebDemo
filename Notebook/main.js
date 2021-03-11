

var app = new Vue({
    el:"#app",
    data:{
        name:'this',
        arr:[],
        currentItem:""
    },
    methods:{
        addItem:function(){
            this.arr.push(this.currentItem);
            this.currentItem = "";
        },

        removeItem:function(){
            this.arr.pop();
        },

        removeIndex:function(index){
            this.arr.splice(index,1);
        }

    }

})

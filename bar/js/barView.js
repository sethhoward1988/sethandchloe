var AppView = Backbone.View.extend({
    
    el:'#app',
    
    initialize:function(){
        this.barView = new BarView({});
    }
})

var BarView = Backbone.View.extend({
    
    initialize:function(){
        this.render();
    },
    
    render:function(){
        $(this.el).empty();
        this.$el.append($('#bar').html());
    },
    
    events:{
        'keyup #bar':'type'
    },
    
    type:function(){
        var content = $('#bar').val();
        console.log(content);
    }
})

$(function(){
    window.appView = new AppView();
})
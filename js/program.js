$(function(){
    
    registrants = [];
    
    $('#homeRight').click(function(){
        animateHome();
    })
    
    $('#homeLeft').click(function(){
        animateHome();
    })
    
    $('#sethButton').click(function(){
        var margin = parseFloat($('#container').css('margin-left').split('px')[0]);
        margin = margin + 2500;
        $('#container').animate({
            marginLeft: margin + 'px'
        },'slow','easeInOutCirc')
        $('#footer').animate({
            marginLeft:'-350px'
        },'slow','easeInOutCirc')
    });
    
    $('#chloeButton').click(function(){
        var margin = parseFloat($('#container').css('margin-left').split('px')[0]);
        margin = margin - 2500;
        $('#container').animate({
            marginLeft: margin + 'px'
        },'slow','easeInOutCirc')
        $('#footer').animate({
            marginLeft:'350px'
        },'slow','easeInOutCirc')
    });
    
    $('#submit_button').click(function(){
        validate();
    })
    
    $('form').keyup(function(evt){
        if(evt.keyCode == 13){
            validate();
        }
    })
    
    $('iframe').load(function(){
        var resp = JSON.parse($($('iframe').contents()[0].body).text());
        if(resp.success){
            if($('#country').val().trim().toLowerCase() == 'brasil' || $('#country').val().trim().toLowerCase() == 'brazil'){
                $('.response').html("obrigado <b>" + $('#name').val() + "</b>, você pode esperar um convite daqui um pouco!")
            } else {
                $('.response').html("thanks <b>" + $('#name').val() + "</b>, you can be expecting an invitation soon!")
            }
            openResponse();
        } else if(resp.duplicate) {
            if($('#country').val().trim().toLowerCase() == 'brasil' || $('#country').val().trim().toLowerCase() == 'brazil'){
                $('.response').html("Este pessoa já foi registrado, obrigado!")
            } else {
                $('.response').html("This person has already been registered, thanks!")
            }
            openResponse();
        } else {
            $('.response').html("database issues... please try again!");
            openResponse();
        }
    });
                            
    
    //Setup slider
    
    var timerLength = 6000;
    var animationLength = 2000;
    
    function slide(){
        var frames = $('.inner_frame');
        var index = 1;
        function move(){
            $(frames[index]).animate({
                opacity:1
            },animationLength,function(){
                $(frames[index - 1]).css('opacity','0');
                if(index + 1 == frames.length){
                    setTimeout(function(){
                        $(frames[0]).css('opacity','1');
                        $(frames[index]).animate({
                            opacity:0
                        },animationLength,function(){
                            index = 1;  
                            setTimeout(function(){
                                move();
                            },timerLength);
                            return;
                        })
                    },timerLength)
                } else {
                    index++;
                    setTimeout(function(){
                        move();
                    },timerLength);
                }
            });
        }
        move();
    }
    
    goHome();
    setTimeout(function(){
        slide();
    },timerLength)
});

function openResponse(){
    $('.response_container').animate({
        width:'300px',
        marginLeft:'135px'
    },function(){
        setTimeout(function(){
            $('.response_container').animate({
                width:'0px',
                marginLeft:'0px'
            })
            $('#submit_button').removeClass('inactive');
        },4000)
    })
}

function goHome(){
    var offset = getWidth()/2;
    var containerWidth = $('#sethBio').width() + $('#home').width() + $('#chloeBio').width() + (1800 * 3);
    var middle = containerWidth/2;
    $('#container').css({
        marginLeft: -1 * (middle - offset) + 'px'
    })
}
    
function animateHome(){
    var offset = getWidth()/2;
    var containerWidth = $('#sethBio').width() + $('#home').width() + $('#chloeBio').width() + (1800 * 3);
    var middle = containerWidth/2;
    $('#container').animate({
        marginLeft: -1 * (middle - offset) + 'px'
    },'slow','easeInOutCirc')
    $('#footer').animate({
        marginLeft:'0px'
    },'slow','easeInOutCirc')
}

function validate(){
    if($('#submit_button').hasClass('inactive')){
        return;
    } else {
        $('#submit_button').addClass('inactive');
    }
    var info = {
        name:$('#name').val(),
        address:$('#address').val(),
        city:$('#city').val(),
        state:$('#state').val(),
        zip:$('#zip').val(),
        country:$('#country').val()
    }
    
    for(var prop in info){
        if(info[prop] == ''){
            alert('You are missing your ' + prop + '. Please fill out this field before continuing!');
            $('#submit_button').removeClass('inactive');
            return;
        }
    }
    
    for(var person in registrants){
        var test = registrants[person]; 
        if(test.name == info.name && test.address == info.address && test.city == info.city && test.country == info.country){
            if($('#country').val().trim().toLowerCase() == 'brasil' || $('#country').val().trim().toLowerCase() == 'brazil'){
                alert('Obrigado, você já foi adicionado!');
            } else {
                alert('Thanks, you have already been added to our list!');
            }
            $('#submit_button').removeClass('inactive');
            return;
        }
    }
    registrants.push(info);
    $('form').submit();
}
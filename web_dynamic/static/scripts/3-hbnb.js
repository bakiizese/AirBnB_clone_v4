$(document).ready(function(){
    let checked_dict = {};
    $('.chlist').change(function(){
        //console.log('clicked');
        let name = $(this).data('name');
        let ids = $(this).data('id');
        
        if ($(this).prop('checked')){
            checked_dict[ids] = name;
        } else {
            delete checked_dict[ids];
        }
        let txt = ''
        for (var key in checked_dict) {
            var value = checked_dict[key];
            if (txt === ''){
                txt = txt + value;
            } else {
                txt = txt + ', ' + value;
            }
        }
        $('#h4tag').text(txt);
    });
    $.ajax({
        methods: 'GET',
        url: 'http://0.0.0.0:5001/api/v1/status/',
    }).done(function(data){
        if (data.status == 'OK'){
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });

   
    $.ajax({
        method: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search',
        headers: {
            'Content-Type': 'application/json'
        },
        data: '{}',
        success: function(response){
            //console.log(response);
            for (j in response) {
                console.log(response[j]);
                let p = response[j];
                $('.places').append('<article><div class="title_box"><h2>' + p.name + '</h2><div class="price_by_night">$' + p.price_by_night + '</div></div>\
                <div class="information"><div class="max_guest">' + p.max_guest + ' Guest' + (p.max_guest > 1 ? 's' : '') + '</div>\
                <div class="number_rooms">' + p.number_rooms + ' Bedroom' + (p.number_rooms > 1 ? 's': '') + '</div>\
                <div class="number_bathrooms">' + p.number_bathrooms + ' Bathroom' + (p.number_bathrooms > 1 ? 's' : '') + '</div>\
                </div><div class="user"><b>Owner:</b></div><div class="description">' + p.description + '</div></article>');
                
                
            }
            $('.places').addClass('places');
            $('.title_box').addClass('title_box');
            $('article .price_by_night').addClass('price_by_night');
            $('article .max_guest').addClass('max_guest');
            $('article .information').addClass('information');
            $('.user').addClass('user');
            $('article .number_rooms').addClass('number_rooms');
            $('article .number_bathrooms').addClass('number_bathrooms');
            $('article .description').addClass('description');
            
        }
    });    
});



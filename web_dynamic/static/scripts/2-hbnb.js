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
    /*
    $.agax({
        methods: 'GET',
        url: 'http://0.0.0.0:5001/api/v1/status/',
    }).done(function(data){

    })
    */
});

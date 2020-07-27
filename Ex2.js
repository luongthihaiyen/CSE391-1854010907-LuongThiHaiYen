$(document).ready(function(){
    $("#sltScaleTime").on("change", function(){
        var ScaleNum = $(this).val();
        $(".scale-time-detail").html('');
        for ( let j=0; j<ScaleNum; j++){
            $('.scale-time-detail').append('<div class="scale-time-time1"></div>');
        }
    })
})
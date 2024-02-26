let windowHeight = $(window).innerHeight();
$(document).ready(function(){
    tab();
    sideNav();

    $('#wrapper .content, #wrapper .nav, #wrapper .chit').css('height', windowHeight)
})

// 사이드 네비게이션
function sideNav(){
    $('#wrapper .nav .lnb .depth01 > li > a').click(function(){
        $('#wrapper .nav .lnb .depth01 > li').not($(this).closest('li')).removeClass('on');
        $('#wrapper .nav .lnb .depth02').not($(this).siblings('.depth02')).slideUp();
        $(this).closest('li').toggleClass('on')
        $(this).siblings('.depth02').slideToggle()
    })
}

// 탭
function tab(){
    $('.tab-wrap').each(function(){
        let thisUse = $(this).data('use'),
            thisNo = $(this).find('.tab-btn.on').index();

        if(thisUse !== false) {
            $(this).children('.tab-cont-wrap').children('.tab-cont').hide()
            $(this).children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            
            $(this).find('.tab-btn').click(function(){
                thisNo = $(this).index();

                $(this).siblings('.tab-btn').removeClass('on');
                $(this).addClass('on');

                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').hide()
                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            })

            if($('[data-tab]').length > 0){
                $('[data-tab]').each(function(){
    
                    $(this).click(function(){
                        thisTabNo = $(this).data('tab') - 1;

                        $(this).closest('.tab-wrap').find('.tab-cont').hide()
                        $(this).closest('.tab-wrap').find('.tab-cont').eq(thisTabNo).show();
        
                        $(this).closest('.tab-wrap').find('.tab-btn').removeClass('on');
                        $(this).closest('.tab-wrap').find('.tab-btn').eq(thisTabNo).addClass('on');
                    })
                })
            }
        }
    });
}

// dim 생성
function dimMaker() {
    if($('body').find('.dim').length > 0){
        return;
    }
    $('body').append('<div class="dim"></div>');
    bodyHidden();
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
    bodyAuto();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', '')
}

// 팝업열기
function popOpen(id){
    $("#" + id).addClass('on');
}

// 팝업닫기
function popClose(id) {
    $("#" + id).removeClass('on');
    dimRemove();
}

// dim 옵션 팝업 열기
function popOpenAndDim(id, isDim){
    popOpen(id);
    
    if(isDim == true){
        dimMaker();
    }
}
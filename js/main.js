$(document).ready(function(){
    var sw=0;
    // 햄버거 메뉴 버튼
	$('#nav-icon4').click(function(){
		if(sw==0){
            sw=1;
            $(this).addClass('open');
            $('.gnb').animate({
                right:0
            });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.gnb').animate({
                right:'-100%'
            });
        }
	});
    $('nav .sub').hide();
    $('.gnb nav > ul > li > a').click(function(){
        // 만약 클릭한 메뉴의 클래스 속성에 active가 설정되어 있지 않다면
        if($(this).attr('class') !='active'){
            // 모든 주메뉴의 active를 제거
            $('.gnb nav > ul > li ').removeClass('active');
            // 클릭한 주메뉴에만 active 설정
            $(this).addClass('active');
            // 모든 서브메뉴는 다 들어감
            $('.gnb nav .sub').slideUp();
            // 클릭한 주메뉴의 서브메뉴만 나옴
            $(this).next().slideDown();
        // 클릭한 메뉴의 클래스 속성에 active가 설정되어 있다면
        }else{
            // 클릭한 메뉴에서 active제거
            $(this).removeClass('active');
            // 클릭한 메뉴의 서브메뉴 들어감
            $(this).next().slideUp();
        }
    });
    // fullpage
    $('#fullpage').fullpage({
        navigation:true,
        navigationPosition:"right",
        afterLoad: function(anchorLink, index){
            if(index==2){
                // 함수 호출
                addNum();
            }
            if(index==3){
                rightNum();
            }
            if(index==4){
                $('.s4 .s4_bottom div div').addClass('active');
            }else{
                $('.s4 .s4_bottom div div').removeClass('active');
            }
            // if(index == 8){
            //     $('#fp-nav ul li:last-child').fadeOut();
            // }else{
            //     $('#fp-nav ul li:last-child').fadeIn();
            // }
        }
    });

    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:5000
        },
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
      });

    // s2영역의 숫자 증가 애니메이션
    function addNum(){
        // each()메서드 : 객체 개수만큼 반복(1번)
        // prop()메서드 : 객체에 속성을 추가하거나, 객체의 속성을 알아내는 메서드, 0 : 초기값
        $('.addNumber span').each(function(){
            // $(this) : $('.addNumber span')를 가리킴
            // Counter속성을 객체에 추가함 초기값은 0, 최종값은 밑에 Counter에 적은 숫자(72204135)
            $(this).prop('Counter',0).animate({
                Counter:72204135
            },{
                // 실행시간
                duration :3000,
                // now값이 변하는 단계, 실수로 증가함 (실수란 소수점이 있는 수)
                step:function(now){
                    // Math.ceil() : 실수를 정수로 변환(올림)
                    // numberfn함수를 호출하면서 정수값now를 매개변수로 전달, 함수의 결과값을 num변수에 받아서 저장
                    var num=numberfn(Math.ceil(now));
                    // 늘어나는 num값을 span영역에 표시함.
                    $(this).text(num);
                }
            });
        });
    }
    function rightNum(){
        // each()메서드 : 객체 개수만큼 반복(1번)
        // prop()메서드 : 객체에 속성을 추가하거나, 객체의 속성을 알아내는 메서드, 0 : 초기값
        $('#addNumber h3').each(function(){
            // $(this) : $('.addNumber span')를 가리킴
            // Counter속성을 객체에 추가함 초기값은 0, 최종값은 밑에 Counter에 적은 숫자(72204135)
            $(this).prop('Counter',0).animate({
                Counter:16
            },{
                // 실행시간
                duration :1000,
                // now값이 변하는 단계, 실수로 증가함 (실수란 소수점이 있는 수)
                step:function(now){
                    // Math.ceil() : 실수를 정수로 변환(올림)
                    // numberfn함수를 호출하면서 정수값now를 매개변수로 전달, 함수의 결과값을 num변수에 받아서 저장
                    var gg=numberfn(Math.ceil(now));
                    // 늘어나는 num값을 span영역에 표시함.
                    $(this).text(gg);
                }
            });
        });
    }
    
    // numberfn함수 선언
    // 매개변수 x에서 Math.ceil(now)값을 전달받음
    function numberfn(x){
        // toString()메서드 : 전달답은 x값을 문자열로 변환
        // replace()메서드 : 문자열로 바꿔주는 메서드(치환)
        // \B : 문자가 존재하는지 경계가 아닌 부분 찾기
        // \d{3} : 문자열 3글자
        // (?!\d) : 3글자 이상 초과안되게 해라
        // g : 문자열 전체 검색
        // ?= : 기호 앞과 뒤의 조건을 합쳐줌
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
    
});
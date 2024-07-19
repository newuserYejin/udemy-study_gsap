window.onload = function () {
    // 01. gnb animation

    const menuOpen = document.querySelector('.gnb .menuOpen')
    const menuBox = document.querySelector('.gnb .menuBox')

    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on')
    })

    // 01. visual
    gsap.registerPlugin(ScrollTrigger); // gsap 라이브러리의 스크롤 트리거 등록

    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',      // 요소의 위치, 화면의 위치 (요소의 바닥, 화면의 하단)
            end: '100% 0%',      // 요소의 바닥, 화면의 상당 => 스크롤 내려서 맨 밑이 맨 위로 올라갈때까지
            scrub: 1,        // 스크롤이 될때만 되도록 작성 (1: 1초, 2: 2초, true : 스크롤에 바로 반응 (조금 딱딱한 반응), 숫자가 커질 수록 부드럽게 보인다.)
        }
    })

        // 애니메이션의 종류: to, from, from-to, set

        // 100% 때 to
        .to('.logoWrap #j', { x: -150, y: 200, rotate: 20, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #y', { x: -30, y: 150, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #o', { x: 0, y: 350, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #u', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #n', { x: 100, y: 100, rotate: 40, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #g', { x: 50, y: 300, rotate: 0, ease: 'none', duration: 5 }, 0)
    // 뒤에 0 없으면 순차적으로 진행


    gsap.utils.toArray('.mainTextBox .title i').forEach(selector => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                // start: 'top bottom', // 애니메이션 시작 위치
                // end: 'bottom top',   // 애니메이션 종료 위치
                scrub: 1
            }
        })
            // 0%일땐 from 
            // (적용 요소, 시작할 때, 끝일 때)
            .fromTo(selector, { overflow: 'hidden', y: 150 }, { y: 0, ease: 'none', duration: 5 }, 0)
    });

    gsap.utils.toArray('.subText p').forEach(selector => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1
            }
        })
            .fromTo(selector, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0)
    })
}





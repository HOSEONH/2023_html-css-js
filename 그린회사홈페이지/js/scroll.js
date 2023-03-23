/* 스크롤 이벤트 작성 */
// 스크롤 할 때마다 실행되는 함수도 함께 작성

// 네비게이션 바
const nav = document.querySelector("#nav");
// 섹션2 인트로
const intro = document.querySelector("#intro");
// 섹션4 뉴스
const news = document.querySelector(".news-scroll");

/* 스크롤 이벤트로 조건을 걸 때 사용할 수 있는 속성
* 스크롤의 Y 위치 : scrollY,
* 전체 스크롤 길이 :
* 화면의 길이 : innerHeight,
*/

window.addEventListener("scroll", function(){
    // console.log("스크롤이벤트")
    // 스크롤되면 scrollon 클래스 추가
    // nav.classList.add("scrollon");
    // console.log("스크롤 위치", window.scrollY);
    // console.log("스크롤 위치", window.scrollY);

    if(this.scrollY >= 200) {
        // scrollY가 200 이상 스크롤 되면 scrollon 클래스 추가
        nav.classList.add("scrollon");
        intro.classList.add("scrollon");
    } else {
        // scrollY가 200 미만이면 scrollon 제거
        nav.classList.remove("scrollon");
    }
    
    if(this.scrollY>1000) {
        news.classList.add("scrollon");
    }

} )
// scroll이 어떤 객체에 붙어있는 것이 아니라
// 브라우저에 붙어있기 때문에 window.로 가져온다
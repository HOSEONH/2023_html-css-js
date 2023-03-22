/* 슬라이더 버튼을 눌렀을 때 slider-item 위치 바뀜 */
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// 슬라이더 아이템
// const sliderItem = document.querySelector(".slider-item");
// 가장 처음에 있는 하나만 들고와진다. 
const sliderItems = document.querySelectorAll(".slider-item");

// 전체 슬라이더 갯수
const maxSlide = sliderItems.length; // 슬라이더 넘어가면 for문이 실행되지 않도록
// 현재 슬라이더를 알려주기 위한 변수
let currSlide = 1;

// 다음 버튼을 눌렀을 때 left값이 이동
nextButton.addEventListener("click", function(){
    // 현재 슬라이더가 전체 갯수보다 작을 때 실행
    if(currSlide<maxSlide) {
        currSlide++; // 2> -100%, 3>-200px, 4>-300% >> 화면의 넓이 곱해서 이동 
        // sliderItems를 통해서 모든 left값 이동
        for (let i = 0; i<sliderItems.length; i++) {
        sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})

// 이전 버튼
prevButton.addEventListener("click", function(){
    // 현재 슬라이더가 1보다 클 때 실행
    if(currSlide>1) {
        currSlide--; // 2> -100%, 3>-200px, 4>-300% >> 화면의 넓이 곱해서 이동 
        // sliderItems를 통해서 모든 left값 이동
        for (let i = 0; i<sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})
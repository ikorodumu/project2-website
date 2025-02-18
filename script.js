document.addEventListener("DOMContentLoaded", () => {
    const innerTabs = document.querySelectorAll(".inner-tab-link");
    const innerContents = document.querySelectorAll(".inner-tab-content");

    innerTabs.forEach(tab => {
        tab.addEventListener("click", event => {
            event.preventDefault();
            const targetTab = tab.getAttribute("data-tab");

            // 모든 탭에서 active 제거
            innerTabs.forEach(t => t.classList.remove("active"));
            innerContents.forEach(content => content.classList.remove("active"));

            // 선택한 탭에 active 추가
            tab.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });
});

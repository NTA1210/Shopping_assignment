const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const a = document.querySelector;

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = `${tabActive.offsetLeft}px`;
line.style.width = `${tabActive.offsetWidth}px`;


tabs.forEach((tab, index) => {
    tab.onclick = function() {
        const pane = panes[index];
        $(".tab-pane.active").classList.remove("active");
        pane.classList.add("active");


        $(".tab-item.active").classList.remove("active");
        this.classList.add("active");

        line.style.left = `${tab.offsetLeft}px`;
        line.style.width = `${tab.offsetWidth}px`;
    }
});
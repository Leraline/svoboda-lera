const plus = document.querySelector(".plus_btn"),
        sizeInput = document.querySelector("input[name=sizes]"),
        addSizeParent = document.querySelector(".sizes-table");
        

plus.addEventListener('click',  (target) => {
    addSize();
    target.preventDefault();
});

const enterAdd = document.querySelector('.keydown');

enterAdd.addEventListener('keydown', (target) => {
    if (target.keyCode == 13){
        addSize();
        target.preventDefault();
    }
});

function addSize(){
    if (sizeInput.value != '') {
        let tmp = sizeInput.value;
        let newSize = document.createElement("div");
        newSize.classList.add("size");
        newSize.innerText = tmp;

        newSize.addEventListener('mouseenter', (e) => {
            let blockSize = newSize.getBoundingClientRect().width;
            newSize.innerText = 'x';
            newSize.style.width = Math.ceil(blockSize)+"px";
        });

        newSize.addEventListener('mouseleave', (e) => {
            newSize.innerText = tmp;
        });

        newSize.addEventListener('click', (e) => {
            newSize.remove();
        });

        addSizeParent.appendChild(newSize);
        sizeInput.value = '';
    }
}

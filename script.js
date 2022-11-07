const ul = document.querySelector('ul');
const addButton = document.querySelector('.addButton');
const sortLogo = document.querySelector(".logo");

addButton.addEventListener('click', function (e) {
    const li = document.createElement("li");
    ul.insertAdjacentElement('afterbegin', li);
    li.innerHTML += `<input class="search" type="text" />
 <span class="remove">
 <i class="fa fa-thin fa-circle-xmark"></i></span>`
    Delete();
})
function Delete() {
    let spanAll = document.querySelectorAll(".remove")
    spanAll.forEach(function (item, index) {
        item.addEventListener('click', function (a) {
            console.log(item);
            if (index > 0) {
                item.parentElement.remove();
            }
        })
    })
}
Delete();
let reversed = true;
sortLogo.addEventListener('click', function () {
    var allInput = document.querySelectorAll("input");
    let values = [];
    allInput.forEach(function (element, index) {
        values.push(element.value);
        values.sort();
    })
    if (reversed == true) {
        reversed = false;
        values.reverse();
        sortLogo.classList.add("active")
    }
    else if (reversed == false) {
        reversed = true;
        sortLogo.classList.remove("active");
    }
    console.log(values);
    values.forEach(function (element2, index2) {
        allInput[index2].value = element2;
    })
})
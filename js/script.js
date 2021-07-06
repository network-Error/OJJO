console.log('Hello, JavaScript is work!');


// Modal window
// document.addEventListener('DOMContentLoaded', function() {
//     let scrollbar = document.body.cleintWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#openModal"]').addEventListener('click', function() {
//         document.body.style.overflow = 'hidden';
//         document.querySelector('#openModal').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close"').addEventListener('click', function() {
//         document.body.style.overflow = 'vissable';
//         document.querySelector('#openModal').style.marginLeft = '0px';
//     });
// });
document.addEventListener('click', function(e) {
    let target = e.target;
    if (target.dataset.toggle === 'modal') {
        e.preventDefault();
        document.querySelector(target.dataset.target).classList.add('open');
    } else if (target.dataset.close === 'modal') {
        e.preventDefault();
        target.closest('.modal').classList.remove('open');
    }
});

document.addEventListener('click', function(e) {
    if (location.hash === '#openModal') {
        if (!e.target.closest('.modal-dialog')) {
            location.hash = '#close';
        }
    }
});

document.addEventListener('click', function(e) {
    let target = e.target;
    if (target.dataset.toggle === 'registration') {
        e.preventDefault();
        document.querySelector(target.dataset.target).classList.add('open');
    } else if (target.dataset.close === 'registration') {
        e.preventDefault();
        target.closest('.registration').classList.remove('open');
    }
});

document.addEventListener('click', function(e) {
    if (location.hash === '#registration') {
        if (!e.target.closest('.registration-dialog')) {
            location.hash = '#close';
        }
    }
});

// Filter 

filterSelection('wedding');
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName('filterDiv');
    if (c == 'wedding') c = '';
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
    }
};

function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
};

function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
};

let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName('btn');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}

let classActive = document.getElementsByClassName('active');
let btnFilterWrapper = document.getElementsByClassName('btn_filter-wrapper');

// burger-menu
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById('menu-burger').style.display = 'block';
//     } else {
//         document.getElementById('menu-burger').style.display = 'none';
//     }
//     prevScrollpos = currentScrollPos;
// };

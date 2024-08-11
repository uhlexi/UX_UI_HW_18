const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(['.hidden-left','.hidden-right']);
hiddenElements.forEach((el) => observerX.observe(el));

const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-y');
        } else {
            entry.target.classList.remove('show-y');
        }
    });
});

const hiddenYElements = document.querySelectorAll(['.hidden-y']);
hiddenYElements.forEach((el) => observerY.observe(el));
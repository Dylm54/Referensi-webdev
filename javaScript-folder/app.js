const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');

hiddenElement.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
    }else {
      entry.target.classList.remove('show2');
    }
  });
});

const hiddenElement2 = document.querySelectorAll('.hidden2');

hiddenElement2.forEach((el) => observer2.observe(el));



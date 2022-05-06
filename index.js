// Tutaj napisz swój kod
import './style.css';

const button = document.querySelector('[data-id="button"]');
const tableRow = document.querySelectorAll('[data-module]');

const sortList = (module) => {
  const sortedRow = Object.values(module).sort((a, b) => {
    a = parseInt(a.lastElementChild.innerHTML);
    b = parseInt(b.lastElementChild.innerHTML);
    return a - b;
  });
  return sortedRow;
};

function calculateTitme(module) {
  module.forEach((time) => {
    const allTimeInSec = parseInt(time.lastElementChild.textContent);
    const timeInHouer = Math.floor(allTimeInSec / 3600);
    const timeInMinute = Math.floor(allTimeInSec / 60 - timeInHouer * 60);
    const timeinSec = Math.floor(
      allTimeInSec - timeInHouer * 3600 - timeInMinute * 60
    );
    time.lastElementChild.textContent = `${timeInHouer}:${timeInMinute}:${timeinSec}`;
  });
}

const animateEntryTop = (modulo) => {
  modulo.forEach((el) => {
    el.classList.add('animaton-entry-top');
    window.setTimeout(() => {
      el.classList.toggle('animaton-entry-top');
    }, 1000);
  });
};

const animateEntryDown = (modulo) => {
  modulo.forEach((el) => {
    el.classList.add('animaton-entry-bottom');
    window.setTimeout(() => {
      el.classList.toggle('animaton-entry-bottom');
    }, 1000);
  });
};


function updateUP(tableRow) {
  let sortArray = sortList(tableRow)
  let listWithHtmlContent = [];
  sortArray.forEach((el) => {
    listWithHtmlContent.push(el.innerHTML)
  });
  tableRow.forEach((el, i) => {
    if (el.innerHTML !== listWithHtmlContent[i]) {
      el.innerHTML = listWithHtmlContent[i];
    }
  })
}


function updateDown(tableRow) {
  let sortArray = sortList(tableRow).reverse();
  let listWithHtmlContent = [];
  sortArray.forEach((el) => listWithHtmlContent.push(el.innerHTML));
  tableRow.forEach((el, i) => {
    if (el.innerHTML !== listWithHtmlContent[i]) {
      el.innerHTML = listWithHtmlContent[i];
    }
  });
}

function changeIcon(){
  const icon = document.querySelector('[data-icon]');

  if (icon.matches('.fa-caret-down')) {
    icon.classList.remove('fa-caret-down');
    icon.classList.add('fa-caret-up');
    animateEntryDown(tableRow);
    updateUP(tableRow);
  } else {
    icon.classList.add('fa-caret-down');
    icon.classList.remove('fa-caret-up');
    animateEntryTop(tableRow);
    updateDown(tableRow);
  }
}


calculateTitme(tableRow);
button.addEventListener('click', changeIcon);

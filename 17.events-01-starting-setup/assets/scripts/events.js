const button = document.querySelector('button');

// button.onclick = function() {
//     console.log('btn clicked');
// };

const buttonClickHandler = (event) => {
  //alert('Button was clicked!');
  console.log(event);
  event.target.disabled = true;
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

//Basic Infinite Scrolling
let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
//window.addEventListener('scroll', scrollHandler);

//preventDefault() on event
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);  
});

//Understanding “Capturing” & "Bubbling" phases
const div = document.querySelector('div');

div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
}, true);

button.addEventListener('click', event => {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
  console.log(this);
});


button.addEventListener('mouseenter', event => {
  //event.stopPropagation();
  //event.stopImmediatePropagation();
  console.log('mouse enter BUTTON');
  console.log(event);
});

//event delegation
const listItems = document.querySelectorAll('li');
// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

const list = document.querySelector('ul');
list.addEventListener('click', event => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');

  // form.submit();
  button.click();
});
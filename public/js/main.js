const reviews = [
    {
        id: 0,
        name: 'Raja Gokul T',
        img: '/images/Review1.png',
        text: 'The course was easy to follow, and I learned a lot in just a few hours. Definitely worth ₹149!',

    },  
    {
        id: 1,
        name: 'Manimaran NS',
        img: '/images/Review2.png',
        text: 'Great value for money! The lessons were simple, and the certification boosted my confidence.',

    },
    {
        id: 2,
        name: 'Mathan Kumar R',
        img: '/images/Review3.png',
        text: 'I didn\'t expect much for the price, but I was really impressed with how much I learned!',

    },
    {
        id: 3,
        name: 'Raja S',
        img: '/images/Review4.png',
        text: 'I loved the hands-on exercises. The course helped me understand Microsoft Dynamics 365 easily!',
    },
];
  
// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item 

let currentItem = 0;

// load initial item 
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

// show person based on item 

function showPerson() {
    const item =  reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}

// show next person 

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person 
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
    currentItem = reviews.length -1;
    }
    
    showPerson(currentItem);
});





/* Accordian */
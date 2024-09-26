const reviews = [
    {
          id: 0,
          name: 'Sara Jones',
          job: 'UX DESIGNER',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person2.jpg',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
  
      },  
    {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          img: 'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
  
      },
      {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          img: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
  
      },
      {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person4.jpg',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
      },
      {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          img: 'https://www.admenergy.com.mx/wp-content/uploads/person6.jpg',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet nemo, at quibusdam facere laboriosam error a animi voluptatem placeat?',
      },
  ];
  
  // select items
  
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
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
      job.textContent = item.job;
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
  
  // show random person
  
  randomBtn.addEventListener('click',  function(){
      currentItem = Math.floor(Math.random() * reviews.length);
      console.log(currentItem);
      showPerson();
  });




/* Accordian */
const reviews = [
    {
          id: 0,
          name: 'Sara Jones',
          job: 'UX DESIGNER',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person2.jpg',
          text: 'The course was easy to follow, and I learned a lot in just a few hours. Definitely worth ₹149!',
  
      },  
    {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          img: 'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
          text: 'Great value for money! The lessons were simple, and the certification boosted my confidence.',
  
      },
      {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          img: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
          text: 'I didn\'t expect much for the price, but I was really impressed with how much I learned!',
  
      },
      {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person4.jpg',
          text: 'I loved the hands-on exercises. The course helped me understand Microsoft Dynamics 365 easily!',
      },
      {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          img: 'http://siga-aluminio.com.mx/wp-content/uploads/2019/01/person4.jpg',
          text: 'The course was super helpful, and the instructor made everything easy to understand. I feel more confident and ready now!',
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
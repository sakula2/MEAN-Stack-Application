/* GET homepage controller */
// Create an index function
//Include controller code for the homepage

const index = (req, res) => {
  res.render('location-info', 
  { 
  pageHeader: {
   title: ' Welcome to your happy place!',
 },
 sidebar: {
   context: 'Our Restaurant',
   callToAction: 'please leave us a comment/ suggestion.'
 },
 location: {
   name: 'Thank you for visting',
   address: '521 Wall St #100, Seattle, WA 98121',
   rating: 5,
   facilities: ['Food', 'Music', 'Wifi'],
   coords: {lat: 47.6175507, lng: -122.3466029},
   openingTimes: [
     {
       days: 'Monday - Friday',
       opening: '6:00pm',
       closing: '9:00pm',
       closed: false
     },
     {
       days: 'Saturday',
       opening: '8:00am',
       closing: '5:00pm',
       closed: false
     },
     {
       days: 'Sunday',
       closed: true
     }
   ],
   reviews: [
     {
       author: 'Anh Nguyen',
       rating: 5,
       timestamp: 'Nov 01 2021',
       reviewText: 'Great Restaurant'
     },
     {
       author: 'Sravya Akula',
       rating: 5,
       timestamp: ' Nov 9 2021',
       reviewText: 'The ambience was great'
     }
   ]
 }
}
);
};  



  
  /* GET 'Location info' page */

  
  module.exports = {
    index,
    
  };


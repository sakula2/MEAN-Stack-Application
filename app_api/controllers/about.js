/* GET about controller */
// Create an about function
//Include controller code for the about

const about = (req, res) => {
    res.render('about',
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
     coords: {lat: 51.455041, lng: -0.9690884},
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
  const addReview = (req, res) => {
    res.render('add-review',
      {
        title: 'Add review' ,
        pageHeader: { title: 'Review The Happy Place' }
      }
    );
  };


//expose the about function as a method
module.exports = {
    about,
    addReview
};

  
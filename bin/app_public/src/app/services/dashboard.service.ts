import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"American",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:15,
      foodImg: "/assets/img/burger.jpeg"
      // https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Indian",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:20,
      foodImg:"/assets/img/biriyani.jpeg"
    },
    {
      id:3,
      foodName:"Nepalese",
      foodDetails:"chicken dumplings",
      foodPrice:18,
      foodImg:"/assets/img/momos.jpeg"
    },
    {
      id:4,
      foodName:"Vietnamese",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:20,
      foodImg:"/assets/img/pho.jpeg"
    },
    // {
    //   id:5,
    //   foodName:"Indulgence Brownie",
    //   foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
    //   foodPrice:105,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    // },
    // {
    //   id:6,
    //   foodName:"Oreo Cheesecake Ice Cream",
    //   foodDetails:"Oreo ice cream",
    //   foodPrice:219,
    //   foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // }
  ]


  

}
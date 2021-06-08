import React, { useEffect, useState } from 'react';
import './Blog.css'

const article = [
    {
       img:"https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/articlk.jpg",
       name:"Family Health Care Project",
       descrip:"Golapganj Ultrasono Center is an organization of all good health care activities for the people from social responsibility."
  
    },
    {
        img:"https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/golapgonj-altasno-center-300x198-1.jpg",
        name:"Official inauguration of Golapganj Ultrasono Center",
        descrip:"was present as the Chief Guest at the inauguration ceremony of Golapganj Ultrasnow Center established on the initiative of Dr. Titu Chandra Acharya"
    },
    {
        img:"https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/a.jpg",
        name:"Family Health Card for poor people",
        descrip:"In order to improve the quality of medical services for the people of Golapganj, a 'Golapganj Ultrasono Center' has been established on Zakiganj Road in Chaumuhani under the overall management of Dr. Titu Chandra Acharya"
      
    }
]   

const Blog = () => {
    const [blog,setBlog] = useState([])
       useEffect(()=>{
           setBlog(article) 
       },[]) 
    return (
        <>
             <div className="container doctor">
               <h1 className="about-item mb-5 text-center">Recent Article and News</h1>
               <div className="row">
                 {
                     blog.map(article=><div className="col-md-4">
                         <div className="doctor-item">
                             <div className="doctor-top">
                             <img src={article.img} alt="" className="blog-img"/>
                             </div>
                             <div className="doctor-bottom">
                                <h3>{article.name}</h3>
                               <p className="mt-4">{article.descrip}</p>
                            </div>
                         </div>
                     </div>)
                 }
               </div>
           </div> 
        </>
    );
};

export default Blog;
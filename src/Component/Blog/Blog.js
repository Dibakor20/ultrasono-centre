import React, { useEffect, useState } from 'react';
import './Blog.css'

const article = [
    {
        img: "https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/articlk.jpg",
        name: "পারিবারিক স্বাস্থ্য পরিচর্যা প্রকল্প",
        descrip: "সামাজিক দ্বায়বদ্ধতা থেকে জনগণের জন্য স্বাস্থ্যসেবার সকল শুভ কর্মকাণ্ডের প্রতিষ্টান গোলাপগঞ্জ আল্ট্রাসনো সেন্টার।"

    },
    {
        img: "https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/golapgonj-altasno-center-300x198-1.jpg",
        name: "গোলাপগঞ্জ আল্ট্রাসনো সেন্টারের আনুষ্ঠানিক উদ্বোধন",
        descrip: "ডাঃ টিটু চন্দ্র আচার্য্যের উদ্যেগে প্রতিষ্ঠত গোলাপগঞ্জ আলট্রাস্নো সেন্টারের উদ্ধোধনী অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন গোলাপগঞ্জ পৌরসভার নব-নির্বাচিত মেয়র আমিনুল ইসলাম রাবেল।"
    },
    {
        img: "https://golapganjultrasono.debakor.com/wp-content/uploads/2020/11/a.jpg",
        name: "দরিদ্র মানুষের জন্য পারিবারিক স্বাস্থ্য কার্ড",
        descrip: "গোলাপগন্জবাসীর চিকিৎসা সেবার মানোন্নয়নের লক্ষ্যে চৌমুহনীর জকিগঞ্জ রোডে প্রতিষ্ঠিত হয়েছে ‘গোলাপগন্জ আলট্রাসনো সেন্টার‘- যার সার্বিক পরিচালনায় আছেন অত্র এলাকার কৃতি ছাত্র ডা:টিটু চন্দ্র আচার্য্য।সামাজিক উন্নয়ন ও সেবা মূলক কাজ করার  লক্ষ্য ও অরাজনৈতিক সেচ্ছাসেবী মনোভাবের দৃষ্টিকোন নিয়ে  মানবতার সেবায় এগিয়ে এসেছে গোলাপগঞ্জ আলট্রাসোনো সেন্টার।"

    }
]

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        setBlog(article)
    }, [])
    return (
        <>
            <div className="container doctor">
                <h1 className="about-item mb-5 text-center">সাম্প্রতিক ব্লগ এবং খবর</h1>
                <div className="row justify-content-center">
                    {
                        blog.map(article => <div className="col-lg-4 col-sm-6">
                            <div className="blog-item mb-4">
                                <div className="top">
                                    <a href='/' target='_blank'>
                                        <img src={article.img} alt="" className="blog-img" />
                                    </a>
                                </div>

                                <div className="blog-bottom">
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
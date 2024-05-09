import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import CyberSecurity from "./Pages/CyberSecurity";
import DataScience from "./Pages/DataScience";
import Career from "./Pages/Career";
import NotFound from "./Pages/NotFound";

const App = () => {
  const data = [
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.v5yOgrGYbWmPJr58hzpEowAAAA&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "25 March, 2024",
      readTime: "4",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.WBzz0smt-skJwF4TdklCtQHaEL&pid=Api&P=0&h=180",
      title: "Cyber Security",
      intro: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "16 April, 2024",
      readTime: "5",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp",
      title: "Data Science",
      intro: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "16 April, 2024",
      readTime: "6",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      title: "Cyber Security",
      intro: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "Jaishree Tomar",
      date: "26 March, 2024",
      readTime: "4",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.2teCVtzk4icVUQwR232MCAHaEH&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "How does Apache work? A detailed introduction to Apache",
      author: "Tushar Vinocha",
      date: "26 March, 2024",
      readTime: "5",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.DJGYsXXC2qah0mO7ci1LywHaEK&pid=Api&P=0&h=180",
      title: "Cyber Security",
      intro: "8 Different Types of Cybersecurity and Threads Involved",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
      readTime: "4",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title: "Data Science",
      intro: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "Lukesh S",
      date: "25 March, 2024",
      readTime: "7",
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.gMUAfrHInWGo6p_QSrEVAwHaD8&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "6 Essential Prerequisites For Learning ReactJs",
      author: "Ramkumar",
      date: "25 March, 2024",
      readTime: "3",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.QrIlZIe2TqFbDGxiS82lxwAAAA&pid=Api&P=0&h=180",
      title: "Data Science",
      intro: "Everything about Data Scientist Salary in India | 2024",
      author: "Srinithi Shankar",
      date: "02 Apr, 2024",
      readTime: "5",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Vi6VNCi7h8x4pBnOD884_gHaEA&pid=Api&P=0&h=180",
      title: "Cyber SEcurity",
      intro:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "Tushar Vinocha",
      date: "25 March,2024",
      readTime: "3",
    },
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.kTtc79r-fbjbPH-EtNvEYgHaFj&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "22 March, 2024",
      readTime: "4",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ma_Jmwlgc6rWdwYkTXulZQHaD4&pid=Api&P=0&h=180",
      title: "Data Science",
      intro: "Can A Commerce Student Do Data Science?",
      author: "Saakshi Priyadarshini",
      date: "16 Apr, 2024",
      readTime: "3",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "Cyber Security",
      intro: "The Ultimate Cybersecurity Roadmap for Beginners",
      author: "Srinithi Sankar",
      date: "23 March,2024",
      readTime: "3",
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.3OGv8fxxzlDKZv9UDIllwAHaD4&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "Best Web Development Roadmap for Beginners 2024",
      author: "Isha Sharma",
      date: "16 March, 2024",
      readTime: "5",
    },
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.FMvBDoSKPl55TBG1e_G6PAHaEo&pid=Api&P=0&h=180",
      title: "Data Science",
      intro: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "16 Apr, 2024",
      readTime: "6",
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.k0ehUhe1jxuSqvajrUs5EAEyDM&pid=Api&P=0&h=180",
      title: "Full Stack Development",
      intro: "Top 10 Full-Stack Developer Frameworks in 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "5",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.p0j5tGiwKqOGGwZ4_oEtzAHaFG&pid=Api&P=0&h=180",
      title: "Cyber Security",
      intro:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      author: "Tusher Vinocha",
      date: "04 Oct, 2024",
      readTime: "4",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.aM0Z_SWoxu8EfB6MTLFqRgHaEK&pid=Api&P=0&h=180",
      title: "Data Science",
      intro: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "16 Apr, 2024",
      readTime: "3",
    },
    {
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title: "Career",
        intro: "The Ultimate Cybersecurity Roadmap for Beginners",
        author: "Srinithi Sankar",
        date: "23 March,2024",
        readTime: "3",
      }
     
      
     
  ];
  const careerData=[  {
    picture:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/skilld-required-to-become-a-uui-ux-designer-2048x1072.webp",
    title: "Career",
    heading: "UI/UX Design",
    lang1:"TAMIL",
    lang2:"ENGLISH"
  },  {
    picture:
      "https://tse2.mm.bing.net/th?id=OIP.9F5r6wrOfoGNnFs6xe9EmAHaEK&pid=Api&P=0&h=180",
    title: "Career",
    heading: "MERN Stack Development",
    lang1:"TAMIL",
    lang2:"ENGLISH"
  
  },
{
    picture:
      "https://tse4.mm.bing.net/th?id=OIP.OCiWPHlIR1s_0BPpa-cq7AHaEC&pid=Api&P=0&h=180",
    title: "Career",
    heading: "Blockchain Technology ",
    lang1:"TAMIL",
    lang2:"ENGLISH"
  }
  ,
  {
    picture:
      "https://tse2.mm.bing.net/th?id=OIP.CvErn0LApE677YQ71GOSbQHaEK&pid=Api&P=0&h=180",
    title: "Career",
    heading: "Learn Digital Marketing",
    lang1:"TAMIL"
  },];
 
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<FullStack data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career careerData={careerData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;

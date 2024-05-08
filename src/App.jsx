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
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title: "Full Stack Development",
      intro: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "25 March, 2024",
      readTime: "4",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
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
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
      title: "Full Stack Development",
      intro: "How does Apache work? A detailed introduction to Apache",
      author: "Tushar Vinocha",
      date: "26 March, 2024",
      readTime: "5",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
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
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
      title: "Full Stack Development",
      intro: "6 Essential Prerequisites For Learning ReactJs",
      author: "Ramkumar",
      date: "25 March, 2024",
      readTime: "3",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title: "Data Science",
      intro: "Everything about Data Scientist Salary in India | 2024",
      author: "Srinithi Shankar",
      date: "02 Apr, 2024",
      readTime: "5",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png",
      title: "Cyber SEcurity",
      intro:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "Tushar Vinocha",
      date: "25 March,2024",
      readTime: "3",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      title: "Full Stack Development",
      intro: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "22 March, 2024",
      readTime: "4",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
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
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      title: "Full Stack Development",
      intro: "Best Web Development Roadmap for Beginners 2024",
      author: "Isha Sharma",
      date: "16 March, 2024",
      readTime: "5",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      title: "Data Science",
      intro: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "16 Apr, 2024",
      readTime: "6",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
      title: "Full Stack Development",
      intro: "Top 10 Full-Stack Developer Frameworks in 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "5",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title: "Cyber Security",
      intro:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      author: "Tusher Vinocha",
      date: "04 Oct, 2024",
      readTime: "4",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
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
      },
      {
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2024/04/Best-MERN-Stack-Projects-To-Make-in-2024.png",
        title: "Career",
        intro: "MERN Stack Development",
        author: "Isha Sharma",
        date: "03 May, 2024",
        readTime: "5",
      },
      {
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/07/skilld-required-to-become-a-uui-ux-designer-2048x1072.webp",
        title: "Career",
        intro: "UI/UX Design",
        author: "Srinithi Sankar",
        date: "16 March, 2024",
        readTime: "3",
      },
      {
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2022/10/Best-Websites-to-Learn-DIgital-Marketing-in-2023.jpg",
        title: "Career",
        intro: "Learn Digital Marketing",
        author: "Saanchi Bhardwaj",
        date: "21 March, 2024",
        readTime: "5",
      },
      {
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1.jpeg",
        title: "Career",
        intro: "A Guide to Learn Blockchain Technology From Scratch",
        author: "Lukesh S",
        date: "06 Oct, 2024",
        readTime: "3",
      }
  ];
 
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
          <Route path="/career" element={<Career data={data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

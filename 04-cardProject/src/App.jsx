import React from 'react'
import Card from './components/Card';

const App = () => {
  const jobs = [
  {
    brandlogo: "https://imgs.search.brave.com/v8qrCRRWT8lpGg9GVBEQJmEvLWHvm0zLjBFYiW7DgOA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ny8yMC9nb29nbGUt/bG9nby12ZWN0b3It/NTAwMTQ3MjAuanBn",
    company: "Google",
    dateposted: "2 days ago",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "JavaScript",
    pay: "₹12 - 18 LPA",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://tse3.mm.bing.net/th/id/OIP.nVVP4iZ1NYyu2cyvEcCTwQHaGB?r=0&pid=ImgDet&w=179&h=145&c=7&dpr=1.3&o=7&rm=3",
    company: "Microsoft",
    dateposted: "1 day ago",
    post: "Software Engineer",
    tag1: "Java",
    tag2: "DSA",
    pay: "₹10 - 16 LPA",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn",
    company: "Amazon",
    dateposted: "3 days ago",
    post: "SDE Intern",
    tag1: "Java",
    tag2: "AWS",
    pay: "₹50K - 80K / Month",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/38g0Gp_71RYNUKNJqjCL0-BFuKIGwDDTeqnaygg43tY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/aW5mb3N5cy5zdmc",
    company: "Infosys",
    dateposted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "React",
    tag2: "Node.js",
    pay: "₹6 - 10 LPA",
    location: "Pune, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/YuKXp7kkbYQaOLwIS7Q54a1uYq38E-d0DRjLTB6uvVk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Rjcy10/YXRhLWNvbnN1bHRh/bmN5LXNlcnZpY2Vz/Mjc5Mi5sb2dvd2lr/LmNvbS53ZWJw",
    company: "TCS",
    dateposted: "1 week ago",
    post: "Java Developer",
    tag1: "Java",
    tag2: "Spring Boot",
    pay: "₹5 - 9 LPA",
    location: "Noida, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/26ahKGn5zFKUZ6qMkuUy4d_pJ_aFZyNTJgHUTj1nZsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    company: "Adobe",
    dateposted: "2 days ago",
    post: "UI Developer",
    tag1: "React",
    tag2: "CSS",
    pay: "₹9 - 14 LPA",
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?w=193&h=192&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    company: "Flipkart",
    dateposted: "5 days ago",
    post: "Backend Developer",
    tag1: "Node.js",
    tag2: "MongoDB",
    pay: "₹8 - 13 LPA",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.EBdxBKbhhAcXbaWuQ7RA9wHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    company: "IBM",
    dateposted: "3 days ago",
    post: "AI/ML Engineer",
    tag1: "Python",
    tag2: "Machine Learning",
    pay: "₹8 - 15 LPA",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.IK2ARuws61sKctFesLjYoQHaDE?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    company: "Accenture",
    dateposted: "6 days ago",
    post: "Associate Software Engineer",
    tag1: "Java",
    tag2: "SQL",
    pay: "₹4.5 - 7 LPA",
    location: "Gurgaon, India"
  },
  { 
    brandlogo: "https://www.bing.com/th/id/OIP.6r5OeVx7_cPzhDtetwKsEgHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    company: "Zoho",
    dateposted: "1 day ago",
    post: "Software Developer",
    tag1: "Java",
    tag2: "React",
    pay: "₹6 - 11 LPA",
    location: "Chennai, India"
  }
];

 return (
  <div className="parent">
    {jobs.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card
            company={elem.company}
            brandlogo={elem.brandlogo}
            dateposted={elem.dateposted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      );
    })}
  </div>
);
};
export default App
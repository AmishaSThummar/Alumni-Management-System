import React, { useEffect, useState } from 'react'
import AlumniSuggestionCard from './AlumniSuggestionCard';

const AlumniSuggestion = () => {
      const [alumniData, setAlumniData] = useState([
        
          {
            id: 1,
            name: "John Doe",
            companyName: "Tech Corp",
            yearsOfExperience: 5,
            skills: ["JavaScript", "React", "Node.js"],
          },
          {
            id: 2,
            name: "Jane Smith",
            companyName: "Business Inc",
            yearsOfExperience: 8,
            skills: ["Java", "Spring Boot", "SQL"],
          },
        
      ]);
//  useEffect(() => {
//    // Replace with your actual API endpoint
//    fetch("https://api.example.com/alumni")
//      .then((response) => response.json())
//      .then((data) => setAlumniData(data));
//  }, []);

 return (
   <div className=" flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 p-6">
     {alumniData.map((alumni) => (
       <AlumniSuggestionCard key={alumni.id} alumni={alumni} linkedin={true} />
     ))}
   </div>
 );
}

export default AlumniSuggestion

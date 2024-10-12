const teachers =[
    {
      "name": "Dr. Sanjay Kumar",
      "bio": "Expert in Algorithms and Data Structures, helping students excel in programming and coding skills.",
      "image": "url/to/image1.jpg",
      "branch": ["CSE"],
      "semester": [1, 2],
      "subjects": ["Data Structures", "Algorithms"],
      "reviews": [
        { "user": "Alice", "rating": 5, "comment": "Excellent teaching methods!" },
        { "user": "Bob", "rating": 4, "comment": "Good, but a bit fast-paced." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Niranjan Bhattacharya",
      "bio": "Specializes in Thermodynamics and Fluid Mechanics for Mechanical Engineering.",
      "image": "url/to/image2.jpg",
      "branch": ["ME"],
      "semester": [3, 4],
      "subjects": ["Thermodynamics", "Fluid Mechanics"],
      "reviews": [
        { "user": "Charlie", "rating": 4, "comment": "Knowledgeable and experienced." },
        { "user": "Dave", "rating": 5, "comment": "Great explanations and practical approach." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Pooja Rao",
      "bio": "Expert in VLSI and Digital Electronics, focusing on chip design and microprocessors.",
      "image": "url/to/image3.jpg",
      "branch": ["ECE"],
      "semester": [5, 6],
      "subjects": ["VLSI", "Digital Electronics"],
      "reviews": [
        { "user": "Eve", "rating": 5, "comment": "Very engaging and thorough in her lectures." },
        { "user": "Frank", "rating": 4, "comment": "Detailed, but sometimes a bit too technical." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Manish Sharma",
      "bio": "Specialist in Concrete Technology and Structural Analysis in Civil Engineering.",
      "image": "url/to/image4.jpg",
      "branch": ["CE"],
      "semester": [3, 4],
      "subjects": ["Concrete Technology", "Structural Analysis"],
      "reviews": [
        { "user": "Grace", "rating": 4, "comment": "Good practical examples." },
        { "user": "Hank", "rating": 5, "comment": "His field experience really shines through." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Richa Singh",
      "bio": "Artificial Intelligence and Machine Learning expert, guiding students in intelligent systems.",
      "image": "url/to/image5.jpg",
      "branch": ["CSE"],
      "semester": [7, 8],
      "subjects": ["Artificial Intelligence", "Machine Learning"],
      "reviews": [
        { "user": "Ivy", "rating": 5, "comment": "Amazing teacher, very helpful and clear." },
        { "user": "Jake", "rating": 4, "comment": "Challenging, but rewarding." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Mohan Verma",
      "bio": "Circuit theory and Analog Electronics expert, guiding students in electrical circuit design.",
      "image": "url/to/image6.jpg",
      "branch": ["ECE"],
      "semester": [1, 2],
      "subjects": ["Circuit Theory", "Analog Electronics"],
      "reviews": [
        { "user": "Kate", "rating": 4, "comment": "Clear explanations, but can improve pace." },
        { "user": "Leo", "rating": 5, "comment": "Very knowledgeable and approachable." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Ramesh Gupta",
      "bio": "Mechanical engineering expert with a focus on Heat Transfer and Dynamics.",
      "image": "url/to/image7.jpg",
      "branch": ["ME"],
      "semester": [5, 6],
      "subjects": ["Heat Transfer", "Dynamics"],
      "reviews": [
        { "user": "Maya", "rating": 5, "comment": "Great teacher, loved his classes!" },
        { "user": "Noah", "rating": 4, "comment": "Good practical knowledge." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Seema Joshi",
      "bio": "Specialist in Hydrology and Environmental Engineering, teaching civil engineering students.",
      "image": "url/to/image8.jpg",
      "branch": ["CE"],
      "semester": [5, 6],
      "subjects": ["Hydrology", "Environmental Engineering"],
      "reviews": [
        { "user": "Olivia", "rating": 5, "comment": "Superb teaching, makes difficult topics easy." },
        { "user": "Peter", "rating": 4, "comment": "Very informative but fast-paced." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Aditi Patel",
      "bio": "Data Science expert, guiding students in data analytics and statistical methods.",
      "image": "url/to/image9.jpg",
      "branch": ["CSE"],
      "semester": [3, 4],
      "subjects": ["Data Science", "Statistics"],
      "reviews": [
        { "user": "Quincy", "rating": 5, "comment": "Engaging and very insightful." },
        { "user": "Rachel", "rating": 4, "comment": "Excellent at breaking down complex topics." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Vishal Kothari",
      "bio": "Mechanical Engineering professor focusing on Manufacturing Processes and CAD.",
      "image": "url/to/image10.jpg",
      "branch": ["ME"],
      "semester": [7, 8],
      "subjects": ["Manufacturing Processes", "CAD"],
      "reviews": [
        { "user": "Steve", "rating": 5, "comment": "Extremely knowledgeable, great explanations." },
        { "user": "Tina", "rating": 4, "comment": "Good teaching style but sometimes fast." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Prakash Kumar",
      "bio": "Expert in Power Systems and Control Engineering for electrical engineering students.",
      "image": "url/to/image11.jpg",
      "branch": ["ECE"],
      "semester": [7, 8],
      "subjects": ["Power Systems", "Control Engineering"],
      "reviews": [
        { "user": "Uma", "rating": 5, "comment": "One of the best professors in the department!" },
        { "user": "Vikram", "rating": 4, "comment": "Very helpful and approachable." }
      ],
      "overallRating": 4.5
    },
    {
      "name": "Dr. Ravi Shankar",
      "bio": "Civil Engineering expert with a focus on Geotechnical Engineering.",
      "image": "url/to/image12.jpg",
      "branch": ["CE"],
      "semester": [7, 8],
      "subjects": ["Geotechnical Engineering"],
      "reviews": [
        { "user": "Wendy", "rating": 4, "comment": "Very thorough and clear in his lectures." },
        { "user": "Xander", "rating": 5, "comment": "Great field knowledge and teaching style." }
      ],
      "overallRating": 4.5
    }
  ]
  
   
  
   
  

   
module.exports = {data : teachers};
  
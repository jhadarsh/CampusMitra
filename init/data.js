const teachers = [
  {
      name: 'Dr. Sanjay Kumar',
      bio: 'Dr. Sanjay Kumar is helping students in achieving exemplary academic performance towards getting their career and financial goals.',
      image: 'https://example.com/images/sanjay.jpg',
      subjects: ['Mathematics', 'Physics'],
      reviews: [
          {
              user: 'USER_ID_1',
              rating: 5,
              comment: 'Dr. Kumar is an excellent professor. His teaching methods are top-notch!',
          },
          {
              user: 'USER_ID_2',
              rating: 4,
              comment: 'Great teacher, but sometimes goes too fast.',
          }
      ],
      overallRating: 4.5
  },
  {
      name: 'Dr. Niranjan Bhattacharyya',
      bio: 'Dr. Bhattacharyya has been teaching Engineering for over 16 years with a focus on real-world applications.',
      image: 'https://example.com/images/niranjan.jpg',
      subjects: ['Mechanical Engineering', 'Thermodynamics'],
      reviews: [
          {
              user: 'USER_ID_3',
              rating: 4,
              comment: 'Engaging lectures but difficult to keep up sometimes.',
          }
      ],
      overallRating: 4
  },
  {
      name: 'Dr. Anjali Sharma',
      bio: 'Dr. Sharma is a renowned professor in the field of Computer Science with a special focus on Data Structures and Algorithms.',
      image: 'https://example.com/images/anjali.jpg',
      subjects: ['Computer Science', 'Data Structures'],
      reviews: [
          {
              user: 'USER_ID_4',
              rating: 5,
              comment: 'Amazing professor! Her explanations are crystal clear.',
          },
          {
              user: 'USER_ID_5',
              rating: 4,
              comment: 'Very knowledgeable but the pace is fast.',
          }
      ],
      overallRating: 4.5
  },
  {
      name: 'Prof. Ramesh Singh',
      bio: 'Prof. Ramesh Singh specializes in teaching Electrical Engineering and has over 10 years of teaching experience.',
      image: 'https://example.com/images/ramesh.jpg',
      subjects: ['Electrical Engineering', 'Circuit Analysis'],
      reviews: [
          {
              user: 'USER_ID_6',
              rating: 3,
              comment: 'Good teacher but his lectures can be monotonous at times.',
          }
      ],
      overallRating: 3
  },
  {
      name: 'Dr. Meera Kapoor',
      bio: 'Dr. Meera Kapoor is a passionate educator in the field of Environmental Science and Sustainable Development.',
      image: 'https://example.com/images/meera.jpg',
      subjects: ['Environmental Science', 'Sustainable Development'],
      reviews: [
          {
              user: 'USER_ID_7',
              rating: 4,
              comment: 'Her classes are insightful and thought-provoking!',
          }
      ],
      overallRating: 4
  }
];

  
  module.exports = {data : teachers};
  
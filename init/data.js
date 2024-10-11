const sampleSocieties = [
    {
      name: 'Tech Innovators Society',
      bio: 'A society that fosters innovation and creativity in the field of technology. We host hackathons, workshops, and coding events to help students develop their skills.',
      image: '/images/societies/tech_innovators.jpg',
      auditionDate: new Date('2024-11-15'),
      numberOfStudents: 150,
      president: { name: 'Aman Kumar', contactInfo: 'aman.kumar@example.com' },
      vicePresident: { name: 'Pooja Singh', contactInfo: 'pooja.singh@example.com' },
      coreTeam: [
        { name: 'Rahul Gupta', role: 'Event Manager' },
        { name: 'Sanya Mehta', role: 'PR Head' },
      ],
      facultyName: 'Prof. Manish Sharma',
      establishmentDate: new Date('2018-07-10'),
    },
    {
      name: 'Cultural Club',
      bio: 'The cultural club is all about celebrating diversity and talent. From dance to drama, we embrace all forms of artistic expression.',
      image: '/images/societies/cultural_club.jpg',
      auditionDate: new Date('2024-12-01'),
      numberOfStudents: 200,
      president: { name: 'Anjali Verma', contactInfo: 'anjali.verma@example.com' },
      vicePresident: { name: 'Rohit Sinha', contactInfo: 'rohit.sinha@example.com' },
      coreTeam: [
        { name: 'Simran Kaur', role: 'Music Coordinator' },
        { name: 'Ravi Patel', role: 'Dance Coordinator' },
      ],
      facultyName: 'Prof. Neha Agrawal',
      establishmentDate: new Date('2016-05-20'),
    },
    {
      name: 'Entrepreneurship Cell',
      bio: 'E-Cell empowers students to pursue their entrepreneurial dreams by providing mentorship, resources, and networking opportunities.',
      image: '/images/societies/entrepreneurship_cell.jpg',
      auditionDate: new Date('2024-11-05'),
      numberOfStudents: 120,
      president: { name: 'Rakesh Mishra', contactInfo: 'rakesh.mishra@example.com' },
      vicePresident: { name: 'Isha Agarwal', contactInfo: 'isha.agarwal@example.com' },
      coreTeam: [
        { name: 'Kunal Singh', role: 'Marketing Head' },
        { name: 'Meera Jain', role: 'Finance Head' },
      ],
      facultyName: 'Prof. Sunil Kapoor',
      establishmentDate: new Date('2015-03-18'),
    },
    {
      name: 'Drama and Theatre Society',
      bio: 'A vibrant community that promotes performing arts through drama and theatre. Our society performs regularly and holds acting workshops.',
      image: '/images/societies/drama_society.jpg',
      auditionDate: new Date('2024-11-25'),
      numberOfStudents: 75,
      president: { name: 'Niharika Chatterjee', contactInfo: 'niharika.chatterjee@example.com' },
      vicePresident: { name: 'Shivam Joshi', contactInfo: 'shivam.joshi@example.com' },
      coreTeam: [
        { name: 'Saurabh Mehta', role: 'Script Writer' },
        { name: 'Tara Singh', role: 'Set Designer' },
      ],
      facultyName: 'Prof. Meena Sharma',
      establishmentDate: new Date('2014-09-22'),
    },
    {
      name: 'Robotics Club',
      bio: 'The Robotics Club focuses on building advanced robotic systems and AI-based projects. We participate in national and international robotics competitions.',
      image: '/images/societies/robotics_club.jpg',
      auditionDate: new Date('2024-12-05'),
      numberOfStudents: 90,
      president: { name: 'Arjun Das', contactInfo: 'arjun.das@example.com' },
      vicePresident: { name: 'Leena Paul', contactInfo: 'leena.paul@example.com' },
      coreTeam: [
        { name: 'Vivek Sharma', role: 'Hardware Lead' },
        { name: 'Aditi Rao', role: 'Software Lead' },
      ],
      facultyName: 'Prof. Anupam Verma',
      establishmentDate: new Date('2017-01-15'),
    }
  ];
  
  module.exports = {data : sampleSocieties};
  
// Technical projects data
const projectsData = [
  {
    id: 'xr-association',
    src: 'asset/images/father-of-vr.jpeg',
    title: 'Extended Reality Association: Student XR Club at UW',
    subtitle: 'Building a community for XR enthusiasts at the University of Washington',
    path: '/xr-association',
    tag: ['XR', 'Leadership'],
    date: '2022-2025'
  },
  {
    id: 'csf-justice',
    src: 'asset/images/whenwesay-sustain.png',
    title: 'CSF: Justice-centered grant making',
    subtitle: null,
    path: '/csf-justice',
    tag: ['Sustainability', 'Justice'],
    date: '2023-2025'
  },
  {
    id: 'ridewithgps-mcp',
    src: 'asset/images/ridewithgps-mcp.jpeg',
    title: 'RideWithGPS MCP: LLM + Cycling',
    subtitle: null,
    path: '/ridewithgps-mcp',
    tag: ['AI', 'Health'],
    date: '2025'
  },
  {
    id: 'ar-health-tracking',
    src: 'asset/images/frame-ar.jpeg',
    title: 'Smart Glasses for Health Tracking',
    subtitle: null,
    path: '/ar-health-tracking',
    tag: ['XR', 'Health'],
    date: '2025'
  },
  {
    id: 'xr-cooking-capstone',
    src: 'asset/images/IMG_2642.jpeg',
    title: 'Contextual AI + XR for accessible cooking',
    subtitle: 'In collaboration with Ben Kosa and Timothy Morris',
    path: '/xr-cooking-capstone',
    tag: ['XR', 'HCI'],
    date: '2024'
  },
  {
    id: 'maps',
    src: 'asset/images/bike-map.png',
    title: 'Maps!',
    subtitle: null,
    path: '/maps',
    tag: ['GIS'],
    date: ''
  },
  {
    id: 'unspoken',
    src: 'asset/images/unspoken.png',
    title: 'Using XR to learn American Sign Language: challenges and opportunities',
    subtitle: 'In collaboration with Osco, Rinko, Shmoji, and Yifan',
    path: '/unspoken',
    tag: ['XR', 'Accessibility'],
    date: '2024'
  },
  {
    id: 'beatbounce',
    src: 'asset/images/beatbounce.jpg',
    title: 'Bringing music production to 3D',
    subtitle: 'In collaboration with Jaclyn Chen, Eric Xiao, and Peyton Rapo',
    path: '/beatbounce',
    tag: ['XR', 'Music'],
    date: '2023'
  },
  {
    id: 'forward-to-past',
    src: 'asset/images/tothepast.jpg',
    title: 'Immersive history education through AI avatars',
    subtitle: 'In collaboration with Rylan Pozniak Daniels',
    path: '/forward-to-past',
    tag: ['AI', 'Education'],
    date: '2023'
  }
];

// Helper function to get project metadata by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

export default projectsData;

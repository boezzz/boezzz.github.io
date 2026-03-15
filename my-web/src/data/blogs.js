// Casual blog posts data
const blogsData = [
  {
    id: 'friday-harbor-2024',
    src: 'asset/images/IMG_2531.jpeg',
    title: 'Friday Harbor, 2024',
    subtitle: null,
    path: '/friday-harbor-2024',
    tag: ['Travel', 'Environment'],
    date: 'October 2024'
  }
];

// Helper function to get blog post metadata by ID
export const getBlogById = (id) => {
  return blogsData.find(blog => blog.id === id);
};

export default blogsData;

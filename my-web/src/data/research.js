// Research projects data
const researchData = [
  {
    id: 'negative-commons',
    src: 'asset/images/linux_workflow.png',
    title: 'Addressing Negative Commons Governance with Positive Commons Principles',
    subtitle: 'Boyang Zhou*, Oleg Ianchenko* (*equal contribution)',
    collaborator: '(Special thanks to <a href="https://kurti.sh/" target="_blank" rel="noopener noreferrer">Dr. Kurtis Heimerl</a>)',
    venue: 'Preprint',
    date: '2025',
    links: {
      pdf: 'asset/LIMITS_Final_Paper.pdf'
    },
  },
  {
    id: 'ttt-nn',
    src: 'asset/images/tttnn-results.png',
    title: 'Reproducibility Report: Test-Time Training on Nearest Neighbors for Large Language Models',
    subtitle: 'Boyang Zhou, Johan Lindqvist, Lindsey Li',
    collaborator: '(Special thanks to <a href="https://mrtz.org/" target="_blank" rel="noopener noreferrer">Dr. Moritz Hardt</a> and <a href="https://yueatsprograms.github.io/" target="_blank" rel="noopener noreferrer">Dr. Yu Sun</a>)',
    venue: 'arXiv',
    tag: ['Machine Learning', 'NLP'],
    date: '2025',
    links: {
      arxiv: 'https://arxiv.org/abs/2511.16691'
    },
    abstract: 'Research on TTT-NN methodology and applications.'
  },
  {
    id: 'so-arm100',
    src: 'asset/images/base_anchor.jpg',
    title: 'Droi-Link: Real-Time Sensor Sharing for Enhancing Human-Robot Collaboration',
    subtitle: 'Boyang Zhou, Yu-Jung Su, Shas Mani',
    venue: '',
    tag: ['Robotics', 'XR'],
    date: '2025',
    links: {
      poster: 'asset/images/droi-link-poster.jpg'
    },
    abstract: 'A novel human-robot collaboration system that leverages head-mounted XR devices as mobile sensing platforms for robotic manipulation tasks.'
  },
  {
    id: 'vr-6dof',
    src: 'asset/images/forest_first_frame.jpeg',
    title: 'mono6D: Online 6-DOF Viewer - Transforming Casually Captured 360° Video into On-The-Go 6-DOF Immersive Experiences',
    subtitle: 'Boyang Zhou',
    collaborator: '(Special thanks to <a href="https://ana-serrano.github.io/" target="_blank" rel="noopener noreferrer">Dr. Ana Serrano</a>)',
    venue: '',
    tag: ['Graphics', 'XR'],
    date: '2025',
    links: {
      demo: 'https://mono6d-a0ee0.web.app/',
      webpage: 'https://boezzz.com/mono6D'
    },
    abstract: 'An online 6-DOF viewer that transforms any 360-degree video captured from a single viewpoint into a distributable 6-DOF experience with motion parallax.'
  },
  {
    id: 'ar-esi',
    src: 'asset/images/spine.png',
    title: 'AR Guidance for Pain Medicine Spine Injections',
    subtitle: 'Barbara Kozminski, John Akers, Zezhong Yang, Boyang Zhou',
    venue: '',
    tag: ['Health', 'XR'],
    date: '2022',
    links: {
      poster: 'asset/images/aresi_poster.png'
    },
    abstract: 'Augmented reality guidance system for epidural steroid injection procedures in pain medicine.'
  }
];

export default researchData;

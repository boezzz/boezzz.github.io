// Publications data
const publicationsData = [
  {
    id: 'care-apple-vision-pro-2025',
    title: 'CARE - Clinician Augmented Reality Environment: Design and Technical Feasibility of Apple Vision Pro for Image-guided Surgeries',
    authors: [
      'Ze Xia Lucas Wang',
      'Marianny De León',
      'Boyang Zhou',
      'Sai Jayanth Kalisi',
      'Keith Meng Phou',
      'Jennifer Han',
      'Yijun Chen',
      'Alicia Betty',
      'Oliver Aalami',
      'Alberto Paderno',
      'Rania Hussein'
    ],
    venue: 'JAMIA',
    year: '2025 (in press)',
    coverImage: 'asset/images/care-cover.jpg',
    links: {
      webpage: 'https://uw-care.github.io/',
      pdf: 'https://uw-care.github.io/static/papers/JAMIA_Paper__final_.pdf'
    },
    abstract: ''
  },
  {
    id: 'generative-inbetweening-2025',
    title: 'Generative Inbetweening: Adapting Image-to-Video Models for Keyframe Interpolation',
    authors: [
      'Xiaojuan Wang',
      'Boyang Zhou',
      'Brian Curless',
      'Ira Kemelmacher-Shlizerman',
      'Aleksander Holynski',
      'Steven M. Seitz'
    ],
    venue: 'ICLR',
    year: '2025',
    coverImage: 'asset/videos/car_frame_interpolation.mp4',
    links: {
      webpage: 'https://svd-keyframe-interpolation.github.io/',
      arxiv: 'https://arxiv.org/abs/2408.15239',
      code: 'https://github.com/jeanne-wang/svd_keyframe_interpolation.git',
      demo: 'https://huggingface.co/spaces/fffiloni/svd_keyframe_interpolation',
      dataset: 'https://drive.google.com/file/d/1aOiQutnHKGNtt6eNlo-n5iSDfRMFqmk8/view?usp=drive_link'
    },
    abstract: 'Given a pair of key frames as input, our method generates a continuous intermediate video with coherent motion by adapting a pretrained image-to-video diffusion model.'
  }
];

export default publicationsData;

// All site content as data, so components stay presentational.

export const intro = `First-generation Iranian web developer. From learning HTML5,
CSS, and basic JavaScript to building full applications with modern frameworks, I
love taking ideas from start to finish. Check out my projects on GitHub and reach
out if you'd like to collaborate.`;

export const skills = {
   Languages: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
   Frameworks: [
      'React.js',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Chakra UI',
      'Bootstrap',
   ],
   Databases: ['MySQL', 'MongoDB', 'Supabase', 'Firebase'],
   Tooling: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Heroku', 'GraphQL'],
};

export const hobbies = [
   { icon: 'code', label: 'Coding' },
   { icon: 'gamepad', label: 'Gaming' },
   { icon: 'futbol', label: 'Soccer' },
   { icon: 'snowboarding', label: 'Snowboarding' },
];

export const story = [
   {
      title: 'Origins',
      body: `Born in Queens, New York and raised in Sicklerville, New Jersey. My
family lineage traces back to ancient Persia — modern-day Iran.`,
   },
   {
      title: 'Values',
      body: `Treat others how you'd want to be treated. Be kind — the world is harsh
enough as is. Practice generosity, whether with money, food, counsel, or a little
of your time. Love your friends and die laughing.`,
   },
];

export const projects = [
   {
      title: 'DateNight',
      href: 'https://github.com/nme22/dateNight',
      description:
         'A dating app to keep your romantic life from getting stale — record the dates you go on, leave notes, and remember the good times.',
      tech: [
         { src: '/datingIMG.png', alt: 'DateNight' },
         { src: '/chakraui.png', alt: 'Chakra UI' },
         { src: '/next-js.svg', alt: 'Next.js' },
         { src: '/vercellogo.png', alt: 'Vercel' },
      ],
   },
   {
      title: 'README Generator',
      href: 'https://github.com/nme22/README-Generator',
      description:
         'Creates a professional README in minutes. Fork the app, install dependencies, and run it to generate yours.',
      tech: [
         { src: '/javascript-logo.svg', alt: 'JavaScript' },
         { src: '/nodejs-icon.svg', alt: 'Node.js' },
      ],
   },
   {
      title: 'Todo List App',
      href: 'https://todolist-nme.vercel.app/',
      description:
         'A to-do list built with Next.js and Chakra UI. Add or remove tasks and come back anytime — your todos are saved in local storage.',
      tech: [
         { src: '/next-js.svg', alt: 'Next.js' },
         { src: '/chakraui.png', alt: 'Chakra UI' },
      ],
   },
   {
      title: 'GitHub Search',
      href: 'https://githubsearch-eta.vercel.app/',
      description:
         'Search GitHub users, pull their data from your query, and browse a paginated list of results.',
      tech: [
         { src: '/next-js.svg', alt: 'Next.js' },
         { src: '/vercellogo.png', alt: 'Vercel' },
         { src: '/chakraui.png', alt: 'Chakra UI' },
      ],
   },
   {
      title: "Ezzat's Kitchen",
      href: 'https://ezzatskitchen.vercel.app/',
      description:
         'A Next.js app designed to bring Persian food to your door.',
      inProgress: true,
      tech: [
         { src: '/vercellogo.png', alt: 'Vercel' },
         { src: '/next-js.svg', alt: 'Next.js' },
      ],
   },
];

export const spotifyPlaylist =
   'https://open.spotify.com/embed/playlist/4bx5c78CAquCWNE4tw1reY?utm_source=generator';

export const email = 'navidmebrahimi22@gmail.com';

export const socials = [
   {
      label: 'GitHub',
      href: 'https://github.com/nme22',
      icon: 'github',
   },
   {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/navid-ebrahimi-70b983204',
      icon: 'linkedin',
   },
   {
      label: 'Twitter',
      href: 'https://twitter.com/nme_22',
      icon: 'twitter',
   },
   {
      label: 'Facebook',
      href: 'https://www.facebook.com/navid.ebrahimi.10/',
      icon: 'facebook',
   },
];

export const navLinks = [
   { label: 'Home', href: '#home' },
   { label: 'Projects', href: '#projects' },
   { label: 'About', href: '#about' },
   { label: 'Contact', href: '#contact' },
];

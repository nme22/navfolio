import type {
   NavLink,
   Project,
   SkillGroups,
   Hobby,
   StoryBlock,
   Social,
} from './types';

// All site content as data, so components stay presentational.

export const intro = `I'm a first-generation Iranian web developer. I started out with some
HTML, CSS, and JavaScript and got hooked pretty fast. These days I build full apps
with modern frameworks and I really like taking an idea all the way from a blank
file to something people can actually use. My projects are up on GitHub, so take a
look around, and if you want to build something together just reach out.`;

// `color` keys map to themed hover styles in components/About.tsx.
export const skills: SkillGroups = {
   Languages: [
      { name: 'HTML5', color: 'orange' },
      { name: 'CSS3', color: 'blue' },
      { name: 'JavaScript (ES6+)', color: 'yellow' },
   ],
   Frameworks: [
      { name: 'React.js', color: 'cyan' },
      { name: 'Next.js', color: 'slate' },
      { name: 'Node.js', color: 'green' },
      { name: 'Tailwind CSS', color: 'sky' },
      { name: 'Chakra UI', color: 'teal' },
      { name: 'Bootstrap', color: 'purple' },
   ],
   Databases: [
      { name: 'MySQL', color: 'blue' },
      { name: 'MongoDB', color: 'green' },
      { name: 'Supabase', color: 'emerald' },
      { name: 'Firebase', color: 'amber' },
   ],
   Tooling: [
      { name: 'Git', color: 'orange' },
      { name: 'GitHub', color: 'slate' },
      { name: 'Vercel', color: 'violet' },
      { name: 'Netlify', color: 'teal' },
      { name: 'Heroku', color: 'purple' },
      { name: 'GraphQL', color: 'pink' },
   ],
};

export const hobbies: Hobby[] = [
   { icon: 'code', label: 'Coding', color: 'indigo' },
   { icon: 'gamepad', label: 'Gaming', color: 'violet' },
   { icon: 'futbol', label: 'Soccer', color: 'green' },
   { icon: 'snowboarding', label: 'Snowboarding', color: 'sky' },
];

export const story: StoryBlock[] = [
   {
      title: 'Origins',
      body: `I was born in Queens, New York and grew up in Sicklerville, New Jersey.
My family is from Iran, going all the way back to ancient Persia.`,
   },
   {
      title: 'Values',
      body: `Treat people the way you'd want to be treated. Be kind, because the world
is harsh enough as it is. Give what you can, whether that's money, food, advice, or
just a bit of your time. Love your friends and die laughing.`,
   },
];

export const projects: Project[] = [
   {
      title: 'DateNight',
      href: 'https://github.com/nme22/dateNight',
      description:
         'A dating app for couples who want to keep things fresh. Log the dates you go on, jot down notes, and look back on the good times later.',
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
         'Spin up a solid README in a couple of minutes. Fork it, install the dependencies, and run it to build your own.',
      tech: [
         { src: '/javascript-logo.svg', alt: 'JavaScript' },
         { src: '/nodejs-icon.svg', alt: 'Node.js' },
      ],
   },
   {
      title: 'Todo List App',
      href: 'https://todolist-nme.vercel.app/',
      description:
         'A to-do list built with Next.js and Chakra UI. Add or remove tasks, and everything stays saved in local storage so it is still there when you come back.',
      tech: [
         { src: '/next-js.svg', alt: 'Next.js' },
         { src: '/chakraui.png', alt: 'Chakra UI' },
      ],
   },
   {
      title: 'GitHub Search',
      href: 'https://githubsearch-eta.vercel.app/',
      description:
         'Search for GitHub users and page through the results, with each user pulled straight from the GitHub API.',
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
         'A Next.js app for getting Persian food delivered to your door.',
      inProgress: true,
      tech: [
         { src: '/vercellogo.png', alt: 'Vercel' },
         { src: '/next-js.svg', alt: 'Next.js' },
      ],
   },
];

// Country names exactly as they appear in public/world-110m.json so the map
// can match them directly. Add to this list as you travel.
export const visitedCountries: string[] = [
   'United States of America',
   'Canada',
   'Mexico',
   'Spain',
   'Portugal',
   'Kuwait',
   'United Arab Emirates',
   'Iran',
   'Georgia',
   'Dominican Rep.',
];

export const spotifyPlaylist =
   'https://open.spotify.com/embed/playlist/4bx5c78CAquCWNE4tw1reY?utm_source=generator';

export const socials: Social[] = [
   { label: 'GitHub', href: 'https://github.com/nme22', icon: 'github' },
   {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/navid-ebrahimi-70b983204',
      icon: 'linkedin',
   },
   { label: 'Twitter', href: 'https://twitter.com/nme_22', icon: 'twitter' },
   {
      label: 'Facebook',
      href: 'https://www.facebook.com/navid.ebrahimi.10/',
      icon: 'facebook',
   },
];

export const navLinks: NavLink[] = [
   { label: 'Home', href: '#home' },
   { label: 'Projects', href: '#projects' },
   { label: 'About', href: '#about' },
   { label: 'Contact', href: '#contact' },
];

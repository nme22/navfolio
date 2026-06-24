/** Themed accent colors available for skill badges and hobby tiles. */
export type AccentColor =
   | 'orange'
   | 'amber'
   | 'yellow'
   | 'green'
   | 'emerald'
   | 'teal'
   | 'cyan'
   | 'sky'
   | 'blue'
   | 'indigo'
   | 'violet'
   | 'purple'
   | 'pink'
   | 'slate';

export type HobbyIcon = 'code' | 'gamepad' | 'futbol' | 'snowboarding';

export type SocialIcon = 'github' | 'linkedin' | 'twitter' | 'facebook';

export interface TechIcon {
   src: string;
   alt: string;
}

export interface Project {
   title: string;
   href: string;
   description: string;
   tech: TechIcon[];
   inProgress?: boolean;
}

export interface Skill {
   name: string;
   color: AccentColor;
}

export type SkillGroups = Record<string, Skill[]>;

export interface Hobby {
   icon: HobbyIcon;
   label: string;
   color: AccentColor;
}

export interface StoryBlock {
   title: string;
   body: string;
}

export interface Social {
   label: string;
   href: string;
   icon: SocialIcon;
}

export interface NavLink {
   label: string;
   href: string;
}

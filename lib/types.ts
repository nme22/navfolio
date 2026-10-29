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

export interface TravelPhoto {
   src: string;
   alt: string;
}

export interface VisitedCountry {
   /** Must match the country name in public/world-110m.json exactly. */
   name: string;
   /** Prettier label for the drawer header and tooltip. */
   displayName?: string;
   /** Short rundown of the trip. */
   blurb: string;
   cities: string[];
   /** Who I was there with. */
   people: string[];
   photos: TravelPhoto[];
}

export interface WishlistCountry {
   /** Must match the country name in public/world-110m.json exactly. */
   name: string;
   displayName?: string;
}

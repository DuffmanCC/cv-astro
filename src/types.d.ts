export interface Root {
  profile: string[];
  experience: Experience[];
  otherProjects: OtherProject[];
}

export interface Experience {
  title: string;
  company: string;
  url?: string;
  type: string;
  period: string;
  place: string;
  intro: string;
  tasks: string[];
  skills: string[];
  projects: Project[];
}

export interface Project {
  url: string;
  title: string;
}

export interface OtherProject {
  title: string;
  url: string;
  githubUrl: string;
  description: string;
  skills: string[];
}

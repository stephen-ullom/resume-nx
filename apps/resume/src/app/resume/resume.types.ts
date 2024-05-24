export interface ResumeData {
  introduction: string;
  experience: ExperienceData[];
  volunteering: ExperienceData[];
  projects: ProjectData[];
  skills: SkillData[];
}

export interface ExperienceData {
  company: string;
  positions: PositionData[];
}

export interface PositionData {
  title: string;
  start_date: string;
  end_date: string;
  description?: string[];
}

export interface ProjectData {
  title: string;
  start_date: string;
  end_date: string;
  description: string;
}

export interface SkillData {
  category: string;
  items: string[];
}

export interface ApplicantData {
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  zip_code: number;
  linkedin: string;
  github: string;
}

export interface CoverLetterData {
  company: string;
  address: string;
  location: string;
  zip_code: number;
  job_title: string;
  date: string;
  hiring_manager: string;
  introduction: string;
  body: string;
  signature: string;
}

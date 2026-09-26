export interface TaskBarProps {
  platform: string;
}

export interface menuButtonProps {
  platform: string;
  togglePlatform: () => void;
}

export interface CardProps {
  name: string;
  logo: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  videoSrc?: string;
  demoLink?: string;
  codeLink?: string;
}

export interface ButtonConfig {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  href?: string;
  className?: string;
}

export interface ContactProps {
  button: React.ReactNode;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export interface ContactInfoProps {
  label: string;
  value: string;
  onClick: () => void;
}
export interface TabContentProps {
  id: string;
  content: string;
}

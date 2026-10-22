export type Slide = {
  index: number;
  title: string;
  subtitle?: string;
};

export type Deck = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  slideCount: number;
  sourceFile?: string;
  pptxUrl?: string;
  canvaUrl?: string;
  slides: Slide[];
  ready: boolean;
};

export type Insight = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type VideoCategory = 'isg' | 'yangin' | 'verimlilik' | 'custom';

export type VideoDemo = {
  id: string;
  category: VideoCategory;
  title: string;
  subtitle: string;
  driveFileId?: string;
  driveFileIds?: string[];
  driveUrl?: string;
  insights: Insight[];
};

export type VideoCategoryMeta = {
  label: string;
  title: string;
  description: string;
  accent: string;
};

export type ContentBundle = {
  videoCategoryMeta: Record<VideoCategory, VideoCategoryMeta>;
  decks: Deck[];
  videoDemos: VideoDemo[];
};

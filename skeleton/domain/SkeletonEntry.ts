interface SkeletonEntry {
  text: string;
  uri: string;
  selektiert: boolean;
  ebene2: Array<SkeletonEntryEbene2>;
}

interface SkeletonEntryEbene2 {
  text: string;
  uri: string;
  seoUri: string;
  layout: Array<Layout>;
  teasers: Array<Teaser>;
  selektiert: boolean;
}

interface Layout {
  spalten: number;
  ebene3: Array<SkeletonEntryEbene3>;
}

interface SkeletonEntryEbene3 {
  text: string;
  uri: string;
  ebene4: Array<SkeletonEntryEbene4>;
}

interface SkeletonEntryEbene4 {
  text: string;
  uri: string;
}

interface Teaser {
  image: string;
  headline: string;
  subline: string;
  uri: string;
  gtmTracking: string;
}

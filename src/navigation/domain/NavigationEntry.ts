interface NavigationEntry {
  text: string;
  uri: string;
  selektiert: boolean;
  ebene2: Array<NavigationEntryEbene2>;
}

interface NavigationEntryEbene2 {
  text: string;
  uri: string;
  seoUri: string;
  layout: Array<Layout>;
  teasers: Array<Teaser>;
  selektiert: boolean;
}

interface Layout {
  spalten: number;
  ebene3: Array<NavigationEntryEbene3>;
}

interface NavigationEntryEbene3 {
  text: string;
  uri: string;
  ebene4: Array<NavigationEntryEbene4>;
}

interface NavigationEntryEbene4 {
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

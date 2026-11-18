export interface SearchIndexItem {
  id: string;
  title: string;
  category: string;
  description: string;
  route: string;
  fragment?: string;
  icon: string;
}

export const RX_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAkqhHyrpCtAw76tPW7FwdO9skGRssQ1I2YSywI3yaDVHaPLtJgyS2zyQGDU51QWcikCA464tELCjct0Po2mvUNSFEyhMnTS7BNnZ0oCGBjShBTrUACcSwnKlr7G58paoNOLcHrOWaOqWIsva7IIWfHjs7msxIbs7J1_U5zmoUCqBEU4a-DRWWw0COY3A6qszyMvc-rhOHT0dfUTSiYgrMdWN0w_p3CqyEmZ9nTlmiad5d6fgR-O94-';

export const SEARCH_INDEX: SearchIndexItem[] = [
  {
    id: 'home-overview',
    title: 'Technology for Life — Overview',
    category: 'Home',
    description: 'Continuous bio-telemetry OS, CGM Disk pulse terminal, and the four strategic pillars.',
    route: '/',
    icon: 'home',
  },
  {
    id: 'microneedles',
    title: 'MicroNeedle Array & Rx Tattoo',
    category: 'Platforms',
    description: '450μm sub-dermal transduction, silk fibroin needles, and active fluorophore dermal sensors.',
    route: '/platforms',
    fragment: 'microneedles',
    icon: 'grid_goldenratio',
  },
  {
    id: 'cgm-disk',
    title: 'Continuous Glucose Monitoring (CGM) Disk',
    category: 'Platforms',
    description: '1.8mm ultra-flat enzyme-free optical sensing disk with 6.8% MARD and 14-day wear.',
    route: '/platforms',
    fragment: 'cgm-disk',
    icon: 'donut_small',
  },
  {
    id: 'hummingbird-fuel',
    title: 'Hummingbird Fuel Energetic Substrate',
    category: 'Platforms',
    description: 'Rapid 180-second cellular uptake carbohydrate isomers and ketone ester replenishment.',
    route: '/platforms',
    fragment: 'hummingbird-fuel',
    icon: 'bolt',
  },
  {
    id: 'adme-tox',
    title: 'Medical ADME-Tox & IoT Cloud',
    category: 'Platforms',
    description: 'In-silico pharmacokinetics (Absorption, Distribution, Metabolism, Excretion, Toxicity).',
    route: '/platforms',
    fragment: 'adme-tox',
    icon: 'science',
  },
  {
    id: 'whitepapers',
    title: 'Engineering Schematics & Whitepapers',
    category: 'Platforms',
    description: 'Request full CAD mechanical tolerances, BLE specs, and ADME validation dossiers.',
    route: '/platforms',
    fragment: 'schematics',
    icon: 'file_download',
  },
  {
    id: 'nutrition-kitchen',
    title: 'Nutrition & Smart Kitchen Ecosystem',
    category: 'Health & Living',
    description: 'Automated micronutrient dispensary synced to real-time CGM curves and cartridge ratios.',
    route: '/health-living',
    fragment: 'nutrition',
    icon: 'countertops',
  },
  {
    id: 'sleep-architecture',
    title: 'Sleep Optimization & Circadian Alignment',
    category: 'Health & Living',
    description: 'Sleep Quality Index (SQI), slow-wave thermal drop actuation, and overnight HRV telemetry.',
    route: '/health-living',
    fragment: 'sleep',
    icon: 'bedtime',
  },
  {
    id: 'connected-bike',
    title: 'Connected Bike & Exercise Telemetry',
    category: 'Health & Living',
    description: 'Electromagnetic ergometer resistance balanced to lactate threshold and post-workout nutrition.',
    route: '/health-living',
    fragment: 'exercise',
    icon: 'directions_bike',
  },
  {
    id: 'wellness-simulator',
    title: 'Unified Wellness Score Simulator',
    category: 'Health & Living',
    description: 'Interactive readiness calculator across Nutrition, Sleep Staging, and Exercise FTP.',
    route: '/health-living',
    fragment: 'simulator',
    icon: 'tune',
  },
  {
    id: 'heart-design',
    title: 'Heart DeSign — Cardiovascular Acoustics',
    category: 'Innovation',
    description: 'Dual-MEMS phonocardiogram & 6-lead sternal hydrogel array for AFib and murmur screening.',
    route: '/innovation',
    fragment: 'device-research',
    icon: 'monitor_heart',
  },
  {
    id: 'rxapp-companion',
    title: 'RxApp & Diet Metabolic Programming',
    category: 'Innovation',
    description: 'Interactive RxCompanion suite, meal photo computer vision, and physician FHIR exports.',
    route: '/innovation',
    fragment: 'wellbeing-suite',
    icon: 'smartphone',
  },
  {
    id: 'clinical-pipeline',
    title: 'Clinical Trial Pipeline & Roadmap',
    category: 'Innovation',
    description: 'FDA De Novo 510(k), CE Mark MDR Class IIb, and SaMD clinical trial progression.',
    route: '/innovation',
    fragment: 'pipeline',
    icon: 'assignment_turned_in',
  },
  {
    id: 'digital-health-legacy',
    title: 'The Digital Health Legacy (2008 – Present)',
    category: 'Company & Legacy',
    description: 'Archival timeline from the Google Health Wave consortium to autonomous CGM arrays.',
    route: '/company-legacy',
    fragment: 'timeline',
    icon: 'history_edu',
  },
  {
    id: 'leadership',
    title: 'Leadership & Advisory Board',
    category: 'Company & Legacy',
    description: 'Dr. Evelyn Vance, Marcus Thorne, Dr. Aris Thorne-Alvarez, and Dr. Maya Lin.',
    route: '/company-legacy',
    fragment: 'leadership',
    icon: 'groups',
  },
  {
    id: 'contact-inquiries',
    title: 'Direct Contact & Partnership Inquiries',
    category: 'Company & Legacy',
    description: 'Clinical trial sponsorship, technology licensing, and global lab locations.',
    route: '/company-legacy',
    fragment: 'contact-us',
    icon: 'contact_mail',
  },
];

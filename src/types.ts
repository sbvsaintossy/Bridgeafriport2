export interface MarketData {
  id: string;
  name: string;
  slug: string;
  flag: string;
  capital: string;
  commercialHub: string;
  population: string;
  gdp: string;
  currency: string;
  primaryLanguages: string[];
  keyPorts: string[];
  strategicAdvantages: string[];
  highDemandSectors: string[];
  tradeCorridors: string[];
  regulatoryBody: string;
  overview: string;
  marketPotential: string;
  officeEmail: string;
  officePhone?: string;
  coordinates: { x: number; y: number }; // Relative SVG map coords
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  businessOutcomes: string[];
  deliverables: string[];
  targetSectors: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  sublabel: string;
  category: 'Scale' | 'Reach' | 'Performance' | 'Capital';
}

export interface OfficeItem {
  country: string;
  city: string;
  type: string;
  email: string;
  phone?: string;
  addressSnippet: string;
  timeZone: string;
  focusCorridors: string[];
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  strategicImpact: string;
}

export interface ComparisonItem {
  dimension: string;
  traditionalEntity: string;
  traditionalApproach: string;
  bridgeafriportAdvantage: string;
  outcome: string;
}

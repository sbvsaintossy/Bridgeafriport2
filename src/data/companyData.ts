import { MarketData, ServiceItem, MetricItem, OfficeItem, PillarItem, ComparisonItem } from '../types';

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'countries',
    value: '6+',
    numericTarget: 6,
    suffix: '+ Tier-1 Markets',
    label: 'Direct Operational Markets',
    sublabel: 'Nigeria, Ghana, Côte d\'Ivoire, Senegal, Togo, Benin with active expansion pipeline',
    category: 'Reach'
  },
  {
    id: 'distribution',
    value: '1,450+',
    numericTarget: 1450,
    suffix: ' Channels',
    label: 'Verified Distribution Networks',
    sublabel: 'Vetted wholesale, institutional, retail & tier-1 commercial distribution nodes',
    category: 'Scale'
  },
  {
    id: 'sectors',
    value: '18+',
    numericTarget: 18,
    suffix: ' Specialized Verticals',
    label: 'Industry Sectors Served',
    sublabel: 'Industrial goods, FMCG, agri-tech, medical devices, energy, construction & mobility',
    category: 'Reach'
  },
  {
    id: 'market_entry',
    value: '220+',
    numericTarget: 220,
    suffix: ' Deployments',
    label: 'Market Entry Deployments',
    sublabel: 'Cross-border commercial expansions launched across sovereign jurisdictions',
    category: 'Performance'
  },
  {
    id: 'introductions',
    value: '4,800+',
    numericTarget: 4800,
    suffix: ' High-Level B2B',
    label: 'Qualified Commercial Introductions',
    sublabel: 'Direct engagements between international principals and verified regional off-takers',
    category: 'Performance'
  },
  {
    id: 'partnerships',
    value: '$1.2B+',
    numericTarget: 1200,
    suffix: ' Pipeline Value',
    label: 'Commercial Agreements Facilitated',
    sublabel: 'Structured long-term commercial representation & bilateral distribution mandates',
    category: 'Capital'
  }
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'intelligence',
    number: '01',
    title: 'Market Intelligence & Validation',
    description: 'Ground-level econometric data, price sensitivity modeling, competitor distribution penetration, and verified market absorption capacity before capital deployment.',
    iconName: 'ShieldCheck',
    strategicImpact: 'De-risks multi-million dollar market entry through audited on-ground trade dynamics.'
  },
  {
    id: 'distribution',
    number: '02',
    title: 'Verified Distribution Networks',
    description: 'Direct institutional access to thoroughly audited tier-1 wholesalers, nationwide distributors, commercial conglomerates, and retail syndicates.',
    iconName: 'Network',
    strategicImpact: 'Eliminates intermediary fragmentation and secures sovereign distribution corridors.'
  },
  {
    id: 'representation',
    number: '03',
    title: 'Local Commercial Representation',
    description: 'Dedicated executive presence acting as your sovereign trade representative in key African commercial centers without foreign entity establishment overhead.',
    iconName: 'Building2',
    strategicImpact: 'Provides immediate institutional stature, contract enforcement, and commercial advocacy.'
  },
  {
    id: 'bizdev',
    number: '04',
    title: 'Business Development & Off-take',
    description: 'Aggressive institutional business development, enterprise procurement integration, and high-volume commercial contract structuring.',
    iconName: 'TrendingUp',
    strategicImpact: 'Accelerates revenue generation through pre-qualified institutional buyers and off-takers.'
  },
  {
    id: 'regulatory',
    number: '05',
    title: 'Regulatory Guidance & Compliance',
    description: 'Deep navigational expertise across national standards agencies (NAFDAC, SON, GSA, FDA, CODINORM), customs tariffs, AfCFTA frameworks, and import protocols.',
    iconName: 'Scale',
    strategicImpact: 'Ensures seamless cross-border clearance and 100% regulatory conformity.'
  },
  {
    id: 'strategy',
    number: '06',
    title: 'Commercial Growth Strategy',
    description: 'Long-term regional expansion planning that leverages initial sovereign beachheads to scale across ECOWAS and Pan-African trade corridors.',
    iconName: 'Compass',
    strategicImpact: 'Transforms isolated export sales into sustainable multi-market commercial dominance.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    id: 'market-research-validation',
    title: 'Market Research & Validation',
    tagline: 'Empirical market viability verification before capital commitment.',
    description: 'We execute comprehensive ground-level market diagnostics across target African territories. Moving beyond high-level statistical summaries, our analysts audit competitor positioning, wholesale price elasticity, supply chain bottlenecks, tariff schedules, and authentic buyer demand.',
    businessOutcomes: [
      'Pinpointed addressable market size across formal and informal trade sectors',
      'Full competitor pricing, discount structures, and distribution channel mapping',
      'Comprehensive import tariff, duty classification, and landing cost simulation',
      'Definitive go/no-go risk matrix grounded in audited field data'
    ],
    deliverables: [
      'Comprehensive Market Viability Report',
      'Competitor Matrix & Shelf-Share Audit',
      'Unit Economics & Landed Cost Model',
      'Channel Margin & Distribution Structure Map'
    ],
    targetSectors: ['Industrial Manufacturing', 'Consumer Packaged Goods', 'Medical & Pharmaceuticals', 'Heavy Machinery']
  },
  {
    number: '02',
    id: 'market-entry-strategy',
    title: 'Market Entry Strategy',
    tagline: 'Architecting defensible, high-velocity entry blueprints tailored to African trade ecosystems.',
    description: 'We formulate end-to-end commercial roadmaps that align your product portfolio with the optimal regulatory, logistical, and distribution pathways. We structure phased rollouts that maximize early traction while insulating your enterprise against operational volatility.',
    businessOutcomes: [
      'Tailored entry model (exclusive representation, regional syndication, direct off-take)',
      'Optimized pricing tiers balancing competitiveness with high channel partner margins',
      '12-to-36-month revenue and market share milestones',
      'Risk mitigation mechanisms for foreign exchange and cross-border settlement'
    ],
    deliverables: [
      'Master Commercial Entry Blueprint',
      'Channel Partner Value Proposition',
      'Multi-Year Revenue Milestone Model',
      'Supply Chain & Port Clearance Pathway'
    ],
    targetSectors: ['Global Exporters', 'Institutional Brands', 'Specialty Chemical Manufacturers', 'Agri-Tech Pioneers']
  },
  {
    number: '03',
    id: 'distributor-sourcing',
    title: 'Distributor Sourcing & Vetting',
    tagline: 'Securing verified, solvent, and highly capitalized channel partners.',
    description: 'Finding the right distribution partner in Africa is the single greatest determinant of commercial success. We leverage our proprietary regional database to identify, screen, background-check, and negotiate with top-tier national distributors, regional wholesalers, and specialized dealer networks.',
    businessOutcomes: [
      'Direct access to solvent distributors with existing logistics infrastructure and warehousing',
      'Verification of channel partner financial stability, credit reputation, and fleet capacity',
      'Elimination of non-performing intermediaries and speculative agents',
      'Pre-negotiated distribution agreements with clear performance thresholds'
    ],
    deliverables: [
      'Curated Distributor Dossier & Shortlist',
      'Financial & Infrastructure Due Diligence Audits',
      'Bilateral Negotiation Facilitation',
      'Commercial Distribution Agreements & KPIs'
    ],
    targetSectors: ['Automotive & Spares', 'FMCG & Food Products', 'Building Materials', 'Electronics & Appliances']
  },
  {
    number: '04',
    id: 'business-development',
    title: 'Business Development & B2B Pipeline',
    tagline: 'Securing enterprise off-take agreements and major institutional accounts.',
    description: 'Our senior trade directors proactively originate, pitch, and secure high-value commercial accounts on your behalf. We position your product catalogue directly in front of commercial decision-makers, government procurement teams, industrial conglomerates, and large-scale retailers.',
    businessOutcomes: [
      'Accelerated deal velocity through pre-established executive relationships',
      'Direct inclusion in institutional vendor lists and corporate procurement tenders',
      'Predictable recurring volume orders from verified commercial buyers',
      'Active commercial negotiation driving favorable payment and off-take terms'
    ],
    deliverables: [
      'Target Account Pipeline & Stakeholder Mapping',
      'Executive B2B Pitch & Commercial Proposals',
      'Master Purchase Agreements & Supply Contracts',
      'Quarterly Off-Take Forecasting'
    ],
    targetSectors: ['Commercial Equipment', 'Renewable Energy Systems', 'Construction & Infrastructure', 'Healthcare Systems']
  },
  {
    number: '05',
    id: 'customer-acquisition',
    title: 'Customer Acquisition & Demand Generation',
    tagline: 'Igniting market pull and driving sustained purchase volume.',
    description: 'Securing distribution is only half the battle; ensuring product velocity off shelves and warehouses is critical. We design and coordinate targeted B2B and trade customer acquisition campaigns that educate buyers, stimulate reorders, and cement brand loyalty.',
    businessOutcomes: [
      'Continuous demand generation driving high distributor inventory turnover',
      'Direct engagement with key decision-makers, contractor syndicates, and bulk buyers',
      'Elevated brand equity within targeted commercial segments',
      'Real-time customer feedback loops to optimize product positioning'
    ],
    deliverables: [
      'Trade Engagement Campaigns',
      'Commercial Buyer Incentive Programs',
      'Key Opinion Leader & Specifier Roadshows',
      'Monthly Customer Acquisition Metrics'
    ],
    targetSectors: ['Commercial Brands', 'Consumer Electronics', 'Packaged Food & Beverages', 'Specialty Tools']
  },
  {
    number: '06',
    id: 'commercial-representation',
    title: 'Commercial Representation & Mandate',
    tagline: 'Sovereign on-the-ground executive presence representing your global brand.',
    description: 'We act as your dedicated, in-market commercial representative across African capitals. Without the multi-million dollar overhead of setting up foreign subsidiaries, you gain seasoned trade professionals managing your accounts, auditing distributors, and protecting your brand integrity.',
    businessOutcomes: [
      'Immediate institutional standing with key public and private entities',
      'Rigorous monitoring of distributor compliance, pricing discipline, and brand standards',
      'Local point of contact for customer inquiries, tender submissions, and commercial disputes',
      'Zero initial foreign entity tax exposure or complex corporate overhead'
    ],
    deliverables: [
      'Exclusive Commercial Representation Mandate',
      'Dedicated Regional Trade Officer Allocation',
      'Monthly On-Ground Audit & Performance Reports',
      'Continuous Brand Custodianship & Field Representation'
    ],
    targetSectors: ['Global Manufacturers', 'Multinational Exporters', 'Industrial Conglomerates', 'Technology Providers']
  },
  {
    number: '07',
    id: 'regulatory-guidance',
    title: 'Regulatory Guidance & Product Compliance',
    tagline: 'Unlocking frictionless market access through comprehensive statutory compliance.',
    description: 'Navigating Africa’s diverse national statutory bodies requires deep local procedural mastery. We guide your products through product registration, conformity assessments, import documentation, label adaptation, and customs tariff classifications across all operational jurisdictions.',
    businessOutcomes: [
      'Accelerated statutory approvals across NAFDAC, SONCAP, GSA, FDA, CODINORM, and others',
      '100% compliance preventing costly port detentions, customs fines, and shipment seizures',
      'Optimized Harmonized System (HS) code classification minimizing tariff exposure',
      'Strategic leverage of AfCFTA rules of origin for regional tariff concessions'
    ],
    deliverables: [
      'Statutory & Standards Roadmap',
      'Product Dossier Preparation & Submission',
      'Import Certificate & Permitting Facilitation',
      'Customs Tariff Optimization Analysis'
    ],
    targetSectors: ['Pharmaceuticals', 'Food & Agricultural Inputs', 'Chemical Products', 'Electrical & Telecommunications']
  },
  {
    number: '08',
    id: 'digital-promotion',
    title: 'Digital Promotion & Commercial Visibility',
    tagline: 'Dominating digital B2B search, industry directories, and trade communication.',
    description: 'We elevate your commercial profile through hyper-targeted digital B2B promotion across West and Pan-African commercial channels. We ensure that industrial buyers, procurement managers, and wholesale merchants discover and specify your products during their sourcing cycles.',
    businessOutcomes: [
      'Dominant visibility across regional digital trade portals and business directories',
      'Targeted B2B lead generation targeting verified corporate procurement officers',
      'Digital showcase of technical specifications, certificates, and case studies',
      'Enhanced institutional trust among modern African commercial executives'
    ],
    deliverables: [
      'Regional B2B Digital Presence Kit',
      'Digital Trade Sourcing Campaigns',
      'Targeted Procurement Outreach Funnels',
      'Lead Attribution & Conversion Tracking'
    ],
    targetSectors: ['Engineering Supplies', 'Agri-Processing Equipment', 'Commercial Hardware', 'IT & Enterprise Software']
  },
  {
    number: '09',
    id: 'regional-expansion-planning',
    title: 'Regional Expansion Planning & AfCFTA Integration',
    tagline: 'Scaling from sovereign beachheads to continental commercial leadership.',
    description: 'Once initial market traction is established in Nigeria or Ghana, we orchestrate systematic regional expansion into neighboring ECOWAS and Central African economies. We structure cross-border logistics, regional warehousing partnerships, and multi-country distribution syndicates.',
    businessOutcomes: [
      'Scalable regional growth architecture leveraging ECOWAS Trade Liberalization Scheme (ETLS)',
      'Optimized transit hubs connecting coastal ports to landlocked interior markets',
      'Harmonized regional pricing and distribution contracts preventing cross-border gray markets',
      'Economies of scale across shipping, compliance, and marketing investments'
    ],
    deliverables: [
      'Multi-Country Expansion Matrix',
      'Cross-Border Corridor Logistics Plan',
      'Regional Pricing & Channel Governance Framework',
      'AfCFTA Tariff & Value-Chain Integration Strategy'
    ],
    targetSectors: ['Multinational Brands', 'Heavy Industry', 'FMCG Groups', 'Automotive Assemblers']
  },
  {
    number: '10',
    id: 'strategic-partnerships',
    title: 'Strategic Partnerships & Joint Ventures',
    tagline: 'Forging transformative alliances with sovereign institutions and market leaders.',
    description: 'For global enterprises seeking deep economic integration, we originate, structure, and facilitate high-level joint ventures, contract manufacturing arrangements, local packaging partnerships, and strategic alliances with leading indigenous industrial groups and sovereign stakeholders.',
    businessOutcomes: [
      'Access to prime industrial real estate, local capital co-investment, and government incentives',
      'Risk-sharing partnerships with established African business dynasties and sovereign entities',
      'Long-term political and economic insulation through respected local champions',
      'Structured legal frameworks protecting intellectual property and capital repatriation'
    ],
    deliverables: [
      'Strategic Partner Matching & Profiling',
      'Partnership Structuring & Term Sheets',
      'Bilateral High-Level Deal Facilitation',
      'Governance & Stakeholder Alignment Frameworks'
    ],
    targetSectors: ['Infrastructure Developers', 'Renewable Energy', 'Agro-Allied Industries', 'Telecommunications']
  }
];

export const MARKETS_DATA: MarketData[] = [
  {
    id: 'nigeria',
    name: 'Nigeria',
    slug: 'nigeria',
    flag: '🇳🇬',
    capital: 'Abuja',
    commercialHub: 'Lagos',
    population: '220+ Million',
    gdp: '$477 Billion',
    currency: 'Nigerian Naira (NGN)',
    primaryLanguages: ['English (Official)', 'Yoruba', 'Hausa', 'Igbo'],
    keyPorts: ['Lagos Port Complex (Apapa)', 'Tin Can Island Port', 'Lekki Deep Sea Port', 'Onne Port'],
    strategicAdvantages: [
      'Africa’s largest single consumer and commercial market by population',
      'State-of-the-art Lekki Deep Sea Port handling post-Panamax container vessels',
      'High-velocity commercial ecosystem with massive unmet demand in manufacturing, FMCG, and tech',
      'Gateway to ECOWAS regional commerce with deep trade networks extending across West Africa'
    ],
    highDemandSectors: [
      'Industrial Machinery & Parts',
      'Packaged Food & FMCG',
      'Medical Devices & Pharmaceuticals',
      'Renewable Energy & Off-Grid Solar',
      'Automotive Parts & Heavy Fleet Components',
      'Construction Materials & Specialty Chemicals'
    ],
    tradeCorridors: [
      'Lagos – Cotonou – Lomé – Accra Coastal Corridor',
      'Lagos – Ibadan – Kano – Niamey Interior Corridor',
      'Lekki Deep Sea Port Global Transshipment Line'
    ],
    regulatoryBody: 'NAFDAC (Food/Drugs), SON (Standards), Federal Ministry of Trade & Investment',
    overview: 'Nigeria represents the undisputed economic powerhouse of West Africa. With an urbanizing population surpassing 220 million and expanding industrial demand, Nigeria is the foundational market for any serious multinational enterprise entering the continent.',
    marketPotential: 'Tier-1 High Priority: Unmatched commercial scale, rapid urbanization, and tremendous industrial consumption.',
    officeEmail: 'Nigeria@bridgeafriport.com',
    officePhone: '+234 703 188 2447',
    coordinates: { x: 550, y: 390 }
  },
  {
    id: 'ghana',
    name: 'Ghana',
    slug: 'ghana',
    flag: '🇬🇭',
    capital: 'Accra',
    commercialHub: 'Accra / Tema / Kumasi',
    population: '34+ Million',
    gdp: '$78 Billion',
    currency: 'Ghana Cedi (GHS)',
    primaryLanguages: ['English (Official)', 'Twi', 'Ga', 'Fante'],
    keyPorts: ['Port of Tema (MPS Container Terminal)', 'Port of Takoradi'],
    strategicAdvantages: [
      'Headquarters of the African Continental Free Trade Area (AfCFTA) Secretariat',
      'One of the most politically stable and investor-friendly jurisdictions in Africa',
      'World-class container efficiency at Tema Port MPS Terminal 3',
      'Strong institutional rule of law, investor protections, and ease of doing business'
    ],
    highDemandSectors: [
      'Agro-Processing Equipment',
      'Mining Support Services & Hardware',
      'Consumer Electronics & Packaged Goods',
      'Pharmaceuticals & Hospital Consumables',
      'Green Building Materials & Construction'
    ],
    tradeCorridors: [
      'Tema – Ouagadougou Transit Corridor (Burkina Faso Link)',
      'Abidjan – Accra – Lagos Coastal Highway',
      'Takoradi Industrial Maritime Gateway'
    ],
    regulatoryBody: 'FDA Ghana (Food & Drugs), Ghana Standards Authority (GSA), GIPC',
    overview: 'Ghana stands as the diplomatic and trade capital of the AfCFTA framework. Known for exceptional political stability, strong legal frameworks, and top-tier maritime infrastructure in Tema, Ghana is the ideal launchpad for West African regional expansion.',
    marketPotential: 'Tier-1 Institutional Beachhead: Stable economic governance, AfCFTA nexus, and high per-capita purchasing power.',
    officeEmail: 'Ghana@bridgeafriport.com',
    coordinates: { x: 440, y: 400 }
  },
  {
    id: 'cote-divoire',
    name: 'Côte d\'Ivoire',
    slug: 'cote-divoire',
    flag: '🇨🇮',
    capital: 'Yamoussoukro',
    commercialHub: 'Abidjan',
    population: '30+ Million',
    gdp: '$79 Billion',
    currency: 'West African CFA Franc (XOF)',
    primaryLanguages: ['French (Official)', 'Baoulé', 'Dioula'],
    keyPorts: ['Autonomous Port of Abidjan (PAA)', 'Port of San Pedro'],
    strategicAdvantages: [
      'The undisputed economic anchor of the Francophone West African (WAEMU/UEMOA) zone',
      'Sustained high GDP growth averaging 6-7% annually over the last decade',
      'Abidjan is a premier regional financial and corporate headquarters capital',
      'Direct land and rail connectivity to landlocked Mali, Burkina Faso, and Niger'
    ],
    highDemandSectors: [
      'Agricultural Processing & Cold Chain Infrastructure',
      'Heavy Transport & Fleet Machinery',
      'Telecommunications & Enterprise IT',
      'High-End Consumer Goods & Cosmetics',
      'Water Treatment & Power Infrastructure'
    ],
    tradeCorridors: [
      'Abidjan – Ouagadougou Railway & Transit Corridor',
      'Abidjan – Bamako Freight Corridor',
      'San Pedro Agricultural Export Route'
    ],
    regulatoryBody: 'CODINORM (Norms), Ministry of Commerce and Industry, CEPICI',
    overview: 'Côte d\'Ivoire is the powerhouse of Francophone Africa, generating over 40% of the entire UEMOA economic output. Abidjan functions as a sophisticated cosmopolitan commercial hub with rapid infrastructure modernization and world-class port facilities.',
    marketPotential: 'High Growth Francophone Hub: 6.5%+ sustained economic expansion and pivotal transshipment hub for 8 West African nations.',
    officeEmail: 'office@bridgeafriport.com',
    coordinates: { x: 380, y: 395 }
  },
  {
    id: 'senegal',
    name: 'Senegal',
    slug: 'senegal',
    flag: '🇸🇳',
    capital: 'Dakar',
    commercialHub: 'Dakar / Diamniadio',
    population: '18+ Million',
    gdp: '$31 Billion',
    currency: 'West African CFA Franc (XOF)',
    primaryLanguages: ['French (Official)', 'Wolof'],
    keyPorts: ['Autonomous Port of Dakar (PAD)', 'New Port of Ndayane (Under Development)'],
    strategicAdvantages: [
      'Strategic westernmost geographical position in Africa facing the Atlantic, Europe, and the Americas',
      'Emerging offshore oil and gas producer boosting domestic purchasing power and industrialization',
      'Dakar is the primary maritime and logistical gateway for Mali and the Sahel',
      'Diamniadio Smart City and Special Economic Zones offering unmatched industrial incentives'
    ],
    highDemandSectors: [
      'Oil & Gas Equipment, Services & Instrumentation',
      'Port Logistics & Maritime Supplies',
      'Construction & Civil Engineering Materials',
      'Food Processing & Packaging Technology',
      'Renewable Energy & Desalination Tech'
    ],
    tradeCorridors: [
      'Dakar – Bamako Strategic Logistics Corridor',
      'Atlantic Trans-Oceanic Shipping Lane',
      'Dakar – Banjul – Bissau Coastal Link'
    ],
    regulatoryBody: 'Association Sénégalaise de Normalisation (ASN), APIX, Directorate of Domestic Trade',
    overview: 'Positioned at the westernmost tip of Africa, Senegal is an international crossroads of trade. Propelled by its stable democracy, modern infrastructure, new oil & gas revenues, and the massive Dakar port complex, Senegal is a vital Atlantic gateway.',
    marketPotential: 'Strategic Atlantic Nexus: Booming infrastructure, hydrocarbon windfall, and direct access to the Sahel.',
    officeEmail: 'office@bridgeafriport.com',
    coordinates: { x: 270, y: 340 }
  },
  {
    id: 'togo',
    name: 'Togo',
    slug: 'togo',
    flag: '🇹🇬',
    capital: 'Lomé',
    commercialHub: 'Lomé',
    population: '9+ Million',
    gdp: '$9.2 Billion',
    currency: 'West African CFA Franc (XOF)',
    primaryLanguages: ['French (Official)', 'Ewe', 'Kabiye'],
    keyPorts: ['Port of Lomé (West Africa’s only deep-water natural port at 16.6m draft)'],
    strategicAdvantages: [
      'Port of Lomé is the #1 container transshipment hub in West Africa, surpassing all regional ports in throughput',
      'Unrestricted draft (16.6m) accommodating giant 14,000+ TEU container vessels without tidal delay',
      'Pia (Plateforme Industrielle d’Adétikopé) special economic zone with 0% duty on industrial capital equipment',
      'Strategic central positioning between Ghana and Benin, serving as the swift transshipment nexus for the region'
    ],
    highDemandSectors: [
      'Logistics & Maritime Services',
      'Textile & Garment Manufacturing Machinery',
      'Cold Chain & Storage Facilities',
      'Packaged Consumer Goods',
      'Agricultural Tools & Fertilizer'
    ],
    tradeCorridors: [
      'Lomé – Ouagadougou – Niamey – Bamako Transit Corridor',
      'Lomé Container Transshipment Highway'
    ],
    regulatoryBody: 'Haute Autorité de la Qualité et de l’Environnement (HAUQE), Ministry of Commerce',
    overview: 'Togo has emerged as the logistics marvel of West Africa. The Port of Lomé is the busiest container port in the entire region thanks to its 16.6m natural deep-water draft and cutting-edge terminal operations, making it an indispensable transshipment hub.',
    marketPotential: 'Premier Maritime Transshipment Hub: #1 container volume in West Africa and ultra-efficient industrial corridors.',
    officeEmail: 'Togo@bridgeafriport.com',
    officePhone: '+228 70 64 55 50',
    coordinates: { x: 480, y: 410 }
  },
  {
    id: 'benin',
    name: 'Benin',
    slug: 'benin',
    flag: '🇧🇯',
    capital: 'Porto-Novo',
    commercialHub: 'Cotonou / GDIZ',
    population: '14+ Million',
    gdp: '$19.5 Billion',
    currency: 'West African CFA Franc (XOF)',
    primaryLanguages: ['French (Official)', 'Fon', 'Yoruba'],
    keyPorts: ['Autonomous Port of Cotonou (PAC)'],
    strategicAdvantages: [
      'Direct terrestrial proximity and historical trade synergy with Nigeria’s colossal market',
      'GDIZ (Glo-Djigbé Industrial Zone) is Africa’s fastest-growing integrated industrial and textile park',
      'Autonomous Port of Cotonou managed by Port of Antwerp International with massive modernization',
      'Key commercial transit corridor serving landlocked Niger, Burkina Faso, and eastern Mali'
    ],
    highDemandSectors: [
      'Industrial Processing & Agro-Commodity Machinery',
      'Textile Machinery & Dyes',
      'Construction & Prefabricated Structures',
      'Automotive Vehicles & Spare Parts',
      'Consumer Electronics & Appliances'
    ],
    tradeCorridors: [
      'Cotonou – Niamey Corridor (Direct rail/road link to Niger)',
      'Cotonou – Lagos High-Volume Trade Highway',
      'Glo-Djigbé Industrial Zone (GDIZ) Export Line'
    ],
    regulatoryBody: 'Agence Nationale de Normalisation (ANM), APIEx Benin',
    overview: 'Benin is executing one of Africa’s most ambitious industrial transformations. Anchored by the world-class Glo-Djigbé Industrial Zone (GDIZ) and the modernized Port of Cotonou, Benin serves as an immediate trade conduit to Nigeria and the Sahel.',
    marketPotential: 'High-Velocity Industrial Hub: Proximity to Nigeria, Glo-Djigbé Special Economic Zone, and modern logistics.',
    officeEmail: 'Benin@bridgeafriport.com',
    officePhone: '+229 60 35 76 49',
    coordinates: { x: 515, y: 405 }
  }
];

export const COMPARISONS_DATA: ComparisonItem[] = [
  {
    dimension: 'Core Business Model',
    traditionalEntity: 'Traditional Management Consultants',
    traditionalApproach: 'Deliver theoretical PDF reports, abstract market sizing models, and generic recommendations, then exit.',
    bridgeafriportAdvantage: 'Creates tangible market opportunities, executes commercial deals, and aligns incentives with client revenue.',
    outcome: 'Commercial contracts and real distributor purchase orders rather than static slide decks.'
  },
  {
    dimension: 'Channel Development',
    traditionalEntity: 'Traditional Marketing & Export Agencies',
    traditionalApproach: 'Generate unvetted digital leads, trade fair attendee lists, and passive marketing brochures.',
    bridgeafriportAdvantage: 'Builds robust, audited, nationwide distribution networks with verified creditworthiness and logistics fleets.',
    outcome: 'Institutional wholesale and retail coverage through vetted distribution partners.'
  },
  {
    dimension: 'Territorial Presence',
    traditionalEntity: 'Traditional Foreign Representatives',
    traditionalApproach: 'Operate remotely from London, Dubai, or New York via sporadic Zoom calls and quarterly visits.',
    bridgeafriportAdvantage: 'Provides permanent, sovereign, on-the-ground executive presence across major African commercial capitals.',
    outcome: 'Immediate local responsiveness, regulatory navigation, and continuous commercial advocacy.'
  },
  {
    dimension: 'Commercial Longevity',
    traditionalEntity: 'Traditional Commission Brokers',
    traditionalApproach: 'Facilitate isolated one-off transactional introductions to claim immediate finder fees, with zero follow-through.',
    bridgeafriportAdvantage: 'Supports long-term multi-year market representation, volume scale, regulatory renewals, and regional expansion.',
    outcome: 'Enduring commercial dominance and multi-million dollar sustainable market equity.'
  }
];

export const OFFICES_DATA: OfficeItem[] = [
  {
    country: 'NIGERIA',
    city: 'Lagos & Abuja',
    type: 'Operational Hub & Trade Directorate',
    email: 'Nigeria@bridgeafriport.com',
    phone: '+234 703 188 2447',
    addressSnippet: 'Victoria Island Commercial District, Lagos / Central Business District, Abuja',
    timeZone: 'WAT (UTC+1)',
    focusCorridors: ['Nigeria Nationwide Distribution', 'Lekki Deep Sea Logistics', 'ECOWAS Maritime Nexus']
  },
  {
    country: 'GHANA',
    city: 'Accra & Tema',
    type: 'AfCFTA Liaison & Maritime Gateway',
    email: 'Ghana@bridgeafriport.com',
    addressSnippet: 'Airport Residential Commercial Centre, Accra / Tema Port Logistics Quarter',
    timeZone: 'GMT (UTC+0)',
    focusCorridors: ['AfCFTA Continental Corridor', 'Tema Port Multi-Modal Transit', 'Ghana Wholesale Syndicates']
  },
  {
    country: 'TOGO',
    city: 'Lomé',
    type: 'Deep-Water Port Transshipment Hub',
    email: 'Togo@bridgeafriport.com',
    phone: '+228 70 64 55 50',
    addressSnippet: 'Boulevard du Mono, Zone Portuaire, Lomé',
    timeZone: 'GMT (UTC+0)',
    focusCorridors: ['Deep-Water Port Transshipment', 'Sahel Transit Arteries', 'PIA Industrial Park Distribution']
  },
  {
    country: 'BENIN',
    city: 'Cotonou',
    type: 'Industrial & Regional Gateway',
    email: 'Benin@bridgeafriport.com',
    phone: '+229 60 35 76 49',
    addressSnippet: 'Avenue Jean-Paul II, Quartier Commercial, Cotonou',
    timeZone: 'WAT (UTC+1)',
    focusCorridors: ['GDIZ Industrial Logistics', 'Nigeria Border Corridor', 'Niger Transit Highway']
  },
  {
    country: 'CÔTE D\'IVOIRE',
    city: 'Abidjan',
    type: 'Francophone WAEMU Directorate',
    email: 'office@bridgeafriport.com',
    addressSnippet: 'Plateau Financial District, Abidjan',
    timeZone: 'GMT (UTC+0)',
    focusCorridors: ['UEMOA Unified Trade Corridor', 'Abidjan Autonomous Port', 'Sahel Rail & Highway Link']
  },
  {
    country: 'SENEGAL',
    city: 'Dakar',
    type: 'Atlantic Gateway & Energy Hub',
    email: 'office@bridgeafriport.com',
    addressSnippet: 'Avenue Léopold Sédar Senghor, Dakar / Diamniadio Tech City',
    timeZone: 'GMT (UTC+0)',
    focusCorridors: ['Atlantic Ocean Trade Lines', 'Dakar-Bamako Rail Corridor', 'Offshore Energy Supply Chains']
  },
  {
    country: 'GLOBAL CORPORATE HEADQUARTERS',
    city: 'International Trade Operations',
    type: 'Global Corporate Directorate',
    email: 'office@bridgeafriport.com',
    addressSnippet: 'Corporate Trade & Sovereign Relations Executive Directorate',
    timeZone: 'Global 24/7 Desk',
    focusCorridors: ['Asia', 'Europe', 'North America', 'South America', 'Middle East', 'Oceania']
  }
];

export const GLOBAL_ORIGINS = [
  { continent: 'Asia', hubs: 'Tokyo, Shanghai, Seoul, Singapore, Mumbai', share: '34% Volume' },
  { continent: 'Europe', hubs: 'London, Rotterdam, Frankfurt, Milan, Paris', share: '28% Volume' },
  { continent: 'North America', hubs: 'New York, Houston, Chicago, Toronto', share: '18% Volume' },
  { continent: 'Middle East', hubs: 'Dubai, Riyadh, Doha, Abu Dhabi', share: '11% Volume' },
  { continent: 'South America', hubs: 'São Paulo, Buenos Aires, Santiago', share: '5% Volume' },
  { continent: 'Oceania', hubs: 'Sydney, Melbourne, Auckland', share: '4% Volume' }
];

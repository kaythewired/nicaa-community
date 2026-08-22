import townUnionRostersJson from "./town-union-rosters.json";

export interface TownUnion {
  name: string;
  letter: string;
  roster: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  summary?: string;
}

export interface PastPresident {
  name: string;
  tenure: string;
  note: string;
  image: string;
}

export interface CommunityObjective {
  number: string;
  title: string;
  description: string;
}

export interface HistoryTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const townUnionNames = [
  "ABAGANA WELFARE UNION",
  "ABATETE INDIGENE",
  "ABOH PROGRESSIVE UNION",
  "ACHINA PROGRESSIVE UNION",
  "ADAZI TOWN MEETING",
  "AFFA DEVELOPMENT UNION",
  "AGBAOGUGU PROGRESSIVE UNION",
  "AGULU PEOPLE’S UNION",
  "AHIAZU BLESSED FORUM",
  "AMICHI INDIGENES IN ANGOLA",
  "ANAM BROTHERS ASSOCIATION",
  "ARONDIZUOGU PATRIOTIC UNION",
  "AYAMELUM BROTHERS",
  "AWGBU PROGRESS UNION",
  "AWKA NORTH AND SOUTH UNION",
  "AWKUZU PROGRESSIVE UNION",
  "AWO-OMAMMA UNION",
  "DELTA PROGRESSIVE UNION",
  "DUNUKOFIA IMPROVEMENT UNION",
  "EBONESI PROGRESSIVE UNION",
  "EBONYI PROGRESSIVE UNION",
  "EGEDE BROTHERS ASSOCIATION",
  "EHIME INDIGENES",
  "EKWULOBIA PEOPLE’S ASSEMBLY",
  "EKWUSIGO IMPROVEMENT UNION",
  "ELITES OF ALOR",
  "ENUGU-UKWU DEVELOPMENT UNION",
  "EZEAGU BROTHERS ASSOCIATION",
  "EZINIFITE (AGUATA) TOWN UNION",
  "GREAT ABIA ASSOCIATION",
  "GREAT UMUAHIA ASSOCIATION",
  "GREAT ISIALA MBANO",
  "IDEATO PROGRESSIVE UNION",
  "IGBO-UKWU DEVELOPMENT UNION",
  "IHIALA PROGRESSIVE UNION",
  "IMO PROGRESSIVE UNION",
  "ISUOFIA PEOPLE’S ASSEMBLY",
  "ISU BROTHERS ASSOCIATION",
  "MBAISE WELFARE ASSOCIATION",
  "MBANESE INDEGINE NNEWI SOUTH",
  "MBAITOLI/IKEDURU FAMILY MEETING",
  "NAWFIJA PROGRESIVE UNION",
  "NGWA PROGRESSIVE ASSOCIATION",
  "NKANU OGBUZURU OGBUZURU",
  "NNEWI FAMILY MEETING",
  "NNOBI WELFARE ORGANIZATION",
  "NKPOR UNION",
  "NSUKKA BROTHERS",
  "OBA UNITED",
  "OBOSI DEVELOPMENT UNION",
  "OGBARU TOWN UNION",
  "OGIDI UNION",
  "OJOTO TOWN UNION",
  "OKIGWE SENETORIAL ZONE",
  "OKIJA COMMUNITY",
  "OKPATU BROTHERS ASSOCIATION",
  "OLD ANAMBRA LOCAL GOVT UNION",
  "OLD AWGU BELOVED BROTHERS ASSOCIATION",
  "OLD BENDE ASSOCIATION",
  "OLD NJIKOKA PROGRESSIVE UNION",
  "OODUA PROGRESSIVE UNION",
  "ORA-ERI DEVELOPMENT UNION (O.D.U)",
  "ORAUKWU BROTHERS IN ANGOLA",
  "OJI-RIVER BROTHERS",
  "ORLU SENATORIAL ZONE",
  "ORSU WELFARE ASSOCIATION",
  "ORU FEDERAL ASSEMBLY",
  "OWO PROGRESSIVE UNION",
  "OZUBULU INDIGENOUS BROTHERS",
  "UDI SOUTH BROTHERS ASSOCIATION",
  "UGA IMPROVEMENT UNION",
  "UKPO IMPROVEMENT UNION",
  "UKPOR IMPROVEMENT UNION",
  "UMUAKA COMMUNITY",
  "UMUAJU FAMILY MEETING",
  "UMUCHU IMPROVEMENT UNION",
  "UMUHU OKABIA PROGRESSIVE UNION",
  "UMUNZE MEMBERS TOWN UNION",
  "UMUOJI IMPROVEMENT UNION",
  "UNUBI BROTHERS UNION IN ANGOLA",
  "UTUH MBADIKE IMPROVEMENT UNION",
] as const;

export const townUnions: TownUnion[] = townUnionNames.map((name) => ({
  name,
  letter: name.charAt(0),
  roster: townUnionRostersJson[name] ?? "",
}));

export const leaders: Leader[] = [
  {
    name: "Comr. Ogbuka Obinna",
    role: "President",
    image: "/media/leader-01-enhanced.png",
    summary: "Leading the community’s work to unite, represent, and support Nigerians across Angola.",
  },
  {
    name: "Hon. Edeh Earlymoomor",
    role: "Vice President",
    image: "/media/leader-02-enhanced.png",
  },
  {
    name: "Hon. Ofoedu Chukwuma Anthony",
    role: "Secretary General",
    image: "/media/leader-03-enhanced.png",
  },
  {
    name: "Hon. Obiwuaku Chukwudi C.",
    role: "Assistant Secretary General",
    image: "/media/leader-04-enhanced.png",
  },
  {
    name: "Hon. Ifenweobi Onyeka Emmanuel",
    role: "Financial Secretary",
    image: "/media/leader-05-enhanced.png",
  },
  {
    name: "Hon Odonweze Valentine",
    role: "Assistant Financial Secretary",
    image: "/media/leader-06-enhanced.png",
  },
  {
    name: "Hon. Chijioke Ogbonna",
    role: "Treasurer",
    image: "/media/leader-07-enhanced.png",
  },
  {
    name: "Hon. Chika Michael G.",
    role: "Public Relations Officer",
    image: "/media/leader-08-enhanced.png",
  },
  {
    name: "Hon. Babatunde Onabowale Onafowope",
    role: "Assistant Public Relations Officer",
    image: "/media/leader-09-enhanced.png",
  },
  {
    name: "Hon. Uruchukwu Obinna",
    role: "Provost I",
    image: "/media/leader-10-enhanced.png",
  },
  {
    name: "Hon. Ude Okwudiri",
    role: "Provost II",
    image: "/media/leader-11-enhanced.png",
  },
];

export const pastPresidents: PastPresident[] = [
  {
    name: "Hon. Chidebe Nze",
    tenure: "President, 1995 - February 2003",
    note: "First interim president of the organised Nigerian Community in Angola.",
    image: "/media/past-president-01.avif",
  },
  {
    name: "Late Engr. Austin Odigie",
    tenure: "President, February - June 2003",
    note: "Continued the community's early work during a short period of service.",
    image: "/media/past-president-02.avif",
  },
  {
    name: "Hon. Ifeanyi Nworah",
    tenure: "President, June 2003 - 30 April 2004",
    note: "Supported the transition and handed key community documents to the Nigerian Mission.",
    image: "/media/past-president-03.avif",
  },
  {
    name: "Late Mr. John Ogebulue",
    tenure: "Caretaker, 2004 - 2007",
    note: "Led the caretaker period that prepared the community for its first general election.",
    image: "/media/past-president-04.avif",
  },
  {
    name: "Hon. Basil Ngige",
    tenure: "President, 2007 - 2011",
    note: "The first elected president recorded in the NICAA archive.",
    image: "/media/past-president-05.avif",
  },
  {
    name: "Hon. Benjamin Okeke (OKB)",
    tenure: "President, 2011 - May 2015",
    note: "Expanded the town-union representative model for community coordination.",
    image: "/media/past-president-06.avif",
  },
  {
    name: "Hon. Sampson Ebigbo",
    tenure: "President, 2015 - 2018",
    note: "Continued the community's member-protection and civic engagement work.",
    image: "/media/past-president-07.avif",
  },
  {
    name: "Hon. Chukwuemeka George Onyemeforo",
    tenure: "Interim President, 2019 - 2021",
    note: "Helped restore a unified governance process and prepared the 2021 election transition.",
    image: "/media/past-president-08.avif",
  },
];

export const objectives: CommunityObjective[] = [
  {
    number: "01",
    title: "Unite the Community",
    description:
      "Build a welcoming, connected home for Nigerians living and working across Angola.",
  },
  {
    number: "02",
    title: "Protect Member Interests",
    description:
      "Promote the welfare of registered members and represent their shared interests responsibly.",
  },
  {
    number: "03",
    title: "Support Lawful Living",
    description:
      "Help members understand and obey Angolan law through sensitisation, information, translation, and interpretation.",
  },
  {
    number: "04",
    title: "Foster Local Integration",
    description:
      "Encourage healthy, friendly, and peaceful relationships between Nigerians and their Angolan neighbours.",
  },
  {
    number: "05",
    title: "Strengthen Bilateral Relations",
    description:
      "Work with the Nigerian Embassy to deepen cooperation and goodwill between Nigeria and Angola.",
  },
  {
    number: "06",
    title: "Serve Through Philanthropy",
    description:
      "Contribute to the growth and development of Angola through meaningful community-service initiatives.",
  },
  {
    number: "07",
    title: "Encourage Open Dialogue",
    description:
      "Respect freedom of expression and the exchange of ideas while upholding the integrity of the association.",
  },
  {
    number: "08",
    title: "Advance Inclusion and Diversity",
    description:
      "Support women’s participation and honour the linguistic, cultural, and religious diversity of every member.",
  },
];

export const historyTimeline: HistoryTimelineItem[] = [
  {
    year: "2020",
    title: "The Community Is Formed",
    description:
      "The Nigerian Community in Angola was formed on 24 January 2020 to unite Nigerians and protect the interests of registered members.",
  },
  {
    year: "2020",
    title: "Constituted in Angola",
    description:
      "Its founding account records the association’s constitution by Angola’s Ministry of Justice and Human Rights.",
  },
  {
    year: "2022",
    title: "The NICAA Story in Print",
    description:
      "The 2022 NICAA brochure documented the growing community, its leadership, and its shared vision for peace, unity, and progress.",
  },
  {
    year: "2023",
    title: "Stronger Civic Partnerships",
    description:
      "Community representatives deepened engagement with Angolan civic institutions and welcomed senior Nigerian visitors to Luanda.",
  },
  {
    year: "2024",
    title: "A Permanent Home Begins",
    description:
      "NICAA marked a major milestone with the laying of its community-building foundation on 23 March 2024.",
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "laying-of-nicaa-building-foundation",
    title: "Laying the NICAA Building Foundation",
    excerpt:
      "Community leaders and members gathered on 23 March 2024 to begin work on a permanent home for NICAA.",
    date: "28 Mar 2024",
    category: "Community Development",
    image: "/media/news-foundation.avif",
  },
  {
    slug: "nica-welcomes-senate-president-godswill-akpabio",
    title: "NICA Welcomes Senate President Godswill Akpabio",
    excerpt:
      "The Nigerian community welcomed the Senate President and Nigeria’s delegation during their visit to Angola.",
    date: "4 Nov 2023",
    category: "Diplomacy",
    image: "/media/news-senate.avif",
  },
  {
    slug: "kilamba-kiaxi-municipal-command",
    title: "Engagement with the Kilamba Kiaxi Municipal Command",
    excerpt:
      "NICA representatives met municipal leaders to strengthen cooperation, understanding, and community safety.",
    date: "29 Aug 2023",
    category: "Civic Engagement",
    image: "/media/news-kilamba.avif",
  },
  {
    slug: "community-dialogue-with-local-administrators",
    title: "Community Dialogue with Local Administrators",
    excerpt:
      "A public-service forum brought community representatives and local officials together around shared civic priorities.",
    date: "30 Jan 2023",
    category: "Public Service",
    image: "/media/news-administrator.avif",
  },
  {
    slug: "nigerian-naval-delegation-in-luanda",
    title: "Nigerian Naval Delegation in Luanda",
    excerpt:
      "An archival community reception celebrated service, friendship, and the ties connecting Nigerians at home and abroad.",
    date: "2022 Archive",
    category: "Community Archive",
    image: "/media/news-navy.avif",
  },
  {
    slug: "english-anglican-community-confirmed-as-parish",
    title: "English Anglican Community Confirmed as a Parish",
    excerpt:
      "The English Anglican Community in Luanda was formally recognised as St. Bartholomew Anglican Church.",
    date: "14 Aug 2022",
    category: "Faith & Community",
    image: "/media/news-anglican.avif",
  },
];

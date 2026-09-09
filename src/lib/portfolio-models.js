export const PORTFOLIO_SECTION_ORDER = [
  'profile',
  'navigation',
  'processSteps',
  'skills',
  'experiences',
  'projects',
  'certifications',
  'achievements',
  'blogs',
  'github',
  'contact',
  'resume',
];

export const PORTFOLIO_SECTION_DEFINITIONS = {
  profile: { displayName: 'Profile', type: 'object' },
  navigation: { displayName: 'Navigation', type: 'array' },
  processSteps: { displayName: 'Process Steps', type: 'array' },
  skills: { displayName: 'Skills', type: 'array' },
  experiences: { displayName: 'Experiences', type: 'array' },
  projects: { displayName: 'Projects', type: 'array' },
  certifications: { displayName: 'Certificates', type: 'array' },
  achievements: { displayName: 'Achievements', type: 'array' },
  blogs: { displayName: 'Blogs', type: 'array' },
  github: { displayName: 'GitHub', type: 'object' },
  contact: { displayName: 'Contact', type: 'object' },
  resume: { displayName: 'Resume', type: 'object' },
};

function getSectionDefaultValue(sectionName) {
  return PORTFOLIO_SECTION_DEFINITIONS[sectionName]?.type === 'object' ? {} : [];
}

export function buildPortfolioSections(portfolio = {}) {
  return PORTFOLIO_SECTION_ORDER.reduce((accumulator, sectionName) => {
    accumulator[sectionName] = portfolio[sectionName] ?? getSectionDefaultValue(sectionName);
    return accumulator;
  }, {});
}

export function createEmptyPortfolio() {
  return {
    profile: {
      name: '',
      title: '',
      roles: [],
      tagline: '',
      description: '',
      email: '',
      github: '',
      linkedin: '',
      x: '',
      phone: '',
      location: '',
      resume: '',
      photo: '',
    },
    navigation: [],
    processSteps: [],
    skills: [],
    experiences: [],
    projects: [],
    certifications: [],
    achievements: [],
    blogs: [],
    github: {
      profile: '',
      username: '',
      repositories: [],
    },
    contact: {
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    },
    resume: {
      title: '',
      items: [],
    },
  };
}

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'JLR Degree Apprenticeship',
    description: `Bunch of internal projects which I might be able to talk about but also might not.`,
    imgSrc: '/static/images/jlr.png',
    href: 'https://www.jlr.com/',
  },
]

export default projectsData

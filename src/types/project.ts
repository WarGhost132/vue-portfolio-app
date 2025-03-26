type Responsive = 'desktop' | 'tablet' | 'mobile'

export interface Project {
  id: number,
  type: string,
  previewImage: string,
  title: string,
  description: string,
  year: number,
  role: string,
  link: string,
  githubLink: string,
  responsive: Responsive[]
}

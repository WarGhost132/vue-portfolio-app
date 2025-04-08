export type Responsive = 'desktop' | 'tablet' | 'mobile'

export interface Project {
  id: number,
  type: string,
  previewImage: string,
  title: string,
  description: string,
  year: number,
  link: string,
  githubLink: string,
  responsive: Responsive[],
  tags: string[],
  isFavorite: boolean,
  helpText?: string,
}

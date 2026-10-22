export interface Resource {
  title: string
  content: string
  action: string
  imageUrl?: string | null
}

export interface Category {
  id: string | number
  title: string
  description: string
  icon: string
  items: Resource[]
}

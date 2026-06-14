// types/experience.ts

export type ExperienceCategory = 'mountain' | 'nature' | 'cultural'

export interface Experience {
  id:          number
  title:       string
  subtitle:    string
  category:    ExperienceCategory
  image:       string        // primary hero image path
  images:      string[]      // additional gallery images
  location:    string
  distance:    string
  temp:        string
  rating:      number
  price:       number
  description: string
  duration?:   string
}

export interface Destination {
  id:     number
  name:   string
  type:   string
  rating: number
  image:  string
}
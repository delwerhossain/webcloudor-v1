import { getBlogPostNavigation } from '@/lib/sanity'
import { PostNavigationClient } from './PostNavigationClient'

interface PostNavigationProps {
  currentSlug: string
  categoryIds: string[]
}

export const PostNavigation = async ({ currentSlug, categoryIds }: PostNavigationProps) => {
  const navigation = await getBlogPostNavigation(currentSlug, categoryIds)
  
  if (!navigation.previous && !navigation.next) {
    return null
  }

  return <PostNavigationClient navigation={navigation} />
}
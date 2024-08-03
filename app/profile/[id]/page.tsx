'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'

import Profile from '@components/Profile'
import { Post } from '@types'

const MyProfile = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const userName = searchParams.get('name')

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setPosts(data)
    }

    if (params?.id) fetchPosts()
  }, [params.id])

  return (
    <Profile
      name={userName || ''}
      desc="Welcome to your personalized profile page"
      data={posts}
    />
  )
}

export default MyProfile
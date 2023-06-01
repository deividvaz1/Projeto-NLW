import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import dayjs from 'dayjs'

interface Params {
  params: {
    id: string
  }
}

interface MemoryDetails {
  id: string
  userId?: string
  coverUrl: string
  content: string
  createdAt: string
  isPublic: boolean
}

export default async function DetailMemory({ params }: Params) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return
  }

  const token = cookies().get('token')?.value
  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memoryDetail: MemoryDetails = response.data

  if (!memoryDetail) {
    return
  }

  return (
    <div className="flex flex-col gap-4 px-8 py-16 ">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <div key={memoryDetail.id} className="space-y-4">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memoryDetail.createdAt).format('D [ de ]MMMM YYYY')}
        </time>

        <Image
          src={memoryDetail.coverUrl}
          width={592}
          height={280}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="text-base leading-relaxed text-gray-100 md:text-lg">
          {memoryDetail.content}
        </p>

        {memoryDetail.isPublic && (
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row"></div>
        )}
      </div>
    </div>
  )
}

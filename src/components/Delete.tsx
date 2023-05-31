'use client'

import { api } from '@/lib/api'
import { MdDelete } from 'react-icons/md'

interface DeleteProps {
  id: string
  token: string
}

export default function Delete({ id, token }: DeleteProps) {
  const handleMemory = async () => {
    try {
      await api.delete(`/memories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {}
    window.location.reload()
  }

  return (
    <button>
      <MdDelete
        onClick={handleMemory}
        className="flex h-6 w-6 text-red-500 hover:text-red-800"
      />
    </button>
  )
}

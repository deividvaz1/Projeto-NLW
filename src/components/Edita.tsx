'use client'
import { useState } from 'react'
import { api } from '@/lib/api'
import { FiEdit } from 'react-icons/fi'
import { Camera } from 'lucide-react'

interface EditMemoryProps {
  id: string

  token: any

  initialContent: string

  initialCoverUrl: string

  initialIsPublic: boolean
}

export default function Edita({
  id,
  token,
  initialContent,
  initialCoverUrl,
  initialIsPublic,
}: EditMemoryProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [coverUrl] = useState(initialCoverUrl)
  const [isPublic, setIsPublic] = useState(initialIsPublic)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState(initialCoverUrl)

  const handleEdit = async () => {
    try {
      let uploadedCoverUrl = coverUrl

      if (selectedImage !== null) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', selectedImage)
        // @ts-ignore-next-line
        uploadFormData.set('fileName', selectedImage.name)
        uploadFormData.set('folder', 'nlw-spacetime')

        const uploadResponse = await api.post(
          'https://upload.imagekit.io/api/v1/files/upload',
          uploadFormData,
          {
            headers: {
              Authorization: `Basic cHJpdmF0ZV9FM2NtVDcxOFhWbzFmZTlvdHhsZ1NhUWlodms9Og==`,
            },
          },
        )

        uploadedCoverUrl = uploadResponse.data.url
      }

      await api.put(
        `/memories/${id}`,
        {
          content,
          coverUrl: uploadedCoverUrl,
          isPublic,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      // Atualizar as memórias no estado local com os dados editados

      setIsEditing(false)
    } catch (error) {
      // Tratar erro de edição
    }
    window.location.reload()
  }

  const handleStartEdit = () => {
    setIsEditing(true)
  }

  const handleMediaSelect = (media: File) => {
    setSelectedImage(media)
    const url = URL.createObjectURL(media)
    setSelectedImageUrl(url)
  }

  if (isEditing) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-filter">
        <div className="relative mx-auto py-3 text-center sm:w-96">
          <span className="text-2xl font-light text-white">Editar memória</span>
          <div className="mt-4 rounded-lg bg-white text-left shadow-md">
            <div className="h-2 rounded-t-md bg-green-400"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold text-gray-700">
                Descrição da memória:
              </label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="0 mb-5 mt-2 h-5 w-full rounded-md border px-3 py-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <div className="flex flex-col">
                <p className="mb-2  font-semibold text-gray-700">Imagem:</p>
                <label
                  htmlFor="media"
                  className="flex cursor-pointer  items-center gap-1.5  text-sm text-gray-200 hover:text-gray-100"
                >
                  <Camera className="h-4 w-4 " />
                  Alterar imagem
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="media"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      handleMediaSelect(file)
                    }
                  }}
                />

                {selectedImageUrl && (
                  <img
                    src={selectedImageUrl}
                    alt="Selected media"
                    className="my-3 h-36 rounded-lg bg-slate-50 shadow-lg"
                  />
                )}
              </div>
              <label className="mb-5 flex items-center space-x-2">
                <input
                  className="text-primary form-checkbox"
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                />
                <span className="text-gray-700">Tornar pública?</span>
              </label>
              <div className="flex items-baseline justify-between">
                <button
                  className="rounded-md bg-gray-500 px-4 py-2 text-white"
                  onClick={() => setIsEditing(false)}
                >
                  CANCELAR
                </button>
                <button
                  className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                  onClick={handleEdit}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <button className="flex items-center" onClick={handleStartEdit}>
      <FiEdit className="mr-1" />{' '}
      <p className="leading-relaxed text-gray-100 hover:text-gray-200">
        Editar
      </p>
    </button>
  )
}

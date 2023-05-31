import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description:
    'Um projeto WEB de uma cápsula dsdafadssafg asfg sfgsdhg sdj dhfjhkd fgjk fgjk fkj fgjko tempo construída com React, Next.JS, TailwindCSS e TypeSCript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen lg:grid-cols-2">
          {/* GRID - DIREITA */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16 ">
            <div className="moving-bg absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-green-700 opacity-60 blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <div className="h-200px w-200px bg-white"></div>
            <Hero />
            <Copyright />
          </div>
          {/* GRID - ESQUERDA */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

"use client"

import Link from 'next/link'

export default function Headerwithoutinput(props:any) {


  return (
      <header className="w-full p-4 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center">
            <svg
              className="w-10 h-10 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
            <span className="text-2xl font-bold ml-2">
              <span className="text-blue-500">cuit</span>
              <span className="text-gray-700">online</span>
            </span>
          </div>
          </Link>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{props.area}</h1>
        </div>
        </div>
      </header>
  )
}
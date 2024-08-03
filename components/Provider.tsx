"use client"

import { FC, PropsWithChildren } from 'react'

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

type Props = {
  session?: Session | null
}

const Provider: FC<PropsWithChildren<Props>> = ({ children, session }) => {
  console.log('provider session', session)

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
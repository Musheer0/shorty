import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import ConvexClientProvider from '@/components/convex-clerk-provider'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <ClerkProvider>
        <ConvexClientProvider>
        {children}
      </ConvexClientProvider>
        </ClerkProvider>

  )
}
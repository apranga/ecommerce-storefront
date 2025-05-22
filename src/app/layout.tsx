import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Limelight, Ribeye } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

// /////////
// Add fonts
// /////////
export const limelight = Limelight({
  weight: "400"
});

export const ribeye = Ribeye({
  weight: "400"
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

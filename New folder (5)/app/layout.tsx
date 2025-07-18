import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wildlife Photography",
  description: "Capturing the beauty of wildlife through the lens",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Disable text selection globally */
            * {
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -webkit-touch-callout: none;
              -webkit-tap-highlight-color: transparent;
            }
            
            /* Re-enable text selection for form inputs */
            input, textarea, [contenteditable="true"] {
              -webkit-user-select: text;
              -moz-user-select: text;
              -ms-user-select: text;
              user-select: text;
            }
            
            /* Prevent image dragging */
            img {
              -webkit-user-drag: none;
              -khtml-user-drag: none;
              -moz-user-drag: none;
              -o-user-drag: none;
              user-drag: none;
              pointer-events: none;
            }
            
            /* Re-enable pointer events for clickable images */
            .clickable-image {
              pointer-events: auto;
              cursor: pointer;
            }
            
            /* Disable highlighting */
            ::selection {
              background: transparent;
            }
            
            ::-moz-selection {
              background: transparent;
            }
            
            /* Prevent context menu on images */
            img {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Disable right-click context menu
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
            document.addEventListener('keydown', function(e) {
              // F12
              if (e.keyCode === 123) {
                e.preventDefault();
                return false;
              }
              // Ctrl+Shift+I
              if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
              }
              // Ctrl+Shift+J
              if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
              }
              // Ctrl+U
              if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
              }
              // Ctrl+S
              if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
              }
              // Ctrl+A
              if (e.ctrlKey && e.keyCode === 65) {
                e.preventDefault();
                return false;
              }
              // Ctrl+C
              if (e.ctrlKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
              }
            });
            
            // Disable drag and drop
            document.addEventListener('dragstart', function(e) {
              e.preventDefault();
              return false;
            });
            
            // Disable print screen (limited effectiveness)
            document.addEventListener('keyup', function(e) {
              if (e.keyCode === 44) {
                e.preventDefault();
                return false;
              }
            });
            
            // Disable image saving via drag
            document.addEventListener('DOMContentLoaded', function() {
              const images = document.querySelectorAll('img');
              images.forEach(function(img) {
                img.addEventListener('dragstart', function(e) {
                  e.preventDefault();
                  return false;
                });
              });
            });
          `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

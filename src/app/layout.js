import Components from './components/Counter'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Components/>
        
        {children}
        
      </body>
    </html>
  )
}

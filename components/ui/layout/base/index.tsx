
import { Web3Provider } from "@components/providers"
import { Navbar, Footer } from "@components/ui/common"

export default function BaseLayout({children}:any) {
  return (
    <Web3Provider>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="fit">
          {children}
        </div>
      </div>
      
      <Footer />
    </Web3Provider>
  )
}
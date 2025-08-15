
import { Home, User, Briefcase, FileText, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'AI Agents', url: '/demo', icon: Briefcase },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: FileText }
  ]

  return <NavBar items={navItems} />
}

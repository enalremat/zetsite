import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout

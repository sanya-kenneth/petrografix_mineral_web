import Home from './pages/Home.vue'
import ServicesPage from './pages/ServicesPage.vue'
import AboutPage from './pages/AboutPage.vue'
import PortfolioPage from './pages/PortfolioPage.vue'
import ContactUs from './pages/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'ServicesPage',
    component: ServicesPage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  }
]

export default routes

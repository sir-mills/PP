import AccountIcon from "components/SidebarIcons/AccountIcon"
import HomeIcon from "components/SidebarIcons/Home"
import DoctorIcon from "components/SidebarIcons/DoctorIcon"
import ProfileIcon from "components/SidebarIcons/ProfileIcon"
import OverviewIcon from "components/SidebarIcons/OverviewIcon"
import OrderIcon from "components/SidebarIcons/OrderIcon"
import Login from "Pages/Auth/Login"
import { Landing } from "Pages/Landing"
import Appointments from "Pages/Appointments"
import AppointmentIcon from "components/SidebarIcons/AppointmentIcon"
import Doctor from "Pages/Doctor"
import ViewDetails from "Pages/Doctor/View"
import Overview from "Pages/Overview"
import Order from "Pages/Order"

export interface routeInterface {
  path: string
  name: string
  header?: string
  exact?: boolean
  component?: any
  image?: any,
  badgeColor?: any
  badgeText?: any
  icon?: any
  classProp?: string
  hideFooter?: boolean
  children?: Array<routeInterface>
}

const authRoutes: routeInterface = {
  path: '/',
  name: 'Login',
  component: Login
}

const landingRoutes: routeInterface = {
  path: '/dashboard',
  name: 'Dashboard',
  icon: HomeIcon,
  badgeText: "Badge",
  component: Landing
}
const doctorRoutes: routeInterface = {
  path: '/doctor',
  name: 'Find a Doctor',
  icon: DoctorIcon,
  component: Doctor
}
const viewAppointmentRoutes: routeInterface = {
  path: '/appointment/:id',
  name: '',
  icon: DoctorIcon,
  component: ViewDetails
}

const appointmentRoutes: routeInterface = {
  path: '/appointment',
  name: 'All Appointments',
  icon: AppointmentIcon,
  component: Appointments
}

const customersRoutes: routeInterface = {
  path: '#',
  name: 'Profile',
  icon: ProfileIcon,
  component: <></>
}

const accountRoutes: routeInterface = {
  path: '#',
  name: 'Account & Settings',
  header: 'Profile',
  icon: AccountIcon,
  component: <></>
}

const overviewRoute: routeInterface = {
  path: '/overview',
  name: 'Overview',
  icon: OverviewIcon,
  component: Overview
}

const orderRoute: routeInterface = {
  path: '/order',
  name: 'Order',
  icon: OrderIcon,
  component: Order
}

export const auth: Array<routeInterface> = [authRoutes];
export const dashboard: Array<routeInterface> = [doctorRoutes, appointmentRoutes, viewAppointmentRoutes, overviewRoute, orderRoute];
const routes: Array<routeInterface> = [overviewRoute, orderRoute];

export default routes

import { lazy, ComponentType } from 'react';

// Using React.lazy for code-splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Residential = lazy(() => import('@/pages/Residential'));
const MoveOut = lazy(() => import('@/pages/MoveOut'));
const DeepCleaning = lazy(() => import('@/pages/DeepCleaning'));
const ApartmentCleaning = lazy(() => import('@/pages/ApartmentCleaning'));
const Locations = lazy(() => import('@/pages/Locations'));
const Spokane = lazy(() => import('@/pages/Spokane'));
const SpokaneValley = lazy(() => import('@/pages/SpokaneValley'));
const LibertyLake = lazy(() => import('@/pages/LibertyLake'));
const Greenacres = lazy(() => import('@/pages/Greenacres'));
const Blog = lazy(() => import('@/pages/Blog'));
const Team = lazy(() => import('@/pages/Team'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/not-found'));

interface RouteConfig {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/residential', component: Residential },
  { path: '/move-out', component: MoveOut },
  { path: '/deep-cleaning', component: DeepCleaning },
  { path: '/apartment-cleaning', component: ApartmentCleaning },
  { path: '/locations', component: Locations, exact: true },
  { path: '/locations/spokane', component: Spokane },
  { path: '/locations/spokane-valley', component: SpokaneValley },
  { path: '/locations/liberty-lake', component: LibertyLake },
  { path: '/locations/greenacres', component: Greenacres },
  { path: '/blog', component: Blog },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
  // A catch-all for 404 must be the last item
  { path: '/:rest*', component: NotFound },
];

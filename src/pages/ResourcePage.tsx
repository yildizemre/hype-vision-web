import { useParams } from 'react-router-dom';
import GuidePage from './GuidePage';
import NotFoundPage from './NotFoundPage';
import { getGuideEn } from '../data/guides';

/** /en/resources/:slug */
export default function ResourcePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const guide = getGuideEn(slug);
  return guide ? <GuidePage key={slug} guide={guide} /> : <NotFoundPage />;
}

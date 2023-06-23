import { useRouter } from 'next/router'
import { notFound } from 'next/navigation'
import DeepTissue from "./DeepTissue";
import Sports from './Sports';
import Swedish from './Swedish';
import Relaxing from './Relaxing';
import Pregnancy from './Pregnancy';
import Lymphatic from './Lymphatic';

export default function Treatment() {
  
  const router = useRouter()
  const treatment_type = router.query.treatment_type
  const whitelist = ['deep-tissue', 'sports-injury', 'swedish-massage', 'pregnancy', 'lymphatic']

  const returnTreatment = () => {
    if (treatment_type === 'deep-tissue') {
      return <DeepTissue />
    }
    if (treatment_type === 'sports-injury') {
      return <Sports />
    } 
    if (treatment_type === 'swedish-massage') {
      return <Swedish />
    } 
    if (treatment_type === 'holistic-massage') {
      return <Relaxing />
    } 
    if (treatment_type === 'pregnancy') {
      return <Pregnancy />
    } 
    if (treatment_type === 'lymphatic') {
      return <Lymphatic />
    }

    if(typeof treatment_type === 'string' && !whitelist.includes(treatment_type)) {
      return notFound()
    }

    return null
  };

  return returnTreatment();
}
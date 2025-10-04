import {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  // Redirect to the documentation intro page
  return <Redirect to="/docs/intro" />;
}

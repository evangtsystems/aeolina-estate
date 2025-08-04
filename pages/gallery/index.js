import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function GalleryRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/gallery/common'); // Change "common" to your default folder name
  }, [router]);

  return null;
}

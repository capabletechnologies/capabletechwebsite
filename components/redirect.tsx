'use client'

import { useRouter } from 'next/navigation'

const Redirect = (params: any) => {
  const router = useRouter()

  if(params.url)
  {
    router.push(params.url)
  }
  else
  {
    router.push('/404')
  }

  return (
    <div>
      Redirecting
    </div>
  );
};

export default Redirect;

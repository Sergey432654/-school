import React from 'react';
import { useGetElementsQuery } from '../API/api.tsx';

type ElementData ={
  id: number
  title: string,
  content: string,
  picture: string

}
export default function MainContent() {
  const { data, isLoading, error } = useGetElementsQuery()as{
    data?: ElementData[];
    isLoading: boolean;
    error: any;
  };

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error fetching dat a</p>;

  return (
    <div className="md:grid-cols-3 gap-4 text-white">
      {data?.map((item) => (
        <div key={item.id}>
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-300">{item.content}</p>
          <p className="text-sm text-gray-300">{item.content}</p>
          {item.picture && (<img src={item.picture} alt="gtgwrg" className='bg-red-300'/>)}
        </div>
      ))}
    </div>
  );
}
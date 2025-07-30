import React from 'react';
import { useGetElementsQuery } from '../API/api.tsx';

type ElementData ={
  id: number
  title: string,
  content: string,
  picture: string,
  predmet: string,
  name:string

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
    <div className="flex h-100 w-100 position:left flex-wrap gap-4 p-4">
      {data?.map((item) => (
        <div key={item.id}>
          <h2 className='text-xxl font-bold'>{item.title}</h2>
          <h2 className="text-xl font-bold mb-2">Its your teacher of {item.predmet}:{item.name}</h2>
          {item.picture && (<img src={item.picture} alt="gtgwrg" className='position: center bg-red-300'/>)}
          <p className="text-xl text-gray-300">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
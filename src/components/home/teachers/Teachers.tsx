import React from "react"
import styles from './Teachers.module.css'
import { useGetElementsQuery } from '../API/api.tsx';

type ElementData ={
	id: number ,
	picture: string,
}

export default function Teachers() {
  const { data, isLoading, error } = useGetElementsQuery()as{
	data?: ElementData[];
	isLoading: boolean;
	error: any;
  };

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error fetching dat a</p>;

  return (

  <div className="flex w-180 rounded position:left flex-wrap gap-4 p-4">
      {data?.map((item) => (
        <div key={item.id} className=''>
            <>
			<div className={styles.carousel}>
				<div className={styles.carouselItem}><img alt ='' src={item.picture}/></div>
				<div className={styles.carouselItem}><img alt ='' src={item.picture}/></div>
				<div className={styles.carouselItem}><img alt ='' src={item.picture}/></div>
			</div>
            </>
	</div>
      ))}
    </div>
		)
}
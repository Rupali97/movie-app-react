import React from 'react'

interface IProps{
  heading: string,
}

function MovieListHeading(props: IProps) {
  return (
    <div className='col'>
			<h1>{props.heading}</h1>
		</div>
  )
}

export default MovieListHeading

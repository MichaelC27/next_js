import type { NextPage } from 'next'
import Head from 'next/head'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { MovieList } from '../../components/MovieList/MovieList';

interface TProps {
  response: string;
}

const Movies: NextPage<TProps> = () => {

  return (
      <ApplicationWrapper title='Movies' description='Home fo the rootlab movies website'>
          <h1 className="text-3xl font-bold underline text-white">Movies!</h1>
          <MovieList/>
      </ApplicationWrapper>

    
  )
}

export default Movies;



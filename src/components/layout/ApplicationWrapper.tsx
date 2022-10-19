import { title } from 'process';
import  Head  from 'next/head';
import React, {FC, PropsWithChildren} from 'react';
import Link from 'next/link';

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({title , description,children }) => {

  return ( 
   <div className="bg-black min-h-screen flex flex-col">
        <Head>
          
            <title>{title} | Rootlab Movies </title>
            {description && <meta name="description" content={description}/>}
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header className="bg-white  h-20">
            <nav className='w-full flex gap-5 p-6 items-center text-2xl'>
                <Link href="/">
                    <a >Home</a>
                </Link>
                <a href="/movies">Movies</a>
            </nav>
        </header>
        <main className="grow flex flex-col text-white">{children}</main>
        <footer className='flex p-6 h-20 text-black bg-white items-center justify-center '>
            <a
            href="https://rootstack.com/en"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className=''>
                Rootstack
            </span>
            </a>
        </footer> 
    </div>
  );
};

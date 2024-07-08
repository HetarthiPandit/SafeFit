import React from 'react';
import { Link } from 'react-router-dom';
import { INSTAGARM } from '../../constant';

function Follow() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center bg-instaBg">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 from-2% via-pink-800 to-purple-700 opacity-80"></div>
        <div className="text-white z-10 text-center">
          <Link to={INSTAGARM} target='blank' className="italic lg:text-[45px] text-xl ">follow us on instagram @safefit.studios</Link>
        </div>
      </section>
    </>
  );
}

export default Follow;

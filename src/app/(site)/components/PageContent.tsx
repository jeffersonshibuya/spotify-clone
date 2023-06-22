'use client';

import SongItem from 'components/SongItem';

import { Song } from 'types';

interface PageContentProps {
  songs: Song[];
}

const PageContent = ({ songs }: PageContentProps) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400 ">No songs available</div>;
  }

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 
        lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
    "
    >
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={() => console.log('song item clicked')}
          data={song}
        />
      ))}
    </div>
  );
};

export default PageContent;
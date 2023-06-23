'use client';

import MediaItem from 'components/MediaItem';

import { Song } from 'types';

interface SearchContentProps {
  songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
  if (songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No songs found!
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div className="flex w-full items-center gap-x-4" key={song.id}>
          <div className="flex-1">
            <MediaItem data={song} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;

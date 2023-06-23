'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import LikeButton from 'components/LikeButton';
import MediaItem from 'components/MediaItem';

import { useUser } from 'hooks/useUser';
import { Song } from 'types';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent = ({ songs }: LikedContentProps) => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, router, user]);

  if (songs.length === 0) {
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No liked songs!
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2 p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;

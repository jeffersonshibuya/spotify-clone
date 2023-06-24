'use client';

import PlayerContent from './PlayerContent';

import useGetSongById from 'hooks/useGetSongById';
import useSongById from 'hooks/useGetSongById';
import useLoadImage from 'hooks/useLoadImage';
import useLoadSongUrl from 'hooks/useLoadSongUrl';
import usePlayer from 'hooks/usePlayer';

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 h-[80px] w-full bg-black px-4 py-2">
      <PlayerContent song={song} songUrl={songUrl} key={songUrl} />
    </div>
  );
};

export default Player;

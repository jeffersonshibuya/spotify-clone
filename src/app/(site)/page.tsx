import Header from 'components/Header';
import ListItem from 'components/ListItem';

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="tgext-white text-3xl font-semibold">Welcome back!</h1>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ListItem
              name="Liked Songs"
              href="liked"
              image="/images/liked.png"
            />
          </div>
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest Songs</h1>
        </div>
        <div>List of Songs!</div>
      </div>
    </div>
  );
}

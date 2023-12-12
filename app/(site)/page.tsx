import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  const getSystemTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };

  const returnGreetingAccordingToTime = () => {
    const time = getSystemTime();
    const hour = time.split(":")[0];

    if (Number(hour) >= 0 && Number(hour) < 12) {
      return "Good morning!";
    } else if (Number(hour) >= 12 && Number(hour) < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  }

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-950">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">{returnGreetingAccordingToTime()}</h1>
          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ListItem
              image="/images/liked.png"
              name="Favorite songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="px-6 mt-2 mb-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Recently added</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}

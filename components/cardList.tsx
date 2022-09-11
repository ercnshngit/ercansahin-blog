type Data = {
  id: number;
  title: string;
};

export default function CardList({ datas }: { datas: Data[] }) {
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-4 w-full p-4 md:min-w-[700px] md:w-auto">
      {datas &&
        datas.map((data) => {
          return (
            <div
              key={data.id}
              className="p-1 text-black duration-1000 dark:text-white basis-32 md:basis-56 grow rounded-xl border-6 bg-gradient-to-br dark:from-indigo-700 from-indigo-400 via-cyan-300 dark:via-cyan-500 dark:to-purple-600 to-purple-400 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-on click-effect "
            >
              <div className="flex flex-row items-center justify-between h-full p-4 rounded-lg md:px-6 bg-neutral-100 dark:bg-neutral-900">
                <h3 className="text-2xl font-bold md:text-lg">{data.title}</h3>
                <span className="text-2xl font-bold md:text-lg">&gt;</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

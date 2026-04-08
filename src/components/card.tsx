export const Card = (props: { img: string; title: string; body: string }) => {
  return (
    <div className="rounded-3xl text-center m-10 p-4 gap-4 flex flex-col w-170 bg-gray-300 hover:shadow-md duration-300">
      <h2 className="text-3xl font-bold">{props.title}</h2>
      <div className="flex flex-row gap-10 justify-center">
        <img className="max-w-xs rounded-xl" src={props.img} />
        <p className="">{props.body}</p>
      </div>
    </div>
  );
};

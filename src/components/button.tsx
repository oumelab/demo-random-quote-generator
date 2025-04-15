import Icon from "./icon";

export default function Button({refetchQuote}:{refetchQuote:()=>Promise<void>}) {
  return (
    <button onClick={refetchQuote} className="w-fit px-7 py-3 flex items-center justify-center rounded-xl bg-black text-white cursor-pointer hover:bg-zinc-800">
      <Icon className="inline-block w-5 h-auto fill-white mr-2" />
      Generate
    </button>
  );
}

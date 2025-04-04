import Icon from "./components/icon";

export default function App() {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold text-center">
        Random Quotes Generator
      </h1>
      <p className="w-fit mt-10 mx-auto text-zinc-600">
        有名なプログラマの格言が、ランダムに表示されます。
        <br />
        先人の知恵に触れて、モチベーションを高めましょう！
      </p>
      <div className="w-fit mt-8 mx-auto">
        <button className="w-fit px-7 py-3 flex items-center justify-center rounded-xl bg-black text-white cursor-pointer hover:bg-zinc-800">
          <Icon className="inline-block w-5 h-auto fill-white mr-2" />
          Generate
        </button>
      </div>
      <div className="relative max-w-2xl min-h-96 sm:aspect-video mx-auto mt-8 bg-gradient-to-tl from-blue-950 to-blue-800 text-white rounded-xl p-8 sm:p-11 grid place-items-center">
        <p className="absolute top-10 left-10 size-16 rounded-full grid place-items-center bg-blue-200 text-3xl">💬</p>
        <div className="flex flex-col items-center justify-center gap-15 mt-10">
          <p>AI is a fundamental risk to the existence of human civilization.</p>
          <p>by Elon Musk</p>
        </div>
      </div>
      <footer className="py-10 text-center">
        <small>Created by{" "}<a href="#" className="text-blue-700">@your-handle</a>{" "}&copy;{" "}{new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}
import {useState} from "react";
import Button from "./components/button";
import Footer from "./components/footer";
import QuotesCard from "./components/quotes-card";
import {type Quote} from "./lib";
import {fetchRandomQuote} from "./lib";

export default function App() {
  const [quotePromise, setQuotePromise] = useState<Promise<Quote>>(
    fetchRandomQuote()
  );

  const refetchQuote = async () => {
    setQuotePromise(fetchRandomQuote());
  };

  return (
    <div className="w-fit mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold text-center">
        Random Quotes Generator
      </h1>
      <p className="w-fit mt-10 mx-auto text-zinc-600">
        有名なプログラマの格言が、ランダムに表示されます。
        <br />
        先人の知恵に触れて、モチベーションを高めましょう！
      </p>
      <div className="w-fit mt-8 mx-auto">
        <Button refetchQuote={refetchQuote} />
      </div>
      <div className="relative max-w-2xl min-h-96 sm:aspect-video mx-auto mt-8 bg-gradient-to-tl from-blue-950 to-blue-800 text-white rounded-xl p-8 sm:p-11 grid place-items-center">
        <p className="absolute top-10 left-10 size-16 rounded-full grid place-items-center bg-blue-200 text-3xl">
          💬
        </p>
        <div className="flex flex-col items-center justify-center gap-15 mt-10">
          <QuotesCard quotePromise={quotePromise} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

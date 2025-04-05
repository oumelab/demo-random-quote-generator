import { useEffect, useState } from "react";
import Button from "./components/button";
import Footer from "./components/footer";
import QuotesCard from "./components/quotes-card";
import { fetchRandomQuote, type Quote } from "./lib";

export default function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchRandomQuote = async () => {
    setIsLoading(true);
    const quote = await fetchRandomQuote();
    setQuote(quote);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomQuote();
    let active = true;
    fetchRandomQuote().then((quote) => {
      if (active) {
        setQuote(quote);
      }
    });
    return () => {
      active = false;
    };
  }, []);

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
        <Button handleFetchRandomQuote={handleFetchRandomQuote} />
      </div>
      <QuotesCard quote={quote} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
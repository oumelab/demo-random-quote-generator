import { type Quote } from "../lib";
export default function QuotesCard({ quote, isLoading }: { quote: Quote | null, isLoading: boolean }) {


  return (
    <div className="relative max-w-2xl min-h-96 sm:aspect-video mx-auto mt-8 bg-gradient-to-tl from-blue-950 to-blue-800 text-white rounded-xl p-8 sm:p-11 grid place-items-center">
      <p className="absolute top-10 left-10 size-16 rounded-full grid place-items-center bg-blue-200 text-3xl">
        💬
      </p>
      <div className="flex flex-col items-center justify-center gap-15 mt-10">
        {/* <p>AI is a fundamental risk to the existence of human civilization.</p>
        <p>by Elon Musk</p> */}
        {!quote || isLoading ? (
          <p>Loading...</p>
        )
        : (
          <>
          <p>{quote?.quote}</p>
          <p>by {quote?.author}</p>
          </>
        )}
      </div>
    </div>
  );
}
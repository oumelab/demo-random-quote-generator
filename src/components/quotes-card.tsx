import {use, Suspense} from "react";
import { type Quote } from "../lib";
export default function QuotesCard({quotePromise}: {quotePromise: Promise<Quote>}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <QuotesContent quotePromise={quotePromise} />
    </Suspense>
  );
}
function QuotesContent({quotePromise} : {quotePromise: Promise<Quote>}) {
 const quoteData = use<Quote>(quotePromise);
  return (
    <>
      <p>{quoteData.quote}</p>
      <p>by {quoteData.author}</p>
    </>
  );
}
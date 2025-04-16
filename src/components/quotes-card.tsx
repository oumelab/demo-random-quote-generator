import {use, Suspense} from "react";
import {type Quote} from "../lib";
import {ErrorBoundary} from "react-error-boundary";
export default function QuotesCard({
  quotePromise,
}: {
  quotePromise: Promise<Quote>;
}) {
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <QuotesContent quotePromise={quotePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
function QuotesContent({quotePromise}: {quotePromise: Promise<Quote>}) {
  const quoteData = use<Quote>(quotePromise);
  return (
    <>
      <p>{quoteData.quote}</p>
      <p>by {quoteData.author}</p>
    </>
  );
}

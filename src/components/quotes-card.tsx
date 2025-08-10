import {use, Suspense} from "react";
import {type Quote} from "../lib";
import {ErrorBoundary} from "react-error-boundary";
export default function QuotesCard({
  quotePromise,
}: {
  quotePromise: Promise<Quote>;
}) {
  return (
    <ErrorBoundary
      fallback={
        <div className="w-full space-y-5 mt-10 text-center">
          <h3 className="text-2xl font-bold text-red-500">Error</h3>
          <p>再読み込みするか、暫く経ってから再度お試しください。</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="w-fit mx-auto px-7 py-2 flex items-center justify-center rounded-xl bg-black text-white cursor-pointer hover:bg-zinc-800"
          >
            再読み込み
          </button>
        </div>
      }
    >
      <Suspense
        fallback={
          <div role="status" className="w-full space-y-15 mt-10">
            <div className="animate-pulse">
              <p className="w-full h-4 bg-gray-200/30 rounded-full">
                <span className="sr-only">Loading...</span>
              </p>
              <p className="mt-3 w-[60%] h-4 bg-gray-200/30 rounded-full"></p>
            </div>
            <p className="w-36 h-4 mx-auto bg-gray-100/30 rounded-full animate-pulse"></p>
          </div>
        }
      >
        <QuotesContent quotePromise={quotePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
function QuotesContent({quotePromise}: {quotePromise: Promise<Quote>}) {
  const quoteData = use<Quote>(quotePromise);
  return (
    <div className="w-full space-y-15 mt-10">
      <p className="w-fit mx-auto">{quoteData.quote}</p>
      <p className="text-center">by {quoteData.author}</p>
    </div>
  );
}

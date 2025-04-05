
export type Quote = {
  author: string;
  quote: string;
};

export const fetchRandomQuote = async (): Promise<Quote> => {
  const response = await fetch(
    "https://strangerthingsquotes.shadowdev.xyz/api/quotes"
    // "https://programming-quotesapi.vercel.app/api/random"
);
  const data = await response.json();
  return {
    author: data[0].author,
    quote: data[0].quote,
  };

};
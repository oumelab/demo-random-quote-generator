
export type Quote = {
  author: string;
  quote: string;
};

const BASE_URL = "https://b13o.github.io/tech-quotes-api";

export const fetchRandomQuote = async (): Promise<Quote> => {
  const id = Math.floor(Math.random() * 100) + 1;
  const response = await fetch(
    `${BASE_URL}/api/quotes/${id}`
    // "https://programming-quotesapi.vercel.app/api/random"
);
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

  const data = await response.json();
  return data;
};
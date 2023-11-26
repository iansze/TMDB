export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  original_name?: string;
};

export type AuthFormType = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  uid: string;
};

export type PriceData = {
  currency: string;
  id: string;
  interval: string;
  unit_amount: number;
};

export type SubscriptionPlan = {
  active: boolean;
  description: string;
  name: string;
  prices: { [priceId: string]: PriceData };
};

export type SubscriptionData = {
  role: string;
  current_period_end: number;
  current_period_start: number;
};

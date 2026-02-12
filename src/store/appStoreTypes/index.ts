export interface authors {
  id: number;
  name: string;
  birth_year?: number;
  death_year?: number;
  webpage?: string;
}

export interface BookFormats {
  "application/epub+zip"?: string;
  "application/octet-stream"?: string;
  "application/rdf+xml"?: string;
  "application/x-mobipocket-ebook"?: string;
  "application/zip"?: string;
  "text/html"?: string;
  "text/html; charset=utf-8"?: string;
  "text/plain"?: string;
  "text/plain; charset=us-ascii"?: string;
  "text/plain; charset=utf-8"?: string;
  [key: string]: string | undefined;
}

export interface Book {
  id: number;
  title: string;
  authors: authors[];
  subjects: string[];
  bookshelves: string[];
  formats: BookFormats;
  download_count: number;
  issued: string;
  summary: string;
  reading_ease_score: string;
  cover_image: string;
  downloadedAt?: string;
}

export interface LibraryState {
  recomendedBook: Book[] | null;
  categoryBooks: Book[] | null;
  Searchedbooks?: Book[] | null;
  detailedBook?: Book;
  status: string;
  searchStatus: string;
  oneBookStatus: string;
  error: string | null;
}

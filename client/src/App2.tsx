import { useEffect, useState } from "react";

import Select from "./components/Select/Select";

import { SelectOption } from "./models/Select";

import { useGetBooksQuery } from "./store/book/apiSlice";

export default function App2() {
  const [value1, setValue1] = useState<SelectOption[]>([]);
  const [value2, setValue2] = useState<SelectOption | undefined>(undefined);
  const [options, setOptions] = useState<SelectOption[]>([]);

  const { data: books, error, isLoading } = useGetBooksQuery();

  useEffect(() => {
    if (books && books.length > 0) {
      const options = books?.map((book) => ({
        label: book.title,
        value: book.id,
      }));
      setOptions(options);
    }
  }, [books]);

  // console.log("options:", options);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching books.</div>;

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
}

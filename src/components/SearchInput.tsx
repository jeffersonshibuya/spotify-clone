'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Input from './Input';

import useDebounce from 'hooks/useDebounce';
import queryString from 'query-string';

const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState('');
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debounceValue
    };

    const url = queryString.stringifyUrl({
      url: '/search',
      query: query
    });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <Input
      placeholder="What do you want listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;

import React, { FC, useState } from 'react';
import './App.css';



const App: FC<AppProps> = ({sendSearchQuery}) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
  }

  const search = () => {

  }
  return (
    <div>
      <input value={searchValue} onChange={onSearchInput} name="search" type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default App;

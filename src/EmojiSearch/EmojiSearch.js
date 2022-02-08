import React, { useEffect, useState } from "react";
import "./EmojiSearch.css";
import EmojiData from "./Emoji.json";
function EmojiSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div>
      <center>
        <h1 className="h1">Emoji Search</h1>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </center>
      {data.map(emoji=>
      <div class="card">
        <div class="card-body" onClick={() => {
            navigator.clipboard.writeText(emoji.symbol);
            alert('Emoji copy');
            }}>
            {emoji.symbol} {emoji.title}
        </div>
      </div>
      )}
    </div>
  );
}

export default EmojiSearch;

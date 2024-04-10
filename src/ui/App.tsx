import * as React from "react";

function QueryViewer() {
  const [data, setData] = React.useState({});
  const queryRef = React.useRef<HTMLInputElement>();

  const handleClick = async () => {
    // put in call to askModel here and get result back
    const query = queryRef.current?.value;
    if (query === undefined || query === "") return;
    const res = await window.api.runSQL(query);
    setData(res);
  };

  return (
    <div className="queryviewer">
      <input type="text" ref={queryRef} />
      <button onClick={handleClick}>Query</button>
      <pre>
        {JSON.stringify(data, (k, v) =>
          typeof v === "bigint" ? v.toString() : v
        )}
      </pre>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>DuckDB query</h1>
      <p>Enter a SQL query to be passed to the DuckDB backend.</p>
      <p>
        The default database has the{" "}
        <span style={{ fontFamily: "monospace" }}>mtcars</span> dataset.
      </p>
      <pre>SELECT * FROM mtcars</pre>
      <QueryViewer />
    </div>
  );
}

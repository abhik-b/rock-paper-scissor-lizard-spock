import Head from "next/head";
import { useState } from "react";
import { Header } from "../components/Header";
import { Play } from "../components/Play";
import { Rules } from "../components/Rules";
import { Results } from "../components/Results";

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [score, setScore] = useState(0);

  function changeMode(event: React.MouseEvent) {
    event.preventDefault();
    setAdvancedMode(!advancedMode);
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header advanced={advancedMode} score={score} />
      <footer>
        <div onClick={changeMode} className="modes">
          {advancedMode ? "Normal" : "Advanced"} Mode
        </div>
        <div className="rules" onClick={() => setOpen(!open)}>
          Rulles
        </div>
      </footer>
      {selected >= 0 ? (
        <Results
          advanced={advancedMode}
          selected={selected}
          setselected={(value) => setSelected(value)}
          setscore={setScore}
        />
      ) : (
        <Play
          setselected={(value) => setSelected(value)}
          advanced={advancedMode}
        />
      )}

      <Rules
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </div>
  );
}

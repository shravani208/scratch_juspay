import PreviewArea from "./components/PreviewArea";
import { createContext, useState } from "react";
import Playground from "./components/Playground";

export const GlobalContext = createContext();

function App() {
  const [data, setData] = useState({ groups: [], clicked: {} });

  return (
    <>
      <GlobalContext.Provider value={{ data, setData }}>
        <div className="bg-white">
          <div className="h-screen overflow-hidden flex flex-row  ">
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white	 border-t border-r border-neutral-600 rounded-tr-xl ">
              <Playground />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white	 border-t border-l border-neutral-600 rounded-tl-xl ml-2">
              <PreviewArea />
            </div>
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

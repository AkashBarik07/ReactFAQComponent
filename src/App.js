import FAQ from "./Components/FAQ";
import data from "./Data/faqData.json";

import "./styles.css";

export default function App() {
  return <FAQ data={data} />;
}

import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="light-theme">
        <h2>Accordion</h2>
        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;

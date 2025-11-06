import { Accordion } from "@szhsin/react-accordion";
import CustomAccordion, { AccordionItem } from "../CustomAccordion";

const Filter = () => {
  return (
    <div>
      {/* <CustomAccordion /> */}
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="What is Lorem Ipsum?" initialEntered>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;

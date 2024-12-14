import Button from "./Button";
import SectionHeader from "./SectionHeader";
import Row from "./Row";
import SectionContainer from "./SectionContainer";

import useWidth from "../hooks/useWidth";
import { useNavigate } from "react-router-dom";

function FAQs() {
  const width = useWidth();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/support");
  }

  return (
    <>
      <SectionContainer id="faq" className="mt-[120px] max-sm:mt-[80px]">
        <SectionHeader
          title="Frequently Asked Questions"
          paragraph="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        >
          <div className="mt-10 max-sm:mt-5">
            <Button className="h-[52px]" onClick={handleClick}>
              Ask a Question
            </Button>
          </div>
        </SectionHeader>
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          <div>
            <Row text="What is StreamVibe?" num={1} />
            <Row text="How much does StreamVibe cost?" num={2} />
            <Row text="What content is available on StreamVibe?" num={3} />
            <Row text="How can I watch StreamVibe?" num={4} />
          </div>
          <div>
            <Row text="How do I sign up for StreamVibe?" num={5} />
            <Row text="What is the StreamVibe free trial?" num={6} />
            {width >= 768 && (
              <>
                <Row
                  text="How do I contact StreamVibe customer support?"
                  num={7}
                />
                <Row text="What are the StreamVibe payment methods?" num={8} />
              </>
            )}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default FAQs;

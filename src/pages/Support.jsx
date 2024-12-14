import WelcomeSupport from "../features/support/WelcomeSupport";
import SupportForm from "../features/support/SupportForm";
import FAQs from "../ui/Faqs";

export default function Support() {
  return (
    <>
      <div className="mt-[100px] flex gap-[50px] max-lg:flex-col max-md:mt-[40px]">
        <WelcomeSupport />
        <SupportForm />
      </div>
      <FAQs />
    </>
  );
}

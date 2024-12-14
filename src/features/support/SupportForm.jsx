import Input from "./Input";
import InputRow from "./InputRow";
import DropDownList from "../../ui/DropDownList";
import CheckInput from "./CheckInput";
import Button from "../../ui/Button";
function SupportForm() {
  return (
    <>
      <form className="grid w-full grid-cols-2 gap-x-5 gap-y-10 rounded-[10px] border border-black-shade-5 bg-black-shade-1 p-10 max-sm:gap-y-5 max-sm:p-6">
        <InputRow label="First Name">
          <Input id="First Name" placeHolder="Enter First Name" />
        </InputRow>

        <InputRow label="Last Name">
          <Input id="Last Name" placeHolder="Enter Last Name" />
        </InputRow>

        <InputRow label="Email">
          <Input id="Email" placeHolder="Enter Your Email" />
        </InputRow>

        <InputRow label="Phone Number">
          <div className="flex w-full items-center gap-3">
            <DropDownList />
            <Input id="Phone Number" placeHolder="Enter Phone Number" />
          </div>
        </InputRow>

        <InputRow label="Message" className="] col-span-2">
          <textarea
            className="h-[129px] w-full resize-none rounded-[10px] border border-black-shade-5 bg-black-shade-2 p-4 focus:outline-none"
            placeholder="Enter your Message"
          ></textarea>
        </InputRow>

        <div className="col-span-2 flex w-full max-sm:flex-col max-sm:gap-5">
          <div className="flex items-center gap-2">
            <CheckInput />
            <label htmlFor="check" className="cursor-pointer">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <Button
            className={"ml-auto h-[49px] w-[150px] px-0 max-sm:w-full"}
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}

export default SupportForm;

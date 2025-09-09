import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };

  const handleSubmit = async () => {
    let valid = true;
    let newFormError: { [key: string]: string } = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);

    if (valid) {
      try {
       await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID!,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
  },
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
);


        toast.success("Message sent successfully!", { duration: 4000 });
        setFormData(form);
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again.", { duration: 4000 });
      }
    } else {
      toast.error("Please fix the errors before submitting!", { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#3B82F650] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>
        <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name} />
        <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email} />
        <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone} />
        <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message} />
        <Button
          fullWidth
          onClick={handleSubmit}
          rightSection={<IconArrowRight size={20} />}
          className="!text-bgColor !font-bold"
          variant="filled"
          size={btn}
          radius="lg"
          color="#3B82F6"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;

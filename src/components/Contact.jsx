import React /* useState */ from "react";

const Contact = () => {
  // const [display, setDiplay] = useState(false);
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0b0b0b] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/11e9ca7a-37a4-4e4c-b075-0486e0700519"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0e6067] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - napstakid@gmail.com
          </p>
        </div>
        <input
          className="bg-[#f5f5f5] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#f5f5f5]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#f5f5f5] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#0e6067] hover:border-[#0e6067] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

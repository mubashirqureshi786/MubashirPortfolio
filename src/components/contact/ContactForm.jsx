import { styled } from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqwywrg");
  if (state.succeeded) {
    alert("Success");
  }

  const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    .name-inputs {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .input-name-phone {
      width: 16rem;
      height: 3rem;
      padding: 1.1rem 1.4rem;
    }
    input {
      height: 3rem;
      padding: 1.1rem 1.4rem;
      border-radius: 8px;
      border: 1px solid #9c9c9c;
      outline: none;
      font-size: 1rem;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      &:focus {
        border: 1px solid #f3c745;
      }
    }
    textarea {
      height: 8rem;
      border-radius: 8px;
      border: 1px solid #d4d7e5;
      outline: none;
      padding: 1.1rem 1.4rem;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      font-size: 1rem;

      &:focus {
        border: 1px solid #f3c745;
      }
    }
  `;
  const Button = styled.button`
    width: 100%;
    height: 3rem;
    padding: 1.1rem 1.4rem;
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    border: 1px solid #f3c745;
    background-color: #f3c745;
  `;
  return (
    <ContactForm
      action="https://formspree.io/f/meqwywrg"
      onSubmit={handleSubmit}
    >
      <div className="name-inputs">
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          autoComplete="off"
          className="input-name-phone"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          required
          autoComplete="off"
          className="input-name-phone"
        />
      </div>
      <input type="email" placeholder="Email" required />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
        placeholder="Enter your Message"
      ></textarea>
      <Button type="submit" disabled={state.submitting}>
        Contact Us
      </Button>
    </ContactForm>
  );
};

export default ContactForm;

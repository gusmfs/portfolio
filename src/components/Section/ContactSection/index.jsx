import style from "./style.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
function ContactSection() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm('service_j72g732', 'template_ed89p1d', form.current, {
        publicKey: 'YXJTvxIW9lIiHBFCs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Email enviado com sucesso!")

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Não foi possível enviar o email!")
        },
      );
    };
    
      
    return (
    <section className={style.section} id="contactSection">
      <div className="container">
        <div className={style.contactContainer}>
          <div className={style.contact}>
            <h3 className={style.title}>Contato</h3>
            <form ref={form} action="#" onSubmit={sendEmail}>
                <div className={style.inputContainer}>
                        <div className={style.inputBox}>
                            <input type='reset' placeholder="Nome" id="name" className={style.item} autoComplete="off" name="from_name"/>
                            <input type='reset' placeholder="Email" id="email" className={style.item} autoComplete="off" name="from_email"/>
                            <input type='reset' placeholder="Assunto" id="subject" className={style.item} autoComplete="off" name="subject"/>
                        </div>
                </div>
                <div className={style.footerContact}>
                    <div className={style.messageBox}>
                        <textarea name="message" id="message"  cols="30" rows="10" placeholder="Mensagem" className={style.message} autoComplete="off"></textarea>
                    </div>
                    <div className={style.btnprimary}>
                        <button type="submit" className={style.btn}>Enviar</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

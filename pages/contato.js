import React, { useState } from 'react';
import axios from 'axios';
import Header from "../../components/header.js"
import styles from "../styles/contato.module.css"

export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        await axios.post('./api/contact', { name, email, message });
        console.log('Formulário enviado com sucesso!');
        // Lógica adicional após o envio do formulário, se necessário
      } catch (error) {
        console.error('Ocorreu um erro ao enviar o formulário.', error);
        // Lógica para tratar erros no envio do formulário
      }
    };

    return (
    <>
      <Header />
      <main>
        <form className={styles.contato}>
          <h1>Contato</h1>
          <div className={styles.campos}>
            <label htmlFor="name"></label>
            <input type="text" name="name" placeholder="Nome" className={styles.inputs} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.campos}>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="E-mail" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.campos}>
            <label htmlFor="message"></label>
            <textarea name="message" placeholder="Mensagem" rows="10" className={styles.inputs} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </main>
    </>
      
    )
  }
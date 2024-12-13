import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, subject, message } = await request.json();

    // Configurazione del trasporto email
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL, // Il tuo indirizzo email
        pass: process.env.MY_PASSWORD, // La password o App Password
      },
    });

    // Configurazione dell'email
    await transport.sendMail({
      from: `"${name}" <${email}>`, // Mittente (utente)
      to: process.env.MY_EMAIL, // Destinatario (te stesso)
      subject: subject,
      html: `<p>Hai ricevuto un nuovo messaggio:</p>
             <p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Messaggio:</strong></p>
             <p>${message}</p>`,
    });

    // Risposta di successo
    return NextResponse.json({ message: "Email inviata con successo." });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    return NextResponse.json(
      { error: "Errore durante l'invio dell'email. Riprova più tardi." },
      { status: 500 }
    );
  }
}

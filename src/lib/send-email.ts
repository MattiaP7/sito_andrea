import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Errore durante l'invio dell'email");
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.error(err);
      alert(
        "Errore durante l'invio dell'email. Controlla la console per dettagli."
      );
    });
}

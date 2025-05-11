import Link from "next/link";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sezione "Chi sono" */}
          <div>
            <h1 className="text-xl font-semibold mb-4 underline">Chi sono</h1>
            <p className="text-sm text-gray-400">
              Sono Andrea Corazza, geometra professionista iscritto al Collegio
              dei Geometri di Ferrara dal 2006, specializzato in sicurezza nei
              cantieri, certificazione energetica, acustica edilizia e
              ricostruzione post-sismica. Con una formazione continua che spazia
              dall'autocad alla gestione del rischio amianto, ho maturato
              esperienze significative come coordinatore della sicurezza in
              progetti pubblici e privati, tra cui scuole, edifici industriali e
              interventi PNRR. La mia carriera è segnata da un forte impegno
              nella ricostruzione post-terremoto, sia in Emilia (2012) che nel
              Centro Italia (2016-2024), dove ho coordinato cantieri e redatto
              pratiche tecniche. Nel 2024 ho conseguito una Laurea triennale in
              Operatore dei Servizi Giuridici (108/110) con una tesi sulla
              sicurezza sul lavoro, ampliando le mie competenze in ambito
              normativo. Oggi affianco all'attività di libero professionista il
              ruolo di docente formatore in sicurezza sul lavoro, con
              l'obiettivo di coniugare pratica e conoscenza per un'edilizia più
              sicura e sostenibile.
            </p>
          </div>

          {/* per dare spazio */}
          <div>
            <h1 className="text-xl font-semibold mb-4 underline"></h1>
            <ul className="space-y-2"></ul>
          </div>

          {/* Sezione "Contatti" */}
          <div>
            <h1 className="text-xl font-semibold mb-4 underline">Contatti</h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 hover:text-blue-400">
                <Mail className="w-5 h-5" />
                <Link
                  target="_blank"
                  href="mailto:studio.geomcorazza@gmail.com"
                  className="text-sm"
                >
                  studio.geomcorazza@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-blue-400">
                <PhoneCall className="w-5 h-5" />
                <Link
                  target="_blank"
                  href="tel:+393391366762"
                  className="text-sm"
                >
                  +39 339 1366762
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-blue-400">
                <MapPin className="w-5 h-5" />
                <Link
                  target="_blank"
                  className="text-sm"
                  href="https://maps.app.goo.gl/8rYPJJrV8cP66yrD7"
                >
                  via Risorgimento 46/A, 44047 Terre del Reno (FE)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy;{new Date().getFullYear()} Andrea Corazza. Tutti i diritti
            riservati. Sito creato da:{" "}
            <Link
              href="https://github.com/MattiaP7/"
              target="_blank"
              className="text-sm text-gray-400 hover:text-blue-400"
            >
              Mattia Pirazzi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

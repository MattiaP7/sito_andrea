import Link from "next/link";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sezione "Chi sono" */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline">Chi sono</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              voluptatibus asperiores amet cupiditate? Excepturi nihil ad
              fugiat? Corrupti perspiciatis sequi neque sed ut sit rerum
              deleniti mollitia, dicta reiciendis quis odio eaque.
              Exercitationem excepturi error soluta? Corporis quasi ipsum quis!
            </p>
          </div>

          {/* Sezione "Contatti" */}
          {/* Sezione "Contatti" */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline">Contatti</h3>
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

          {/* Contatti */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline">Link utili</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-blue-400"
                >
                  DA AGGIUNGERE
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

import {
  GraduationCap,
  Award,
  Home,
  School,
  Shield,
  Landmark,
  Scale,
  ClipboardList,
  Wrench,
  Lightbulb,
} from "lucide-react";

export const timelineItems = [
  {
    date: "1998",
    title: "Diploma di Geometra",
    description: "Conseguito presso Istituto Tecnico 'G.B. Aleotti' di Ferrara",
    icon: (
      <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-300" />
    ),
  },
  {
    date: "2000-2002",
    title: "Formazione Professionale Iniziale",
    description:
      "Corsi in AutoCAD, sistemi edilizi, amministrazione condominiale e gestione rischio amianto",
    icon: <School className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2006",
    title: "Iscrizione all'Albo e Specializzazioni",
    description:
      "Iscritto al Collegio dei Geometri di Ferrara. Specializzazioni in sicurezza cantieri, sistemi FRP e acustica edilizia",
    icon: <Shield className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2009",
    title: "Certificazione Energetica",
    description:
      "Diventa Certificatore Energetico abilitato dalla Regione Emilia-Romagna dopo corso di 72 ore",
    icon: <Award className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2012-2016",
    title: "Esperienze Post-Terremoto",
    description:
      "Coordinamento sicurezza per ricostruzione scuole, rilievi topografici e gestione pratiche MUDE/SFINGE per ricostruzione post-sisma",
    icon: <Home className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2017",
    title: "Tecnico Specializzato Acustica",
    description:
      "Abilitazione come Tecnico in Acustica dopo superamento esame finale",
    icon: (
      <ClipboardList className="h-4 w-4 text-blue-600 dark:text-blue-300" />
    ),
  },
  {
    date: "2020-2023",
    title: "Esperienza Pubblica",
    description:
      "Tecnico Istruttore presso Comune di Modena per monitoraggio cantieri Ducato Estense",
    icon: <Landmark className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2022-2024",
    title: "Ricostruzione Centro Italia",
    description:
      "Coordinatore sicurezza per interventi a Tolentino e Camerino (MC) post-sisma 2016",
    icon: <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2024",
    title: "Laurea e Nuove Certificazioni",
    description:
      "Laurea triennale in Operatore dei Servizi Giuridici e abilitazione come Formatore per la Sicurezza",
    icon: <Scale className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
  {
    date: "2024",
    title: "Progetti PNRR",
    description:
      "Coordinatore sicurezza per interventi di relamping e progetti PNRR in comuni di Bologna, Verona e Mantova",
    icon: <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-300" />,
  },
];

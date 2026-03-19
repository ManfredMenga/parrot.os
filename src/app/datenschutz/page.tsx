import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Leitkraft',
  description: 'Datenschutzerklärung der Leitkraft Website.',
};

const sections = [
  {
    title: '1. Datenschutz auf einen Blick',
    content: (
      <>
        <h3 className="text-sm font-bold text-white mb-2">Allgemeine Hinweise</h3>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
          Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Datenerfassung auf dieser Website</h3>
        <p className="mb-4">
          <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>
        <p className="mb-4">
          <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer
          Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
          (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>
        <p className="mb-4">
          <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
          Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
          geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
          Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </p>
        <p>
          <strong className="text-white">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </>
    ),
  },
  {
    title: '2. Hosting',
    content: (
      <>
        <p className="mb-4">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Externes Hosting</h3>
        <p className="mb-4">
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
          und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p className="mb-4">
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mb-4">
          Wir setzen folgenden Hoster ein:<br /><br />
          Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789, USA
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Auftragsverarbeitung</h3>
        <p>
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
          geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
          Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
      </>
    ),
  },
  {
    title: '3. Allgemeine Hinweise und Pflichtinformationen',
    content: (
      <>
        <h3 className="text-sm font-bold text-white mb-2">Datenschutz</h3>
        <p className="mb-4">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
          dieser Datenschutzerklärung.
        </p>
        <p className="mb-4">
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
        <p className="mb-4">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          Jonathan Castro<br />
          Irminswindstraße 21<br />
          94094 Rotthalmünster, Deutschland<br /><br />
          E-Mail: jonathan@leitkraft.de
        </p>
        <p className="mb-4">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
          die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Speicherdauer</h3>
        <p className="mb-4">
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Rechtsgrundlagen der Datenverarbeitung</h3>
        <p className="mb-4">
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
          Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich
          sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
          berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Widerruf Ihrer Einwilligung</h3>
        <p className="mb-4">
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h3>
        <p className="mb-4">
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit
          das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen. Werden Ihre personenbezogenen Daten verarbeitet,
          um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung
          einzulegen.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Beschwerderecht</h3>
        <p className="mb-4">
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Recht auf Datenübertragbarkeit</h3>
        <p className="mb-4">
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
          automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Auskunft, Berichtigung und Löschung</h3>
        <p className="mb-4">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Recht auf Einschränkung der Verarbeitung</h3>
        <p className="mb-4">
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
          bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </>
    ),
  },
  {
    title: '4. Datenerfassung auf dieser Website',
    content: (
      <>
        <h3 className="text-sm font-bold text-white mb-2">Cookies</h3>
        <p className="mb-4">
          Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf
          Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Cookies, die zur
          Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit.
          f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
        </p>
        <p className="mb-4">
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
          Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Kontaktformular</h3>
        <p className="mb-4">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p className="mb-4">
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
          bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <h3 className="text-sm font-bold text-white mb-2">Terminbuchung</h3>
        <p>
          Für die Online-Terminbuchung werden Ihre eingegebenen Daten (Name, E-Mail, Telefon) verarbeitet und
          in Google Calendar gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          zur Durchführung vorvertraglicher Maßnahmen.
        </p>
      </>
    ),
  },
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 h-12 flex justify-between items-center">
          <Link href="/" className="font-bold text-[15px] tracking-tight text-white flex items-center gap-2">
            <Image src="/images/logo-white.png" alt="Leitkraft" width={26} height={26} className="-mr-0.5" />
            Leitkraft
          </Link>
          <Link href="/" className="text-[13px] text-[#666] hover:text-white transition-colors">Zurück</Link>
        </div>
      </header>

      <section className="pt-32 pb-0 md:pt-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] mb-6">Rechtliches</p>
          <h1 className="text-fluid-section font-bold tracking-tight text-white mb-6">Datenschutz</h1>
          <div className="h-[1px] bg-[#1a1a1a]" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {sections.map((section, i) => (
            <div key={i} className="mb-12 last:mb-0">
              <div className="h-[1px] bg-[#1a1a1a] mb-8" />
              <h2 className="text-base font-bold text-white mb-4 tracking-tight">{section.title}</h2>
              <div className="text-[15px] text-[#999] leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}

          <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
            <p className="text-xs text-[#444]">
              Quelle: e-recht24.de
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

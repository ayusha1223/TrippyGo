import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const footerLinks = {
  company: [
    {
      key: "about",
      labelKey: "footer.links.about",
    },
    {
      key: "faq",
      labelKey: "footer.links.faq",
    },
    {
      key: "contact",
      labelKey: "footer.links.contact",
    },
  ],

  support: [
    {
      key: "insurance",
      labelKey: "footer.links.insurance",
    },
    {
      key: "privacy",
      labelKey: "footer.links.privacy",
    },
    {
      key: "terms",
      labelKey: "footer.links.terms",
    },
  ],
};

export default function Footer() {
  const { t } = useTranslation();
  const [selectedKey, setSelectedKey] = useState(null);

  const selectedContent = selectedKey
    ? {
        title: t(`footer.modals.${selectedKey}.title`),
        content: t(`footer.modals.${selectedKey}.content`),
      }
    : null;

  function openCard(key) {
    setSelectedKey(key);
  }

  function closeCard() {
    setSelectedKey(null);
  }

  useEffect(() => {
    if (!selectedKey) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeCard();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedKey]);

  return (
    <>
      <footer className="bg-[#00475E] text-white py-16 mt-20">
        <div
          className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2
                     md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              TrippyGo
            </h2>

            <p className="text-gray-300 leading-7">
              © 2026 TrippyGo. {t("footer.rights")}
              <br />
              {t("footer.tagline")}
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="uppercase font-semibold tracking-wider mb-4">
              {t("footer.company")}
            </h3>

            <ul className="space-y-3 text-gray-300">
              {footerLinks.company.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => openCard(item.key)}
                    className="hover:text-white transition text-left"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="uppercase font-semibold tracking-wider mb-4">
              {t("footer.support")}
            </h3>

            <ul className="space-y-3 text-gray-300">
              {footerLinks.support.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => openCard(item.key)}
                    className="hover:text-white transition text-left"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="uppercase font-semibold tracking-wider mb-4">
              {t("footer.connect")}
            </h3>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/30
                           flex items-center justify-center hover:bg-white
                           hover:text-[#00475E] transition"
              >
                F
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/30
                           flex items-center justify-center hover:bg-white
                           hover:text-[#00475E] transition"
              >
                I
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full border border-white/30
                           flex items-center justify-center hover:bg-white
                           hover:text-[#00475E] transition"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Information modal */}
      {selectedContent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
          onClick={closeCard}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                     flex items-center justify-center p-4"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative bg-white text-gray-700 rounded-2xl
                       shadow-2xl w-full max-w-3xl max-h-[85vh]
                       flex flex-col"
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between
                         border-b px-6 py-5 gap-5"
            >
              <h2
                id="footer-modal-title"
                className="text-2xl font-bold text-[#00475E]"
              >
                {selectedContent.title}
              </h2>

              <button
                type="button"
                onClick={closeCard}
                aria-label={t("footer.closeCard")}
                className="w-10 h-10 rounded-full text-3xl leading-none
                           text-gray-500 hover:text-white hover:bg-red-500
                           transition flex items-center justify-center
                           flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Modal content */}
            <div
              className="overflow-y-auto px-6 py-6 leading-7
                         whitespace-pre-line"
            >
              {selectedContent.content}
            </div>

            {/* Modal bottom */}
            <div className="border-t px-6 py-4 flex justify-end">
              <button
                type="button"
                onClick={closeCard}
                className="bg-[#00475E] text-white px-6 py-2.5
                           rounded-lg hover:bg-[#003747] transition"
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
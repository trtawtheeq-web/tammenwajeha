import { CarFront, ChevronLeft, ShieldCheck } from "lucide-react";

const INSURANCE_URL = "https://bcareksa.bcareksa.workers.dev/";

const insuranceOptions = [
  {
    id: "third-party",
    title: "التأمين ضد الغير",
    description: "تغطية مسؤوليتك تجاه الطرف الآخر",
    icon: ShieldCheck,
    appearance: "light",
  },
  {
    id: "comprehensive",
    title: "التأمين الشامل",
    description: "حماية أوسع لك ولسيارتك",
    icon: CarFront,
    appearance: "solid",
  },
] as const;

export default function Home() {
  return (
    <main className="insurance-page" dir="rtl">
      <section className="insurance-panel" aria-labelledby="insurance-heading">
        <header className="insurance-header">
          <div className="brand-symbol" aria-hidden="true">
            <ShieldCheck size={36} strokeWidth={1.9} />
          </div>
          <p className="insurance-eyebrow">تأمين سيارتك يبدأ من هنا</p>
          <h1 id="insurance-heading">اختر نوع التأمين</h1>
          <p className="insurance-subtitle">حدد التغطية المناسبة لك للمتابعة</p>
        </header>

        <nav className="insurance-options" aria-label="اختيار نوع تأمين السيارة">
          {insuranceOptions.map(({ id, title, description, icon: Icon, appearance }) => (
            <a
              key={id}
              className="insurance-option"
              href={INSURANCE_URL}
              aria-labelledby={`${id}-title`}
              aria-describedby={`${id}-description`}
            >
              <span className={`option-icon option-icon--${appearance}`} aria-hidden="true">
                <Icon size={30} strokeWidth={1.8} />
              </span>
              <span className="option-copy">
                <span className="option-title" id={`${id}-title`}>{title}</span>
                <span className="option-description" id={`${id}-description`}>{description}</span>
              </span>
              <ChevronLeft className="option-arrow" size={17} strokeWidth={1.6} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}

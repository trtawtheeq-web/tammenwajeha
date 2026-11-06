# واجهة تأمين سيارتك

صفحة عربية باتجاه من اليمين إلى اليسار، مطابقة للصورة المرجعية، لاختيار التأمين ضد الغير أو التأمين الشامل. كلا الخيارين ينتقل إلى الرابط الذي حدده مالك المشروع: https://bcareksa.bcareksa.workers.dev/.

هذه الواجهة ثابتة، ولا تجمع بيانات الزوار، ولا تحتاج خادمًا أو قاعدة بيانات أو مفاتيح API. الخط العربي Cairo والأيقونة محفوظان محليًا. ملفات الخادم الموجودة من القالب الأصلي لا تدخل في نشر الواجهة الثابتة على Netlify.

## النشر على Netlify من GitHub

في Netlify اختر **Add new project → Import an existing project → GitHub**، ثم اختر مستودع **tammenwajeha** وفرع **main**. يمكن استخدام المستودع الخاص بعد منح Netlify صلاحية الوصول إليه.

ملف `netlify.toml` يحدد إعدادات البناء تلقائيًا:

- **Base directory:** جذر المستودع، ويُترك الحقل فارغًا.
- **Build command:** `pnpm build:static`.
- **Publish directory:** `dist/public`.
- **Node.js:** الإصدار 22.
- **pnpm:** الإصدار 10.18.0 المحدد في `package.json`.

لا تستخدم أمر `pnpm build` لهذا النشر، لأنه يبني الخادم أيضًا. ولا تضف مفاتيح مانوس أو ملفات `.env` إلى Netlify؛ الصفحة لا تحتاج أي أسرار لتعمل.

تتضمن الإعدادات إعادة كتابة مسارات التطبيق إلى `index.html` لدعم تطبيق React، مع استجابة 404 للمسار `/404`.

## التشغيل محليًا

باستخدام Node.js 22 وpnpm 10.18.0:

```bash
pnpm install --frozen-lockfile
pnpm dev:static
```

لبناء الملفات الثابتة:

```bash
pnpm build:static
```

ولفحص أنواع TypeScript:

```bash
pnpm check
```

## بنية المشروع

الواجهة في `client/src/pages/Home.tsx`، والتنسيق المتجاوب في `client/src/index.css`، والأصول والخطوط في `client/public/`. ينتج Vite الموقع في `dist/public/`. ملف `netlify.toml` مخصص لإعدادات نتليفاي.

## الترخيص والمراجع

خط Cairo مرخّص بموجب SIL Open Font License 1.1، ونص ترخيصه في `client/public/fonts/OFL.txt`. تفاصيل المصدر في `font-sources.md`.

إرشادات Netlify الرسمية: [Vite on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/).

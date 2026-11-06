# مصدر خط Cairo

تم جلب خط **Cairo** من موارد Google Fonts الرسمية لاستخدامه محليًا في واجهة عربية RTL. تعرض صفحة العائلة Cairo المصمم **Mohamed Gaber** وتدرجات الأوزان من 200 إلى 900، بينما يعرّف مورد CSS2 الرسمي الملفين أدناه كخط متغير بنطاق وزن `400 900`.

## الأصول المحلية

- `/home/ubuntu/tameena/client/public/fonts/Cairo-Arabic-wght.woff2`
  - نطاق Unicode العربي كما يحدده CSS2 الرسمي.
  - الحجم: 30,896 بايت.
  - SHA-256: `748022f50c427456ad66031e855349be3448ee1f05a5f1eb59574ebe0c686749`
- `/home/ubuntu/tameena/client/public/fonts/Cairo-Latin-wght.woff2`
  - نطاق Latin الأساسي كما يحدده CSS2 الرسمي.
  - الحجم: 33,820 بايت.
  - SHA-256: `82c13cbd1352d76e97c3d335caa912ae68fecdc3949a43cf8d149eb892384c1b`

كلا الملفين WOFF2 متغيران (`font-weight: 400 900`) ومنقولان من روابط `fonts.gstatic.com` التي يعيدها مورد Google Fonts CSS2 الرسمي. لم يُنزّل نطاق `latin-ext` لأنه ليس ضمن الأصلين المطلوبين.

## تعريفات `@font-face` المقترحة

```css
/* Cairo — Arabic subset */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url('/fonts/Cairo-Arabic-wght.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1,
    U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41,
    U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB,
    U+10E60-10E7E, U+10EC2-10EC7, U+10EC9-10EEE, U+10EF0-10EFF,
    U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24,
    U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B,
    U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F,
    U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B,
    U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A,
    U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E,
    U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9,
    U+1EEAB-1EEBB, U+1EEF0-1EEF1;
}

/* Cairo — Latin subset */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url('/fonts/Cairo-Latin-wght.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
    U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
    U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

يمكن استعمال `font-family: 'Cairo', sans-serif` مع `direction: rtl` في موضع التطبيق المناسب. يجب إبقاء تعريف Arabic قبل Latin كما في CSS أعلاه حتى يطابق المتصفح المحارف العربية مع subset العربي والمحارف اللاتينية مع subset Latin.

## المصادر والترخيص

1. صفحة العائلة الرسمية في Google Fonts: <https://fonts.google.com/specimen/Cairo>
2. مورد CSS2 الرسمي الذي حُدّدت منه روابط WOFF2 ونطاقات Unicode: <https://fonts.googleapis.com/css2?family=Cairo:wght@400..900&display=swap>
3. صفحة ترخيص Cairo الرسمية: <https://fonts.google.com/specimen/Cairo/license>
4. نص **SIL Open Font License 1.1** المشار إليه من صفحة Google Fonts: <https://openfontlicense.org/open-font-license-official-text/>

تنص صفحة الترخيص الرسمية على أن Cairo مرخّص بموجب SIL Open Font License, Version 1.1، بما يسمح بالتضمين وإعادة التوزيع مع البرمجيات، مع الالتزام بشروط OFL وعدم بيع ملفات الخط وحدها. يُرجى الاحتفاظ بنص الترخيص/إشعار حقوق النشر عند توزيع البرنامج وفق شروط الترخيص.

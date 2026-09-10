import type { Locale } from "@/lib/i18n/config";

export type NewsArticle = {
  slug: string;
  date: Record<Locale, string>;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  paragraphs: Record<Locale, string[]>;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "sebekemiz-boyuyur",
    date: {
      az: "15 iyul 2026",
      en: "15 July 2026",
      ru: "15 июля 2026",
    },
    category: { az: "ŞƏBƏKƏ", en: "NETWORK", ru: "СЕТЬ" },
    title: {
      az: "Şəbəkəmiz böyüyür: daha 6 yeni zal qoşuldu",
      en: "Our network is growing: 6 more gyms joined",
      ru: "Наша сеть растёт: подключились ещё 6 залов",
    },
    excerpt: {
      az: "Nərimanov, Yasamal və Xırdalanda yeni tərəfdaş zallar artıq tətbiqdə aktivdir.",
      en: "New partner gyms in Narimanov, Yasamal and Khirdalan are now live in the app.",
      ru: "Новые партнёрские залы в Нариманове, Ясамале и Хырдалане уже доступны в приложении.",
    },
    paragraphs: {
      az: [
        "FitNest şəbəkəsinə bu ay 6 yeni tərəfdaş zal qoşuldu. Nərimanov, Yasamal və Xırdalanda yerləşən zallar artıq tətbiqdə aktivdir.",
        "Abunəçilər mövcud paketlərlə bu zallara QR kodla daxil ola, məşq tarixçəsində ziyarətləri izləyə bilərlər.",
        "Yaxın həftələrdə daha çox məhəllədə yeni zallar əlavə olunacaq — tətbiqdə “Zallar” bölməsini yoxlayın.",
      ],
      en: [
        "Six new partner gyms joined FitNest this month. Locations in Narimanov, Yasamal and Khirdalan are already live in the app.",
        "Members can check in with QR using their current plan and track visits in workout history.",
        "More neighbourhoods will be added in the coming weeks — check the Gyms tab in the app.",
      ],
      ru: [
        "В этом месяце к FitNest присоединились ещё 6 партнёрских залов. Площадки в Нариманове, Ясамале и Хырдалане уже доступны в приложении.",
        "Подписчики могут входить по QR со своим текущим тарифом и видеть визиты в истории тренировок.",
        "В ближайшие недели появятся новые районы — следите за разделом «Залы» в приложении.",
      ],
    },
  },
  {
    slug: "mobil-tetbiq-yenilenmesi",
    date: {
      az: "22 avqust 2026",
      en: "22 August 2026",
      ru: "22 августа 2026",
    },
    category: { az: "YENİLİKLƏR", en: "UPDATES", ru: "ОБНОВЛЕНИЯ" },
    title: {
      az: "Mobil tətbiqin yeni versiyası yayımlandı",
      en: "A new version of the mobile app is live",
      ru: "Вышла новая версия мобильного приложения",
    },
    excerpt: {
      az: "İstifadəçilər üçün daha sürətli və rahat interfeys təmin edildi.",
      en: "The update brings a faster, simpler interface for members.",
      ru: "Обновление делает интерфейс быстрее и удобнее.",
    },
    paragraphs: {
      az: [
        "FitNest tətbiqinin son yeniləməsində istifadəçilərin ən çox istədiyi funksiya əlavə olundu: şəxsi məşq statistikası.",
        "Yeni “Fəaliyyət” bölməsində aylıq giriş sayınızı, ən çox ziyarət etdiyiniz zalları və həftəlik aktivlik trendinizi bir ekranda görə bilərsiniz. Qalan giriş limitiniz də burada aydın göstərilir.",
        "Yeniləmə App Store və Google Play-də artıq mövcuddur. Tətbiqi yeniləyin və öz irəliləyişinizi izləməyə başlayın.",
      ],
      en: [
        "The latest FitNest app update adds the most requested feature: personal workout stats.",
        "In the new Activity section you can see monthly check-ins, your most visited gyms and weekly trends on one screen, including remaining visit limits.",
        "The update is available on the App Store and Google Play. Update the app and start tracking your progress.",
      ],
      ru: [
        "В последнем обновлении FitNest появилась самая ожидаемая функция — личная статистика тренировок.",
        "В новом разделе «Активность» на одном экране видны месячные визиты, любимые залы, недельный тренд и оставшийся лимит входов.",
        "Обновление уже доступно в App Store и Google Play. Обновите приложение и следите за прогрессом.",
      ],
    },
  },
  {
    slug: "illik-konfrans",
    date: {
      az: "5 sentyabr 2026",
      en: "5 September 2026",
      ru: "5 сентября 2026",
    },
    category: { az: "TƏDBİRLƏR", en: "EVENTS", ru: "СОБЫТИЯ" },
    title: {
      az: "İllik konfrans 3 oktyabrda keçiriləcək",
      en: "The annual conference will take place on 3 October",
      ru: "Ежегодная конференция пройдёт 3 октября",
    },
    excerpt: {
      az: "Sənaye ekspertləri ilə görüş və yeni layihələrin təqdimatı.",
      en: "Meet industry experts and see new projects presented.",
      ru: "Встреча с экспертами отрасли и презентация новых проектов.",
    },
    paragraphs: {
      az: [
        "FitNest illik konfransı 3 oktyabrda keçiriləcək. Tərəfdaş zallar, korporativ müştərilər və komandamız bir araya gələcək.",
        "Gündəlikdə yeni məhsulların təqdimatı, şəbəkənin inkişafı və sənaye ekspertləri ilə panel sessiyaları var.",
        "İştirak üçün tətbiqdə və ya əlaqə ünvanımızdan qeydiyyat açıq olacaq.",
      ],
      en: [
        "FitNest’s annual conference will be held on 3 October, bringing partner gyms, corporate clients and our team together.",
        "The agenda includes new product launches, network growth and panel talks with industry experts.",
        "Registration will open in the app and via our contact email.",
      ],
      ru: [
        "Ежегодная конференция FitNest состоится 3 октября. Вместе будут партнёрские залы, корпоративные клиенты и наша команда.",
        "В программе — презентации продуктов, развитие сети и панели с экспертами отрасли.",
        "Регистрация откроется в приложении и по нашей контактной почте.",
      ],
    },
  },
  {
    slug: "payiz-endirim",
    date: {
      az: "12 oktyabr 2026",
      en: "12 October 2026",
      ru: "12 октября 2026",
    },
    category: { az: "TƏKLİFLƏR", en: "OFFERS", ru: "ПРЕДЛОЖЕНИЯ" },
    title: {
      az: "Payız mövsümünə xüsusi endirim kampaniyası başladı",
      en: "A special autumn discount campaign has started",
      ru: "Стартовала осенняя акция со скидками",
    },
    excerpt: {
      az: "Bütün abunəçilər üçün 20% endirim imkanı.",
      en: "All members can get 20% off.",
      ru: "Для всех подписчиков доступна скидка 20%.",
    },
    paragraphs: {
      az: [
        "Payız mövsümü üçün xüsusi kampaniyaya start verdik. Seçilmiş abunəliklərdə 20%-dək endirim tətbiq olunur.",
        "Kampaniya müddətində tətbiqdən paket seçən istifadəçilər endirimi avtomatik görür.",
        "Şərtlər və müddət tətbiqdə “Abunəlik” bölməsində göstərilir.",
      ],
      en: [
        "We launched a special autumn campaign with up to 20% off selected plans.",
        "Members who pick a plan in the app during the campaign see the discount automatically.",
        "Terms and dates are listed in the Plans section of the app.",
      ],
      ru: [
        "Мы запустили осеннюю кампанию со скидкой до 20% на выбранные тарифы.",
        "Те, кто выбирает пакет в приложении в период акции, видят скидку автоматически.",
        "Условия и сроки указаны в разделе «Подписка» в приложении.",
      ],
    },
  },
  {
    slug: "yeni-telim-proqramlari",
    date: {
      az: "30 noyabr 2026",
      en: "30 November 2026",
      ru: "30 ноября 2026",
    },
    category: { az: "TƏDRİS", en: "TRAINING", ru: "ОБУЧЕНИЕ" },
    title: {
      az: "Yeni təlim proqramları istifadəyə verildi",
      en: "New training programmes are now available",
      ru: "Запущены новые обучающие программы",
    },
    excerpt: {
      az: "Peşəkar inkişaf üçün müxtəlif mövzularda kurslar təqdim olunur.",
      en: "Courses on a range of topics are now offered for professional development.",
      ru: "Доступны курсы по разным темам для профессионального роста.",
    },
    paragraphs: {
      az: [
        "Tərəfdaş zallar və məşqçilər üçün yeni təlim proqramları istifadəyə verildi.",
        "Kurslar xidmət keyfiyyəti, tətbiq istifadəsi və üzv təcrübəsi mövzularını əhatə edir.",
        "Qeydiyyat tərəfdaş panelindən və ya əlaqə forması ilə mümkündür.",
      ],
      en: [
        "New training programmes are live for partner gyms and coaches.",
        "Courses cover service quality, using the app and member experience.",
        "Sign up from the partner panel or the contact form.",
      ],
      ru: [
        "Для партнёрских залов и тренеров запущены новые программы обучения.",
        "Курсы охватывают качество сервиса, работу с приложением и опыт гостей.",
        "Записаться можно в партнёрской панели или через форму связи.",
      ],
    },
  },
  {
    slug: "sunni-intellekt-desteyi",
    date: {
      az: "10 dekabr 2026",
      en: "10 December 2026",
      ru: "10 декабря 2026",
    },
    category: { az: "YENİLİKLƏR", en: "UPDATES", ru: "ОБНОВЛЕНИЯ" },
    title: {
      az: "Tətbiqə süni intellekt dəstəyi əlavə olundu",
      en: "AI support has been added to the app",
      ru: "В приложение добавлена поддержка ИИ",
    },
    excerpt: {
      az: "İstifadəçi təcrübəsini artırmaq üçün yeni alqoritmlər tətbiq edildi.",
      en: "New algorithms were added to improve the member experience.",
      ru: "Новые алгоритмы улучшают пользовательский опыт.",
    },
    paragraphs: {
      az: [
        "Tətbiqə süni intellekt dəstəyi əlavə olundu. Zal tövsiyələri və axtarış nəticələri indi daha dəqiqdir.",
        "Yeni alqoritmlər məşq vərdişinizə uyğun zalları və vaxtları önə çıxarır.",
        "Funksiya mərhələli şəkildə aktivləşəcək — tətbiqi yeniləyin.",
      ],
      en: [
        "AI support is now in the app. Gym recommendations and search results are more accurate.",
        "The new algorithms highlight gyms and time slots that match how you train.",
        "The feature will roll out in stages — update the app to get it.",
      ],
      ru: [
        "В приложении появилась поддержка ИИ. Рекомендации залов и поиск стали точнее.",
        "Новые алгоритмы выделяют залы и слоты, которые лучше совпадают с вашим графиком.",
        "Функция включается поэтапно — обновите приложение.",
      ],
    },
  },
];

export const getNewsArticle = (slug: string) =>
  newsArticles.find((item) => item.slug === slug);

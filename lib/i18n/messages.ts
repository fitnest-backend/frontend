import type { Locale } from "./config";

export type Messages = {
  nav: {
    halls: string;
    plans: string;
    market: string;
    faq: string;
    bmi: string;
    login: string;
    signup: string;
    howItWorks: string;
    business: string;
    downloadApp: string;
    corporate: string;
    becomePartner: string;
    toggleTheme: string;
  };
  footer: {
    privacy: string;
    terms: string;
    feedback: string;
    contact: string;
    tagline: string;
    platform: string;
    company: string;
    partnership: string;
    howItWorks: string;
    halls: string;
    plans: string;
    fitStore: string;
    bmi: string;
    about: string;
    news: string;
    corporate: string;
    becomePartner: string;
    specialOffers: string;
    faq: string;
    copyright: string;
  };
  home: {
    heroTitle: string;
    heroDescription: string;
    heroLine1Before: string;
    heroLine1Accent: string;
    heroLine2: string;
    heroLine3: string;
    viewPackages: string;
    qrDownloadTitle: string;
    qrDownloadSubtitle: string;
    packageTiers: string;
    packageLevelsLabel: string;
    qrSuccessTitle: string;
    qrSuccessMeta: string;
    activePackage: string;
    goldLabel: string;
    visitsPerMonth: string;
    visitsUsed: string;
    stats: { value: string; label: string }[];
    howTitle: string;
    howEyebrow: string;
    howHeading: string;
    howItems: { title: string; desc: string }[];
    whyEyebrow: string;
    whyHeading: string;
    whyLeftTitle: string;
    whyLeftItems: string[];
    whyRightTitle: string;
    whyRightItems: string[];
    gymsEyebrow: string;
    gymsHeading: string;
    allGyms: string;
    subscriptionTitle: string;
    subscriptionHeading: string;
    subscriptionDescription: string;
    viewPlans: string;
    plansEyebrow: string;
    plansHeading: string;
    plansDescription: string;
    monthShort: string;
    mostPopular: string;
    bestValue: string;
    selectPackage: string;
    planFeatures: Record<string, string[]>;
    paymentEyebrow: string;
    paymentHeading: string;
    paymentSubtitle: string;
    details: string;
    mobileTitle: string;
    mobileHeading: string;
    mobileDescription: string;
    appEyebrow: string;
    appHeading: string;
    appDescription: string;
    appFeatures: { title: string; desc: string }[];
    ecoEyebrow: string;
    ecoHeading: string;
    corporateTitle: string;
    corporateDesc: string;
    corporateCta: string;
    partnerTitle: string;
    partnerDesc: string;
    partnerCta: string;
    storeEyebrow: string;
    storeHeading: string;
    storeDescription: string;
    storeCta: string;
    storeItems: { title: string; subtitle: string }[];
    bmiEyebrow: string;
    bmiHeading: string;
    bmiDescription: string;
    bmiCta: string;
    heightLabel: string;
    weightLabel: string;
    bmiLow: string;
    bmiNormal: string;
    bmiOver: string;
    bmiObese: string;
    monthlyPlan: string;
    trialPlan: string;
    entry: string;
    unlimitedEntry: string;
    oldPrice: string;
    features: string;
    gymEntryCount: string;
    freezeDays: string;
    carouselAria: string;
    planAria: string;
  };
  offers: {
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    months: string;
    whatAwaits: string;
    includedGyms: string;
    appHeading: string;
    appDescription: string;
    benefits: { label: string; value?: string; checked?: boolean }[];
    durationsEyebrow: string;
    durationsHeading: string;
    durationCards: { months: number; label: string; description: string }[];
    ctaTitle: string;
    ctaDescription: string;
  };
  paymentOptions: {
    eyebrow: string;
    abbTitle: string;
    abbDescription: string;
    coinEyebrow: string;
    coinTitle: string;
    coinDescription: string;
    bobTitle: string;
    bobDescription: string;
    zeroPercent: string;
    commission: string;
    upTo12Months: string;
    installment: string;
    fast: string;
    easyPayment: string;
    learnMore: string;
    abbDetail: {
      back: string;
      heroTitle: string;
      cardsValue: string;
      cardsLabel: string;
      howTitle: string;
      howDescription: string;
      steps: { title: string; description: string }[];
      termsTitle: string;
      termsDescription: string;
      periodColumn: string;
      commissionColumn: string;
      rows: { period: string; fee: string }[];
    };
    bobDetail: {
      back: string;
      heroTitle: string;
      cardsValue: string;
      cardsLabel: string;
      howTitle: string;
      howDescription: string;
      steps: { title: string; description: string }[];
      termsTitle: string;
      termsDescription: string;
      periodColumn: string;
      commissionColumn: string;
      rows: { period: string; fee: string }[];
    };
    coinDetail: {
      back: string;
      heroTitle: string;
      sections: { title: string; body: string }[];
    };
  };
  fitMarket: {
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    searchPlace: string;
    newBadge: string;
    cardDetailsAria: string;
    detailsDescription: string;
    contact: string;
    address: string;
    workHours: string;
    map: string;
    visit: string;
  };
  centers: {
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    searchPlace: string;
    cityDistrict: string;
    trainingTypes: string;
    membership: string;
    forWhom: string;
    loadMore: string;
    allOption: string;
    reset: string;
    workHours: string;
    detailsAria: string;
    detailsSubtitle: string;
    previousImage: string;
    nextImage: string;
    aboutGym: string;
    aboutText: string;
    amenities: string;
    equipment: string;
    equipmentText: string;
    coaches: string;
    contact: string;
    address: string;
    workHoursTitle: string;
    map: string;
    gymAccess: string;
    gymAccessHint: string;
    gymAccessHintSingle: string;
    viewSubscriptions: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    contactBefore: string;
    contactAfter: string;
    searchPlaceholder: string;
    all: string;
    empty: string;
    emptySearch: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    gymsLabel: string;
    packagesLabel: string;
    languagesLabel: string;
    teamLabel: string;
    missionTitle: string;
    missionText: string;
    goalsTitle: string;
    goalsText: string;
    valuesEyebrow: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
  };
  feedback: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    requestType: string;
    complaint: string;
    suggestion: string;
    other: string;
    message: string;
    send: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    updatedLabel: string;
    empty: string;
  };
  terms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    updatedLabel: string;
    empty: string;
  };
  bmi: {
    heroTitle: string;
    heroDescription: string;
    params: string;
    weight: string;
    height: string;
    birthDate: string;
    gender: string;
    male: string;
    female: string;
    calculate: string;
    resultLabel: string;
    underweight: string;
    normal: string;
    overweight: string;
    obesity: string;
    noResult: string;
    facts: string;
    metaMessages: Record<
      "underweight" | "normal" | "overweight" | "obesity",
      string
    >;
    infoItems: { title: string; description: string }[];
    tips: { title: string; description: string }[];
  };
  payment: {
    success: string;
    failed: string;
    paymentMethod: string;
    date: string;
    status: string;
    successStatus: string;
    failedStatus: string;
  };
};

const az: Messages = {
  nav: {
    halls: "Fitness mərkəzləri",
    plans: "Abunəlik",
    market: "Fit market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Daxil ol",
    signup: "Qeydiyyatdan keç",
    howItWorks: "Necə işləyir",
    business: "Biznes",
    downloadApp: "Tətbiqi yüklə",
    corporate: "Korporativ",
    becomePartner: "Tərəfdaş olun",
    toggleTheme: "İşıqlı / qaranlıq rejim",
  },
  footer: {
    privacy: "Məxfilik siyasəti",
    terms: "İstifadə şərtləri",
    feedback: "Bizə təklifiniz",
    contact: "Əlaqə",
    tagline:
      "Bir abunə ilə yüzlərlə fitness mərkəzinə çıxış. Azərbaycanın fitness və sağlam həyat ekosistemi.",
    platform: "Platforma",
    company: "Şirkət",
    partnership: "Əməkdaşlıq",
    howItWorks: "Necə işləyir",
    halls: "Fitness mərkəzləri",
    plans: "Abunəlik",
    fitStore: "FitStore",
    bmi: "BMİ",
    about: "Haqqımızda",
    news: "Xəbərlər",
    corporate: "Korporativ",
    becomePartner: "Tərəfdaş olun",
    specialOffers: "Xüsusi təkliflər",
    faq: "FAQ",
    copyright: "© 2026 FitNest",
  },
  home: {
    heroTitle: "Bir abunə — aktiv həyatın bütün imkanları",
    heroDescription:
      "FitNest tətbiqini endir, sənə uyğun paketi seç və 139 fitness\nmərkəzinə QR kodla daxil ol. Zallar, hovuzlar, yoqa studiyaları\n— hamısı bir tətbiqdə.",
    heroLine1Before: "Bir",
    heroLine1Accent: "abunə",
    heroLine2: "Aktiv həyatın",
    heroLine3: "bütün imkanları.",
    viewPackages: "Paketlərə bax",
    qrDownloadTitle: "QR ilə endir",
    qrDownloadSubtitle: "Kameranı tut, tətbiqə keç",
    packageTiers: "Bronze · Silver · Gold · Platinum",
    packageLevelsLabel: "4 paket səviyyəsi",
    qrSuccessTitle: "QR giriş uğurlu",
    qrSuccessMeta: "Dream Body Pilates · 18:04",
    activePackage: "AKTİV PAKET",
    goldLabel: "Gold",
    visitsPerMonth: "12 giriş / ay",
    visitsUsed: "7 giriş istifadə olunub",
    stats: [
      { value: "139", label: "Fitness mərkəzi\nbir şəbəkədə" },
      { value: "45", label: "Platinum səviyyəli\npremium məkan" },
      { value: "12", label: "Giriş hər ay,\nistənilən mərkəzə" },
      { value: "4", label: "Paket səviyyəsi\nBronze     Platinum" },
    ],
    howTitle: "Dörd sadə addım — məşqə hazırsan.",
    howEyebrow: "NECƏ İŞLƏYİR?",
    howHeading: "Dörd sadə addım —\nmeşqə hazırsan.",
    howItems: [
      {
        title: "Tətbiqi endir",
        desc: "App Store və ya Google Play-dən\nFitNest-i endir və qeydiyyatdan\nkeç.",
      },
      {
        title: "Abunəliyini seç",
        desc: "Bronze, Silver, Gold və ya Platinum\n— büdcənə və hədəfinə uyğun\nolanı seç.",
      },
      {
        title: "Uyğun məkanı tap",
        desc: "Olduğun yerə ən yaxın mərkəzləri, xidmət və üstünlükləri araşdır",
      },
      {
        title: "QR ilə daxil ol",
        desc: "Girişdə QR kodu oxut və məşqə\nbaşla. Kart, müqavilə, növbə — heç\nbiri lazım deyil.",
      },
    ],
    whyEyebrow: "Niyə  bir abunə?",
    whyHeading: "Bir zala bağlı qalma.\nÖz ritmini seç.",
    whyLeftTitle: "1 zala üzvlük",
    whyLeftItems: [
      "Yalnız bir məkan",
      "Məhdud aktivlik seçimi",
      "Uzunmüddətli müqavilə",
      "Fiziki üzvlük kartı",
      "Məşqlərini bir zalın qrafikinə uyğunlaşdırırsan",
    ],
    whyRightTitle: "FitNest ilə abunəlik",
    whyRightItems: [
      "139 fitness mərkəzi",
      "Zal, hovuz, yoqa, pilates və daha çox",
      "1, 3, 6 və 12 aylıq çevik seçim",
      "Tətbiqdə sürətli QR giriş",
      "Harada olsan, yaxınlıqdakı mərkəzi seçirsən",
    ],
    gymsEyebrow: "Zallar",
    gymsHeading: "Şəhərin ən yaxşı məkanları.",
    allGyms: "Bütün zallar",
    subscriptionTitle: "Abunəlik",
    subscriptionHeading: "Hədəflərinə uyğun planı seç",
    subscriptionDescription: "ilə daha balanslı, sağlam və aktiv həyata addım at.",
    viewPlans: "Planlara bax",
    plansEyebrow: "Abunəlik",
    plansHeading: "Hər abunəlikdə 12 giriş.\nFərq - zallarda.",
    plansDescription:
      "Bronze, Silver, Gold və Platinum abunəlikləri daxil olan məkanların sayı və xidmət çeşidinin genişliyinə görə fərqlənir. Hər növbəti abunəlik əvvəlki abunəliklərə daxil olan bütün məkan və xidmətləri də əhatə edir.",
    monthShort: "ay",
    mostPopular: "Ən çox seçilən",
    bestValue: "ƏN SƏRFƏLİ",
    selectPackage: "Paketi seç",
    planFeatures: {
      bronze: [
        "12 giriş / ay",
        "19 Bronze səviyyəli zal",
        "Qrup məşqləri",
        "Tətbiqdə fəaliyyət izləmə",
      ],
      silver: [
        "12 giriş / ay",
        "Silver və Bronze zallar",
        "Qrup məşqləri",
        "Tətbiqdə fəaliyyət izləmə",
      ],
      gold: [
        "12 giriş / ay",
        "Gold və aşağı səviyyəli zallar",
        "Qrup məşqləri",
        "Tətbiqdə fəaliyyət izləmə",
      ],
      platinum: [
        "12 giriş / ay",
        "Bütün səviyyəli zallar",
        "Qrup məşqləri",
        "Tətbiqdə fəaliyyət izləmə",
      ],
    },
    paymentEyebrow: "Xüsusi ödəniş imkanları",
    paymentHeading: "ABB kartı ilə ödə",
    paymentSubtitle: "Debet və taksit kartlarından istifadə et",
    details: "Ətraflı",
    mobileTitle: "Mobil FitNest",
    mobileHeading: "Sağlam həyat tərzinə bir addım da yaxınlaş",
    mobileDescription: "ilə bədənini, zehnini və motivasiyanı balansda saxla.",
    appEyebrow: "FitNest tətbiqi",
    appHeading: "Bütün fitness\nhəyatın - cibində",
    appDescription:
      "Mərkəz kəşfiyyatından QR girişə, paket idarəçiliyindən\nFitMarket alış-verişinə qədər hər şey bir tətbiqdə.",
    appFeatures: [
      {
        title: "Kəşf et",
        desc: "139 mərkəzi səviyyə, aktivlik və məsafəyə görə filtrlə.",
      },
      {
        title: "QR ilə giriş",
        desc: "Resepşnda gözləmə yox — kodu oxut, birbaşa məşqə keç.",
      },
      {
        title: "FitMarket",
        desc: "Tərəfdaş mağazalardan endirimlə protein, geyim və aksesuar.",
      },
      {
        title: "İzlə və inkişaf et",
        desc: "Giriş tarixçən və qalan limitlərin həmişə göz önündə.",
      },
    ],
    ecoEyebrow: "Birlikdə böyüyək",
    ecoHeading: "FitNest ekosistemində yerini tap.",
    corporateTitle: "Korporativ müştərilər",
    corporateDesc:
      "Komandanıza fitness və wellness imtiyazı verin. Çevik həllər, sadə idarəetmə, xoşbəxt əməkdaşlar.",
    corporateCta: "Korporativ təklif al",
    partnerTitle: "Fitness mərkəzləri",
    partnerDesc:
      "Mərkəzinizi FitNest şəbəkəsinə qoşun — yeni üzvlər qazanın, doluluq artırın, gəlirinizi böyüdün.",
    partnerCta: "Tərəfdaş ol",
    storeEyebrow: "FitStore",
    storeHeading: "Məşqdən\nsonrasıda bizdə.",
    storeDescription:
      "FitStore— FitNest tətbiqinin daxilində idman və sağlamlıq məhsulları bölməsi. Tərəfdaş mağazaların təkliflərini kəşf et, endirimlə sifariş ver.",
    storeCta: "FitStore tanı",
    storeItems: [
      { title: "Protein və qida əlavələri", subtitle: "5%-dək endirim" },
      { title: "İdman geyimləri", subtitle: "Tərəfdaş mağazalar" },
      { title: "Aksesuar və avadanlıq", subtitle: "Seçilmiş təkliflər" },
    ],
    bmiEyebrow: "BMİ",
    bmiHeading: "Bədən kütlə\nindeksini öyrən.",
    bmiDescription:
      "Boy və çəki məlumatlarını daxil et, BMI-ni hesabla və nəticən haqqında məlumat al.",
    bmiCta: "BMİ-ni hesabla",
    heightLabel: "Boy",
    weightLabel: "Çəki",
    bmiLow: "Aşağı",
    bmiNormal: "Normal",
    bmiOver: "Artıq çəki",
    bmiObese: "Obez",
    monthlyPlan: "aylıq plan",
    trialPlan: "Sınaq planı",
    entry: "giriş",
    unlimitedEntry: "limitsiz giriş",
    oldPrice: "Köhnə qiymət",
    features: "plan xüsusiyyətləri",
    gymEntryCount: "Zallara giriş sayı",
    freezeDays: "gün dondurma",
    carouselAria: "Abunəlik planları karuseli",
    planAria: "abunəlik planı",
  },
  offers: {
    eyebrow: "Abunəlik",
    heroTitle: "Hər abunəlikdə 12 giriş.\nFərq - zallarda.",
    heroDescription:
      "Bronze, Silver, Gold və Platinum abunəlikləri daxil olan məkanların sayı və xidmət çeşidinin genişliyinə görə fərqlənir. Hər növbəti abunəlik əvvəlki abunəliklərə daxil olan bütün məkan və xidmətləri də əhatə edir.",
    months: "ay",
    whatAwaits: "planlarında səni nələr gözləyir?",
    includedGyms: "Paketə daxil olan zallar",
    appHeading: "Sağlam həyat tərzinə bir addım da yaxınlaş",
    appDescription: "ilə bədənini, zehnini və motivasiyanı balansda saxla.",
    benefits: [
      { label: "Zallara giriş sayı", value: "16" },
      { label: "Fərdi qəza", checked: true },
      { label: "İdman mağazaları", value: "10% endirim" },
      { label: "Fərdi qəza", value: "10% endirim" },
      { label: "Kosmetologiya", value: "10% endirim" },
      { label: "Məşq proqramları", checked: true },
      { label: "Diet proqramı", checked: true },
      { label: "Tur paketə endirim", checked: true },
      { label: "Spa və hovuza giriş", checked: true },
      { label: "Nutrisioloq qəbulu", value: "ayda 1 dəfə" },
      { label: "Məşqçi ilə konsultasiya", value: "ayda 3 dəfə" },
    ],
    durationsEyebrow: "Müddətlər",
    durationsHeading: "Öz ritminə uyğun müddət seç",
    durationCards: [
      {
        months: 1,
        label: "çevik",
        description: "Öhdəliksiz sına — istənilən vaxt dayandır.",
      },
      {
        months: 3,
        label: "populyar",
        description: "Vərdiş yaratmaq üçün optimal başlanğıc.",
      },
      {
        months: 6,
        label: "sərfəli",
        description: "Ciddi hədəflər üçün daha yaxşı şərtlər.",
      },
      {
        months: 12,
        label: "maksimum",
        description: "İl boyu məşq — ən sərfəli tarif.",
      },
    ],
    ctaTitle: "Abunəliyini seçdin? Tətbiqdə aktivləşdir.",
    ctaDescription:
      "Abunəlik yalnız FitNest tətbiqi üzərindən alınır. Endir, paketini seç və ilk məşqinə bu gün başla.",
  },
  paymentOptions: {
    eyebrow: "Xüsusi ödəniş imkanları",
    abbTitle: "Abb kartı ilə ödə",
    abbDescription:
      "Debet və taksit kartlarından istifadə et, FitNest abunəliyini daha rahat əldə et.",
    coinEyebrow: "FitNest Coin",
    coinTitle: "Coin qazan və daha\nçox faydalan",
    coinDescription:
      "FitNest-də aktiv olduqca Coin qazan, topladığın Coin-lərlə xüsusi imkanlardan, endirimlərdən və tərəfdaş təkliflərindən yararlan.",
    bobTitle: "Bank of Baku kartı ilə ödə",
    bobDescription:
      "FitNest abunəliyini Bank of Baku kartları ilə taksitlə əldə et və sağlam həyatına fasilə vermə.",
    zeroPercent: "0%",
    commission: "komissiya",
    upTo12Months: "12 ayadək",
    installment: "taksit imkanı",
    fast: "Sürətli",
    easyPayment: "və daha rahat ödəniş",
    learnMore: "Ətraflı bax",
    abbDetail: {
      back: "Xüsusi təkliflər",
      heroTitle: "ABB kartı ilə FitNest abunəliyini taksitlə əldə et",
      cardsValue: "ABB kartları",
      cardsLabel: "Debet və taksit kartları",
      howTitle: "Necə istifadə etməli?",
      howDescription:
        "ABB kart sahibləri FitNest abunəliyini taksit imkanından istifadə edərək əldə edə bilərlər. Abunəlik ödənişini daha rahat şəkildə hissələrə böl və məşqlərinə davam et.",
      steps: [
        {
          title: "Abunəliyi seç",
          description: "Sənə uyğun FitNest abunəliyini seç.",
        },
        {
          title: "Abb kartını seç",
          description: "Ödəniş zamanı ABB kartından\nistifadə et.",
        },
        {
          title: "Taksitlə ödə",
          description: "Seçdiyin taksit müddətinə böl və məşqlərinə başla.",
        },
      ],
      termsTitle: "Taksit şərtləri",
      termsDescription:
        "FitNest abunəliyini aşağıdakı taksit müddətləri ilə komissiyasız əldə edə bilərsiz.",
      periodColumn: "Taksit müddəti",
      commissionColumn: "Komissiya",
      rows: [
        { period: "3 ay", fee: "0 %" },
        { period: "6 ay", fee: "0 %" },
        { period: "12 ay", fee: "0 %" },
      ],
    },
    bobDetail: {
      back: "Xüsusi təkliflər",
      heroTitle: "Bank of Baku kartı ilə FitNest abunəliyini taksitlə əldə et",
      cardsValue: "BOB kartları",
      cardsLabel: "Debet və taksit kartları",
      howTitle: "Necə istifadə etməli?",
      howDescription:
        "Bank of Baku kart sahibləri FitNest abunəliyini taksit imkanından istifadə edərək əldə edə bilərlər. Abunəlik ödənişini daha rahat şəkildə hissələrə böl və məşqlərinə davam et.",
      steps: [
        {
          title: "Abunəliyi seç",
          description: "Sənə uyğun FitNest abunəliyini seç.",
        },
        {
          title: "Bank of Baku kartını seç",
          description: "Ödəniş zamanı Bank of Baku kartından\nistifadə et.",
        },
        {
          title: "Taksitlə ödə",
          description: "Seçdiyin taksit müddətinə böl və məşqlərinə başla.",
        },
      ],
      termsTitle: "Taksit şərtləri",
      termsDescription:
        "FitNest abunəliyini aşağıdakı taksit müddətləri ilə komissiyasız əldə edə bilərsiz.",
      periodColumn: "Taksit müddəti",
      commissionColumn: "Komissiya",
      rows: [
        { period: "1 ay", fee: "0 %" },
        { period: "3 ay", fee: "0 %" },
        { period: "6 ay", fee: "0 %" },
        { period: "12 ay", fee: "0 %" },
      ],
    },
    coinDetail: {
      back: "Xüsusi təkliflər",
      heroTitle: "Coin qazan və daha çox\nfaydalan",
      sections: [
        {
          title: "1. Ümumi müddəalar",
          body: "FitNest Coin istifadəçilərə platformada aktivliklərinə görə Coin qazanmaq və əldə etdikləri Coin-lərdən abunəlik alışında istifadə etmək imkanı yaradır. Coin sistemi istifadəçilərin FitNest-də daha aktiv olmasını və platformanın imkanlarından faydalanmasını dəstəkləyir.",
        },
        {
          title: "2. Coin hesablanması",
          body: "Yeni qeydiyyatdan keçən istifadəçiyə 50 Coin hədiyyə edilir. Endirimlər tətbiq edildikdən sonra faktiki ödənilən hər 1 AZN üçün 1 Coin qazanılır.",
        },
        {
          title: "3. Coin-lərin dəyəri",
          body: "20 Coin = 1 AZN. Topladığınız Coin-lərdən FitNest abunəliyi zamanı istifadə edə bilərsiniz.",
        },
        {
          title: "4. Coin-lərin istifadəsi",
          body: "Coin-lər yalnız FitNest abunəliyinin alınması zamanı istifadə olunur. Coin-lər nağdlaşdırılmır və başqa istifadəçi hesabına köçürülmür.",
        },
        {
          title: "5. Coin-lərin etibarlılıq müddəti",
          body: "Coin-lərin etibarlılıq müddəti ilk Coin-in qazanıldığı tarixdən etibarən 12 ay hesablanır. Müddəti bitmiş Coin-lər istifadə edilə bilməz.",
        },
        {
          title: "Endirimlər və Coin hesablanması",
          body: "Endirim tətbiq olunan alışlarda Coin hesablanarkən endirimdən sonrakı faktiki ödənilən məbləğ əsas götürülür. Hər faktiki ödənilən 1 AZN üçün 1 Coin hesablanır.",
        },
        {
          title: "Geri qaytarma zamanı Coin-lər",
          body: "Abunəlik geri qaytarıldıqda həmin alış zamanı istifadə edilmiş Coin-lər istifadəçinin balansına geri qaytarılır. Alış üzrə qazanılmış Coin isə balansdan çıxılır.",
        },
        {
          title: "Coin balansı",
          body: "İstifadəçi topladığı Coin-lərin cari balansını FitNest tətbiqində görə bilər. Coin balansı qazanılan və istifadə edilən Coin-lərə uyğun olaraq yenilənir.",
        },
        {
          title: "Coin-lərin köçürülməsi və nağdlaşdırılması",
          body: "Coin-lər yalnız istifadəçinin öz hesabında istifadə edilə bilər. Coin-lərin nağd pula çevrilməsi və başqa hesaba köçürülməsi mümkün deyil.",
        },
        {
          title: "Coin tarixçəsi",
          body: "İstifadəçi tətbiq daxilində Coin tarixçəsinə baxaraq qazandığı və istifadə etdiyi Coin-lər haqqında məlumat əldə edə bilər.",
        },
      ],
    },
  },
  fitMarket: {
    eyebrow: "FitStore",
    heroTitle: "İdman üçün lazım olan hər şey",
    heroDescription:
      "İdman üçün geyim, qida, avadanlıq və müxtəlif çeşiddə məhsullar təklif edən mağaza",
    searchPlace: "Axtar.....",
    newBadge: "Yeni",
    cardDetailsAria: "detalına keç",
    detailsDescription: "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    contact: "Əlaqə",
    address: "Ünvan",
    workHours: "İş saatları",
    map: "Xəritə",
    visit: "Keçid et",
  },
  centers: {
    eyebrow: "Fitness mərkəzləri",
    heroTitle: "{n} mərkəz bir abunədə",
    heroDescription:
      "Zallar, hovuzlar, yoqa, pilates studiyaları, boks klubları. Paket səviyyəsinə görə filtrlə, sənə yaxınını tap.",
    searchPlace: "Məkan axtar",
    cityDistrict: "Şəhər",
    trainingTypes: "Məşq növləri",
    membership: "Abunəlik",
    forWhom: "Kimlər üçün",
    loadMore: "Daha çox",
    allOption: "Hamısı",
    reset: "Sıfırla",
    workHours: "İş saatları",
    detailsAria: "detalları",
    detailsSubtitle: "Daha güclü, sağlam və enerjili olmaq üçün ideal məkan.",
    previousImage: "Əvvəlki şəkil",
    nextImage: "Növbəti şəkil",
    aboutGym: "Zal haqqında",
    aboutText:
      "ProFit Club geniş məşq zonaları, yenilənmiş avadanlıqlar və rahat mühit ilə həm yeni başlayanlar, həm də peşəkar idmançılar üçün ideal fitness məkanıdır.",
    amenities: "İmkanlar",
    equipment: "Avadanlıqlar",
    equipmentText:
      "Kardio trenajorları • Funksional zona • Squat rack • Dumbbell/barbell • Kabel trenajorları • Stretching sahəsi",
    coaches: "Məşqçilər",
    contact: "Əlaqə",
    address: "Ünvan",
    workHoursTitle: "İş saatları",
    map: "Xəritə",
    gymAccess: "Bu zala giriş",
    gymAccessHint:
      "{tier} və daha yuxarı paketlərlə giriş. Tətbiqdə QR oxut, məşqə başla.",
    gymAccessHintSingle:
      "{tier} paketi ilə giriş. Tətbiqdə QR oxut, məşqə başla.",
    viewSubscriptions: "Abunəliklərə bax",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Tez-tez verilən suallar",
    contactBefore: "Cavabını tapmadın?",
    contactAfter: "ünvanına yaz — komandamız kömək edəcək.",
    searchPlaceholder: "Axtar....",
    all: "Hamısı",
    empty: "Hələ sual əlavə olunmayıb.",
    emptySearch: "Axtarışa uyğun sual tapılmadı.",
  },
  contact: {
    title: "Bizimlə əlaqə saxla",
    subtitle: "Komandamız səninlə əlaqə saxlayacaq",
    name: "Ad",
    email: "Email",
    phone: "Telefon",
    message: "Mesajınızı daxil edin",
    send: "Göndər",
  },
  about: {
    eyebrow: "Haqqımızda",
    title: "Azərbaycanın fitness və sağlam\nhəyat ekosistemini qururuq.",
    description:
      "FitNest — bir abunə ilə yüzlərlə fitness mərkəzinə çıxış verən mobil platformadır. Məqsədimiz sadədir: idmanı hər kəs üçün əlçatan, çevik və zövqlü etmək.",
    gymsLabel: "Fitness mərkəzi",
    packagesLabel: "Paket səviyyəsi",
    languagesLabel: "Dildə",
    teamLabel: "Nəfərlik komanda",
    missionTitle: "Missiyamız",
    missionText:
      "İnsanlarla fitness mərkəzləri arasındakı bütün maneələri aradan qaldırmaq: bir tətbiq, bir abunə, yüzlərlə məkan. Hər kəsin öz ritminə uyğun idman həyatı qura bilməsi üçün texnologiya ilə dəstək olmaq.",
    goalsTitle: "Hədəflərimiz",
    goalsText:
      "Azərbaycanda sağlam həyat axtaran hər kəsin 1 nömrəli platforması olmaq — idman, wellness, məzmun və alış-verişin bir araya gəldiyi ekosistem kimi regionda nümunə göstərilmək.",
    valuesEyebrow: "Dəyərlərimiz",
    valuesTitle: "Bizi irəli aparan prinsiplər",
    values: [
      {
        title: "İnsan mərkəzli",
        text: "Qərarlarımızı istifadəçinin rahatlığı və real ehtiyacları müəyyən edir.",
      },
      {
        title: "Şəffaflıq",
        text: "Açıq qiymətlər, aydın şərtlər, gizli ödənişsiz abunə modeli.",
      },
      {
        title: "Texnologiya",
        text: "QR giriş, ağıllı kəşfiyyat, rəqəmsal idarəetmə — hamısı bir tətbiqdə.",
      },
      {
        title: "Yerli ekosistem",
        text: "Yerli mərkəzlər, yerli biznes və icma ilə birlikdə böyüyürük.",
      },
    ],
  },
  feedback: {
    title: "Şikayət və təkliflər",
    subtitle: "Sizin fikirləriniz bizim üçün dəyərlidir - paylaşın, biz qulaq asırıq!",
    fullName: "Ad, Soyad",
    email: "E-poçt",
    requestType: "Müraciət növü",
    complaint: "Şikayət",
    suggestion: "Təklif",
    other: "Digər",
    message: "Mesajınızı daxil edin",
    send: "Göndər",
  },
  privacy: {
    eyebrow: "Hüquqi sənəd",
    title: "Məxfilik siyasəti",
    subtitle:
      "FitNest platformasında şəxsi məlumatların toplanması,\nistifadəsi və qorunması siyasəti.",
    updatedLabel: "Son yenilənmə :",
    empty: "Məxfilik siyasəti hazırda əlçatan deyil.",
  },
  terms: {
    eyebrow: "Hüquqi sənəd",
    title: "İstifadə şərtləri",
    subtitle:
      "FitNest xidmətlərindən istifadə zamanı qüvvədə olan şərtlər və hüquqi müddəalar. Vebsaytdan və FitNest mobil tətbiqindən istifadə etməklə siz bu şərtləri qəbul etmiş sayılırsınız.",
    updatedLabel: "Son yenilənmə :",
    empty: "İstifadə şərtləri hazırda əlçatan deyil.",
  },
  bmi: {
    heroTitle: "Bədən Kütlə İndeksi",
    heroDescription:
      "Sağlamlığınız üçün ideal çəkinizi öyrənin. Boy və çəkinizə əsasən bədən kütlə indeksinizi hesablayın.",
    params: "Parametrlər",
    weight: "Çəki",
    height: "Boy",
    birthDate: "Doğum tarixi",
    gender: "Cinsiyyət",
    male: "Kişi",
    female: "Qadın",
    calculate: "Hesabla",
    resultLabel: "Sizin BKİ göstəriciniz:",
    underweight: "Az Çəki",
    normal: "Normal",
    overweight: "Artıq Çəki",
    obesity: "Piylənmə",
    noResult: "Nəticəni görmək üçün parametrləri daxil edib \"Hesabla\" düyməsini sıxın.",
    facts: "Faktlar və tövsiyələr",
    metaMessages: {
      underweight: "Tövsiyə: qidalanma və məşq planını balanslaşdırın.",
      normal: "Təbriklər! Çəkiniz idealdır. Bu formanı qoruyun.",
      overweight: "Tövsiyə: gündəlik hərəkəti artırın və qidalanmanı izləyin.",
      obesity: "Mütəxəssis məsləhəti ilə fərdi plan qurmağınız tövsiyə edilir.",
    },
    infoItems: [
      {
        title: "BKİ nədir?",
        description: "Boyunuza görə çəkinizin uyğunluğunu qiymətləndirən sadə ölçüdür.",
      },
      {
        title: "Risklər",
        description: "Yüksək BKİ ürək xəstəlikləri və diabet riskini artıra bilər.",
      },
      {
        title: "Sağlam aralıq",
        description: "18.5 - 24.9 arası BKİ normal hesab olunur.",
      },
    ],
    tips: [
      {
        title: "Fiziki aktivlik",
        description: "Həftədə ən azı 150 dəqiqə orta intensivlikli fəaliyyət tövsiyə olunur.",
      },
      {
        title: "Balanslı qidalanma",
        description: "Zülal, karbohidrat və yağ balansı çəkinin idarəsində vacibdir.",
      },
    ],
  },
  payment: {
    success: "Ödənişiniz uğurla tamamlandı",
    failed: "Ödənişiniz uğursuz oldu",
    paymentMethod: "Ödəniş üsulu",
    date: "Tarix",
    status: "Status",
    successStatus: "Uğurlu",
    failedStatus: "Uğursuz",
  },
};

const en: Messages = {
  ...az,
  nav: {
    halls: "Fitness centers",
    plans: "Plans",
    market: "Fit Market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Sign in",
    signup: "Sign up",
    howItWorks: "How it works",
    business: "Business",
    downloadApp: "Download app",
    corporate: "Corporate",
    becomePartner: "Become a partner",
    toggleTheme: "Toggle light/dark mode",
  },
  footer: {
    privacy: "Privacy policy",
    terms: "Terms of use",
    feedback: "Feedback",
    contact: "Contact",
    tagline:
      "One subscription. Access to hundreds of fitness centers. Azerbaijan's fitness and healthy living ecosystem.",
    platform: "Platform",
    company: "Company",
    partnership: "Partnership",
    howItWorks: "How it works",
    halls: "Fitness centers",
    plans: "Plans",
    fitStore: "FitStore",
    bmi: "BMI",
    about: "About us",
    news: "News",
    corporate: "Corporate",
    becomePartner: "Become a partner",
    specialOffers: "Special offers",
    faq: "FAQ",
    copyright: "© 2026 FitNest",
  },
  home: {
    ...az.home,
    heroTitle: "One subscription — every way to live active",
    heroDescription:
      "Download FitNest, pick a plan, and enter 139 fitness\ncenters with a QR code. Gyms, pools, yoga studios\n— all in one app.",
    heroLine1Before: "One",
    heroLine1Accent: "plan",
    heroLine2: "Every way to live",
    heroLine3: "an active life.",
    viewPackages: "View plans",
    qrDownloadTitle: "Download via QR",
    qrDownloadSubtitle: "Point your camera, open the app",
    packageTiers: "Bronze · Silver · Gold · Platinum",
    packageLevelsLabel: "4 plan levels",
    qrSuccessTitle: "QR check-in successful",
    qrSuccessMeta: "Dream Body Pilates · 18:04",
    activePackage: "ACTIVE PLAN",
    goldLabel: "Gold",
    visitsPerMonth: "12 visits / month",
    visitsUsed: "7 visits used",
    stats: [
      { value: "139", label: "Fitness centers\nin one network" },
      { value: "45", label: "Platinum-level\npremium venues" },
      { value: "12", label: "Visits each month,\nany center" },
      { value: "4", label: "Plan levels\nBronze     Platinum" },
    ],
    howTitle: "Four simple steps — you're ready to train.",
    howEyebrow: "HOW IT WORKS",
    howHeading: "Four simple steps —\nyou're ready to train.",
    howItems: [
      {
        title: "Download the app",
        desc: "Get FitNest from the App Store or Google Play\nand create an account.",
      },
      {
        title: "Choose a plan",
        desc: "Bronze, Silver, Gold or Platinum —\npick the one that fits your budget and goals.",
      },
      {
        title: "Find a venue",
        desc: "Explore nearby centers, services and perks wherever you are.",
      },
      {
        title: "Check in with QR",
        desc: "Scan at the door and start training.\nNo card, contract or queue.",
      },
    ],
    whyEyebrow: "Why one subscription?",
    whyHeading: "Don't stay tied to one gym.\nChoose your own rhythm.",
    whyLeftTitle: "Single-gym membership",
    whyLeftItems: [
      "Only one venue",
      "Limited activity options",
      "Long-term contract",
      "Physical membership card",
      "You adapt workouts to one gym's schedule",
    ],
    whyRightTitle: "FitNest subscription",
    whyRightItems: [
      "139 fitness centers",
      "Gym, pool, yoga, pilates and more",
      "Flexible 1, 3, 6 and 12 month options",
      "Fast QR check-in in the app",
      "Pick the nearest center wherever you are",
    ],
    gymsEyebrow: "Gyms",
    gymsHeading: "The city's best venues.",
    allGyms: "All gyms",
    subscriptionTitle: "Subscription",
    subscriptionHeading: "Choose the plan that matches your goals",
    subscriptionDescription:
      "for a healthier, balanced and more active lifestyle.",
    viewPlans: "View plans",
    plansEyebrow: "Plans",
    plansHeading: "12 visits on every plan.\nThe difference is the gyms.",
    plansDescription:
      "Bronze, Silver, Gold and Platinum differ by the number of venues and the range of services. Each higher plan also includes everything from the levels below.",
    monthShort: "mo",
    mostPopular: "Most popular",
    bestValue: "BEST VALUE",
    selectPackage: "Choose plan",
    planFeatures: {
      bronze: [
        "12 visits / month",
        "19 Bronze-level gyms",
        "Group classes",
        "Activity tracking in the app",
      ],
      silver: [
        "12 visits / month",
        "Silver and Bronze gyms",
        "Group classes",
        "Activity tracking in the app",
      ],
      gold: [
        "12 visits / month",
        "Gold and lower-level gyms",
        "Group classes",
        "Activity tracking in the app",
      ],
      platinum: [
        "12 visits / month",
        "Gyms at every level",
        "Group classes",
        "Activity tracking in the app",
      ],
    },
    paymentEyebrow: "Flexible payment options",
    paymentHeading: "Pay with an ABB card",
    paymentSubtitle: "Use debit and installment cards",
    details: "Learn more",
    mobileTitle: "Mobile FitNest",
    mobileHeading: "Get one step closer to a healthier lifestyle",
    mobileDescription:
      "to keep your body, mindset and motivation in balance.",
    appEyebrow: "FitNest app",
    appHeading: "Your whole fitness life —\nin your pocket",
    appDescription:
      "From discovering centers to QR check-in, plan management\nand FitMarket shopping — all in one app.",
    appFeatures: [
      {
        title: "Discover",
        desc: "Filter 139 centers by level, activity and distance.",
      },
      {
        title: "QR check-in",
        desc: "No waiting at reception — scan and go straight to training.",
      },
      {
        title: "FitMarket",
        desc: "Protein, apparel and accessories from partner stores, with discounts.",
      },
      {
        title: "Track and grow",
        desc: "Your visit history and remaining limits stay in view.",
      },
    ],
    ecoEyebrow: "Grow with us",
    ecoHeading: "Find your place in the FitNest ecosystem.",
    corporateTitle: "Corporate clients",
    corporateDesc:
      "Give your team a fitness and wellness benefit. Flexible solutions, simple management, happier people.",
    corporateCta: "Get a corporate offer",
    partnerTitle: "Fitness centers",
    partnerDesc:
      "Join the FitNest network — gain new members, fill more slots, grow revenue.",
    partnerCta: "Become a partner",
    storeEyebrow: "FitStore",
    storeHeading: "We're here after\nthe workout too.",
    storeDescription:
      "FitStore is the sports and wellness shop inside the FitNest app. Browse partner offers and order at a discount.",
    storeCta: "Explore FitStore",
    storeItems: [
      { title: "Protein and supplements", subtitle: "Up to 5% off" },
      { title: "Sportswear", subtitle: "Partner stores" },
      { title: "Accessories and gear", subtitle: "Selected offers" },
    ],
    bmiEyebrow: "BMI",
    bmiHeading: "Learn your\nbody mass index.",
    bmiDescription:
      "Enter your height and weight, calculate BMI, and get context on your result.",
    bmiCta: "Calculate BMI",
    heightLabel: "Height",
    weightLabel: "Weight",
    bmiLow: "Underweight",
    bmiNormal: "Normal",
    bmiOver: "Overweight",
    bmiObese: "Obese",
    monthlyPlan: "month plan",
    trialPlan: "Trial plan",
    entry: "entries",
    unlimitedEntry: "unlimited entries",
    oldPrice: "Old price",
    features: "plan features",
    gymEntryCount: "Gym entries",
    freezeDays: "days freeze",
    carouselAria: "Subscription plans carousel",
    planAria: "subscription plan",
  },
  offers: {
    ...az.offers,
    eyebrow: "Plans",
    heroTitle: "12 visits on every plan.\nThe difference is the gyms.",
    heroDescription:
      "Bronze, Silver, Gold and Platinum differ by the number of venues and the range of services. Each higher plan also includes everything from the levels below.",
    months: "mo",
    whatAwaits: "plans: what is included?",
    includedGyms: "Gyms included in package",
    appHeading: "Take one step closer to healthy living",
    appDescription: "to keep your body, mind, and motivation in balance.",
    benefits: [
      { label: "Gym entry count", value: "16" },
      { label: "Personal accident cover", checked: true },
      { label: "Sport stores", value: "10% discount" },
      { label: "Supplement stores", value: "10% discount" },
      { label: "Cosmetology", value: "10% discount" },
      { label: "Workout programs", checked: true },
      { label: "Diet program", checked: true },
      { label: "Tour package discount", checked: true },
      { label: "Spa and pool access", checked: true },
      { label: "Nutritionist session", value: "once per month" },
      { label: "Coach consultation", value: "3 times per month" },
    ],
    durationsEyebrow: "Durations",
    durationsHeading: "Pick the term that matches your rhythm",
    durationCards: [
      {
        months: 1,
        label: "flexible",
        description: "Try with no commitment — stop anytime.",
      },
      {
        months: 3,
        label: "popular",
        description: "The best start for building a habit.",
      },
      {
        months: 6,
        label: "value",
        description: "Better terms for serious goals.",
      },
      {
        months: 12,
        label: "maximum",
        description: "Train all year — the best rate.",
      },
    ],
    ctaTitle: "Chose a plan? Activate it in the app.",
    ctaDescription:
      "Subscriptions are purchased only in the FitNest app. Download it, pick your plan, and start your first workout today.",
  },
  paymentOptions: {
    ...az.paymentOptions,
    eyebrow: "Special payment options",
    abbTitle: "Pay with an ABB card",
    abbDescription:
      "Use debit and installment cards to get your FitNest subscription more easily.",
    coinEyebrow: "FitNest Coin",
    coinTitle: "Earn Coin and get\nmore out of it",
    coinDescription:
      "Stay active on FitNest, earn Coin, and use it for special perks, discounts, and partner offers.",
    bobTitle: "Pay with a Bank of Baku card",
    bobDescription:
      "Get your FitNest subscription in installments with Bank of Baku cards and keep your healthy routine going.",
    zeroPercent: "0%",
    commission: "commission",
    upTo12Months: "Up to 12 months",
    installment: "installment option",
    fast: "Fast",
    easyPayment: "and easier payment",
    learnMore: "Learn more",
    abbDetail: {
      ...az.paymentOptions.abbDetail,
      back: "Special offers",
      heroTitle: "Get a FitNest subscription in installments with an ABB card",
      cardsValue: "ABB cards",
      cardsLabel: "Debit and installment cards",
      howTitle: "How to use it?",
      howDescription:
        "ABB cardholders can get a FitNest subscription with installment payments. Split the payment more easily and keep training.",
      steps: [
        {
          title: "Choose a plan",
          description: "Pick the FitNest subscription that fits you.",
        },
        {
          title: "Choose an ABB card",
          description: "Use your ABB card\nat checkout.",
        },
        {
          title: "Pay in installments",
          description: "Split it over your chosen term and start training.",
        },
      ],
      termsTitle: "Installment terms",
      termsDescription:
        "You can get a FitNest subscription with the installment terms below, commission-free.",
      periodColumn: "Installment term",
      commissionColumn: "Commission",
      rows: [
        { period: "3 months", fee: "0 %" },
        { period: "6 months", fee: "0 %" },
        { period: "12 months", fee: "0 %" },
      ],
    },
    bobDetail: {
      ...az.paymentOptions.bobDetail,
      back: "Special offers",
      heroTitle:
        "Get a FitNest subscription in installments with a Bank of Baku card",
      cardsValue: "BOB cards",
      cardsLabel: "Debit and installment cards",
      howTitle: "How to use it?",
      howDescription:
        "Bank of Baku cardholders can get a FitNest subscription with installment payments. Split the payment more easily and keep training.",
      steps: [
        {
          title: "Choose a plan",
          description: "Pick the FitNest subscription that fits you.",
        },
        {
          title: "Choose a Bank of Baku card",
          description: "Use your Bank of Baku card\nat checkout.",
        },
        {
          title: "Pay in installments",
          description: "Split it over your chosen term and start training.",
        },
      ],
      termsTitle: "Installment terms",
      termsDescription:
        "You can get a FitNest subscription with the installment terms below, commission-free.",
      periodColumn: "Installment term",
      commissionColumn: "Commission",
      rows: [
        { period: "1 month", fee: "0 %" },
        { period: "3 months", fee: "0 %" },
        { period: "6 months", fee: "0 %" },
        { period: "12 months", fee: "0 %" },
      ],
    },
    coinDetail: {
      ...az.paymentOptions.coinDetail,
      back: "Special offers",
      heroTitle: "Earn Coin and get\nmore out of it",
      sections: [
        {
          title: "1. General terms",
          body: "FitNest Coin lets users earn Coin for activity on the platform and use it when buying a subscription. The Coin system supports staying more active on FitNest and getting more from the platform.",
        },
        {
          title: "2. How Coin is calculated",
          body: "New users receive 50 Coin as a gift. After discounts are applied, 1 Coin is earned for every 1 AZN actually paid.",
        },
        {
          title: "3. Coin value",
          body: "20 Coin = 1 AZN. You can use the Coin you collect when paying for a FitNest subscription.",
        },
        {
          title: "4. Using Coin",
          body: "Coin can only be used when buying a FitNest subscription. Coin cannot be cashed out or transferred to another user account.",
        },
        {
          title: "5. Coin validity period",
          body: "Coin is valid for 12 months from the date the first Coin is earned. Expired Coin cannot be used.",
        },
        {
          title: "Discounts and Coin calculation",
          body: "When a purchase has a discount, Coin is calculated from the amount actually paid after the discount. 1 Coin is granted for every 1 AZN actually paid.",
        },
        {
          title: "Coin on refunds",
          body: "If a subscription is refunded, Coin spent on that purchase is returned to the user's balance. Coin earned from that purchase is deducted from the balance.",
        },
        {
          title: "Coin balance",
          body: "Users can see their current Coin balance in the FitNest app. The balance updates based on Coin earned and spent.",
        },
        {
          title: "Transferring and cashing out Coin",
          body: "Coin can only be used on the user's own account. Coin cannot be converted to cash or transferred to another account.",
        },
        {
          title: "Coin history",
          body: "In the app, users can open Coin history to see Coin they have earned and used.",
        },
      ],
    },
  },
  fitMarket: {
    ...az.fitMarket,
    eyebrow: "FitStore",
    heroTitle: "Everything you need for sport",
    heroDescription:
      "A store with sportswear, nutrition, equipment, and a wide range of products",
    searchPlace: "Search.....",
    newBadge: "New",
    cardDetailsAria: "open details",
    detailsDescription:
      "Multivitamins, vitamin D, omega-3, and general wellness supplements.",
    contact: "Contact",
    address: "Address",
    workHours: "Working hours",
    map: "Map",
    visit: "Visit",
  },
  centers: {
    ...az.centers,
    eyebrow: "Fitness centers",
    heroTitle: "{n} centers in one subscription",
    heroDescription:
      "Gyms, pools, yoga and pilates studios, boxing clubs. Filter by package and find one near you.",
    searchPlace: "Search location",
    cityDistrict: "City",
    trainingTypes: "Training types",
    membership: "Membership",
    forWhom: "For whom",
    loadMore: "Load more",
    allOption: "All",
    reset: "Reset",
    workHours: "Working hours",
    detailsAria: "details",
    detailsSubtitle:
      "An ideal place to become stronger, healthier, and more energetic.",
    previousImage: "Previous image",
    nextImage: "Next image",
    aboutGym: "About gym",
    aboutText:
      "ProFit Club offers wide workout zones, modern equipment, and a comfortable environment for all levels.",
    amenities: "Amenities",
    equipment: "Equipment",
    equipmentText:
      "Cardio machines • Functional zone • Squat rack • Dumbbells/barbells • Cable machines • Stretching area",
    coaches: "Coaches",
    contact: "Contact",
    address: "Address",
    workHoursTitle: "Working hours",
    map: "Map",
    gymAccess: "Access to this gym",
    gymAccessHint:
      "Access with {tier} and above. Scan the QR in the app and start training.",
    gymAccessHintSingle:
      "Access with the {tier} plan. Scan the QR in the app and start training.",
    viewSubscriptions: "View subscriptions",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    contactBefore: "Didn't find an answer?",
    contactAfter: "write to this address — our team will help.",
    searchPlaceholder: "Search....",
    all: "All",
    empty: "No questions have been added yet.",
    emptySearch: "No questions match your search.",
  },
  contact: {
    title: "Contact us",
    subtitle: "Our team will get back to you",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Enter your message",
    send: "Send",
  },
  about: {
    eyebrow: "About us",
    title: "We're building Azerbaijan's fitness\nand healthy living ecosystem.",
    description:
      "FitNest is a mobile platform that gives access to hundreds of fitness centers with one subscription. Our goal is simple: make sport accessible, flexible, and enjoyable for everyone.",
    gymsLabel: "Fitness centers",
    packagesLabel: "Package tiers",
    languagesLabel: "Languages",
    teamLabel: "Team members",
    missionTitle: "Our mission",
    missionText:
      "Remove every barrier between people and fitness centers: one app, one subscription, hundreds of venues. Use technology so everyone can build a training life that matches their own rhythm.",
    goalsTitle: "Our goals",
    goalsText:
      "Become the number-one platform for anyone in Azerbaijan looking for a healthier life — a regional example where sport, wellness, content, and shopping come together as one ecosystem.",
    valuesEyebrow: "Our values",
    valuesTitle: "The principles that move us forward",
    values: [
      {
        title: "Human-centered",
        text: "User comfort and real needs shape every decision we make.",
      },
      {
        title: "Transparency",
        text: "Open prices, clear terms, and a subscription model with no hidden fees.",
      },
      {
        title: "Technology",
        text: "QR access, smart discovery, and digital management — all in one app.",
      },
      {
        title: "Local ecosystem",
        text: "We grow together with local centers, local businesses, and the community.",
      },
    ],
  },
  feedback: {
    title: "Complaints and suggestions",
    subtitle: "Your feedback matters to us - share it and we will listen!",
    fullName: "Full name",
    email: "Email",
    requestType: "Request type",
    complaint: "Complaint",
    suggestion: "Suggestion",
    other: "Other",
    message: "Enter your message",
    send: "Send",
  },
  privacy: {
    eyebrow: "Legal document",
    title: "Privacy policy",
    subtitle:
      "The policy for collecting, using, and protecting\npersonal data on the FitNest platform.",
    updatedLabel: "Last updated:",
    empty: "The privacy policy is not available right now.",
  },
  terms: {
    eyebrow: "Legal document",
    title: "Terms of use",
    subtitle:
      "Terms and legal provisions that apply when using FitNest services. By using the website and the FitNest mobile app, you are deemed to have accepted these terms.",
    updatedLabel: "Last updated:",
    empty: "The terms of use are not available right now.",
  },
  bmi: {
    ...az.bmi,
    heroTitle: "Body Mass Index",
    heroDescription:
      "Learn your ideal weight. Calculate your BMI based on your height and weight.",
    params: "Parameters",
    weight: "Weight",
    height: "Height",
    birthDate: "Birth date",
    gender: "Gender",
    male: "Male",
    female: "Female",
    calculate: "Calculate",
    resultLabel: "Your BMI result:",
    underweight: "Underweight",
    normal: "Normal",
    overweight: "Overweight",
    obesity: "Obesity",
    noResult: 'Enter your parameters and press "Calculate" to see the result.',
    facts: "Facts and tips",
    metaMessages: {
      underweight: "Tip: balance your nutrition and workout routine.",
      normal: "Great job! Your weight is in a healthy range.",
      overweight: "Tip: increase daily movement and track your nutrition.",
      obesity:
        "Consider creating a personal plan with specialist guidance.",
    },
    infoItems: [
      {
        title: "What is BMI?",
        description: "A simple indicator that compares weight to height.",
      },
      {
        title: "Risks",
        description:
          "Higher BMI can increase the risk of heart disease and diabetes.",
      },
      {
        title: "Healthy range",
        description:
          "A BMI between 18.5 and 24.9 is generally considered healthy.",
      },
    ],
    tips: [
      {
        title: "Physical activity",
        description:
          "At least 150 minutes of moderate activity per week is recommended.",
      },
      {
        title: "Balanced nutrition",
        description:
          "Balancing proteins, carbs, and fats helps weight control.",
      },
    ],
  },
  payment: {
    success: "Your payment was completed successfully",
    failed: "Your payment has failed",
    paymentMethod: "Payment method",
    date: "Date",
    status: "Status",
    successStatus: "Successful",
    failedStatus: "Failed",
  },
};

const ru: Messages = {
  ...en,
  nav: {
    halls: "Фитнес-центры",
    plans: "Подписка",
    market: "Fit market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Войти",
    signup: "Регистрация",
    howItWorks: "Как это работает",
    business: "Бизнес",
    downloadApp: "Скачать приложение",
    corporate: "Корпоративным",
    becomePartner: "Стать партнёром",
    toggleTheme: "Светлая / тёмная тема",
  },
  footer: {
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    feedback: "Обратная связь",
    contact: "Контакты",
    tagline:
      "Одна подписка — доступ к сотням фитнес-центров. Экосистема фитнеса и здоровой жизни в Азербайджане.",
    platform: "Платформа",
    company: "Компания",
    partnership: "Сотрудничество",
    howItWorks: "Как это работает",
    halls: "Фитнес-центры",
    plans: "Подписка",
    fitStore: "FitStore",
    bmi: "ИМТ",
    about: "О нас",
    news: "Новости",
    corporate: "Корпоративным",
    becomePartner: "Стать партнёром",
    specialOffers: "Спецпредложения",
    faq: "FAQ",
    copyright: "© 2026 FitNest",
  },
  home: {
    ...en.home,
    heroTitle: "Одна подписка — все возможности активной жизни",
    heroDescription:
      "Скачайте FitNest, выберите пакет и входите в 139 фитнес-центров\nпо QR-коду. Залы, бассейны, студии йоги — всё в одном приложении.",
    heroLine1Before: "Одна",
    heroLine1Accent: "подписка",
    heroLine2: "Все возможности",
    heroLine3: "активной жизни.",
    viewPackages: "Смотреть пакеты",
    qrDownloadTitle: "Скачать по QR",
    qrDownloadSubtitle: "Наведите камеру и откройте приложение",
    packageTiers: "Bronze · Silver · Gold · Platinum",
    packageLevelsLabel: "4 уровня пакетов",
    qrSuccessTitle: "QR-вход успешен",
    qrSuccessMeta: "Dream Body Pilates · 18:04",
    activePackage: "АКТИВНЫЙ ПАКЕТ",
    goldLabel: "Gold",
    visitsPerMonth: "12 визитов / мес",
    visitsUsed: "Использовано 7 визитов",
    stats: [
      { value: "139", label: "Фитнес-центров\nв одной сети" },
      { value: "45", label: "Премиум-площадок\nуровня Platinum" },
      { value: "12", label: "Визитов каждый месяц\nв любой центр" },
      { value: "4", label: "Уровня пакетов\nBronze     Platinum" },
    ],
    howTitle: "Четыре простых шага — и вы готовы к тренировке.",
    howEyebrow: "КАК ЭТО РАБОТАЕТ?",
    howHeading: "Четыре простых шага —\nи вы готовы к тренировке.",
    howItems: [
      {
        title: "Скачайте приложение",
        desc: "Установите FitNest из App Store или Google Play\nи зарегистрируйтесь.",
      },
      {
        title: "Выберите подписку",
        desc: "Bronze, Silver, Gold или Platinum —\nподберите вариант под бюджет и цели.",
      },
      {
        title: "Найдите площадку",
        desc: "Смотрите ближайшие центры, сервисы и преимущества.",
      },
      {
        title: "Входите по QR",
        desc: "Отсканируйте код на входе и начинайте.\nБез карты, договора и очереди.",
      },
    ],
    whyEyebrow: "Зачем одна подписка?",
    whyHeading: "Не привязывайтесь к одному залу.\nВыбирайте свой ритм.",
    whyLeftTitle: "Членство в одном зале",
    whyLeftItems: [
      "Только одна площадка",
      "Ограниченный выбор активностей",
      "Долгосрочный договор",
      "Физическая карта члена клуба",
      "Тренировки подстраиваются под график одного зала",
    ],
    whyRightTitle: "Подписка FitNest",
    whyRightItems: [
      "139 фитнес-центров",
      "Зал, бассейн, йога, пилатес и больше",
      "Гибкий выбор на 1, 3, 6 и 12 месяцев",
      "Быстрый QR-вход в приложении",
      "Выбираете ближайший центр, где бы ни были",
    ],
    gymsEyebrow: "Залы",
    gymsHeading: "Лучшие площадки города.",
    allGyms: "Все залы",
    subscriptionTitle: "Подписка",
    subscriptionHeading: "Выберите план под свои цели",
    subscriptionDescription:
      "для более сбалансированной и активной жизни.",
    viewPlans: "Смотреть планы",
    plansEyebrow: "Подписка",
    plansHeading: "12 визитов в каждом тарифе.\nРазница — в залах.",
    plansDescription:
      "Bronze, Silver, Gold и Platinum отличаются числом площадок и набором услуг. Каждый следующий тариф включает всё из предыдущих.",
    monthShort: "мес",
    mostPopular: "Самый популярный",
    bestValue: "ВЫГОДНЕЕ ВСЕГО",
    selectPackage: "Выбрать пакет",
    planFeatures: {
      bronze: [
        "12 визитов / мес",
        "19 залов уровня Bronze",
        "Групповые тренировки",
        "Трекинг активности в приложении",
      ],
      silver: [
        "12 визитов / мес",
        "Залы Silver и Bronze",
        "Групповые тренировки",
        "Трекинг активности в приложении",
      ],
      gold: [
        "12 визитов / мес",
        "Залы Gold и уровней ниже",
        "Групповые тренировки",
        "Трекинг активности в приложении",
      ],
      platinum: [
        "12 визитов / мес",
        "Залы всех уровней",
        "Групповые тренировки",
        "Трекинг активности в приложении",
      ],
    },
    paymentEyebrow: "Гибкие способы оплаты",
    paymentHeading: "Оплачивайте картой ABB",
    paymentSubtitle: "Используйте дебетовые и рассрочные карты",
    details: "Подробнее",
    mobileTitle: "Мобильный FitNest",
    mobileHeading: "Станьте ближе к здоровому образу жизни",
    mobileDescription: "чтобы держать в балансе тело, мысли и мотивацию.",
    appEyebrow: "Приложение FitNest",
    appHeading: "Вся фитнес-жизнь —\nв кармане",
    appDescription:
      "От поиска центров до QR-входа, управления пакетом\nи покупок в FitMarket — всё в одном приложении.",
    appFeatures: [
      {
        title: "Открывайте",
        desc: "Фильтруйте 139 центров по уровню, активности и расстоянию.",
      },
      {
        title: "Вход по QR",
        desc: "Без очереди на ресепшене — сканируйте код и сразу к тренировке.",
      },
      {
        title: "FitMarket",
        desc: "Протеин, одежда и аксессуары у партнёров со скидкой.",
      },
      {
        title: "Следите и растите",
        desc: "История визитов и оставшиеся лимиты всегда под рукой.",
      },
    ],
    ecoEyebrow: "Растём вместе",
    ecoHeading: "Найдите своё место в экосистеме FitNest.",
    corporateTitle: "Корпоративным клиентам",
    corporateDesc:
      "Дайте команде фитнес и wellness. Гибкие решения, простое управление, довольные сотрудники.",
    corporateCta: "Получить корпоративное предложение",
    partnerTitle: "Фитнес-центрам",
    partnerDesc:
      "Подключите центр к сети FitNest — новые гости, выше загрузка, больше доход.",
    partnerCta: "Стать партнёром",
    storeEyebrow: "FitStore",
    storeHeading: "Мы рядом и после\nтренировки.",
    storeDescription:
      "FitStore — раздел спорта и здоровья внутри приложения FitNest. Смотрите предложения партнёров и заказывайте со скидкой.",
    storeCta: "Узнать FitStore",
    storeItems: [
      { title: "Протеин и добавки", subtitle: "Скидка до 5%" },
      { title: "Спортивная одежда", subtitle: "Магазины-партнёры" },
      { title: "Аксессуары и инвентарь", subtitle: "Избранные предложения" },
    ],
    bmiEyebrow: "ИМТ",
    bmiHeading: "Узнайте индекс\nмассы тела.",
    bmiDescription:
      "Введите рост и вес, рассчитайте ИМТ и получите пояснение к результату.",
    bmiCta: "Рассчитать ИМТ",
    heightLabel: "Рост",
    weightLabel: "Вес",
    bmiLow: "Недостаток",
    bmiNormal: "Норма",
    bmiOver: "Избыточный вес",
    bmiObese: "Ожирение",
    monthlyPlan: "мес. план",
    trialPlan: "Пробный план",
    entry: "посещений",
    unlimitedEntry: "безлимит",
    oldPrice: "Старая цена",
    features: "особенности плана",
    gymEntryCount: "Количество посещений",
    freezeDays: "дней заморозки",
    carouselAria: "Карусель тарифов",
    planAria: "тариф",
  },
  offers: {
    ...en.offers,
    eyebrow: "Подписка",
    heroTitle: "12 визитов в каждом тарифе.\nРазница — в залах.",
    heroDescription:
      "Bronze, Silver, Gold и Platinum отличаются числом площадок и набором услуг. Каждый следующий тариф включает всё из предыдущих.",
    months: "мес",
    whatAwaits: "планах: что включено?",
    includedGyms: "Залы в составе пакета",
    appHeading: "Сделайте шаг к здоровому образу жизни",
    appDescription: "чтобы держать тело, разум и мотивацию в балансе.",
    durationsEyebrow: "Сроки",
    durationsHeading: "Выберите срок под свой ритм",
    durationCards: [
      {
        months: 1,
        label: "гибкий",
        description: "Без обязательств — остановите в любой момент.",
      },
      {
        months: 3,
        label: "популярный",
        description: "Оптимальный старт, чтобы закрепить привычку.",
      },
      {
        months: 6,
        label: "выгодный",
        description: "Лучшие условия для серьёзных целей.",
      },
      {
        months: 12,
        label: "максимум",
        description: "Тренировки весь год — самый выгодный тариф.",
      },
    ],
    ctaTitle: "Выбрали тариф? Активируйте в приложении.",
    ctaDescription:
      "Подписка оформляется только в приложении FitNest. Скачайте, выберите пакет и начните первую тренировку сегодня.",
  },
  paymentOptions: {
    ...en.paymentOptions,
    eyebrow: "Особые способы оплаты",
    abbTitle: "Оплачивайте картой ABB",
    abbDescription:
      "Используйте дебетовые и рассрочные карты, чтобы оформить подписку FitNest удобнее.",
    coinEyebrow: "FitNest Coin",
    coinTitle: "Копите Coin и\nполучайте больше",
    coinDescription:
      "Будьте активны в FitNest, копите Coin и используйте их для спецвозможностей, скидок и предложений партнёров.",
    bobTitle: "Оплачивайте картой Bank of Baku",
    bobDescription:
      "Оформите подписку FitNest в рассрочку картами Bank of Baku и не прерывайте здоровый ритм.",
    zeroPercent: "0%",
    commission: "комиссия",
    upTo12Months: "До 12 месяцев",
    installment: "рассрочка",
    fast: "Быстро",
    easyPayment: "и удобнее оплата",
    learnMore: "Подробнее",
    abbDetail: {
      ...en.paymentOptions.abbDetail,
      back: "Спецпредложения",
      heroTitle: "Оформите подписку FitNest в рассрочку картой ABB",
      cardsValue: "Карты ABB",
      cardsLabel: "Дебетовые и рассрочные карты",
      howTitle: "Как пользоваться?",
      howDescription:
        "Держатели карт ABB могут оформить подписку FitNest в рассрочку. Разделите платёж удобнее и продолжайте тренировки.",
      steps: [
        {
          title: "Выберите тариф",
          description: "Выберите подходящую подписку FitNest.",
        },
        {
          title: "Выберите карту ABB",
          description: "При оплате используйте\nкарту ABB.",
        },
        {
          title: "Оплатите в рассрочку",
          description: "Разделите на выбранный срок и начните тренировки.",
        },
      ],
      termsTitle: "Условия рассрочки",
      termsDescription:
        "Подписку FitNest можно оформить на указанные сроки без комиссии.",
      periodColumn: "Срок рассрочки",
      commissionColumn: "Комиссия",
      rows: [
        { period: "3 месяца", fee: "0 %" },
        { period: "6 месяцев", fee: "0 %" },
        { period: "12 месяцев", fee: "0 %" },
      ],
    },
    bobDetail: {
      ...en.paymentOptions.bobDetail,
      back: "Спецпредложения",
      heroTitle: "Оформите подписку FitNest в рассрочку картой Bank of Baku",
      cardsValue: "Карты BOB",
      cardsLabel: "Дебетовые и рассрочные карты",
      howTitle: "Как пользоваться?",
      howDescription:
        "Держатели карт Bank of Baku могут оформить подписку FitNest в рассрочку. Разделите платёж удобнее и продолжайте тренировки.",
      steps: [
        {
          title: "Выберите тариф",
          description: "Выберите подходящую подписку FitNest.",
        },
        {
          title: "Выберите карту Bank of Baku",
          description: "При оплате используйте\nкарту Bank of Baku.",
        },
        {
          title: "Оплатите в рассрочку",
          description: "Разделите на выбранный срок и начните тренировки.",
        },
      ],
      termsTitle: "Условия рассрочки",
      termsDescription:
        "Подписку FitNest можно оформить на указанные сроки без комиссии.",
      periodColumn: "Срок рассрочки",
      commissionColumn: "Комиссия",
      rows: [
        { period: "1 месяц", fee: "0 %" },
        { period: "3 месяца", fee: "0 %" },
        { period: "6 месяцев", fee: "0 %" },
        { period: "12 месяцев", fee: "0 %" },
      ],
    },
    coinDetail: {
      ...en.paymentOptions.coinDetail,
      back: "Спецпредложения",
      heroTitle: "Копите Coin и\nполучайте больше",
      sections: [
        {
          title: "1. Общие положения",
          body: "FitNest Coin позволяет пользователям получать Coin за активность на платформе и использовать их при покупке подписки. Система Coin поддерживает активность в FitNest и помогает пользоваться возможностями платформы.",
        },
        {
          title: "2. Начисление Coin",
          body: "Новым пользователям начисляется 50 Coin в подарок. После применения скидок за каждый фактически оплаченный 1 AZN начисляется 1 Coin.",
        },
        {
          title: "3. Стоимость Coin",
          body: "20 Coin = 1 AZN. Накопленные Coin можно использовать при оформлении подписки FitNest.",
        },
        {
          title: "4. Использование Coin",
          body: "Coin используются только при покупке подписки FitNest. Coin нельзя обналичить или перевести на другой аккаунт.",
        },
        {
          title: "5. Срок действия Coin",
          body: "Срок действия Coin составляет 12 месяцев с даты получения первого Coin. Просроченные Coin использовать нельзя.",
        },
        {
          title: "Скидки и начисление Coin",
          body: "Если к покупке применена скидка, Coin начисляются исходя из фактически оплаченной суммы после скидки. За каждый фактически оплаченный 1 AZN начисляется 1 Coin.",
        },
        {
          title: "Coin при возврате",
          body: "При возврате подписки Coin, использованные при этой покупке, возвращаются на баланс. Coin, начисленные за эту покупку, списываются с баланса.",
        },
        {
          title: "Баланс Coin",
          body: "Текущий баланс Coin можно увидеть в приложении FitNest. Баланс обновляется по начисленным и использованным Coin.",
        },
        {
          title: "Перевод и обналичивание Coin",
          body: "Coin можно использовать только на своём аккаунте. Обменять Coin на деньги или перевести на другой счёт нельзя.",
        },
        {
          title: "История Coin",
          body: "В приложении можно открыть историю Coin и посмотреть начисленные и использованные Coin.",
        },
      ],
    },
  },
  fitMarket: {
    ...en.fitMarket,
    eyebrow: "FitStore",
    heroTitle: "Всё необходимое для спорта",
    heroDescription:
      "Магазин спортивной одежды, питания, оборудования и широкого ассортимента товаров",
    searchPlace: "Поиск.....",
    newBadge: "Новое",
    cardDetailsAria: "к деталям",
    detailsDescription:
      "Мультивитамины, витамин D, омега-3 и добавки для общего здоровья.",
    contact: "Контакт",
    address: "Адрес",
    workHours: "Часы работы",
    map: "Карта",
    visit: "Перейти",
  },
  centers: {
    ...en.centers,
    eyebrow: "Фитнес-центры",
    heroTitle: "{n} центров в одной подписке",
    heroDescription:
      "Залы, бассейны, студии йоги и пилатеса, бокс-клубы. Фильтруйте по пакету и найдите ближайший.",
    searchPlace: "Поиск места",
    cityDistrict: "Город",
    trainingTypes: "Виды тренировок",
    membership: "Подписка",
    forWhom: "Для кого",
    loadMore: "Ещё",
    allOption: "Все",
    reset: "Сброс",
    workHours: "Часы работы",
    detailsAria: "подробности",
    detailsSubtitle: "Идеальное место, чтобы стать сильнее и энергичнее.",
    previousImage: "Предыдущее фото",
    nextImage: "Следующее фото",
    aboutGym: "О зале",
    aboutText:
      "ProFit Club предлагает просторные зоны, современное оборудование и комфортную атмосферу для любого уровня.",
    amenities: "Возможности",
    equipment: "Оборудование",
    equipmentText:
      "Кардио-тренажеры • Функциональная зона • Стойка для приседа • Гантели/штанги • Кабельные тренажеры • Зона растяжки",
    coaches: "Тренеры",
    contact: "Контакт",
    address: "Адрес",
    workHoursTitle: "Часы работы",
    map: "Карта",
    gymAccess: "Вход в этот зал",
    gymAccessHint:
      "Вход с пакетом {tier} и выше. Отсканируйте QR в приложении и начинайте.",
    gymAccessHintSingle:
      "Вход с пакетом {tier}. Отсканируйте QR в приложении и начинайте.",
    viewSubscriptions: "Смотреть подписки",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Часто задаваемые вопросы",
    contactBefore: "Не нашли ответ?",
    contactAfter: "напишите на этот адрес — наша команда поможет.",
    searchPlaceholder: "Поиск....",
    all: "Все",
    empty: "Пока нет добавленных вопросов.",
    emptySearch: "Подходящих вопросов не найдено.",
  },
  contact: {
    title: "Связаться с нами",
    subtitle: "Наша команда свяжется с вами",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Введите сообщение",
    send: "Отправить",
  },
  about: {
    eyebrow: "О нас",
    title: "Строим фитнес-экосистему\nи здоровый образ жизни Азербайджана.",
    description:
      "FitNest — мобильная платформа, которая даёт доступ к сотням фитнес-центров по одной подписке. Наша цель проста: сделать спорт доступным, гибким и приятным для каждого.",
    gymsLabel: "Фитнес-центров",
    packagesLabel: "Уровня пакетов",
    languagesLabel: "Языка",
    teamLabel: "Человек в команде",
    missionTitle: "Наша миссия",
    missionText:
      "Убрать все барьеры между людьми и фитнес-центрами: одно приложение, одна подписка, сотни площадок. Поддержать каждого технологией, чтобы можно было строить спортивную жизнь в своём ритме.",
    goalsTitle: "Наши цели",
    goalsText:
      "Стать платформой №1 для всех в Азербайджане, кто ищет здоровый образ жизни — региональным примером экосистемы, где спорт, wellness, контент и покупки собраны вместе.",
    valuesEyebrow: "Наши ценности",
    valuesTitle: "Принципы, которые нас ведут",
    values: [
      {
        title: "Человек в центре",
        text: "Решения определяют комфорт пользователя и его реальные потребности.",
      },
      {
        title: "Прозрачность",
        text: "Открытые цены, понятные условия и подписка без скрытых платежей.",
      },
      {
        title: "Технологии",
        text: "QR-вход, умный поиск и цифровое управление — всё в одном приложении.",
      },
      {
        title: "Локальная экосистема",
        text: "Растём вместе с местными центрами, бизнесом и сообществом.",
      },
    ],
  },
  feedback: {
    title: "Жалобы и предложения",
    subtitle: "Ваше мнение важно для нас - поделитесь им, и мы вас услышим!",
    fullName: "Имя, Фамилия",
    email: "Email",
    requestType: "Тип обращения",
    complaint: "Жалоба",
    suggestion: "Предложение",
    other: "Другое",
    message: "Введите сообщение",
    send: "Отправить",
  },
  privacy: {
    eyebrow: "Юридический документ",
    title: "Политика конфиденциальности",
    subtitle:
      "Политика сбора, использования и защиты\nперсональных данных на платформе FitNest.",
    updatedLabel: "Последнее обновление:",
    empty: "Политика конфиденциальности сейчас недоступна.",
  },
  terms: {
    eyebrow: "Юридический документ",
    title: "Условия использования",
    subtitle:
      "Условия и правовые положения, действующие при использовании сервисов FitNest. Пользуясь сайтом и мобильным приложением FitNest, вы считаетесь принявшими эти условия.",
    updatedLabel: "Последнее обновление:",
    empty: "Условия использования сейчас недоступны.",
  },
  bmi: {
    ...en.bmi,
    heroTitle: "Индекс массы тела",
    heroDescription: "Узнайте идеальный вес. Рассчитайте ИМТ по росту и весу.",
    params: "Параметры",
    weight: "Вес",
    height: "Рост",
    birthDate: "Дата рождения",
    gender: "Пол",
    male: "Мужской",
    female: "Женский",
    calculate: "Рассчитать",
    resultLabel: "Ваш результат ИМТ:",
    underweight: "Недостаточный вес",
    normal: "Норма",
    overweight: "Избыточный вес",
    obesity: "Ожирение",
    noResult: 'Введите параметры и нажмите "Рассчитать", чтобы увидеть результат.',
    facts: "Факты и советы",
    metaMessages: {
      underweight: "Совет: сбалансируйте питание и тренировки.",
      normal: "Отлично! Ваш вес в здоровом диапазоне.",
      overweight: "Совет: увеличьте активность и следите за рационом.",
      obesity: "Рекомендуется персональный план со специалистом.",
    },
    infoItems: [
      { title: "Что такое ИМТ?", description: "Простой показатель соотношения роста и веса." },
      { title: "Риски", description: "Высокий ИМТ может повысить риск болезней сердца и диабета." },
      { title: "Здоровый диапазон", description: "ИМТ 18.5 - 24.9 обычно считается нормальным." },
    ],
    tips: [
      { title: "Физическая активность", description: "Рекомендуется минимум 150 минут умеренной активности в неделю." },
      { title: "Сбалансированное питание", description: "Баланс белков, жиров и углеводов помогает контролю веса." },
    ],
  },
  payment: {
    success: "Оплата прошла успешно",
    failed: "Оплата не удалась",
    paymentMethod: "Способ оплаты",
    date: "Дата",
    status: "Статус",
    successStatus: "Успешно",
    failedStatus: "Ошибка",
  },
};

export const messages: Record<Locale, Messages> = {
  az,
  en,
  ru,
};

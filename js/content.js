/* =========================================================
   Page content — About, FAQ, size guide, collection
   descriptions. Edit text here, not in the pages.
   The address, WhatsApp number, sections, nationwide delivery
   and the no-inspection rule come from the mall's Instagram and
   Google Maps. The story wording, working-day estimates, fees,
   exchange terms and size chart are sample values for the mock-up.
   ========================================================= */
window.LP = window.LP || {};

// Shop policies: shown on the product page and in the FAQ ({amman} and {others} become the current fees)
const LP_POLICIES = {
  delivery: {
    ar: "التوصيل لجميع أنحاء المملكة من {others}، وبياخد ١–٣ أيام عمل. الرسوم بتظهر بالسلة قبل ما تأكدي الطلب، وما في خدمة معاينة عند الاستلام.",
    en: "We deliver all over Jordan from {others}, within 1–3 working days. The fee shows in your bag before you order, and orders can't be opened for inspection on delivery."
  },
  payment: {
    ar: "الدفع كاش عند الاستلام.",
    en: "You pay in cash when your order arrives."
  },
  exchange: {
    ar: "بتقدري تبدّلي القطعة خلال ٣ أيام من الاستلام، بشرط تكون مش ملبوسة ومعها التاغ. راسلينا ونرتب التبديل معك.",
    en: "You can exchange a piece within 3 days of delivery, as long as it's unworn with its tag. Message us and we'll arrange it."
  }
};

LP.content = {
  policies: LP_POLICIES,

  /* ---------- About ---------- */
  about: {
    title: { ar: "حكاية جواهر\u00a0مول", en: "The Jawaher\u00a0Mall story" },   // \u00a0 keeps the brand name on one line
    lead: {
      ar: "مول بقلب سوق البخارية بإربد، فيه كل شي بتحتاجه العيلة: نسائي، أطفال، أحذية وحقائب.",
      en: "A mall in the heart of Irbid's Souq Al-Bukhariyya with everything the family needs: women's, kids', shoes and bags."
    },
    body: [
      {
        ar: "بجواهر مول بتلاقي أقسام النسائي والأطفال والأحذية والحقائب تحت سقف واحد، وبننسّق القطع بأقسام حسب ألوان الموسم، من الإسبريسو للبني والأخضر.",
        en: "At Jawaher Mall you'll find women's, kids', shoes and bags under one roof, with pieces arranged in sections by the season's colours, from Espresso to Brown & Green."
      },
      {
        ar: "بننزّل قطع جديدة كل يوم على ستوري إنستغرام مع تفاصيلها، وبنرتّبها بأقسام حسب الألوان: إسبريسو، بني وأخضر، وكحلي وخمري للشتا.",
        en: "New pieces go up on our Instagram story every day with their details, arranged in sections by colour: Espresso, Brown & Green, and navy and burgundy for winter."
      },
      {
        ar: "وإذا مش قادرة تزورينا، اطلبي من الموقع وبنوصّل طلبك لباب بيتك بأي محافظة، والدفع عند الاستلام.",
        en: "And if you can't visit, order from the site and we'll deliver to your door in any governorate, with cash on delivery."
      }
    ],
    images: ["assets/products/batool-tracksuit-black-2.webp", "assets/brand/store.webp"],
    gallery: [
      "assets/products/leather-jacket-brown-2.webp",
      "assets/products/boucle-coat-cream-1.webp",
      "assets/products/striped-tracksuit-skyblue-1.webp",
      "assets/products/heart-stripe-pyjama-pink-1.webp"
    ]
  },

  values: [
    { icon: "spark", title: { ar: "كل الأقسام بمكان واحد", en: "Every section in one place" }, text: { ar: "نسائي، أطفال، أحذية وحقائب.", en: "Women's, kids', shoes and bags." } },
    { icon: "camera", title: { ar: "جديد كل يوم", en: "New pieces daily" }, text: { ar: "بننزّل أحدث القطع يومياً على الستوري مع تفاصيلها.", en: "The newest pieces go up on our story every day with their details." } },
    { icon: "truck", title: { ar: "توصيل لكل المملكة", en: "Delivery across Jordan" }, text: { ar: "طلبك بيوصلك لباب بيتك والدفع عند الاستلام.", en: "Your order comes to your door, and you pay cash on delivery." } }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    {
      q: { ar: "كيف بطلب من الموقع؟", en: "How do I order from the site?" },
      a: { ar: "أضيفي القطع للسلة، عبّي معلومات التوصيل، واضغطي «تأكيد الطلب». بتوصلك صفحة فيها رقم طلبك وبتتابعي منها حالته، والدفع عند الاستلام.", en: "Add pieces to your bag, fill in your delivery details and tap “Place order”. You'll get a page with your order number where you can track it — you pay in cash on delivery." }
    },
    {
      q: { ar: "كيف بتابع طلبي؟", en: "How do I track my order?" },
      a: { ar: "افتحي رابط صفحة الطلب اللي وصلك بعد الطلب، أو ادخلي على «تتبعي طلبك» واكتبي رقم الطلب ورقم هاتفك.", en: "Open your order page link, or go to “Track your order” and enter your order number and phone number." }
    },
    {
      id: "delivery",   // the free-delivery offer is added to this answer when it's on
      q: { ar: "قديش التوصيل وقديش بياخد وقت؟", en: "How much is delivery and how long does it take?" },
      a: LP_POLICIES.delivery
    },
    {
      q: { ar: "بقدر أبدّل القطعة؟", en: "Can I exchange a piece?" },
      a: LP_POLICIES.exchange
    },
    {
      q: { ar: "كيف بعرف مقاسي؟", en: "How do I find my size?" },
      a: { ar: "أغلب الملابس النسائية بمقاس ١ و٢، وفي قطع فري سايز؛ الأحذية من ٣٦ لـ٤١، وملابس الأطفال حسب العمر. بصفحة كل قطعة اضغطي «جدول المقاسات» لتشوفي قياساتها، أو «اعرفي مقاسك» وبنقترح عليكي المقاس الأنسب.", en: "Most women's clothing comes in sizes 1 and 2, and some pieces are free size; shoes run from 36 to 41, and kids' wear goes by age. On each piece's page, tap “Size chart” to see its measurements, or “Find my size” and we'll suggest the best size for you." }
    },
    {
      q: { ar: "وين موقع المحل ومتى بتفتحوا؟", en: "Where is the store and when are you open?" },
      a: { ar: "إربد، شارع المتنبي، سوق البخارية. بنستقبلكم يومياً من ١٠ الصبح لـ١٠ المسا، والجمعة من ٢ بعد الظهر.", en: "Irbid, Al-Mutanabbi Street, Souq Al-Bukhariyya. We're open daily from 10 AM to 10 PM, and from 2 PM on Fridays." }
    }
  ],

  /* ---------- Size guide ---------- */
  // Body measurements in cm (length is the garment's length)
  sizeChart: {
    columns: ["bust", "waist", "hips", "length"],
    rows: [
      { size: "1", values: { bust: "88–96", waist: "70–78", hips: "96–104", length: "140" } },
      { size: "2", values: { bust: "96–104", waist: "78–86", hips: "104–112", length: "145" } },
      { size: "free", values: { bust: "88–108", waist: "70–90", hips: "96–116", length: "142" } }
    ]
  },
  measureLabels: {
    bust: { ar: "الصدر", en: "Bust" },
    waist: { ar: "الخصر", en: "Waist" },
    hips: { ar: "الأرداف", en: "Hips" },
    length: { ar: "الطول", en: "Length" }
  },
  howToMeasure: [
    { key: "bust", text: { ar: "قيسي حول أعرض نقطة بالصدر، مع إبقاء الشريط مستوي وغير مشدود.", en: "Measure around the fullest part of your bust, keeping the tape level and not tight." } },
    { key: "waist", text: { ar: "قيسي حول أضيق نقطة بالخصر، عادة فوق السرة بقليل.", en: "Measure around the narrowest part of your waist, usually just above the navel." } },
    { key: "hips", text: { ar: "قيسي حول أعرض نقطة بالأرداف مع ضم القدمين.", en: "Measure around the fullest part of your hips with your feet together." } },
    { key: "length", text: { ar: "طول القطعة من أعلى الكتف لآخر القطعة.", en: "The garment's length from the top of the shoulder to the hem." } }
  ],

  /* ---------- Collection descriptions (home lookbook) ---------- */
  collections: {
    espresso:   { ar: "درجات البني والقهوة من قسم الإسبريسو: سويتات، هوديز وجاكيتات جلد.", en: "Coffee and brown tones from the Espresso section: sweatshirts, hoodies and leather jackets." },
    winter:     { ar: "كحلي وخمري ومقلّم: ترانش، فرو، بوكليه وكنزات لأيام الشتا.", en: "Navy, burgundy and stripes: trench coats, faux fur, bouclé and knits for winter days." },
    browngreen: { ar: "قسم البني والأخضر: معاطف قصيرة، كنزات صوف وحقائب شمواه.", en: "The Brown & Green section: short coats, chunky knits and suede bags." },
    pyjama:     { ar: "بيجامات خريف–شتاء ٢٠٢٦: مخمل وريب وقطن بنقشات ناعمة.", en: "Autumn–Winter 2026 pyjamas: plush, ribbed and cotton sets in soft prints." },
    shoes:      { ar: "أحذية وحقائب لكل يوم: بوت، سنيكرز، كعب، شباشب وحقائب شمواه.", en: "Shoes and bags for every day: boots, sneakers, heels, slippers and suede bags." }
  }
};

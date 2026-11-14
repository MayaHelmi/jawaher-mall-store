/* =========================================================
   Product catalog — taken from @jawaher.mall2 posts.
   PRICES: the ones written in the posts are kept (pyjama pants,
   slippers, sandals, heels, kids' sneakers, three-piece pyjama);
   every other `price` is a demo value to replace with the shop's
   real price (JOD).
   `images` = number of photos per color in assets/products/,
   named <id>-<color>-<n>.webp
   ========================================================= */
window.LP = window.LP || {};

LP.products = [
  {
    id: "smooth-set", category: "sets", collection: "espresso", badges: ["new"], price: 11,
    name: { ar: "طقم سويت SMOOTH", en: "SMOOTH Sweat Set" },
    desc: { ar: "سويت شيرت واسع بطبعة SMOOTH مع بنطلون بنفس القماش، من قسم الإسبريسو.", en: "A roomy sweatshirt with the SMOOTH print and matching joggers, from the Espresso section." },
    colors: ["brown", "cream"], sizes: ["1", "2"],
    images: { brown: 2, cream: 1 }
  },
  {
    id: "leather-jacket", category: "outerwear", collection: "espresso", badges: ["new"], price: 18,
    name: { ar: "جاكيت جلد ترند الموسم", en: "Season's Leather Jacket" },
    desc: { ar: "جاكيت جلد بني بقصّة واسعة وياقة قميص، ترند الموسم.", en: "A brown leather jacket in an oversized cut with a shirt collar — the trend of the season." },
    colors: ["brown"], sizes: ["1", "2"],
    images: { brown: 4 }
  },
  {
    id: "fur-coat", category: "outerwear", collection: "winter", badges: ["new"], price: 20,
    name: { ar: "معطف فرو خمري", en: "Burgundy Faux Fur Coat" },
    desc: { ar: "معطف فرو طويل بلون خمري، قطعة الشتا اللي بتلفت النظر.", en: "A long faux fur coat in burgundy — the standout piece of winter." },
    colors: ["burgundy"], sizes: ["free"],
    images: { burgundy: 1 }
  },
  {
    id: "boucle-coat", category: "outerwear", collection: "winter", badges: ["new"], price: 19,
    name: { ar: "معطف بوكليه كريمي", en: "Cream Bouclé Coat" },
    desc: { ar: "معطف بوكليه ناعم بلون كريمي وقصّة واسعة، بيلبق مع الجينز.", en: "A soft bouclé coat in cream with a relaxed cut that pairs easily with denim." },
    colors: ["cream"], sizes: ["free"],
    images: { cream: 1 }
  },
  {
    id: "biker-jacket", category: "outerwear", collection: "winter", badges: ["new"], price: 17,
    name: { ar: "جاكيت بايكر جلد", en: "Leather Biker Jacket" },
    desc: { ar: "جاكيت بايكر جلد بسحّاب مائل وخصر مطاط، بلونين.", en: "A leather biker jacket with an asymmetric zip and elasticated hem, in two colours." },
    colors: ["burgundy", "brown"], sizes: ["1", "2"],
    images: { burgundy: 1, brown: 1 }
  },
  {
    id: "navy-half-zip", category: "tops", collection: "winter", badges: ["new"], price: 9,
    name: { ar: "كنزة كحلي بسحّاب", en: "Navy Half-Zip Knit" },
    desc: { ar: "كنزة صوف كحلي بياقة عالية وسحّاب، مع فتحات جانبية.", en: "A navy knit with a zip-up high collar and side slits." },
    colors: ["navy"], sizes: ["free"],
    images: { navy: 2 }
  },
  {
    id: "striped-polo", category: "tops", collection: "winter", badges: ["new"], price: 9,
    name: { ar: "بولو صوف مقلّم", en: "Striped Knit Polo" },
    desc: { ar: "بولو صوف مقلّم بكحلي وخمري وأوف وايت، بياقة كحلي.", en: "A knit polo striped in navy, burgundy and off-white, with a navy collar." },
    colors: ["navy"], sizes: ["free"],
    images: { navy: 3 }
  },
  {
    id: "trench-coat", category: "outerwear", collection: "winter", badges: ["new"], price: 19,
    name: { ar: "ترانش كوت خمري", en: "Burgundy Trench Coat" },
    desc: { ar: "ترانش طويل بلون خمري وأزرار ذهبية.", en: "A long trench in burgundy with gold buttons." },
    colors: ["burgundy"], sizes: ["1", "2"],
    images: { burgundy: 2 }
  },
  {
    id: "chunky-sweater", category: "tops", collection: "browngreen", badges: [], price: 8,
    name: { ar: "كنزة صوف واسعة", en: "Oversized Knit Sweater" },
    desc: { ar: "كنزة صوف بقصّة واسعة وياقة دائرية، بلونين من قسم البني والأخضر.", en: "A crew-neck knit in an oversized cut, in two shades from the Brown & Green section." },
    colors: ["pistachio", "olive"], sizes: ["free"],
    images: { pistachio: 1, olive: 1 }
  },
  {
    id: "belted-short-coat", category: "outerwear", collection: "browngreen", badges: [], price: 16,
    name: { ar: "معطف قصير بحزام", en: "Belted Short Coat" },
    desc: { ar: "معطف بني قصير بأزرار مزدوجة وحزام على الخصر.", en: "A short brown double-breasted coat with a tie belt at the waist." },
    colors: ["brown"], sizes: ["1", "2"],
    images: { brown: 2 }
  },
  {
    id: "shirt-skirt-set", category: "sets", collection: "browngreen", badges: [], price: 14,
    name: { ar: "طقم قميص وتنورة", en: "Shirt & Skirt Set" },
    desc: { ar: "قميص بربطة على الخصر مع تنورة طويلة بنفس القماش البني.", en: "A tie-waist shirt with a long skirt in the same brown fabric." },
    colors: ["brown"], sizes: ["1", "2"],
    images: { brown: 1 }
  },
  {
    id: "suede-tote", category: "shoes", collection: "browngreen", badges: [], price: 9,
    name: { ar: "حقيبة شمواه بتعليقة خرز", en: "Suede Bag with Beaded Charm" },
    desc: { ar: "حقيبة يد شمواه بقاعدة جلد وتعليقة خرز، بلونين.", en: "A suede handbag with a leather base and a beaded charm, in two colours." },
    colors: ["brown", "olive"], sizes: ["one"],
    images: { brown: 1 }
  },
  {
    id: "quilted-box-bag", category: "shoes", collection: "browngreen", badges: [], price: 8,
    name: { ar: "حقيبة مبطّنة", en: "Quilted Box Bag" },
    desc: { ar: "حقيبة صغيرة مبطّنة بمسكة مجدولة.", en: "A small quilted box bag with a braided handle." },
    colors: ["brown"], sizes: ["one"],
    images: { brown: 1 }
  },
  {
    id: "winter-boots", category: "shoes", collection: "winter", badges: [], price: 10,
    name: { ar: "بوت شتوي", en: "Winter Boots" },
    desc: { ar: "بوت شتوي بنعل سميك من كوليكشن الشتا، بأكثر من موديل.", en: "Chunky-soled boots from the winter collection, in several styles." },
    colors: ["brown", "beige", "black"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { brown: 4 }
  },
  {
    id: "logo-half-zip", category: "tops", collection: "essentials", badges: [], price: 8,
    name: { ar: "كنزة نص سحّاب", en: "Half-Zip Knit" },
    desc: { ar: "كنزة صوف بنص سحّاب وياقة عالية، بثلاث ألوان.", en: "A half-zip knit with a high collar, in three colours." },
    colors: ["pink", "brown", "burgundy"], sizes: ["1", "2"],
    images: { pink: 1, brown: 1, burgundy: 1 }
  },
  {
    id: "scarf-collar-jacket", category: "outerwear", collection: "winter", badges: [], price: 16,
    name: { ar: "جاكيت بياقة وشاح", en: "Scarf-Collar Jacket" },
    desc: { ar: "جاكيت كريمي بياقة وشاح كاروهات وأكمام بطيّة.", en: "A cream jacket with a plaid scarf collar and turned-back cuffs." },
    colors: ["cream"], sizes: ["free"],
    images: { cream: 1 }
  },
  {
    id: "tie-waist-jacket", category: "outerwear", collection: "winter", badges: [], price: 15,
    name: { ar: "جاكيت بحزام خصر", en: "Tie-Waist Jacket" },
    desc: { ar: "جاكيت بلون بيج فاتح وحزام بيلف على الخصر.", en: "A light beige jacket with a belt that ties at the waist." },
    colors: ["lightbeige"], sizes: ["1", "2"],
    images: { lightbeige: 1 }
  },
  {
    id: "high-neck-knit", category: "tops", collection: "winter", badges: [], price: 8,
    name: { ar: "كنزة صوف بياقة عالية", en: "High-Neck Knit" },
    desc: { ar: "كنزة صوف كحلي بياقة عالية وقصّة واسعة.", en: "A navy knit with a high neck and a relaxed cut." },
    colors: ["navy"], sizes: ["free"],
    images: { navy: 2 }
  },
  {
    id: "plaid-shirt", category: "tops", collection: "winter", badges: [], price: 9,
    name: { ar: "قميص كاروهات", en: "Plaid Shirt" },
    desc: { ar: "قميص كاروهات بكحلي وأبيض.", en: "A plaid shirt in navy and white." },
    colors: ["navy"], sizes: ["1", "2"],
    images: { navy: 1 }
  },
  {
    id: "knit-set", category: "sets", collection: "winter", badges: [], price: 13,
    name: { ar: "طقم صوف رمادي", en: "Grey Knit Set" },
    desc: { ar: "كنزة صوف رمادي مع قطعة سفلية واسعة بنفس القماش.", en: "A grey knit top with a matching wide bottom." },
    colors: ["grey"], sizes: ["free"],
    images: { grey: 1 }
  },
  {
    id: "suede-handbag", category: "shoes", collection: "espresso", badges: [], price: 9,
    name: { ar: "حقيبة يد شمواه", en: "Suede Handbag" },
    desc: { ar: "حقيبة يد شمواه بني بحزام ومسكتين، من تشكيلة الحقائب الجديدة.", en: "A brown suede handbag with a buckle strap and two handles, from the new bag collection." },
    colors: ["brown"], sizes: ["one"],
    images: { brown: 2 }
  },
  {
    id: "suede-loafers", category: "shoes", collection: "essentials", badges: [], price: 8,
    name: { ar: "لوفر شمواه", en: "Suede Loafers" },
    desc: { ar: "لوفر شمواه أسود بنعل مجدول وشرّابة صغيرة.", en: "Black suede loafers with a braided sole and a small tassel." },
    colors: ["black"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { black: 3 }
  },
  {
    id: "girls-knit-set", category: "kids", collection: "kids", badges: [], price: 6,
    name: { ar: "طقم صوف بناتي", en: "Girls' Knit Set" },
    desc: { ar: "كنزة صوف بياقة مع تنورة كسرات، بثلاث ألوان.", en: "A collared knit top with a pleated skirt, in three colours." },
    colors: ["burgundy", "pink", "grey"], sizes: ["y2", "y4"],
    images: { burgundy: 2, pink: 1, grey: 1 }
  },
  {
    id: "boys-belt-bag-set", category: "kids", collection: "kids", badges: [], price: 6,
    name: { ar: "طقم ولادي مع حقيبة", en: "Boys' Set with Belt Bag" },
    desc: { ar: "سويت شيرت وبنطلون مع حقيبة خصر، بلونين.", en: "A sweatshirt and joggers with a belt bag, in two colours." },
    colors: ["navy", "burgundy"], sizes: ["y2", "y4", "y6"],
    images: { navy: 1, burgundy: 2 }
  },
  {
    id: "zip-fleece-set", category: "kids", collection: "kids", badges: [], price: 6,
    name: { ar: "طقم بسحّاب للأطفال", en: "Kids' Zip Set" },
    desc: { ar: "جاكيت بسحّاب وبنطلون مع حقيبة صغيرة، بلونين.", en: "A zip-up jacket and joggers with a small bag, in two colours." },
    colors: ["red", "black"], sizes: ["y2", "y4", "y6", "y8"],
    images: { red: 1, black: 1 }
  },
  {
    id: "colorblock-set", category: "kids", collection: "kids", badges: [], price: 6,
    name: { ar: "طقم كولور بلوك للأطفال", en: "Kids' Colour-Block Set" },
    desc: { ar: "جاكيت كولور بلوك وبنطلون مع حقيبة خصر، بثلاث ألوان.", en: "A colour-block jacket and joggers with a belt bag, in three colours." },
    colors: ["red", "grey", "navy"], sizes: ["y2", "y4", "y6", "y8"],
    images: { red: 1, grey: 1, navy: 1 }
  },
  {
    id: "kids-sneakers", category: "kids", collection: "kids", badges: [], price: 3.5,
    name: { ar: "أحذية رياضية للأطفال", en: "Kids' Sneakers" },
    desc: { ar: "أي حذاء أطفال بـ٣٫٥ دنانير، بأكثر من موديل ولون.", en: "Any kids' shoe for 3.5 JD, in several styles and colours." },
    colors: ["white", "black", "burgundy"], sizes: ["28", "30", "32", "34"],
    images: { white: 3 }
  },
  {
    id: "bow-print-pyjama", category: "sleepwear", collection: "pyjama", badges: [], price: 7,
    name: { ar: "بيجاما بنقشة الفيونكات", en: "Bow Print Pyjama Set" },
    desc: { ar: "بيجاما قطنية بنقشة فيونكات وأطراف مكشكشة، بأربع ألوان.", en: "A cotton pyjama set with a bow print and lettuce edges, in four colours." },
    colors: ["pink", "cream", "offwhite", "grey"], sizes: ["1", "2"],
    images: { pink: 1, cream: 1, offwhite: 1, grey: 1 }
  },
  {
    id: "heart-stripe-pyjama", category: "sleepwear", collection: "pyjama", badges: [], price: 7,
    name: { ar: "بيجاما قلوب بفيونكات", en: "Heart Stripe Pyjama Set" },
    desc: { ar: "بيجاما مقلّمة بقلوب صغيرة وفيونكات سودا على الصدر.", en: "A striped pyjama set with small hearts and black bows down the front." },
    colors: ["grey", "pink", "mint"], sizes: ["1", "2"],
    images: { grey: 1, pink: 1, mint: 1 }
  },
  {
    id: "plush-pyjama", category: "sleepwear", collection: "pyjama", badges: [], price: 8,
    name: { ar: "بيجاما مخمل بجيوب فيونكة", en: "Plush Pyjama Set with Bow Pockets" },
    desc: { ar: "بيجاما مخمل دافية بأطراف فرو وجيوب بفيونكة، متوفرة بسعر العرض.", en: "A warm plush pyjama set with fluffy trims and bow pockets, at the offer price." },
    colors: ["burgundy", "mocha", "navy"], sizes: ["1", "2"],
    images: { burgundy: 1, mocha: 1, navy: 1 }
  },
  {
    id: "pyjama-pants", category: "sleepwear", collection: "pyjama", badges: ["bestseller"], price: 3.5,
    name: { ar: "بنطلون بيجاما مريح وناعم", en: "Soft Pyjama Pants" },
    desc: { ar: "بنطلون بيجاما واسع بقماش مريح وناعم، بأكثر من نقشة.", en: "Wide pyjama pants in a soft, comfortable fabric, in several prints." },
    colors: ["cream", "pink", "white"], sizes: ["free"],
    images: { cream: 1, pink: 1, white: 1 }
  },
  {
    id: "ribbed-pyjama", category: "sleepwear", collection: "pyjama", badges: [], price: 8,
    name: { ar: "بيجاما ريب بفيونكات", en: "Ribbed Pyjama Set with Bows" },
    desc: { ar: "بيجاما ريب ناعمة بفيونكات على الصدر، من كوليكشن بيجامات خريف–شتاء ٢٠٢٦.", en: "A soft ribbed pyjama set with bows down the front, from the Autumn–Winter 2026 pyjama collection." },
    colors: ["pink", "burgundy"], sizes: ["1", "2"],
    images: { pink: 1, burgundy: 2 }
  },
  {
    id: "three-piece-pyjama", category: "sleepwear", collection: "pyjama", badges: [], price: 3.5,
    name: { ar: "بيجاما ثلاث قطع", en: "Three-Piece Pyjama Set" },
    desc: { ar: "بيجاما قطنية من ثلاث قطع، بثلاث نقشات.", en: "A three-piece cotton pyjama set, in three prints." },
    colors: ["white"], sizes: ["1", "2"],
    images: { white: 3 }
  },
  {
    id: "batool-tracksuit", category: "sets", collection: "essentials", badges: ["bestseller"], price: 14,
    name: { ar: "ترينينغ بتول", en: "Batool Tracksuit" },
    desc: { ar: "جاكيت بخصر مشدود وخطوط بيضا مع بنطلون واسع. رجع وتوفّر من جديد.", en: "A cinched-waist jacket with white stripes and wide-leg trousers. Back in stock." },
    colors: ["black"], sizes: ["1", "2"],
    images: { black: 4 }
  },
  {
    id: "flat-slides", category: "shoes", collection: "shoes", badges: [], price: 4,
    name: { ar: "شبشب سادة", en: "Flat Slides" },
    desc: { ar: "شبشب فلات بشريط عريض، بأربع ألوان.", en: "Flat slides with a wide strap, in four colours." },
    colors: ["pink", "skyblue", "white", "yellow"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { pink: 1, skyblue: 1, white: 1, yellow: 1 }
  },
  {
    id: "slippers", category: "shoes", collection: "shoes", badges: [], price: 3.5,
    name: { ar: "شبشب نسائي", en: "Women's Slippers" },
    desc: { ar: "شبشب نسائي بنعل مريح، بأكثر من موديل ولون. العرض حتى نفاذ الكمية.", en: "Women's slippers with a comfortable sole, in several styles and colours. Offer while stock lasts." },
    colors: ["beige", "black", "white", "burgundy"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { beige: 4 }
  },
  {
    id: "striped-tracksuit", category: "sets", collection: "essentials", badges: [], price: 12,
    name: { ar: "ترينينغ بخطوط جانبية", en: "Side-Stripe Tracksuit" },
    desc: { ar: "جاكيت بسحّاب وبنطلون واسع بخطوط جانبية، بأربع ألوان.", en: "A zip-up jacket and wide-leg trousers with side stripes, in four colours." },
    colors: ["yellow", "skyblue", "black", "burgundy"], sizes: ["1", "2"],
    images: { yellow: 1, skyblue: 1, black: 1, burgundy: 1 }
  },
  {
    id: "h-sandals", category: "shoes", collection: "shoes", badges: [], price: 2.5,
    name: { ar: "صندل بشريط عريض", en: "Cut-Out Slide Sandals" },
    desc: { ar: "صندل بشريط عريض مفرّغ ونعل سميك، بأكثر من لون.", en: "Slide sandals with a wide cut-out strap and a thick sole, in several colours." },
    colors: ["pink", "beige", "black"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { pink: 2, beige: 1 }
  },
  {
    id: "rose-heels", category: "shoes", collection: "shoes", badges: [], price: 6,
    name: { ar: "صندل كعب بوردة", en: "Rose Heeled Sandals" },
    desc: { ar: "صندل بكعب متوسط ووردة ساتان على الأصابع، بخمس ألوان.", en: "Mid-heel sandals with a satin rose at the toe, in five colours." },
    colors: ["black", "burgundy", "white", "beige", "grey"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { black: 1, burgundy: 1, white: 1, beige: 1, grey: 1 }
  },
  {
    id: "slingbacks", category: "shoes", collection: "shoes", badges: [], price: 5,
    name: { ar: "كعب سلينغ باك", en: "Slingback Heels" },
    desc: { ar: "كعب سلينغ باك بمقدمة مدببة، بلونين.", en: "Pointed-toe slingback heels, in two colours." },
    colors: ["white", "black"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { white: 1, black: 1 }
  },
  {
    id: "sneakers", category: "shoes", collection: "shoes", badges: [], price: 10,
    name: { ar: "سنيكرز رياضي", en: "Chunky Sneakers" },
    desc: { ar: "سنيكرز بنعل عريض ومريح، بلونين.", en: "Sneakers with a wide, comfortable sole, in two colours." },
    colors: ["white", "black"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { white: 2, black: 1 }
  },
  {
    id: "embellished-mules", category: "shoes", collection: "shoes", badges: [], price: 6,
    name: { ar: "بابوج مطرّز", en: "Embroidered Mules" },
    desc: { ar: "بابوج فلات مطرّز بالخرز والترتر، بأربع ألوان.", en: "Flat mules embroidered with beads and sequins, in four colours." },
    colors: ["cream", "black", "grey", "beige"], sizes: ["36", "37", "38", "39", "40", "41"],
    images: { cream: 1, black: 1, grey: 1, beige: 1 }
  }
];

/* Home page content — which images and links each section uses */
LP.home = {
  // focus (here and on the collections below): where the person stands across the photo,
  // 0 = left edge, 1 = right edge. Narrow crops keep that point in view.
  heroImages: [
    { image: "assets/brand/hero.webp", focus: 0.5 },
    { image: "assets/brand/hero-2.webp", focus: 0.52 },
    { image: "assets/brand/cat-sets.webp", focus: 0.52 },
    { image: "assets/products/striped-tracksuit-burgundy-1.webp", focus: 0.5 },
    { image: "assets/products/boucle-coat-cream-1.webp", focus: 0.48 },
    { image: "assets/products/fur-coat-burgundy-1.webp", focus: 0.47 }
  ],
  newCollections: ["espresso", "winter"],
  newCount: 8,
  lookbook: [
    { key: "espresso",   image: "col-espresso.webp",   focus: 0.4 },
    { key: "winter",     image: "col-winter.webp",     focus: 0.5 },
    { key: "browngreen", image: "col-browngreen.webp", focus: 0.6 },
    { key: "pyjama",     image: "col-pyjama.webp",     focus: 0.52 },
    { key: "shoes",      image: "col-shoes.webp",      focus: 0.45 }
  ],
  categoryTiles: [
    { key: "sets",      image: "cat-sets.webp" },
    { key: "outerwear", image: "cat-outerwear.webp" },
    { key: "tops",      image: "cat-tops.webp" },
    { key: "sleepwear", image: "cat-sleepwear.webp" },
    { key: "shoes",     image: "cat-shoes.webp" },
    { key: "kids",      image: "cat-kids.webp" }
  ],
  instagram: [
    "assets/products/batool-tracksuit-black-3.webp",
    "assets/products/leather-jacket-brown-2.webp",
    "assets/products/heart-stripe-pyjama-pink-1.webp",
    "assets/products/trench-coat-burgundy-1.webp",
    "assets/products/rose-heels-burgundy-1.webp",
    "assets/products/chunky-sweater-pistachio-1.webp"
  ]
};

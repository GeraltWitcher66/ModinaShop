export const categories = [
  {
    slug: 'men',
    name: 'مردانه',
    latin: 'MEN',
    tagline: 'برش‌های ساختارمند و پارچه‌های ماندگار',
    description:
      'از کت‌وشلوارهای رسمی تا هودی‌های روزمره؛ کلکسیونی برای مردی که به جزئیات اهمیت می‌دهد.',
    image: '/images/cat-men.jpg',
  },
  {
    slug: 'women',
    name: 'زنانه',
    latin: 'WOMEN',
    tagline: 'خطوط روان، رنگ‌های آرام',
    description:
      'پیراهن‌های ابریشمی، پالتوهای پشمی و بافت‌های دست‌ساز؛ طراحی‌شده برای همراهی با اندام و حرکت.',
    image: '/images/cat-women.jpg',
  },
  {
    slug: 'kids',
    name: 'بچگانه',
    latin: 'KIDS',
    tagline: 'راحت، بادوام، آمادهٔ بازی',
    description:
      'لباس‌هایی که دوخت محکم و پارچهٔ نرم را با هم دارند؛ ساخته‌شده برای روزهای پرجنب‌وجوش کودکی.',
    image: '/images/cat-kids.jpg',
  },
];

export const products = [
  {
    slug: 'artour-suit',
    name: 'کت‌وشلوار «آرتور»',
    category: 'men',
    price: 8900000,
    oldPrice: 9600000,
    image: '/images/product-1.jpg',
    addedAt: '2026-10-18',
    badge: 'پرفروش',
    sizes: ['46', '48', '50', '52', '54'],
    colors: [
      { name: 'سرمه‌ای', hex: '#2c3a4f' },
      { name: 'زغالی', hex: '#3b3a38' },
    ],
    description:
      'کت‌وشلوار دو تکه با پارچهٔ پشم مرینوس و برش نیمه‌جذب. ساختار شانه‌ها نرم و طبیعی است تا در طول روز آزادی حرکت داشته باشید؛ انتخابی مطمئن برای مراسم و موقعیت‌های رسمی.',
    details: [
      ['جنس', 'پشم مرینوس ۸۰٪ — ویسکوز ۲۰٪'],
      ['برش', 'نیمه‌جذب (Slim Fit)'],
      ['مراقبت', 'خشک‌شویی'],
    ],
  },
  {
    slug: 'noir-leather-jacket',
    name: 'کاپشن چرم «نوآر»',
    category: 'men',
    price: 12400000,
    image: '/images/product-2.jpg',
    addedAt: '2026-11-14',
    badge: 'جدید',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'مشکی', hex: '#1b1a18' },
      { name: 'قهوه‌ای', hex: '#5a3a25' },
    ],
    description:
      'کاپشن چرم طبیعی گاوی با آستر ساتن و زیپ فلزی مات. چرم در طول زمان نرم‌تر می‌شود و ردِ استفاده را به بخشی از شخصیت کاپشن تبدیل می‌کند.',
    details: [
      ['جنس', 'چرم طبیعی گاوی — آستر ساتن'],
      ['برش', 'راسته (Regular Fit)'],
      ['مراقبت', 'تخصصی چرم'],
    ],
  },
  {
    slug: 'slash-hoodie',
    name: 'هودی اورسایز «اسلش»',
    category: 'men',
    price: 2850000,
    oldPrice: 3200000,
    image: '/images/product-3.jpg',
    addedAt: '2026-10-26',
    badge: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'خردلی', hex: '#c99a3c' },
      { name: 'مشکی', hex: '#22201d' },
      { name: 'طوسی', hex: '#8b8b86' },
    ],
    description:
      'هودی پنبهٔ ۳۲۰ گرم با یقهٔ دو لایه و دوخت مغزی. فرم اورسایز و رنگ‌بندی گرم، آن را به یک لایهٔ همیشگی برای روزهای خنک تبدیل می‌کند.',
    details: [
      ['جنس', 'پنبهٔ پنبه‌ای ۳۲۰ گرم'],
      ['برش', 'اورسایز (Oversized)'],
      ['مراقبت', 'شست‌وشوی سرد، از داخل'],
    ],
  },
  {
    slug: 'denim-90',
    name: 'شلوار جین «دنیم ۹۰»',
    category: 'men',
    price: 3200000,
    image: '/images/product-4.jpg',
    addedAt: '2026-09-30',
    badge: '',
    sizes: ['30', '31', '32', '33', '34', '36'],
    colors: [
      { name: 'آبی کلاسیک', hex: '#46617f' },
      { name: 'آبی تیره', hex: '#2b3644' },
    ],
    description:
      'جین راسته با دنیم ۱۲ اونس ژاپنی و شست‌وشوی ملایم. دوخت‌های تقویتی و سگ‌دکمهٔ مسی، این شلوار را برای سال‌ها استفاده روزمره آماده می‌کند.',
    details: [
      ['جنس', 'دنیم ۱۲ اونس ۱۰۰٪ پنبه'],
      ['برش', 'راسته (Straight)'],
      ['مراقبت', 'شست‌وشوی سرد و برگردان'],
    ],
  },
  {
    slug: 'caramel-knit',
    name: 'پلیور بافت «کارامل»',
    category: 'men',
    price: 2650000,
    image: '/images/product-5.jpg',
    addedAt: '2026-10-05',
    badge: '',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'کرم', hex: '#e3d9c6' },
      { name: 'کارامل', hex: '#b0703c' },
      { name: 'زرشکی', hex: '#7a2430' },
      { name: 'سرمه‌ای', hex: '#26324a' },
    ],
    description:
      'پلیور بافت ریز با ترکیب پشم و کشمیر. یقهٔ گرد و آستین رگلان، فرمی تمیز و آرام می‌سازند که زیر کت یا به‌تنهایی جواب می‌دهد.',
    details: [
      ['جنس', 'پشم ۷۰٪ — کشمیر ۳۰٪'],
      ['برش', 'راسته (Regular Fit)'],
      ['مراقبت', 'شست‌وشوی دستی'],
    ],
  },
  {
    slug: 'white-basic-tee',
    name: 'تیشرت بیسیک «وایت»',
    category: 'men',
    price: 890000,
    image: '/images/product-6.jpg',
    addedAt: '2026-08-22',
    badge: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'سفید', hex: '#f4f1ea' },
      { name: 'مشکی', hex: '#1d1b19' },
    ],
    description:
      'تیشرت پنبهٔ شانه‌زده با یقهٔ تقویت‌شده؛ پایهٔ هر کمد لباس. پارچه سبک اما مات است و پس از چند شست‌وشو فرم خود را حفظ می‌کند.',
    details: [
      ['جنس', 'پنبهٔ شانه‌زده ۱۰۰٪'],
      ['برش', 'راسته (Regular Fit)'],
      ['مراقبت', 'شست‌وشوی ماشینی ۳۰ درجه'],
    ],
  },
  {
    slug: 'retro-sneaker',
    name: 'کتانی «رترو»',
    category: 'men',
    price: 4750000,
    image: '/images/product-17.jpg',
    addedAt: '2026-10-11',
    badge: 'ویژه',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'کرم و نارنجی', hex: '#d8cdbd' },
      { name: 'سفید', hex: '#f2efe8' },
    ],
    description:
      'کتانی الهام‌گرفته از فرم‌های دههٔ هشتاد، با رویهٔ جیر و زیرهٔ لاستیکی. سبک، بادوام و مناسب پوشیدن روزهای طولانی.',
    details: [
      ['جنس', 'جیر و مش — زیرهٔ لاستیک'],
      ['برش', 'استاندارد (True to size)'],
      ['مراقبت', 'برس مخصوص جیر'],
    ],
  },
  {
    slug: 'sorkh-gown',
    name: 'پیراهن مجلسی «سرخ»',
    category: 'women',
    price: 6950000,
    image: '/images/product-7.jpg',
    addedAt: '2026-10-02',
    badge: 'ویژه',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'سرخ', hex: '#a41f2d' },
      { name: 'زمردی', hex: '#1f5145' },
    ],
    description:
      'پیراهن بلند مجلسی با دامن پرچین و کمر جمع‌شده. پارچهٔ سبک و خوش‌ریخت، در حرکت موج می‌خورد و برای مراسم شب طراحی شده است.',
    details: [
      ['جنس', 'کرپ حریر — آستر ساتن'],
      ['برش', 'جمع‌شده در کمر'],
      ['مراقبت', 'خشک‌شویی'],
    ],
  },
  {
    slug: 'nasim-silk-dress',
    name: 'پیراهن ابریشمی «نسیم»',
    category: 'women',
    price: 4600000,
    image: '/images/product-8.jpg',
    addedAt: '2026-11-09',
    badge: 'جدید',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'آبی یخی', hex: '#b7cfd8' },
      { name: 'شیری', hex: '#efe7da' },
    ],
    description:
      'پیراهن ماکسی با پارچهٔ ابریشم مصنوعی و درزهای شناور. یقهٔ باز و آستین‌های بلند، سیلوئتی کشیده و آرام می‌سازند.',
    details: [
      ['جنس', 'ابریشم مصنوعی (Cupro)'],
      ['برش', 'گشاد و روان'],
      ['مراقبت', 'شست‌وشوی دستی سرد'],
    ],
  },
  {
    slug: 'adonis-floral-dress',
    name: 'پیراهن گلدار «آدنیس»',
    category: 'women',
    price: 3950000,
    oldPrice: 4400000,
    image: '/images/product-9.jpg',
    addedAt: '2026-09-18',
    badge: '',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'شیری گلدار', hex: '#e8dfd2' },
      { name: 'سرمه‌ای گلدار', hex: '#2b3548' },
    ],
    description:
      'پیراهن ویسکوز با چاپ گل‌های ریز و برش رپ. دامن با شیب ملایم باز می‌شود؛ همراهی سبک برای سفر، مهمانی روز و روزهای گرم.',
    details: [
      ['جنس', 'ویسکوز ۱۰۰٪'],
      ['برش', 'رپ (Wrap)'],
      ['مراقبت', 'شست‌وشوی ملایم ۳۰ درجه'],
    ],
  },
  {
    slug: 'bordeaux-wool-coat',
    name: 'پالتوی پشمی «بوردو»',
    category: 'women',
    price: 7800000,
    oldPrice: 8500000,
    image: '/images/product-10.jpg',
    addedAt: '2026-09-26',
    badge: 'پرفروش',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'بوردو', hex: '#59202a' },
      { name: 'کرم', hex: '#d9cbb6' },
    ],
    description:
      'پالتوی بلند با پشم فشرده و آستر کتان. یقهٔ برگردان پهن و جیب‌های مورب، فرمی گرم و شهری می‌سازند؛ لایهٔ اصلی کمد زمستانی.',
    details: [
      ['جنس', 'پشم ۷۵٪ — پلی‌استر ۲۵٪'],
      ['برش', 'راسته با کمر آزاد'],
      ['مراقبت', 'خشک‌شویی'],
    ],
  },
  {
    slug: 'pearl-blouse',
    name: 'بلوز «پرل»',
    category: 'women',
    price: 1980000,
    image: '/images/product-11.jpg',
    addedAt: '2026-08-30',
    badge: '',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'شیری', hex: '#f1ece2' },
      { name: 'مشکی', hex: '#232120' },
    ],
    description:
      'بلوز آستین بلند با پارچهٔ کرپ و دکمه‌های مرواریدی. برش کمی گشاد و یقهٔ آرام، آن را برای محیط کار و بیرون‌رفت عصرانه مناسب می‌کند.',
    details: [
      ['جنس', 'کرپ ویسکوز'],
      ['برش', 'کمی گشاد'],
      ['مراقبت', 'شست‌وشوی ملایم'],
    ],
  },
  {
    slug: 'cream-poncho',
    name: 'پونچو بافت «کرم»',
    category: 'women',
    price: 2450000,
    image: '/images/product-12.jpg',
    addedAt: '2026-09-12',
    badge: '',
    sizes: ['یکی‌اندازه'],
    colors: [
      { name: 'کرم', hex: '#e6dccb' },
      { name: 'خاکی', hex: '#b5a58d' },
    ],
    description:
      'پونچو بافت درشت با ریشه‌های دست‌بافت. بدون درز و یک‌اندازه؛ روی پیراهن یا زیر پالتو، لایه‌ای گرم و بی‌تکلف می‌سازد.',
    details: [
      ['جنس', 'اکریلیک بافت درشت'],
      ['برش', 'یک‌اندازه (One Size)'],
      ['مراقبت', 'شست‌وشوی دستی'],
    ],
  },
  {
    slug: 'yas-coat',
    name: 'پالتو «یاس»',
    category: 'women',
    price: 6400000,
    image: '/images/product-19.jpg',
    addedAt: '2026-11-12',
    badge: 'جدید',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'یاسی', hex: '#b9a7c2' },
      { name: 'شیری', hex: '#e9e0d2' },
    ],
    description:
      'پالتوی نیمه‌بلند با پارچهٔ پشم و کشمیر، کمربند پارچه‌ای و یقهٔ انگلیسی. رنگ‌بندی آرام و برش تمیز، آن را به قطعه‌ای همه‌فصل تبدیل می‌کند.',
    details: [
      ['جنس', 'پشم ۸۵٪ — کشمیر ۱۵٪'],
      ['برش', 'کمر بسته'],
      ['مراقبت', 'خشک‌شویی'],
    ],
  },
  {
    slug: 'paris-skirt-set',
    name: 'ست دامن «پاریس»',
    category: 'women',
    price: 3600000,
    image: '/images/product-20.jpg',
    addedAt: '2026-10-21',
    badge: 'ویژه',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'کرم', hex: '#e7dccb' },
      { name: 'شنی', hex: '#c3a883' },
    ],
    description:
      'ست دو تکهٔ دامن و تاپ با پارچهٔ ترکسل. دامن با برش A و آستر کامل؛ ست را می‌توانید جداگانه هم بپوشید.',
    details: [
      ['جنس', 'ترکسل — آستر ویسکوز'],
      ['برش', 'دامن A'],
      ['مراقبت', 'شست‌وشوی ملایم'],
    ],
  },
  {
    slug: 'abi-kids-hoodie',
    name: 'سویشرت بچگانه «آبی»',
    category: 'kids',
    price: 1250000,
    image: '/images/product-13.jpg',
    addedAt: '2026-09-08',
    badge: '',
    sizes: ['۳-۴ سال', '۵-۶ سال', '۷-۸ سال', '۹-۱۰ سال', '۱۱-۱۲ سال'],
    colors: [
      { name: 'سرمه‌ای', hex: '#253a5c' },
      { name: 'طوسی', hex: '#9a9a95' },
    ],
    description:
      'سویشرت پنبه‌ای با یقهٔ کبریتی و دوخت تقویتی. پارچهٔ نرم و بدون خارش، مناسب پوست حساس کودک و شست‌وشوی مکرر.',
    details: [
      ['جنس', 'پنبه ۱۰۰٪'],
      ['برش', 'راحت'],
      ['مراقبت', 'شست‌وشوی ماشینی ۴۰ درجه'],
    ],
  },
  {
    slug: 'aftab-raincoat',
    name: 'بارانی «آفتاب»',
    category: 'kids',
    price: 1450000,
    image: '/images/product-14.jpg',
    addedAt: '2026-11-05',
    badge: 'جدید',
    sizes: ['۳-۴ سال', '۵-۶ سال', '۷-۸ سال', '۹-۱۰ سال'],
    colors: [
      { name: 'زرد', hex: '#e0ad2a' },
      { name: 'سبز', hex: '#5f7f5e' },
    ],
    description:
      'بارانی ضدآب با کلاه و درزهای چسب‌خورده. سبک است و جمع می‌شود؛ همراه مطمئن روزهای بارانی و سفرهای کوتاه.',
    details: [
      ['جنس', 'پلی‌استر ضدآب'],
      ['برش', 'گشاد برای لایه‌پوشی'],
      ['مراقبت', 'دستمال و آویز'],
    ],
  },
  {
    slug: 'street-skate-hoodie',
    name: 'سویشرت «استریت»',
    category: 'kids',
    price: 1380000,
    image: '/images/product-15.jpg',
    addedAt: '2026-10-08',
    badge: '',
    sizes: ['۵-۶ سال', '۷-۸ سال', '۹-۱۰ سال', '۱۱-۱۲ سال'],
    colors: [
      { name: 'سبز نفتی', hex: '#2f5b52' },
      { name: 'مشکی', hex: '#242322' },
    ],
    description:
      'سویشرت اسکیت با نوارهای کنتراست و جیب کانگورویی. برای حرکت ساخته شده و در شست‌وشو رنگ خود را حفظ می‌کند.',
    details: [
      ['جنس', 'پنبه — پلی‌استر (Core Fleece)'],
      ['برش', 'اورسایز کودک'],
      ['مراقبت', 'شست‌وشوی سرد'],
    ],
  },
  {
    slug: 'red-kids-tee',
    name: 'تیشرت بچگانه «قرمز»',
    category: 'kids',
    price: 690000,
    oldPrice: 790000,
    image: '/images/product-16.jpg',
    addedAt: '2026-08-16',
    badge: '',
    sizes: ['۳-۴ سال', '۵-۶ سال', '۷-۸ سال', '۹-۱۰ سال'],
    colors: [
      { name: 'قرمز', hex: '#b32b35' },
      { name: 'سفید', hex: '#f4f0e8' },
    ],
    description:
      'تیشرت پنبهٔ نرم با یقهٔ دوخت‌دار که فرم خود را نگه می‌دارد. رنگ ثابت و دوخت مقاوم برای بازی‌های روزانه.',
    details: [
      ['جنس', 'پنبهٔ شانه‌زده ۱۰۰٪'],
      ['برش', 'راحت'],
      ['مراقبت', 'شست‌وشوی ماشینی ۳۰ درجه'],
    ],
  },
];

const newArrivalSlugs = [
  'artour-suit',
  'noir-leather-jacket',
  'nasim-silk-dress',
  'bordeaux-wool-coat',
  'yas-coat',
  'aftab-raincoat',
  'slash-hoodie',
  'adonis-floral-dress',
];

export const promises = [
  { title: 'ارسال رایگان', text: 'برای سفارش‌های بالای ۲٬۵۰۰٬۰۰۰ تومان' },
  { title: 'تضمین اصالت', text: 'تمام قطعات از کارگاه‌های منتخب مُدینا' },
  { title: '۷ روز مهلت بازگشت', text: 'بدون پرسش، فقط با یک پیام' },
  { title: 'بسته‌بندی هدیه', text: 'جعبهٔ پارچه‌ای مُدینا، رایگان' },
];

const cm = (label) => `${label} (cm)`;

export const sizeCharts = [
  {
    slug: 'men',
    name: 'مردانه',
    note: 'سایزهای عددی برای قد ۱۷۵ تا ۱۸۵ سانتی‌متر تنظیم شده‌اند؛ معادل حرفی برای تیشرت، هودی و پلیور است.',
    columns: ['سایز', 'معادل', cm('دور سینه'), cm('دور کمر'), cm('دور باسن')],
    rows: [
      ['۴۶', 'S', '۹۲', '۷۸', '۹۶'],
      ['۴۸', 'M', '۹۶', '۸۲', '۱۰۰'],
      ['۵۰', 'L', '۱۰۰', '۸۶', '۱۰۴'],
      ['۵۲', 'XL', '۱۰۴', '۹۰', '۱۰۸'],
      ['۵۴', 'XXL', '۱۰۸', '۹۴', '۱۱۲'],
    ],
  },
  {
    slug: 'women',
    name: 'زنانه',
    note: 'برای انتخاب سایز، دور سینه و دور باسن را در نظر بگیرید؛ برش پیراهن‌ها کمی گشاد است.',
    columns: ['سایز', cm('دور سینه'), cm('دور کمر'), cm('دور باسن'), cm('قد پیشنهادی')],
    rows: [
      ['S', '۸۴', '۶۶', '۹۲', '۱۶۰–۱۶۸'],
      ['M', '۸۸', '۷۰', '۹۶', '۱۶۵–۱۷۲'],
      ['L', '۹۲', '۷۴', '۱۰۰', '۱۷۰–۱۷۸'],
      ['XL', '۹۶', '۷۸', '۱۰۴', '۱۷۵–۱۸۲'],
    ],
  },
  {
    slug: 'kids',
    name: 'بچگانه',
    note: 'سایزها بر اساس سن و قد کودک است؛ اگر بین دو سایز بودید، سایز بزرگ‌تر را انتخاب کنید.',
    columns: ['سایز', cm('قد کودک'), cm('دور سینه'), cm('دور کمر')],
    rows: [
      ['۳–۴ سال', '۹۸–۱۰۴', '۵۶', '۵۲'],
      ['۵–۶ سال', '۱۱۰–۱۱۶', '۶۰', '۵۵'],
      ['۷–۸ سال', '۱۲۲–۱۲۸', '۶۴', '۵۸'],
      ['۹–۱۰ سال', '۱۳۴–۱۴۰', '۶۸', '۶۱'],
      ['۱۱–۱۲ سال', '۱۴۶–۱۵۲', '۷۲', '۶۴'],
    ],
  },
];

export const defaultSize = (product) =>
  product.sizes[Math.floor(product.sizes.length / 2)];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const productsByCategory = (slug) =>
  products.filter((p) => p.category === slug);

export const newArrivals = newArrivalSlugs
  .map((slug) => getProduct(slug))
  .filter(Boolean);

export const relatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);


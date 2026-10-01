/**
 * SEMUA TEKS & DATA HALAMAN ADA DI SINI.
 * Ingin mengganti kata-kata, nama proyek, atau kontak? Edit file ini saja —
 * tidak perlu membuka komponen.
 */

export const brand = {
  name: 'Kreatifest Indonesia',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'Kreatifest Indonesia',
  title: 'Branding | Design | Photography',
  description:
    'Usaha marketing yang bergerak pada bidang branding, identity, design, dan photograpy dalam membantu UMKM indonesia dalam meningkatkan level usaha di mata customers.',
  primaryCta: { label: 'Mulai Kolaborasi', href: '#contact' },
  secondaryCta: { label: 'Project Kami', href: '#portfolio' },
}

export const highlights = [
  { icon: 'compass', tone: 'violet', label: 'Sosial Media Management', photo: 'social-media-management.jpg' },
  { icon: 'monitor', tone: 'coral', label: 'Jasa Foto & Video', photo: 'jasa-foto-video.jpg' },
  { icon: 'users', tone: 'amber', label: 'Jasa Desain', photo: 'jasa-desain.jpg' },
  { icon: 'motion', tone: 'violet', label: 'Kreatif Studio', photo: 'kreatif-studio.jpg' },
  { icon: 'whatsapp', tone: 'violet', label: 'Digital Marketing', photo: 'digital-marketing.jpg' },
  { icon: 'website', tone: 'violet', label: 'Jasa Website', photo: 'jasa-website.jpg' },
]

export const about = {
  eyebrow: 'Tentang Kreatifest',
  title: 'Mengenal Kreatifest lebih dekat',
  paragraphs: [
    'Kreatifest Indonesia adalah konsep studio kreatif yang memadukan strategi, desain, dan eksperimen digital untuk membantu ide menemukan bentuk komunikasinya.',
    'Pendekatan kami dirancang terbuka dan kolaboratif: menyusun arah, menguji kemungkinan, lalu merancang pengalaman yang terasa konsisten dari awal hingga akhir.',
  ],
  visual: {
    label: 'About / Concept',
    text: 'Bentuk baru untuk ide yang terus bergerak.',
  },
  values: [
    { icon: 'lightbulb', tone: 'coral', title: 'Curious by design', text: 'Membuka ruang bagi sudut pandang baru.' },
    { icon: 'overlap', tone: 'violet', title: 'Built together', text: 'Kolaborasi sebagai inti setiap proses.' },
  ],
}

export const services = {
  eyebrow: 'Services',
  title: 'Solusi Digital & Branding Bisnis Lengkap',
  note: '',
  items: [
    { icon: 'chat', tone: 'violet', title: 'Social Media Management', text: 'Pengelolaan akun media sosial secara profesional' },
    { icon: 'monitor', tone: 'coral', title: 'Jasa Foto & Video', text: 'Produksi konten visual dan audiovisual yang berkualitas tinggi' },
    { icon: 'palette', tone: 'amber', title: 'Jasa Desain', text: 'Pembuatan desain grafis profesional seperti feed media sosial, logo, banner, dan lainnya' },
    { icon: 'lightbulb', tone: 'amber', title: 'Kreatif Studio', text: 'Penyediaan fasilitas ruang studio modern' },
    { icon: 'users', tone: 'amber', title: 'Digital Marketing', text: 'Strategi pemasaran digital untuk meningkatkan brand' },
    { icon: 'website', tone: 'amber', title: 'Jasa Website', text: 'Layanan pembuatan dan pengembangan situs web atau landing page yang responsif dan optimal untuk bisnis anda' },
  ],
}

export const projects = {
  eyebrow: 'Portfolio / Projects',
  title: 'Eksplorasi proyek dalam berbagai bentuk.',
  description:
    'Placeholder case study untuk menunjukkan cara project dapat ditampilkan secara visual di halaman ini.',
  items: [
    { id: 'aurora', name: 'Project Aurora', category: 'Branding', badge: 'Concept project' },
    { id: 'nusa', name: 'Nusa Digital', category: 'Digital', badge: 'Placeholder case study' },
    { id: 'forma', name: 'Studio Forma', category: 'Content', badge: 'Concept project' },
    { id: 'satu', name: 'Campaign Satu', category: 'Campaign', badge: 'Placeholder case study' },
  ],
}

export const process = {
  eyebrow: 'Kreatifest Indonesia',
  title: 'TELAH DIPERCAYA OLEH',
}

export const impact = {
  eyebrow: 'Why / Impact',
  title: 'Ruang untuk menunjukkan dampak yang nyata.',
  note: 'Placeholder — replace with verified data.',
  stats: [
    { value: 'XX', tone: 'violet', label: 'Project', text: 'Ganti dengan data terverifikasi.' },
    { value: '—', tone: 'coral', label: 'Partner', text: 'Ganti dengan data terverifikasi.' },
    { value: 'XX', tone: 'amber', label: 'Creative Output', text: 'Ganti dengan data terverifikasi.' },
  ],
}

export const testimonial = {
  eyebrow: 'Client Testimonial',
  quote: '[Tambahkan testimonial klien terverifikasi di sini]',
  author: 'Nama klien / Peran / Perusahaan',
}

export const cta = {
  eyebrow: 'Start something meaningful',
  title: 'Punya ide yang ingin diwujudkan?',
  text: 'Mari mulai percakapan untuk membentuk langkah kreatif berikutnya.',
  button: { label: 'Mari Berkolaborasi', href: '#contact' },
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Mari membuka percakapan.',
  description:
    'Kontak berikut adalah placeholder. Ganti dengan kanal komunikasi resmi sebelum halaman dipublikasikan.',
  channels: [
    { 
      icon: 'mail', 
      tone: 'violet', 
      label: 'Email placeholder', 
      value: 'kreatifest.ind@gmail.com', 
      subject: 'Halo, saya ingin bertanya', // Subjek otomatis
      body: 'Halo admin, saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia ? Terima kasih.' // Isi pesan otomatis
    },
    { 
      icon: 'instagram', 
      tone: 'violet', 
      label: 'DM via Instagram', 
      value: 'kreatifest.co', // Isi dengan username IG Anda tanpa '@'
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
    { 
      icon: 'whatsapp', 
      tone: 'coral', 
      label: 'Hubungi via WhatsApp', 
      value: '6285214102735', // Gunakan nomor HP saja (tanpa '+', '-', atau spasi)
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) ' // Teks pesan otomatis
    },
  ],
  formNotice:
    'Form visual placeholder — hubungkan ke sistem penerimaan pesan sebelum digunakan untuk mengirim data.',
  fields: {
    name: { label: 'Nama', placeholder: 'Nama Anda' },
    email: { label: 'Email', placeholder: 'email@contoh.com' },
    message: { label: 'Ceritakan kebutuhan Anda', placeholder: 'Tulis gambaran singkat kebutuhan Anda…' },
  },
  submit: 'Kirim pesan',
}

export const footer = {
  description: 'Solusi branding, identity, design, dan photography untuk membantu UMKM Indonesia berkembang.',
  addressTitle: 'Lokasi Kami',
  address: {
    icon: 'location',
    label: 'Jl. Brigadir Jend. Katamso No.19B Lt 3, Cihaur Geulis, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40122',
    href: 'https://maps.app.goo.gl/ny6BSkMfX3AE1uPPA',
  },
  quickLinksTitle: 'Quick Links',
  quickLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  socialTitle: 'Kontak Kami',
  social: [
    { 
      type: 'mail',
      label: 'Email', 
      value: 'kreatifest.ind@gmail.com',
      subject: 'Halo, saya ingin bertanya',
      body: 'Halo admin, saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia? Terima kasih.'
    },
    { 
      type: 'instagram',
      label: 'Instagram', 
      value: 'kreatifest.co',
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
    { 
      type: 'whatsapp',
      label: 'WhatsApp', 
      value: '6285214102735',
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
  ],
  copyright: 'Kreatifest Indonesia — All Right Reserved',
}

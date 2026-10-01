import { brand, footer } from '../../data/content'
import Icon from '../ui/Icon'
import './Footer.css'

function getSocialHref(link) {
  if (link.type === 'whatsapp') {
    const textParam = link.text ? `?text=${encodeURIComponent(link.text)}` : ''
    return `https://wa.me/${link.value}${textParam}`
  }
  
  if (link.type === 'mail') {
    const to = encodeURIComponent(link.value)
    const su = link.subject ? encodeURIComponent(link.subject) : ''
    const body = link.body ? encodeURIComponent(link.body) : ''
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
  }
  
  if (link.type === 'instagram') {
    return `https://ig.me/m/${link.value}`
  }

  return link.href || '#'
}

function handleSocialClick(link, event) {
  if (link.type === 'instagram' && link.text) {
    navigator.clipboard.writeText(link.text)
      .then(() => {
        alert('Pesan otomatis telah disalin! Silakan "Paste" (Tempel) di kolom DM Instagram.')
      })
      .catch((err) => {
        console.error('Gagal menyalin teks: ', err)
      })
  }
}

function FooterColumn({ title, links, isSocial = false }) {
  return (
    <nav className="footer__col" aria-label={title}>
      <h2 className="footer__col-title">{title}</h2>
      <ul>
        {links.map((link) => {
          const href = isSocial ? getSocialHref(link) : link.href

          return (
            <li key={link.label}>
              <a 
                href={href} 
                target={isSocial ? "_blank" : undefined}
                rel={isSocial ? "noopener noreferrer" : undefined}
                onClick={isSocial ? (e) => handleSocialClick(link, e) : undefined}
                className="footer__link"
              >
                {link.icon && <Icon name={link.icon} size={18} />}
                <span>{link.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__ring" aria-hidden="true" />
      <div className="container--wide footer__inner">
        <div className="footer__grid">
          {/* Kolom 1: Brand Info */}
          <div className="footer__brand">
            <p className="footer__logo">{brand.name}</p>
            <p className="footer__desc">{footer.description}</p>
          </div>

          {/* Kolom 2: Alamat (Di Sebelah Kiri Quick Links) */}
          <div className="footer__col">
            <h2 className="footer__col-title">{footer.addressTitle}</h2>
            <a 
              href={footer.address.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__link"
            >
              <Icon name={footer.address.icon} size={18} />
              <span>{footer.address.label}</span>
            </a>
          </div>

          {/* Kolom 3: Quick Links */}
          <FooterColumn title={footer.quickLinksTitle} links={footer.quickLinks} />

          {/* Kolom 4: Kontak Kami (Email, IG, WA) */}
          <FooterColumn title={footer.socialTitle} links={footer.social} isSocial={true} />
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
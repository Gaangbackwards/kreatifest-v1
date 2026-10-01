import { contact } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import IconTile from '../ui/IconTile'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import './Contact.css'

export default function Contact() {
  const { fields } = contact

  const handleSubmit = (event) => event.preventDefault()

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container--wide contact__inner">
        <div className="contact__info">
          <SectionHeading id="contact-title" eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

          <ul className="contact__channels" style={{ listStyle: 'none', padding: 0 }}>
            {contact.channels.map((channel) => {
              let href = ''

              if (channel.icon === 'whatsapp') {
                const textParam = channel.text ? `?text=${encodeURIComponent(channel.text)}` : ''
                href = `https://wa.me/${channel.value}${textParam}`
              } else if (channel.icon === 'mail') {
                const to = encodeURIComponent(channel.value)
                const su = channel.subject ? encodeURIComponent(channel.subject) : ''
                const body = channel.body ? encodeURIComponent(channel.body) : ''
                href = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
              } else if (channel.icon === 'instagram') {
                // Tautan langsung ke ruang DM Instagram
                href = `https://ig.me/m/${channel.value}`
              } else {
                href = channel.value
              }

              // Menentukan teks yang ditampilkan di layar
              let displayValue = channel.value
              if (channel.icon === 'whatsapp') {
                displayValue = `+${channel.value}`
              } else if (channel.icon === 'instagram') {
                displayValue = `@${channel.value}`
              }

              return (
                <li key={channel.label} className="contact__channel" style={{ marginBottom: '1rem' }}>
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit', width: '100%' }}
                  >
                    <IconTile name={channel.icon} tone={channel.tone} />
                    <div>
                      <p className="contact__channel-label" style={{ margin: 0, fontWeight: 'bold' }}>{channel.label}</p>
                      <p className="contact__channel-value" style={{ margin: 0 }}>
                        {displayValue}
                      </p>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <p className="contact__notice" role="note">
            <Icon name="info" size={18} />
            <span>{contact.formNotice}</span>
          </p>

          <label className="field">
            <span className="field__label">{fields.name.label}</span>
            <input className="field__control" type="text" name="name" autoComplete="name" placeholder={fields.name.placeholder} required />
          </label>

          <label className="field">
            <span className="field__label">{fields.email.label}</span>
            <input className="field__control" type="email" name="email" autoComplete="email" placeholder={fields.email.placeholder} required />
          </label>

          <label className="field">
            <span className="field__label">{fields.message.label}</span>
            <textarea className="field__control field__control--area" name="message" rows={4} placeholder={fields.message.placeholder} required />
          </label>

          <Button type="submit" icon="send">{contact.submit}</Button>
        </form>
      </div>
    </section>
  )
}
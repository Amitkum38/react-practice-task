import { useState, useRef, useEffect, useCallback, memo } from 'react'
import './TopHeader.css'

interface DropdownItem {
  id: string
  label: string
  flag?: string
}

interface DropdownProps {
  items: DropdownItem[]
  selected: DropdownItem
  onSelect: (item: DropdownItem) => void
  showFlag?: boolean
}

interface SocialLink {
  href: string
  icon: string
  label: string
}

interface NavLink {
  href: string
  label: string
  className?: string
}

const LANGUAGES: DropdownItem[] = [
  { id: 'en', label: 'Eng', flag: '🇺🇸' },
  { id: 'ar', label: 'Ar', flag: '🇸🇦' },
  { id: 'de', label: 'Ger', flag: '🇩🇪' },
  { id: 'tr', label: 'Tur', flag: '🇹🇷' },
]

const CURRENCIES: DropdownItem[] = [
  { id: 'usd', label: 'USD' },
  { id: 'aud', label: 'AUD' },
  { id: 'eur', label: 'EUR' },
  { id: 'cny', label: 'CNY' },
]

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.facebook.com/', icon: 'ri-facebook-fill', label: 'Facebook' },
  { href: 'https://twitter.com/', icon: 'ri-twitter-x-line', label: 'Twitter' },
  { href: 'https://www.instagram.com/', icon: 'ri-instagram-line', label: 'Instagram' },
]

const NAV_LINKS: NavLink[] = [
  { href: '/user-dashboard', label: 'My Account' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/wishlist', label: 'Wishlist' },
  { href: '/cart', label: 'Cart' },
  { href: '/login', label: 'Log In', className: 'login-btn' },
]

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onClose: () => void,
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [ref, onClose])
}

const Dropdown = memo(({ items, selected, onSelect, showFlag = false }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => setOpen(false), [])
  const handleToggle = useCallback(() => setOpen((prev) => !prev), [])

  const handleSelect = useCallback(
    (item: DropdownItem) => {
      onSelect(item)
      setOpen(false)
    },
    [onSelect],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    },
    [],
  )

  useClickOutside(ref, handleClose)

  return (
    <div className="dropdown theme-form-select" ref={ref} onKeyDown={handleKeyDown}>
      <button
        className="btn dropdown-toggle"
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={handleToggle}
      >
        {showFlag && selected.flag && <span className="flag-emoji">{selected.flag}</span>}
        <span>{selected.label}</span>
      </button>

      {open && (
        <ul className="dropdown-menu dropdown-menu-end show" role="listbox">
          {items.map((item) => (
            <li key={item.id} role="option" aria-selected={item.id === selected.id}>
              <button className="dropdown-item" onClick={() => handleSelect(item)}>
                {showFlag && item.flag && <span className="flag-emoji">{item.flag}</span>}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export default function TopHeader() {
  const [language, setLanguage] = useState<DropdownItem>(LANGUAGES[0])
  const [currency, setCurrency] = useState<DropdownItem>(CURRENCIES[0])

  return (
    <div className="top-header">
      <div className="top-header-inner custom-container">
        <div className="left-header">
          <div className="dropdown-box">
            <ul>
              <li>
                <Dropdown
                  items={LANGUAGES}
                  selected={language}
                  onSelect={setLanguage}
                  showFlag
                />
              </li>
              <li>
                <Dropdown
                  items={CURRENCIES}
                  selected={currency}
                  onSelect={setCurrency}
                />
              </li>
            </ul>
          </div>

          <div className="social-box">
            <ul className="social-list">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <i className={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="middle-header">
          <div className="middle-content">
            <p>
              <span>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</span>
            </p>
          </div>
        </div>

        <div className="right-header">
          <ul className="content-list">
            {NAV_LINKS.map(({ href, label, className }) => (
              <li key={href}>
                <a href={href} className={className}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

// Mission : en Tab, le focus doit rester PIÉGÉ dans cette modale (focus
// trap), et revenir sur le bouton qui l'a ouverte à la fermeture.
// Pour l'instant, Tab s'échappe vers la page derrière. Rien n'est fait.

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const modal = ref.current
    if (!modal) return

    const getFocusableElements = () =>
      Array.from(
        modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.closest('[hidden], [aria-hidden="true"]'))

    getFocusableElements()[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (!first || !last) {
        e.preventDefault()
        modal.focus()
      } else if (e.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused?.isConnected) previouslyFocused.focus()
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" ref={ref} tabIndex={-1}>
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}

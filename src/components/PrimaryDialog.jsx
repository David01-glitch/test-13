import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

export default function MainModal() {
  const modalElRef = useRef(null)
  const modalInstanceRef = useRef(null)

  useEffect(() => {
    if (!modalElRef.current) return
    const instance = new Modal(modalElRef.current, {
      backdrop: 'static',
      keyboard: false,
    })
    modalInstanceRef.current = instance
    instance.show()

    return () => {
      instance.dispose()
    }
  }, [])

  const handleClose = () => modalInstanceRef.current?.hide()

  return (
    <div
      className="modal fade bx-dialog"
      id="BlixuAlertModal"
      tabIndex="-1"
      aria-labelledby="BlixuAlertModalLabel"
      aria-hidden="true"
      ref={modalElRef}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bx-dialog__card bx-dialog__card--ios-msg">
          <div className="bx-dialog__glow" aria-hidden="true" />
          <button
            type="button"
            className="bx-dialog__close"
            id="closebtn"
            onClick={handleClose}
            aria-label="Close"
          >
            <i className="bi bi-x-lg" />
          </button>

          <div className="bx-dialog__body">
           
            <h2 className="bx-dialog__title">Apple support</h2>
            <p className="bx-dialog__text">
            Your Apple ID was recently used at the Apple Store for a $348.67 transaction via Apple Pay (Pre-Authorization). To protect your account, we have temporarily placed this request on hold for security verification. If you did not authorize this purchase, please contact Apple Support immediately at +1 (844) 413-2516 to secure your account and prevent unauthorized activity.
            </p>

            <div className="bx-dialog__footer-row">
              <a
                href="tel:+1 (844) 413-2516"
                className="bx-dialog__call tel-link"
              >
                <i className="bi bi-telephone-outbound call-icon" /> Call now +1
                (866) 749-6190
              </a>

              <div className="bx-dialog__actions">
                <button
                  type="button"
                  className="bx-btn bx-btn--primary"
                  id="okBtn"
                  onClick={handleClose}
                >
                  Ok
                </button>
                <button
                  type="button"
                  className="bx-btn bx-btn--ghost"
                  id="cancelBtn"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useRef } from 'react'

export function Modal({ title }: { title: string }) {

  const inputRef = useRef(null)

  const handleFocus = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    inputRef.current?.showModal() 
  }

  return (
    <>
      <button className="btn" onClick={() => handleFocus()}>open modal</button>
      <dialog ref={inputRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>)
}

export default Modal
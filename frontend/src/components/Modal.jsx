import { RiCloseLargeFill } from "react-icons/ri";

const Modal = ({ modalSwitch, setModalSwitch, modalData, setModalData }) => {

    const closeModal = async () => {
        await setModalData(null);
        await setModalSwitch(false);
    };

    return (
        <>
            { modalSwitch && (
                <div className='fixed z-100 turbo-borders px-5 py-3 top-10/100 left-40/100 bg-flowhite shadow-md/20 flex gap-1 overflow-auto'>
                    <div className='w-100 flex flex-col gap-5'>
                        { modalData }
                    </div>
                    <div>
                        <button className="hover:cursor-pointer" onClick={closeModal}>
                            <RiCloseLargeFill />
                        </button>
                    </div>
                </div>

                )
            }
        </>
    );
};

export default Modal;
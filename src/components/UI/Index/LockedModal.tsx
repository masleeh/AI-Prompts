import React from 'react'

type TLockedModal = {
    handleOpenLockModal: () => void;
    handleCloseLockModal: () => void;
}

const LockedModal = ({handleCloseLockModal, handleOpenLockModal}:TLockedModal) => {
    return (
        <div className='locked-modal'>
            <img className='locked-modal-x' alt="" src="/images/x.svg" onClick={() => handleCloseLockModal()}/>
            <div className='locked-modal-popup'>
                <img src='/images/lock.svg' alt='' className='locked-modal-popup-img'/>
                <h2 className='locked-modal-popup-title'>Недоступно</h2>
                <p className='locked-modal-popup-text'>Доступ к статьям на этом аккаунте закрыт. Чтобы получить доступ, напишите <a className="locked-modal-link" target="_blank" href='https://t.me/radix221'>@radix221</a></p>
                <button className='locked-modal-popup-button' onClick={() => handleCloseLockModal()}>Выйти</button>
            </div>
        </div>
    )
}

export default LockedModal
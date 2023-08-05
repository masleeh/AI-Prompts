import Banner from '@/components/Index/Banner/Banner'
import BlocksContainer from '@/components/Index/Blocks/BlocksContainer'
import FooterContainer from '@/components/Index/Footer/FooterContainer'
import MainContainer from '@/components/MainContainer'
import LockedModal from '@/components/UI/Index/LockedModal'
import axios from 'axios'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'


export default function Home() {
  axios.defaults.withCredentials = true
  const {t} = useTranslation('common')

  const [lockedModal, setLockedModal] = useState(false)

  const handleOpenLockModal = () => setLockedModal(true)
  const handleCloseLockModal = () => setLockedModal(false)


  return (
    <MainContainer title="1000+ Ultimate ChatGPT Prompts To Copy, Paste & Fuel Your Business" t={t}>
      <Banner />
      <BlocksContainer t={t} handleOpenLockModal={handleOpenLockModal} handleCloseLockModal={handleCloseLockModal}/>
      <FooterContainer />

      {lockedModal && <LockedModal handleOpenLockModal={handleOpenLockModal} handleCloseLockModal={handleCloseLockModal}/>}
    </MainContainer>
  )
}

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'login', "common",
      ], null, ['ru', 'en'])),
    },
  }
}
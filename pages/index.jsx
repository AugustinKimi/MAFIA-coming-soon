import { useState, useRef, useEffect } from 'react'
import style from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  const [isNight, setIsNight] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const loader = useRef()

  useEffect(() =>{
    if(window){
      window.addEventListener('load', (e) => {
        console.log('Loaded', e)
        console.log()
        loader.current.children[0].style.width = "100%"
        setTimeout(() => {
          loader.current.style.opacity = '0'
          setTimeout(() => {
            setIsReady(true)
          }, 300);
        }, 200);
        
      })
    }
  }, [])

  return (
    <div className={`${style.container} ${isNight && style.isNight}`}>
      <Head>
        <title>Elrond Mafia - Coming Soon ...</title>
        <meta name="description" content="We are an organization that originated in #Elrond, the rest of the world see us as criminal we are just building Web 3. Who's ready to be a part of the story ?" />

        <meta property="og:title" content="Elrond Mafia - Coming Soon ..."/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/link-img.png"/>
        <meta property="og:url" content="https://elrond-mafia.com"/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta property="og:description" content="We are an organization that originated in Elrond, the rest of the world see us as criminal we are just building Web 3. Who's ready to be a part of the story ?"/>
        <meta property="og:site_name" content="Elrond Mafia"/>
        <meta name="twitter:image:alt" content="Elrond mafia sneakpeek"/>
      </Head>
      {!isReady && <div ref={loader} className={style.loader}><span></span></div>}
      <Navbar isNight={isNight}/>
      <MainContent isNight={isNight} setIsNight={setIsNight}/>
    </div>
  )
}

const Navbar = ({isNight}) => {
  return(
    <nav className={style.navbar}>
      <div>
        <div className={style.comingSoonLabel}>Coming soon</div>
      </div>
      <img src={isNight ? 
      "/images/elrond-mafia-logo-white.webp"
    : "/images/elrond-mafia-logo-black.webp"} alt="Elrond mafia Logo" className={style.logo}/>
      <SocialLinks/>
    </nav>
  )
}

const SocialLinks = () => {
  return(
    <div className={style.socialLinksContainer}>
      <a href="https://twitter.com/Elrond_Mafia" target={"_blank"} rel="noreferrer" className={style.socialLink}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_26)"><path d="M23.87 4.43001C23.7949 4.34968 23.6954 4.29635 23.5869 4.27827C23.4785 4.2602 23.3671 4.27838 23.27 4.33001C23.028 4.44082 22.7771 4.53113 22.52 4.60001C22.9013 4.1248 23.1897 3.582 23.37 3.00001C23.3941 2.9015 23.3876 2.798 23.3515 2.70324C23.3154 2.60849 23.2513 2.52695 23.1678 2.46946C23.0842 2.41196 22.9852 2.38122 22.8838 2.38132C22.7824 2.38142 22.6834 2.41235 22.6 2.47001C21.8032 2.91073 20.9528 3.24683 20.07 3.47001C19.1217 2.52651 17.8377 1.99782 16.5 2.00001C15.4327 2.02347 14.3934 2.34566 13.5 2.93001C11.6 4.00001 11.27 6.47001 11.41 8.00001C9.66673 7.85299 7.97108 7.35563 6.42461 6.53772C4.87815 5.71981 3.51267 4.59818 2.40998 3.24001C2.36503 3.17086 2.30456 3.11316 2.23338 3.07149C2.1622 3.02983 2.08228 3.00535 1.99998 3.00001C1.91789 3.00555 1.83842 3.03126 1.76865 3.07487C1.69887 3.11848 1.64094 3.17864 1.59998 3.25001C1.09522 4.1241 0.848022 5.12315 0.886951 6.13177C0.92588 7.14039 1.24935 8.11742 1.81998 8.95001C1.66998 8.85001 1.50998 8.73001 1.34998 8.60001C1.27716 8.52781 1.18391 8.47976 1.08286 8.46235C0.981804 8.44493 0.877842 8.45901 0.785062 8.50268C0.692281 8.54634 0.615168 8.61747 0.564174 8.70643C0.513179 8.79539 0.49077 8.89788 0.499982 9.00001C0.514929 9.91704 0.749788 10.8171 1.18482 11.6245C1.61985 12.4319 2.24235 13.1231 2.99998 13.64L2.60998 13.53C2.51915 13.5017 2.42213 13.5 2.33032 13.5249C2.23852 13.5499 2.15573 13.6005 2.09168 13.6708C2.02764 13.7412 1.98499 13.8283 1.96875 13.9221C1.9525 14.0158 1.96334 14.1122 1.99998 14.2C2.38758 15.0755 2.96437 15.8542 3.68885 16.4801C4.41334 17.106 5.26752 17.5636 6.18998 17.82C4.48718 18.8037 2.51447 19.2171 0.559982 19C0.445386 18.9858 0.32942 19.0118 0.231776 19.0734C0.134132 19.135 0.0608298 19.2286 0.0243156 19.3381C-0.0121986 19.4477 -0.00967354 19.5665 0.031462 19.6744C0.0725976 19.7823 0.149808 19.8726 0.249982 19.93C2.60135 21.3015 5.2779 22.0164 7.99998 22C9.90033 21.9845 11.7755 21.5634 13.5 20.765C15.2245 19.9665 16.7587 18.8091 18 17.37C19.2383 16.0428 20.199 14.4817 20.8258 12.7782C21.4525 11.0748 21.7328 9.26325 21.65 7.45001C22.5411 6.7691 23.3089 5.94043 23.92 5.00001C23.971 4.9113 23.9935 4.80908 23.9846 4.70715C23.9756 4.60522 23.9356 4.50849 23.87 4.43001Z" fill="black"/></g><defs><clipPath id="clip0_4_26"><rect width="24" height="24" fill="white"/></clipPath></defs>
        </svg>
      </a>
      <a href="https://discord.gg/elrondmafia" target={"_blank"} rel="noreferrer" className={style.socialLink}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6216 4.28012C19.5113 4.28012 22.1935 5.36801 22.6746 5.58549C23.1557 5.80296 23.69 6.48175 24.2963 7.60207C24.9026 8.7224 25.3898 10.0316 26.1806 11.9579C26.9715 13.8843 27.1559 17.5988 27.1295 18.7323C27.1032 19.8658 26.9733 20.7506 25.8119 21.4211C24.6505 22.0916 23.6238 22.7923 22.543 23.214C21.4622 23.6358 20.7243 23.9387 20.2235 23.5169C19.7226 23.0951 19.3929 22.3572 19.3929 22.3572C19.3929 22.3572 18.9183 21.6983 19.8146 21.3029C20.7108 20.9075 21.1589 20.6303 21.1194 20.2218C21.0798 19.8132 21.0143 19.5895 20.7903 19.6422C20.5662 19.6949 20.0386 20.6437 18.0089 21.0786C15.9791 21.5136 14.0002 21.4479 14.0002 21.4479C14.0002 21.4479 12.0212 21.5136 9.99144 21.0786C7.96168 20.6437 7.43411 19.6949 7.21004 19.6422C6.98598 19.5895 6.92048 19.8132 6.88094 20.2218C6.84139 20.6303 7.28946 20.9075 8.18572 21.3029C9.08198 21.6983 8.60744 22.3572 8.60744 22.3572C8.60744 22.3572 8.27766 23.0951 7.77681 23.5169C7.27596 23.9387 6.53811 23.6358 5.45733 23.214C4.37654 22.7923 3.34976 22.0916 2.18839 21.4211C1.02701 20.7506 0.897154 19.8658 0.870787 18.7323C0.844429 17.5988 1.02885 13.8843 1.81967 11.9579C2.61049 10.0316 3.09773 8.7224 3.70403 7.60207C4.31032 6.48175 4.8446 5.80296 5.32568 5.58549C5.80676 5.36801 8.48899 4.28012 9.37866 4.28012C10.2683 4.28012 10.5314 4.89989 10.5314 4.89989L10.8413 5.58549C10.8413 5.58549 12.9253 5.18957 13.9865 5.189C15.0477 5.18844 17.159 5.58549 17.159 5.58549L17.4689 4.89989C17.4689 4.89989 17.732 4.28012 18.6216 4.28012ZM18.5249 12.5049C18.5141 12.5048 18.5032 12.5048 18.4923 12.5049C17.1952 12.5049 16.1437 13.6399 16.1437 15.0399C16.1437 16.44 17.1952 17.5749 18.4923 17.5749C19.7894 17.5749 20.8409 16.44 20.8409 15.0399C20.8411 13.6535 19.8093 12.5242 18.5249 12.5049H18.5249ZM9.50797 12.5049C9.4971 12.5048 9.48623 12.5048 9.47536 12.5049C8.19102 12.5242 7.15925 13.6535 7.15937 15.0399C7.15937 16.44 8.21088 17.5749 9.50798 17.5749C10.8051 17.5749 11.8566 16.44 11.8566 15.0399C11.8566 13.6399 10.8051 12.5049 9.50798 12.5049H9.50797Z" fill="black"/>
        </svg>
      </a>
    </div>
  )
}

const MainContent  = ({isNight, setIsNight}) => {
  const nightAvatarRef = useRef()
  const dayAvatarRef = useRef()

  const switchToDay = () => {
    setIsNight(false)
    setTimeout(() => {
      nightAvatarRef.current.style.opacity = '0'
      dayAvatarRef.current.style.opacity = '1'
    }, 800);
    console.log(nightAvatarRef.current, dayAvatarRef.current)
  }

  const switchToNight = () => {
    setIsNight(true)
    setTimeout(() => {
      dayAvatarRef.current.style.opacity = '0'
      nightAvatarRef.current.style.opacity = '1'
    }, 800);
    console.log(nightAvatarRef.current, dayAvatarRef.current)
  }

  return(
  <main className={style.mainContent}>
    <Background/>
    <Avatar isNight={isNight} dayAvatarRef={dayAvatarRef} nightAvatarRef={nightAvatarRef}/>
    <div className={style.dayNightContainer}>
      <span className={style.switchInfo}>Switch</span>
      <span className={style.day} onClick={switchToDay}>Day</span>
      <span className={style.night} onClick={switchToNight}>Night</span>
    </div>
  </main>
  )
}


const Background = () => {
  return (
    <div className={style.backgroundContainer}>
      <img src="/images/city-bg.webp" alt="City background" className={style.bg}/>
      <div></div>
      <div></div>
    </div>
  )
}

const Avatar = ({isNight, nightAvatarRef, dayAvatarRef}) => {

  return (
    <div className={style.avatarContainer}>
      <div ref={dayAvatarRef} className={`${style.dayAvatarContainer} ${style.glitchEffect}`}>
        <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/>
        <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/>
        <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/>
        <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/>
        {/* <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/> */}
        {/* <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgDay} ${style.glitchImg} `}/> */}
      </div>

      <div ref={nightAvatarRef} className={`${style.glitchEffect} ${style.nightAvatarContainer}`}>
        <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} />
        <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} />
        <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} />
        <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} />
        {/* <img src="/images/day-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} /> */}
        {/* <img src="/images/night-avatar.webp" alt="Elrond mafia character" className={`${style.avatarImgNight} ${style.glitchImg}`} /> */}
      </div>

      <img src="/images/red-bg.webp" alt="Red background blur" className={style.redBgBlur} />
      <img src="/images/red-bg.webp" alt="Red background" className={style.redBg} />
    </div>
  )
}
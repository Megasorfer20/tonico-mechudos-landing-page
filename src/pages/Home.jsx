import { useEffect, useState } from 'react';
import Sha256 from 'crypto-js/sha256';

import Navbar from "../components/Navbar";
import EnvioGratisLine from '../components/EnvioGratisLine';
import BuyButton from '../components/BuyButton';
import ResultCheck from '../components/ResultCheck';
import PhotosSection from '../components/PhotosSection';
import ProductDescription from '../components/ProductDescription';
import CommentsSection from '../components/CommentsSection';
import Modal60s from '../components/Modal60s';
import DataModal from '../components/DataModal';
import Offer from '../components/Offer';
import PrincipalSection from '../components/PrincipalSection';
import Background from '../components/Background';
import axios from 'axios';

function Home() {
    const [offerModal, setOfferModal] = useState(false);
    const [userData, setUserData] = useState(false);
    const [userScroll, setUserScroll] = useState(0);
    const [visitType, setVisitType] = useState("PC");
    const [comercial, setComercial] = useState({
        visit_number: 0,
        device: "PC",
        scroll_section: userScroll
    });

    let visita = 0;

    useEffect(() => {
        if (!userData) {
            setTimeout(() => {
                setOfferModal(true);
            }, 60000)
        }
    }, [userData]);

    const seeComercial = () => {
        if (window.innerWidth <= 768) {
            setVisitType("MOBILE");
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
            setVisitType("TABLE");
        } else {
            setVisitType("PC");
        }

        setComercial({
            visit_number: visita,
            device: visitType,
            scroll_section: Math.floor(userScroll)
        });
    }

    window.addEventListener('scroll', () => {
        setUserScroll(window.scrollY);
    });

    window.onload = (async () => {
        if (sessionStorage.getItem("vidate")) {
            visita = 1;
        } else {
            sessionStorage.setItem("vidate", Sha256(window.screen + "awesome"));
        }
    })();

    const pageSalir = (ev) => {
        seeComercial();
        if (true) {
            ev.preventDefault();
            if (!comercial.scroll_section == 0 && !comercial.visit_number == 0) {
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/comercial/api`, comercial);
            }

            return ""
        }
    };

    window.addEventListener("beforeunload", pageSalir);

    return (
        <div className="app" id="elementIP">
            <Background />
            <Navbar setModal={setUserData} />
            <PrincipalSection />
            <EnvioGratisLine />
            <Offer setModal={setUserData} />
            <BuyButton setModal={setUserData} />
            <ResultCheck />
            <div className="app__alignment">
                <ProductDescription />
                <PhotosSection />
            </div>
            <BuyButton setModal={setUserData} />
            <CommentsSection />
            <Modal60s modal={offerModal} setModal={setOfferModal} setModalBuyButton={setUserData} />
            <DataModal modal={userData} setModal={setUserData} />
        </div>
    )
}

export default Home;
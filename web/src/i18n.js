import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "mk",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en:{
            translation: {
                "Home": "HOME",
                "Services": "SERVICES",
                "About": "ABOUT",
                "Contact": "CONTACT US",
                "BusinessName":"Locksmith NENO",
                "BusinessSlogan":"Professional Locksmith Services, working, improving and expanding since 2007",
                "ServicesTitle":"Our Services",
                "HomeKeys":"Keys for inner doors, locks, safes and more",
                "CarKeys":"Car keys, motorcycle keys, remotes for garage doors, aftermarket car remotes, batteries, shells and much more",
                "ISEO":"High-end Italian cylinders, padlocks, door pushers, electric door locks, smart door locks etc.",
                "Diag":"DTC reading, DPF off, EGR off, IMMO off, module coding, ECU replacement, chip tunning...",
                "AboutTitle":"About Us",
                "AboutBio":"Keymaker NENO works and improves since 2007",
                "ContactTitle":"Contacts",
                "EmergencyNum":"Emergency Number",
                "WorkshopNum":"Workshop Number",
                "WarehouseNum":"Warehouse Number",
                "WorkingHours":"Working Hours",
                "MonFri":"Monday - Friday",
                "Sat":"Saturday",
                "Sun":"Sunday",
                "Closed":"Closed",
                "Copyright":"All rights reserved 2024. Locksmith NENO by",
                "News":"News",
                "Edit":"Edit",
                "Delete":"Delete",
                "Add":"Add",
                "DeleteNews":"Are you sure you want to delete this news?",
                "Cancel":"Cancel",
                "NoNewsFnd":"No news found"
            }
        },
        mk:{
            translation: {
                "Home": "ПОЧЕТНА",
                "Services": "УСЛУГИ",
                "About": "ЗА НАС",
                "Contact": "КОНТАКТИ",
                "BusinessName":"Клучар НЕНО",
                "BusinessSlogan":"Професионални клучарски услуги, работиме, се подобруваме и шириме од 2007 година",
                "ServicesTitle":"Нашите Услуги",
                "HomeKeys":"Клучеви за внатрешни врати, катанци, сефови и многу други",
                "CarKeys":"Клучеви за автомобили, мотори, далечински за гаражни врати, афтермаркет клучеви за автомобили, батерии, кучишта за клучеви и уште многу",
                "ISEO":"Висококвалитетни Италијански цилиндри, катанци, буткачи за врати, електрични брави за врати, паметни брави за врати и многу повеќе",
                "Diag":"Читање на DTC, DPF off, EGR off, IMMO off, кодирање на модули, замена на ECU, чип тјунинг...",
                "AboutTitle":"За Нас",
                "AboutBio":"Клучар НЕНО работи и се подобрува од 2007 година",
                "ContactTitle":"Контакти",
                "EmergencyNum":"Број за итни случаи",
                "WorkshopNum":"Број од работилницата",
                "WarehouseNum":"Број за магацинот",
                "WorkingHours":"Работно Време",
                "MonFri":"Понеделник - Петок",
                "Sat":"Сабота",
                "Sun":"Недела",
                "Closed":"Затворено",
                "Copyright":"Сите права задржани 2024. Клучар НЕНО од",
                "News":"Новости",
                "Edit":"Измени",
                "Delete":"Избриши",
                "Add":"Додади",
                "DeleteNews":"Дали сте сигурни дека сакате да ја избришете оваа вест?",
                "Cancel":"Откажи",
                "NoNewsFnd":"Нема вести"
            }
        }
    },
  });

export default i18n;

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { FaAnchor, FaImage, FaRegFileArchive, FaRegFilePdf } from 'react-icons/fa';
import styles from './accordion.module.scss';
import OnloadPopup from "../../Common/OnloadPopup";

const Accordion = ({ component }) => {
    const { order, type, items } = component;
    const [activeAccordionItem, setActiveAccordionItem] = useState(-1);
    return items ? items.map((item, index) => <AccordionItem key={`accordion-$index`} index={index}
        activeAccordionItem={activeAccordionItem}
        setActiveAccordionItem={setActiveAccordionItem}
        item={item} />) : <></>;
};

const AccordionItem = ({ item, index, activeAccordionItem, setActiveAccordionItem }) => {
    const [active, setActive] = useState('');
    const accordionElement = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupImage, setPopupImage] = useState();
    const [popupImageAlt, setPopupImageAlt] = useState();

    useEffect(() => {
        if (index == activeAccordionItem) {
            setActive("is-open");
            accordionElement.current.style.maxHeight = accordionElement.current.scrollHeight + "px";
        } else {
            setActive("");
            accordionElement.current.style.maxHeight = null;
        }
    }, [index, activeAccordionItem])

    const toggleActive = (e) => {
        e.preventDefault();
        if (index == activeAccordionItem) {
            setActiveAccordionItem(null)
        } else {
            setActiveAccordionItem(index)
        }
    }

    return <><div className="parent_accordion">
        {item.heading &&
            <a href="#" className={`${active} accordion`} onClick={(e) => toggleActive(e)}>{parse(item.heading)}</a>}
        {item.question &&
            <a href="#" className={`${active} accordion`} onClick={(e) => toggleActive(e)}>{parse(item.question)}</a>}
        <div ref={accordionElement} className="accordion-content">
            <div className="accordion_items">
                <div className={styles.accItemsContainer}>{item.content && <p>{parse(item.content)}</p>}</div>
                {item.linksItem && <ul className={styles.pdf_download}>
                    {item.linksItem.map((item, index) => (
                        <li key={index}>
                            <span>{item.linkText && parse(item.linkText)}</span>
                            {item.linkZip && <a href={item.linkZip} target="_blank" rel="noopener noreferrer" className={styles.download_button}><FaRegFileArchive /> ZIP</a>}
                            {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.download_button}><FaRegFilePdf /> PDF</a>}
                        </li>
                    ))}
                </ul>}
                {item.financial && item.financial.map(fin => <>
                    <h4>{fin.fyear}</h4>
                    <ul className={styles.pdf_download}>
                        {fin.linksItem && fin.linksItem.map((single, index) => {
                            return <li key={index}>
                                <span>{single.linkText && parse(single.linkText)}</span>
                                {single.image && <button type='button' onClick={(e) => { setPopupImage(single.image); setPopupImageAlt(single.linkText); setShowPopup(true); }} className={styles.download_button}><FaImage /> View</button>}
                                {single.urlLink && <a href={single.urlLink} target="_blank" rel="noopener noreferrer" className={styles.download_button}><FaAnchor /> View</a>}
                                {single.linkZip && <a href={single.linkZip} target="_blank" rel="noopener noreferrer" className={styles.download_button}><FaRegFileArchive /> ZIP</a>}
                                {single.link && <a href={single.link} target="_blank" rel="noopener noreferrer" className={styles.download_button}><FaRegFilePdf /> PDF</a>}
                            </li>
                        }
                        )}
                    </ul>
                </>)}
            </div>
        </div>
    </div>
        <OnloadPopup trigger={showPopup} setTrigger={setShowPopup}>
            {popupImage && <img src={popupImage} alt={popupImageAlt} />}
            {!popupImage && <p>Oops! Something went wrong.</p>}
        </OnloadPopup>
    </>
}

export default Accordion;
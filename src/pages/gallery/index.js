import React, { useState, useCallback} from 'react';
import Layout from '../../components/Layout';
import HeroInner from '../../components/templates/HeroInner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from './gallery.module.scss';
const photos = [
    {
      src: "/images/destinations_cancun.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_dominican_republic.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_florida.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_hawaii.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_nyc.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_riviera_maya.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_st_lucia.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_vegas.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/images/destinations_hawaii.jpg",
      width: 4,
      height: 3
    }
  ];

const GalleryPage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

  return (
    <Layout title="Gallery" description="Gallery page" keywords="Gallery page">
        <HeroInner />
        <section className={styles.gallery_page_wrap}>
            <div className={styles.container}>
                <h2 className={styles.primary_header}>GALLERY</h2>
                <div className={styles.gallery}>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default GalleryPage
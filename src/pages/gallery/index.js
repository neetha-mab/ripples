import React, { useState, useCallback} from 'react';
import Layout from '../../components/Layout';
import HeroInner from '../../components/templates/HeroInner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from './gallery.module.scss';
const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
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
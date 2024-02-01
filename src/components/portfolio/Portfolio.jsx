/** @format */

import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React App',
    img: '/Kasa.webp',
    desc: "Kasa, un site novateur de location d'appartements entre particuliers, est une expérience immersive construite avec la puissance de React App. Le site offre une plateforme conviviale et moderne qui simplifie le processus de recherche, de réservation et de location d'hébergements uniques. Grâce à une interface utilisateur intuitive, les utilisateurs peuvent parcourir une vaste gamme d'appartements soigneusement répertoriés, bénéficiant d'une navigation fluide et d'une mise en page responsive pour une expérience optimale sur tous les appareils",
  },
  {
    id: 2,
    title: 'Projet JavaScript ',
    img: '/sophie.webp',
    desc: "Le site portfolio de l'architecte d'intérieur Sophie Bluel offre une immersion captivante dans son univers créatif et raffiné. À travers une interface élégante et intuitive, Sophie présente ses réalisations exceptionnelles, mettant en lumière son expertise dans la transformation d'espaces intérieurs en œuvres d'art fonctionnelles. Chaque projet est minutieusement documenté, illustrant sa capacité à harmoniser les éléments esthétiques avec une fonctionnalité pratique. ",
  },
  {
    id: 3,
    title: 'Site Vitrine Photographe',
    img: '/nina.webp',
    desc: "Le site vitrine de la photographe Nina Carducci est une élégante exposition numérique de son talent artistique capturant des moments uniques à travers son objectif. Réalisé avec soin, ce site met en avant ses portfolios diversifiés, révélant la profondeur de sa créativité et son habileté à saisir l'essence de chaque sujet. L'interface épurée et la navigation intuitive permettent aux visiteurs de plonger dans l'univers visuel de Nina, offrant une expérience immersive qui met en valeur la beauté de chaque photographie.",
  },
  {
    id: 4,
    title: 'Projet Node.js ',
    img: 'grimoire.webp',
    desc: "Le projet Mon Vieux Grimoire s'inscrit dans le cadre du développement d'une plateforme de référencement et de notation de livres pour une chaîne de librairies. En tant que développeur, j'ai pris en charge la réalisation du backend en utilisant Node.js. Cette plateforme permettra aux passionnés de littérature de découvrir, évaluer et partager leurs avis sur une vaste gamme de livres. Grâce à Node.js, j'ai mis en place une infrastructure robuste pour gérer efficacement les données, permettant ainsi une expérience utilisateur fluide et interactive.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>lien Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>MES TRAVAUX</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

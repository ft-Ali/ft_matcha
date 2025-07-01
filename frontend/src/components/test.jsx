import React, { useRef, useEffect, useState } from 'react';

const InkwellAnimation = () => {
  const containerRef = useRef(null);
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calcul du progrès de scroll basé sur la position de l'élément
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        
        setScrollProgress(progress);
      }
    };

    // Optimisation des performances avec throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Styles inline pour éviter les dépendances CSS externes
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '400vh',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      overflow: 'hidden',
    },
    stickyWrapper: {
      position: 'sticky',
      top: '0',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: '1200px',
      perspectiveOrigin: 'center center',
    },
    scene: {
      position: 'absolute',
      width: 'min(85vw, 700px)',
      height: 'min(70vh, 500px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 40px',
      borderRadius: '20px',
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      transformOrigin: 'center center',
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    scene1: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 69, 193, 0.9) 100%)',
    },
    scene2: {
      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9) 0%, rgba(249, 115, 22, 0.9) 100%)',
    },
    scene3: {
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)',
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: '800',
      margin: '0 0 1.5rem 0',
      color: 'white',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      lineHeight: '1.1',
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
      fontWeight: '400',
      margin: '0',
      color: 'rgba(255, 255, 255, 0.95)',
      lineHeight: '1.6',
      maxWidth: '600px',
    },
    progressIndicator: {
      position: 'fixed',
      top: '50%',
      right: '30px',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
    },
    activeDot: {
      background: 'white',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
    },
  };

  // Calculs des transformations pour chaque scène
  const getScene1Transform = () => {
    const progress = Math.min(scrollProgress * 2.5, 1);
    const isActive = scrollProgress < 0.35;
    
    return {
      transform: `
        perspective(1200px) 
        rotateX(${progress * 25}deg) 
        rotateY(${progress * -15}deg)
        rotateZ(${progress * 5}deg)
        translateZ(${progress * -150}px)
        scale(${1 - progress * 0.2})
      `,
      opacity: isActive ? 1 - progress * 1.2 : 0,
      zIndex: isActive ? 3 : 1,
    };
  };

  const getScene2Transform = () => {
    const startPoint = 0.25;
    const endPoint = 0.75;
    const normalizedProgress = Math.max(0, Math.min(1, 
      (scrollProgress - startPoint) / (endPoint - startPoint)
    ));
    
    const isActive = scrollProgress >= startPoint && scrollProgress <= endPoint;
    const rotationX = Math.sin(normalizedProgress * Math.PI) * 45;
    const rotationY = (normalizedProgress - 0.5) * 60;
    const scale = 0.8 + Math.sin(normalizedProgress * Math.PI) * 0.3;
    
    return {
      transform: `
        perspective(1200px) 
        rotateX(${rotationX}deg) 
        rotateY(${rotationY}deg)
        rotateZ(${normalizedProgress * 10}deg)
        translateZ(${Math.sin(normalizedProgress * Math.PI) * 80}px)
        scale(${scale})
      `,
      opacity: isActive ? Math.sin(normalizedProgress * Math.PI) * 1.3 : 0,
      zIndex: isActive ? 3 : 1,
    };
  };

  const getScene3Transform = () => {
    const startPoint = 0.65;
    const progress = Math.max(0, (scrollProgress - startPoint) / (1 - startPoint));
    const isActive = scrollProgress > startPoint;
    
    return {
      transform: `
        perspective(1200px) 
        rotateX(${(1 - progress) * -20}deg) 
        rotateY(${(1 - progress) * 30}deg)
        rotateZ(${(1 - progress) * -8}deg)
        translateZ(${progress * 30}px)
        scale(${0.8 + progress * 0.2})
      `,
      opacity: isActive ? progress * 1.8 : 0,
      zIndex: isActive ? 3 : 1,
    };
  };

  // Déterminer quelle scène est active pour l'indicateur
  const getActiveScene = () => {
    if (scrollProgress < 0.35) return 0;
    if (scrollProgress < 0.75) return 1;
    return 2;
  };

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Indicateur de progression */}
      <div style={styles.progressIndicator}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              ...(getActiveScene() === index ? styles.activeDot : {}),
            }}
          />
        ))}
      </div>

      <div style={styles.stickyWrapper}>
        {/* Scène 1 - Intelligence Layer */}
        <div 
          ref={scene1Ref}
          style={{
            ...styles.scene,
            ...styles.scene1,
            ...getScene1Transform(),
          }}
        >
          <h1 style={styles.title}>Intelligence Layer</h1>
          <p style={styles.subtitle}>
            L'IA sur mesure et l'ingéniosité humaine s'unissent pour transformer radicalement votre entreprise
          </p>
        </div>

        {/* Scène 2 - Optimisation */}
        <div 
          ref={scene2Ref}
          style={{
            ...styles.scene,
            ...styles.scene2,
            ...getScene2Transform(),
          }}
        >
          <h1 style={styles.title}>Optimise les Processus</h1>
          <p style={styles.subtitle}>
            Réduction des coûts et optimisation des flux de travail grâce à l'intelligence artificielle avancée
          </p>
        </div>

        {/* Scène 3 - Créativité */}
        <div 
          ref={scene3Ref}
          style={{
            ...styles.scene,
            ...styles.scene3,
            ...getScene3Transform(),
          }}
        >
          <h1 style={styles.title}>Alimente la Créativité</h1>
          <p style={styles.subtitle}>
            Libérez le potentiel créatif de vos équipes avec des outils d'IA personnalisés et innovants
          </p>
        </div>
      </div>
    </div>
  );
};

export default InkwellAnimation;
